/*
 * VÉRIFICATION DES DONNÉES (sans navigateur)
 * Lancer depuis la racine du dépôt :  node tests/verifier.js
 * Contrôle toutes les séances déclarées dans index.html : champs obligatoires, rappels et passerelles
 * qui pointent vers des séances existantes, outils et clés uniques, réglages des moteurs, liens https,
 * tableaux bien formés, situations de la boîte à outils, faits datés (data/actualites.js).
 * Code de sortie 1 s'il y a une erreur : à corriger avant de publier.
 */
global.window = {};
var fs = require("fs"), path = require("path");
var racine = path.join(__dirname, "..");
var html = fs.readFileSync(path.join(racine, "index.html"), "utf8");
var scripts = [];
html.replace(/src="((?:js|data)\/[^"]+)"/g, function (_, f) { scripts.push(f); });
// On charge les données (et la config), pas le code d'interface.
scripts.filter(function (f) { return /^data\//.test(f) || f === "js/config.js"; }).forEach(function (f) {
  require(path.join(racine, f));
});

var S = window.CAP_SEANCES, erreurs = [], avertissements = [];
function E(m) { erreurs.push(m); }
function A(m) { avertissements.push(m); }

// --- index.html et sw.js listent les mêmes fichiers ---
var sw = fs.readFileSync(path.join(racine, "sw.js"), "utf8");
scripts.forEach(function (f) { if (sw.indexOf('"' + f + '"') < 0) E("sw.js : " + f + " manque dans FICHIERS"); });
fs.readdirSync(path.join(racine, "data")).forEach(function (f) {
  if (scripts.indexOf("data/" + f) < 0) E("index.html : data/" + f + " n'est pas chargé");
});

var ids = {}, outils = {}, cles = {};
var piliers = {}; (window.CAP_PILIERS || []).forEach(function (p) { piliers[p.id] = p; });
var niveaux = (window.CAP_NIVEAUX || []).map(function (n) { return n.id; });
S.forEach(function (s) { if (ids[s.id]) E("séance en double : " + s.id); ids[s.id] = s; });

var OBLIG = ["id", "pilier", "niveau", "num", "duree", "titre", "objectif", "aqcms", "activites", "retenir", "ressource", "verifie", "plusLoin", "adulte"];
var BESOINS = {
  cartes: ["manches"], choisir: ["cle", "cartes", "max"], scenario: ["id", "cas"], quiz: ["id", "questions"],
  carnet: ["cle", "champs"], liste: ["cle", "champs"], jauges: ["items"], tas: ["cle", "cartes", "tas", "garder"],
  reformuler: ["items", "champs", "gabarit"], debat: ["affirmations"], binome: ["sujets"], defi: ["joueurs", "options"],
  repertoire: ["themes", "items"], cercles: ["cle", "cercles"], retouche: ["etapes"], motdepasse: [], coherence: [],
  budget: ["id", "ressources", "depenses"], epargne: ["id", "placements"], credit: ["id"]
};

function blocs(s) { return (s.activites || []).concat(s.traces || []); }

S.forEach(function (s) {
  var ou = s.id;
  OBLIG.forEach(function (k) { if (s[k] == null) E(ou + " : champ « " + k + " » manquant"); });
  if (!piliers[s.pilier]) E(ou + " : pilier inconnu " + s.pilier);
  if (niveaux.indexOf(s.niveau) < 0) E(ou + " : niveau inconnu " + s.niveau);
  if (s.rappel && s.rappel.seance && !ids[s.rappel.seance]) E(ou + " : rappel vers une séance inconnue " + s.rappel.seance);
  (s.passerelles || []).forEach(function (p) { if (!ids[p]) E(ou + " : passerelle vers une séance inconnue " + p); });
  if (s.aqcms) ["pourquoi", "apport", "ou", "lie"].forEach(function (k) { if (!s.aqcms[k]) E(ou + " : aqcms." + k + " manquant"); });
  (s.plusLoin || []).forEach(function (r) {
    if (!/^https:\/\//.test(r.url || "")) E(ou + " : lien non https " + r.url);
    ["titre", "source", "description"].forEach(function (k) { if (!r[k]) E(ou + " : lien sans " + k); });
  });
  if (s.ressource) (s.ressource.blocs || []).forEach(function (b) {
    if (["texte", "liste", "etapes", "tableau", "roue"].indexOf(b.type) < 0) E(ou + " : bloc de fiche inconnu " + b.type);
    if (b.type === "tableau") b.lignes.forEach(function (l) { if (l.length !== b.colonnes.length) E(ou + " : ligne de tableau mal formée dans « " + b.titre + " »"); });
  });
  (s.verifie || []).forEach(function (q) { verifierQuestion(ou + " (Je vérifie)", q); });
  if (s.adulte && !Array.isArray(s.adulte.deroule)) E(ou + " : adulte.deroule manquant");

  blocs(s).forEach(function (a) {
    var o = ou + " · « " + a.titre + " »", c = a.config;
    if (a.facultatif != null && typeof a.facultatif !== "boolean") E(o + " : « facultatif » doit valoir true ou false");
    if (!BESOINS[a.moteur]) return E(o + " : moteur inconnu " + a.moteur);
    if (!c) return E(o + " : config manquante");
    BESOINS[a.moteur].forEach(function (k) { if (c[k] == null) E(o + " : " + a.moteur + " sans « " + k + " »"); });
    if (a.outil) {
      if (outils[a.outil.id]) E("outil en double : " + a.outil.id + " (" + ou + ")");
      outils[a.outil.id] = { bloc: a, seance: s };
      if (!a.outil.nom || !a.outil.description) E(o + " : outil sans nom ou description");
    }
    if (c.cle) { if (cles[c.cle]) E("clé d'enregistrement en double : " + c.cle + " (" + ou + " et " + cles[c.cle] + ")"); cles[c.cle] = ou; }
    verifierConfig(o, a.moteur, c);
    if (a.parFiliere) Object.keys(a.parFiliere).forEach(function (f) {
      var x = a.parFiliere[f];
      if (["ciel", "securite"].indexOf(f) < 0) E(o + " : filière inconnue " + f);
      var fusion = JSON.parse(JSON.stringify(c));
      Object.keys(x).forEach(function (k) {
        if (k === "config") Object.keys(x.config).forEach(function (r) { fusion[r] = x.config[r]; });
        else if (k === "cartes" && fusion.manches) fusion.manches[0].cartes = fusion.manches[0].cartes.concat(x.cartes);
        else if (Array.isArray(x[k]) && Array.isArray(fusion[k])) fusion[k] = fusion[k].concat(x[k]);
        else fusion[k] = x[k];
      });
      verifierConfig(o + " [" + f + "]", a.moteur, fusion);
    });
  });
});

function verifierQuestion(o, q) {
  if (q.type === "qcm" && (!q.options || q.options[q.bonne] == null)) E(o + " : QCM sans bonne réponse valide");
  if (q.type === "vf" && typeof q.bonne !== "boolean") E(o + " : vrai/faux sans réponse");
  if (q.type === "ordre" && !(q.elements && q.elements.length > 1)) E(o + " : question d'ordre vide");
  if (["qcm", "vf", "ouverte", "ordre"].indexOf(q.type) < 0) E(o + " : type de question inconnu " + q.type);
}
function verifierConfig(o, m, c) {
  if (m === "cartes") c.manches.forEach(function (ma) {
    if (ma.type === "classer") ma.cartes.forEach(function (x) { if (ma.categories.indexOf(x.reponse) < 0) E(o + " : réponse hors catégories « " + x.texte + " »"); });
  });
  if (m === "quiz") c.questions.forEach(function (q) { verifierQuestion(o, q); });
  if (m === "choisir") { if ((c.min || 0) > c.max) E(o + " : min > max"); if (c.cartes.length < (c.min || 1)) E(o + " : moins de cartes que le minimum"); }
  if (m === "tas" && c.cartes.length < c.garder) E(o + " : moins de cartes que « garder »");
  if (m === "scenario") c.cas.forEach(function (cs) {
    if (!cs.noeuds[cs.depart]) E(o + " : départ introuvable dans « " + cs.titre + " »");
    Object.keys(cs.noeuds).forEach(function (k) {
      (cs.noeuds[k].choix || []).forEach(function (ch) { if (ch.ok !== false && !cs.noeuds[ch.vers]) E(o + " : choix vers un nœud inconnu « " + ch.vers + " »"); });
    });
  });
  if (m === "reformuler") {
    var ks = c.champs.map(function (x) { return x.id; });
    (c.gabarit.match(/\{(\w+)\}/g) || []).forEach(function (t) { if (ks.indexOf(t.slice(1, -1)) < 0) E(o + " : gabarit avec un champ inconnu " + t); });
    (c.alertes || []).forEach(function (al) { try { new RegExp(al.motif, "i"); } catch (e) { E(o + " : motif d'alerte invalide " + al.motif); } });
  }
  if (m === "liste" && c.gabarit) {
    var kl = c.champs.map(function (x) { return x.id; });
    (c.gabarit.match(/\{(\w+)\}/g) || []).forEach(function (t) { if (kl.indexOf(t.slice(1, -1)) < 0) E(o + " : gabarit avec un champ inconnu " + t); });
  }
  if (c.afficher) (c.afficher.sources || []).concat(c.afficher.faireIci ? [c.afficher.faireIci] : []).forEach(function (x) {
    if (!outils[x] && !S.some(function (s) { return blocs(s).some(function (b) { return b.outil && b.outil.id === x; }); })) E(o + " : « afficher » vers un outil inconnu " + x);
  });
  if (m === "cercles") (c.importer || []).forEach(function (im) { if (!cles[im.cle] && !S.some(function (s) { return blocs(s).some(function (b) { return b.config && b.config.cle === im.cle; }); })) E(o + " : importe une clé inconnue " + im.cle); });
}

// --- Situations de la boîte à outils ---
if (window.CAP_SITUATIONS) {
  var classes = {};
  window.CAP_SITUATIONS.forEach(function (st) {
    (st.outils || []).forEach(function (oid) { if (!outils[oid]) E("situation « " + st.nom + " » : outil inconnu " + oid); classes[oid] = true; });
  });
  Object.keys(outils).forEach(function (oid) { if (!classes[oid]) A("outil rangé dans aucune situation : " + oid); });
}

// --- Faits datés ---
if (window.CAP_ACTU) {
  var v = new Date(window.CAP_ACTU.verifie), age = (Date.now() - v) / 864e5;
  if (isNaN(age)) E("data/actualites.js : date de vérification invalide");
  else if (age > 365) A("data/actualites.js vérifié il y a plus d'un an (" + window.CAP_ACTU.verifie + ") : relire les faits datés");
  var tout = fs.readdirSync(path.join(racine, "data")).filter(function (f) { return f !== "actualites.js"; })
    .map(function (f) { return fs.readFileSync(path.join(racine, "data", f), "utf8"); }).join("\n");
  Object.keys(window.CAP_ACTU.faits || {}).forEach(function (k) {
    var f = window.CAP_ACTU.faits[k];
    if (!f.source) E("fait daté sans source : " + k);
    if (tout.indexOf('A("' + k + '")') < 0) A("fait daté jamais utilisé : " + k);
  });
  window.CAP_ACTU.manquants.forEach(function (k) { E("une séance utilise un fait daté inconnu : A(\"" + k + "\")"); });
}

var denses = S.filter(function (s) { return !s.temps && (s.activites || []).length >= 4 && !(s.activites || []).some(function (a) { return a.facultatif; }); });
denses.forEach(function (s) { A(s.id + " : 4 activités ou plus, aucune marquée facultative"); });
console.log(S.length + " séances, " + Object.keys(outils).length + " outils vérifiés.");
avertissements.forEach(function (m) { console.log("  À regarder : " + m); });
erreurs.forEach(function (m) { console.log("  ERREUR : " + m); });
console.log(erreurs.length ? erreurs.length + " erreur(s)." : "Aucune erreur.");
process.exit(erreurs.length ? 1 : 0);
