/*
 * PASSEPORT DE COMPÉTENCES ET CONFORT DE LECTURE
 * - #/passeport : ce que l'élève a fait et ce qu'il sait faire, pilier par pilier, à partir de ce qui est
 *   déjà sur son appareil (séances faites, bilans, traces à rendre). Il l'enregistre en PDF pour un
 *   entretien, une PFMP ou un dossier. Rien n'est envoyé : c'est l'élève qui choisit de le montrer.
 * - Confort de lecture : texte plus grand, mode « dys » (espacement), lecture à voix haute avec la voix
 *   du téléphone ou de l'ordinateur. Réglages gardés sur l'appareil.
 */
(function () {
  "use strict";
  var h = window.h;
  var SEANCES = window.CAP_SEANCES || [], PILIERS = window.CAP_PILIERS || [], NIVEAUX = window.CAP_NIVEAUX || [];
  function nomNiveau(id) { var n = NIVEAUX.filter(function (x) { return x.id === id; })[0]; return n ? n.nom : id; }
  function estFaite(id) { var p = Store.get("progres", {})[id]; return !!(p && p.activite && p.verifie); }
  function rempli(cle) {
    var d = Store.get(cle, null);
    return !!(d && (Array.isArray(d) ? d.length : (d.choix ? d.choix.length : Object.keys(d).some(function (k) { return (d[k] || "").toString().trim(); }))));
  }
  function mot(v) { return v >= 8 ? "Je maîtrise" : v >= 5 ? "Je me débrouille" : v >= 3 ? "Je progresse" : "Je débute"; }

  // ---------- Passeport ----------
  function contenu(pourImpression) {
    var racine = h("div", { class: "pile passeport" });
    var rien = true;
    PILIERS.filter(function (p) { return p.actif; }).forEach(function (p) {
      var ss = SEANCES.filter(function (s) { return s.pilier === p.id; });
      if (!ss.length) return;
      var faites = ss.filter(function (s) { return estFaite(s.id); });
      var bilans = [], traces = [];
      ss.forEach(function (s) {
        (s.activites || []).concat(s.traces || []).forEach(function (a) {
          if (a.moteur === "jauges" && a.config.cle) {
            var v = Store.get(a.config.cle, null);
            if (v && Object.keys(v).length) bilans.push({ titre: a.titre, items: a.config.items, valeurs: v });
          }
          if (a.rendre && a.config && a.config.cle && rempli(a.config.cle)) traces.push({ nom: a.titre, id: a.outil && a.outil.id });
        });
      });
      if (!faites.length && !bilans.length && !traces.length) {
        if (!pourImpression) racine.appendChild(h("section", { class: "carte pile passeport-pilier vide", style: "--p:" + p.couleur },
          h("h2", { class: "titre-bloc" }, h("span", { class: "ens-pastille", "aria-hidden": "true" }), p.nom),
          h("p", { class: "texte-doux", style: "margin:0" }, "Rien pour l'instant. ", h("a", { href: "#/pilier/" + p.id }, "Commencer une séance"))));
        return;
      }
      rien = false;
      var sec = h("section", { class: "carte pile passeport-pilier", style: "--p:" + p.couleur },
        h("h2", { class: "titre-bloc" }, h("span", { class: "ens-pastille", "aria-hidden": "true" }), p.nom + " · " + p.sous));
      if (faites.length) {
        sec.appendChild(h("p", { style: "margin:0" }, h("strong", { text: faites.length + " séance" + (faites.length > 1 ? "s" : "") + " faite" + (faites.length > 1 ? "s" : "") + " sur " + ss.length + ". " })));
        sec.appendChild(h("ul", { class: "passeport-liste" }, faites.map(function (s) { return h("li", null, h("strong", { text: s.titre }), " (" + nomNiveau(s.niveau) + ") : " + (s.objectifCourt || s.objectif)); })));
      }
      bilans.forEach(function (b) {
        sec.appendChild(h("h3", { class: "passeport-sous", text: b.titre + " (mon auto-évaluation)" }));
        var liste = h("ul", { class: "passeport-jauges" });
        b.items.forEach(function (it, k) {
          var v = b.valeurs[k]; if (v == null) return;
          liste.appendChild(h("li", null,
            h("span", { class: "entre" }, h("span", { text: it }), h("span", { class: "texte-doux", style: "white-space:nowrap", text: mot(v) + " · " + v + " / 10" })),
            h("span", { class: "progression", role: "img", "aria-label": it + " : " + v + " sur 10" }, h("span", { style: "width:" + v * 10 + "%;background:" + p.couleur }))));
        });
        sec.appendChild(liste);
      });
      if (traces.length) {
        sec.appendChild(h("h3", { class: "passeport-sous", text: "Mes productions" }));
        sec.appendChild(h("ul", { class: "passeport-liste" }, traces.map(function (t) {
          return h("li", null, pourImpression || !t.id ? t.nom : h("a", { href: "#/outil/" + t.id, text: t.nom }));
        })));
      }
      racine.appendChild(sec);
    });
    if (pourImpression) racine.appendChild(h("div", { class: "passeport-visa" },
      h("p", { text: "Ce passeport est rempli par l'élève à partir de son travail dans Cap'Autonomie. Les niveaux sont une auto-évaluation." }),
      h("p", { text: "Visa de l'enseignant (facultatif) : ............................................   Date : ................" })));
    return { noeud: racine, vide: rien };
  }

  function pagePasseport() {
    document.documentElement.style.setProperty("--p", "#1B1F24");
    document.documentElement.style.setProperty("--p-fond", "#ECEEF1");
    var page = h("div", { class: "page" });
    page.appendChild(h("a", { class: "retour", href: "#/espace" }, window.icone("retour"), "Mon espace"));
    page.appendChild(h("h1", { class: "titre-page", text: "Mon passeport de compétences" }));
    page.appendChild(h("p", { class: "texte-doux", text: "Ce que tu as fait et ce que tu sais faire, pilier par pilier. Il se remplit tout seul quand tu avances. Tu peux l'enregistrer en PDF pour un entretien, une PFMP ou un dossier." }));
    var c = contenu(false);
    page.appendChild(h("div", { class: "ligne" },
      h("button", { class: "btn", type: "button", disabled: c.vide ? "disabled" : null, on: { click: function () {
        CapApp.imprimer("Mon passeport de compétences", contenu(true).noeud, { rendre: true });
      } } }, window.icone("imprime"), "Enregistrer en PDF")));
    if (c.vide) page.appendChild(h("p", { class: "note", text: "Ton passeport est encore vide : termine une séance (l'activité et « Je vérifie ») pour le commencer." }));
    page.appendChild(c.noeud);
    page.appendChild(h("p", { class: "note", text: "Ton passeport reste sur ton appareil. Il ne contient que les séances faites, tes auto-évaluations et le nom des traces « à rendre » : jamais le contenu de tes traces personnelles. C'est toi qui décides à qui tu le montres." }));
    return page;
  }

  // ---------- Confort de lecture ----------
  function confort() { return Store.get("confort", {}); }
  function appliquer() {
    var c = confort(), r = document.documentElement;
    r.classList.toggle("texte-grand", !!c.grand);
    r.classList.toggle("mode-dys", !!c.dys);
  }
  function sectionConfort() {
    var c = confort();
    function coche(id, cle, label, aide) {
      var inp = h("input", { type: "checkbox", id: id, on: { change: function () { var x = confort(); x[cle] = inp.checked; Store.set("confort", x); appliquer(); } } });
      if (c[cle]) inp.checked = true;
      return h("label", { class: "ens-coche", for: id }, inp, h("span", null, h("strong", { text: label }), aide ? h("span", { class: "texte-doux", text: " · " + aide }) : null));
    }
    return h("section", { class: "carte pile" },
      h("h2", { class: "titre-bloc", text: "Confort de lecture" }),
      coche("confort-grand", "grand", "Texte plus grand"),
      coche("confort-dys", "dys", "Lecture facilitée", "lettres et lignes plus espacées"),
      parole() ? h("p", { class: "note", text: "Dans chaque séance, le bouton « Écouter » lit le texte à voix haute avec la voix de ton appareil." }) : null);
  }

  // ---------- Lecture à voix haute ----------
  function parole() { return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window; }
  function arreter() { if (parole()) window.speechSynthesis.cancel(); }
  window.addEventListener("hashchange", arreter);
  function boutonEcouter(texte) {
    if (!parole()) return null;
    var enCours = false;
    var b = h("button", { class: "btn secondaire petit bouton-ecouter", type: "button", "aria-pressed": "false", text: "Écouter" });
    function fin() { enCours = false; b.textContent = "Écouter"; b.setAttribute("aria-pressed", "false"); }
    b.addEventListener("click", function () {
      if (enCours) { arreter(); fin(); return; }
      arreter();
      var morceaux = (typeof texte === "function" ? texte() : texte).filter(Boolean);
      morceaux.forEach(function (m, k) {
        var u = new SpeechSynthesisUtterance(m); u.lang = "fr-FR"; u.rate = 0.95;
        if (k === morceaux.length - 1) { u.onend = fin; u.onerror = fin; }
        window.speechSynthesis.speak(u);
      });
      enCours = true; b.textContent = "Arrêter la lecture"; b.setAttribute("aria-pressed", "true");
    });
    return b;
  }

  appliquer();
  window.CapPlus = { pagePasseport: pagePasseport, sectionConfort: sectionConfort, boutonEcouter: boutonEcouter };
})();
