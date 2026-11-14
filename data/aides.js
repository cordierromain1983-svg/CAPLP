/*
 * Petites fonctions pour écrire les séances plus vite (piliers Droits et E3D).
 * Elles fabriquent les mêmes objets que ceux écrits à la main dans les autres piliers.
 */
(function () {
  window.CAP_AIDE = {
    vf: function (e, b, x) { return { type: "vf", enonce: e, bonne: b, explication: x }; },
    qcm: function (e, o, b, x) { return { type: "qcm", enonce: e, options: o, bonne: b, explication: x }; },
    ouv: function (e, m) { return { type: "ouverte", enonce: e, modele: m }; },
    ordre: function (e, els, x, libre) { var q = { type: "ordre", enonce: e, elements: els, explication: x }; if (libre) q.libre = true; return q; },
    // cartes : [texte, réponse, explication facultative]
    cartes: function (l) { return l.map(function (c) { var o = { texte: c[0], reponse: c[1] }; if (c[2]) o.explication = c[2]; return o; }); },
    classer: function (titre, consigne, categories, cartes, fin, plus) {
      var a = { titre: titre, moteur: "cartes", consigne: consigne,
        config: { fin: fin, manches: [{ type: "classer", titre: titre, categories: categories, cartes: window.CAP_AIDE.cartes(cartes), bilan: fin }] } };
      for (var k in (plus || {})) a[k] = plus[k];
      return a;
    },
    quiz: function (titre, id, questions, consigne, plus) {
      var a = { titre: titre, moteur: "quiz", config: { id: id, questions: questions } };
      if (consigne) a.consigne = consigne;
      for (var k in (plus || {})) a[k] = plus[k];
      return a;
    },
    // options : [texte, bonne ?, retour]
    sit: function (titre, contexte, question, options, bilan) {
      var n = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
      options.forEach(function (o) { n.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
      return { titre: titre, depart: "a", noeuds: n };
    },
    scenario: function (titre, id, cas, consigne, plus) {
      var a = { titre: titre, moteur: "scenario", config: { id: id, cas: cas } };
      if (consigne) a.consigne = consigne;
      for (var k in (plus || {})) a[k] = plus[k];
      return a;
    },
    // champs : [id, libellé, plusieurs lignes ?]
    carnet: function (titre, id, description, champs, rendre) {
      var t = { titre: titre, moteur: "carnet", outil: { id: id, nom: titre, description: description },
        config: { cle: id, titreDoc: titre, champs: champs.map(function (c) { var o = { id: c[0], label: c[1] }; if (c[2]) o.multi = true; return o; }) } };
      if (rendre) t.rendre = true; else t.config.intro = "Pour toi seul : tu n'as jamais à rendre cette trace.";
      return t;
    },
    lien: function (titre, source, url, description) { return { titre: titre, source: source, url: url, description: description }; }
  };
})();
