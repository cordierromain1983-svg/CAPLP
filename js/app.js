/*
 * Cap'Autonomie — navigation et pages
 * Routes : #/  #/pilier/cps  #/seance/<id>  #/outils  #/outil/<id>  #/espace  #/aide
 */
(function () {
  var main = document.getElementById("contenu");
  var CONFIG = window.CAP_CONFIG;
  var PILIERS = window.CAP_PILIERS;
  var NIVEAUX = window.CAP_NIVEAUX;
  var SEANCES = window.CAP_SEANCES;

  // ---------- Services communs ----------
  var CapApp = {
    toast: function (msg) {
      var t = h("div", { class: "toast", role: "status", text: msg });
      document.body.appendChild(t);
      setTimeout(function () { t.remove(); }, 2600);
    },
    imprimer: function (titre, noeud) {
      var doc = document.getElementById("doc-impression");
      vider(doc);
      doc.appendChild(h("h1", { text: titre }));
      doc.appendChild(h("p", { class: "sous", text: "Cap'Autonomie · " + new Date().toLocaleDateString("fr-FR") }));
      doc.appendChild(noeud);
      document.body.classList.add("imprime-doc");
      setTimeout(function () {
        window.print();
        setTimeout(function () { document.body.classList.remove("imprime-doc"); }, 500);
      }, 50);
    }
  };
  window.CapApp = CapApp;

  function pilier(id) { return PILIERS.filter(function (p) { return p.id === id; })[0]; }
  function seance(id) { return SEANCES.filter(function (s) { return s.id === id; })[0]; }
  function couleurs(p) {
    document.documentElement.style.setProperty("--p", p ? p.couleur : "#5B30AA");
    document.documentElement.style.setProperty("--p-fond", p ? p.fond : "#F1EBFB");
  }
  function progres() { return Store.get("progres", {}); }
  function marquer(sid, partie) {
    var pr = progres();
    pr[sid] = pr[sid] || {};
    if (pr[sid][partie]) return;
    pr[sid][partie] = true;
    Store.set("progres", pr);
  }
  function estFaite(sid) { var p = progres()[sid]; return !!(p && p.activite && p.verifie); }

  function lienRetour(href, texte) {
    return h("a", { class: "retour", href: href }, icone("retour"), texte);
  }
  function boutonAide() {
    return h("a", { class: "btn-aide", href: "#/aide" },
      (function () {
        var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        s.setAttribute("width", "18"); s.setAttribute("height", "18"); s.setAttribute("viewBox", "0 0 24 24");
        s.setAttribute("fill", "none"); s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "2"); s.setAttribute("aria-hidden", "true");
        s.innerHTML = '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>';
        return s;
      })(), "Besoin d'aide");
  }
  function barreAide() {
    return h("div", { class: "barre-aide" }, h("span", { text: "Besoin d'en parler ?" }), h("a", { href: "#/aide", text: "Les adultes et numéros utiles" }));
  }

  // ---------- Page : accueil ----------
  function pageAccueil() {
    couleurs(null);
    var page = h("div", { class: "page" });
    var classe = Store.get("niveau", "2nde");
    var sel = h("select", { id: "niveau", style: "width:auto;padding:6px 10px;font-size:14px", on: { change: function () { Store.set("niveau", sel.value); } } },
      NIVEAUX.map(function (n) { var o = h("option", { value: n.id, text: n.nom }); if (n.id === classe) o.selected = true; return o; }));
    page.appendChild(h("header", { class: "entete" },
      h("div", { class: "pile", style: "gap:2px" },
        h("h1", { class: "marque", text: "Cap'Autonomie" }),
        h("div", { class: "ligne", style: "gap:6px" }, h("label", { for: "niveau", class: "sous-titre", text: "Ma classe :" }), sel)),
      boutonAide()));

    var derniere = seance(Store.get("derniere", ""));
    if (derniere) {
      var pd = pilier(derniere.pilier);
      page.appendChild(h("a", { class: "seance-lien", href: "#/seance/" + derniere.id, style: "background:" + pd.fond + ";border-color:transparent" },
        h("span", { class: "pile", style: "gap:2px;flex:1" },
          h("span", { class: "etiquette", text: "Reprendre" }),
          h("span", { class: "t", text: derniere.titre }),
          h("span", { class: "s", text: pd.nom + " · " + nomNiveau(derniere.niveau) + " · Séance " + derniere.num })),
        icone("fleche")));
    }

    page.appendChild(h("div", { class: "entre" }, h("h2", { class: "titre-bloc", text: "Les 7 piliers" }), h("span", { class: "texte-doux", text: "comme en classe" })));
    var grille = h("div", { class: "grille-2" });
    PILIERS.forEach(function (p, k) {
      var attrs = { class: "tuile" + (p.actif ? "" : " inactif") + (k === PILIERS.length - 1 ? " large" : ""), style: "background:" + p.fond };
      var contenu = [
        h("span", { class: "nom", style: "color:" + p.couleur, text: p.nom }),
        h("span", { class: "num", style: "color:" + p.couleur, text: String(p.num) }),
        h("span", { class: "sous", text: p.sous }),
        p.actif ? null : h("span", { class: "bientot", text: "Bientôt" })
      ];
      if (p.actif) { attrs.href = "#/pilier/" + p.id; grille.appendChild(h("a", attrs, contenu)); }
      else { attrs["aria-disabled"] = "true"; grille.appendChild(h("div", attrs, contenu)); }
    });
    page.appendChild(grille);
    page.appendChild(h("p", { class: "note", text: "Tout ce que tu écris reste sur cet appareil. Rien n'est envoyé sur internet." }));
    return page;
  }
  function nomNiveau(id) { var n = NIVEAUX.filter(function (x) { return x.id === id; })[0]; return n ? n.nom : id; }

  // ---------- Page : pilier ----------
  function pagePilier(pid, niv) {
    var p = pilier(pid);
    if (!p || !p.actif) return pageIntrouvable();
    couleurs(p);
    niv = niv || Store.get("niveau", "2nde");
    var page = h("div");
    page.appendChild(h("header", { class: "bandeau" },
      lienRetour("#/", "Accueil"),
      h("span", { class: "surtitre", text: "Pilier " + p.num }),
      h("h1", { class: "titre-page", text: p.nom }),
      h("p", { class: "meta", text: p.sous })));
    var corps = h("div", { class: "page" });
    var onglets = h("div", { class: "ligne", role: "tablist", "aria-label": "Niveau" });
    NIVEAUX.forEach(function (n) {
      var nb = SEANCES.filter(function (s) { return s.pilier === pid && s.niveau === n.id; }).length;
      var actif = n.id === niv;
      var b = h("a", { class: "puce" + (actif ? " active" : ""), role: "tab", "aria-selected": actif ? "true" : "false",
        href: nb ? "#/pilier/" + pid + "/" + n.id : null, "aria-disabled": nb ? null : "true", style: nb ? null : "opacity:.5" },
        n.nom + (nb ? "" : " · bientôt"));
      onglets.appendChild(b);
    });
    corps.appendChild(onglets);
    var liste = SEANCES.filter(function (s) { return s.pilier === pid && s.niveau === niv; }).sort(function (a, b) { return a.num - b.num; });
    var nv = NIVEAUX.filter(function (x) { return x.id === niv; })[0];
    if (nv) corps.appendChild(h("p", { class: "texte-doux", text: nv.nom + " " + nv.theme + " · " + liste.length + " séances de 45 minutes" }));
    if (!liste.length) corps.appendChild(h("p", { class: "vide", text: "Les séances de ce niveau arrivent bientôt." }));
    var pile = h("div", { class: "pile" });
    liste.forEach(function (s) {
      pile.appendChild(h("a", { class: "seance-lien", href: "#/seance/" + s.id },
        h("span", { class: "seance-num", text: String(s.num) }),
        h("span", { class: "pile", style: "gap:2px;flex:1" },
          h("span", { class: "t", text: s.titre }),
          h("span", { class: "s", text: s.objectifCourt || s.duree }),
          estFaite(s.id) ? h("span", { class: "fait", text: "Séance faite" }) : null),
        icone("fleche")));
    });
    corps.appendChild(pile);
    page.appendChild(corps);
    return page;
  }

  // ---------- Page : séance ----------
  function pageSeance(sid) {
    var s = seance(sid);
    if (!s) return pageIntrouvable();
    var p = pilier(s.pilier);
    couleurs(p);
    Store.set("derniere", s.id);
    var page = h("div");
    page.appendChild(h("header", { class: "bandeau" },
      lienRetour("#/pilier/" + p.id + "/" + s.niveau, p.nom + " · " + nomNiveau(s.niveau)),
      h("span", { class: "surtitre", text: p.nom + " · " + nomNiveau(s.niveau) + " · Séance " + s.num }),
      h("h1", { class: "titre-page", text: s.titre }),
      h("p", { class: "meta", text: s.duree + " · " + s.objectif }),
      passerelles(s)));

    var corps = h("div", { class: "page" });

    // Lien avec la séance précédente
    if (s.rappel) {
      var prec = s.rappel.seance ? seance(s.rappel.seance) : null;
      corps.appendChild(h("section", { class: "rappel", "aria-label": prec ? "La dernière fois" : "Pour commencer l'année" },
        h("span", { class: "etiquette", style: "color:" + p.couleur, text: s.rappel.etiquette || (prec ? "La dernière fois" : "On commence") }),
        h("p", { text: s.rappel.texte }),
        prec ? h("a", { class: "retour", href: "#/seance/" + prec.id, style: "color:" + p.couleur }, "Revoir la séance " + prec.num + (prec.niveau !== s.niveau ? " de " + nomNiveau(prec.niveau) : "") + " : " + prec.titre, icone("fleche")) : null));
    }

    // À quoi ça me sert ?
    corps.appendChild(h("section", { class: "carte aqcms", "aria-labelledby": "aqcms" },
      h("h2", { id: "aqcms", class: "titre-bloc", text: "À quoi ça me sert ?" }),
      h("dl", null,
        h("div", null, h("dt", { text: "Pourquoi j'apprends ça" }), h("dd", { text: s.aqcms.pourquoi })),
        h("div", null, h("dt", { text: "Ce que ça m'apporte" }), h("dd", { text: s.aqcms.apport })),
        h("div", null, h("dt", { text: "Où je le réutilise" }), h("dd", { text: s.aqcms.ou })),
        h("div", null, h("dt", { text: "C'est lié à" }), h("dd", { text: s.aqcms.lie })))));

    // Pour commencer
    if (s.accroche) corps.appendChild(h("section", { class: "pile" },
      h("h2", { class: "titre-bloc", text: "Pour commencer" }),
      h("div", { class: "bulle contexte", text: s.accroche })));

    // Activités (une ou plusieurs)
    (s.activites || []).forEach(function (a, k) {
      corps.appendChild(section(a, "act-" + k, function () { marquer(s.id, "activite"); }));
    });

    // Ce qu'il faut retenir
    if (s.retenir) corps.appendChild(h("section", { class: "carte pile", style: "background:" + p.fond + ";border-color:transparent" },
      h("h2", { class: "titre-bloc", text: "Ce qu'il faut retenir" }),
      h("ul", { style: "margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px" }, s.retenir.map(function (r) { return h("li", { text: r }); }))));

    // Ma fiche ressource (à imprimer)
    if (s.ressource) corps.appendChild(sectionFiche(s));

    // Ce que je garde
    (s.traces || []).forEach(function (t, k) {
      corps.appendChild(section(t, "trace-" + k, function () { marquer(s.id, "trace"); }, "Ce que je garde"));
    });

    // Je vérifie
    if (s.verifie) {
      var zq = h("div", { class: "pile" });
      corps.appendChild(h("section", { class: "pile", "aria-labelledby": "verif" },
        h("h2", { id: "verif", class: "titre-bloc", text: "Je vérifie ce que j'ai compris" }), zq));
      Moteurs.quiz(zq, { id: s.id, questions: s.verifie }, { fini: function () { marquer(s.id, "verifie"); } });
    }

    // Pour aller plus loin
    if (s.plusLoin && s.plusLoin.length) {
      corps.appendChild(h("section", { class: "pile", "aria-labelledby": "loin" },
        h("h2", { id: "loin", class: "titre-bloc", text: "Pour aller plus loin" }),
        s.plusLoin.map(function (r) {
          return h("a", { class: "lien-ext", href: r.url, target: "_blank", rel: "noopener" },
            h("span", { class: "pile", style: "gap:2px;flex:1" },
              h("span", { class: "t", text: r.titre }),
              h("span", { class: "s", text: r.source + " · " + r.description })),
            h("span", { class: "sr-only", text: "(s'ouvre dans un nouvel onglet)" }),
            icone("fleche"));
        }),
        h("p", { class: "note", text: "Ces liens mènent vers des sites extérieurs : il faut une connexion internet." })));
    }

    // La fiche de l'adulte (s.adulte) n'est pas affichée ici :
    // elle sera réservée à l'espace enseignant.

    corps.appendChild(barreAide());
    page.appendChild(corps);
    return page;
  }
  function section(a, id, fini, surtitre) {
    var zone = h("div", { class: "pile" });
    var sec = h("section", { class: "carte pile", "aria-labelledby": id },
      h("div", { class: "pile", style: "gap:4px" },
        h("span", { class: "etiquette", text: surtitre || "Activité" }),
        h("h2", { id: id, class: "titre-bloc", text: a.titre })),
      a.consigne ? h("p", { class: "texte-doux", text: a.consigne }) : null,
      zone);
    Moteurs[a.moteur](zone, a.config, { fini: fini });
    return sec;
  }
  function sectionFiche(s) {
    var r = s.ressource;
    var contenu = Fiches.fiche(r);
    return h("section", { class: "carte pile", "aria-labelledby": "fiche-" + s.id },
      h("div", { class: "entre", style: "align-items:flex-start" },
        h("div", { class: "pile", style: "gap:4px" },
          h("span", { class: "etiquette", text: "Ma fiche à garder" }),
          h("h2", { id: "fiche-" + s.id, class: "titre-bloc", text: r.titre }))),
      contenu,
      h("button", { class: "btn pilier", type: "button", style: "align-self:flex-start", on: { click: function () {
        CapApp.imprimer(r.titre, Fiches.fiche(r));
      } } }, icone("imprime"), "Imprimer ou enregistrer en PDF"));
  }
  function passerelles(s) {
    // Les liens entre piliers seront activés lors de la « passe de liens ».
    var liens = (s.passerelles || []).filter(function (l) { var p = pilier(l.pilier); return p && p.actif; });
    if (!liens.length) return null;
    return h("div", { class: "ligne", style: "gap:6px" }, h("span", { class: "etiquette", text: "Aussi dans :" }),
      liens.map(function (l) { var p = pilier(l.pilier); return h("a", { class: "puce", href: l.href, style: "background:#fff;color:" + p.couleur + ";font-weight:700" }, h("span", { class: "point" }), p.nom); }));
  }
  function ficheAdulte(s) {
    var tbody = h("tbody");
    s.adulte.deroule.forEach(function (l) { tbody.appendChild(h("tr", null, l.map(function (c) { return h("td", { text: c }); }))); });
    return h("details", { class: "fiche-adulte no-print" },
      h("summary", null, h("span", { text: "Fiche de l'adulte : déroulé de la séance" }), icone("fleche")),
      h("div", { class: "fiche-corps" },
        h("p", { class: "note", text: "Pour l'adulte qui anime. Chaque séance se suffit à elle-même." }),
        h("div", { class: "tableau-defile" },
          h("table", { class: "deroule" },
            h("thead", null, h("tr", null, ["Temps", "Phase", "Ce que fait l'élève", "Rôle de l'adulte"].map(function (t) { return h("th", { scope: "col", text: t }); }))),
            tbody)),
        s.adulte.vigilance ? h("div", { class: "alerte" }, h("strong", { text: "Vigilance : " }), s.adulte.vigilance) : null));
  }

  // ---------- Boîte à outils ----------
  function tousLesOutils() {
    var out = [];
    SEANCES.forEach(function (s) {
      (s.activites || []).concat(s.traces || []).forEach(function (a) {
        if (a.outil) out.push({ id: a.outil.id, nom: a.outil.nom, description: a.outil.description, bloc: a, seance: s });
      });
    });
    return out;
  }
  function pageOutils() {
    couleurs(null);
    var page = h("div", { class: "page" });
    page.appendChild(h("header", { class: "entete" }, h("h1", { class: "marque", text: "Ma boîte à outils" }), boutonAide()));
    page.appendChild(h("p", { class: "texte-doux", text: "Les outils que tu peux utiliser quand tu veux, en classe, en stage ou chez toi." }));
    var parPilier = {};
    tousLesOutils().forEach(function (o) { (parPilier[o.seance.pilier] = parPilier[o.seance.pilier] || []).push(o); });
    Object.keys(parPilier).forEach(function (pid) {
      var p = pilier(pid);
      page.appendChild(h("h2", { class: "titre-bloc", style: "color:" + p.couleur, text: p.nom }));
      var pile = h("div", { class: "pile" });
      parPilier[pid].forEach(function (o) {
        pile.appendChild(h("a", { class: "seance-lien", href: "#/outil/" + o.id },
          h("span", { class: "pile", style: "gap:2px;flex:1" },
            h("span", { class: "t", text: o.nom }),
            h("span", { class: "s", text: o.description })),
          icone("fleche")));
      });
      page.appendChild(pile);
    });
    // Les fiches ressources, regroupées par pilier
    var fiches = SEANCES.filter(function (s) { return s.ressource; });
    if (fiches.length) {
      page.appendChild(h("h2", { class: "titre-bloc", text: "Mes fiches à imprimer" }));
      var pf = h("div", { class: "pile" });
      fiches.forEach(function (s) {
        var p = pilier(s.pilier);
        pf.appendChild(h("a", { class: "seance-lien", href: "#/fiche/" + s.id },
          h("span", { class: "pile", style: "gap:2px;flex:1" },
            h("span", { class: "t", text: s.ressource.titre }),
            h("span", { class: "s", text: p.nom + " · " + nomNiveau(s.niveau) + " · Séance " + s.num })),
          icone("fleche")));
      });
      page.appendChild(pf);
    }
    return page;
  }
  function pageFiche(sid) {
    var s = seance(sid);
    if (!s || !s.ressource) return pageIntrouvable();
    var p = pilier(s.pilier);
    couleurs(p);
    var page = h("div");
    page.appendChild(h("header", { class: "bandeau" },
      lienRetour("#/outils", "Ma boîte à outils"),
      h("span", { class: "surtitre", text: p.nom + " · " + nomNiveau(s.niveau) + " · Séance " + s.num }),
      h("h1", { class: "titre-page", text: s.ressource.titre })));
    var corps = h("div", { class: "page" });
    corps.appendChild(h("div", { class: "carte pile" }, Fiches.fiche(s.ressource)));
    corps.appendChild(h("div", { class: "ligne" },
      h("button", { class: "btn pilier", type: "button", on: { click: function () { CapApp.imprimer(s.ressource.titre, Fiches.fiche(s.ressource)); } } }, icone("imprime"), "Imprimer ou enregistrer en PDF"),
      h("a", { class: "btn secondaire", href: "#/seance/" + s.id }, "Revoir la séance")));
    page.appendChild(corps);
    return page;
  }
  function pageOutil(oid) {
    var o = tousLesOutils().filter(function (x) { return x.id === oid; })[0];
    if (!o) return pageIntrouvable();
    var p = pilier(o.seance.pilier);
    couleurs(p);
    var page = h("div");
    page.appendChild(h("header", { class: "bandeau" },
      lienRetour("#/outils", "Ma boîte à outils"),
      h("span", { class: "surtitre", text: p.nom + " · vu en " + nomNiveau(o.seance.niveau) + ", séance " + o.seance.num }),
      h("h1", { class: "titre-page", text: o.nom }),
      h("p", { class: "meta", text: o.description })));
    var corps = h("div", { class: "page" });
    var zone = h("div", { class: "carte pile" });
    corps.appendChild(zone);
    Moteurs[o.bloc.moteur](zone, o.bloc.config, {});
    corps.appendChild(h("a", { class: "btn secondaire", href: "#/seance/" + o.seance.id, style: "align-self:flex-start" }, "Revoir la séance", icone("fleche")));
    page.appendChild(corps);
    return page;
  }

  // ---------- Mon espace ----------
  function pageEspace() {
    couleurs(null);
    var page = h("div", { class: "page" });
    page.appendChild(h("header", { class: "entete" }, h("h1", { class: "marque", text: "Mon espace" }), boutonAide()));

    // Progression
    var pr = progres();
    var sec = h("section", { class: "carte pile" }, h("h2", { class: "titre-bloc", text: "Ma progression" }));
    PILIERS.filter(function (p) { return p.actif; }).forEach(function (p) {
      NIVEAUX.forEach(function (n) {
        var ss = SEANCES.filter(function (s) { return s.pilier === p.id && s.niveau === n.id; });
        if (!ss.length) return;
        var faites = ss.filter(function (s) { return estFaite(s.id); }).length;
        sec.appendChild(h("div", { class: "pile", style: "gap:6px" },
          h("div", { class: "entre" }, h("span", { style: "font-weight:700", text: p.nom + " · " + n.nom }), h("span", { class: "texte-doux", text: faites + " / " + ss.length + " séances" })),
          h("div", { class: "progression", role: "img", "aria-label": faites + " séances faites sur " + ss.length }, h("span", { style: "width:" + Math.round(faites / ss.length * 100) + "%;background:" + p.couleur }))));
      });
    });
    sec.appendChild(h("p", { class: "note", text: "Une séance est faite quand l'activité et « Je vérifie » sont terminés. Pas de note, pas de classement." }));
    page.appendChild(sec);

    // Mes outils personnels
    page.appendChild(h("h2", { class: "titre-bloc", text: "Mes traces" }));
    var pile = h("div", { class: "pile" });
    tousLesOutils().filter(function (o) { return o.bloc.config && o.bloc.config.cle; }).forEach(function (o) {
      var data = Store.get(o.bloc.config.cle, null);
      var rempli = data && (Array.isArray(data) ? data.length : (data.choix ? data.choix.length : Object.keys(data).some(function (k) { return (data[k] || "").toString().trim(); })));
      pile.appendChild(h("a", { class: "seance-lien", href: "#/outil/" + o.id },
        h("span", { class: "pile", style: "gap:2px;flex:1" }, h("span", { class: "t", text: o.nom }), h("span", { class: "s", text: rempli ? "Commencé" : "Pas encore commencé" })),
        icone("fleche")));
    });
    page.appendChild(pile);

    // Sauvegarde et effacement
    var fichier = h("input", { type: "file", accept: "application/json,.json", id: "import", class: "sr-only", on: { change: function () {
      var f = fichier.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try { Store.importer(JSON.parse(r.result)); CapApp.toast("Sauvegarde restaurée."); route(); }
        catch (e) { CapApp.toast("Ce fichier n'est pas une sauvegarde Cap'Autonomie."); }
      };
      r.readAsText(f);
    } } });
    page.appendChild(h("section", { class: "carte pile" },
      h("h2", { class: "titre-bloc", text: "Mes données" }),
      Store.disponible ? null : h("p", { class: "alerte", text: "Ton navigateur bloque l'enregistrement : ce que tu écris sera perdu en fermant la page." }),
      h("p", { class: "texte-doux", text: "Tout est enregistré sur cet appareil uniquement. Sur un ordinateur partagé du lycée, pense à tout effacer avant de partir." }),
      h("div", { class: "ligne" },
        h("button", { class: "btn secondaire petit", type: "button", on: { click: function () {
          var blob = new Blob([JSON.stringify(Store.exporter(), null, 2)], { type: "application/json" });
          var a = h("a", { href: URL.createObjectURL(blob), download: "cap-autonomie-sauvegarde.json" });
          document.body.appendChild(a); a.click(); a.remove();
        } } }, "Télécharger ma sauvegarde"),
        h("label", { class: "btn secondaire petit", for: "import", tabindex: "0", on: { keydown: function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fichier.click(); } } } }, "Restaurer une sauvegarde"),
        fichier),
      h("button", { class: "btn danger petit", type: "button", style: "align-self:flex-start", on: { click: function () {
        if (!confirm("Effacer toutes tes données de cet appareil ? Cette action est définitive.")) return;
        Store.toutEffacer(); CapApp.toast("Tout a été effacé."); route();
      } } }, icone("poubelle"), "Tout effacer de cet appareil")));
    return page;
  }

  // ---------- Aide ----------
  function pageAide() {
    couleurs(null);
    var page = h("div", { class: "page" });
    page.appendChild(h("button", { class: "retour", type: "button", style: "border:none;background:none;padding:0;cursor:pointer;align-self:flex-start",
      on: { click: function () { if (history.length > 1) history.back(); else location.hash = "#/"; } } }, icone("retour"), "Retour"));
    page.appendChild(h("h1", { class: "titre-page", text: "Besoin d'aide ?" }));
    page.appendChild(h("p", { text: "Tu n'as pas à rester seul avec ce qui te pèse. Parler à quelqu'un, ce n'est pas « balancer » : c'est se protéger ou protéger quelqu'un." }));
    page.appendChild(h("div", { class: "alerte" }, h("strong", { text: "En cas de danger immédiat : " }), "appelle le 17 ou le 112, ou va voir tout de suite un adulte du lycée."));
    page.appendChild(h("h2", { class: "titre-bloc", text: "Au lycée" + (CONFIG.etablissement ? " · " + CONFIG.etablissement : "") }));
    var adultes = h("div", { class: "pile" });
    CONFIG.adultes.forEach(function (a) {
      adultes.appendChild(h("div", { class: "carte", style: "padding:12px 14px" },
        h("p", { style: "font-weight:700", text: a.role }),
        h("p", { class: "texte-doux", text: [a.ou, a.quand].filter(Boolean).join(" · ") })));
    });
    page.appendChild(adultes);
    page.appendChild(h("h2", { class: "titre-bloc", text: "Numéros gratuits" }));
    var nums = h("div", { class: "pile" });
    CONFIG.numeros.forEach(function (n) {
      var tel = n.numero.split(" ou ")[0].replace(/\s/g, "");
      nums.appendChild(h("div", { class: "carte numero", style: "padding:12px 14px" },
        h("a", { class: "n", href: "tel:" + tel, text: n.numero }),
        h("div", { class: "pile", style: "gap:2px" }, h("p", { style: "font-weight:700", text: n.titre }), h("p", { class: "texte-doux", text: n.detail }))));
    });
    page.appendChild(nums);
    return page;
  }

  function pageIntrouvable() {
    couleurs(null);
    return h("div", { class: "page" }, h("h1", { class: "titre-page", text: "Page introuvable" }), h("a", { class: "btn", href: "#/", text: "Revenir à l'accueil" }));
  }

  // ---------- Routeur ----------
  function route() {
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var vue, nav = "accueil";
    switch (parts[0]) {
      case "": vue = pageAccueil(); break;
      case "pilier": vue = pagePilier(parts[1], parts[2]); break;
      case "seance": vue = pageSeance(parts[1]); break;
      case "outils": vue = pageOutils(); nav = "outils"; break;
      case "outil": vue = pageOutil(parts[1]); nav = "outils"; break;
      case "fiche": vue = pageFiche(parts[1]); nav = "outils"; break;
      case "espace": vue = pageEspace(); nav = "espace"; break;
      case "aide": vue = pageAide(); nav = ""; break;
      default: vue = pageIntrouvable();
    }
    vider(main);
    main.appendChild(vue);
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var t = main.querySelector("h1");
    document.title = (t && t.textContent !== "Cap'Autonomie" ? t.textContent + " · " : "") + "Cap'Autonomie";
    window.scrollTo(0, 0);
    try { main.focus({ preventScroll: true }); } catch (e) {}
  }
  window.addEventListener("hashchange", route);
  route();

  // ---------- Hors ligne (si hébergé en https) ----------
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
