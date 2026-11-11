/*
 * PILIER EDUCFI « BUDGET EXPRESS » · TERMINALE (« Moi et le monde » → « M'installer »)
 * Contenu validé (document « Pilier EDUCFI – Terminale »).
 * Quatre séances d'approfondissement de 55 minutes ; la séance 4 se termine par le bilan des trois ans.
 * Les ressources locales (mission locale, CAF, Point conseil budget…) se renseignent dans js/config.js.
 * Les chiffres qui changent viennent de data/actualites.js.
 * Ressources vérifiées le 11 novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var A = window.CAP_ACTU.texte;
  var DUREE = "55 min";
  var MQD = { titre: "Mes questions d'argent", source: "Banque de France", url: "https://www.mesquestionsdargent.fr", description: "Le portail public d'éducation financière : fiches, vidéos et quiz." };
  var VIG = "On ne demande jamais à un élève sa situation financière ni celle de sa famille : Inès, Yanis et Sami sont inventés. ";

  // ===================================================================
  // SÉANCE 1 · Mon premier logement
  // ===================================================================
  S.push({
    id: "educfi-tle-1", pilier: "educfi", niveau: "tle", num: 1, duree: DUREE,
    titre: "Mon premier logement",
    objectifCourt: "Louer sans se faire avoir",
    objectif: "Savoir ce que coûte réellement un logement à l'entrée et chaque mois, constituer un dossier de location, trouver un garant et éviter les arnaques à la location.",
    rappel: { seance: "educfi-2nde-1", etiquette: "Revoir EDUCFI Seconde, séance 1", texte: "En Seconde, tu as appris à faire un budget. Avec un logement, il y a une dépense fixe énorme, et beaucoup d'argent à avancer avant même d'y dormir." },
    aqcms: {
      pourquoi: "Un premier logement coûte cher dès la signature, et les arnaques à la location visent les jeunes.",
      apport: "Arriver prêt : avec la bonne somme, le bon dossier, un garant, et sans me faire piéger.",
      ou: "Pour une alternance loin de chez moi, des études, un premier emploi.",
      lie: "Le budget et l'assurance (EDUCFI Seconde) ; les arnaques (Cyber Première, séance 3) ; le bail (Droits)."
    },
    accroche: "Tu as trouvé une alternance à 80 km. Il te faut un studio à partir du mois prochain. Combien d'argent dois-tu avoir le jour où tu signes ?",
    activites: [{
      titre: "Le jour de la signature", moteur: "budget",
      consigne: "Un studio meublé à 450 € charges comprises. Additionne tout ce qu'il faut avancer à l'entrée. Rappel : l'aide au logement n'est pas versée pour le mois d'entrée.",
      config: {
        id: "educfi-tle-1", qui: "l'exemple",
        ressources: [{ id: "epargne", label: "Ce que j'ai mis de côté", montant: 1200 }],
        depenses: [
          { id: "loyer", label: "Premier loyer (charges comprises)", montant: 450, type: "fixe" },
          { id: "depot", label: "Dépôt de garantie (2 mois hors charges en meublé)", montant: 800, type: "fixe", aide: "au plus 1 mois en location vide" },
          { id: "agence", label: "Frais d'agence (plafonnés)", montant: 200, type: "fixe" },
          { id: "assurance", label: "Assurance habitation (premier mois)", montant: 10, type: "fixe" },
          { id: "energie", label: "Ouverture de l'électricité, premier mois", montant: 40, type: "variable" },
          { id: "installation", label: "Vaisselle, draps, petits achats", montant: 100, type: "variable" }
        ],
        conseil: "Il manque de l'argent : épargner avant, demander une avance ou une aide au départ (Action Logement, mission locale), ou chercher sans frais d'agence."
      }
    }, {
      titre: "Mon dossier de location", moteur: "cartes",
      consigne: "Un propriétaire peut demander certains documents, et la loi lui en interdit d'autres. Range chaque demande.",
      config: {
        fin: "Pas de garant ? La garantie Visale d'Action Logement est gratuite et ouverte aux " + A("visaleAge") + " sans condition de ressources.",
        manches: [{
          type: "classer", titre: "Le propriétaire peut le demander ?", categories: ["Oui", "Non, c'est interdit"],
          cartes: [
            { texte: "Une pièce d'identité", reponse: "Oui" },
            { texte: "Un contrat de travail ou d'apprentissage, des fiches de paie", reponse: "Oui" },
            { texte: "Un garant ou une garantie Visale", reponse: "Oui" },
            { texte: "Tes relevés de compte bancaire", reponse: "Non, c'est interdit" },
            { texte: "Ta carte Vitale", reponse: "Non, c'est interdit" },
            { texte: "Une photo de toi (hors pièce d'identité)", reponse: "Non, c'est interdit" },
            { texte: "Un chèque pour « réserver » le logement", reponse: "Non, c'est interdit" }
          ],
          bilan: "Je fournis seulement ce que la loi autorise, et j'ajoute un filigrane sur mes copies."
        }]
      }
    }, {
      titre: "L'annonce trop belle", moteur: "scenario",
      config: { id: "educfi-tle-1-annonce", cas: [{
        titre: "Le T2 à moitié prix", depart: "a",
        noeuds: {
          a: { contexte: "Un T2 en centre-ville à moitié prix. Le propriétaire est « à l'étranger » : il demande un virement de 500 € pour « réserver », avant toute visite, et promet d'envoyer les clés par la poste.", question: "Que fais-tu ?", choix: [
            { texte: "Je paie vite, sinon quelqu'un d'autre le prendra.", ok: false, retour: "Urgence, prix trop bas, propriétaire absent : c'est l'arnaque à la location classique." },
            { texte: "Je refuse : je ne paie jamais avant d'avoir visité et signé le bail.", vers: "b", ok: true, retour: "Exactement." }
          ] },
          b: { contexte: "Il insiste et demande au moins une copie de ta pièce d'identité « pour le dossier ».", question: "Que fais-tu ?", choix: [
            { texte: "Je l'envoie, ce n'est qu'une copie.", ok: false, retour: "Une copie sans filigrane peut servir à usurper ton identité." },
            { texte: "Je n'envoie rien à quelqu'un que je n'ai pas rencontré, et j'ajoute toujours un filigrane sur mes copies.", vers: "fin", ok: true, retour: "Oui : le filigrane indique à qui et pourquoi la copie est envoyée." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Je ne paie jamais avant d'avoir visité et signé. Je n'envoie mes papiers qu'avec un filigrane, et seulement à quelqu'un que j'ai identifié." } }
        }
      }] }
    }, {
      titre: "L'état des lieux", moteur: "quiz", facultatif: true,
      config: { id: "educfi-tle-1-etat", questions: [
        { type: "vf", enonce: "L'état des lieux se fait à l'entrée et à la sortie du logement.", bonne: true, explication: "On compare les deux : c'est ce qui décide du dépôt de garantie." },
        { type: "vf", enonce: "Je note tout, même une petite tache, et je prends des photos datées.", bonne: true, explication: "Sinon, on pourrait te la reprocher en partant." },
        { type: "vf", enonce: "Le dépôt de garantie est rendu dans un délai d'un mois si l'état des lieux de sortie est conforme.", bonne: true, explication: "Deux mois s'il y a des différences." },
        { type: "vf", enonce: "L'assurance habitation est facultative pour un locataire.", bonne: false, explication: "Elle est obligatoire pour un logement loué vide, et presque toujours demandée en meublé." }
      ] }
    }],
    retenir: [
      "Pour entrer dans un logement, il faut avancer bien plus qu'un mois de loyer.",
      "Visale peut servir de garant, gratuitement, entre 18 et 30 ans.",
      "Je ne paie jamais avant d'avoir visité et signé.",
      "État des lieux précis et photos datées : c'est mon dépôt de garantie qui est en jeu."
    ],
    ressource: {
      titre: "Louer mon premier logement",
      intro: "La check-list : coûts, dossier, pièges, état des lieux.",
      blocs: [
        { type: "tableau", titre: "Ce qu'il faut avancer", colonnes: ["Poste", "Repère"], lignes: [
          ["Premier loyer", "Payé en entrant ; l'aide au logement n'est pas versée le premier mois"],
          ["Dépôt de garantie", "Au plus 1 mois hors charges (vide), 2 mois (meublé)"],
          ["Frais d'agence", "Plafonnés par la loi"],
          ["Assurance habitation", "Obligatoire en location vide"],
          ["Installation", "Énergie, petits équipements"]
        ] },
        { type: "liste", titre: "Interdit dans un dossier de location", items: ["Relevés de compte bancaire", "Carte Vitale", "Photo (hors pièce d'identité)", "Chèque de réservation"] },
        { type: "liste", titre: "Les pièges", items: ["Prix trop bas", "Propriétaire « à l'étranger »", "Paiement avant visite", "Demande de copies sans filigrane"] }
      ]
    },
    traces: [{
      titre: "Mon budget d'entrée dans un logement", moteur: "carnet",
      outil: { id: "budget-entree-logement", nom: "Mon budget d'entrée dans un logement", description: "La somme à avancer, ce que je mets de côté, mon garant." },
      config: {
        cle: "budget-entree-logement", titreDoc: "Mon budget d'entrée dans un logement",
        intro: "Pour toi seul.",
        champs: [
          { id: "somme", label: "La somme à avancer pour le logement que je vise" },
          { id: "epargne", label: "Ce que je mets de côté dès maintenant, chaque mois" },
          { id: "garant", label: "Mon garant (un proche, Visale…)" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Le dépôt de garantie d'un logement vide est au plus de…", options: ["1 mois de loyer hors charges", "2 mois", "3 mois"], bonne: 0, explication: "2 mois pour un meublé." },
      { type: "vf", enonce: "Un propriétaire peut exiger tes relevés de compte.", bonne: false, explication: "C'est interdit." },
      { type: "qcm", enonce: "La garantie Visale est…", options: ["Payante", "Gratuite, pour les 18-30 ans notamment", "Réservée aux étudiants"], bonne: 1, explication: "Elle est financée par Action Logement." },
      { type: "ouverte", enonce: "Cite deux signaux d'une arnaque à la location.", modele: "Prix trop bas, propriétaire absent, paiement demandé avant la visite, demande de copies de papiers sans filigrane." }
    ],
    plusLoin: [
      { titre: "La garantie Visale", source: "Action Logement", url: "https://www.actionlogement.fr/la-garantie-visale", description: "Un garant gratuit pour louer." },
      { titre: "Dépôt de garantie dans un bail d'habitation", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269", description: "Montant, restitution, retenues." },
      MQD
    ],
    passerelles: ["cyber-1re-3"],
    ressourcesLocales: ["adil", "mission-locale"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "L'alternance à 80 km et le studio.", "Fait estimer la somme à avancer."],
        ["5-17 min", "Activité", "Additionne le coût d'entrée avec le simulateur.", "Donne les repères du dépôt de garantie."],
        ["17-27 min", "Activité", "Trie les documents du dossier de location.", "Présente Visale."],
        ["27-40 min", "Activité", "Suit le scénario de l'annonce trop belle.", "Présente le filigrane des copies."],
        ["40-49 min", "Activité facultative", "Répond au vrai ou faux sur l'état des lieux.", "Insiste sur les photos datées."],
        ["49-55 min", "Trace", "Remplit son budget d'entrée, répond à « Je vérifie ».", "Indique l'ADIL du département pour les questions de logement."]
      ],
      vigilance: VIG + "Certains élèves vivent déjà seuls ou en foyer : la séance peut leur être utile tout de suite, on propose un échange en dehors de la classe."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Les aides auxquelles j'ai droit
  // ===================================================================
  S.push({
    id: "educfi-tle-2", pilier: "educfi", niveau: "tle", num: 2, duree: DUREE,
    titre: "Les aides auxquelles j'ai droit",
    objectifCourt: "Ne pas passer à côté de ses droits",
    objectif: "Connaître les principales aides pour les jeunes (logement, travail, insertion, études), savoir où les demander et ne pas passer à côté de ses droits.",
    rappel: { seance: "educfi-tle-1", texte: "Ton studio te coûte plus que prévu. Pourtant, chaque année, beaucoup de jeunes ne demandent pas des aides auxquelles ils ont droit. Par peur, par honte, ou parce qu'ils ne savent pas qu'elles existent." },
    aqcms: {
      pourquoi: "Des aides existent pour le logement, le travail, la formation. Encore faut-il les connaître et les demander.",
      apport: "Payer moins cher mon logement, être accompagné, ne pas rester seul face aux démarches.",
      ou: "À 18 ans, en alternance, en BTS, en recherche d'emploi.",
      lie: "Ma fiche de paie (EDUCFI Première) ; mes candidatures (Orientation Terminale, séance 2)."
    },
    accroche: "« Les aides, c'est pour les autres. » Tu es d'accord ?",
    activites: [{
      titre: "Qui a droit à quoi ?", moteur: "cartes",
      consigne: "Trois jeunes inventés. Inès, 19 ans, en BTS par apprentissage, loue un studio. Yanis, 20 ans, en CDD au SMIC, vit chez ses parents. Sami, 18 ans, sans emploi ni formation. À qui chaque aide peut-elle surtout servir ?",
      config: {
        fin: "Ce sont des pistes : les conditions exactes se vérifient sur les simulateurs officiels.",
        manches: [{
          type: "classer", titre: "Cette aide peut servir à…", categories: ["Inès", "Yanis", "Sami"],
          cartes: [
            { texte: "L'aide au logement de la CAF, pour un locataire", reponse: "Inès" },
            { texte: "L'aide Mobili-Jeune d'Action Logement, pour un alternant qui loue", reponse: "Inès" },
            { texte: "La prime d'activité, dès 18 ans, quand on gagne au moins " + A("primeActiviteSeuil"), reponse: "Yanis", explication: "Inès aussi, si son salaire d'apprentie dépasse ce seuil." },
            { texte: "Le contrat d'engagement jeune : un accompagnement et une allocation jusqu'à " + A("cejMax"), reponse: "Sami", explication: "Pour les 16-25 ans sans emploi ni formation, à la mission locale ou France Travail." },
            { texte: "L'accompagnement de la mission locale vers l'emploi ou la formation", reponse: "Sami" },
            { texte: "La garantie Visale pour un futur logement", reponse: "Yanis", explication: "Tous les trois peuvent en bénéficier : elle est ouverte aux " + A("visaleAge") + "." }
          ],
          bilan: "Je simule avant de dire « je n'y ai pas droit »."
        }]
      }
    }, {
      titre: "Les bons guichets", moteur: "cartes",
      config: {
        fin: "Deux simulateurs officiels regroupent les aides : mesdroitssociaux.gouv.fr et 1jeune1solution.gouv.fr.",
        manches: [{
          type: "classer", titre: "Pour ça, je vais voir…", categories: ["La CAF", "La mission locale", "France Travail", "Le CROUS", "L'assistante sociale"],
          cartes: [
            { texte: "Demander l'aide au logement", reponse: "La CAF" },
            { texte: "Demander la prime d'activité", reponse: "La CAF" },
            { texte: "Être accompagné vers un emploi entre 16 et 25 ans", reponse: "La mission locale" },
            { texte: "M'inscrire comme demandeur d'emploi", reponse: "France Travail" },
            { texte: "Demander une bourse pour un BTS en voie scolaire", reponse: "Le CROUS" },
            { texte: "Être aidé pour toutes mes démarches quand je suis perdu", reponse: "L'assistante sociale" }
          ],
          bilan: "Chaque guichet a son rôle ; la mission locale et l'assistante sociale aident à s'y retrouver."
        }]
      }
    }, {
      titre: "Ma première demande", moteur: "quiz",
      config: { id: "educfi-tle-2-demande", questions: [
        { type: "ordre", enonce: "Remets les étapes dans l'ordre.",
          elements: ["Je simule mes droits sur un simulateur officiel", "Je crée mon compte sur le site de l'organisme", "Je rassemble les pièces demandées", "Je fais ma demande et je déclare mes ressources à temps", "Je signale tout changement de situation"],
          explication: "Une déclaration fausse ou oubliée oblige à rembourser : je déclare juste, et à temps." },
        { type: "vf", enonce: "L'aide au logement est versée dès le mois d'entrée dans le logement.", bonne: false, explication: "Elle n'est pas versée pour le mois d'entrée : il faut prévoir ce premier mois." }
      ] }
    }, {
      titre: "Pourquoi on n'ose pas demander ?", moteur: "debat", facultatif: true,
      config: { affirmations: [
        { texte: "Demander une aide, c'est la honte.", repere: "Une aide est un droit prévu par la loi, financé par tous, pour tous ceux qui remplissent les conditions." },
        { texte: "C'est trop compliqué, je laisse tomber.", repere: "La mission locale, l'assistante sociale ou un Point conseil budget peuvent aider gratuitement à faire les démarches." },
        { texte: "Si je ne déclare pas tout, je toucherai plus.", repere: "Une fausse déclaration oblige à rembourser, et peut être sanctionnée." }
      ] }
    }],
    retenir: [
      "Une aide est un droit : je simule avant de dire « je n'y ai pas droit ».",
      "Dès 18 ans, un salaire ou un contrat d'apprentissage peut ouvrir droit à la prime d'activité.",
      "La mission locale accompagne les 16-25 ans, pour l'emploi comme pour le logement.",
      "Je déclare des ressources justes et je signale les changements."
    ],
    ressource: {
      titre: "Les aides pour les jeunes",
      intro: "Qui, quoi, où.",
      blocs: [
        { type: "tableau", titre: "Les principales aides", colonnes: ["Aide", "Pour qui", "Où"], lignes: [
          ["Aide au logement", "Les locataires, même jeunes", "CAF"],
          ["Prime d'activité", "Dès 18 ans, à partir de " + A("primeActiviteSeuil"), "CAF"],
          ["Contrat d'engagement jeune", "16-25 ans sans emploi ni formation", "Mission locale, France Travail"],
          ["Mobili-Jeune", "Alternants qui louent", "Action Logement"],
          ["Garantie Visale", A("visaleAge"), "Action Logement"],
          ["Bourse sur critères sociaux", "Étudiants, dont BTS en voie scolaire", "CROUS"]
        ] },
        { type: "liste", titre: "Les simulateurs officiels", items: ["mesdroitssociaux.gouv.fr", "1jeune1solution.gouv.fr", "caf.fr (aide au logement)"] }
      ]
    },
    traces: [{
      titre: "Mes droits à vérifier", moteur: "carnet",
      outil: { id: "droits-a-verifier", nom: "Mes droits à vérifier", description: "Les aides qui pourraient me concerner, le guichet, les papiers." },
      config: {
        cle: "droits-a-verifier", titreDoc: "Mes droits à vérifier",
        intro: "Pour toi seul.",
        champs: [
          { id: "aides", label: "Les aides qui pourraient me concerner l'an prochain", multi: true },
          { id: "guichet", label: "Le guichet à contacter" },
          { id: "papiers", label: "Les papiers à préparer", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "À partir de quel âge peut-on demander la prime d'activité ?", options: ["16 ans", "18 ans", "25 ans"], bonne: 1, explication: "Dès 18 ans, avec un salaire suffisant." },
      { type: "qcm", enonce: "Qui accompagne les 16-25 ans vers l'emploi et le logement ?", options: ["La mission locale", "La Banque de France", "Le CROUS"], bonne: 0, explication: "Elle propose aussi le contrat d'engagement jeune." },
      { type: "vf", enonce: "Une aide non demandée est versée automatiquement.", bonne: false, explication: "La plupart des aides doivent être demandées." },
      { type: "ouverte", enonce: "Où vérifier les aides auxquelles tu as droit ?", modele: "Sur mesdroitssociaux.gouv.fr ou 1jeune1solution.gouv.fr, ou auprès de la mission locale, de la CAF, de l'assistante sociale." }
    ],
    plusLoin: [
      { titre: "Mes droits sociaux", source: "Sécurité sociale", url: "https://www.mesdroitssociaux.gouv.fr", description: "Le simulateur officiel de vos droits aux aides." },
      { titre: "1 jeune 1 solution", source: "Gouvernement", url: "https://www.1jeune1solution.gouv.fr", description: "Emploi, formation, aides : le site des 15-30 ans." },
      { titre: "L'allocation du contrat d'engagement jeune", source: "France Travail", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/aides-financieres-et-autres-allo/autres-allocations/lallocation-cej--les-reponses-a.html", description: "Montant, conditions, démarches." }
    ],
    passerelles: ["orientation-tle-2"],
    ressourcesLocales: ["mission-locale", "caf", "france-travail", "social", "pcb"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "« Les aides, c'est pour les autres. »", "Nomme le non-recours aux droits."],
        ["5-20 min", "Activité", "Attribue les aides à Inès, Yanis et Sami.", "Rappelle qu'on vérifie toujours sur les simulateurs officiels."],
        ["20-30 min", "Activité", "Relie chaque démarche au bon guichet.", "Montre les ressources locales affichées dans l'appli."],
        ["30-40 min", "Activité", "Remet dans l'ordre les étapes d'une demande.", "Insiste sur la déclaration juste et à temps."],
        ["40-50 min", "Activité facultative", "Participe au débat « Pourquoi on n'ose pas demander ? ».", "Reste sans jugement."],
        ["50-55 min", "Trace", "Remplit « Mes droits à vérifier », répond à « Je vérifie ».", "Propose un rendez-vous avec l'assistante sociale à qui le souhaite."]
      ],
      vigilance: VIG + "On explique les règles générales et on renvoie aux simulateurs officiels : on ne calcule pas les droits réels d'un élève devant la classe."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Mon premier budget seul
  // ===================================================================
  S.push({
    id: "educfi-tle-3", pilier: "educfi", niveau: "tle", num: 3, duree: DUREE,
    titre: "Mon premier budget seul",
    objectifCourt: "Le mois d'un jeune actif",
    objectif: "Construire le budget d'un jeune actif autonome, savoir ce qui reste pour vivre, faire face à un imprévu et savoir vers qui se tourner en cas de difficulté.",
    rappel: { seance: "educfi-2nde-1", etiquette: "Revoir EDUCFI Seconde, séance 1", texte: "En Seconde, Maël gérait 170 € par mois. Trois ans plus tard, Yanis touche " + A("smicNet") + " net, le SMIC à temps plein. Il se sent riche. Il le sera encore le 25 du mois ?" },
    aqcms: {
      pourquoi: "Avec un premier salaire et un logement, les dépenses changent d'échelle, et les erreurs coûtent plus cher.",
      apport: "Savoir ce qui me reste vraiment pour vivre, et réagir avant que les difficultés s'installent.",
      ou: "Dès mon premier emploi ou ma première année d'alternance.",
      lie: "Le budget et le crédit (EDUCFI Seconde) ; agir de manière responsable (CPS Terminale, séance 2) ; maîtriser sa consommation d'énergie (E3D)."
    },
    accroche: "Le 1er du mois, Yanis voit " + A("smicNet") + " arriver sur son compte. Le 25, il lui reste 40 €. Que s'est-il passé ?",
    activites: [{
      titre: "Le mois de Yanis", moteur: "budget",
      consigne: "Voici le mois de Yanis, qui vient de prendre un studio. Calcule son reste à vivre. Puis déclenche l'imprévu. Tu peux aussi essayer avec le budget que tu prévois après le bac : il reste sur ton appareil.",
      config: {
        id: "educfi-tle-3", cle: "educfi-budget-actif", qui: "Yanis",
        ressources: [
          { id: "salaire", label: "Salaire net", montant: parseFloat(A("smicNetNombre")) || 1478, aide: "SMIC à temps plein" },
          { id: "apl", label: "Aide au logement", montant: 120 }
        ],
        depenses: [
          { id: "loyer", label: "Loyer et charges", montant: 560, type: "fixe" },
          { id: "energie", label: "Électricité", montant: 50, type: "fixe" },
          { id: "box", label: "Internet et téléphone", montant: 35, type: "fixe" },
          { id: "assurance", label: "Assurance habitation", montant: 12, type: "fixe" },
          { id: "transport", label: "Abonnement de transport (la moitié remboursée par l'employeur)", montant: 30, type: "fixe" },
          { id: "mutuelle", label: "Mutuelle d'entreprise (part salarié)", montant: 25, type: "fixe" },
          { id: "courses", label: "Courses", montant: 280, type: "variable" },
          { id: "loisirs", label: "Sorties et loisirs", montant: 150, type: "variable" },
          { id: "vetements", label: "Vêtements, coiffeur, divers", montant: 80, type: "variable" },
          { id: "epargne", label: "Épargne de précaution", montant: 50, type: "variable" }
        ],
        imprevu: { label: "Régularisation de charges", montant: 180 },
        conseil: "Budget dans le rouge : je réduis les loisirs, j'utilise mon épargne de précaution, et j'appelle le bailleur pour étaler si besoin."
      }
    }, {
      titre: "Mes priorités", moteur: "quiz",
      config: { id: "educfi-tle-3-priorites", questions: [
        { type: "ordre", enonce: "Quand l'argent manque, que paie-t-on d'abord ? Range du plus prioritaire au moins prioritaire.",
          elements: ["Le loyer", "L'électricité et le chauffage", "L'assurance habitation", "La nourriture", "Le transport pour aller travailler", "Les abonnements et les loisirs"],
          explication: "Un loyer impayé coûte bien plus cher qu'un abonnement suspendu : il peut mener à perdre son logement." }
      ] }
    }, {
      titre: "L'imprévu", moteur: "scenario",
      config: { id: "educfi-tle-3", cas: [{
        titre: "Le mois difficile", depart: "a",
        noeuds: {
          a: { contexte: "Une régularisation de charges de 180 € tombe le même mois qu'une panne de vélo électrique. Une publicité propose un mini-crédit « accordé en 3 minutes ».", question: "Que fait Yanis ?", choix: [
            { texte: "Il prend le mini-crédit, c'est rapide.", ok: false, retour: "Ces crédits sont chers et rapides : c'est souvent le début d'un engrenage." },
            { texte: "Il utilise son épargne de précaution et appelle son bailleur pour étaler la régularisation.", vers: "b", ok: true, retour: "Oui : appeler tôt le créancier ouvre presque toujours des solutions." }
          ] },
          b: { contexte: "Trois mois plus tard, Yanis a perdu son CDD. Il n'arrive plus à tout payer.", question: "Vers qui peut-il se tourner ?", choix: [
            { texte: "Personne, il doit se débrouiller seul.", ok: false, retour: "Des aides gratuites existent." },
            { texte: "Un Point conseil budget (gratuit), l'assistante sociale, la mission locale ; et la Banque de France s'il ne peut plus rembourser ses dettes.", vers: "fin", ok: true, retour: "Oui. Plus on demande de l'aide tôt, plus les solutions sont simples." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "En cas de difficulté, j'appelle tout de suite le créancier, je ne laisse pas traîner, et je demande de l'aide : les Points conseil budget sont gratuits." } }
        }
      }] }
    }, {
      titre: "Mes outils pour tenir", moteur: "choisir", facultatif: true,
      consigne: "Choisis deux outils que tu utiliseras pour ton premier budget seul.",
      config: {
        cle: "educfi-outils-budget", max: 2, min: 1, titre: "Outils", resume: "Mes outils pour tenir",
        cartes: [
          { nom: "Une alerte de solde", ex: "Dans l'appli de ma banque, quand je passe sous un montant" },
          { nom: "Un virement automatique vers l'épargne", ex: "Le jour de la paie" },
          { nom: "Une enveloppe par poste", ex: "Courses, loisirs, transport" },
          { nom: "Un point budget chaque dimanche", ex: "Dix minutes pour regarder mes comptes" },
          { nom: "Une liste de courses", ex: "Et je m'y tiens" }
        ]
      }
    }],
    retenir: [
      "Le reste à vivre, c'est ce qui reste après les dépenses obligatoires : c'est lui qui compte.",
      "Je paie d'abord le logement, l'énergie et l'assurance.",
      "En cas de difficulté, j'appelle tout de suite le créancier, je ne laisse pas traîner.",
      "Les Points conseil budget aident gratuitement."
    ],
    ressource: {
      titre: "Mon budget de jeune actif",
      intro: "Le tableau à remplir et qui peut m'aider.",
      blocs: [
        { type: "tableau", titre: "Mon budget de jeune actif", colonnes: ["", "Par mois"], lignes: [
          ["Salaire net", ""], ["Aides", ""], ["Loyer et charges", ""], ["Énergie", ""], ["Internet et téléphone", ""], ["Assurance", ""], ["Transport", ""], ["Reste à vivre", ""], ["Courses, loisirs, divers", ""], ["Épargne", ""]
        ] },
        { type: "liste", titre: "Difficultés d'argent : qui peut m'aider", items: ["Le créancier (bailleur, fournisseur), à appeler tout de suite", "Un Point conseil budget : gratuit", "L'assistante sociale", "La mission locale (16-25 ans)", "La Banque de France, en cas de surendettement"] }
      ]
    },
    traces: [{
      titre: "Mon budget de jeune actif", moteur: "carnet",
      outil: { id: "budget-jeune-actif", nom: "Mon budget de jeune actif", description: "Mes ressources après le bac, mes dépenses incompressibles, mon reste à vivre." },
      config: {
        cle: "budget-jeune-actif", titreDoc: "Mon budget de jeune actif",
        intro: "Pour toi seul.",
        champs: [
          { id: "ressources", label: "Mes ressources prévues après le bac", multi: true },
          { id: "fixes", label: "Mes dépenses incompressibles", multi: true },
          { id: "reste", label: "Mon reste à vivre" },
          { id: "outils", label: "Mes deux outils pour tenir" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Le reste à vivre, c'est…", options: ["Le salaire brut", "Ce qui reste après les dépenses obligatoires", "L'épargne"], bonne: 1, explication: "C'est ce qui reste pour les courses, les loisirs, l'épargne." },
      { type: "qcm", enonce: "Quand l'argent manque, on paie d'abord…", options: ["Les abonnements", "Le loyer", "Les sorties"], bonne: 1, explication: "Un loyer impayé peut faire perdre son logement." },
      { type: "vf", enonce: "Un mini-crédit rapide est une bonne solution à un imprévu.", bonne: false, explication: "Il est cher et peut lancer l'engrenage : on utilise d'abord son épargne et on appelle le créancier." },
      { type: "ouverte", enonce: "Vers qui te tourner si tu n'arrives plus à payer ?", modele: "Un Point conseil budget, l'assistante sociale, la mission locale, et la Banque de France en cas de surendettement." }
    ],
    plusLoin: [
      { titre: "Point conseil budget", source: "Ministère des Solidarités", url: "https://solidarites.gouv.fr/point-conseil-budget-pcb", description: "Des conseils gratuits pour gérer son budget ou sortir d'une difficulté." },
      { titre: "Gérer son budget", source: "La finance pour tous", url: "https://www.lafinancepourtous.com/pratique/budget/gerer-son-budget/", description: "Outils et conseils pratiques." },
      MQD
    ],
    passerelles: ["cps-tle-2"],
    ressourcesLocales: ["pcb", "social", "mission-locale"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Les " + A("smicNet") + " de Yanis et les 40 € du 25.", "Fait estimer les dépenses d'un jeune actif."],
        ["5-23 min", "Activité", "Calcule le reste à vivre de Yanis, puis l'imprévu.", "Signale les participations de l'employeur (transport, mutuelle)."],
        ["23-30 min", "Activité", "Range les dépenses par priorité.", "Explique le risque d'un loyer impayé."],
        ["30-45 min", "Activité", "Suit le scénario du mois difficile.", "Présente les Points conseil budget."],
        ["45-50 min", "Activité facultative", "Choisit deux outils pour tenir.", "Propose l'alerte de solde."],
        ["50-55 min", "Trace", "Remplit « Mon budget de jeune actif », répond à « Je vérifie ».", "Montre les ressources locales affichées dans l'appli."]
      ],
      vigilance: VIG
    }
  });

  // ===================================================================
  // SÉANCE 4 · Mes papiers, et le bilan
  // ===================================================================
  S.push({
    id: "educfi-tle-4", pilier: "educfi", niveau: "tle", num: 4, duree: DUREE,
    titre: "Mes papiers, et le bilan",
    objectifCourt: "Déclarer, classer, garder ; le bilan des trois ans",
    objectif: "Savoir faire sa première déclaration de revenus ou rester rattaché à ses parents, créer et sécuriser ses comptes officiels, savoir quels papiers garder et combien de temps. Puis faire le bilan des trois années d'EDUCFI.",
    rappel: { seance: "educfi-2nde-7", etiquette: "Revoir EDUCFI Seconde, séance 7", texte: "En Seconde, tu as vu à quoi servent les impôts. Au printemps, Yanis reçoit un message : « Déclarez vos revenus. » Il a 20 ans, il vit encore chez ses parents. Il déclare seul, ou pas ?" },
    aqcms: {
      pourquoi: "À 18 ans, on devient responsable de ses papiers : impôts, santé, aides, contrats.",
      apport: "Ne rien perdre, ne rien oublier, et protéger mes comptes officiels.",
      ou: "Pour les impôts, la CAF, la Sécurité sociale, un dossier de location, ma retraite un jour.",
      lie: "Les impôts (EDUCFI Seconde, séance 7) ; protéger mes comptes (Cyber Seconde, séance 3) ; mon identité numérique (Cyber Terminale, séance 2)."
    },
    accroche: "Fiches de paie, avis d'imposition, contrats, quittances de loyer : tu les jettes, tu les gardes ? Et combien de temps ?",
    activites: [{
      titre: "Rattaché ou seul ?", moteur: "scenario",
      config: { id: "educfi-tle-4", cas: [{
        titre: "La première déclaration", depart: "a",
        noeuds: {
          a: { contexte: "Yanis a 20 ans au 1er janvier. Il vit chez ses parents et a travaillé en CDD.", question: "Peut-il rester rattaché au foyer fiscal de ses parents ?", choix: [
            { texte: "Oui, s'il en fait la demande : il a moins de 21 ans au 1er janvier.", vers: "b", ok: true, retour: "Oui. Ses revenus sont alors déclarés avec ceux de ses parents." },
            { texte: "Non, à 18 ans on déclare obligatoirement seul.", ok: false, retour: "Le rattachement est possible avant 21 ans, ou avant 25 ans si on fait des études." }
          ] },
          b: { contexte: "Inès a 22 ans et est en BTS par apprentissage.", question: "Et elle ?", choix: [
            { texte: "Elle peut demander à rester rattachée, car elle a moins de 25 ans et poursuit ses études.", vers: "c", ok: true, retour: "Oui, sur sa demande." },
            { texte: "Elle doit déclarer seule.", ok: false, retour: "Elle peut choisir : le rattachement reste possible jusqu'à 25 ans pour les étudiants." }
          ] },
          c: { question: "Comment choisir entre rattachement et déclaration seule ?", choix: [
            { texte: "On simule les deux cas sur impots.gouv.fr avant de choisir.", vers: "fin", ok: true, retour: "Oui : le meilleur choix dépend des revenus de chacun." },
            { texte: "On fait comme les copains.", ok: false, retour: "Chaque famille est différente : on simule." }
          ] },
          fin: { fin: { ok: true, titre: "À retenir :", texte: "Avant 21 ans (ou 25 ans en études), je peux rester rattaché à mes parents, sur demande. Sinon, je déclare seul, en ligne. Même sans impôt à payer, l'avis d'imposition sert pour les aides et le logement." } }
        }
      }] }
    }, {
      titre: "Ce que je garde, et combien de temps", moteur: "cartes",
      config: {
        fin: "Ce sont des repères minimums : dans le doute, on garde, de préférence aussi en version numérique.",
        manches: [{
          type: "classer", titre: "Je garde…", categories: ["Jusqu'à la retraite", "5 ans", "3 ans au moins", "Le temps de la garantie"],
          cartes: [
            { texte: "Mes fiches de paie", reponse: "Jusqu'à la retraite" },
            { texte: "Mes contrats de travail et attestations de stage", reponse: "Jusqu'à la retraite" },
            { texte: "Mes relevés bancaires", reponse: "5 ans" },
            { texte: "Mes avis d'imposition", reponse: "3 ans au moins" },
            { texte: "Mes quittances de loyer", reponse: "3 ans au moins", explication: "Trois ans après avoir quitté le logement." },
            { texte: "La facture de mon téléphone ou de mon ordinateur", reponse: "Le temps de la garantie" }
          ],
          bilan: "Un classeur papier et un dossier numérique : je sais toujours où sont mes papiers."
        }]
      }
    }, {
      titre: "Mes comptes officiels", moteur: "choisir", facultatif: true,
      consigne: "Coche les comptes que tu as déjà, ou que tu vas créer à 18 ans. Pour chacun : un mot de passe solide et la double authentification.",
      config: {
        cle: "educfi-comptes-officiels", max: 6, min: 1, titre: "Comptes", resume: "Mes comptes officiels",
        cartes: [
          { nom: "impots.gouv.fr", ex: "Déclaration de revenus, avis d'imposition" },
          { nom: "ameli.fr", ex: "Assurance maladie, remboursements, carte Vitale" },
          { nom: "caf.fr", ex: "Aide au logement, prime d'activité" },
          { nom: "France Travail", ex: "Recherche d'emploi, allocations" },
          { nom: "FranceConnect", ex: "Un seul identifiant pour se connecter aux sites publics" },
          { nom: "Ma banque", ex: "Appli et espace en ligne" }
        ]
      }
    }, {
      titre: "Bilan du pilier EDUCFI", moteur: "jauges",
      consigne: "Trois ans d'EDUCFI : où en es-tu ? Tes réponses restent sur ton appareil.",
      config: {
        id: "bilan-educfi", cle: "bilan-educfi", bornes: ["Je débute", "Je maîtrise"],
        items: ["Tenir un budget", "Utiliser mon compte et payer en sécurité", "Épargner", "Éviter le crédit mal compris", "M'assurer", "Comprendre l'impôt et ma fiche de paie", "Déjouer les arnaques", "Me loger", "Demander mes droits"],
        note: "Ce bilan rejoindra ton passeport de compétences."
      }
    }],
    retenir: [
      "Moins de 21 ans (ou moins de 25 ans en études) : je peux rester rattaché à mes parents, sur demande.",
      "Je garde mes fiches de paie et mes contrats de travail toute ma vie professionnelle.",
      "Mes comptes officiels sont aussi importants que ma banque : mot de passe solide et double authentification.",
      "Une copie de mes papiers part toujours avec un filigrane."
    ],
    ressource: {
      titre: "Mes papiers",
      intro: "Combien de temps garder mes papiers, et mes démarches à 18 ans.",
      blocs: [
        { type: "tableau", titre: "Combien de temps garder mes papiers (repères minimums)", colonnes: ["Document", "Durée"], lignes: [
          ["Fiches de paie, contrats de travail", "Jusqu'à la retraite"],
          ["Relevés bancaires", "5 ans"],
          ["Avis d'imposition", "3 ans au moins"],
          ["Quittances de loyer", "3 ans après le départ"],
          ["Factures d'achat", "Au moins la durée de la garantie"]
        ] },
        { type: "liste", titre: "Mes démarches à 18 ans", items: ["Créer ou vérifier mes comptes : impots.gouv.fr, ameli.fr, caf.fr", "Activer FranceConnect", "Mettre mes coordonnées à jour à la banque", "Choisir rattachement ou déclaration seule pour les impôts", "Ranger mes papiers : un classeur et un dossier numérique"] },
        { type: "texte", titre: "Le filigrane", texte: "Avant d'envoyer la copie d'une pièce d'identité, j'ajoute un filigrane avec le destinataire, le motif et la date. Un service public gratuit le fait sur filigrane.beta.gouv.fr." }
      ]
    },
    traces: [{
      titre: "Mon classeur administratif", moteur: "carnet",
      outil: { id: "classeur-administratif", nom: "Mon classeur administratif", description: "Mes comptes officiels, où je range mes papiers, mes démarches à 18 ans." },
      config: {
        cle: "classeur-administratif", titreDoc: "Mon classeur administratif",
        intro: "Pour toi seul. N'écris jamais ici tes mots de passe.",
        champs: [
          { id: "comptes", label: "Mes comptes officiels (sans les mots de passe)", multi: true },
          { id: "rangement", label: "Où je range mes papiers (classeur, dossier numérique)" },
          { id: "dixhuit", label: "Ce que je dois faire à 18 ans", multi: true }
        ]
      }
    }, {
      titre: "Mon bilan EDUCFI", moteur: "carnet",
      outil: { id: "bilan-educfi-texte", nom: "Mon bilan EDUCFI", description: "Ce que je retiens de trois ans d'EDUCFI, et l'habitude que je garde." },
      config: {
        cle: "bilan-educfi-texte", titreDoc: "Mon bilan EDUCFI",
        intro: "Pour toi seul.",
        champs: [
          { id: "retiens", label: "Ce que je retiens de ces trois années", multi: true },
          { id: "habitude", label: "Une habitude que je garde" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Jusqu'à quel âge peut-on rester rattaché au foyer fiscal de ses parents, si on fait des études ?", options: ["18 ans", "21 ans", "25 ans"], bonne: 2, explication: "Avant 25 ans en études, avant 21 ans sinon, sur demande." },
      { type: "qcm", enonce: "Combien de temps garder ses fiches de paie ?", options: ["1 an", "5 ans", "Jusqu'à la retraite"], bonne: 2, explication: "Elles servent pour calculer la retraite." },
      { type: "vf", enonce: "J'envoie la copie de ma pièce d'identité sans filigrane, c'est plus simple.", bonne: false, explication: "Une copie sans filigrane peut servir à usurper ton identité." }
    ],
    plusLoin: [
      { titre: "Revenus et rattachement d'un enfant majeur", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3085", description: "Les conditions et les conséquences du rattachement." },
      { titre: "La durée de conservation des papiers", source: "Ministère de l'Économie", url: "https://www.economie.gouv.fr/cedef/fiches-pratiques/la-duree-de-conservation-des-papiers-personnels-et-professionnels", description: "Combien de temps garder chaque document." },
      { titre: "impots.gouv.fr", source: "Direction générale des finances publiques", url: "https://www.impots.gouv.fr", description: "Déclarer ses revenus, simuler, consulter ses avis." }
    ],
    passerelles: ["cyber-2nde-3", "cyber-tle-2"],
    adulte: {
      deroule: [
        ["0-4 min", "Accroche", "Tu jettes ou tu gardes tes papiers ?", "Recueille les habitudes."],
        ["4-16 min", "Activité", "Suit le scénario de la première déclaration.", "Explique le rattachement, sans calculer la situation d'un élève."],
        ["16-25 min", "Activité", "Classe les papiers selon leur durée de conservation.", "Montre la fiche officielle du ministère."],
        ["25-33 min", "Activité", "Coche ses comptes officiels.", "Rappelle mot de passe solide et double authentification (Cyber)."],
        ["33-48 min", "Bilan", "Se positionne sur les compétences des trois ans et remplit « Mon bilan EDUCFI ».", "Relie au passeport de compétences."],
        ["48-55 min", "Trace", "Remplit « Mon classeur administratif », répond à « Je vérifie ».", "Présente le service public de filigrane."]
      ],
      vigilance: VIG + "On ne demande jamais à un élève la situation fiscale de sa famille."
    }
  });
})();
