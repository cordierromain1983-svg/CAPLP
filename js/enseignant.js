/*
 * ESPACE ENSEIGNANT ET MODE CLASSE
 * - #/enseignant : déroulés des séances, progression de l'année, QR code « séance du jour ».
 *   Protégé par un code simple (js/config.js, codeEnseignant) : c'est une barrière de discrétion,
 *   pas une sécurité. Aucune donnée d'élève n'y figure : rien n'est collecté.
 * - #/classe/<séance>/<étape> : la séance projetée au vidéoprojecteur, sans aucun téléphone.
 *   L'enseignant compte les mains levées, révèle la correction, lance un minuteur.
 *   Raccourcis : flèche droite ou espace pour avancer, flèche gauche pour revenir.
 */
(function () {
  "use strict";
  var h = window.h, vider = window.vider;
  var SEANCES = window.CAP_SEANCES || [], PILIERS = window.CAP_PILIERS || [], NIVEAUX = window.CAP_NIVEAUX || [];
  function seance(id) { return SEANCES.filter(function (s) { return s.id === id; })[0]; }
  function pilier(id) { return PILIERS.filter(function (p) { return p.id === id; })[0]; }
  function nomNiveau(id) { var n = NIVEAUX.filter(function (x) { return x.id === id; })[0]; return n ? n.nom : id; }
  function couleurs(p) {
    document.documentElement.style.setProperty("--p", p ? p.couleur : "#1B1F24");
    document.documentElement.style.setProperty("--p-fond", p ? p.fond : "#ECEEF1");
  }
  function adresse(route) { return location.origin + location.pathname + "#/" + route; }
  function qr(texte, taille) {
    var boite = h("div", { class: "qr", role: "img", "aria-label": "QR code vers " + texte });
    try { var q = window.qrcode(0, "M"); q.addData(texte); q.make(); boite.innerHTML = q.createSvgTag(taille || 6, 2); }
    catch (e) { boite.textContent = texte; }
    return boite;
  }
  function minutes(s) { var m = /(\d+)\s*h(?:\s*(\d+))?/.exec(s.duree || ""); if (m) return (+m[1]) * 60 + (+m[2] || 0); m = /(\d+)\s*min/.exec(s.duree || ""); return m ? +m[1] : 55; }
  function duree(mn) { var hh = Math.floor(mn / 60), m = mn % 60; return (hh ? hh + " h" : "") + (m ? (hh ? " " : "") + m + " min" : ""); }

  // ===================================================================
  // ESPACE ENSEIGNANT
  // ===================================================================
  function ouvert() { try { return sessionStorage.getItem("cap-enseignant") === "1"; } catch (e) { return window.__capEns === true; } }
  function ouvrir() { try { sessionStorage.setItem("cap-enseignant", "1"); } catch (e) {} window.__capEns = true; }

  function pageCode() {
    var code = (window.CAP_CONFIG && CAP_CONFIG.codeEnseignant) || "";
    var page = h("div", { class: "page" });
    page.appendChild(h("a", { class: "retour", href: "#/" }, window.icone("retour"), "Accueil"));
    page.appendChild(h("h1", { class: "titre-page", text: "Espace enseignant" }));
    var champ = h("input", { type: "password", id: "code-ens", autocomplete: "off" });
    var msg = h("p", { class: "retour-ko", role: "alert", hidden: "hidden", text: "Ce n'est pas le bon code." });
    var form = h("form", { class: "carte pile", on: { submit: function (ev) {
      ev.preventDefault();
      if (!code || champ.value.trim() === code) { ouvrir(); CapApp.rafraichir(); } else { msg.removeAttribute("hidden"); }
    } } },
      h("label", { class: "champ", for: "code-ens" }, h("span", { text: "Code de l'espace enseignant" }), champ), msg,
      h("button", { class: "btn", type: "submit", text: "Entrer" }),
      h("p", { class: "note", text: "Cet espace contient les déroulés des séances et les outils pour la classe. Il ne contient aucune donnée d'élève." }));
    page.appendChild(form);
    return page;
  }

  function faites() { return Store.get("ens-faites", {}); }

  function detailSeance(s) {
    var d = h("details", { class: "ens-detail" }, h("summary", { text: "Déroulé et points de vigilance" }));
    d.appendChild(h("p", null, h("strong", { text: "Objectif. " }), s.objectif));
    if (s.adulte && s.adulte.deroule) {
      var t = h("table", { class: "fiche-table ens-tableau" }, h("thead", null, h("tr", null, ["Temps", "Phase", "L'élève", "L'adulte"].map(function (c) { return h("th", { scope: "col", text: c }); }))));
      var tb = h("tbody");
      s.adulte.deroule.forEach(function (l) { tb.appendChild(h("tr", null, l.map(function (c, k) { return h("td", { "data-label": ["Temps", "Phase", "L'élève", "L'adulte"][k], text: c }); }))); });
      t.appendChild(tb); d.appendChild(t);
    }
    d.appendChild(h("p", null, h("strong", { text: "Activités. " }), (s.activites || []).map(function (a) { return a.titre + (a.facultatif ? " (facultative)" : ""); }).join(" · ")));
    if (s.traces && s.traces.length) d.appendChild(h("p", null, h("strong", { text: "Traces. " }), s.traces.map(function (t) { return t.titre + (t.rendre ? " (à rendre si vous le demandez)" : " (pour l'élève seul)"); }).join(" · ")));
    if (s.quizOfficiel) d.appendChild(h("p", null, h("strong", { text: "Passeport EDUCFI. " }), "Faire passer ensuite le quiz officiel du module " + s.quizOfficiel + "."));
    if (s.adulte && s.adulte.vigilance) d.appendChild(h("p", { class: "retour-info" }, h("strong", { text: "Vigilance. " }), s.adulte.vigilance));
    return d;
  }

  function pageEnseignant(parts) {
    if (!ouvert()) return pageCode();
    couleurs(null);
    if (parts[1] === "qr") return pageQR(parts[2]);
    var niv = parts[1] && NIVEAUX.some(function (n) { return n.id === parts[1]; }) ? parts[1] : (Store.get("niveau", "") || NIVEAUX[0].id);
    var page = h("div", { class: "page" });
    page.appendChild(h("a", { class: "retour", href: "#/" }, window.icone("retour"), "Accueil"));
    page.appendChild(h("h1", { class: "titre-page", text: "Espace enseignant" }));
    page.appendChild(h("p", { class: "texte-doux", text: "Pour chaque séance : le déroulé minute par minute, la projection en classe sans téléphone, et un QR code qui amène les élèves directement sur la séance. Chaque adulte peut animer seul." }));
    page.appendChild(h("div", { class: "ligne", role: "group", "aria-label": "Niveau" }, NIVEAUX.map(function (n) {
      return h("a", { class: "puce" + (n.id === niv ? " active" : ""), href: "#/enseignant/" + n.id, "aria-current": n.id === niv ? "true" : null, text: n.nom });
    })));

    var f = faites(), total = 0, fait = 0, mnTotal = 0, lignes = [];
    var resume = h("p", { class: "note", "aria-live": "polite" });
    function majResume() {
      var ff = faites(), n = 0, mn = 0;
      SEANCES.forEach(function (s) { if (s.niveau === niv && pilier(s.pilier).actif && ff[s.id]) { n++; mn += minutes(s); } });
      resume.textContent = n + " séance" + (n > 1 ? "s" : "") + " faite" + (n > 1 ? "s" : "") + " sur " + total + " en " + nomNiveau(niv) + " (" + (duree(mn) || "0 min") + " sur " + duree(mnTotal) + "). Ce suivi reste sur cet appareil.";
    }
    PILIERS.filter(function (p) { return p.actif; }).forEach(function (p) {
      var liste = SEANCES.filter(function (s) { return s.pilier === p.id && s.niveau === niv; }).sort(function (a, b) { return a.num - b.num; });
      if (!liste.length) return;
      var mnP = liste.reduce(function (t, s) { return t + minutes(s); }, 0);
      var sec = h("section", { class: "pile ens-pilier", style: "--p:" + p.couleur + ";--p-fond:" + p.fond },
        h("h2", { class: "titre-bloc" }, h("span", { class: "ens-pastille", "aria-hidden": "true" }), p.nom + " · " + liste.length + " séance" + (liste.length > 1 ? "s" : "") + " · " + duree(mnP)));
      liste.forEach(function (s) {
        total++; mnTotal += minutes(s);
        var id = "ens-" + s.id;
        var coche = h("input", { type: "checkbox", id: id, on: { change: function () { var ff = faites(); if (coche.checked) ff[s.id] = true; else delete ff[s.id]; Store.set("ens-faites", ff); majResume(); } } });
        if (f[s.id]) coche.checked = true;
        lignes.push([p.nom, "Séance " + s.num, s.titre, s.duree, ""]);
        sec.appendChild(h("div", { class: "carte pile ens-seance" },
          h("div", { class: "entre" }, h("strong", { text: s.num + ". " + s.titre }), h("span", { class: "texte-doux", style: "white-space:nowrap", text: s.duree })),
          h("p", { class: "texte-doux", style: "margin:0", text: s.objectifCourt || "" }),
          h("div", { class: "ligne" },
            h("a", { class: "btn pilier petit", href: "#/classe/" + s.id, text: "Projeter en classe" }),
            h("a", { class: "btn secondaire petit", href: "#/enseignant/qr/" + s.id, text: "QR code" }),
            h("a", { class: "btn secondaire petit", href: "#/seance/" + s.id, text: "Voir la séance" })),
          h("label", { class: "ens-coche", for: id }, coche, h("span", { text: "Faite avec ma classe" })),
          detailSeance(s)));
      });
      page.appendChild(sec);
    });
    majResume();
    page.insertBefore(h("div", { class: "carte pile" },
      h("h2", { class: "titre-bloc", text: "Progression de l'année en " + nomNiveau(niv) }), resume,
      h("button", { class: "btn secondaire petit", type: "button", style: "align-self:flex-start", on: { click: function () {
        var t = h("table", { class: "fiche-table" }, h("thead", null, h("tr", null, ["Pilier", "Séance", "Titre", "Durée", "Date prévue"].map(function (c) { return h("th", { text: c }); }))));
        var tb = h("tbody"); lignes.forEach(function (l) { tb.appendChild(h("tr", null, l.map(function (c) { return h("td", { text: c }); }))); }); t.appendChild(tb);
        CapApp.imprimer("Progression " + nomNiveau(niv) + " · " + lignes.length + " séances · " + duree(mnTotal), t);
      } } }, window.icone("imprime"), "Imprimer la progression")), page.children[4] || null);
    page.appendChild(h("p", { class: "note", text: "Le code de cet espace limite l'accès par discrétion ; ce n'est pas une protection forte. Il se change dans js/config.js (codeEnseignant)." }));
    return page;
  }

  function pageQR(id) {
    var s = seance(id); if (!s) return h("div", { class: "page" }, h("p", { text: "Séance introuvable." }));
    var p = pilier(s.pilier); couleurs(p);
    var url = adresse("seance/" + s.id);
    var bloc = h("div", { class: "pile qr-page" },
      h("p", { class: "surtitre", text: p.nom + " · " + nomNiveau(s.niveau) + " · Séance " + s.num }),
      h("h1", { class: "titre-page", text: s.titre }),
      qr(url, 10),
      h("p", { text: "Scanne ce code avec l'appareil photo de ton téléphone pour ouvrir la séance." }),
      h("p", { class: "texte-doux", style: "word-break:break-all", text: url }));
    var page = h("div", { class: "page" });
    page.appendChild(h("a", { class: "retour", href: "#/enseignant/" + s.niveau }, window.icone("retour"), "Espace enseignant"));
    page.appendChild(bloc);
    page.appendChild(h("div", { class: "ligne" },
      h("button", { class: "btn secondaire", type: "button", on: { click: function () { CapApp.imprimer(s.titre, bloc.cloneNode(true)); } } }, window.icone("imprime"), "Imprimer l'affiche"),
      h("a", { class: "btn pilier", href: "#/classe/" + s.id, text: "Projeter en classe" })));
    return page;
  }

  // ===================================================================
  // MODE CLASSE
  // ===================================================================
  var minuteur = null, touches = null;
  function nettoyer() {
    if (minuteur) { clearInterval(minuteur); minuteur = null; }
    if (touches) { document.removeEventListener("keydown", touches); touches = null; }
  }
  // On nettoie seulement en quittant le mode classe (la page elle-même nettoie avant de s'installer).
  window.addEventListener("hashchange", function () { if (location.hash.indexOf("#/classe") !== 0) nettoyer(); });

  // Boutons de vote : chaque appui compte une main levée
  function votes(options, bonne) {
    var boite = h("div", { class: "classe-options" }), boutons = [];
    options.forEach(function (o, k) {
      var n = 0, cpt = h("span", { class: "classe-compte", text: "0" });
      var b = h("button", { class: "classe-option", type: "button", "aria-label": o + " : ajouter une main levée", on: { click: function () { n++; cpt.textContent = String(n); } } }, h("span", { text: o }), cpt);
      boutons.push(b); boite.appendChild(b);
    });
    return { noeud: boite, reveler: function () { boutons.forEach(function (b, k) { b.classList.add(k === bonne ? "juste" : "autre"); b.disabled = true; }); } };
  }
  function explication(t) { return t ? h("p", { class: "retour-info classe-explication", text: t }) : null; }

  // Chaque « diapo » : { rendre(zone) -> reveler() ou null }
  function diaposCartes(a) {
    var out = [];
    a.config.manches.forEach(function (m) {
      m.cartes.forEach(function (c, k) {
        out.push({ titre: a.titre, rang: (k + 1) + " / " + m.cartes.length, rendre: function (z) {
          if (k === 0 && a.consigne) z.appendChild(h("p", { class: "classe-consigne", text: a.consigne }));
          z.appendChild(h("p", { class: "classe-enonce", text: c.texte }));
          var v = votes(m.categories, m.categories.indexOf(c.reponse)); z.appendChild(v.noeud);
          return function () { v.reveler(); var e = explication(c.explication); if (e) z.appendChild(e); };
        } });
      });
      if (a.config.fin) out.push({ titre: a.titre, rang: "Bilan", rendre: function (z) { z.appendChild(h("p", { class: "classe-enonce", text: a.config.fin })); return null; } });
    });
    return out;
  }
  function diaposQuiz(a, questions, titre) {
    return questions.map(function (q, k) {
      return { titre: titre, rang: (k + 1) + " / " + questions.length, rendre: function (z) {
        if (k === 0 && a && a.consigne) z.appendChild(h("p", { class: "classe-consigne", text: a.consigne }));
        z.appendChild(h("p", { class: "classe-enonce", text: q.enonce || "" }));
        if (q.type === "vf" || q.type === "qcm") {
          var v = votes(q.type === "vf" ? ["Vrai", "Faux"] : q.options, q.type === "vf" ? (q.bonne ? 0 : 1) : q.bonne); z.appendChild(v.noeud);
          return function () { v.reveler(); var e = explication(q.explication); if (e) z.appendChild(e); };
        }
        if (q.type === "ordre") {
          var mel = q.elements.map(function (e, i) { return { e: e, i: i }; }).sort(function (x, y) { return ((x.i * 7 + 3) % q.elements.length) - ((y.i * 7 + 3) % q.elements.length); });
          var ul = h("ul", { class: "classe-liste" }, (q.libre ? q.elements.map(function (e, i) { return { e: e, i: i }; }) : mel).map(function (x) { return h("li", { text: x.e }); }));
          z.appendChild(ul);
          return function () {
            if (!q.libre) { vider(ul); ul.classList.add("ordonnee"); q.elements.forEach(function (e, i) { ul.appendChild(h("li", null, h("strong", { text: (i + 1) + ". " }), e)); }); }
            var ex = explication(q.explication); if (ex) z.appendChild(ex);
          };
        }
        return function () { var ex = explication(q.modele || q.explication); if (ex) z.appendChild(ex); };
      } };
    });
  }
  function diaposScenario(a) {
    return a.config.cas.map(function (cas, k) {
      return { titre: a.titre, rang: cas.titre || ((k + 1) + " / " + a.config.cas.length), rendre: function (z) {
        function noeud(id) {
          vider(z);
          var n = cas.noeuds[id];
          if (n.fin) { z.appendChild(h("p", { class: "classe-consigne", text: n.fin.titre || "À retenir :" })); z.appendChild(h("p", { class: "classe-enonce", text: n.fin.texte })); return; }
          if (n.contexte) z.appendChild(h("p", { class: "classe-consigne", text: n.contexte }));
          if (n.texte) z.appendChild(h("p", { class: "classe-bulle" }, n.qui ? h("strong", { text: n.qui + " : " }) : null, n.texte));
          if (n.question) z.appendChild(h("p", { class: "classe-enonce", text: n.question }));
          var retour = h("div", { "aria-live": "polite" });
          var boite = h("div", { class: "classe-options colonne" });
          n.choix.forEach(function (c) {
            var nb = 0, cpt = h("span", { class: "classe-compte", text: "0" });
            var voter = h("button", { class: "classe-option", type: "button", "aria-label": c.texte + " : ajouter une main levée", on: { click: function () { nb++; cpt.textContent = String(nb); } } }, h("span", { text: c.texte }), cpt);
            var choisir = h("button", { class: "btn secondaire petit", type: "button", text: "Choisir", on: { click: function () {
              vider(retour);
              voter.classList.add(c.ok === false ? "autre" : "juste");
              retour.appendChild(h("p", { class: (c.ok === false ? "retour-ko" : "retour-ok") + " classe-explication", text: c.retour || "" }));
              if (c.ok !== false && c.vers) retour.appendChild(h("button", { class: "btn pilier", type: "button", text: "Continuer", on: { click: function () { noeud(c.vers); } } }));
            } } });
            boite.appendChild(h("div", { class: "classe-choix" }, voter, choisir));
          });
          z.appendChild(boite); z.appendChild(retour);
        }
        noeud(cas.depart);
        return null;
      } };
    });
  }
  function diaposDebat(a) {
    return a.config.affirmations.map(function (af, k) {
      return { titre: a.titre, rang: (k + 1) + " / " + a.config.affirmations.length, rendre: function (z) {
        z.appendChild(h("p", { class: "classe-enonce", text: "« " + af.texte + " »" }));
        var v = votes(["D'accord", "Pas d'accord", "Je ne sais pas"], -1); z.appendChild(v.noeud);
        return function () { var e = explication(af.repere); if (e) z.appendChild(e); };
      } };
    });
  }
  function diapoMoteur(a) {
    return [{ titre: a.titre, rang: "", rendre: function (z) {
      if (a.consigne) z.appendChild(h("p", { class: "classe-consigne", text: a.consigne }));
      var zone = h("div", { class: "classe-moteur carte pile" }); z.appendChild(zone);
      try { window.Moteurs[a.moteur](zone, JSON.parse(JSON.stringify(a.config)), { fini: function () {} }); }
      catch (e) { zone.appendChild(h("p", { text: "Cette activité se fait sur le téléphone ou sur la fiche." })); }
      return null;
    } }];
  }
  function diapos(s) {
    var d = [];
    d.push({ titre: "Pour commencer", rang: "", rendre: function (z) {
      if (s.rappel && s.rappel.texte) z.appendChild(h("p", { class: "classe-consigne", text: s.rappel.texte }));
      if (s.accroche) z.appendChild(h("p", { class: "classe-enonce", text: s.accroche }));
      z.appendChild(h("p", { class: "classe-consigne" }, h("strong", { text: "Aujourd'hui : " }), s.objectif));
      return null;
    } });
    (s.activites || []).forEach(function (a) {
      var t;
      if (a.moteur === "cartes" && a.config.manches.every(function (m) { return m.type === "classer"; })) t = diaposCartes(a);
      else if (a.moteur === "quiz") t = diaposQuiz(a, a.config.questions, a.titre);
      else if (a.moteur === "scenario") t = diaposScenario(a);
      else if (a.moteur === "debat") t = diaposDebat(a);
      else t = diapoMoteur(a);
      if (a.facultatif) t.forEach(function (x) { x.facultatif = true; });
      d = d.concat(t);
    });
    d.push({ titre: "À retenir", rang: "", rendre: function (z) { z.appendChild(h("ul", { class: "classe-liste" }, (s.retenir || []).map(function (r) { return h("li", { text: r }); }))); return null; } });
    if (s.verifie && s.verifie.length) d = d.concat(diaposQuiz(null, s.verifie, "Je vérifie"));
    d.push({ titre: "Et maintenant", rang: "", rendre: function (z) {
      var tr = (s.traces || []).map(function (t) { return t.titre; }).join(", ");
      z.appendChild(h("div", { class: "classe-fin" },
        h("div", { class: "pile" },
          tr ? h("p", { class: "classe-enonce", text: "Ta trace : " + tr }) : null,
          h("p", { class: "classe-consigne", text: "Sur ton téléphone si ton professeur l'autorise, ou sur la fiche imprimée." }),
          s.quizOfficiel ? h("p", { class: "classe-consigne", text: "Puis le quiz officiel du module " + s.quizOfficiel + "." }) : null),
        qr(adresse("seance/" + s.id), 7)));
      return null;
    } });
    return d;
  }

  function pageClasse(parts) {
    nettoyer();
    var s = seance(parts[1]); if (!s) return h("div", { class: "page" }, h("p", { text: "Séance introuvable." }), h("a", { class: "btn", href: "#/", text: "Accueil" }));
    var p = pilier(s.pilier); couleurs(p);
    var D = diapos(s), i = Math.max(0, Math.min(D.length - 1, parseInt(parts[2], 10) || 0)), reveler = null;
    var zone = h("div", { class: "classe-zone", "aria-live": "polite" });
    var titre = h("h1", { class: "classe-titre" }), rang = h("span", { class: "classe-rang" });
    var avance = h("span", { class: "classe-avance" });
    var bReveler = h("button", { class: "btn pilier", type: "button", text: "Révéler la réponse", on: { click: function () { if (reveler) { reveler(); reveler = null; bReveler.hidden = true; } } } });
    var bPrec = h("button", { class: "btn secondaire", type: "button", text: "Précédent", on: { click: function () { aller(i - 1); } } });
    var bSuiv = h("button", { class: "btn", type: "button", text: "Suivant", on: { click: function () { aller(i + 1); } } });
    // Minuteur
    var reste = 0, affiche = h("span", { class: "classe-chrono", role: "timer", text: "00:00" });
    function montrer() { var m = Math.floor(reste / 60), sec = reste % 60; affiche.textContent = (m < 10 ? "0" : "") + m + ":" + (sec < 10 ? "0" : "") + sec; affiche.classList.toggle("fini", reste === 0 && minuteur === null && affiche.dataset.lance === "1"); }
    function lancer(mn) {
      if (minuteur) clearInterval(minuteur);
      reste = mn * 60; affiche.dataset.lance = "1"; montrer();
      minuteur = setInterval(function () { reste--; if (reste <= 0) { reste = 0; clearInterval(minuteur); minuteur = null; } montrer(); }, 1000);
    }
    var chrono = h("div", { class: "classe-minuteur" }, affiche, [2, 5, 10].map(function (mn) {
      return h("button", { class: "btn secondaire petit", type: "button", "aria-label": "Minuteur de " + mn + " minutes", text: mn + " min", on: { click: function () { lancer(mn); } } });
    }), h("button", { class: "btn secondaire petit", type: "button", text: "Stop", on: { click: function () { if (minuteur) clearInterval(minuteur); minuteur = null; reste = 0; affiche.dataset.lance = "0"; montrer(); } } }));

    function aller(n) {
      if (n < 0 || n >= D.length) return;
      i = n;
      try { history.replaceState(null, "", "#/classe/" + s.id + "/" + i); } catch (e) {}
      var d = D[i];
      titre.textContent = d.titre + (d.facultatif ? " (facultative)" : "");
      rang.textContent = d.rang || "";
      avance.textContent = (i + 1) + " / " + D.length;
      vider(zone);
      reveler = d.rendre(zone) || null;
      bReveler.hidden = !reveler;
      bPrec.disabled = i === 0; bSuiv.disabled = i === D.length - 1;
      window.scrollTo(0, 0);
    }
    touches = function (ev) {
      var t = ev.target && ev.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT") return;
      if (ev.key === "ArrowRight" || ev.key === "PageDown") { ev.preventDefault(); if (reveler) bReveler.click(); else aller(i + 1); }
      else if (ev.key === "ArrowLeft" || ev.key === "PageUp") { ev.preventDefault(); aller(i - 1); }
    };
    document.addEventListener("keydown", touches);

    var page = h("div", { class: "classe" },
      h("header", { class: "classe-tete" },
        h("div", { class: "pile", style: "gap:2px" }, h("span", { class: "surtitre", text: p.nom + " · " + nomNiveau(s.niveau) + " · " + s.titre }), h("div", { class: "ligne", style: "align-items:baseline" }, titre, rang)),
        chrono),
      zone,
      h("footer", { class: "classe-pied" },
        h("a", { class: "btn secondaire petit", href: ouvert() ? "#/enseignant/" + s.niveau : "#/seance/" + s.id, text: "Quitter" }),
        h("div", { class: "ligne" }, bPrec, bReveler, bSuiv), avance));
    aller(i);
    return page;
  }

  window.CapApp = window.CapApp || {};
  CapApp.pages = { enseignant: pageEnseignant, classe: pageClasse };
})();
