/*
 * FAITS DATÉS — À RELIRE À CHAQUE RENTRÉE
 * ---------------------------------------
 * Tout ce qui change d'une année sur l'autre (calendrier Parcoursup, dates du bac, peines prévues
 * par la loi…) est rassemblé ici. Les séances y puisent avec A("cle") : modifier une valeur ici
 * la change partout dans l'application.
 *
 * Chaque rentrée :
 *   1. Ouvrez chaque « source » et vérifiez la valeur.
 *   2. Mettez à jour « verifie » (date du jour, au format AAAA-MM-JJ) et « annee ».
 *   3. Lancez  node tests/verifier.js  puis augmentez VERSION dans sw.js.
 * Le vérificateur signale ce fichier s'il n'a pas été relu depuis plus d'un an.
 *
 * « utilise » indique où la valeur apparaît, pour savoir quoi relire après un changement.
 */
(function () {
  var F = {
    // ---------- Année scolaire et examen ----------
    annee:            { texte: "2026-2027", source: "Calendrier scolaire", utilise: "Orientation Première S3, Terminale S2" },
    sessionBac:       { texte: "2027", source: "https://www.onisep.fr/formation/apres-la-3-la-voie-professionnelle/les-diplomes-de-la-voie-pro/le-bac-professionnel/le-bac-professionnel-le-point-sur-les-epreuves", utilise: "Orientation Première S3, Terminale S2 et S3" },
    ecritsDebut:      { texte: "3 juin", source: "Onisep, le bac professionnel : le point sur les épreuves", utilise: "Orientation Première S3, Terminale S2" },
    ecritsFin:        { texte: "15 juin", source: "Onisep, le bac professionnel : le point sur les épreuves", utilise: "Orientation Première S3, Terminale S2" },
    oralProjet:       { texte: "21 juin", source: "Onisep, le bac professionnel : le point sur les épreuves", utilise: "Orientation Première S3, Terminale S2 et S3" },
    oralProjetDuree:  { texte: "5 minutes de présentation, 10 minutes de questions", source: "Onisep, le bac professionnel : le point sur les épreuves", utilise: "Orientation Terminale S3" },
    parcoursPersoDuree: { texte: "deux semaines", source: "https://www.letudiant.fr/lycee/lycee-pro-cap/bac-pro-le-ministere-recule-et-maintient-le-parcours-en-y.html", utilise: "Orientation Première S3, Terminale S2" },
    parcoursPersoQuand: { texte: "Avant la mi-mars", source: "https://www.letudiant.fr/lycee/lycee-pro-cap/bac-pro-le-ministere-recule-et-maintient-le-parcours-en-y.html", utilise: "Orientation Première S3, Terminale S2" },

    // ---------- Parcoursup ----------
    parcoursupCarte:  { texte: "17 décembre 2026", source: "https://www.onisep.fr/orientation/l-enseignement-superieur/parcoursup-2027/parcoursup-2027-calendrier-et-etapes-de-la-procedure", utilise: "Orientation Terminale S2" },
    voeuxDebut:       { texte: "18 janvier", source: "Onisep, Parcoursup : calendrier et étapes", utilise: "Orientation Première S3, Terminale S2" },
    voeuxFin:         { texte: "11 mars", source: "Onisep, Parcoursup : calendrier et étapes", utilise: "Orientation Première S3, Terminale S2" },
    voeuxMax:         { texte: "10", source: "Onisep, Parcoursup : calendrier et étapes", utilise: "Orientation Terminale S2" },
    piecesLimite:     { texte: "1er avril", source: "Onisep, Parcoursup : calendrier et étapes", utilise: "Orientation Terminale S2" },
    propositions:     { texte: "1er juin", source: "Onisep, Parcoursup : calendrier et étapes", utilise: "Orientation Terminale S2" },
    complementaire:   { texte: "10 juin – 7 septembre", source: "Onisep, Parcoursup : calendrier et étapes", utilise: "Orientation Terminale S2" },
    urlParcoursup:    { texte: "https://www.onisep.fr/orientation/l-enseignement-superieur/parcoursup-2027/parcoursup-2027-calendrier-et-etapes-de-la-procedure", source: "Onisep (l'adresse change chaque année)", utilise: "Orientation Terminale S2" },

    // ---------- Lois et règlements ----------
    iaTransparence:   { texte: "2 août 2026", source: "Règlement européen sur l'IA (obligations de transparence)", utilise: "Cyber Terminale S1" },
    loiSren:          { texte: "21 mai 2024", source: "https://www.legifrance.gouv.fr (loi n° 2024-449 visant à sécuriser et à réguler l'espace numérique)", utilise: "Cyber Terminale S1" },
    peineDeepfake:    { texte: "2 ans de prison et 45 000 € d'amende", source: "Code pénal, article 226-8 (diffusion en ligne)", utilise: "Cyber Terminale S1" },
    peineDeepfakeSex: { texte: "3 ans de prison et 75 000 € d'amende", source: "Code pénal, article 226-8-1 (diffusion en ligne)", utilise: "Cyber Terminale S1" },
    loiConsentement:  { texte: "6 novembre 2025", source: "Loi n° 2025-1057 du 6 novembre 2025", utilise: "EVARS Première S2" },
    loiConsentementMois: { texte: "novembre 2025", source: "Loi n° 2025-1057 du 6 novembre 2025", utilise: "EVARS Première S2" }
  };

  var manquants = [];
  window.CAP_ACTU = {
    verifie: "2026-11-01",
    faits: F,
    manquants: manquants,
    texte: function (cle) {
      if (F[cle]) return F[cle].texte;
      manquants.push(cle);
      return "[à vérifier]";
    }
  };
})();
