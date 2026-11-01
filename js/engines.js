/*
 * MOTEURS D'ACTIVITÉS
 * Chaque moteur reçoit : (conteneur, config, ctx)
 *   ctx.fini()  -> à appeler quand l'élève a terminé l'activité
 *   ctx.pilier  -> données du pilier (couleurs)
 * Les contenus viennent des fichiers /data. Aucune donnée ne quitte l'appareil.
 */
(function () {
  // ---------- Petits utilitaires ----------
  function h(tag, attrs) {
    var el = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k === "on") Object.keys(v).forEach(function (ev) { el.addEventListener(ev, v[ev]); });
      else if (k === "style") el.setAttribute("style", v);
      else if (k === "value") el.value = v;
      else if (v === true) el.setAttribute(k, "");
      else el.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) ajouter(el, arguments[i]);
    return el;
  }
  function ajouter(el, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { ajouter(el, x); }); return; }
    el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
  }
  function vider(el) { while (el.firstChild) el.removeChild(el.firstChild); }
  function melanger(t) {
    var a = t.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  var LETTRES = "ABCDEFGH";
  function icone(nom) {
    var chemins = {
      fleche: "M9 6l6 6-6 6",
      retour: "M15 6l-6 6 6 6",
      coche: "M5 12l5 5 9-10",
      croix: "M6 6l12 12M18 6L6 18",
      relance: "M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4",
      imprime: "M7 9V3h10v6M7 18H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M7 14h10v7H7z",
      poubelle: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"
    };
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "18"); svg.setAttribute("height", "18"); svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none"); svg.setAttribute("stroke", "currentColor"); svg.setAttribute("stroke-width", "2.2");
    svg.setAttribute("stroke-linecap", "round"); svg.setAttribute("stroke-linejoin", "round"); svg.setAttribute("aria-hidden", "true");
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", chemins[nom] || "");
    svg.appendChild(p);
    return svg;
  }
  function annoncer(el) { try { el.focus({ preventScroll: false }); } catch (e) {} }

  // =====================================================================
  // 1. CARTES : manches « classer » (une carte -> une catégorie)
  //             ou « ordonner » (remettre des mots du plus faible au plus fort)
  // =====================================================================
  function cartes(zone, cfg, ctx) {
    var iManche = 0;
    function manche() {
      vider(zone);
      if (iManche >= cfg.manches.length) return finTout();
      var m = cfg.manches[iManche];
      if (m.type === "ordonner") return ordonner(m);
      return classer(m);
    }
    function entete(m) {
      return h("div", { class: "pile" },
        h("span", { class: "etiquette", text: "Manche " + (iManche + 1) + " sur " + cfg.manches.length }),
        h("h3", { class: "titre-bloc", text: m.titre }),
        m.consigne ? h("p", { class: "texte-doux", text: m.consigne }) : null);
    }
    function classer(m) {
      var liste = melanger(m.cartes), i = 0, score = 0;
      var barre = h("span", { style: "width:0%" });
      var corps = h("div", { class: "pile" });
      zone.appendChild(h("div", { class: "pile" }, entete(m), h("div", { class: "progression", "aria-hidden": "true" }, barre), corps));
      function carte() {
        vider(corps);
        barre.style.width = Math.round(i / liste.length * 100) + "%";
        if (i >= liste.length) {
          corps.appendChild(h("div", { class: "retour-info", tabindex: "-1" },
            h("strong", { text: "Manche terminée : " + score + " sur " + liste.length + ". " }),
            m.bilan || ""));
          corps.appendChild(h("button", { class: "btn pilier", type: "button", on: { click: function () { iManche++; manche(); } } },
            iManche + 1 < cfg.manches.length ? "Manche suivante" : "Terminer", icone("fleche")));
          annoncer(corps.firstChild);
          return;
        }
        var c = liste[i];
        var titreCarte = h("div", { class: "carte-jeu", tabindex: "-1" }, c.texte);
        var grille = h("div", { class: "choix-grille", role: "group", "aria-label": "Choisis une réponse" });
        var retour = h("div", { "aria-live": "polite" });
        corps.appendChild(h("span", { class: "texte-doux", text: "Carte " + (i + 1) + " sur " + liste.length }));
        corps.appendChild(titreCarte);
        corps.appendChild(grille);
        corps.appendChild(retour);
        m.categories.forEach(function (cat) {
          var b = h("button", { class: "option", type: "button", text: cat, on: { click: function () {
            var juste = cat === c.reponse;
            if (juste) score++;
            Array.prototype.forEach.call(grille.children, function (x) {
              x.disabled = true;
              if (x.textContent === c.reponse) x.classList.add("juste");
              else if (x === b) x.classList.add("faux");
            });
            vider(retour);
            retour.appendChild(h("div", { class: juste ? "retour-ok" : "retour-ko" },
              h("strong", { text: juste ? "Bien vu. " : "Pas tout à fait. C'est : " + c.reponse + ". " }),
              c.explication || ""));
            var suivant = h("button", { class: "btn", type: "button", style: "margin-top:10px", on: { click: function () { i++; carte(); } } }, "Carte suivante", icone("fleche"));
            retour.appendChild(suivant);
            suivant.focus();
          } } });
          grille.appendChild(b);
        });
        annoncer(titreCarte);
      }
      carte();
    }
    function ordonner(m) {
      var iSerie = 0, score = 0;
      var corps = h("div", { class: "pile" });
      zone.appendChild(h("div", { class: "pile" }, entete(m), corps));
      function serie() {
        vider(corps);
        if (iSerie >= m.series.length) {
          corps.appendChild(h("div", { class: "retour-info" }, h("strong", { text: "Manche terminée : " + score + " sur " + m.series.length + ". " }), m.bilan || ""));
          corps.appendChild(h("button", { class: "btn pilier", type: "button", on: { click: function () { iManche++; manche(); } } },
            iManche + 1 < cfg.manches.length ? "Manche suivante" : "Terminer", icone("fleche")));
          return;
        }
        var s = m.series[iSerie];
        var choisis = [];
        var melange = melanger(s.mots);
        var zoneOrdre = h("ol", { class: "ordre-liste", style: "list-style:none;padding:0;margin:0" });
        var boutons = h("div", { class: "choix-grille" });
        var retour = h("div", { "aria-live": "polite" });
        corps.appendChild(h("p", { class: "titre-bloc", text: (s.nom ? s.nom + " : " : "") + "du plus faible au plus fort" }));
        corps.appendChild(boutons);
        corps.appendChild(h("span", { class: "etiquette", text: "Ton ordre" }));
        corps.appendChild(zoneOrdre);
        corps.appendChild(retour);
        function maj() {
          vider(zoneOrdre);
          choisis.forEach(function (mot, k) {
            zoneOrdre.appendChild(h("li", { class: "ligne" }, h("span", { class: "ordre-rang", text: String(k + 1) }), h("span", { text: mot })));
          });
          if (!choisis.length) zoneOrdre.appendChild(h("li", { class: "texte-doux", text: "Touche les mots dans l'ordre." }));
          if (choisis.length === s.mots.length) verifier();
        }
        function verifier() {
          var juste = choisis.join("|") === s.mots.join("|");
          if (juste) score++;
          vider(retour);
          retour.appendChild(h("div", { class: juste ? "retour-ok" : "retour-ko" },
            h("strong", { text: juste ? "Exact. " : "Presque. " }),
            juste ? "" : "Ordre attendu : " + s.mots.join(" < ") + ". "));
          retour.appendChild(h("div", { class: "ligne", style: "margin-top:10px" },
            juste ? null : h("button", { class: "btn secondaire", type: "button", on: { click: serie } }, icone("relance"), "Réessayer"),
            h("button", { class: "btn", type: "button", on: { click: function () { iSerie++; serie(); } } }, "Suivant", icone("fleche"))));
        }
        melange.forEach(function (mot) {
          var b = h("button", { class: "option", type: "button", text: mot, on: { click: function () {
            if (b.disabled) return;
            b.disabled = true; b.classList.add("choisi");
            choisis.push(mot); maj();
          } } });
          boutons.appendChild(b);
        });
        maj();
      }
      serie();
    }
    function finTout() {
      zone.appendChild(h("div", { class: "retour-ok" }, h("strong", { text: "Activité terminée. " }), cfg.fin || ""));
      zone.appendChild(h("button", { class: "btn secondaire", type: "button", style: "margin-top:10px", on: { click: function () { iManche = 0; manche(); } } }, icone("relance"), "Rejouer"));
      if (ctx && ctx.fini) ctx.fini();
    }
    manche();
  }

  // =====================================================================
  // 2. CHOISIR : sélectionner des cartes (qualités, techniques…), sauvegardé
  // =====================================================================
  function choisir(zone, cfg, ctx) {
    var etat = Store.get(cfg.cle, { choix: [], perso: [] });
    function rendu() {
      vider(zone);
      var toutes = cfg.cartes.concat((etat.perso || []).map(function (p) { return { nom: p, perso: true }; }));
      var n = etat.choix.length;
      zone.appendChild(h("p", { class: "texte-doux", "aria-live": "polite", text: n + " choisi" + (n > 1 ? "s" : "") + " sur " + cfg.max + " maximum." }));
      var grille = h("div", { class: "grille-2 large-3", role: "group", "aria-label": cfg.titre || "Cartes" });
      toutes.forEach(function (c) {
        var sel = etat.choix.indexOf(c.nom) >= 0;
        grille.appendChild(h("button", {
          class: "option carte-select" + (sel ? " choisi" : ""), type: "button", "aria-pressed": sel ? "true" : "false",
          on: { click: function () {
            var k = etat.choix.indexOf(c.nom);
            if (k >= 0) etat.choix.splice(k, 1);
            else {
              if (etat.choix.length >= cfg.max) { CapApp.toast("Tu as déjà choisi " + cfg.max + " cartes. Retire-en une d'abord."); return; }
              etat.choix.push(c.nom);
            }
            Store.set(cfg.cle, etat); rendu();
            if (etat.choix.length >= (cfg.min || cfg.max) && ctx && ctx.fini) ctx.fini();
          } }
        }, h("span", { class: "coche" }, sel ? icone("coche") : null),
           h("span", null, c.nom, c.ex ? h("span", { class: "ex", text: c.ex }) : null)));
      });
      zone.appendChild(grille);
      if (cfg.perso) {
        var champ = h("input", { type: "text", id: cfg.cle + "-perso", maxlength: "60", placeholder: cfg.persoAide || "Ajouter la mienne" });
        zone.appendChild(h("form", { class: "ligne", style: "margin-top:4px", on: { submit: function (e) {
          e.preventDefault();
          var v = champ.value.trim();
          if (!v) return;
          etat.perso = etat.perso || [];
          if (etat.perso.indexOf(v) < 0) etat.perso.push(v);
          Store.set(cfg.cle, etat); rendu();
        } } },
          h("label", { class: "sr-only", for: cfg.cle + "-perso", text: "Ajouter une carte personnelle" }),
          h("div", { style: "flex:1;min-width:180px" }, champ),
          h("button", { class: "btn secondaire petit", type: "submit", text: "Ajouter" })));
      }
      if (etat.choix.length) {
        zone.appendChild(h("div", { class: "retour-info", style: "margin-top:6px" },
          h("strong", { text: (cfg.resume || "Mes choix") + " : " }), etat.choix.join(", ") + "."));
      }
    }
    rendu();
  }

  // =====================================================================
  // 3. SCÉNARIO À EMBRANCHEMENTS
  //   cas: [{ titre, depart, noeuds: { id: { qui, texte, contexte, question, choix:[{texte, vers, type, ok, retour}], fin:{...} } } }]
  //   - choix.ok === false : retour affiché, l'élève peut réessayer
  //   - choix.type : "passif" | "agressif" | "affirme" (badge)
  // =====================================================================
  var NOMS_TYPES = { passif: "Réponse passive", agressif: "Réponse agressive", affirme: "Réponse affirmée" };
  function scenario(zone, cfg, ctx) {
    var faits = Store.get("progres-scenario-" + cfg.id, {});
    function menu() {
      vider(zone);
      if (cfg.consigne) zone.appendChild(h("p", { class: "texte-doux", text: cfg.consigne }));
      var liste = h("div", { class: "pile" });
      cfg.cas.forEach(function (c, k) {
        liste.appendChild(h("button", { class: "option", type: "button", on: { click: function () { jouer(k); } } },
          h("span", { class: "lettre", text: String(k + 1) }),
          h("span", { style: "flex:1" }, c.titre),
          faits[k] ? h("span", { class: "fait", text: "Fait" }) : icone("fleche")));
      });
      zone.appendChild(liste);
    }
    function jouer(k) {
      var c = cfg.cas[k];
      vider(zone);
      var fil = h("div", { class: "pile", style: "gap:8px" });
      var bas = h("div", { class: "pile" });
      zone.appendChild(h("div", { class: "entre" },
        h("button", { class: "retour", type: "button", style: "border:none;background:none;padding:0;cursor:pointer", on: { click: menu } }, icone("retour"), "Toutes les situations"),
        h("span", { class: "texte-doux", text: (k + 1) + " / " + cfg.cas.length })));
      zone.appendChild(h("h3", { class: "titre-bloc", text: c.titre }));
      zone.appendChild(fil);
      zone.appendChild(bas);
      function noeud(id) {
        var n = c.noeuds[id];
        if (!n) return;
        if (n.contexte) fil.appendChild(h("div", { class: "bulle contexte", text: n.contexte }));
        if (n.texte) fil.appendChild(h("div", { class: "bulle autre" }, n.qui ? h("span", { class: "qui", text: n.qui }) : null, n.texte));
        vider(bas);
        if (n.fin) return fin(n.fin);
        if (n.question) bas.appendChild(h("p", { class: "titre-bloc", style: "font-size:16px", text: n.question }));
        var retour = h("div", { "aria-live": "polite" });
        var groupe = h("div", { class: "pile", role: "group", "aria-label": n.question || "Que réponds-tu ?" });
        n.choix.forEach(function (ch, j) {
          var b = h("button", { class: "option", type: "button", on: { click: function () {
            if (ch.ok === false) {
              b.classList.add("faux"); b.disabled = true;
              vider(retour);
              retour.appendChild(h("div", { class: "retour-ko" }, h("strong", { text: "Pas tout à fait. " }), ch.retour || "Essaie une autre réponse."));
              return;
            }
            fil.appendChild(h("div", { class: "bulle moi" },
              ch.type ? h("span", { class: "badge " + ch.type, text: NOMS_TYPES[ch.type], style: "margin-bottom:4px" }) : null,
              ch.type ? h("br") : null, ch.texte));
            if (ch.retour) fil.appendChild(h("div", { class: ch.ok ? "retour-ok" : "retour-info" }, ch.ok ? h("strong", { text: "Oui. " }) : null, ch.retour));
            noeud(ch.vers);
          } } }, h("span", { class: "lettre", text: LETTRES[j] }), h("span", { text: ch.texte }));
          groupe.appendChild(b);
        });
        bas.appendChild(groupe);
        bas.appendChild(retour);
        var premier = groupe.querySelector("button"); if (premier && fil.children.length > 1) premier.focus();
      }
      function fin(f) {
        var classe = f.type === "affirme" || f.ok ? "retour-ok" : (f.type ? "retour-ko" : "retour-info");
        bas.appendChild(h("div", { class: classe, tabindex: "-1" }, f.titre ? h("strong", { text: f.titre + " " }) : null, f.texte));
        faits[k] = true; Store.set("progres-scenario-" + cfg.id, faits);
        var nbFaits = Object.keys(faits).length;
        if (nbFaits >= cfg.cas.length && ctx && ctx.fini) ctx.fini();
        bas.appendChild(h("div", { class: "ligne" },
          h("button", { class: "btn secondaire", type: "button", on: { click: function () { jouer(k); } } }, icone("relance"), "Rejouer"),
          k + 1 < cfg.cas.length
            ? h("button", { class: "btn pilier", type: "button", on: { click: function () { jouer(k + 1); } } }, "Situation suivante", icone("fleche"))
            : h("button", { class: "btn pilier", type: "button", on: { click: menu } }, "Toutes les situations")));
        annoncer(bas.lastChild.previousSibling);
      }
      noeud(c.depart);
    }
    menu();
  }

  // =====================================================================
  // 4. QUIZ « Je vérifie ce que j'ai compris »
  //   types : qcm (bonne = index), vf (bonne = true/false), ouverte (modele), ordre (elements dans le bon ordre)
  // =====================================================================
  function quiz(zone, cfg, ctx) {
    var repondu = {}, justes = 0, notes = 0;
    var bilan = h("div", { "aria-live": "polite" });
    cfg.questions.forEach(function (q, k) {
      var carte = h("div", { class: "carte pile" });
      carte.appendChild(h("span", { class: "etiquette", text: "Question " + (k + 1) }));
      carte.appendChild(h("p", { style: "font-weight:700", text: q.enonce }));
      var retour = h("div", { "aria-live": "polite" });
      function marquer(juste, compte) {
        if (repondu[k]) return;
        repondu[k] = true;
        if (compte) { notes++; if (juste) justes++; }
        majBilan();
      }
      if (q.type === "qcm" || q.type === "vf") {
        var opts = q.type === "vf" ? ["Vrai", "Faux"] : q.options;
        var bonne = q.type === "vf" ? (q.bonne ? 0 : 1) : q.bonne;
        var groupe = h("div", { class: "pile", role: "group", "aria-label": q.enonce });
        opts.forEach(function (o, j) {
          var b = h("button", { class: "option", type: "button", on: { click: function () {
            var juste = j === bonne;
            Array.prototype.forEach.call(groupe.children, function (x, jj) {
              x.disabled = true;
              if (jj === bonne) x.classList.add("juste"); else if (x === b) x.classList.add("faux");
            });
            vider(retour);
            retour.appendChild(h("div", { class: juste ? "retour-ok" : "retour-ko" }, h("strong", { text: juste ? "Juste. " : "Pas tout à fait. " }), q.explication || ""));
            marquer(juste, true);
          } } }, h("span", { class: "lettre", text: LETTRES[j] }), h("span", { text: o }));
          groupe.appendChild(b);
        });
        carte.appendChild(groupe);
      } else if (q.type === "ouverte") {
        var id = "q-" + cfg.id + "-" + k;
        var ta = h("textarea", { id: id, rows: "3" });
        carte.appendChild(h("label", { class: "sr-only", for: id, text: "Ta réponse" }));
        carte.appendChild(ta);
        if (q.prive) carte.appendChild(h("p", { class: "note", text: "Pour toi seul : ta réponse n'est pas enregistrée et personne ne la voit." }));
        carte.appendChild(h("button", { class: "btn secondaire petit", type: "button", style: "align-self:flex-start", on: { click: function () {
          vider(retour);
          retour.appendChild(h("div", { class: "retour-info" }, h("strong", { text: q.prive ? "Une piste : " : "Une réponse possible : " }), q.modele || ""));
          marquer(true, false);
        } } }, q.prive ? "J'ai réfléchi" : "Voir une réponse possible"));
      } else if (q.type === "ordre") {
        var choisis = [];
        var grille = h("div", { class: "choix-grille" });
        var ordre = h("ol", { class: "ordre-liste", style: "list-style:none;padding:0;margin:0" });
        function majOrdre() {
          vider(ordre);
          choisis.forEach(function (m, r) { ordre.appendChild(h("li", { class: "ligne" }, h("span", { class: "ordre-rang", text: String(r + 1) }), m)); });
          if (choisis.length === q.elements.length && q.libre) {
            // Ordre libre : pas de bonne réponse, on donne le message à retenir
            vider(retour);
            retour.appendChild(h("div", { class: "retour-info" }, h("strong", { text: "Il n'y a pas d'ordre unique. " }), q.explication || ""));
            marquer(true, false);
          } else if (choisis.length === q.elements.length) {
            var juste = choisis.join("|") === q.elements.join("|");
            vider(retour);
            retour.appendChild(h("div", { class: juste ? "retour-ok" : "retour-ko" }, h("strong", { text: juste ? "Juste. " : "Pas tout à fait. " }),
              (juste ? "" : "Ordre attendu : " + q.elements.join(", ") + ". ") + (q.explication || "")));
            marquer(juste, true);
          }
        }
        melanger(q.elements).forEach(function (m) {
          var b = h("button", { class: "option", type: "button", text: m, on: { click: function () {
            b.disabled = true; b.classList.add("choisi"); choisis.push(m); majOrdre();
          } } });
          grille.appendChild(b);
        });
        carte.appendChild(h("p", { class: "texte-doux", text: q.aide ? q.aide : q.libre ? "Touche les étiquettes dans l'ordre qui te semble le plus courant." : "Touche les étiquettes dans le bon ordre." }));
        carte.appendChild(grille);
        carte.appendChild(ordre);
      }
      carte.appendChild(retour);
      zone.appendChild(carte);
    });
    zone.appendChild(bilan);
    function majBilan() {
      if (Object.keys(repondu).length < cfg.questions.length) return;
      vider(bilan);
      var txt = notes ? justes + " bonne" + (justes > 1 ? "s" : "") + " réponse" + (justes > 1 ? "s" : "") + " sur " + notes + " questions corrigées." : "";
      bilan.appendChild(h("div", { class: "retour-ok" }, h("strong", { text: "C'est fait. " }), txt + " Tu peux revenir sur cette séance quand tu veux."));
      if (ctx && ctx.fini) ctx.fini();
    }
  }

  // =====================================================================
  // 5. CARNET : formulaire personnel enregistré (roue des émotions, guide…)
  // =====================================================================
  //    option afficher : { titre, sources: ["id d'outil", …], vide, faireIci: "id d'outil" }
  //    -> montre en tête ce que l'élève a déjà noté dans d'autres outils, sans le lui redemander.
  function carnet(zone, cfg, ctx) {
    var data = Store.get(cfg.cle, {});
    var minuterie;
    var info = h("p", { class: "note", "aria-live": "polite" });
    if (cfg.afficher) zone.appendChild(dejaNote(cfg.afficher));
    if (cfg.intro) zone.appendChild(h("p", { class: "texte-doux", text: cfg.intro }));
    cfg.champs.forEach(function (c) {
      var id = cfg.cle + "-" + c.id;
      var input = c.multi
        ? h("textarea", { id: id, rows: "3", placeholder: c.placeholder || "" })
        : h("input", { id: id, type: "text", placeholder: c.placeholder || "", maxlength: "200" });
      input.value = data[c.id] || "";
      input.addEventListener("input", function () {
        data[c.id] = input.value;
        clearTimeout(minuterie);
        minuterie = setTimeout(function () {
          Store.set(cfg.cle, data);
          info.textContent = "Enregistré sur cet appareil.";
          if (ctx && ctx.fini && Object.keys(data).some(function (k) { return (data[k] || "").trim(); })) ctx.fini();
        }, 400);
      });
      zone.appendChild(h("label", { class: "champ", for: id },
        h("span", null, c.label, c.aide ? h("span", { class: "aide", text: " · " + c.aide }) : null), input));
    });
    zone.appendChild(info);
    zone.appendChild(h("div", { class: "ligne" },
      h("button", { class: "btn secondaire petit", type: "button", on: { click: function () {
        var bloc = h("div");
        cfg.champs.forEach(function (c) {
          if (!(data[c.id] || "").trim()) return;
          bloc.appendChild(h("h2", { style: "font-size:15px;margin-top:14px", text: c.label }));
          bloc.appendChild(h("p", { class: "texte-sortie", text: data[c.id] }));
        });
        CapApp.imprimer(cfg.titreDoc || "Mon carnet", bloc);
      } } }, icone("imprime"), "Imprimer ou PDF")));
  }

  // ---------- Reprendre ce que l'élève a déjà noté dans un autre outil ----------
  function trouverOutil(oid) {
    var r = null;
    (window.CAP_SEANCES || []).forEach(function (s) {
      (s.activites || []).concat(s.traces || []).forEach(function (a) {
        if (!r && a.outil && a.outil.id === oid) r = { bloc: a, seance: s };
      });
    });
    return r;
  }
  function resumeOutil(o) {
    var c = o.bloc.config, d = Store.get(c.cle, null);
    if (!d) return null;
    var m = o.bloc.moteur;
    if (m === "choisir" || m === "tas") return (d.choix || []).length ? [d.choix.join(", ") + "."] : null;
    if (m === "carnet") {
      var l = c.champs.filter(function (f) { return (d[f.id] || "").trim(); }).map(function (f) { return f.label + " : " + d[f.id].trim(); });
      return l.length ? l : null;
    }
    if (m === "liste") {
      if (!Array.isArray(d) || !d.length) return null;
      return d.slice(0, 6).map(function (e) {
        return c.gabarit ? remplir(c.gabarit, e) : c.champs.filter(function (f) { return e[f.id]; }).map(function (f) { return e[f.id]; }).join(" · ");
      });
    }
    return null;
  }
  function dejaNote(aff) {
    var bloc = h("div", { class: "retour-info pile", style: "gap:8px" });
    function rendu() {
      vider(bloc);
      bloc.appendChild(h("strong", { text: aff.titre || "Ce que tu as déjà noté" }));
      var manquants = [], trouves = 0;
      (aff.sources || []).forEach(function (oid) {
        var o = trouverOutil(oid);
        if (!o) return;
        var r = resumeOutil(o);
        if (!r) { manquants.push(o); return; }
        trouves++;
        bloc.appendChild(h("div", { class: "pile", style: "gap:2px" },
          h("span", { style: "font-weight:700", text: o.bloc.outil.nom }),
          h("ul", { style: "margin:0;padding-left:20px" }, r.map(function (x) { return h("li", { text: x }); }))));
      });
      if (!trouves) bloc.appendChild(h("p", { style: "margin:0", text: aff.vide || "Tu n'as encore rien noté dans ces outils. Ce n'est pas grave : écris directement ici." }));
      if (manquants.length) bloc.appendChild(h("p", { class: "note", style: "margin:0" },
        "Pas encore fait, si tu veux plus tard (ce n'est pas obligatoire) : ",
        manquants.map(function (o, k) {
          return [k ? ", " : "", h("a", { href: "#/seance/" + o.seance.id, text: o.bloc.outil.nom })];
        }), "."));
      var ici = aff.faireIci && manquants.filter(function (o) { return o.bloc.outil.id === aff.faireIci; })[0];
      if (ici) {
        var sous = h("div", { class: "pile" });
        bloc.appendChild(h("button", { class: "btn secondaire petit", type: "button", style: "align-self:flex-start", on: { click: function (ev) {
          ev.currentTarget.remove();
          sous.appendChild(h("p", { class: "note", text: "Ce que tu choisis ici s'enregistre aussi dans « " + ici.bloc.outil.nom + " »." }));
          window.Moteurs[ici.bloc.moteur](sous, ici.bloc.config, {});
        } } }, "Le faire ici maintenant"));
        bloc.appendChild(sous);
      }
    }
    rendu();
    return bloc;
  }

  // =====================================================================
  // 6. LISTE : fiches répétables (journal de bord, CV de mes réussites)
  //    gabarit optionnel : "J'ai {reussite}, ce qui montre que je suis {qualite}."
  // =====================================================================
  function remplir(gabarit, e) { return gabarit.replace(/\{(\w+)\}/g, function (_, k) { return (e[k] || "…").trim(); }); }
  function liste(zone, cfg, ctx) {
    var entrees = Store.get(cfg.cle, []);
    function rendu() {
      vider(zone);
      if (cfg.intro) zone.appendChild(h("p", { class: "texte-doux", text: cfg.intro }));
      var form = h("form", { class: "pile" });
      var champs = {};
      cfg.champs.forEach(function (c) {
        var id = cfg.cle + "-" + c.id;
        var el = c.multi ? h("textarea", { id: id, rows: "2", placeholder: c.placeholder || "" }) : h("input", { id: id, type: "text", placeholder: c.placeholder || "", maxlength: "200" });
        champs[c.id] = el;
        form.appendChild(h("label", { class: "champ", for: id }, h("span", null, c.label, c.aide ? h("span", { class: "aide", text: " · " + c.aide }) : null), el));
      });
      var apercu = cfg.gabarit ? h("p", { class: "retour-info", "aria-live": "polite" }) : null;
      function majApercu() {
        if (!apercu) return;
        var e = {}; Object.keys(champs).forEach(function (k) { e[k] = champs[k].value; });
        apercu.textContent = remplir(cfg.gabarit, e);
      }
      Object.keys(champs).forEach(function (k) { champs[k].addEventListener("input", majApercu); });
      if (apercu) { form.appendChild(apercu); majApercu(); }
      form.appendChild(h("button", { class: "btn pilier", type: "submit", style: "align-self:flex-start", text: cfg.bouton || "Ajouter" }));
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var e = { date: new Date().toISOString() }, vide = true;
        Object.keys(champs).forEach(function (k) { e[k] = champs[k].value.trim(); if (e[k]) vide = false; });
        if (vide) { CapApp.toast("Remplis au moins un champ."); return; }
        entrees.unshift(e); Store.set(cfg.cle, entrees);
        CapApp.toast("Enregistré sur cet appareil.");
        if (ctx && ctx.fini) ctx.fini();
        rendu();
      });
      zone.appendChild(form);

      var titre = h("div", { class: "entre", style: "margin-top:8px" }, h("h4", { class: "titre-bloc", style: "font-size:16px;margin:0", text: (cfg.titreListe || "Mes fiches") + " (" + entrees.length + ")" }));
      if (entrees.length) titre.appendChild(h("button", { class: "btn secondaire petit", type: "button", on: { click: imprimer } }, icone("imprime"), "Imprimer ou PDF"));
      zone.appendChild(titre);
      if (!entrees.length) zone.appendChild(h("p", { class: "vide", text: "Rien pour l'instant." }));
      entrees.forEach(function (e, k) {
        zone.appendChild(h("div", { class: "carte pile", style: "padding:12px 14px" },
          h("div", { class: "entre" },
            h("span", { class: "note", text: new Date(e.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) }),
            h("button", { class: "btn danger petit", type: "button", "aria-label": "Supprimer cette fiche", on: { click: function () {
              if (!confirm("Supprimer cette fiche ?")) return;
              entrees.splice(k, 1); Store.set(cfg.cle, entrees); rendu();
            } } }, icone("poubelle"))),
          cfg.gabarit ? h("p", { text: remplir(cfg.gabarit, e) }) :
            cfg.champs.map(function (c) { return e[c.id] ? h("p", null, h("strong", { text: c.label + " : " }), e[c.id]) : null; })));
      });
    }
    function imprimer() {
      var bloc = h("div");
      entrees.slice().reverse().forEach(function (e) {
        if (cfg.gabarit) bloc.appendChild(h("p", { style: "margin:0 0 10px", text: "• " + remplir(cfg.gabarit, e) }));
        else {
          bloc.appendChild(h("h2", { style: "font-size:14px;margin-top:14px", text: new Date(e.date).toLocaleDateString("fr-FR") }));
          cfg.champs.forEach(function (c) { if (e[c.id]) bloc.appendChild(h("p", null, h("strong", { text: c.label + " : " }), e[c.id])); });
        }
      });
      CapApp.imprimer(cfg.titreDoc || "Mes fiches", bloc);
    }
    rendu();
  }

  // =====================================================================
  // 7. COHÉRENCE CARDIAQUE : 5 s inspiration / 5 s expiration (6 par minute)
  // =====================================================================
  function coherence(zone, cfg, ctx) {
    var duree = 5, actif = false, timer = null, t0 = 0, son = false, audio = null, osc = null, gain = null;
    var avant = h("input", { type: "range", min: "0", max: "10", value: "5", id: "cc-avant" });
    var apres = h("input", { type: "range", min: "0", max: "10", value: "5", id: "cc-apres" });
    var vAvant = h("strong", { text: "5" }), vApres = h("strong", { text: "5" });
    avant.addEventListener("input", function () { vAvant.textContent = avant.value; });
    apres.addEventListener("input", function () { vApres.textContent = apres.value; });

    var cercle = h("div", { class: "cc-cercle", "aria-hidden": "true" }, "Prêt");
    var consigne = h("p", { class: "titre-bloc", "aria-live": "polite", text: "Installe-toi, dos droit, pieds au sol." });
    var temps = h("p", { class: "cc-temps", text: duree + ":00" });
    var selDuree = h("select", { id: "cc-duree", on: { change: function () { duree = +selDuree.value; temps.textContent = duree + ":00"; } } },
      [1, 2, 3, 4, 5].map(function (m) { var o = h("option", { value: String(m), text: m + " minute" + (m > 1 ? "s" : "") }); if (m === 5) o.selected = true; return o; }));
    var caseSon = h("input", { type: "checkbox", id: "cc-son", on: { change: function () { son = caseSon.checked; } } });
    var bouton = h("button", { class: "btn pilier", type: "button", on: { click: function () { actif ? arreter(false) : demarrer(); } } }, "Commencer");
    var fin = h("div", { "aria-live": "polite" });

    zone.appendChild(h("label", { class: "champ", for: "cc-avant" }, h("span", null, "Avant : mon niveau de stress ", vAvant, " / 10", h("span", { class: "aide", text: " · pour toi seul" })), avant));
    zone.appendChild(h("div", { class: "cc-zone" },
      h("div", { class: "cc-cercle-wrap" }, cercle), consigne, temps,
      h("div", { class: "ligne", style: "justify-content:center" },
        h("label", { class: "sr-only", for: "cc-duree", text: "Durée" }), h("div", { style: "width:160px" }, selDuree),
        h("label", { class: "ligne", for: "cc-son", style: "gap:6px;font-size:14px" }, caseSon, "Son doux")),
      bouton));
    zone.appendChild(fin);

    function tonalite(monte) {
      if (!son) return;
      try {
        audio = audio || new (window.AudioContext || window.webkitAudioContext)();
        if (osc) { try { osc.stop(); } catch (e) {} }
        osc = audio.createOscillator(); gain = audio.createGain();
        osc.type = "sine";
        var now = audio.currentTime;
        osc.frequency.setValueAtTime(monte ? 220 : 330, now);
        osc.frequency.linearRampToValueAtTime(monte ? 330 : 220, now + 5);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.06, now + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.9);
        osc.connect(gain); gain.connect(audio.destination);
        osc.start(now); osc.stop(now + 5);
      } catch (e) {}
    }
    function phase(inspire) {
      cercle.classList.toggle("inspire", inspire);
      cercle.textContent = inspire ? "J'inspire" : "J'expire";
      consigne.textContent = inspire ? "J'inspire par le nez… (5 secondes)" : "J'expire doucement par la bouche… (5 secondes)";
      tonalite(inspire);
    }
    function demarrer() {
      actif = true; t0 = Date.now(); bouton.textContent = "Arrêter"; selDuree.disabled = true; vider(fin);
      var dernier = -1;
      phase(true);
      timer = setInterval(function () {
        var ecoule = (Date.now() - t0) / 1000;
        var reste = Math.max(0, duree * 60 - ecoule);
        temps.textContent = Math.floor(reste / 60) + ":" + String(Math.floor(reste % 60)).padStart(2, "0");
        var demi = Math.floor(ecoule / 5);
        if (demi !== dernier) { dernier = demi; if (demi > 0) phase(demi % 2 === 0); }
        if (reste <= 0) arreter(true);
      }, 200);
    }
    function arreter(complet) {
      actif = false; clearInterval(timer); bouton.textContent = "Recommencer"; selDuree.disabled = false;
      cercle.classList.remove("inspire"); cercle.textContent = complet ? "Bravo" : "Pause";
      consigne.textContent = complet ? "C'est terminé. Prends le temps de revenir doucement." : "Exercice arrêté. Tu peux recommencer quand tu veux.";
      temps.textContent = duree + ":00";
      if (osc) { try { osc.stop(); } catch (e) {} }
      if (complet || (Date.now() - t0) > 50000) {
        vider(fin);
        fin.appendChild(h("label", { class: "champ", for: "cc-apres" }, h("span", null, "Après : mon niveau de stress ", vApres, " / 10"), apres));
        fin.appendChild(h("p", { class: "note", text: "Compare avec ta note d'avant. Rien n'est enregistré : c'est pour toi." }));
        if (ctx && ctx.fini) ctx.fini();
      }
    }
    // Arrêt propre si l'élève quitte la page
    window.addEventListener("hashchange", function stop() { if (actif) arreter(false); window.removeEventListener("hashchange", stop); });
  }

  // =====================================================================
  // 8. JAUGES : se situer sur des curseurs, sans enregistrement
  // =====================================================================
  function jauges(zone, cfg, ctx) {
    // Options : bornes: ["je débute", "je maîtrise"] ; cle : enregistre les positions sur l'appareil
    var vals = cfg.cle ? Store.get(cfg.cle, {}) : {};
    if (cfg.consigne) zone.appendChild(h("p", { class: "texte-doux", text: cfg.consigne }));
    cfg.items.forEach(function (it, k) {
      var id = "jauge-" + cfg.id + "-" + k;
      var depart = vals[k] != null ? String(vals[k]) : "5";
      var v = h("strong", { text: depart });
      var r = h("input", { type: "range", min: "0", max: "10", value: depart, id: id, on: { input: function () {
        v.textContent = r.value;
        if (cfg.cle) { vals[k] = +r.value; Store.set(cfg.cle, vals); }
        if (ctx && ctx.fini) ctx.fini();
      } } });
      zone.appendChild(h("label", { class: "champ", for: id }, h("span", null, it, " · ", v, " / 10"), r,
        cfg.bornes ? h("span", { class: "entre texte-doux", style: "font-size:13px;font-weight:400" }, h("span", { text: cfg.bornes[0] }), h("span", { text: cfg.bornes[1] })) : null));
    });
    if (cfg.note) zone.appendChild(h("p", { class: "note", text: cfg.note }));
  }

  // =====================================================================
  // 9. DÉFI COLLABORATIF à informations réparties (fonctionne hors ligne)
  //    Chaque élève du groupe choisit son numéro et ne voit que ses indices.
  //    config : { contexte, joueurs: { "1": [...], "2": [...] }, question, options:[{texte, ok, retour}], bilan }
  // =====================================================================
  function defi(zone, cfg, ctx) {
    var nums = Object.keys(cfg.joueurs);
    function choix() {
      vider(zone);
      zone.appendChild(h("div", { class: "bulle contexte", text: cfg.contexte }));
      zone.appendChild(h("p", { style: "font-weight:700", text: "Dans ton groupe, chacun choisit un numéro différent." }));
      zone.appendChild(h("div", { class: "choix-grille" }, nums.map(function (n) {
        return h("button", { class: "option", type: "button", on: { click: function () { joueur(n); } } }, "Je suis le joueur " + n);
      })));
      if (cfg.note) zone.appendChild(h("p", { class: "note", text: cfg.note }));
    }
    function joueur(n) {
      vider(zone);
      zone.appendChild(h("div", { class: "entre" },
        h("button", { class: "retour", type: "button", style: "border:none;background:none;padding:0;cursor:pointer", on: { click: choix } }, icone("retour"), "Changer de numéro"),
        h("span", { class: "badge affirme", text: "Joueur " + n })));
      zone.appendChild(h("div", { class: "alerte", text: "Ne montre pas ton écran ! Lis tes indices à voix haute à ton groupe." }));
      zone.appendChild(h("div", { class: "bulle contexte", text: cfg.contexte }));
      zone.appendChild(h("h3", { class: "titre-bloc", text: "Tes indices" }));
      zone.appendChild(h("ol", { class: "fiche-liste", style: "padding-left:22px" }, cfg.joueurs[n].map(function (x) { return h("li", { text: x }); })));
      var retour = h("div", { "aria-live": "polite" });
      var groupe = h("div", { class: "pile", role: "group", "aria-label": cfg.question });
      cfg.options.forEach(function (o, j) {
        var b = h("button", { class: "option", type: "button", on: { click: function () {
          vider(retour);
          if (!o.ok) { b.classList.add("faux"); retour.appendChild(h("div", { class: "retour-ko" }, h("strong", { text: "Non. " }), o.retour || "Rassemblez encore vos indices.")); return; }
          Array.prototype.forEach.call(groupe.children, function (x) { x.disabled = true; });
          b.classList.add("juste");
          retour.appendChild(h("div", { class: "retour-ok" }, h("strong", { text: "Bravo, enquête résolue ! " }), o.retour || ""));
          if (cfg.bilan) retour.appendChild(h("div", { class: "retour-info", style: "margin-top:8px" }, h("strong", { text: "À discuter en groupe : " }), cfg.bilan));
          if (ctx && ctx.fini) ctx.fini();
        } } }, h("span", { class: "lettre", text: LETTRES[j] }), h("span", { text: o.texte }));
        groupe.appendChild(b);
      });
      zone.appendChild(h("h3", { class: "titre-bloc", text: cfg.question }));
      zone.appendChild(h("p", { class: "note", text: "Ne répondez qu'une fois que tout le groupe est d'accord." }));
      zone.appendChild(groupe);
      zone.appendChild(retour);
    }
    choix();
  }

  // =====================================================================
  // 10. MINUTEUR DE BINÔME : sujet tiré au sort, rôles, 3 minutes
  // =====================================================================
  function binome(zone, cfg, ctx) {
    var duree = cfg.duree || 180, timer = null, t0 = 0, tour = 0, sujets = melanger(cfg.sujets), iSujet = 0;
    var sujet = h("p", { class: "carte-jeu", style: "font-size:17px", tabindex: "-1" });
    var roles = h("p", { class: "texte-doux" });
    var temps = h("p", { class: "cc-temps", style: "text-align:center", text: fmt(duree) });
    var lancer = "Lancer " + (duree % 60 === 0 ? (duree === 60 ? "la minute" : "les " + duree / 60 + " minutes") : "le minuteur");
    var roles2 = cfg.roles || ["Élève A raconte. Élève B écoute sans couper, puis reformule à la fin.", "On inverse : élève B raconte, élève A écoute puis reformule."];
    var bouton = h("button", { class: "btn pilier", type: "button", on: { click: function () { timer ? stop(false) : go(); } } }, lancer);
    var autre = h("button", { class: "btn secondaire", type: "button", on: { click: function () { iSujet = (iSujet + 1) % sujets.length; maj(); } } }, icone("relance"), "Autre sujet");
    var suivant = h("button", { class: "btn secondaire", type: "button", on: { click: function () { tour++; iSujet = (iSujet + 1) % sujets.length; stop(false); maj(); } } }, "Changer de rôle");
    var info = h("div", { "aria-live": "polite" });
    function fmt(s) { return Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0"); }
    function maj() {
      sujet.textContent = sujets[iSujet];
      roles.textContent = roles2[tour % 2];
      temps.textContent = fmt(duree);
    }
    function go() {
      t0 = Date.now(); bouton.textContent = "Arrêter"; vider(info);
      timer = setInterval(function () {
        var reste = Math.max(0, duree - (Date.now() - t0) / 1000);
        temps.textContent = fmt(reste);
        if (reste <= 0) stop(true);
      }, 250);
    }
    function stop(fin) {
      clearInterval(timer); timer = null; bouton.textContent = lancer; temps.textContent = fmt(duree);
      if (fin) {
        vider(info);
        info.appendChild(h("div", { class: "retour-info" }, h("strong", { text: "Temps écoulé. " }), cfg.finTour || "À l'écouteur de reformuler : « Si j'ai bien compris… ». Puis changez de rôle."));
        if (tour >= 1 && ctx && ctx.fini) ctx.fini();
      }
    }
    zone.appendChild(h("span", { class: "etiquette", text: "Le sujet" }));
    zone.appendChild(sujet);
    zone.appendChild(roles);
    zone.appendChild(temps);
    zone.appendChild(h("div", { class: "ligne", style: "justify-content:center" }, bouton, autre, suivant));
    zone.appendChild(info);
    window.addEventListener("hashchange", function arret() { clearInterval(timer); window.removeEventListener("hashchange", arret); });
    maj();
  }

  // =====================================================================
  // 11. ATELIER DE REFORMULATION (message « Je ») avec repérage des mots qui accusent
  //    config : { items:[{reproche, exemple}], champs:[{id,label,aide}], gabarit, alertes:[{motif, conseil}] }
  // =====================================================================
  //    option textes : { etiquette, depart, message, suivant, fin } pour d'autres usages que le message « Je »
  function reformuler(zone, cfg, ctx) {
    var i = 0, T = cfg.textes || {};
    function item() {
      vider(zone);
      if (i >= cfg.items.length) {
        zone.appendChild(h("div", { class: "retour-ok" }, h("strong", { text: "Atelier terminé. " }), T.fin || "Tu as transformé " + cfg.items.length + " reproches en messages qui expliquent sans accuser."));
        zone.appendChild(h("button", { class: "btn secondaire", type: "button", on: { click: function () { i = 0; item(); } } }, icone("relance"), "Recommencer"));
        if (ctx && ctx.fini) ctx.fini();
        return;
      }
      var it = cfg.items[i];
      zone.appendChild(h("span", { class: "etiquette", text: (T.etiquette || "Reproche") + " " + (i + 1) + " sur " + cfg.items.length }));
      zone.appendChild(h("div", { class: "bulle autre", style: "max-width:100%" }, h("span", { class: "qui", text: T.depart || "Le reproche" }), it.reproche));
      var champs = {};
      cfg.champs.forEach(function (c) {
        var id = "ref-" + i + "-" + c.id;
        champs[c.id] = h("input", { type: "text", id: id, maxlength: "160", placeholder: c.placeholder || "" });
        zone.appendChild(h("label", { class: "champ", for: id }, h("span", null, c.label, c.aide ? h("span", { class: "aide", text: " · " + c.aide }) : null), champs[c.id]));
      });
      var apercu = h("p", { class: "retour-info", "aria-live": "polite" });
      var alertes = h("div", { "aria-live": "polite" });
      function maj() {
        var e = {}, tout = "";
        Object.keys(champs).forEach(function (k) { e[k] = champs[k].value; tout += " " + champs[k].value; });
        apercu.textContent = remplir(cfg.gabarit, e);
        vider(alertes);
        (cfg.alertes || []).forEach(function (a) {
          if (new RegExp(a.motif, "i").test(tout)) alertes.appendChild(h("div", { class: "retour-ko", style: "margin-top:6px" }, h("strong", { text: "Attention : " }), a.conseil));
        });
      }
      Object.keys(champs).forEach(function (k) { champs[k].addEventListener("input", maj); });
      zone.appendChild(h("span", { class: "etiquette", text: T.message || "Mon message" }));
      zone.appendChild(apercu);
      zone.appendChild(alertes);
      var exemple = h("div", { "aria-live": "polite" });
      zone.appendChild(exemple);
      zone.appendChild(h("div", { class: "ligne" },
        h("button", { class: "btn secondaire petit", type: "button", on: { click: function () {
          vider(exemple); exemple.appendChild(h("div", { class: "retour-ok" }, h("strong", { text: "Un exemple possible : " }), it.exemple));
        } } }, "Voir un exemple"),
        h("button", { class: "btn pilier petit", type: "button", on: { click: function () { i++; item(); } } }, i + 1 < cfg.items.length ? (T.suivant || "Reproche suivant") : "Terminer", icone("fleche"))));
      maj();
    }
    item();
  }

  // =====================================================================
  // 12. TRI EN TAS (sans bonne réponse) puis sélection des cartes clés
  //    config : { cle, cartes:[{nom, ex}], tas:[...], garder, resume }
  // =====================================================================
  function tas(zone, cfg, ctx) {
    var etat = Store.get(cfg.cle, { classement: {}, choix: [] });
    function sauver() { Store.set(cfg.cle, etat); }
    function rendu() {
      vider(zone);
      var restantes = cfg.cartes.filter(function (c) { return !etat.classement[c.nom]; });
      if (restantes.length) return trier(restantes);
      selection();
    }
    function trier(restantes) {
      var c = restantes[0], fait = cfg.cartes.length - restantes.length;
      zone.appendChild(h("div", { class: "progression", "aria-hidden": "true" }, h("span", { style: "width:" + Math.round(fait / cfg.cartes.length * 100) + "%" })));
      zone.appendChild(h("span", { class: "texte-doux", text: "Carte " + (fait + 1) + " sur " + cfg.cartes.length }));
      zone.appendChild(h("div", { class: "carte-jeu", tabindex: "-1" }, h("span", null, c.nom, c.ex ? h("span", { class: "ex", style: "display:block;font-size:14px;font-weight:400;color:#4A5260;margin-top:6px", text: c.ex }) : null)));
      zone.appendChild(h("div", { class: "choix-grille", role: "group", "aria-label": "Dans quel tas ?" }, cfg.tas.map(function (t) {
        return h("button", { class: "option", type: "button", text: t, on: { click: function () { etat.classement[c.nom] = t; sauver(); rendu(); } } });
      })));
      if (fait) zone.appendChild(h("button", { class: "btn secondaire petit", type: "button", style: "align-self:flex-start", on: { click: function () {
        var dernier = cfg.cartes.filter(function (x) { return etat.classement[x.nom]; }).pop();
        if (dernier) { delete etat.classement[dernier.nom]; sauver(); rendu(); }
      } } }, icone("retour"), "Revenir à la carte précédente"));
      var titre = zone.querySelector(".carte-jeu"); if (titre && fait) annoncer(titre);
    }
    function selection() {
      var premier = cfg.cartes.filter(function (c) { return etat.classement[c.nom] === cfg.tas[0]; });
      var second = cfg.cartes.filter(function (c) { return etat.classement[c.nom] === cfg.tas[1]; });
      var candidates = premier.length >= cfg.garder ? premier : premier.concat(second);
      etat.choix = etat.choix.filter(function (n) { return candidates.some(function (c) { return c.nom === n; }); });
      zone.appendChild(h("p", { style: "font-weight:700", text: "Parmi tes cartes « " + cfg.tas[0] + " »" + (candidates.length > premier.length ? " et « " + cfg.tas[1] + " »" : "") + ", garde tes " + cfg.garder + " " + (cfg.mot || "cartes clés") + "." }));
      zone.appendChild(h("p", { class: "texte-doux", "aria-live": "polite", text: etat.choix.length + " choisie(s) sur " + cfg.garder + "." }));
      zone.appendChild(h("div", { class: "grille-2 large-3" }, candidates.map(function (c) {
        var sel = etat.choix.indexOf(c.nom) >= 0;
        return h("button", { class: "option carte-select" + (sel ? " choisi" : ""), type: "button", "aria-pressed": sel ? "true" : "false", on: { click: function () {
          var k = etat.choix.indexOf(c.nom);
          if (k >= 0) etat.choix.splice(k, 1);
          else if (etat.choix.length < cfg.garder) etat.choix.push(c.nom);
          else { CapApp.toast("Tu en as déjà " + cfg.garder + ". Retire-en une d'abord."); return; }
          sauver(); vider(zone); selection();
          if (etat.choix.length === Math.min(cfg.garder, candidates.length) && ctx && ctx.fini) ctx.fini();
        } } }, h("span", { class: "coche" }, sel ? icone("coche") : null), h("span", null, c.nom, c.ex ? h("span", { class: "ex", text: c.ex }) : null));
      })));
      if (etat.choix.length) zone.appendChild(h("div", { class: "retour-info" }, h("strong", { text: (cfg.resume || "Mes choix") + " : " }), etat.choix.join(", ") + "."));
      zone.appendChild(h("button", { class: "btn secondaire petit", type: "button", style: "align-self:flex-start", on: { click: function () {
        if (!confirm("Recommencer le tri depuis le début ?")) return;
        etat = { classement: {}, choix: [] }; sauver(); rendu();
      } } }, icone("relance"), "Recommencer le tri"));
    }
    rendu();
  }

  // =====================================================================
  // 13. DÉBAT MOUVANT individuel : je me positionne avant, puis après le débat
  //    config : { affirmations:[{ texte, repere }] }
  // =====================================================================
  function debat(zone, cfg, ctx) {
    var POS = ["Pas d'accord", "Ça dépend", "D'accord"];
    var finis = 0;
    cfg.affirmations.forEach(function (a, k) {
      var carte = h("div", { class: "carte pile" });
      carte.appendChild(h("span", { class: "etiquette", text: "Affirmation " + (k + 1) }));
      carte.appendChild(h("p", { style: "font-weight:700;font-size:17px", text: "« " + a.texte + " »" }));
      var suite = h("div", { class: "pile", "aria-live": "polite" });
      function rangee(titre, apres) {
        var g = h("div", { class: "choix-grille", role: "group", "aria-label": titre });
        POS.forEach(function (p) {
          g.appendChild(h("button", { class: "option", type: "button", text: p, on: { click: function (ev) {
            Array.prototype.forEach.call(g.children, function (x) { x.disabled = true; x.classList.remove("choisi"); });
            ev.currentTarget.classList.add("choisi");
            apres(p);
          } } }));
        });
        return h("div", { class: "pile", style: "gap:6px" }, h("span", { class: "texte-doux", text: titre }), g);
      }
      carte.appendChild(rangee("Avant le débat, je me place :", function (avant) {
        vider(suite);
        suite.appendChild(h("p", { class: "note", text: "Débattez en classe, écoutez les arguments. Puis replace-toi." }));
        suite.appendChild(rangee("Après le débat, je me place :", function (apres) {
          suite.appendChild(h("div", { class: "retour-info" }, h("strong", { text: avant === apres ? "Tu as gardé ta position. " : "Tu as changé d'avis : c'est une force, pas une faiblesse. " }), "Ce qu'il faut savoir : " + a.repere));
          finis++;
          if (finis >= cfg.affirmations.length && ctx && ctx.fini) ctx.fini();
        }));
      }));
      carte.appendChild(suite);
      zone.appendChild(carte);
    });
    zone.appendChild(h("p", { class: "note", text: "Rien n'est enregistré : tes positions restent pour toi." }));
  }

  // =====================================================================
  // 14. RÉPERTOIRE filtrable (carte des engagements, ressources…)
  //    config : { themes:[...], items:[{ nom, theme, age, description, url }], locaux: "cle de CAP_CONFIG" }
  // =====================================================================
  function repertoire(zone, cfg, ctx) {
    var items = cfg.items.slice();
    var locaux = cfg.locaux && window.CAP_CONFIG && window.CAP_CONFIG[cfg.locaux];
    if (locaux && locaux.length) items = locaux.map(function (l) { return { nom: l.nom, theme: l.theme, age: l.age, description: l.description, url: l.url, local: true }; }).concat(items);
    var filtre = "Tout";
    var liste = h("div", { class: "pile" });
    var puces = h("div", { class: "ligne", role: "group", "aria-label": "Filtrer par thème" });
    function maj() {
      vider(puces);
      ["Tout"].concat(cfg.themes).forEach(function (t) {
        puces.appendChild(h("button", { class: "puce" + (t === filtre ? " active" : ""), type: "button", "aria-pressed": t === filtre ? "true" : "false", text: t, on: { click: function () { filtre = t; maj(); } } }));
      });
      vider(liste);
      items.filter(function (it) { return filtre === "Tout" || it.theme === filtre; }).forEach(function (it) {
        var contenu = [
          h("span", { class: "pile", style: "gap:2px;flex:1" },
            h("span", { class: "t", text: it.nom }),
            h("span", { class: "s", text: [it.local ? "Près de chez toi" : null, it.theme, it.age].filter(Boolean).join(" · ") }),
            h("span", { class: "s", style: "color:#2A2F36", text: it.description }))
        ];
        liste.appendChild(it.url
          ? h("a", { class: "lien-ext", href: it.url, target: "_blank", rel: "noopener", on: { click: function () { if (ctx && ctx.fini) ctx.fini(); } } }, contenu, h("span", { class: "sr-only", text: "(s'ouvre dans un nouvel onglet)" }), icone("fleche"))
          : h("div", { class: "lien-ext" }, contenu));
      });
      if (!locaux || !locaux.length) liste.appendChild(h("p", { class: "note", text: "Les initiatives proches du lycée peuvent être ajoutées par l'établissement." }));
    }
    zone.appendChild(puces);
    zone.appendChild(liste);
    maj();
    if (ctx && ctx.fini) ctx.fini();
  }

  // =====================================================================
  // 15. MON PROJET EN CERCLES : des étiquettes, chacune placée dans un ou plusieurs cercles
  //    config : { cle, cercles:[{ id, nom, question }], importer:[{ cle, type, label }] }
  // =====================================================================
  function cercles(zone, cfg, ctx) {
    var etat = Store.get(cfg.cle, { etiquettes: [] }); // [{ texte, dans: [ids] }]
    function sauver() { Store.set(cfg.cle, etat); }
    var NS = "http://www.w3.org/2000/svg";
    function schema() {
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 320 230"); svg.setAttribute("class", "roue"); svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", "Quatre cercles qui se chevauchent : " + cfg.cercles.map(function (c) { return c.nom; }).join(", ") + ". Au centre : ma piste.");
      var pos = [[118, 88], [202, 88], [118, 142], [202, 142]], couleurs = ["#F1EBFB", "#E3F4F2", "#FCEFE2", "#E8F0FA"], traits = ["#5B30AA", "#0D6B64", "#964600", "#1D58A3"];
      var lab = [[60, 36], [260, 36], [60, 206], [260, 206]];
      cfg.cercles.forEach(function (c, i) {
        var e = document.createElementNS(NS, "circle");
        e.setAttribute("cx", pos[i][0]); e.setAttribute("cy", pos[i][1]); e.setAttribute("r", 70);
        e.setAttribute("fill", couleurs[i]); e.setAttribute("fill-opacity", ".75"); e.setAttribute("stroke", traits[i]); e.setAttribute("stroke-width", "2");
        svg.appendChild(e);
      });
      cfg.cercles.forEach(function (c, i) {
        var t = document.createElementNS(NS, "text");
        t.setAttribute("x", lab[i][0]); t.setAttribute("y", lab[i][1]); t.setAttribute("text-anchor", "middle");
        t.setAttribute("font-size", "11"); t.setAttribute("font-weight", "700"); t.setAttribute("fill", traits[i]);
        t.setAttribute("font-family", "Atkinson Hyperlegible, system-ui, sans-serif");
        t.textContent = c.nom; svg.appendChild(t);
      });
      var centre = document.createElementNS(NS, "text");
      centre.setAttribute("x", 160); centre.setAttribute("y", 119); centre.setAttribute("text-anchor", "middle");
      centre.setAttribute("font-size", "12"); centre.setAttribute("font-weight", "700"); centre.setAttribute("fill", "#1B1F24");
      centre.setAttribute("font-family", "Atkinson Hyperlegible, system-ui, sans-serif"); centre.textContent = "Ma piste";
      svg.appendChild(centre);
      return h("figure", { class: "roue-fig", style: "max-width:420px;align-self:center;width:100%" }, svg);
    }
    function rendu() {
      vider(zone);
      zone.appendChild(schema());
      zone.appendChild(h("dl", { class: "pile", style: "margin:0;gap:6px" }, cfg.cercles.map(function (c) {
        return h("div", null, h("dt", { style: "font-weight:700", text: c.nom }), h("dd", { class: "texte-doux", style: "margin:0", text: c.question }));
      })));
      // Ajouter une étiquette
      var champ = h("input", { type: "text", id: cfg.cle + "-ajout", maxlength: "60", placeholder: "Ex. : réparer, aider les autres, la sécurité, l'informatique…" });
      zone.appendChild(h("form", { class: "pile", on: { submit: function (e) {
        e.preventDefault(); var v = champ.value.trim(); if (!v) return;
        if (!etat.etiquettes.some(function (x) { return x.texte.toLowerCase() === v.toLowerCase(); })) etat.etiquettes.push({ texte: v, dans: [] });
        sauver(); rendu();
        var nouveau = document.getElementById(cfg.cle + "-ajout"); if (nouveau) nouveau.focus();
      } } },
        h("label", { class: "champ", for: cfg.cle + "-ajout" }, h("span", { text: "Ajouter une étiquette" }), champ),
        h("div", { class: "ligne" },
          h("button", { class: "btn pilier petit", type: "submit", text: "Ajouter" }),
          cfg.importer ? h("button", { class: "btn secondaire petit", type: "button", on: { click: importer } }, "Reprendre mes valeurs, qualités et réussites") : null)));
      // Les étiquettes et leurs cercles
      if (!etat.etiquettes.length) zone.appendChild(h("p", { class: "vide", text: "Ajoute des étiquettes, puis place chacune dans un ou plusieurs cercles." }));
      etat.etiquettes.forEach(function (et, k) {
        zone.appendChild(h("div", { class: "carte pile", style: "padding:12px 14px;gap:8px" },
          h("div", { class: "entre" }, h("strong", { text: et.texte }),
            h("button", { class: "btn danger petit", type: "button", "aria-label": "Retirer l'étiquette " + et.texte, on: { click: function () { etat.etiquettes.splice(k, 1); sauver(); rendu(); } } }, icone("poubelle"))),
          h("div", { class: "ligne", style: "gap:6px", role: "group", "aria-label": "Cercles pour " + et.texte }, cfg.cercles.map(function (c) {
            var dedans = et.dans.indexOf(c.id) >= 0;
            return h("button", { class: "puce" + (dedans ? " active" : ""), type: "button", "aria-pressed": dedans ? "true" : "false", text: c.nom, on: { click: function () {
              var i = et.dans.indexOf(c.id); if (i >= 0) et.dans.splice(i, 1); else et.dans.push(c.id);
              sauver(); rendu();
            } } });
          }))));
      });
      // Bilan
      var centre = etat.etiquettes.filter(function (e) { return e.dans.length >= 3; });
      var deux = etat.etiquettes.filter(function (e) { return e.dans.length === 2; });
      if (centre.length || deux.length) {
        zone.appendChild(h("div", { class: "retour-ok", "aria-live": "polite" },
          centre.length ? h("p", null, h("strong", { text: "Au centre (3 cercles ou plus) : " }), centre.map(function (e) { return e.texte; }).join(", ") + ". C'est là que se trouve ta piste.") : null,
          deux.length ? h("p", { style: centre.length ? "margin-top:6px" : null }, h("strong", { text: "Entre deux cercles : " }), deux.map(function (e) { return e.texte; }).join(", ") + ".") : null));
        if (centre.length && ctx && ctx.fini) ctx.fini();
      }
      zone.appendChild(h("button", { class: "btn secondaire petit", type: "button", style: "align-self:flex-start", on: { click: imprimer } }, icone("imprime"), "Imprimer ou PDF"));
    }
    function importer() {
      var ajouts = 0;
      (cfg.importer || []).forEach(function (src) {
        var d = Store.get(src.cle, null); if (!d) return;
        var mots = src.type === "choix" ? (d.choix || []) : (Array.isArray(d) ? d.map(function (x) { return x[src.champ]; }) : []);
        mots.filter(Boolean).forEach(function (m) {
          if (!etat.etiquettes.some(function (x) { return x.texte.toLowerCase() === m.toLowerCase(); })) { etat.etiquettes.push({ texte: m, dans: src.cercle ? [src.cercle] : [] }); ajouts++; }
        });
      });
      sauver(); rendu();
      CapApp.toast(ajouts ? ajouts + " étiquette(s) reprise(s) de tes séances." : "Rien à reprendre : remplis d'abord tes valeurs, qualités ou réussites.");
    }
    function imprimer() {
      var bloc = h("div");
      bloc.appendChild(schema());
      cfg.cercles.forEach(function (c) {
        var dans = etat.etiquettes.filter(function (e) { return e.dans.indexOf(c.id) >= 0; }).map(function (e) { return e.texte; });
        bloc.appendChild(h("h2", { style: "font-size:15px;margin-top:12px", text: c.nom }));
        bloc.appendChild(h("p", { text: dans.length ? dans.join(", ") : "…" }));
      });
      var centre = etat.etiquettes.filter(function (e) { return e.dans.length >= 3; }).map(function (e) { return e.texte; });
      bloc.appendChild(h("h2", { style: "font-size:15px;margin-top:12px", text: "Ma piste (au centre)" }));
      bloc.appendChild(h("p", { text: centre.length ? centre.join(", ") : "…" }));
      CapApp.imprimer(cfg.titreDoc || "Mon projet en cercles", bloc);
    }
    rendu();
  }

  // =====================================================================
  // 16. DÉCODEUR « RÉEL OU RETOUCHÉ ? » : un portrait dessiné (jamais une vraie personne)
  //     auquel un curseur ajoute une à une cinq retouches.
  //     config : { etapes: [{ nom, question, reponse }] } (5 étapes, dans l'ordre du dessin)
  // =====================================================================
  function retouche(zone, cfg, ctx) {
    var NS = "http://www.w3.org/2000/svg";
    function el(tag, attrs) { var e = document.createElementNS(NS, tag); Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); }); return e; }
    var svg = el("svg", { viewBox: "0 0 240 270", role: "img" });
    svg.appendChild(el("rect", { x: 0, y: 0, width: 240, height: 270, rx: 18, fill: "#EEF1F5" }));
    svg.appendChild(el("path", { d: "M50 120 Q48 40 120 36 Q192 40 190 120 L190 150 L50 150 Z", fill: "#5A3E2B" }));
    svg.appendChild(el("rect", { x: 98, y: 200, width: 44, height: 40, fill: "#D9A982" }));
    svg.appendChild(el("path", { d: "M40 270 Q60 225 120 228 Q180 225 200 270 Z", fill: "#5B7FB8" }));
    var visage = el("ellipse", { cx: 120, cy: 140, rx: 66, ry: 82, fill: "#E2B48C" });
    svg.appendChild(visage);
    svg.appendChild(el("path", { d: "M56 110 Q70 60 120 62 Q170 60 184 110 Q160 84 120 86 Q80 84 56 110 Z", fill: "#5A3E2B" }));
    var defauts = el("g", {});
    [[88, 160, 3], [100, 172, 2.4], [150, 166, 2.8], [140, 178, 2], [160, 150, 2.2], [92, 146, 2]].forEach(function (p) {
      defauts.appendChild(el("circle", { cx: p[0], cy: p[1], r: p[2], fill: "#B97E5A", opacity: .75 }));
    });
    defauts.appendChild(el("path", { d: "M86 138 Q96 144 106 138", stroke: "#C08A68", "stroke-width": 2, fill: "none", opacity: .8 }));
    defauts.appendChild(el("path", { d: "M134 138 Q144 144 154 138", stroke: "#C08A68", "stroke-width": 2, fill: "none", opacity: .8 }));
    svg.appendChild(defauts);
    var yeux = [el("ellipse", { cx: 96, cy: 126, rx: 10, ry: 7, fill: "#FFFFFF" }), el("ellipse", { cx: 144, cy: 126, rx: 10, ry: 7, fill: "#FFFFFF" })];
    var iris = [el("circle", { cx: 96, cy: 126, r: 5, fill: "#3B2A1E" }), el("circle", { cx: 144, cy: 126, r: 5, fill: "#3B2A1E" })];
    yeux.concat(iris).forEach(function (e) { svg.appendChild(e); });
    svg.appendChild(el("path", { d: "M84 112 Q96 106 108 112 M132 112 Q144 106 156 112", stroke: "#4A3324", "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    svg.appendChild(el("path", { d: "M120 132 L114 158 Q120 162 126 158", stroke: "#B9845F", "stroke-width": 2.5, fill: "none", "stroke-linecap": "round" }));
    svg.appendChild(el("path", { d: "M100 178 Q120 196 140 178 Z", fill: "#9E4A43" }));
    var dents = el("rect", { x: 106, y: 178, width: 28, height: 7, rx: 2, fill: "#E3D3A8" });
    svg.appendChild(dents);
    var halo = el("rect", { x: 0, y: 0, width: 240, height: 270, rx: 18, fill: "#FFF6E0", opacity: 0 });
    svg.appendChild(halo);

    var curseur = h("input", { type: "range", min: "0", max: String(cfg.etapes.length), value: "0", id: "retouche-curseur", step: "1" });
    var etiquette = h("strong", { text: "0" });
    var liste = h("ol", { class: "fiche-liste", style: "padding-left:22px" });
    function maj() {
      var n = +curseur.value;
      etiquette.textContent = String(n);
      defauts.setAttribute("opacity", n >= 1 ? 0 : 1);
      visage.setAttribute("rx", n >= 2 ? 56 : 66);
      visage.setAttribute("ry", n >= 2 ? 80 : 82);
      yeux.forEach(function (e) { e.setAttribute("rx", n >= 3 ? 13 : 10); e.setAttribute("ry", n >= 3 ? 9.5 : 7); });
      iris.forEach(function (e) { e.setAttribute("r", n >= 3 ? 6.5 : 5); });
      dents.setAttribute("fill", n >= 4 ? "#FFFFFF" : "#E3D3A8");
      halo.setAttribute("opacity", n >= 5 ? .18 : 0);
      svg.style.filter = n >= 5 ? "brightness(1.08) saturate(1.35) contrast(.95)" : "none";
      svg.setAttribute("aria-label", n === 0 ? "Portrait dessiné, sans retouche." : "Portrait dessiné avec " + n + " retouche(s) : " + cfg.etapes.slice(0, n).map(function (x) { return x.nom; }).join(", ") + ".");
      vider(liste);
      cfg.etapes.slice(0, n).forEach(function (x) {
        liste.appendChild(h("li", null, h("strong", { text: x.nom + ". " }), x.question + " ", h("span", { class: "texte-doux", text: x.reponse })));
      });
      if (n === cfg.etapes.length && ctx && ctx.fini) ctx.fini();
    }
    curseur.addEventListener("input", maj);
    zone.appendChild(h("figure", { class: "retouche-fig" }, svg));
    zone.appendChild(h("label", { class: "champ", for: "retouche-curseur" }, h("span", null, "Nombre de retouches : ", etiquette, " sur " + cfg.etapes.length), curseur));
    zone.appendChild(liste);
    zone.appendChild(h("p", { class: "note", text: "Ce portrait est un dessin : aucune vraie personne n'est représentée." }));
    maj();
  }

  // =====================================================================
  // 17. TESTEUR DE MOT DE PASSE : tout est calculé sur l'appareil.
  //     Rien n'est enregistré ni envoyé. Repères CNIL : 80 bits environ,
  //     soit 12 caractères de 4 types, 14 sans caractère spécial, ou 7 mots.
  //     config : { exemples: ["…"] }
  // =====================================================================
  var COURANTS = ["123456", "1234", "12345", "123456789", "azerty", "qwerty", "password", "motdepasse", "soleil", "bonjour", "loulou", "doudou", "chouchou",
    "marseille", "paris", "football", "iloveyou", "jetaime", "admin", "000000", "111111", "princesse", "nicolas", "camille", "123123", "abc123", "pokemon", "minecraft", "chocolat", "coucou"];
  function analyserMdp(m) {
    var c = { longueur: m.length, min: /[a-zà-ÿ]/.test(m), maj: /[A-ZÀ-Ý]/.test(m), chiffre: /[0-9]/.test(m), special: /[^a-zA-Z0-9à-ÿÀ-Ý]/.test(m) };
    var bas = m.toLowerCase();
    c.courant = COURANTS.some(function (w) { return bas.indexOf(w) >= 0; });
    c.date = /(19[5-9][0-9]|20[0-3][0-9])/.test(m) || /\b[0-3]?[0-9][\/.\-][01]?[0-9]\b/.test(m);
    c.repetition = /(.)\1\1/.test(m) || /(abc|bcd|cde|123|234|345|456|567|678|789|azer|qwer)/.test(bas);
    c.mots = m.trim() ? m.trim().split(/\s+/).filter(function (x) { return x.length >= 2; }).length : 0;
    var pool = (c.min ? 26 : 0) + (c.maj ? 26 : 0) + (c.chiffre ? 10 : 0) + (c.special ? 33 : 0);
    var bits = pool ? m.length * Math.log(pool) / Math.LN2 : 0;
    if (c.courant) bits -= 30;
    if (c.date) bits -= 10;
    if (c.repetition) bits -= 8;
    // Phrase de passe : on compte environ 12 bits par mot (les mots se devinent plus vite que des lettres au hasard)
    if (c.mots >= 2 && /\s/.test(m.trim())) bits = Math.min(bits, c.mots * 12 + (c.maj || c.chiffre ? 6 : 0));
    if (c.mots >= 7) bits = Math.max(bits, 84);
    c.bits = Math.max(0, Math.round(bits));
    c.niveau = c.bits >= 78 ? "solide" : c.bits >= 50 ? "moyen" : "faible";
    return c;
  }
  function motdepasse(zone, cfg, ctx) {
    var champ = h("input", { type: "password", id: "mdp-test", autocomplete: "off", autocapitalize: "off", spellcheck: "false", maxlength: "120", placeholder: "Un mot de passe inventé" });
    var voir = h("button", { class: "btn secondaire petit", type: "button", "aria-pressed": "false", text: "Afficher", on: { click: function () {
      var cache = champ.type === "password";
      champ.type = cache ? "text" : "password";
      voir.textContent = cache ? "Masquer" : "Afficher";
      voir.setAttribute("aria-pressed", cache ? "true" : "false");
    } } });
    var jauge = h("span", { style: "width:0%" });
    var verdict = h("p", { class: "titre-bloc", style: "font-size:17px;margin:0", "aria-live": "polite" });
    var criteres = h("ul", { class: "mdp-criteres" });
    var COUL = { faible: "#B42318", moyen: "#B54708", solide: "#1E7A3C" };
    var NOMS = { faible: "Faible", moyen: "Moyen", solide: "Solide" };
    function ligne(ok, texte) { return h("li", { class: ok ? "ok" : "ko" }, h("span", { "aria-hidden": "true", text: ok ? "✓ " : "✗ " }), h("span", { class: "sr-only", text: ok ? "Oui : " : "Non : " }), texte); }
    function maj() {
      var m = champ.value;
      vider(criteres);
      if (!m) { verdict.textContent = "Tape un mot de passe inventé pour le tester."; jauge.style.width = "0%"; return; }
      var c = analyserMdp(m);
      jauge.style.width = Math.min(100, Math.round(c.bits / 90 * 100)) + "%";
      jauge.style.background = COUL[c.niveau];
      verdict.textContent = "";
      verdict.appendChild(h("span", { style: "color:" + COUL[c.niveau], text: NOMS[c.niveau] }));
      verdict.appendChild(document.createTextNode(c.bits > 100 ? " · plus de 100 bits de solidité" : " · environ " + c.bits + " bits de solidité"));
      if (c.mots >= 7) criteres.appendChild(ligne(true, "Phrase de passe d'au moins 7 mots"));
      else {
        criteres.appendChild(ligne(c.longueur >= 12, "Au moins 12 caractères (ici : " + c.longueur + ")"));
        criteres.appendChild(ligne(c.min, "Des minuscules"));
        criteres.appendChild(ligne(c.maj, "Des majuscules"));
        criteres.appendChild(ligne(c.chiffre, "Des chiffres"));
        criteres.appendChild(ligne(c.special, "Des caractères spéciaux (! ? @ # espace…)"));
      }
      criteres.appendChild(ligne(!c.courant, c.courant ? "Contient un mot de passe très courant : il est testé en premier" : "Pas de mot de passe courant"));
      criteres.appendChild(ligne(!c.date, c.date ? "Contient une date ou une année : facile à deviner" : "Pas de date"));
      if (c.repetition) criteres.appendChild(ligne(false, "Contient une suite ou une répétition (aaa, 123, azer…)"));
      if (c.niveau === "solide" && ctx && ctx.fini) ctx.fini();
    }
    champ.addEventListener("input", maj);
    zone.appendChild(h("div", { class: "alerte", text: "N'écris jamais ton vrai mot de passe ici. Invente-en un. Rien n'est enregistré ni envoyé : tout est calculé sur ton appareil." }));
    zone.appendChild(h("label", { class: "champ", for: "mdp-test" }, h("span", { text: "Mot de passe à tester" }),
      h("div", { class: "ligne", style: "flex-wrap:nowrap" }, h("div", { style: "flex:1;min-width:0" }, champ), voir)));
    zone.appendChild(h("div", { class: "progression", "aria-hidden": "true" }, jauge));
    zone.appendChild(verdict);
    zone.appendChild(criteres);
    if (cfg.exemples && cfg.exemples.length) {
      zone.appendChild(h("p", { class: "texte-doux", style: "margin-bottom:0", text: "Essaie aussi ces exemples :" }));
      zone.appendChild(h("div", { class: "ligne", role: "group", "aria-label": "Exemples à tester" }, cfg.exemples.map(function (x) {
        return h("button", { class: "puce", type: "button", text: x, on: { click: function () { champ.type = "text"; voir.textContent = "Masquer"; voir.setAttribute("aria-pressed", "true"); champ.value = x; maj(); } } });
      })));
    }
    zone.appendChild(h("p", { class: "note", text: "Repère de la CNIL : au moins 12 caractères de quatre types différents, ou 14 sans caractère spécial, ou une phrase de passe d'au moins 7 mots." }));
    maj();
    window.addEventListener("hashchange", function vide() { champ.value = ""; window.removeEventListener("hashchange", vide); });
  }

  window.h = h;
  window.vider = vider;
  window.icone = icone;
  window.Moteurs = { cartes: cartes, choisir: choisir, scenario: scenario, quiz: quiz, carnet: carnet, liste: liste, coherence: coherence, jauges: jauges,
    defi: defi, binome: binome, reformuler: reformuler, tas: tas, debat: debat, repertoire: repertoire, cercles: cercles, retouche: retouche, motdepasse: motdepasse };
  window.analyserMdp = analyserMdp;
})();
