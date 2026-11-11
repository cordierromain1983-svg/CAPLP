/*
 * PILIER EDUCFI « BUDGET EXPRESS » · SECONDE (« Moi »)
 * Contenu validé (document « Pilier EDUCFI – Seconde »).
 * Huit séances de 55 minutes, une par module du Passeport EDUCFI
 * (note de service du 9 février 2026, BO n° 10 du 5 mars 2026) : budget, compte bancaire,
 * moyens de paiement, épargne, crédit, assurances, impôts, arnaques.
 * Chaque séance prépare le quiz officiel du module, à passer sur la plateforme de la Banque de France.
 * Les chiffres qui changent (taux, plafonds, allocation de PFMP…) viennent de data/actualites.js.
 * Ressources vérifiées le 11 novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var A = window.CAP_ACTU.texte;
  var DUREE = "55 min";
  var MQD = { titre: "Mes questions d'argent", source: "Banque de France", url: "https://www.mesquestionsdargent.fr", description: "Le portail public d'éducation financière : fiches, vidéos et quiz." };
  function taux(t) { return parseFloat(String(t).replace(",", ".")) || 0; }

  function situation(titre, contexte, question, options, bilan) {
    var noeuds = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
    options.forEach(function (o) { noeuds.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }
  function vigilance(extra) {
    return "On ne demande jamais à un élève ce qu'il a, ce que gagnent ses parents ou ce qu'il dépense vraiment : Maël et Léa sont inventés. " + (extra || "");
  }

  // ===================================================================
  // SÉANCE 1 · Mon budget, mes choix (module Budget)
  // ===================================================================
  S.push({
    id: "educfi-2nde-1", pilier: "educfi", niveau: "2nde", num: 1, duree: DUREE,
    titre: "Mon budget, mes choix",
    objectifCourt: "Module Budget : où part mon argent ?",
    objectif: "Distinguer ressources et dépenses, dépenses fixes et variables, besoins et envies, et calculer un solde.",
    aqcms: {
      pourquoi: "L'argent part vite quand on ne sait pas où il va. Un budget, c'est simplement savoir.",
      apport: "Arriver à la fin du mois sans mauvaise surprise, et pouvoir financer mes projets.",
      ou: "Avec mon argent de poche, mon allocation de PFMP, mon premier salaire.",
      lie: "Le module Budget du Passeport EDUCFI (note de service du " + A("passeportNote") + ") ; prendre une décision (CPS) ; consommer autrement (E3D)."
    },
    accroche: "Le 5 du mois, tu as 60 €. Le 20, il te reste 3 €, et tu ne sais pas où sont partis les 57 autres. Ça te parle ?",
    activites: [{
      titre: "Fixe ou variable ?", moteur: "cartes",
      consigne: "Voici les dépenses de Maël, élève de Seconde (il est inventé). Les dépenses fixes reviennent chaque mois au même montant ; les variables changent.",
      config: {
        fin: "C'est surtout sur les dépenses variables qu'on peut agir.",
        manches: [{
          type: "classer", titre: "Fixe ou variable ?", categories: ["Dépense fixe", "Dépense variable"],
          cartes: [
            { texte: "Le forfait téléphone", reponse: "Dépense fixe" },
            { texte: "L'abonnement de streaming", reponse: "Dépense fixe" },
            { texte: "La carte de bus mensuelle", reponse: "Dépense fixe" },
            { texte: "La licence du club de sport, payée chaque mois", reponse: "Dépense fixe" },
            { texte: "Les snacks à la récré", reponse: "Dépense variable" },
            { texte: "Les vêtements", reponse: "Dépense variable" },
            { texte: "Les sorties avec les amis", reponse: "Dépense variable" },
            { texte: "Les achats dans un jeu", reponse: "Dépense variable" },
            { texte: "Un cadeau d'anniversaire", reponse: "Dépense variable" },
            { texte: "Le kebab du vendredi", reponse: "Dépense variable" }
          ],
          bilan: "Fixe : le même montant chaque mois. Variable : je décide."
        }]
      }
    }, {
      titre: "Besoin ou envie ?", moteur: "cartes",
      consigne: "Les mêmes achats, rangés autrement. Il n'y a pas toujours une seule bonne réponse : explique ton choix.",
      config: {
        fin: "Je règle d'abord mes besoins, ensuite mes envies. Un téléphone est un besoin ; le dernier modèle est une envie.",
        manches: [{
          type: "classer", titre: "Besoin ou envie ?", categories: ["Besoin", "Envie"],
          cartes: [
            { texte: "Un téléphone qui fonctionne", reponse: "Besoin" },
            { texte: "Le tout dernier modèle de téléphone", reponse: "Envie", explication: "Le besoin, c'est de pouvoir téléphoner : un modèle plus ancien suffit." },
            { texte: "Des chaussures de sécurité pour le stage", reponse: "Besoin" },
            { texte: "Une deuxième paire de baskets de marque", reponse: "Envie" },
            { texte: "La carte de bus pour aller au lycée", reponse: "Besoin" },
            { texte: "Un skin dans un jeu vidéo", reponse: "Envie" },
            { texte: "Le repas du midi", reponse: "Besoin" },
            { texte: "Un troisième abonnement de streaming", reponse: "Envie" }
          ],
          bilan: "Besoin : je ne peux pas faire sans. Envie : ça me fait plaisir, mais je peux attendre."
        }]
      }
    }, {
      titre: "Le simulateur de budget", moteur: "budget",
      consigne: "Voici le mois de Maël. Change les montants et regarde le solde bouger. Puis déclenche l'imprévu et rééquilibre le budget en jouant sur les dépenses variables. Tu peux aussi essayer avec ton propre budget : il reste sur ton appareil.",
      config: {
        id: "educfi-2nde-1", cle: "educfi-budget-perso", qui: "Maël",
        ressources: [
          { id: "poche", label: "Argent de poche", montant: 40 },
          { id: "job", label: "Petit job (garde d'enfants, aide au voisin…)", montant: 30 },
          { id: "pfmp", label: "Allocation de PFMP ce mois-ci", montant: 100, aide: A("pfmp2nde") }
        ],
        depenses: [
          { id: "forfait", label: "Forfait téléphone", montant: 10, type: "fixe" },
          { id: "streaming", label: "Abonnement de streaming", montant: 8, type: "fixe" },
          { id: "bus", label: "Carte de bus", montant: 15, type: "fixe" },
          { id: "snacks", label: "Snacks et boissons", montant: 35, type: "variable" },
          { id: "sorties", label: "Sorties", montant: 30, type: "variable" },
          { id: "vetements", label: "Vêtements", montant: 40, type: "variable" },
          { id: "jeux", label: "Achats dans les jeux", montant: 10, type: "variable" }
        ],
        imprevu: { label: "Écran de téléphone cassé", montant: 80 },
        conseil: "Budget dans le rouge : réduis les sorties, les vêtements ou les snacks, ou reporte un achat au mois prochain."
      }
    }, {
      titre: "Les pièges qui vident le porte-monnaie", moteur: "quiz", facultatif: true,
      config: { id: "educfi-2nde-1-pieges", questions: [
        { type: "vf", enonce: "Un abonnement à 4,99 € par mois coûte moins de 50 € par an.", bonne: false, explication: "4,99 € × 12 = presque 60 €. Les petits montants réguliers comptent beaucoup sur l'année." },
        { type: "vf", enonce: "« Livraison offerte dès 50 € d'achat » peut me faire dépenser plus que prévu.", bonne: true, explication: "On ajoute souvent un article pour atteindre le seuil : la livraison « offerte » coûte alors plus cher que de la payer." },
        { type: "vf", enonce: "Les petits achats dans les jeux ne comptent pas vraiment dans un budget.", bonne: false, explication: "Ils sont conçus pour être faciles et répétés : on les additionne à la fin du mois, et la surprise est souvent grande." },
        { type: "vf", enonce: "« Plus que 2 heures pour profiter de l'offre ! » sert à me faire décider vite.", bonne: true, explication: "L'urgence empêche de se demander : est-ce un besoin ou une envie ?" }
      ] }
    }],
    retenir: [
      "Solde = ressources – dépenses. Positif, je peux épargner ; négatif, je dois agir.",
      "On agit surtout sur les dépenses variables.",
      "Je règle d'abord mes besoins, ensuite mes envies.",
      "Je prévois une petite réserve pour les imprévus."
    ],
    ressource: {
      titre: "Mon budget en quatre étapes",
      intro: "Une fiche pour faire ton budget du mois, sur papier ou dans l'appli.",
      blocs: [
        { type: "etapes", titre: "Les quatre étapes", items: ["Je liste ce qui rentre : argent de poche, job, allocation de PFMP", "Je liste mes dépenses fixes : forfait, abonnements, transport", "J'estime mes dépenses variables : sorties, vêtements, snacks", "Je calcule mon solde : ce qui rentre moins ce qui sort"] },
        { type: "tableau", titre: "Mon budget du mois", colonnes: ["", "Montant"], lignes: [
          ["Ressources", ""], ["Dépenses fixes", ""], ["Dépenses variables", ""], ["Solde", ""]
        ] },
        { type: "liste", titre: "Mes réflexes", items: ["Besoin ou envie ?", "Est-ce que je peux attendre une semaine ?", "Combien ça me coûte sur un an ?", "Je garde une petite réserve pour les imprévus"] }
      ]
    },
    traces: [{
      titre: "Mon budget du mois", moteur: "carnet",
      outil: { id: "budget-du-mois", nom: "Mon budget du mois", description: "Mes ressources, mes dépenses, mon solde et la dépense que je réduis." },
      config: {
        cle: "budget-du-mois", titreDoc: "Mon budget du mois",
        intro: "Pour toi seul : tu n'as jamais à rendre cette trace.",
        champs: [
          { id: "ressources", label: "Ce qui rentre chaque mois", multi: true },
          { id: "fixes", label: "Mes dépenses fixes", multi: true },
          { id: "variables", label: "Mes dépenses variables", multi: true },
          { id: "solde", label: "Mon solde" },
          { id: "reduire", label: "La dépense que je choisis de réduire" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Maël a 170 € de ressources et 150 € de dépenses. Son solde est…", options: ["+ 20 €", "– 20 €", "320 €"], bonne: 0, explication: "Solde = 170 – 150 = 20 € : il peut en mettre de côté." },
      { type: "qcm", enonce: "Laquelle est une dépense variable ?", options: ["Le forfait téléphone", "Les sorties", "L'abonnement de streaming"], bonne: 1, explication: "Les sorties changent d'un mois à l'autre : c'est là qu'on peut agir." },
      { type: "ouverte", enonce: "Ton budget est dans le rouge. Que fais-tu en premier ?", modele: "Je réduis mes dépenses variables (sorties, vêtements, snacks) ou je reporte un achat. Je ne touche pas d'abord aux besoins." }
    ],
    quizOfficiel: "Budget",
    plusLoin: [
      MQD,
      { titre: "Gérer son budget", source: "La finance pour tous (Institut pour l'éducation financière du public)", url: "https://www.lafinancepourtous.com/pratique/budget/gerer-son-budget/", description: "Des conseils simples et des outils pour faire son budget." }
    ],
    passerelles: ["cps-tle-2"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Où sont passés les 57 € ?", "Fait émerger : on ne sait souvent pas où part son argent."],
        ["5-15 min", "Activité", "Classe les dépenses de Maël : fixes ou variables.", "Pose le vocabulaire : ressources, dépenses, solde."],
        ["15-23 min", "Activité", "Classe les mêmes achats : besoins ou envies.", "Accepte les désaccords argumentés."],
        ["23-43 min", "Activité", "Équilibre le budget de Maël avec le simulateur, puis l'imprévu.", "Insiste sur les dépenses variables et la réserve."],
        ["43-50 min", "Activité facultative", "Répond au vrai ou faux sur les pièges.", "Calcule à voix haute le coût d'un abonnement sur un an."],
        ["50-55 min", "Trace et quiz", "Remplit « Mon budget du mois », répond à « Je vérifie ».", "Programme le quiz officiel du module Budget."]
      ],
      vigilance: vigilance("Le mode « Mon budget » du simulateur reste sur l'appareil de l'élève : on ne le fait jamais projeter.")
    }
  });

  // ===================================================================
  // SÉANCE 2 · Mon premier compte (module Compte bancaire)
  // ===================================================================
  S.push({
    id: "educfi-2nde-2", pilier: "educfi", niveau: "2nde", num: 2, duree: DUREE,
    titre: "Mon premier compte",
    objectifCourt: "Module Compte bancaire : RIB, relevé, découvert",
    objectif: "Comprendre à quoi sert un compte, lire un RIB et un relevé de compte, éviter le découvert et ses frais.",
    rappel: { seance: "educfi-2nde-1", texte: "Ton budget, il faut bien le ranger quelque part. Pour recevoir ton allocation de PFMP, le lycée te demande un RIB à ton nom. C'est quoi, au juste, un RIB ?" },
    aqcms: {
      pourquoi: "Un compte bancaire est indispensable pour recevoir l'allocation de PFMP, un salaire, et pour payer.",
      apport: "Savoir lire mes comptes, repérer une dépense oubliée et éviter les frais.",
      ou: "Pour l'allocation de PFMP, mon premier job, mes achats en ligne.",
      lie: "Le module Compte bancaire du Passeport EDUCFI ; l'allocation de PFMP (Orientation) ; protéger mes comptes (Cyber)."
    },
    accroche: "Le lycée te demande un RIB à ton nom pour verser ton allocation de PFMP. Tu sais où le trouver, et ce qu'il y a dessus ?",
    activites: [{
      titre: "Ouvrir mon compte", moteur: "quiz",
      consigne: "Pour un élève mineur, remets les étapes dans l'ordre.",
      config: { id: "educfi-2nde-2-ouvrir", questions: [
        { type: "ordre", enonce: "Les étapes pour ouvrir un compte à son nom",
          elements: ["Obtenir l'accord écrit de mon représentant légal", "Rassembler ma pièce d'identité et un justificatif de domicile", "Comparer les offres et leurs frais", "Ouvrir le compte avec mon représentant légal", "Récupérer mon RIB et le donner au lycée"],
          explication: "L'allocation de PFMP est versée sur le compte de l'élève si son représentant légal l'a autorisé par écrit. En Seconde : " + A("pfmp2nde") + "." },
        { type: "vf", enonce: "Un mineur peut avoir un compte bancaire à son nom.", bonne: true, explication: "Oui, avec l'accord de son représentant légal. Il a en général une carte qui vérifie le solde avant chaque paiement." }
      ] }
    }, {
      titre: "Je lis un RIB", moteur: "cartes",
      consigne: "Le RIB (relevé d'identité bancaire) sert à recevoir de l'argent ou à autoriser un prélèvement que j'ai choisi. À qui le donnes-tu ?",
      config: {
        fin: "Sur un RIB : le titulaire, l'IBAN (FR76…, l'adresse du compte), le BIC (le code de la banque). Il ne contient aucun code secret, mais il ne se donne pas à n'importe qui.",
        manches: [{
          type: "classer", titre: "Je donne mon RIB ?", categories: ["Oui", "Non"],
          cartes: [
            { texte: "Au lycée, pour recevoir l'allocation de PFMP", reponse: "Oui" },
            { texte: "À mon employeur, pour recevoir mon salaire", reponse: "Oui" },
            { texte: "Pour le prélèvement d'un abonnement que j'ai choisi", reponse: "Oui" },
            { texte: "À un inconnu qui propose de « faire passer de l'argent » sur mon compte", reponse: "Non", explication: "C'est le début de l'arnaque à la mule financière (séance 8)." },
            { texte: "À un compte sur un réseau social qui promet un cadeau", reponse: "Non" },
            { texte: "À un ami qui veut me rembourser sa part de pizza", reponse: "Oui", explication: "Pour recevoir un virement d'une personne de confiance, c'est normal." }
          ],
          bilan: "Je donne mon RIB à qui doit me verser de l'argent, ou pour un prélèvement que j'ai décidé."
        }]
      }
    }, {
      titre: "Mon relevé de compte", moteur: "cartes",
      consigne: "Voici le relevé de Maël pour un mois (inventé). Solde de départ : 45 €. Range chaque ligne : crédit (l'argent rentre) ou débit (l'argent sort).",
      config: {
        fin: "Solde final : 45 + 100 + 20 – 10 – 4,50 – 20 – 10,99 – 25 = 94,51 €. Et l'abonnement de musique à 10,99 € ? Maël ne s'en sert plus depuis deux mois.",
        manches: [{
          type: "classer", titre: "Crédit ou débit ?", categories: ["Crédit (+)", "Débit (–)"],
          cartes: [
            { texte: "Virement : allocation de PFMP, 100 €", reponse: "Crédit (+)" },
            { texte: "Virement de mamie, 20 €", reponse: "Crédit (+)" },
            { texte: "Prélèvement : forfait téléphone, 10 €", reponse: "Débit (–)", explication: "Un prélèvement : l'opérateur se sert directement, chaque mois, avec mon accord." },
            { texte: "Paiement par carte : boulangerie, 4,50 €", reponse: "Débit (–)" },
            { texte: "Retrait au distributeur, 20 €", reponse: "Débit (–)" },
            { texte: "Prélèvement : abonnement de musique, 10,99 €", reponse: "Débit (–)", explication: "L'abonnement oublié : je le résilie s'il ne me sert plus." },
            { texte: "Paiement par carte : vêtements, 25 €", reponse: "Débit (–)" }
          ],
          bilan: "Je regarde mes comptes au moins une fois par semaine : c'est comme ça qu'on repère un abonnement oublié ou une opération bizarre."
        }]
      }
    }, {
      titre: "Le découvert, c'est quoi ?", moteur: "quiz", facultatif: true,
      config: { id: "educfi-2nde-2-decouvert", questions: [
        { type: "vf", enonce: "Être à découvert, c'est dépenser plus que ce qu'on a sur son compte.", bonne: true, explication: "Le solde devient négatif : c'est la banque qui avance l'argent, et elle le fait payer." },
        { type: "vf", enonce: "Le découvert est gratuit.", bonne: false, explication: "La banque prend des intérêts (les agios) et souvent des frais à chaque opération." },
        { type: "vf", enonce: "Avec une carte qui vérifie le solde, un paiement peut être refusé s'il n'y a pas assez d'argent.", bonne: true, explication: "C'est souvent le cas des cartes pour les jeunes : ça évite le découvert." },
        { type: "qcm", enonce: "Un compte coûte 2 € de frais par mois. Combien par an ?", options: ["2 €", "12 €", "24 €"], bonne: 2, explication: "2 € × 12 = 24 € : on compare les offres sur un an." }
      ] }
    }],
    retenir: [
      "Un compte sert à recevoir de l'argent, à payer et à suivre ses dépenses.",
      "Le RIB sert à recevoir de l'argent ou à autoriser un prélèvement que j'ai choisi.",
      "Je regarde mes comptes au moins une fois par semaine, sur l'appli de ma banque.",
      "Le découvert coûte cher : intérêts et frais."
    ],
    ressource: {
      titre: "Lire un RIB et un relevé de compte",
      intro: "Une fiche avec le vocabulaire de la banque.",
      blocs: [
        { type: "tableau", titre: "Le vocabulaire", colonnes: ["Mot", "Ce que ça veut dire"], lignes: [
          ["Crédit", "De l'argent qui rentre sur le compte"],
          ["Débit", "De l'argent qui sort du compte"],
          ["Solde", "Ce qu'il y a sur le compte à un moment donné"],
          ["Virement", "Envoi d'argent d'un compte à un autre"],
          ["Prélèvement", "Un organisme se sert sur mon compte, avec mon accord, à date fixe"],
          ["Découvert", "Solde négatif : la banque avance l'argent et fait payer des agios"]
        ] },
        { type: "liste", titre: "Sur un RIB", items: ["Le nom du titulaire", "L'IBAN : le numéro international du compte (FR76…)", "Le BIC : le code de la banque", "La banque et l'agence"] },
        { type: "liste", titre: "Mes réflexes", items: ["Je vérifie mes comptes chaque semaine", "Je résilie les abonnements qui ne servent plus", "Je compare les frais des comptes sur un an", "Je ne donne mon RIB qu'à qui doit me verser de l'argent ou à un prélèvement choisi"] }
      ]
    },
    traces: [{
      titre: "Mes repères bancaires", moteur: "carnet",
      outil: { id: "reperes-bancaires", nom: "Mes repères bancaires", description: "Ce que me coûte mon compte, le plafond de ma carte, que faire si je la perds." },
      config: {
        cle: "reperes-bancaires", titreDoc: "Mes repères bancaires",
        intro: "Pour toi seul. N'écris jamais ici ton code de carte ni tes identifiants.",
        champs: [
          { id: "cout", label: "Ce que me coûte mon compte par an" },
          { id: "plafond", label: "Le plafond de ma carte (paiements, retraits)" },
          { id: "perte", label: "Ce que je fais si je perds ma carte (où trouver le numéro d'opposition)", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Sur un relevé, un « crédit » c'est…", options: ["De l'argent qui rentre", "De l'argent qui sort", "Un prêt de la banque"], bonne: 0, explication: "Crédit = l'argent arrive ; débit = l'argent part." },
      { type: "qcm", enonce: "À quoi sert un RIB ?", options: ["À payer en magasin", "À recevoir un virement ou autoriser un prélèvement", "À retirer de l'argent"], bonne: 1, explication: "On le donne à qui doit nous verser de l'argent, ou pour un prélèvement qu'on a choisi." },
      { type: "vf", enonce: "Le découvert ne coûte rien si on rembourse vite.", bonne: false, explication: "Même court, il entraîne des intérêts (agios) et souvent des frais." }
    ],
    quizOfficiel: "Compte bancaire",
    plusLoin: [
      MQD,
      { titre: "Un mineur peut-il avoir un compte bancaire ou un livret ?", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F21035", description: "Ce que la loi prévoit pour les moins de 18 ans." }
    ],
    passerelles: ["orientation-2nde-2"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Le RIB demandé pour l'allocation de PFMP.", "Rappelle les montants de l'allocation en Seconde."],
        ["5-13 min", "Activité", "Remet dans l'ordre les étapes d'ouverture d'un compte.", "Précise le rôle du représentant légal."],
        ["13-20 min", "Activité", "Trie à qui donner son RIB.", "Annonce la mule financière (séance 8)."],
        ["20-40 min", "Activité", "Classe les lignes du relevé de Maël et calcule le solde.", "Fait trouver l'abonnement oublié."],
        ["40-48 min", "Activité facultative", "Répond au vrai ou faux sur le découvert.", "Compare deux offres sur un an."],
        ["48-55 min", "Trace et quiz", "Remplit « Mes repères bancaires », répond à « Je vérifie ».", "Programme le quiz officiel du module Compte bancaire."]
      ],
      vigilance: vigilance("Certains élèves n'ont pas encore de compte : la séance les aide à préparer l'ouverture, sans jamais les exposer.")
    }
  });

  // ===================================================================
  // SÉANCE 3 · Payer sans se faire avoir (module Moyens de paiement)
  // ===================================================================
  S.push({
    id: "educfi-2nde-3", pilier: "educfi", niveau: "2nde", num: 3, duree: DUREE,
    titre: "Payer sans se faire avoir",
    objectifCourt: "Module Moyens de paiement : carte, virement, en ligne",
    objectif: "Choisir le bon moyen de paiement selon la situation, acheter en ligne en sécurité et savoir réagir si sa carte est perdue ou piratée.",
    rappel: { seance: "educfi-2nde-2", texte: "Ton compte est ouvert. Maintenant, comment l'argent en sort ? Espèces, carte, téléphone, virement… Lequel utilises-tu le plus, et lequel est le plus sûr ?" },
    aqcms: {
      pourquoi: "Chaque moyen de paiement a ses règles et ses risques : un mauvais réflexe peut coûter cher.",
      apport: "Payer en sécurité, en magasin comme en ligne, et réagir vite en cas de problème.",
      ou: "À la caisse, sur un site, entre amis, pour un abonnement.",
      lie: "Le module Moyens de paiement du Passeport EDUCFI ; protéger mes comptes (Cyber Seconde, séance 3)."
    },
    accroche: "Des baskets à 60 % moins cher que partout ailleurs, sur un site découvert sur un réseau social. Tu commandes ?",
    activites: [{
      titre: "Quel moyen pour quel achat ?", moteur: "cartes",
      consigne: "Pour chaque situation, quel moyen de paiement est le plus adapté ?",
      config: {
        fin: "On ne peut pas payer un professionnel plus de " + A("especesPlafond") + " en espèces. Le paiement sans contact est plafonné à chaque achat.",
        manches: [{
          type: "classer", titre: "Je paie avec…", categories: ["Espèces", "Carte", "Virement", "Prélèvement"],
          cartes: [
            { texte: "Le pain à la boulangerie", reponse: "Espèces", explication: "Ou la carte : pour les petites sommes, les deux vont." },
            { texte: "Rembourser 300 € à ma tante", reponse: "Virement" },
            { texte: "Le forfait téléphone chaque mois", reponse: "Prélèvement" },
            { texte: "Un achat sur un site de vente", reponse: "Carte" },
            { texte: "La salle de sport chaque mois", reponse: "Prélèvement" },
            { texte: "Rembourser sa part de pizza à un ami", reponse: "Virement", explication: "Un virement, éventuellement par une appli de paiement entre amis." },
            { texte: "Un plein d'essence", reponse: "Carte" }
          ],
          bilan: "Petites sommes : espèces ou carte. Sommes plus importantes : virement. Dépenses régulières : prélèvement."
        }]
      }
    }, {
      titre: "J'achète en ligne", moteur: "scenario",
      consigne: "Maël veut des baskets sur un site découvert sur un réseau social. À chaque étape, que fait-il ?",
      config: { id: "educfi-2nde-3", cas: [{
        titre: "Les baskets à – 60 %", depart: "a",
        noeuds: {
          a: { contexte: "Le site s'appelle « baskets-pas-cher-outlet.shop ». Les baskets sont à 48 € au lieu de 120 €.", question: "Que fait Maël en premier ?", choix: [
            { texte: "Il commande vite, avant la fin de l'offre.", ok: false, retour: "L'urgence et le prix trop bas sont deux signaux d'alerte." },
            { texte: "Il cherche des avis sur ce site ailleurs que sur le site lui-même, et regarde les mentions légales.", vers: "b", ok: true, retour: "Bon réflexe : les avis affichés sur le site peuvent être faux." }
          ] },
          b: { contexte: "Pas de mentions légales, pas d'adresse, et plusieurs personnes disent n'avoir jamais reçu leur commande.", question: "Mais le site affiche un cadenas à côté de l'adresse. C'est rassurant ?", choix: [
            { texte: "Oui, le cadenas prouve que le site est sûr.", ok: false, retour: "Le cadenas montre seulement que la connexion est chiffrée. Un faux site peut l'avoir aussi." },
            { texte: "Non : le cadenas veut dire que la connexion est chiffrée, pas que le vendeur est honnête.", vers: "c", ok: true, retour: "Exactement." }
          ] },
          c: { contexte: "Maël achète finalement sur un site connu. Au moment de payer, l'appli de sa banque lui demande de valider un paiement de 52 €.", question: "Que fait-il ?", choix: [
            { texte: "Il vérifie que le montant et le site correspondent à son achat, puis il valide.", vers: "fin", ok: true, retour: "Oui : on ne valide que l'achat qu'on est en train de faire." },
            { texte: "Il valide sans regarder, c'est sa banque.", ok: false, retour: "Les escrocs comptent sur ce réflexe : on vérifie toujours le montant et le commerçant." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Prix trop beau, urgence, pas de mentions légales : je n'achète pas. Je ne valide dans l'appli de ma banque que l'achat que je suis en train de faire." } }
        }
      }] }
    }, {
      titre: "Virement : on vérifie avant", moteur: "quiz",
      config: { id: "educfi-2nde-3-virement", questions: [
        { type: "vf", enonce: "Quand je fais un virement, ma banque vérifie que le nom du bénéficiaire correspond à l'IBAN.", bonne: true, explication: "Depuis octobre 2025, la banque affiche une alerte si le nom ne correspond pas : on ne continue pas sans vérifier." },
        { type: "vf", enonce: "Un virement instantané peut être annulé si je me suis trompé.", bonne: false, explication: "Il arrive en quelques secondes et ne peut plus être annulé : on vérifie avant d'envoyer." },
        { type: "vf", enonce: "Mon code de carte peut être donné à un conseiller de ma banque au téléphone.", bonne: false, explication: "Jamais. Personne, pas même la banque, ne demande ce code." }
      ] }
    }, {
      titre: "Carte perdue ou piratée", moteur: "quiz", facultatif: true,
      config: { id: "educfi-2nde-3-opposition", questions: [
        { type: "ordre", enonce: "Ta carte a disparu, ou tu vois des achats que tu n'as pas faits. Remets les gestes dans l'ordre.",
          elements: ["Je fais opposition tout de suite (appli de la banque ou numéro d'opposition)", "Je porte plainte en cas de vol", "Je surveille mes comptes", "Je conteste auprès de ma banque les opérations que je n'ai pas faites"],
          explication: "Pour des opérations que je n'ai pas autorisées, la banque doit en principe me rembourser, si je signale vite et sans avoir donné mes codes." }
      ] }
    }],
    retenir: [
      "Chaque moyen de paiement a son usage : petites sommes en espèces ou par carte, sommes plus importantes par virement.",
      "Mon code de carte ne se donne à personne, et ne s'écrit nulle part.",
      "Je ne valide dans l'appli de ma banque que l'achat que je suis en train de faire.",
      "Carte perdue ou piratée : opposition immédiate."
    ],
    ressource: {
      titre: "Les moyens de paiement",
      intro: "Avantages, risques et bons réflexes.",
      blocs: [
        { type: "tableau", titre: "Les moyens de paiement", colonnes: ["Moyen", "Pour", "Mon réflexe"], lignes: [
          ["Espèces", "Petites sommes", "Pas plus de " + A("especesPlafond") + " à un professionnel"],
          ["Carte", "Magasin, internet", "Je cache mon code, je valide seulement mes achats"],
          ["Virement", "Envoyer de l'argent à quelqu'un", "Je vérifie le nom : un virement instantané ne s'annule pas"],
          ["Prélèvement", "Dépenses régulières", "Je surveille et je résilie ce qui ne sert plus"]
        ] },
        { type: "liste", titre: "Acheter en ligne sans se faire avoir", items: ["Je vérifie l'adresse exacte du site", "Je cherche les mentions légales et des avis ailleurs", "Prix trop beau = méfiance", "Le cadenas ne prouve pas que le vendeur est honnête"] },
        { type: "etapes", titre: "Carte perdue, volée ou piratée", items: ["Opposition immédiate", "Plainte en cas de vol", "Surveillance des comptes", "Contestation des opérations non autorisées"] }
      ]
    },
    traces: [{
      titre: "Ma carte, mes réflexes", moteur: "carnet",
      outil: { id: "carte-reflexes", nom: "Ma carte, mes réflexes", description: "Où trouver le numéro d'opposition, mes plafonds, mes réglages." },
      config: {
        cle: "carte-reflexes", titreDoc: "Ma carte, mes réflexes",
        intro: "Pour toi seul. Jamais ton code ici.",
        champs: [
          { id: "opposition", label: "Où je trouve le numéro d'opposition" },
          { id: "plafonds", label: "Les plafonds de ma carte" },
          { id: "reglages", label: "Les réglages que j'active dans mon appli (paiement en ligne, à l'étranger, sans contact)", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Le cadenas dans la barre d'adresse prouve que le vendeur est honnête.", bonne: false, explication: "Il prouve seulement que la connexion est chiffrée." },
      { type: "qcm", enonce: "Ta carte a été volée. Premier geste ?", options: ["Attendre de voir s'il y a des achats", "Faire opposition tout de suite", "Changer de banque"], bonne: 1, explication: "L'opposition bloque la carte immédiatement." },
      { type: "qcm", enonce: "Pour rembourser 300 € à quelqu'un, le plus adapté est…", options: ["Les espèces", "Le virement", "Le prélèvement"], bonne: 1, explication: "Le virement laisse une trace et évite de transporter des billets." }
    ],
    quizOfficiel: "Moyens de paiement",
    plusLoin: [
      MQD,
      { titre: "Mémo mots de passe", source: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/medias/2019/11/Memo_mots-de-passe.pdf", description: "Pour protéger aussi l'appli de ta banque." }
    ],
    passerelles: ["cyber-2nde-3"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Les baskets à – 60 % : tu commandes ?", "Recueille les réflexes spontanés."],
        ["5-15 min", "Activité", "Classe les situations par moyen de paiement.", "Donne les repères : plafond des espèces, sans contact."],
        ["15-30 min", "Activité", "Suit le scénario « J'achète en ligne ».", "Insiste sur le cadenas et la validation dans l'appli."],
        ["30-38 min", "Activité", "Répond au vrai ou faux sur le virement.", "Présente la vérification du bénéficiaire et le virement instantané."],
        ["38-46 min", "Activité facultative", "Remet dans l'ordre les gestes en cas de carte perdue.", "Montre où se trouve l'opposition dans une appli bancaire, sans compte réel."],
        ["46-55 min", "Trace et quiz", "Remplit « Ma carte, mes réflexes », répond à « Je vérifie ».", "Programme le quiz officiel du module Moyens de paiement."]
      ],
      vigilance: vigilance("Aucun site réel n'est montré comme faux : les exemples sont inventés.")
    }
  });

  // ===================================================================
  // SÉANCE 4 · Mettre de côté (module Épargne)
  // ===================================================================
  S.push({
    id: "educfi-2nde-4", pilier: "educfi", niveau: "2nde", num: 4, duree: DUREE,
    titre: "Mettre de côté",
    objectifCourt: "Module Épargne : livrets, intérêts, projets",
    objectif: "Savoir pourquoi et comment épargner, comprendre les intérêts, comparer les livrets accessibles aux jeunes selon le rendement, la disponibilité et la sécurité.",
    rappel: { seance: "educfi-2nde-1", etiquette: "Revoir la séance 1", texte: "Ton budget est équilibré et il te reste 15 € à la fin du mois. Tu les dépenses, ou tu les gardes ? Et si tu les gardes, où ?" },
    aqcms: {
      pourquoi: "Sans réserve, le moindre imprévu devient un problème, et les projets restent des rêves.",
      apport: "Financer mon permis, mon scooter ou mon ordinateur, et faire face à un imprévu.",
      ou: "Chaque mois, dès que l'argent arrive.",
      lie: "Le module Épargne du Passeport EDUCFI ; mon projet (CPS Terminale) ; les arnaques aux faux placements (séance 8)."
    },
    accroche: "Tu as 15 € de côté à la fin du mois. Sur un compte, sur un livret, dans une boîte ? Qu'est-ce que ça change ?",
    activites: [{
      titre: "Pourquoi épargner ?", moteur: "cartes",
      config: {
        fin: "On épargne pour deux raisons : se protéger des imprévus, et financer ses projets.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Une réserve pour les imprévus", "Un projet"],
          cartes: [
            { texte: "Le téléphone qui tombe et se casse", reponse: "Une réserve pour les imprévus" },
            { texte: "Le permis de conduire", reponse: "Un projet" },
            { texte: "Un scooter pour aller en stage", reponse: "Un projet" },
            { texte: "Une amende de bus oubliée", reponse: "Une réserve pour les imprévus" },
            { texte: "Le voyage de fin d'année", reponse: "Un projet" },
            { texte: "Un ordinateur pour la formation", reponse: "Un projet" },
            { texte: "Un vélo volé à remplacer", reponse: "Une réserve pour les imprévus" }
          ],
          bilan: "Une petite réserve d'abord, puis les projets."
        }]
      }
    }, {
      titre: "La calculatrice d'épargne", moteur: "epargne",
      consigne: "Choisis un montant par mois, une durée et un placement. Ajoute ton objectif si tu en as un. Qu'est-ce qui fait le plus grossir ton épargne : les intérêts, ou la régularité ?",
      config: {
        id: "educfi-2nde-4", montant: 20, duree: 12, objectif: 300,
        placements: [
          { nom: "Compte courant", taux: 0 },
          { nom: "Livret A", taux: taux(A("livretATaux")) },
          { nom: "Livret jeune (exemple : 2 %)", taux: 2 }
        ]
      }
    }, {
      titre: "Le triangle de l'épargne", moteur: "cartes",
      consigne: "Rendement (ce que ça rapporte), disponibilité (je peux récupérer mon argent vite), sécurité (je ne peux pas perdre). On ne peut jamais tout avoir au maximum. À quoi correspond chaque phrase ?",
      config: {
        fin: "Le Livret A est disponible, sûr, sans impôt, avec un petit rendement (" + A("livretATaux") + " par an jusqu'au " + A("livretARevision") + "). Un gros rendement « sans risque », ça n'existe pas.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Compte courant", "Livret A", "Livret jeune", "Promesse miracle"],
          cartes: [
            { texte: "Ne rapporte rien, mais l'argent est disponible tout de suite", reponse: "Compte courant" },
            { texte: "Pour tous, dès la naissance, plafonné à " + A("livretAPlafond"), reponse: "Livret A" },
            { texte: "Pour les 12-25 ans, plafonné à " + A("livretJeunePlafond"), reponse: "Livret jeune" },
            { texte: "Taux au moins égal à celui du Livret A, fixé par chaque banque", reponse: "Livret jeune" },
            { texte: "Intérêts sans impôt, taux fixé par l'État", reponse: "Livret A" },
            { texte: "« 20 % par mois, garanti, sans risque »", reponse: "Promesse miracle", explication: "Impossible : plus le rendement promis est élevé, plus le risque est grand. C'est le signe d'une arnaque." }
          ],
          bilan: "Rendement, disponibilité, sécurité : un placement ne coche jamais les trois au maximum."
        }]
      }
    }, {
      titre: "Mon défi des six mois", moteur: "choisir", facultatif: true,
      consigne: "Choisis deux astuces pour tenir ton objectif.",
      config: {
        cle: "educfi-astuces-epargne", max: 2, titre: "Astuces", resume: "Mes deux astuces",
        cartes: [
          { nom: "Un virement automatique", ex: "Le jour où l'argent arrive, vers mon livret" },
          { nom: "Une dépense variable réduite", ex: "Une sortie ou un snack en moins par semaine" },
          { nom: "La règle des 48 heures", ex: "J'attends deux jours avant un achat non prévu" },
          { nom: "Une tirelire pour la monnaie", ex: "Je la verse sur mon livret chaque mois" },
          { nom: "Une partie de chaque rentrée d'argent", ex: "Allocation, cadeau, job : j'en garde une part" }
        ]
      }
    }],
    retenir: [
      "Épargner, c'est se protéger des imprévus et financer ses projets.",
      "J'épargne dès que l'argent arrive, pas avec ce qui reste.",
      "Rendement, disponibilité, sécurité : un placement ne coche jamais les trois au maximum.",
      "Un gros rendement « sans risque », ça n'existe pas."
    ],
    ressource: {
      titre: "Les livrets pour les jeunes",
      intro: "Les repères pour mettre de côté.",
      blocs: [
        { type: "tableau", titre: "Comparer", colonnes: ["", "Compte courant", "Livret A", "Livret jeune"], lignes: [
          ["Pour qui", "Tous", "Tous, dès la naissance", "12-25 ans"],
          ["Ça rapporte", "Rien", A("livretATaux") + " par an", "Au moins autant que le Livret A"],
          ["Plafond", "Aucun", A("livretAPlafond"), A("livretJeunePlafond")],
          ["Disponible", "Tout de suite", "Oui", "Oui (retraits seul dès 16 ans, sauf opposition des parents)"]
        ] },
        { type: "tableau", titre: "Mon suivi sur six mois", colonnes: ["Mois", "Versé", "Total"], lignes: [["1", "", ""], ["2", "", ""], ["3", "", ""], ["4", "", ""], ["5", "", ""], ["6", "", ""]] },
        { type: "texte", titre: "Les intérêts", texte: "Ce que la banque me verse pour avoir laissé mon argent sur le livret. Sur un livret réglementé, ils sont versés une fois par an et ne sont pas imposés." }
      ]
    },
    traces: [{
      titre: "Mon projet d'épargne", moteur: "carnet",
      outil: { id: "projet-epargne", nom: "Mon projet d'épargne", description: "Mon objectif, son coût, le montant par mois, la date visée." },
      config: {
        cle: "projet-epargne", titreDoc: "Mon projet d'épargne",
        intro: "Pour toi seul.",
        champs: [
          { id: "objectif", label: "Mon objectif" },
          { id: "cout", label: "Ce qu'il coûte" },
          { id: "mois", label: "Ce que je mets de côté chaque mois" },
          { id: "date", label: "La date que je vise" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Qu'est-ce qui fait le plus grossir une petite épargne ?", options: ["Les intérêts", "La régularité des versements", "La chance"], bonne: 1, explication: "Avec les taux actuels, c'est surtout ce qu'on verse chaque mois qui compte." },
      { type: "vf", enonce: "Un placement peut être à la fois très rentable, sans aucun risque et disponible tout de suite.", bonne: false, explication: "C'est le triangle de l'épargne : on ne peut pas tout avoir au maximum." },
      { type: "qcm", enonce: "Le livret jeune est ouvert aux…", options: ["12-25 ans", "18-30 ans", "Moins de 18 ans seulement"], bonne: 0, explication: "Entre 12 et 25 ans, plafonné à " + A("livretJeunePlafond") + "." }
    ],
    quizOfficiel: "Épargne",
    plusLoin: [
      MQD,
      { titre: "Livret A", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2365", description: "Taux, plafond, ouverture et retraits." },
      { titre: "Le livret jeune", source: "Ministère de l'Économie", url: "https://www.economie.gouv.fr/particuliers/epargne-livret-jeune", description: "Pour qui, combien, comment." }
    ],
    passerelles: ["cps-tle-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Les 15 € de côté : où les mettre ?", "Fait émerger l'idée de réserve."],
        ["5-12 min", "Activité", "Classe : réserve pour les imprévus ou projet.", "Distingue épargne de précaution et de projet."],
        ["12-27 min", "Activité", "Utilise la calculatrice d'épargne.", "Montre que la régularité compte plus que le taux."],
        ["27-37 min", "Activité", "Classe les phrases du triangle de l'épargne.", "Annonce la séance 8 : la promesse miracle."],
        ["37-47 min", "Activité facultative", "Choisit deux astuces pour son défi.", "Propose le virement automatique."],
        ["47-55 min", "Trace et quiz", "Remplit « Mon projet d'épargne », répond à « Je vérifie ».", "Programme le quiz officiel du module Épargne."]
      ],
      vigilance: vigilance("Les taux viennent du fichier des faits datés : à relire à chaque révision (1er février, 1er août).")
    }
  });

  // ===================================================================
  // SÉANCE 5 · Le vrai prix du crédit (module Crédit)
  // ===================================================================
  S.push({
    id: "educfi-2nde-5", pilier: "educfi", niveau: "2nde", num: 5, duree: DUREE,
    titre: "Le vrai prix du crédit",
    objectifCourt: "Module Crédit : TAEG, paiement en plusieurs fois",
    objectif: "Comprendre qu'un crédit se rembourse avec des intérêts, lire un TAEG, évaluer sa capacité de remboursement et reconnaître les crédits qui ne disent pas leur nom.",
    rappel: { seance: "educfi-2nde-4", texte: "La dernière fois, tu as mis de l'argent de côté pour ton projet. Une autre solution : l'acheter tout de suite et payer plus tard. « Payez en 4 fois », c'est gratuit ?" },
    aqcms: {
      pourquoi: "Le crédit est partout, même là où on ne le voit pas : paiement en plusieurs fois, découvert, cartes de magasin.",
      apport: "Savoir ce qu'un achat à crédit me coûte vraiment, et ne pas m'enfermer dans des remboursements.",
      ou: "Pour un téléphone, un scooter, le permis, plus tard une voiture.",
      lie: "Le module Crédit du Passeport EDUCFI ; dire non à la pression (CPS Seconde, séance 5) ; mon budget (séance 1)."
    },
    accroche: "« Payez en 4 fois sans frais. » À partir du " + A("fractionneDate") + ", la loi dit que c'est un crédit. Pourquoi, à ton avis ?",
    activites: [{
      titre: "Crédit ou pas ?", moteur: "cartes",
      config: {
        fin: "Tous sont des crédits sauf le paiement comptant : on utilise de l'argent qu'on n'a pas encore, et il faudra rembourser. À partir du " + A("fractionneDate") + ", le paiement en 3 ou 4 fois est un crédit à la consommation, avec les mêmes protections.",
        manches: [{
          type: "classer", titre: "C'est un crédit ?", categories: ["Oui", "Non"],
          cartes: [
            { texte: "Payer en 4 fois sans frais", reponse: "Oui" },
            { texte: "Être à découvert", reponse: "Oui", explication: "La banque avance l'argent et le fait payer." },
            { texte: "La carte d'un magasin avec « réserve d'argent »", reponse: "Oui", explication: "C'est un crédit renouvelable, souvent très cher." },
            { texte: "L'argent prêté par un ami", reponse: "Oui", explication: "Sans intérêts, mais il faut rembourser." },
            { texte: "Le prêt « permis à 1 € par jour »", reponse: "Oui", explication: "Un prêt sans intérêts, mais à rembourser." },
            { texte: "Payer comptant avec mon épargne", reponse: "Non" }
          ],
          bilan: "Un crédit, ce n'est pas de l'argent en plus : c'est de l'argent à rembourser."
        }]
      }
    }, {
      titre: "Le vrai prix", moteur: "credit",
      consigne: "Une console à 500 €. Essaie : en 4 fois sans frais (4 mois, TAEG 0), puis à crédit sur 12 mois avec un TAEG de 20 %, puis sur 24 mois. Combien coûte le crédit à chaque fois ?",
      config: { id: "educfi-2nde-5", montant: 500, duree: 12, taeg: 20, comparer: true }
    }, {
      titre: "Je peux rembourser ?", moteur: "scenario",
      config: { id: "educfi-2nde-5-rembourser", cas: [{
        titre: "Le téléphone à 900 €", depart: "a",
        noeuds: {
          a: { contexte: "Maël veut un téléphone à 900 € en 10 fois : 90 € par mois. Ses ressources : 170 € par mois, dont 100 € d'allocation de PFMP… qui n'arrive que les mois de stage.", question: "Peut-il prendre ce crédit ?", choix: [
            { texte: "Oui, 90 € c'est moins que 170 €.", ok: false, retour: "Il faut regarder ce qui reste après les dépenses fixes, et les mois sans allocation de PFMP : il n'aurait que 70 €." },
            { texte: "Non : certains mois, ses ressources ne couvrent même pas la mensualité.", vers: "b", ok: true, retour: "Oui. On vérifie que la mensualité tient chaque mois, même sans ressource exceptionnelle." }
          ] },
          b: { contexte: "Il prend quand même un modèle à 400 € en 4 fois. Le troisième mois, il oublie une échéance.", question: "Que se passe-t-il, en général ?", choix: [
            { texte: "Rien, il paiera le mois suivant.", ok: false, retour: "Des frais de retard s'ajoutent, et l'organisme peut relancer ou transmettre à un recouvrement." },
            { texte: "Des frais de retard s'ajoutent. S'il emprunte ailleurs pour payer, c'est le début de l'engrenage.", vers: "fin", ok: true, retour: "Oui : rembourser un crédit avec un autre crédit est le premier pas vers le surendettement." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Avant de m'engager, je vérifie que la mensualité tient dans mon budget, même en cas d'imprévu. En cas de difficulté, la Banque de France peut aider les personnes qui n'arrivent plus à rembourser." } }
        }
      }] }
    }, {
      titre: "Les mots du crédit", moteur: "quiz", facultatif: true,
      config: { id: "educfi-2nde-5-mots", questions: [
        { type: "vf", enonce: "« Un crédit vous engage et doit être remboursé » est une mention obligatoire dans les publicités.", bonne: true, explication: "Elle rappelle que le crédit n'est pas un cadeau." },
        { type: "vf", enonce: "Pour comparer deux crédits, on regarde le TAEG.", bonne: true, explication: "Le taux annuel effectif global inclut tous les coûts : intérêts, frais, assurance obligatoire." },
        { type: "vf", enonce: "Après avoir signé un crédit à la consommation, on a 14 jours pour changer d'avis.", bonne: true, explication: "C'est le délai de rétractation." },
        { type: "vf", enonce: "Plus la durée d'un crédit est longue, moins il coûte cher au total.", bonne: false, explication: "La mensualité baisse, mais on paie des intérêts plus longtemps : le coût total augmente." }
      ] }
    }],
    retenir: [
      "Un crédit, ce n'est pas de l'argent en plus : c'est de l'argent qu'on rembourse, souvent avec des intérêts.",
      "Je compare les crédits avec le TAEG.",
      "À partir du " + A("fractionneDate") + ", le paiement en plusieurs fois est un crédit, avec les mêmes protections.",
      "Avant de m'engager, je vérifie que la mensualité tient dans mon budget."
    ],
    ressource: {
      titre: "Le crédit en cinq mots",
      intro: "Le vocabulaire et la check-list avant de signer.",
      blocs: [
        { type: "tableau", titre: "Les cinq mots", colonnes: ["Mot", "Ce que ça veut dire"], lignes: [
          ["Capital", "La somme empruntée"],
          ["Intérêts", "Le prix payé pour emprunter"],
          ["Mensualité", "Ce que je rembourse chaque mois"],
          ["Durée", "Le nombre de mois de remboursement"],
          ["TAEG", "Le coût total du crédit en % par an, frais compris : c'est lui qu'on compare"]
        ] },
        { type: "etapes", titre: "Avant de m'engager", items: ["En ai-je besoin maintenant ?", "Combien ça coûte au total ?", "Puis-je payer chaque mois, même en cas d'imprévu ?", "Existe-t-il une autre solution : épargner, attendre, acheter d'occasion ?"] }
      ]
    },
    traces: [{
      titre: "Avant de m'engager", moteur: "carnet", rendre: true,
      outil: { id: "avant-engager", nom: "Avant de m'engager", description: "Mes quatre questions avant un crédit." },
      config: {
        cle: "avant-engager", titreDoc: "Avant de m'engager",
        champs: [
          { id: "besoin", label: "En ai-je besoin maintenant ? Pourquoi ?" },
          { id: "cout", label: "Combien ça coûte au total ?" },
          { id: "payer", label: "Puis-je payer chaque mois, même en cas d'imprévu ?" },
          { id: "autre", label: "Quelle autre solution existe ?" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Quel taux permet de comparer deux crédits ?", options: ["Le taux du Livret A", "Le TAEG", "La TVA"], bonne: 1, explication: "Le TAEG inclut tous les coûts du crédit." },
      { type: "vf", enonce: "Payer en 4 fois sans frais, ce n'est pas un crédit.", bonne: false, explication: "C'en est un : on paie plus tard de l'argent qu'on n'a pas encore." },
      { type: "ouverte", enonce: "Que dois-tu vérifier avant de prendre un crédit ?", modele: "Que la mensualité tient dans mon budget chaque mois, même en cas d'imprévu ; le coût total ; s'il existe une autre solution." }
    ],
    quizOfficiel: "Crédit",
    plusLoin: [
      MQD,
      { titre: "Quelles aides pour financer le permis de conduire ?", source: "Justice.fr", url: "https://www.justice.fr/fiche/payer-permis-conduire-permis-euro-apprenti-chomeur", description: "Dont le permis à 1 € par jour, un prêt sans intérêts." }
    ],
    passerelles: ["cps-2nde-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "« Payez en 4 fois » : pourquoi la loi parle de crédit ?", "Présente le changement du " + A("fractionneDate") + "."],
        ["5-13 min", "Activité", "Classe : crédit ou pas.", "Fait apparaître les crédits cachés."],
        ["13-28 min", "Activité", "Compare la console en 4 fois, sur 12 et 24 mois.", "Fait lire le coût total."],
        ["28-43 min", "Activité", "Suit le scénario du téléphone à 900 €.", "Nomme l'engrenage du surendettement."],
        ["43-50 min", "Activité facultative", "Répond au vrai ou faux sur les mots du crédit.", "Insiste sur le TAEG et le délai de 14 jours."],
        ["50-55 min", "Trace et quiz", "Remplit « Avant de m'engager », répond à « Je vérifie ».", "Programme le quiz officiel du module Crédit."]
      ],
      vigilance: vigilance("Un élève qui parle de dettes est orienté discrètement vers l'assistante sociale.")
    }
  });

  // ===================================================================
  // SÉANCE 6 · Assuré ou pas ? (module Assurances)
  // ===================================================================
  S.push({
    id: "educfi-2nde-6", pilier: "educfi", niveau: "2nde", num: 6, duree: DUREE,
    titre: "Assuré ou pas ?",
    objectifCourt: "Module Assurances : mutualisation, franchise, obligations",
    objectif: "Comprendre le principe de l'assurance, connaître son vocabulaire, savoir quelles assurances sont obligatoires et juger si une assurance vaut son prix.",
    rappel: { seance: "educfi-2nde-5", texte: "Ton téléphone payé en 10 fois tombe et l'écran se brise. Tu le rembourses toujours, mais il ne marche plus. Une assurance t'aurait-elle aidé ? Et à quel prix ?" },
    aqcms: {
      pourquoi: "Un accident peut coûter très cher, parfois toute une vie. L'assurance protège, à condition de savoir ce qu'on achète.",
      apport: "Ne pas payer pour rien, et ne pas rouler sans être couvert.",
      ou: "Pour un scooter, une trottinette électrique, un téléphone, plus tard un logement.",
      lie: "Le module Assurances du Passeport EDUCFI ; mes droits et obligations (Droits)."
    },
    accroche: "Trente élèves versent chacun 5 € dans une caisse commune. Dans l'année, deux téléphones se cassent. Qui paie la réparation ?",
    activites: [{
      titre: "La caisse commune", moteur: "quiz",
      config: { id: "educfi-2nde-6-caisse", questions: [
        { type: "qcm", enonce: "30 élèves versent 5 € chacun. Combien y a-t-il dans la caisse ?", options: ["35 €", "150 €", "300 €"], bonne: 1, explication: "30 × 5 = 150 €." },
        { type: "qcm", enonce: "Deux réparations à 75 € chacune. La caisse peut-elle payer ?", options: ["Oui, tout juste", "Non"], bonne: 0, explication: "2 × 75 = 150 € : chacun a payé 5 €, et deux élèves n'ont pas eu à payer 75 €." },
        { type: "vf", enonce: "C'est le principe de l'assurance : beaucoup paient un peu pour que quelques-uns ne paient pas tout.", bonne: true, explication: "On appelle ça la mutualisation des risques." }
      ] }
    }, {
      titre: "Les mots de l'assurance", moteur: "cartes",
      consigne: "Relie chaque définition au bon mot.",
      config: {
        fin: "La franchise reste toujours à ma charge : je la regarde avant de signer.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Cotisation", "Sinistre", "Franchise", "Exclusion", "Plafond"],
          cartes: [
            { texte: "Ce que je paie chaque mois ou chaque année pour être assuré", reponse: "Cotisation" },
            { texte: "L'accident, le vol ou la casse qui arrive", reponse: "Sinistre" },
            { texte: "La partie du dommage qui reste à ma charge", reponse: "Franchise" },
            { texte: "Ce que le contrat ne couvre pas", reponse: "Exclusion" },
            { texte: "Le montant maximum que l'assureur versera", reponse: "Plafond" }
          ],
          bilan: "Cotisation, sinistre, franchise, exclusion, plafond : cinq mots à chercher dans tout contrat."
        }]
      }
    }, {
      titre: "Mon téléphone est cassé", moteur: "quiz",
      consigne: "Une assurance téléphone coûte 9 € par mois, avec une franchise de 79 €. La réparation de l'écran coûte 150 €.",
      config: { id: "educfi-2nde-6-telephone", questions: [
        { type: "qcm", enonce: "Combien coûte l'assurance sur deux ans ?", options: ["108 €", "216 €", "79 €"], bonne: 1, explication: "9 € × 24 mois = 216 €." },
        { type: "qcm", enonce: "L'écran casse une fois. Combien l'assurance rembourse-t-elle ?", options: ["150 €", "71 €", "Rien"], bonne: 1, explication: "150 € de réparation – 79 € de franchise = 71 € remboursés." },
        { type: "vf", enonce: "Sur deux ans, avec un seul écran cassé, cette assurance est rentable.", bonne: false, explication: "216 € + 79 € = 295 € dépensés, contre 150 € sans assurance." },
        { type: "vf", enonce: "Avant de souscrire, je vérifie si je ne suis pas déjà couvert, par exemple par l'assurance habitation de ma famille.", bonne: true, explication: "Et je lis les exclusions : vol sans violence, oxydation, écran seul…" }
      ] }
    }, {
      titre: "Sans assurance", moteur: "scenario", facultatif: true,
      config: { id: "educfi-2nde-6", cas: [{
        titre: "La trottinette de Léa", depart: "a",
        noeuds: {
          a: { contexte: "Léa (elle est inventée) roule en trottinette électrique, sans assurance. Elle renverse un piéton, qui se casse le bras.", question: "Qui va payer les soins et l'arrêt de travail du piéton ?", choix: [
            { texte: "Personne, c'était un accident.", ok: false, retour: "La victime sera indemnisée, et quelqu'un devra payer." },
            { texte: "Un fonds de garantie indemnise la victime, puis se retourne contre Léa et sa famille.", vers: "b", ok: true, retour: "Oui : sans assurance, c'est le responsable qui rembourse, parfois pendant des années." }
          ] },
          b: { question: "Rouler sans assurance, c'est…", choix: [
            { texte: "Une simple formalité oubliée.", ok: false, retour: "C'est un délit." },
            { texte: "Un délit, puni d'une amende pouvant aller jusqu'à " + A("defautAssurance") + ".", vers: "fin", ok: true, retour: "Oui, et le véhicule peut être confisqué." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "L'assurance responsabilité civile est obligatoire pour tout véhicule à moteur : voiture, scooter, et trottinette électrique." } }
        }
      }] }
    }],
    retenir: [
      "S'assurer, c'est payer un peu chaque mois pour éviter de payer beaucoup en cas de problème.",
      "La franchise reste toujours à ma charge.",
      "Je lis les exclusions avant de signer.",
      "L'assurance est obligatoire pour tout véhicule à moteur, scooter et trottinette électrique compris."
    ],
    ressource: {
      titre: "Le vocabulaire de l'assurance",
      intro: "Les mots à connaître et les questions à poser.",
      blocs: [
        { type: "tableau", titre: "Les mots", colonnes: ["Mot", "Ce que ça veut dire"], lignes: [
          ["Cotisation (ou prime)", "Ce que je paie pour être assuré"],
          ["Sinistre", "L'accident, le vol, la casse"],
          ["Franchise", "Ce qui reste à ma charge"],
          ["Exclusion", "Ce qui n'est pas couvert"],
          ["Plafond", "Le maximum remboursé"]
        ] },
        { type: "etapes", titre: "Cinq questions avant de souscrire", items: ["Est-ce obligatoire ?", "Suis-je déjà couvert ailleurs ?", "Combien ça coûte sur un an ?", "Quelle est la franchise ?", "Qu'est-ce qui est exclu ?"] }
      ]
    },
    traces: [{
      titre: "Ce qui me protège", moteur: "carnet",
      outil: { id: "ce-qui-protege", nom: "Ce qui me protège", description: "Les assurances qui me couvrent et la question à poser chez moi." },
      config: {
        cle: "ce-qui-protege", titreDoc: "Ce qui me protège",
        intro: "Pour toi seul.",
        champs: [
          { id: "couvert", label: "Les assurances qui me couvrent déjà (responsabilité civile de la famille, assurance scolaire, véhicule)", multi: true },
          { id: "question", label: "La question que je pose chez moi" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "La franchise, c'est…", options: ["Ce que je paie chaque mois", "Ce qui reste à ma charge en cas de sinistre", "Ce qui n'est pas couvert"], bonne: 1, explication: "Elle est toujours déduite du remboursement." },
      { type: "vf", enonce: "Une trottinette électrique doit être assurée.", bonne: true, explication: "Comme tout véhicule à moteur." },
      { type: "ouverte", enonce: "Qu'est-ce que la mutualisation ?", modele: "Beaucoup de personnes paient un peu dans une caisse commune pour que celles qui ont un sinistre soient remboursées." }
    ],
    quizOfficiel: "Assurances",
    plusLoin: [
      MQD,
      { titre: "Sécurité routière", source: "Délégation à la sécurité routière", url: "https://www.securite-routiere.gouv.fr", description: "Deux-roues, trottinettes : les règles et les risques." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "La caisse commune de la classe.", "Fait calculer à voix haute."],
        ["5-12 min", "Activité", "Répond aux questions de la caisse commune.", "Nomme la mutualisation."],
        ["12-20 min", "Activité", "Relie les mots de l'assurance.", "Insiste sur franchise et exclusion."],
        ["20-35 min", "Activité", "Calcule le coût réel de l'assurance téléphone.", "Fait vérifier les couvertures existantes."],
        ["35-47 min", "Activité facultative", "Suit le scénario de Léa en trottinette.", "Rappelle l'obligation pour tout véhicule à moteur."],
        ["47-55 min", "Trace et quiz", "Remplit « Ce qui me protège », répond à « Je vérifie ».", "Programme le quiz officiel du module Assurances."]
      ],
      vigilance: vigilance("On ne cite aucune compagnie d'assurance comme modèle.")
    }
  });

  // ===================================================================
  // SÉANCE 7 · À quoi servent mes impôts ? (module Impôts)
  // ===================================================================
  S.push({
    id: "educfi-2nde-7", pilier: "educfi", niveau: "2nde", num: 7, duree: DUREE,
    titre: "À quoi servent mes impôts ?",
    objectifCourt: "Module Impôts : TVA, services publics",
    objectif: "Comprendre à quoi servent les impôts, distinguer les principaux impôts (TVA, impôt sur le revenu, impôts locaux) et savoir ce qui concerne déjà un lycéen.",
    rappel: { seance: "educfi-2nde-6", texte: "Quand Léa a eu son accident, les pompiers et l'hôpital ont pris en charge le piéton. Qui les a payés ?" },
    aqcms: {
      pourquoi: "Les impôts financent l'école, l'hôpital, les routes, la sécurité. Les comprendre, c'est comprendre où va l'argent commun.",
      apport: "Savoir ce que je paie déjà, et ce qui m'attend avec mon premier salaire.",
      ou: "À chaque achat, avec mon premier salaire, comme citoyen.",
      lie: "Le module Impôts du Passeport EDUCFI ; ma fiche de paie (EDUCFI Première) ; mes droits et devoirs (Droits)."
    },
    accroche: "Tu crois que tu ne paies pas encore d'impôts ? Ton dernier paquet de chips dit le contraire.",
    activites: [{
      titre: "La TVA dans mon panier", moteur: "cartes",
      consigne: "La TVA est un impôt compris dans le prix de presque tout ce qu'on achète. Son taux dépend du produit. À quel taux correspond chaque achat ?",
      config: {
        fin: "Tout le monde paie la TVA, à chaque achat, quel que soit son âge. C'est la première ressource de l'État.",
        manches: [{
          type: "classer", titre: "Quel taux de TVA ?", categories: ["20 %", "10 %", "5,5 %", "2,1 %"],
          cartes: [
            { texte: "Un jeu vidéo", reponse: "20 %" },
            { texte: "Des écouteurs", reponse: "20 %" },
            { texte: "Un sweat", reponse: "20 %" },
            { texte: "Un sandwich préparé, à emporter", reponse: "10 %" },
            { texte: "Un repas au restaurant", reponse: "10 %" },
            { texte: "Une baguette de pain", reponse: "5,5 %" },
            { texte: "Une bouteille d'eau", reponse: "5,5 %" },
            { texte: "Un livre", reponse: "5,5 %" },
            { texte: "Un médicament remboursé par la Sécurité sociale", reponse: "2,1 %" }
          ],
          bilan: "20 % pour la plupart des produits ; des taux réduits pour l'alimentation, la restauration, les livres, les médicaments."
        }]
      }
    }, {
      titre: "Où va l'argent public ?", moteur: "quiz",
      consigne: "Les dépenses publiques financent tout ce qui est commun. Range ces postes du plus gros au plus petit.",
      config: { id: "educfi-2nde-7-depenses", questions: [
        { type: "ordre", enonce: "Du plus gros poste de dépense publique au plus petit",
          elements: ["Les retraites", "La santé", "L'éducation", "La défense", "La sécurité (police, gendarmerie)", "La justice"],
          explication: "Les retraites et la santé représentent à elles deux près de la moitié de la dépense publique. Vérifie les chiffres de l'année sur le site du ministère de l'Économie." }
      ] }
    }, {
      titre: "Impôt ou pas ?", moteur: "quiz",
      config: { id: "educfi-2nde-7-vf", questions: [
        { type: "vf", enonce: "L'allocation de PFMP n'est pas imposable.", bonne: true, explication: "Elle est exonérée d'impôt sur le revenu." },
        { type: "vf", enonce: "Le salaire d'un job d'été d'un lycéen de moins de 26 ans est exonéré d'impôt, dans une certaine limite.", bonne: true, explication: "Jusqu'à trois SMIC mensuels par an." },
        { type: "vf", enonce: "L'impôt sur le revenu est le même pourcentage pour tout le monde.", bonne: false, explication: "Il est progressif : plus on gagne, plus le taux est élevé. Beaucoup de personnes n'en paient pas." },
        { type: "vf", enonce: "L'impôt sur le revenu est prélevé directement sur le salaire.", bonne: true, explication: "C'est le prélèvement à la source, visible sur la fiche de paie." }
      ] }
    }, {
      titre: "Et sans impôts ?", moteur: "debat", facultatif: true,
      consigne: "Place-toi, écoute les arguments en classe, puis replace-toi. On débat du principe, pas d'une politique.",
      config: { affirmations: [
        { texte: "Je ne profite pas des impôts, je ne suis qu'un lycéen.", repere: "Le lycée, les professeurs, les routes, l'hôpital, les pompiers : ils sont financés par l'argent public." },
        { texte: "Sans impôts, tout serait moins cher.", repere: "Il faudrait payer soi-même l'école, les soins, la sécurité : beaucoup ne pourraient pas." },
        { texte: "Payer des impôts, c'est aussi avoir son mot à dire sur la façon dont l'argent est dépensé.", repere: "C'est le rôle des élus, votés par les citoyens, de décider du budget de l'État et des collectivités." }
      ] }
    }],
    retenir: [
      "Les impôts financent les services publics : école, santé, sécurité, routes, justice.",
      "Je paie déjà la TVA à chaque achat.",
      "L'allocation de PFMP n'est pas imposable.",
      "L'impôt sur le revenu est progressif et prélevé à la source."
    ],
    ressource: {
      titre: "Les principaux impôts",
      intro: "Qui paie, sur quoi, et à quoi ça sert.",
      blocs: [
        { type: "tableau", titre: "Les principaux impôts", colonnes: ["Impôt", "Qui paie", "Sur quoi"], lignes: [
          ["TVA", "Tout le monde", "Les achats"],
          ["Impôt sur le revenu", "Les personnes qui gagnent assez", "Les salaires et revenus"],
          ["Impôts locaux", "Propriétaires et certains occupants", "Les logements, pour la commune"]
        ] },
        { type: "tableau", titre: "Les taux de TVA", colonnes: ["Taux", "Exemples"], lignes: [
          ["20 %", "La plupart des produits : vêtements, électronique, jeux"],
          ["10 %", "Restauration, plats préparés"],
          ["5,5 %", "Alimentation de base, livres, eau"],
          ["2,1 %", "Médicaments remboursés, presse"]
        ] },
        { type: "liste", titre: "Pour un lycéen", items: ["L'allocation de PFMP n'est pas imposable", "Un job d'été avant 26 ans est exonéré dans une certaine limite", "À chaque achat, je paie la TVA"] }
      ]
    },
    traces: [{
      titre: "Ce que l'impôt finance autour de moi", moteur: "carnet", rendre: true,
      outil: { id: "impot-autour", nom: "Ce que l'impôt finance autour de moi", description: "Trois services publics que j'utilise." },
      config: {
        cle: "impot-autour", titreDoc: "Ce que l'impôt finance autour de moi",
        champs: [
          { id: "s1", label: "Un service public que j'utilise, et ce qu'il coûterait si je devais le payer seul" },
          { id: "s2", label: "Un deuxième" },
          { id: "s3", label: "Un troisième" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Quel impôt paie un lycéen à chaque achat ?", options: ["L'impôt sur le revenu", "La TVA", "La taxe foncière"], bonne: 1, explication: "Elle est comprise dans le prix." },
      { type: "vf", enonce: "L'allocation de PFMP se déclare aux impôts.", bonne: false, explication: "Elle n'est pas imposable." },
      { type: "ouverte", enonce: "Cite trois services financés par les impôts.", modele: "L'école, l'hôpital, la police, les pompiers, les routes, la justice…" }
    ],
    quizOfficiel: "Impôts",
    plusLoin: [
      MQD,
      { titre: "Le budget de la France, de quoi s'agit-il ?", source: "Ministère de l'Économie", url: "https://www.economie.gouv.fr/a-la-loupe-le-budget-de-la-France", description: "Recettes, dépenses : comprendre le budget de l'État." },
      { titre: "impots.gouv.fr", source: "Direction générale des finances publiques", url: "https://www.impots.gouv.fr", description: "Le site officiel des impôts." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Le paquet de chips et la TVA.", "Fait le lien avec les services publics vus en séance 6."],
        ["5-17 min", "Activité", "Classe les achats par taux de TVA.", "Montre une ligne de TVA sur un ticket fictif."],
        ["17-29 min", "Activité", "Range les postes de dépense publique.", "Montre les chiffres de l'année sur le site du ministère."],
        ["29-37 min", "Activité", "Répond au vrai ou faux « Impôt ou pas ? ».", "Explique le prélèvement à la source."],
        ["37-50 min", "Activité facultative", "Participe au débat « Et sans impôts ? ».", "Reste neutre : on débat du principe, pas d'une politique fiscale."],
        ["50-55 min", "Trace et quiz", "Remplit sa trace, répond à « Je vérifie ».", "Programme le quiz officiel du module Impôts."]
      ],
      vigilance: vigilance("Neutralité : on explique le rôle de l'impôt sans prendre parti sur une politique fiscale.")
    }
  });

  // ===================================================================
  // SÉANCE 8 · L'argent facile n'existe pas (module Arnaques) + bilan du passeport
  // ===================================================================
  S.push({
    id: "educfi-2nde-8", pilier: "educfi", niveau: "2nde", num: 8, duree: DUREE,
    titre: "L'argent facile n'existe pas",
    objectifCourt: "Module Arnaques, et mon passeport EDUCFI",
    objectif: "Repérer les arnaques financières qui visent les jeunes (faux placements, mules, faux sites, faux conseillers) et savoir réagir quand on s'est fait avoir. Puis faire le point sur son passeport EDUCFI.",
    rappel: { seance: "educfi-2nde-4", etiquette: "Revoir la séance 4", texte: "Tu as vu qu'un livret rapporte " + A("livretATaux") + " par an. Sur un réseau, quelqu'un promet de multiplier ton argent par dix en un mois. Qui ment ?" },
    aqcms: {
      pourquoi: "Les arnaqueurs ciblent les jeunes : réseaux sociaux, promesses de gains rapides, comptes bancaires « à louer ».",
      apport: "Garder mon argent, éviter les poursuites, et savoir qui appeler.",
      ou: "Sur les réseaux, par SMS, au téléphone, face à une offre d'argent facile.",
      lie: "Le module Arnaques du Passeport EDUCFI ; influenceurs et arnaques (Cyber Première, séances 1 et 3) ; protéger mes comptes (Cyber Seconde, séance 3)."
    },
    accroche: "Un influenceur pose devant une voiture de sport : « J'ai commencé avec 50 €. Rejoins mon groupe privé, places limitées. » Tu cliques ?",
    activites: [{
      titre: "Le détecteur d'arnaques", moteur: "cartes",
      consigne: "Ces messages sont inventés, mais ressemblent à ceux que reçoivent les jeunes. Arnaque ou message normal ?",
      config: {
        fin: "Urgence, peur, cadeau, autorité : quand un message joue là-dessus, je m'arrête. Je passe toujours par l'appli ou le site officiel que je connais.",
        manches: [{
          type: "classer", titre: "C'est…", categories: ["Arnaque", "Message normal"],
          cartes: [
            { texte: "« Votre colis est bloqué, payez 1,99 € de frais ici. »", reponse: "Arnaque" },
            { texte: "« Amende impayée : régularisez sous 24 h pour éviter une majoration. » avec un lien", reponse: "Arnaque" },
            { texte: "« Nouveau bénéficiaire ajouté sur votre compte. Si ce n'est pas vous, appelez ce numéro. »", reponse: "Arnaque", explication: "Le numéro mène à un faux conseiller. On appelle sa banque au numéro habituel." },
            { texte: "« Remboursement de votre mutuelle : confirmez vos coordonnées bancaires. »", reponse: "Arnaque" },
            { texte: "« Tu as gagné une console ! Paie juste les frais de port. »", reponse: "Arnaque" },
            { texte: "« Prête ton compte une journée, garde 200 €. »", reponse: "Arnaque", explication: "C'est faire la mule pour de l'argent sale." },
            { texte: "Ta banque t'informe dans son appli que ton relevé du mois est disponible.", reponse: "Message normal" },
            { texte: "Le lycée t'écrit sur l'ENT pour te rappeler de rendre ton RIB.", reponse: "Message normal" }
          ],
          bilan: "Je ne clique pas sur les liens : je passe par l'appli ou le site officiel."
        }]
      }
    }, {
      titre: "Le placement miracle", moteur: "scenario",
      config: { id: "educfi-2nde-8", cas: [{
        titre: "Le groupe privé", depart: "a",
        noeuds: {
          a: { contexte: "L'influenceur propose une « formation au trading » à 97 €, puis un groupe privé où il donne des « signaux » pour acheter des cryptomonnaies. « Ne rate pas le train. »", question: "Que fais-tu ?", choix: [
            { texte: "Je paie la formation, il a l'air de vraiment gagner beaucoup.", ok: false, retour: "Voitures et billets peuvent être loués ou faux. Souvent, l'argent vient… des formations vendues." },
            { texte: "Je me méfie : gros gains rapides et urgence, ce sont deux signaux d'arnaque.", vers: "b", ok: true, retour: "Bon réflexe." }
          ] },
          b: { contexte: "Un ami a déjà investi : « Regarde, mon compte affiche + 300 % ! Mais pour retirer, il faut payer des frais. »", question: "Qu'en penses-tu ?", choix: [
            { texte: "Il doit payer les frais pour récupérer ses gains.", ok: false, retour: "C'est la suite classique de l'arnaque : les gains affichés sont faux, et les « frais » sont une nouvelle perte." },
            { texte: "C'est une arnaque : il faut arrêter de payer et vérifier le site sur les listes noires de l'AMF.", vers: "fin", ok: true, retour: "Oui. L'Autorité des marchés financiers publie la liste des sites non autorisés." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Plus le rendement promis est élevé, plus le risque est grand. Je vérifie un placement sur les listes noires de l'AMF avant de donner un euro." } }
        }
      }] }
    }, {
      titre: "La mule, c'est toi qu'on poursuit", moteur: "quiz",
      config: { id: "educfi-2nde-8-mule", questions: [
        { type: "vf", enonce: "Prêter son compte une seule fois pour faire passer de l'argent, ce n'est pas grave.", bonne: false, explication: "C'est participer à du blanchiment, même une seule fois." },
        { type: "vf", enonce: "La banque peut fermer le compte d'une mule.", bonne: true, explication: "Et le titulaire peut avoir du mal à ouvrir un compte ailleurs." },
        { type: "vf", enonce: "Un mineur ne risque rien.", bonne: false, explication: "Un mineur peut aussi être poursuivi. S'il l'a déjà fait, il en parle vite à un adulte : il est souvent lui-même victime." }
      ] }
    }, {
      titre: "Je me suis fait avoir", moteur: "quiz",
      config: { id: "educfi-2nde-8-victime", questions: [
        { type: "ordre", enonce: "Remets les gestes dans l'ordre.",
          elements: ["J'appelle ma banque (opposition, contestation)", "Je garde les preuves (captures, messages)", "Je porte plainte", "Je signale (17Cyber, Perceval pour une carte bancaire)", "J'en parle à un adulte"],
          explication: "Et je me méfie de la seconde arnaque : un « service » qui promet de récupérer mon argent contre paiement." }
      ] }
    }, {
      titre: "Mon passeport EDUCFI", moteur: "choisir", facultatif: true,
      consigne: "Coche les modules dont tu as validé le quiz officiel. Ton choix reste sur ton appareil.",
      config: {
        cle: "passeport-educfi", max: 8, min: 0, titre: "Modules validés", resume: "Mes modules validés",
        cartes: [
          { nom: "Budget", ex: "Séance 1" }, { nom: "Compte bancaire", ex: "Séance 2" },
          { nom: "Moyens de paiement", ex: "Séance 3" }, { nom: "Épargne", ex: "Séance 4" },
          { nom: "Crédit", ex: "Séance 5" }, { nom: "Assurances", ex: "Séance 6" },
          { nom: "Impôts", ex: "Séance 7" }, { nom: "Arnaques", ex: "Séance 8" }
        ]
      }
    }],
    retenir: [
      "Gros gain rapide et sans risque : c'est une arnaque.",
      "Je ne prête jamais mon compte, ma carte ou mon RIB pour faire passer de l'argent.",
      "Je vérifie un placement sur les listes noires de l'AMF avant d'investir.",
      "Si je me suis fait avoir : banque, preuves, plainte, et je ne paie personne pour « récupérer » mon argent."
    ],
    ressource: {
      titre: "Les arnaques financières chez les jeunes",
      intro: "Les reconnaître, et savoir qui contacter.",
      blocs: [
        { type: "tableau", titre: "Les arnaques les plus fréquentes", colonnes: ["Arnaque", "Le signal"], lignes: [
          ["Faux placement, faux trading", "Gros gains rapides, urgence, groupe privé"],
          ["Mule financière", "« Prête ton compte, garde une part »"],
          ["Faux conseiller bancaire", "Il demande de valider une opération ou un code"],
          ["Faux site de vente", "Prix trop beau, pas de mentions légales"],
          ["Faux SMS (colis, amende)", "Un lien et une petite somme à payer"]
        ] },
        { type: "tableau", titre: "Qui contacter", colonnes: ["Situation", "Qui"], lignes: [
          ["J'ai donné ma carte ou validé un paiement", "Ma banque, tout de suite"],
          ["Achat frauduleux avec ma carte", "Perceval (service en ligne du ministère de l'Intérieur)"],
          ["Arnaque en ligne", "17Cyber, Cybermalveillance.gouv.fr"],
          ["Placement douteux", "Les listes noires de l'AMF"],
          ["SMS suspect", "33700"]
        ] }
      ]
    },
    traces: [{
      titre: "Mon détecteur d'arnaques", moteur: "carnet", rendre: true,
      outil: { id: "detecteur-arnaques", nom: "Mon détecteur d'arnaques", description: "Les cinq signaux qui me font m'arrêter, et qui j'appelle." },
      config: {
        cle: "detecteur-arnaques", titreDoc: "Mon détecteur d'arnaques",
        champs: [
          { id: "signaux", label: "Les cinq signaux qui me font m'arrêter", multi: true },
          { id: "appel", label: "Qui j'appelle si je me suis fait avoir", multi: true }
        ]
      }
    }, {
      titre: "Mon bilan EDUCFI de Seconde", moteur: "jauges",
      config: {
        id: "bilan-educfi-2nde", cle: "bilan-educfi-2nde", bornes: ["Je débute", "Je maîtrise"],
        consigne: "Pour chaque module, où en es-tu ? Tes réponses restent sur ton appareil.",
        items: ["Tenir un budget", "Utiliser mon compte", "Payer en sécurité", "Épargner", "Comprendre un crédit", "M'assurer", "Comprendre l'impôt", "Déjouer les arnaques"],
        note: "Une fois les huit quiz officiels validés, le chef d'établissement te délivre le Passeport EDUCFI."
      }
    }],
    verifie: [
      { type: "vf", enonce: "Un placement qui promet 20 % par mois sans risque peut être sérieux.", bonne: false, explication: "Impossible : c'est une arnaque." },
      { type: "qcm", enonce: "Où vérifier qu'un site de placement est autorisé ?", options: ["Sur ses propres avis", "Sur les listes noires de l'AMF", "Dans les commentaires d'un réseau social"], bonne: 1, explication: "L'Autorité des marchés financiers publie les sites non autorisés." },
      { type: "ouverte", enonce: "Que risque une mule financière ?", modele: "La fermeture de son compte, des difficultés à en ouvrir un autre, et des poursuites pour blanchiment, même mineure." }
    ],
    quizOfficiel: "Arnaques",
    plusLoin: [
      { titre: "Les mises en garde et listes noires de l'AMF", source: "Autorité des marchés financiers", url: "https://www.amf-france.org/fr/actualites-publications/actualites/protection-des-epargnants-lamf-facilite-la-consultation-des-mises-en-garde-et-listes-noires-par-les", description: "Vérifier un site de placement avant d'investir." },
      { titre: "17Cyber", source: "Ministère de l'Intérieur et Cybermalveillance.gouv.fr", url: "https://www.17cyber.gouv.fr", description: "L'aide en ligne pour les victimes d'arnaques." },
      { titre: "Fraude au faux conseiller bancaire : la fiche réflexe", source: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/medias/2023/01/240208_FicheReflexe_FraudeFauxConseillerBancaire.pdf", description: "Reconnaître l'arnaque et réagir." }
    ],
    passerelles: ["cyber-1re-3", "cyber-1re-1"],
    adulte: {
      deroule: [
        ["0-4 min", "Accroche", "L'influenceur et son groupe privé.", "Fait le lien avec le taux du Livret A."],
        ["4-12 min", "Activité", "Classe les messages : arnaque ou normal.", "Fait nommer les leviers : urgence, peur, cadeau, autorité."],
        ["12-27 min", "Activité", "Suit le scénario du placement miracle.", "Montre les listes noires de l'AMF."],
        ["27-35 min", "Activité", "Répond au vrai ou faux sur la mule.", "Reste sans jugement : la mule est souvent victime."],
        ["35-44 min", "Activité", "Remet dans l'ordre les gestes de la victime.", "Présente 17Cyber et Perceval."],
        ["44-49 min", "Bilan", "Coche ses modules validés et se positionne sur chacun.", "Fait le point sur les quiz officiels restants."],
        ["49-55 min", "Trace et quiz", "Remplit « Mon détecteur d'arnaques », répond à « Je vérifie ».", "Programme le quiz officiel du module Arnaques ; saisie du passeport dans SIECLE à partir du 1er janvier."]
      ],
      vigilance: vigilance("Un élève qui dit avoir prêté son compte ou perdu de l'argent est orienté vers un adulte (CPE, assistante sociale) sans être exposé devant la classe.")
    }
  });
})();
