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

    // ---------- Argent (EDUCFI) ----------
    passeportNote:    { texte: "9 février 2026", source: "https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2603225N (note de service, BO n° 10 du 5 mars 2026)", utilise: "EDUCFI Seconde (cadre), S8" },
    livretATaux:      { texte: "1,7 %", source: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2365 (révisé le 1er février et le 1er août)", utilise: "EDUCFI Seconde S4, S8" },
    livretARevision:  { texte: "1er février 2027", source: "Banque de France, révision semestrielle des taux réglementés", utilise: "EDUCFI Seconde S4" },
    livretAPlafond:   { texte: "22 950 €", source: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2365", utilise: "EDUCFI Seconde S4" },
    livretJeunePlafond: { texte: "1 600 €", source: "https://www.economie.gouv.fr/particuliers/epargne-livret-jeune", utilise: "EDUCFI Seconde S4" },
    pfmp2nde:         { texte: "10 € par jour de stage, jusqu'à 300 € sur l'année", source: "https://eduscol.education.gouv.fr/sites/default/files/document/faq-allocation-des-pfmp-pour-les-lyceens-professionnels-102372.pdf", utilise: "EDUCFI Seconde S1, S2" },
    pfmp1re:          { texte: "15 € par jour de stage, jusqu'à 600 € sur l'année", source: "FAQ allocation des PFMP (éduscol)", utilise: "EDUCFI Première S1" },
    especesPlafond:   { texte: "1 000 €", source: "Code monétaire et financier, paiement en espèces à un professionnel", utilise: "EDUCFI Seconde S3" },
    fractionneDate:   { texte: "20 novembre 2026", source: "Ordonnance n° 2025-880 du 3 septembre 2025 (directive européenne 2023/2225)", utilise: "EDUCFI Seconde S5" },
    defautAssurance:  { texte: "3 750 €", source: "Code des assurances, article L. 324-2", utilise: "EDUCFI Seconde S6" },
    smicBrut:         { texte: "1 867,02 €", source: "https://www.legisocial.fr/reperes-sociaux/montant-smic-2026-taux-horaire-net-brut.html (SMIC au 1er juin 2026)", utilise: "EDUCFI Première S1, Terminale S3" },
    smicNet:          { texte: "environ 1 478 €", source: "SMIC au 1er juin 2026, net estimé pour 35 heures", utilise: "EDUCFI Première S1, Terminale S3" },
    smicNetNombre:    { texte: "1478", source: "SMIC net mensuel arrondi, utilisé par le simulateur", utilise: "EDUCFI Terminale S3" },
    apprentiMoins18:  { texte: "27 % du SMIC", source: "https://www.alternance.emploi.gouv.fr (grille de rémunération de l'apprenti)", utilise: "EDUCFI Première S1" },
    apprentiMoins18Euros: { texte: "environ 504 € brut par mois", source: "27 % du SMIC au 1er juin 2026", utilise: "EDUCFI Première S1" },
    demarchageDate:   { texte: "11 août 2026", source: "https://economie.gouv.fr/dgccrf/les-fiches-pratiques/les-regles-du-demarchage-telephonique-simposant-aux-entreprises", utilise: "EDUCFI Première S2" },
    permis1Euro:      { texte: "de 600 à 1 200 €, remboursés au plus 30 € par mois", source: "https://www.justice.fr/fiche/payer-permis-conduire-permis-euro-apprenti-chomeur", utilise: "EDUCFI Première S3" },
    primeActiviteSeuil: { texte: "environ 1 144 € net par mois", source: "CAF, seuil d'environ 78 % du SMIC pour les apprentis et étudiants salariés (juin 2026)", utilise: "EDUCFI Terminale S2" },
    cejMax:           { texte: "environ 552 € par mois", source: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/aides-financieres-et-autres-allo/autres-allocations/lallocation-cej--les-reponses-a.html", utilise: "EDUCFI Terminale S2" },
    visaleAge:        { texte: "18 à 30 ans", source: "https://www.actionlogement.fr/la-garantie-visale", utilise: "EDUCFI Terminale S1" },

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
    verifie: "2026-11-11",
    faits: F,
    manquants: manquants,
    texte: function (cle) {
      if (F[cle]) return F[cle].texte;
      manquants.push(cle);
      return "[à vérifier]";
    }
  };
})();
