/*
 * PILIER EDUCFI « BUDGET EXPRESS » · PREMIÈRE (« Moi et les autres » → « Mon premier salaire »)
 * Contenu validé (document « Pilier EDUCFI – Première »).
 * Quatre séances d'approfondissement de 55 minutes, comme le prévoit la note de service du 9 février 2026.
 * Les chiffres qui changent (SMIC, apprentissage, allocation de PFMP…) viennent de data/actualites.js.
 * Ressources vérifiées le 11 novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var A = window.CAP_ACTU.texte;
  var DUREE = "55 min";
  var MQD = { titre: "Mes questions d'argent", source: "Banque de France", url: "https://www.mesquestionsdargent.fr", description: "Le portail public d'éducation financière : fiches, vidéos et quiz." };

  function situation(titre, contexte, question, options, bilan) {
    var noeuds = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
    options.forEach(function (o) { noeuds.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }
  var VIG = "On ne demande jamais à un élève ce qu'il gagne, ce que gagnent ses parents ou ce qu'il dépense vraiment : les exemples sont inventés. ";

  // ===================================================================
  // SÉANCE 1 · Ma fiche de paie
  // ===================================================================
  S.push({
    id: "educfi-1re-1", pilier: "educfi", niveau: "1re", num: 1, duree: DUREE,
    titre: "Ma fiche de paie",
    objectifCourt: "Brut, net, cotisations, apprentissage",
    objectif: "Lire une fiche de paie, comprendre la différence entre brut et net, savoir à quoi servent les cotisations, et comparer voie scolaire et apprentissage.",
    rappel: { seance: "educfi-2nde-1", etiquette: "Revoir EDUCFI Seconde, séance 1", texte: "En Seconde, tu as fait le budget de Maël avec son argent de poche et son allocation de PFMP. Cet été, il a eu son premier job, et il a touché moins que ce qu'annonçait son contrat. Arnaque ?" },
    aqcms: {
      pourquoi: "Une fiche de paie se lit : c'est la preuve de mon travail, de mes droits, de ma retraite future.",
      apport: "Vérifier que je suis bien payé, et comparer les offres en sachant ce que je toucherai vraiment.",
      ou: "Pour un job d'été, un contrat d'apprentissage, mon premier emploi.",
      lie: "Les impôts (EDUCFI Seconde, séance 7) ; voie scolaire ou apprentissage (Orientation Première, séance 3)."
    },
    accroche: "Le contrat de Maël annonçait « " + A("smicBrut") + " brut par mois ». Sur son compte, il a reçu bien moins. Où est passée la différence ?",
    activites: [{
      titre: "Du brut au net", moteur: "cartes",
      consigne: "Voici les lignes de la fiche de paie de Maël, simplifiée. Range chacune au bon endroit.",
      config: {
        fin: "Pour un salarié à temps plein, l'écart entre brut et net est d'environ un quart. Au SMIC, depuis le 1er juin 2026 : " + A("smicBrut") + " brut, soit " + A("smicNet") + " net par mois pour 35 heures.",
        manches: [{
          type: "classer", titre: "Cette ligne, c'est…", categories: ["Ce que je gagne (brut)", "Ce qu'on retire", "Ce que je touche (net)"],
          cartes: [
            { texte: "Salaire de base : 151,67 heures", reponse: "Ce que je gagne (brut)" },
            { texte: "Heures supplémentaires", reponse: "Ce que je gagne (brut)" },
            { texte: "Cotisation retraite", reponse: "Ce qu'on retire" },
            { texte: "Cotisation assurance chômage", reponse: "Ce qu'on retire", explication: "Elle n'apparaît plus toujours pour le salarié, mais elle existe côté employeur." },
            { texte: "CSG et CRDS", reponse: "Ce qu'on retire" },
            { texte: "Prélèvement à la source de l'impôt sur le revenu", reponse: "Ce qu'on retire", explication: "Souvent à 0 % pour un jeune : il dépend des revenus." },
            { texte: "Net à payer avant impôt", reponse: "Ce que je touche (net)" },
            { texte: "Net versé sur mon compte", reponse: "Ce que je touche (net)" }
          ],
          bilan: "Brut – cotisations = net avant impôt ; net avant impôt – prélèvement à la source = net versé."
        }]
      }
    }, {
      titre: "À quoi servent mes cotisations ?", moteur: "cartes",
      config: {
        fin: "Les cotisations, c'est la mutualisation vue en Seconde : chacun paie pour être protégé.",
        manches: [{
          type: "classer", titre: "Cette cotisation finance…", categories: ["Ma retraite", "Ma santé", "Le chômage", "Les services publics et la protection sociale"],
          cartes: [
            { texte: "Cotisation vieillesse", reponse: "Ma retraite" },
            { texte: "Retraite complémentaire", reponse: "Ma retraite" },
            { texte: "Assurance maladie", reponse: "Ma santé" },
            { texte: "Complémentaire santé d'entreprise (mutuelle)", reponse: "Ma santé" },
            { texte: "Assurance chômage", reponse: "Le chômage" },
            { texte: "CSG", reponse: "Les services publics et la protection sociale" }
          ],
          bilan: "Mes cotisations ne sont pas perdues : elles me protègent aujourd'hui et demain."
        }]
      }
    }, {
      titre: "Voie scolaire ou apprentissage ?", moteur: "scenario",
      consigne: "Deux élèves inventés de 17 ans. Lequel touche le plus ? Et est-ce la seule question à se poser ?",
      config: { id: "educfi-1re-1", cas: [{
        titre: "Nora et Théo", depart: "a",
        noeuds: {
          a: { contexte: "Nora reste en voie scolaire : elle touche l'allocation de PFMP (" + A("pfmp1re") + "). Théo signe un contrat d'apprentissage : au moins " + A("apprentiMoins18") + " la première année avant 18 ans, soit " + A("apprentiMoins18Euros") + ", sans cotisation à payer à ce niveau de salaire.", question: "Qui touche le plus sur l'année ?", choix: [
            { texte: "Nora", ok: false, retour: "Sur un an, le salaire de l'apprenti est bien supérieur à l'allocation de PFMP." },
            { texte: "Théo", vers: "b", ok: true, retour: "Oui, sur l'année. Mais l'argent n'est pas le seul critère." }
          ] },
          b: { question: "Qu'est-ce qui compte aussi dans ce choix ?", choix: [
            { texte: "Le rythme (entreprise et centre de formation), les congés (cinq semaines), le statut de salarié, trouver une entreprise, son projet.", vers: "fin", ok: true, retour: "Oui. Le bon choix dépend du projet de chacun." },
            { texte: "Rien d'autre : on prend ce qui paie le plus.", ok: false, retour: "L'apprentissage, c'est un contrat de travail, avec des horaires et des obligations. Ça ne convient pas à tout le monde." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Voie scolaire et apprentissage : on compare l'argent, mais aussi le rythme, les vacances, les obligations et son projet. Parles-en en Orientation et avec ton professeur principal." } }
        }
      }] }
    }, {
      titre: "Mes droits de jeune salarié", moteur: "quiz", facultatif: true,
      config: { id: "educfi-1re-1-droits", questions: [
        { type: "vf", enonce: "La fiche de paie est obligatoire, et il faut la garder toute sa vie.", bonne: true, explication: "Elle servira notamment pour la retraite." },
        { type: "vf", enonce: "Avant 18 ans, le salaire minimum peut être réduit.", bonne: true, explication: "– 20 % avant 17 ans, – 10 % entre 17 et 18 ans, sauf après six mois d'expérience dans le métier." },
        { type: "vf", enonce: "Un mineur peut travailler 10 heures par jour pendant l'été.", bonne: false, explication: "Pas plus de 8 heures par jour ni 35 heures par semaine, sauf exception." },
        { type: "vf", enonce: "Un job d'été donne droit à des congés payés.", bonne: true, explication: "Souvent versés en fin de contrat, sous forme d'indemnité." }
      ] }
    }],
    retenir: [
      "Le brut, c'est ce que l'employeur annonce ; le net, c'est ce que je touche.",
      "Les cotisations financent ma retraite, ma santé et le chômage : elles me protègent.",
      "Je garde mes fiches de paie toute ma vie.",
      "Apprentissage et voie scolaire : on compare l'argent, mais aussi le rythme et les obligations."
    ],
    ressource: {
      titre: "Lire ma fiche de paie",
      intro: "Les lignes essentielles et la grille de l'apprenti.",
      blocs: [
        { type: "etapes", titre: "Les cinq lignes que je regarde", items: ["Les heures travaillées", "Le salaire brut", "Les cotisations", "Le net à payer avant impôt", "Le net versé"] },
        { type: "tableau", titre: "Salaire minimum de l'apprenti (en % du SMIC)", colonnes: ["Âge", "1re année", "2e année", "3e année"], lignes: [
          ["Moins de 18 ans", "27 %", "39 %", "55 %"],
          ["18-20 ans", "43 %", "51 %", "67 %"],
          ["21-25 ans", "53 %", "61 %", "78 %"]
        ] },
        { type: "liste", titre: "Mes droits de jeune salarié", items: ["Une fiche de paie chaque mois", "Pas plus de 8 heures par jour ni 35 heures par semaine avant 18 ans, sauf exception", "Pas de travail de nuit en principe avant 18 ans", "Des congés payés, même pour un job d'été"] }
      ]
    },
    traces: [{
      titre: "Ma première fiche de paie, je vérifie", moteur: "carnet", rendre: true,
      outil: { id: "fiche-paie-verif", nom: "Ma fiche de paie, je vérifie", description: "Les cinq lignes que je regarde en premier." },
      config: {
        cle: "fiche-paie-verif", titreDoc: "Ma première fiche de paie, je vérifie",
        champs: [
          { id: "heures", label: "Les heures : correspondent-elles à mon contrat ?" },
          { id: "brut", label: "Le brut : est-il au moins égal au salaire minimum prévu ?" },
          { id: "cotisations", label: "Les cotisations : à quoi servent-elles ?" },
          { id: "net", label: "Le net avant impôt et le net versé" },
          { id: "question", label: "Une question à poser à mon employeur" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Le salaire « brut », c'est…", options: ["Ce que je touche sur mon compte", "Ce que l'employeur annonce, avant cotisations", "Le salaire après impôt"], bonne: 1, explication: "On retire ensuite les cotisations pour obtenir le net." },
      { type: "qcm", enonce: "Un apprenti de 17 ans en 1re année touche au moins…", options: [A("apprentiMoins18"), "50 % du SMIC", "Le SMIC"], bonne: 0, explication: "Soit " + A("apprentiMoins18Euros") + "." },
      { type: "vf", enonce: "Les cotisations sont de l'argent perdu.", bonne: false, explication: "Elles financent ma retraite, ma santé et le chômage." },
      { type: "ouverte", enonce: "Cite deux choses à comparer, en plus de l'argent, entre voie scolaire et apprentissage.", modele: "Le rythme, les congés, le statut de salarié, la nécessité de trouver une entreprise, son projet." }
    ],
    plusLoin: [
      MQD,
      { titre: "Le portail de l'alternance", source: "Ministère du Travail", url: "https://www.alternance.emploi.gouv.fr", description: "Simuler le salaire d'un apprenti, trouver un contrat." }
    ],
    passerelles: ["orientation-1re-3", "orientation-1re-1"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Le premier salaire de Maël : où est passée la différence ?", "Annonce le vocabulaire : brut, net, cotisations."],
        ["5-20 min", "Activité", "Range les lignes de la fiche de paie.", "Donne les repères du SMIC."],
        ["20-30 min", "Activité", "Relie chaque cotisation à ce qu'elle finance.", "Fait le lien avec la mutualisation de Seconde."],
        ["30-45 min", "Activité", "Compare Nora et Théo.", "Reste neutre entre les deux voies."],
        ["45-51 min", "Activité facultative", "Répond au vrai ou faux sur ses droits.", "Insiste sur la conservation des fiches de paie."],
        ["51-55 min", "Trace", "Remplit « Ma fiche de paie, je vérifie », répond à « Je vérifie ».", "Conseille de garder la fiche avec ses papiers de PFMP."]
      ],
      vigilance: VIG + "On présente les deux voies sans en recommander une."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Consommer sans se faire piéger
  // ===================================================================
  S.push({
    id: "educfi-1re-2", pilier: "educfi", niveau: "1re", num: 2, duree: DUREE,
    titre: "Consommer sans se faire piéger",
    objectifCourt: "Rétractation, garantie, abonnements",
    objectif: "Connaître ses droits de consommateur (rétractation, garantie, résiliation), repérer les abonnements qui s'installent et calculer le vrai prix d'une offre groupée.",
    rappel: { seance: "educfi-2nde-3", etiquette: "Revoir EDUCFI Seconde, séance 3", texte: "En Seconde, tu as appris à payer sans te faire avoir. Mais une fois payé, est-ce que tu peux rendre ? Et cet essai gratuit de 7 jours, tu l'as vraiment arrêté ?" },
    aqcms: {
      pourquoi: "Les vendeurs connaissent tous les moyens de faire acheter plus. Mes droits me protègent, si je les connais.",
      apport: "Rendre un achat raté, faire réparer un produit en panne, arrêter un abonnement.",
      ou: "En magasin, en ligne, au téléphone, face à un vendeur.",
      lie: "Les moyens de paiement et le crédit (EDUCFI Seconde) ; la publicité déguisée (Cyber Première, séance 1)."
    },
    accroche: "Trois mois après un « essai gratuit », Maël découvre trois prélèvements de 10,99 €. Il ne s'est jamais servi de l'appli. Il peut récupérer son argent ?",
    activites: [{
      titre: "Retour possible ?", moteur: "quiz",
      config: { id: "educfi-1re-2-retour", questions: [
        { type: "vf", enonce: "Pour un achat sur internet, j'ai 14 jours pour changer d'avis.", bonne: true, explication: "C'est le droit de rétractation, sans avoir à se justifier (sauf exceptions)." },
        { type: "vf", enonce: "En magasin, la loi m'oblige à pouvoir rendre un article qui ne me plaît plus.", bonne: false, explication: "Non : c'est le commerçant qui décide d'accepter ou non un échange. Je demande avant d'acheter." },
        { type: "vf", enonce: "Un produit neuf qui tombe en panne est couvert pendant deux ans par la garantie légale, même acheté en soldes.", bonne: true, explication: "C'est la garantie légale de conformité : le vendeur doit réparer ou remplacer." },
        { type: "vf", enonce: "L'extension de garantie vendue en caisse est indispensable la première année.", bonne: false, explication: "La garantie légale couvre déjà deux ans : l'extension est souvent inutile." }
      ] }
    }, {
      titre: "L'abonnement fantôme", moteur: "scenario",
      config: { id: "educfi-1re-2", cas: [{
        titre: "L'essai gratuit", depart: "a",
        noeuds: {
          a: { contexte: "Une appli de musique propose 7 jours gratuits, mais demande la carte bancaire pour s'inscrire.", question: "Que fait Maël ?", choix: [
            { texte: "Il s'inscrit et oublie : c'est gratuit.", ok: false, retour: "À la fin de l'essai, l'abonnement devient payant automatiquement." },
            { texte: "Il s'inscrit et met tout de suite un rappel la veille de la fin de l'essai.", vers: "b", ok: true, retour: "Bon réflexe." }
          ] },
          b: { contexte: "Le rappel sonne. Maël ne veut pas continuer.", question: "Comment résilie-t-il ?", choix: [
            { texte: "En ligne, en quelques clics : pour un contrat souscrit en ligne, la résiliation en ligne doit être aussi simple.", vers: "c", ok: true, retour: "Oui, c'est la « résiliation en trois clics » obligatoire." },
            { texte: "Il désinstalle l'appli : ça suffit.", ok: false, retour: "Désinstaller n'arrête pas l'abonnement : il faut résilier." }
          ] },
          c: { question: "Et pour la suite ?", choix: [
            { texte: "Il vérifie ses relevés chaque mois pour repérer les prélèvements.", vers: "fin", ok: true, retour: "Oui : c'est comme ça qu'on repère un abonnement qui s'installe." },
            { texte: "Il ne regarde plus ses comptes, c'est réglé.", ok: false, retour: "D'autres abonnements peuvent s'installer de la même façon." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Un essai gratuit devient souvent payant : je mets un rappel, je résilie en ligne, je vérifie mes relevés." } }
        }
      }] }
    }, {
      titre: "Le smartphone à 1 €", moteur: "quiz",
      consigne: "Offre A : un téléphone à 1 € avec un forfait à 35 € par mois pendant 24 mois. Offre B : le même téléphone à 400 € et un forfait sans engagement à 10 € par mois.",
      config: { id: "educfi-1re-2-smartphone", questions: [
        { type: "qcm", enonce: "Combien coûte l'offre A sur deux ans ?", options: ["36 €", "841 €", "401 €"], bonne: 1, explication: "1 € + 35 € × 24 = 841 €." },
        { type: "qcm", enonce: "Et l'offre B ?", options: ["640 €", "410 €", "1 240 €"], bonne: 0, explication: "400 € + 10 € × 24 = 640 €." },
        { type: "ouverte", enonce: "Où se cache le prix du téléphone dans l'offre A ?", modele: "Dans le forfait, plus cher chaque mois et pendant 24 mois : le téléphone est payé petit à petit, souvent plus cher qu'en l'achetant seul." }
      ] }
    }, {
      titre: "Sous pression", moteur: "cartes", facultatif: true,
      consigne: "Ces techniques de vente sont fréquentes. Lesquelles sont permises, lesquelles sont interdites ?",
      config: {
        fin: "Depuis le " + A("demarchageDate") + ", une entreprise ne peut plus démarcher par téléphone quelqu'un qui n'a pas donné son accord. Une pratique abusive se signale sur SignalConso.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Permis, mais je me méfie", "Interdit"],
          cartes: [
            { texte: "« Plus que 2 en stock ! » sur un site", reponse: "Permis, mais je me méfie", explication: "Si c'est faux, c'est une pratique trompeuse. Dans tous les cas, ça sert à me presser." },
            { texte: "Un appel pour vendre un forfait alors que je n'ai jamais donné mon accord", reponse: "Interdit" },
            { texte: "Une option payante cochée d'avance dans mon panier", reponse: "Interdit", explication: "Je dois choisir moi-même chaque option payante." },
            { texte: "Un vendeur qui me dit : « C'est le dernier jour de la promo »", reponse: "Permis, mais je me méfie" },
            { texte: "Un abonnement impossible à résilier en ligne alors qu'il a été pris en ligne", reponse: "Interdit" }
          ],
          bilan: "Quand on me presse, je prends le temps. Je peux signaler une pratique abusive sur SignalConso."
        }]
      }
    }],
    retenir: [
      "En ligne : 14 jours pour changer d'avis. En magasin : pas de droit de retour obligatoire.",
      "Garantie légale : deux ans pour un produit neuf.",
      "Un essai gratuit devient souvent payant : je mets un rappel.",
      "Une offre « à 1 € » cache presque toujours un coût ailleurs."
    ],
    ressource: {
      titre: "Mes droits de consommateur",
      intro: "Les règles à connaître et mon tableau d'abonnements.",
      blocs: [
        { type: "tableau", titre: "Mes droits", colonnes: ["Situation", "Ce que dit la loi"], lignes: [
          ["Achat en ligne", "14 jours pour changer d'avis"],
          ["Achat en magasin", "Pas de droit de retour obligatoire : je demande avant"],
          ["Produit neuf en panne", "Garantie légale de conformité de deux ans"],
          ["Abonnement pris en ligne", "Résiliation en ligne aussi simple"],
          ["Démarchage téléphonique", "Interdit sans mon accord depuis le " + A("demarchageDate")]
        ] },
        { type: "tableau", titre: "Mes abonnements", colonnes: ["Abonnement", "Prix par mois", "Prix par an", "Je m'en sers ?"], lignes: [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]] }
      ]
    },
    traces: [{
      titre: "Mes abonnements", moteur: "liste",
      outil: { id: "mes-abonnements", nom: "Mes abonnements", description: "Prix par mois, prix par an, utile ou pas, fin d'engagement." },
      config: {
        cle: "mes-abonnements", titreDoc: "Mes abonnements", bouton: "Ajouter l'abonnement",
        intro: "Pour toi seul. Note tes abonnements pour voir ce qu'ils coûtent sur un an.",
        champs: [
          { id: "nom", label: "L'abonnement" },
          { id: "mois", label: "Prix par mois" },
          { id: "an", label: "Prix par an (× 12)" },
          { id: "utile", label: "Je m'en sers ? Je garde ou je résilie ?" },
          { id: "fin", label: "Date de fin d'engagement" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "En magasin, on a toujours 14 jours pour rendre un article.", bonne: false, explication: "Ce délai concerne les achats à distance (internet, téléphone)." },
      { type: "qcm", enonce: "Un produit neuf tombe en panne au bout de 18 mois. Que fais-tu ?", options: ["Rien, c'est trop tard", "Je demande au vendeur d'appliquer la garantie légale", "J'achète une extension de garantie"], bonne: 1, explication: "La garantie légale de conformité dure deux ans pour un produit neuf." },
      { type: "vf", enonce: "Désinstaller une appli suffit pour arrêter l'abonnement.", bonne: false, explication: "Il faut résilier l'abonnement." },
      { type: "ouverte", enonce: "Comment calculer le vrai prix d'une offre « téléphone à 1 € » ?", modele: "J'additionne le prix du téléphone et le forfait multiplié par la durée d'engagement, et je compare avec le téléphone seul et un forfait sans engagement." }
    ],
    plusLoin: [
      { titre: "SignalConso", source: "DGCCRF", url: "https://signal.conso.gouv.fr", description: "Signaler un problème avec une entreprise." },
      { titre: "Les règles du démarchage téléphonique", source: "DGCCRF", url: "https://economie.gouv.fr/dgccrf/les-fiches-pratiques/les-regles-du-demarchage-telephonique-simposant-aux-entreprises", description: "Ce qui a changé le " + A("demarchageDate") + "." },
      MQD
    ],
    passerelles: ["cyber-1re-1"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Les trois prélèvements de l'essai gratuit.", "Annonce les trois droits : rétractation, garantie, résiliation."],
        ["5-15 min", "Activité", "Répond au vrai ou faux « Retour possible ? ».", "Corrige l'idée reçue du retour en magasin."],
        ["15-28 min", "Activité", "Suit le scénario de l'abonnement fantôme.", "Montre où se trouvent les abonnements dans un téléphone."],
        ["28-42 min", "Activité", "Calcule le vrai prix du smartphone à 1 €.", "Fait calculer à la main."],
        ["42-50 min", "Activité facultative", "Classe les techniques de vente.", "Présente SignalConso."],
        ["50-55 min", "Trace", "Commence « Mes abonnements », répond à « Je vérifie ».", "Propose de le compléter chez soi."]
      ],
      vigilance: VIG + "On ne cite aucune enseigne ni aucun opérateur comme modèle."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Ma mobilité
  // ===================================================================
  S.push({
    id: "educfi-1re-3", pilier: "educfi", niveau: "1re", num: 3, duree: DUREE,
    titre: "Ma mobilité",
    objectifCourt: "Le vrai coût du permis et d'un véhicule",
    objectif: "Comparer les façons de se déplacer selon leur coût réel, connaître les aides pour financer le permis et acheter un véhicule d'occasion sans se faire avoir.",
    rappel: { seance: "educfi-2nde-6", etiquette: "Revoir EDUCFI Seconde, séance 6", texte: "En Seconde, tu as vu que tout véhicule à moteur doit être assuré. Aujourd'hui, la question d'après : combien coûte vraiment un véhicule, chaque mois ?" },
    aqcms: {
      pourquoi: "Sans moyen de transport, un stage, un emploi ou une formation peuvent devenir impossibles.",
      apport: "Choisir une solution que je peux vraiment payer, et trouver les aides.",
      ou: "Pour aller en PFMP, au travail, en formation.",
      lie: "Le crédit et l'assurance (EDUCFI Seconde) ; se déplacer autrement (E3D) ; mes obligations de conducteur (Droits)."
    },
    accroche: "Ton stage est à 25 km, sans bus le matin. Ton tuteur te dit : « Il te faudrait le permis. » Combien ça coûte, un permis, puis une voiture, chaque mois ?",
    activites: [{
      titre: "Mon trajet, mes options", moteur: "cartes",
      consigne: "À chaque option, son âge minimum et ses contraintes. Relie chaque phrase à la bonne solution.",
      config: {
        fin: "Permis AM (scooter 50 cm³, voiturette) dès 14 ans ; permis B dès 17 ans ; conduite accompagnée dès 15 ans. Le moins cher reste souvent le vélo ou le bus.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Vélo", "Transports en commun", "Scooter 50 cm³", "Voiture"],
          cartes: [
            { texte: "Presque gratuit, mais limité par la distance et la météo", reponse: "Vélo" },
            { texte: "Un abonnement jeune, mais des horaires imposés", reponse: "Transports en commun" },
            { texte: "Permis AM dès 14 ans, assurance obligatoire", reponse: "Scooter 50 cm³" },
            { texte: "Permis B dès 17 ans, le coût le plus élevé chaque mois", reponse: "Voiture" },
            { texte: "L'employeur rembourse la moitié de l'abonnement", reponse: "Transports en commun" },
            { texte: "Carburant, assurance, entretien, contrôle technique, stationnement", reponse: "Voiture" }
          ],
          bilan: "Je compare le coût par mois, pas seulement le prix d'achat."
        }]
      }
    }, {
      titre: "Le vrai coût d'une voiture", moteur: "budget",
      consigne: "Théo, apprenti, veut une voiture d'occasion. Ajoute toutes les dépenses mois par mois. Que lui reste-t-il ?",
      config: {
        id: "educfi-1re-3", qui: "Théo",
        ressources: [{ id: "salaire", label: "Salaire d'apprenti (2e année, 18 ans)", montant: 950 }],
        depenses: [
          { id: "credit", label: "Remboursement de la voiture d'occasion", montant: 150, type: "fixe" },
          { id: "assurance", label: "Assurance jeune conducteur", montant: 110, type: "fixe" },
          { id: "forfait", label: "Forfait téléphone", montant: 15, type: "fixe" },
          { id: "carburant", label: "Carburant", montant: 120, type: "variable" },
          { id: "entretien", label: "Entretien et réparations (à prévoir chaque mois)", montant: 50, type: "variable" },
          { id: "parking", label: "Stationnement, péages", montant: 20, type: "variable" },
          { id: "vie", label: "Courses, sorties, vêtements", montant: 300, type: "variable" }
        ],
        imprevu: { label: "Contrôle technique et réparation", montant: 250 },
        conseil: "Budget dans le rouge : la voiture prend une grosse part. Covoiturage, voiture moins chère, ou attendre ?"
      }
    }, {
      titre: "Financer mon permis", moteur: "choisir",
      consigne: "Choisis les pistes que tu vas vérifier près de chez toi.",
      config: {
        cle: "educfi-aides-permis", max: 6, min: 1, titre: "Pistes", resume: "Mes pistes pour financer le permis",
        cartes: [
          { nom: "Le permis à 1 € par jour", ex: "Prêt sans intérêts pour les 15-25 ans : " + A("permis1Euro") },
          { nom: "Une aide de la région", ex: "Beaucoup de régions aident les jeunes et les apprentis" },
          { nom: "Une aide du département ou de la commune", ex: "Parfois contre une activité d'intérêt collectif" },
          { nom: "La mission locale", ex: "Pour les 16-25 ans, selon la situation" },
          { nom: "Le compte personnel de formation", ex: "Pour un projet professionnel, sous conditions" },
          { nom: "Mettre de côté chaque mois", ex: "Avec la calculatrice d'épargne de Seconde" }
        ]
      }
    }, {
      titre: "Acheter d'occasion", moteur: "scenario", facultatif: true,
      config: { id: "educfi-1re-3-occasion", cas: [
        situation("Le scooter trop bon marché", "Un scooter presque neuf à moitié prix sur un site d'annonces. Le vendeur est « en déplacement », ne peut pas le montrer, et demande un virement pour le « réserver ».", "Que fais-tu ?", [
          ["Je fais le virement vite, avant qu'un autre l'achète.", false, "Prix trop bas, vendeur absent, paiement avant de voir : c'est une arnaque classique. Et un virement instantané ne s'annule pas."],
          ["Je refuse : je veux voir le véhicule, vérifier la carte grise et son historique, et je paie seulement après.", true, "Oui. HistoVec, service public gratuit, donne l'historique d'un véhicule à partir des infos du vendeur."]
        ], "D'occasion : je vois le véhicule, je vérifie la carte grise et l'historique sur HistoVec, je paie après.")
      ] }
    }],
    retenir: [
      "Le prix d'achat n'est qu'une partie du coût : assurance, carburant et entretien comptent chaque mois.",
      "Le permis à 1 € par jour est un prêt à rembourser, sans intérêts.",
      "Des aides locales existent : je me renseigne auprès de la mairie, de la région, de la mission locale.",
      "D'occasion : je vois le véhicule, je vérifie son historique, je paie après."
    ],
    ressource: {
      titre: "Le vrai coût d'un véhicule",
      intro: "Un tableau à remplir et la check-list de l'occasion.",
      blocs: [
        { type: "tableau", titre: "Le coût par mois", colonnes: ["Poste", "Par mois"], lignes: [["Remboursement ou achat", ""], ["Assurance", ""], ["Carburant", ""], ["Entretien", ""], ["Stationnement, péages", ""], ["Total", ""]] },
        { type: "liste", titre: "Acheter d'occasion : la check-list", items: ["Voir le véhicule et l'essayer", "Vérifier la carte grise au nom du vendeur", "Consulter l'historique sur HistoVec", "Contrôle technique de moins de six mois pour une voiture", "Payer seulement à la remise des clés et des papiers"] },
        { type: "texte", titre: "Le permis à 1 € par jour", texte: "Un prêt sans intérêts pour les 15-25 ans, " + A("permis1Euro") + ", dans une auto-école labellisée." }
      ]
    },
    traces: [{
      titre: "Mon projet mobilité", moteur: "carnet",
      outil: { id: "projet-mobilite", nom: "Mon projet mobilité", description: "Mon trajet, la solution visée, son coût, les aides." },
      config: {
        cle: "projet-mobilite", titreDoc: "Mon projet mobilité",
        intro: "Pour toi seul.",
        champs: [
          { id: "trajet", label: "Mon trajet principal" },
          { id: "solution", label: "La solution que je vise" },
          { id: "cout", label: "Son coût par mois" },
          { id: "aides", label: "Les aides que je vais demander", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "À partir de quel âge peut-on passer le permis B ?", options: ["16 ans", "17 ans", "18 ans"], bonne: 1, explication: "Depuis 2024, dès 17 ans." },
      { type: "vf", enonce: "Le permis à 1 € par jour est une aide qu'on ne rembourse pas.", bonne: false, explication: "C'est un prêt sans intérêts : on le rembourse." },
      { type: "ouverte", enonce: "Cite trois dépenses d'une voiture en plus de son prix.", modele: "Assurance, carburant, entretien, contrôle technique, stationnement, péages." },
      { type: "qcm", enonce: "Un vendeur d'occasion veut être payé avant que tu voies le véhicule. Tu…", options: ["Paies vite", "Refuses", "Paies la moitié"], bonne: 1, explication: "On paie après avoir vu le véhicule et ses papiers." }
    ],
    plusLoin: [
      { titre: "Quelles aides pour financer le permis de conduire ?", source: "Justice.fr", url: "https://www.justice.fr/fiche/payer-permis-conduire-permis-euro-apprenti-chomeur", description: "Permis à 1 € par jour, aides locales, compte personnel de formation." },
      { titre: "HistoVec", source: "Ministère de l'Intérieur", url: "https://histovec.interieur.gouv.fr", description: "L'historique gratuit d'un véhicule d'occasion." },
      { titre: "Sécurité routière", source: "Délégation à la sécurité routière", url: "https://www.securite-routiere.gouv.fr", description: "Permis AM, deux-roues, conduite accompagnée." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Le stage à 25 km sans bus.", "Recueille les solutions spontanées."],
        ["5-15 min", "Activité", "Relie les phrases aux solutions de transport.", "Donne les âges des permis."],
        ["15-30 min", "Activité", "Calcule le vrai coût de la voiture de Théo.", "Fait ressortir la part de l'assurance jeune conducteur."],
        ["30-40 min", "Activité", "Choisit ses pistes pour financer le permis.", "Montre les aides de la région de l'établissement."],
        ["40-50 min", "Activité facultative", "Suit le scénario du scooter trop bon marché.", "Présente HistoVec."],
        ["50-55 min", "Trace", "Remplit « Mon projet mobilité », répond à « Je vérifie ».", "Propose de vérifier les aides locales chez soi."]
      ],
      vigilance: VIG
    }
  });

  // ===================================================================
  // SÉANCE 4 · L'argent et les autres
  // ===================================================================
  S.push({
    id: "educfi-1re-4", pilier: "educfi", niveau: "1re", num: 4, duree: DUREE,
    titre: "L'argent et les autres",
    objectifCourt: "Prêter, la pression du groupe, les jeux d'argent",
    objectif: "Gérer l'argent dans ses relations (prêter, partager, suivre le groupe), comprendre pourquoi on perd aux jeux d'argent et reconnaître les signaux d'un jeu qui devient un problème.",
    rappel: { seance: "educfi-2nde-8", etiquette: "Revoir EDUCFI Seconde, séance 8", texte: "En Seconde, tu as vu que l'argent facile n'existe pas quand un inconnu te le promet. Et quand c'est un pote qui te dit : « Mise 10 € sur le match, c'est sûr » ?" },
    aqcms: {
      pourquoi: "L'argent abîme parfois les amitiés, et les jeux d'argent ciblent beaucoup les jeunes.",
      apport: "Prêter sans me fâcher, dire non sans me justifier, et repérer à temps un jeu qui dérape.",
      ou: "Avec les amis, en soirée, devant un match, dans les jeux vidéo.",
      lie: "S'affirmer et dire non (CPS Seconde, séance 5) ; le message « Je » (CPS Première, séance 4) ; les arnaques (EDUCFI Seconde, séance 8)."
    },
    accroche: "Un ami te demande 50 € « jusqu'à vendredi ». Vendredi passe. Puis un autre. Tu dis quoi ?",
    activites: [{
      titre: "Prêter ou pas ?", moteur: "scenario",
      config: { id: "educfi-1re-4", cas: [{
        titre: "Les 50 € de Sami", depart: "a",
        noeuds: {
          a: { contexte: "Sami, un ami, te demande 50 € jusqu'à vendredi. Tu as 60 € pour finir le mois.", question: "Que fais-tu ?", choix: [
            { texte: "Je prête les 50 €, c'est mon ami.", ok: false, retour: "Il ne te resterait que 10 € : on ne prête que ce qu'on peut se permettre de perdre." },
            { texte: "Je lui propose 20 €, ce que je peux me permettre, et on note la date ensemble.", vers: "b", ok: true, retour: "Tu aides sans te mettre en difficulté, et tu évites les malentendus." },
            { texte: "Je refuse simplement : « Là, je ne peux pas. »", vers: "b", ok: true, retour: "Dire non, c'est permis, et ça n'a pas besoin d'excuse." }
          ] },
          b: { contexte: "Deux semaines plus tard, Sami n'a toujours pas rendu l'argent prêté, et n'en parle plus.", question: "Comment le relances-tu ?", choix: [
            { texte: "Je l'affiche dans le groupe de classe.", ok: false, retour: "L'humilier devant tout le monde abîme l'amitié et peut tourner au harcèlement." },
            { texte: "En privé, avec un message « Je » : « J'ai besoin de mes 20 € pour finir le mois. Tu peux me les rendre quand ? »", vers: "fin", ok: true, retour: "Oui : tu exprimes ton besoin sans l'accuser." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Je ne prête que ce que je peux me permettre de perdre, je note la somme et la date, et je relance en privé avec un message « Je »." } }
        }
      }] }
    }, {
      titre: "Faire comme les autres", moteur: "cartes",
      consigne: "Pour chaque dépense, je la fais surtout pour moi, ou surtout pour le regard des autres ? Il n'y a pas de mauvaise réponse : réfléchis à ton cas.",
      config: {
        fin: "Les coffres à butin et les achats dans les jeux reprennent les mécanismes du hasard : ils sont conçus pour qu'on rejoue.",
        manches: [{
          type: "classer", titre: "Je le fais…", categories: ["Pour moi", "Pour le regard des autres", "Ça dépend"],
          cartes: [
            { texte: "Des vêtements de marque", reponse: "Ça dépend" },
            { texte: "Une sortie au restaurant avec le groupe", reponse: "Ça dépend" },
            { texte: "Une participation à une cagnotte pour un anniversaire", reponse: "Ça dépend" },
            { texte: "Un coffre à butin dans un jeu, pour avoir le skin rare", reponse: "Pour le regard des autres", explication: "Souvent pour le montrer. Et le hasard pousse à recommencer." },
            { texte: "Un livre ou une formation qui m'intéresse", reponse: "Pour moi" },
            { texte: "Le dernier téléphone parce que tout le monde l'a", reponse: "Pour le regard des autres" }
          ],
          bilan: "Dire non à une dépense de groupe, c'est permis."
        }]
      }
    }, {
      titre: "Paris sportifs : qui gagne ?", moteur: "quiz",
      config: { id: "educfi-1re-4-paris", questions: [
        { type: "vf", enonce: "Les jeux d'argent et les paris sportifs sont interdits aux mineurs, en ligne comme en point de vente.", bonne: true, explication: "C'est la loi, et les opérateurs doivent vérifier l'âge." },
        { type: "vf", enonce: "Sur la durée, les joueurs gagnent en moyenne autant qu'ils misent.", bonne: false, explication: "Les opérateurs gardent une marge sur chaque pari : sur la durée, les joueurs perdent plus qu'ils ne gagnent. C'est ce qui fait vivre les opérateurs." },
        { type: "qcm", enonce: "10 € misés chaque week-end pendant un an, cela fait…", options: ["120 €", "520 €", "52 €"], bonne: 1, explication: "10 € × 52 semaines = 520 € misés, dont une partie reste chez l'opérateur." },
        { type: "vf", enonce: "« Je connais le foot, donc je vais gagner. »", bonne: false, explication: "Le résultat d'un match reste incertain, et la cote est calculée pour que l'opérateur gagne." },
        { type: "vf", enonce: "« J'ai presque gagné » veut dire que la prochaine fois sera la bonne.", bonne: false, explication: "Chaque pari est indépendant : le « presque » est une illusion qui pousse à rejouer." }
      ] }
    }, {
      titre: "Quand le jeu devient un problème", moteur: "cartes", facultatif: true,
      config: {
        fin: "Si plusieurs signaux te parlent, pour toi ou pour un proche : Joueurs Info Service, 09 74 75 13 13, gratuit et anonyme. On peut aussi demander pour soi une interdiction volontaire de jeux.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Un signal d'alerte", "Pas forcément inquiétant"],
          cartes: [
            { texte: "Jouer en cachette", reponse: "Un signal d'alerte" },
            { texte: "Rejouer pour « se refaire » après une perte", reponse: "Un signal d'alerte" },
            { texte: "Emprunter de l'argent pour jouer", reponse: "Un signal d'alerte" },
            { texte: "Penser au jeu tout le temps", reponse: "Un signal d'alerte" },
            { texte: "Mentir sur ce qu'on a perdu", reponse: "Un signal d'alerte" },
            { texte: "Regarder un match entre amis sans parier", reponse: "Pas forcément inquiétant" }
          ],
          bilan: "Rejouer pour se refaire est un signal d'alerte : j'en parle."
        }]
      }
    }],
    retenir: [
      "Je ne prête que ce que je peux me permettre de perdre, et je l'écris.",
      "Dire non à une dépense de groupe, c'est permis.",
      "Aux jeux d'argent, sur la durée, c'est l'opérateur qui gagne.",
      "Rejouer pour se refaire est un signal d'alerte : j'en parle."
    ],
    ressource: {
      titre: "L'argent et les autres",
      intro: "Prêter sans se fâcher, et les signaux d'alerte du jeu.",
      blocs: [
        { type: "etapes", titre: "Prêter sans se fâcher", items: ["Je ne prête que ce que je peux me permettre de perdre", "Je note la somme et la date de remboursement", "Je relance en privé, avec un message « Je »", "Si ça ne marche pas, j'en parle à un adulte de confiance"] },
        { type: "liste", titre: "Les signaux d'alerte du jeu", items: ["Jouer en cachette", "Rejouer pour se refaire", "Emprunter pour jouer", "Penser au jeu tout le temps", "Mentir sur ses pertes"] },
        { type: "texte", titre: "Qui appeler", texte: "Joueurs Info Service : 09 74 75 13 13, gratuit et anonyme, tous les jours. Pour soi ou pour un proche." }
      ]
    },
    traces: [{
      titre: "Mes règles d'argent avec les autres", moteur: "carnet",
      outil: { id: "regles-argent-autres", nom: "Mes règles d'argent avec les autres", description: "Ce que je prête, la dépense de groupe que je limite, ma phrase pour dire non." },
      config: {
        cle: "regles-argent-autres", titreDoc: "Mes règles d'argent avec les autres",
        intro: "Pour toi seul.",
        champs: [
          { id: "preter", label: "Ce que je prête, et à quelles conditions" },
          { id: "groupe", label: "Une dépense de groupe que je veux limiter" },
          { id: "phrase", label: "La phrase que je dirai si on me pousse à parier" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Un mineur peut parier en ligne avec l'accord de ses parents.", bonne: false, explication: "Les jeux d'argent sont interdits aux mineurs, même avec l'accord des parents." },
      { type: "qcm", enonce: "Combien prêter à un ami ?", options: ["Tout ce qu'il demande", "Ce que je peux me permettre de perdre", "Rien, jamais"], bonne: 1, explication: "Et je note la somme et la date." },
      { type: "ouverte", enonce: "Cite deux signaux d'un jeu qui devient un problème.", modele: "Rejouer pour se refaire, emprunter pour jouer, jouer en cachette, mentir sur ses pertes, y penser tout le temps." }
    ],
    plusLoin: [
      { titre: "Joueurs Info Service", source: "Santé publique France", url: "https://www.joueurs-info-service.fr", description: "Aide gratuite et anonyme pour les joueurs et leurs proches." },
      MQD
    ],
    passerelles: ["cps-2nde-5", "cps-1re-4"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Les 50 € jusqu'à vendredi.", "Recueille les expériences sans nommer personne."],
        ["5-17 min", "Activité", "Suit le scénario des 50 € de Sami.", "Fait formuler le message « Je »."],
        ["17-25 min", "Activité", "Classe les dépenses : pour moi ou pour le regard des autres.", "Accepte toutes les réponses argumentées."],
        ["25-40 min", "Activité", "Répond aux questions sur les paris sportifs.", "Rappelle l'interdiction aux mineurs, sans montrer de publicité réelle."],
        ["40-50 min", "Activité facultative", "Classe les signaux d'alerte du jeu.", "Donne le numéro de Joueurs Info Service."],
        ["50-55 min", "Trace", "Remplit « Mes règles d'argent avec les autres », répond à « Je vérifie ».", "Rappelle les adultes ressources du lycée."]
      ],
      vigilance: VIG + "On ne montre aucune publicité réelle ni aucun site de paris. Un élève qui semble en difficulté avec le jeu, ou qui parle de dettes, est orienté discrètement vers l'infirmière, le CPE ou l'assistante sociale."
    }
  });
})();
