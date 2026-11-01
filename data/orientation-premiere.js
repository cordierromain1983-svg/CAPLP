/*
 * PILIER ORIENTATION · PREMIÈRE (« Moi et les autres »)
 * Contenu validé (document « Cap'Autonomie – Orientation Première »).
 * Trois séances de 55 minutes : Ce que les autres voient de moi au travail (décembre, après la PFMP
 * de novembre), Rencontrer des pros (février), Les chemins des autres (mai, avant la PFMP de juin).
 * Terminale 2026-2027 : choix insertion / poursuite d'études dès la rentrée, parcours personnalisé
 * de deux semaines avant la mi-mars, écrits du 3 au 15 juin 2027, oral de projet à partir du 21 juin.
 * Ressources vérifiées le 1er novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var DUREE = "55 min";
  var A = window.CAP_ACTU.texte; // faits datés : data/actualites.js

  // ===================================================================
  // SÉANCE 1 · Ce que les autres voient de moi au travail
  // ===================================================================
  S.push({
    id: "orientation-1re-1", pilier: "orientation", niveau: "1re", num: 1, duree: DUREE,
    titre: "Ce que les autres voient de moi au travail",
    objectifCourt: "Lire le retour de mon tuteur, faire mon bilan de stage",
    objectif: "Comprendre le retour de mon tuteur, le comparer à ma propre vision, et en tirer un bilan utile pour mon orientation.",
    rappel: { seance: "orientation-2nde-3", texte: "En Seconde, tu as fait ton choix de fin d'année et repéré ce qui influence tes décisions. Cette année, on regarde ce que les autres voient de toi au travail, en commençant par ton tuteur de stage." },
    aqcms: {
      pourquoi: "Un retour de tuteur est souvent reçu comme une note, alors que c'est une information : il dit ce qu'un employeur remarquera.",
      apport: "Savoir décoder une appréciation, la transformer en action, et confirmer ou revoir une piste de métier.",
      ou: "Évaluation de PFMP, entretien d'embauche (« Que diraient vos anciens tuteurs ? »), dossier de BTS.",
      lie: "L'écoute active (CPS Première, séance 2), mes messages « Je » (CPS Première, séance 4)."
    },
    accroche: "Tom revient de stage (il est inventé). Sur sa fiche, le tuteur a écrit : « Sérieux et ponctuel. Manque d'initiative. » Tom est vexé : « Il ne m'a jamais laissé rien faire ! » Qu'est-ce que le tuteur a peut-être voulu dire ?",
    activites: [{
      titre: "Ce que dit le tuteur", moteur: "cartes",
      consigne: "Douze appréciations inventées. Pour chacune : le tuteur apprécie, ou il demande de travailler ce point ?",
      config: {
        fin: "Certaines phrases sont les deux faces d'une même qualité : « pose les bonnes questions » et « doit oser dire quand il ne sait pas » parlent de la même chose.",
        manches: [{
          type: "classer", titre: "Le tuteur…", categories: ["Apprécie", "Demande de travailler"],
          cartes: [
            { texte: "« Pose les bonnes questions. »", reponse: "Apprécie" },
            { texte: "« Doit gagner en autonomie. »", reponse: "Demande de travailler", explication: "Il attend que tu fasses certaines tâches sans qu'on te le redise." },
            { texte: "« Toujours à l'heure. »", reponse: "Apprécie" },
            { texte: "« Téléphone trop présent. »", reponse: "Demande de travailler", explication: "Le téléphone visible donne l'impression qu'on n'est pas là." },
            { texte: "« Bon contact avec les clients. »", reponse: "Apprécie" },
            { texte: "« Manque d'initiative. »", reponse: "Demande de travailler", explication: "Souvent : quand tu as fini, propose ce que tu peux faire ensuite." },
            { texte: "« Travail soigné. »", reponse: "Apprécie" },
            { texte: "« Doit mieux respecter les consignes de sécurité. »", reponse: "Demande de travailler", explication: "C'est un point non négociable dans nos deux filières." },
            { texte: "« S'intègre bien dans l'équipe. »", reponse: "Apprécie" },
            { texte: "« Attend qu'on lui dise quoi faire. »", reponse: "Demande de travailler" },
            { texte: "« Prend des notes. »", reponse: "Apprécie", explication: "Prendre des notes montre qu'on veut retenir et ne pas redemander." },
            { texte: "« Doit oser dire quand il ne sait pas. »", reponse: "Demande de travailler", explication: "Dire « je ne sais pas » évite les erreurs : c'est une qualité au travail." }
          ],
          bilan: "Un retour parle de mon travail, pas de ma personne."
        }]
      }
    }, {
      titre: "D'un retour à une action", moteur: "reformuler",
      consigne: "Pour chaque appréciation, devine ce que le tuteur attend, puis écris ce que tu feras la prochaine fois.",
      config: {
        textes: { etiquette: "Appréciation", depart: "Le tuteur a écrit", message: "Mon action", suivant: "Appréciation suivante", fin: "Tu as transformé ces retours en actions concrètes. C'est exactement ce qu'un employeur attend." },
        items: [
          { reproche: "« Manque d'initiative. »", exemple: "Il attend peut-être que je propose mon aide. La prochaine fois, quand j'ai fini une tâche, je demande ce que je peux faire ensuite." },
          { reproche: "« Doit gagner en autonomie. »", exemple: "Il attend peut-être que je refasse seul les tâches déjà montrées. La prochaine fois, je note les étapes pour ne pas redemander." },
          { reproche: "« Téléphone trop présent. »", exemple: "Il attend peut-être que je sois concentré. La prochaine fois, je range mon téléphone et je le regarde seulement à la pause." }
        ],
        champs: [
          { id: "attend", label: "Il attend peut-être que je…" },
          { id: "action", label: "La prochaine fois, je vais…" }
        ],
        gabarit: "Il attend peut-être que je {attend}. La prochaine fois, je vais {action}.",
        alertes: [
          { motif: "m'aime pas|injuste|jamais|nul|c'est de sa faute", conseil: "Ce retour parle de ton travail, pas de toi. Cherche ce que tu peux faire de différent." }
        ]
      }
    }, {
      titre: "Mon regard, son regard", moteur: "jauges",
      consigne: "Place-toi d'abord seul. Puis repense à ce que ton tuteur a dit ou écrit, sans montrer ta fiche d'évaluation. Tes positions restent sur ton appareil.",
      config: {
        id: "regard-stage", cle: "regard-stage", bornes: ["À travailler", "Point fort"],
        items: ["Ponctualité", "Respect des consignes de sécurité", "Soin du travail", "Initiative", "Communication avec l'équipe", "Oser poser une question"],
        note: "Un écart entre ton regard et celui de ton tuteur n'est pas une faute : c'est le point le plus intéressant à travailler."
      }
    }],
    retenir: [
      "Un retour de tuteur est une information sur mon travail, pas un jugement sur ma personne.",
      "Je le décode, puis je le transforme en action concrète.",
      "Un stage peut confirmer ou remettre en question une piste : les deux sont utiles.",
      "Ce que les autres voient de moi au travail, un futur employeur le verra aussi."
    ],
    ressource: {
      titre: "Lire un retour de tuteur",
      intro: "Une fiche pour comprendre une appréciation et en faire quelque chose.",
      blocs: [
        { type: "tableau", titre: "Des appréciations fréquentes", colonnes: ["Le tuteur écrit…", "Il veut souvent dire…", "Une action possible"], lignes: [
          ["Manque d'initiative", "Il attend que tu proposes", "Quand j'ai fini, je demande la suite"],
          ["Doit gagner en autonomie", "Refaire seul ce qu'on t'a montré", "Je note les étapes"],
          ["Téléphone trop présent", "Tu sembles ailleurs", "Téléphone rangé, regardé à la pause"],
          ["Doit oser dire quand il ne sait pas", "Il préfère une question à une erreur", "Je dis « je ne sais pas, vous pouvez me montrer ? »"],
          ["Pose les bonnes questions", "Tu es curieux et prudent", "Je continue, et je le cite dans mon CV"],
          ["Bon contact avec les clients", "Tu sais accueillir", "Je le garde comme qualité prouvée"]
        ] },
        { type: "etapes", titre: "Lire un retour en cinq étapes", items: ["Je lis sans réagir tout de suite", "Je repère d'abord le positif", "Je cherche ce qu'on attend de moi", "Je choisis une action concrète", "Si besoin, je demande des précisions au tuteur ou au professeur référent"] },
        { type: "texte", titre: "Mon bilan en trois lignes", texte: "Mes points forts reconnus : … Mon point à travailler et mon action : … Ce stage confirme / nuance / remet en question ma piste parce que…" }
      ]
    },
    traces: [{
      titre: "Mon bilan de stage", moteur: "carnet",
      outil: { id: "bilan-stage", nom: "Mon bilan de stage", description: "Deux points forts, un point à travailler, ce que le stage m'a appris sur mon orientation." },
      config: {
        cle: "bilan-stage", titreDoc: "Mon bilan de stage",
        afficher: { titre: "Pour t'aider, ton portrait et tes pistes", sources: ["portrait-orientation", "choix-fin-seconde"] },
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici. Tu pourras le compléter après chaque PFMP.",
        champs: [
          { id: "forts", label: "Deux points forts reconnus (par moi ou par mon tuteur)", multi: true },
          { id: "travailler", label: "Un point à travailler, et mon action", multi: true },
          { id: "orientation", label: "Ce stage confirme, nuance ou remet en question ma piste, parce que…", multi: true }
        ]
      },
      parFiliere: {
        securite: { config: { intro: "Exemple inventé : Inès, en contrôle d'accès dans une salle de concert, découvre qu'elle aime le contact avec le public, mais pas les nuits. Sa piste se nuance : la sécurité incendie en journée, peut-être. Pour toi seul : personne d'autre ne voit ce que tu écris ici." } },
        ciel: { config: { intro: "Exemple inventé : Rayan, au service après-vente d'un magasin, adore dépanner, mais se rend compte qu'il doit progresser à l'oral avec les clients. Sa piste se confirme, avec un point à travailler. Pour toi seul : personne d'autre ne voit ce que tu écris ici." } }
      }
    }],
    verifie: [
      { type: "vf", enonce: "Une appréciation négative veut dire que le stage est raté.", bonne: false, explication: "C'est une information pour progresser. Presque tous les stagiaires ont un point à travailler." },
      { type: "vf", enonce: "« Manque d'initiative » peut se travailler par une action simple.", bonne: true, explication: "Par exemple : proposer son aide quand on a fini une tâche." },
      { type: "vf", enonce: "Je dois montrer ma fiche d'évaluation à la classe.", bonne: false, explication: "Ta fiche est personnelle. Personne n'a à la voir." },
      { type: "vf", enonce: "Un stage peut confirmer ou remettre en question une piste, et les deux sont utiles.", bonne: true, explication: "Savoir ce qu'on ne veut pas, c'est aussi avancer." }
    ],
    plusLoin: [
      { titre: "Testez vos connaissances sur les métiers", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep/testez-vos-connaissances-sur-les-metiers", description: "Un quiz pour découvrir des métiers." },
      { titre: "La plateforme Avenir(s)", source: "Onisep", url: "https://www.onisep.fr/avenir-s", description: "Un portfolio pour garder la trace de tes stages, avec ton compte ÉduConnect." }
    ],
    passerelles: ["cps-1re-2", "cps-1re-4"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Réagit à l'appréciation reçue par Tom.", "Note trois hypothèses au tableau."],
        ["5-15 min", "Activité", "Classe douze appréciations.", "Montre que deux phrases peuvent parler de la même qualité."],
        ["15-27 min", "Activité", "Transforme trois appréciations en actions.", "Valorise les actions concrètes."],
        ["27-35 min", "Activité", "Se place sur six curseurs, puis repense au regard de son tuteur.", "Ne demande jamais de montrer la fiche d'évaluation."],
        ["35-47 min", "Trace", "Rédige son bilan de stage.", "Aide à formuler le lien avec l'orientation."],
        ["47-55 min", "Synthèse", "Tour volontaire : « une chose que mon tuteur m'a apprise sur moi », puis « Je vérifie ».", ""]
      ],
      vigilance: "À placer en décembre, au retour de la PFMP de novembre. Ne jamais demander de lire ou de montrer une fiche d'évaluation. Certains stages se sont mal passés (remarques déplacées, tâches dangereuses, discrimination) : si un élève en parle, ne pas le traiter devant la classe, le reprendre seul et prévenir le professeur référent ou le CPE. Le travail sur les retours n'excuse jamais un comportement inacceptable d'un adulte en entreprise."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Rencontrer des pros, commencer mon réseau
  // ===================================================================
  S.push({
    id: "orientation-1re-2", pilier: "orientation", niveau: "1re", num: 2, duree: DUREE,
    titre: "Rencontrer des pros, commencer mon réseau",
    objectifCourt: "Mon réseau, mes questions, mes contacts",
    objectif: "Comprendre ce qu'est un réseau professionnel, repérer celui que j'ai déjà sans le savoir, préparer et mener un échange avec un professionnel.",
    rappel: { seance: "orientation-1re-1", texte: "Ton tuteur t'a dit ce qu'il voyait de toi. Ce tuteur fait déjà partie de ton réseau. Aujourd'hui, on apprend à le faire grandir." },
    aqcms: {
      pourquoi: "Beaucoup de stages, de contrats d'apprentissage et de premiers emplois se trouvent grâce à quelqu'un qu'on connaît. Ceux qui n'ont pas de « piston » familial pensent souvent que c'est perdu d'avance : un réseau se construit.",
      apport: "Une carte de mon réseau, des questions prêtes, une méthode pour garder le contact.",
      ou: "Rencontres avec des pros de l'Onisep, PFMP de juin, forum des anciens en Terminale, recherche de stage ou d'alternance, salons, journées portes ouvertes.",
      lie: "L'écoute active (CPS Première, séance 2), arnaques et manipulation (Cyber Première, séance 3), mon identité numérique pro (Cyber Terminale, séance 2)."
    },
    accroche: "Aya cherchait un stage en réseau informatique depuis un mois (elle est inventée). Au repas de fin de stage de Seconde, elle en parle à son ancien tuteur. Il lui dit : « Mon beau-frère est technicien dans une entreprise de fibre, je lui demande. » Deux jours plus tard, elle a un rendez-vous. Chance, piston, ou autre chose ?",
    activites: [{
      titre: "Mon réseau sans le savoir", moteur: "carnet",
      consigne: "Écris des rôles, jamais des noms. Pour chaque case : qui pourrait connaître quelqu'un dans mon domaine ?",
      config: {
        cle: "mon-reseau", titreDoc: "Mon réseau",
        intro: "Tu connais plus de monde que tu ne le crois. Exemples : « mon oncle, qui travaille dans le bâtiment », « l'entraîneur du club ».",
        champs: [
          { id: "famille", label: "Famille et proches", multi: true },
          { id: "voisins", label: "Voisins et amis de la famille", multi: true },
          { id: "stages", label: "Anciens tuteurs et collègues de stage", multi: true },
          { id: "lycee", label: "Profs et adultes du lycée", multi: true },
          { id: "activites", label: "Club, paroisse, association, job d'été", multi: true },
          { id: "anciens", label: "Anciens élèves", multi: true }
        ]
      }
    }, {
      titre: "Les bonnes questions", moteur: "cartes",
      consigne: "Tu vas rencontrer un professionnel. Pour chaque question : je la pose, je la reformule, ou je l'évite ?",
      config: {
        fin: "Une bonne question est ouverte, polie, et porte sur le métier, pas sur la vie privée de la personne.",
        manches: [{
          type: "classer", titre: "Cette question…", categories: ["Je la pose", "Je la reformule", "Je l'évite"],
          cartes: [
            { texte: "« Comment s'est passée votre première année ? »", reponse: "Je la pose" },
            { texte: "« Vous gagnez combien ? »", reponse: "Je la reformule", explication: "Plutôt : « Quel est le salaire en début de carrière dans ce métier ? »" },
            { texte: "« Qu'est-ce qui vous plaît le moins dans votre travail ? »", reponse: "Je la pose", explication: "Une question honnête, qui donne souvent les réponses les plus utiles." },
            { texte: "« Vous pouvez me trouver un stage ? »", reponse: "Je la reformule", explication: "Plutôt : « Est-ce que votre entreprise accueille des stagiaires ? »" },
            { texte: "« Quelle formation me conseillez-vous ? »", reponse: "Je la pose" },
            { texte: "« Il faut être fort en maths ? »", reponse: "Je la reformule", explication: "Plutôt : « Quelles matières vous servent le plus au quotidien ? »" },
            { texte: "« À quoi ressemble une journée type ? »", reponse: "Je la pose" },
            { texte: "« Vous êtes marié ? »", reponse: "Je l'évite", explication: "C'est la vie privée de la personne, sans lien avec le métier." },
            { texte: "« Pourquoi vous n'avez pas fait d'études plus longues ? »", reponse: "Je l'évite", explication: "La question peut blesser. Demande plutôt : « Comment êtes-vous arrivé à ce poste ? »" },
            { texte: "« Comment êtes-vous arrivé à ce poste ? »", reponse: "Je la pose" },
            { texte: "« C'est quoi, le plus dur ? »", reponse: "Je la reformule", explication: "Plus poli : « Qu'est-ce qui a été le plus difficile au début ? »" },
            { texte: "« Est-ce que je peux vous recontacter plus tard ? »", reponse: "Je la pose", explication: "C'est comme ça qu'un contact devient un réseau." }
          ],
          bilan: "Je prépare trois questions avant chaque rencontre."
        }]
      }
    }, {
      titre: "L'interview", moteur: "binome",
      consigne: "Par deux. L'élève A joue le professionnel à partir de la fiche tirée au sort, l'élève B l'interroge avec ses questions, puis reformule. On inverse. Les questions retenues resserviront lors d'une rencontre avec des pros, pendant la PFMP de juin, puis au forum des anciens en Terminale.",
      config: {
        duree: 180,
        roles: ["Élève A joue le professionnel de la fiche. Élève B pose ses questions, écoute, puis reformule ce qu'il a retenu.", "On inverse : élève B joue un professionnel, élève A l'interroge puis reformule."],
        finTour: "Temps écoulé. L'intervieweur reformule : « Si j'ai bien compris, votre métier… ». Puis changez de rôle.",
        sujets: [
          "Farid, agent de sécurité incendie dans un centre commercial depuis six ans",
          "Léa, gardienne de la paix, ancienne élève de bac pro",
          "Sarah, technicienne réseau dans une mairie",
          "Hugo, technicien support, en BTS en apprentissage"
        ]
      },
      parFiliere: {
        securite: { sujets: [
          "Marc, opérateur en télésurveillance, travaille de nuit",
          "Nadia, agente de sûreté dans une gare",
          "Paul, sapeur-pompier professionnel, ancien volontaire"
        ] },
        ciel: { sujets: [
          "Mathieu, installateur fibre, a créé son entreprise",
          "Julie, technicienne en cybersécurité après un BTS CIEL",
          "Antoine, électronicien dans un atelier de réparation"
        ] }
      }
    }],
    retenir: [
      "Un réseau, ce n'est pas du piston : ce sont les gens qui peuvent me renseigner ou me recommander.",
      "Tout le monde a un réseau, et il grandit à chaque stage.",
      "Je prépare mes questions, j'écoute, je remercie, je donne des nouvelles.",
      "Une offre trop belle reçue d'un inconnu en ligne n'est pas du réseau : je vérifie."
    ],
    ressource: {
      titre: "Rencontrer un pro",
      intro: "Une fiche pour préparer, mener et prolonger une rencontre.",
      blocs: [
        { type: "liste", titre: "Les six cercles de mon réseau", items: ["Famille et proches", "Voisins et amis de la famille", "Anciens tuteurs et collègues de stage", "Profs et adultes du lycée", "Club, paroisse, association, job d'été", "Anciens élèves"] },
        { type: "liste", titre: "Dix questions qui marchent", items: ["Comment êtes-vous arrivé à ce poste ?", "À quoi ressemble une journée type ?", "Qu'est-ce qui vous plaît le plus ?", "Qu'est-ce qui vous plaît le moins ?", "Qu'est-ce qui a été le plus difficile au début ?", "Quelle formation me conseillez-vous ?", "Quelles qualités faut-il pour ce métier ?", "Quel est le salaire en début de carrière ?", "Votre entreprise accueille-t-elle des stagiaires ?", "Est-ce que je peux vous recontacter plus tard ?"] },
        { type: "etapes", titre: "Avant, pendant, après", items: ["Avant : je me renseigne sur le métier et je prépare trois questions", "Pendant : je me présente, j'écoute, je note", "Après : je remercie, je note le contact, je donne des nouvelles"] },
        { type: "texte", titre: "Un message de remerciement en trois phrases", texte: "Bonjour Madame, merci pour le temps que vous m'avez accordé aujourd'hui. Ce que vous m'avez dit sur la sécurité incendie m'a donné envie d'en savoir plus. Je me permettrai de vous recontacter pour mon stage de juin. Bonne journée." }
      ]
    },
    traces: [{
      titre: "Mes contacts pros", moteur: "liste",
      outil: { id: "contacts-pros", nom: "Mes contacts pros", description: "Les professionnels rencontrés et ce que je peux leur demander." },
      config: {
        cle: "contacts-pros", titreDoc: "Mes contacts pros", titreListe: "Mes contacts", bouton: "Ajouter ce contact",
        intro: "Pas de numéro de téléphone ni d'adresse ici : ils restent dans ton téléphone.",
        champs: [
          { id: "qui", label: "Rôle et entreprise", placeholder: "Ex. : technicienne réseau, mairie de…" },
          { id: "comment", label: "Comment je l'ai rencontré" },
          { id: "appris", label: "Ce que j'ai appris", multi: true },
          { id: "demander", label: "Ce que je pourrais lui demander plus tard" },
          { id: "quand", label: "Date du dernier échange" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Qu'est-ce qu'un réseau professionnel ?", options: ["Du piston réservé à quelques-uns", "Les gens qui peuvent me renseigner ou me recommander", "Mes abonnés sur les réseaux sociaux"], bonne: 1, explication: "Tout le monde en a un, et il se construit." },
      { type: "ouverte", enonce: "Comment reformuler « Vous pouvez me trouver un stage ? »", modele: "« Est-ce que votre entreprise accueille des stagiaires ? »" },
      { type: "ouverte", enonce: "Que fais-tu après une rencontre avec un professionnel ?", modele: "Je le remercie, je note le contact dans « Mes contacts pros », et je lui donne des nouvelles." },
      { type: "qcm", enonce: "Un inconnu te propose sur un réseau social une alternance très bien payée, contre des frais d'inscription. Que fais-tu ?", options: ["J'accepte vite", "Je vérifie : un contrat d'apprentissage ne se paie pas", "Je lui envoie ma carte d'identité"], bonne: 1, explication: "La formation d'un apprenti ne lui coûte rien. Demander de l'argent est un signal d'arnaque." }
    ],
    plusLoin: [
      { titre: "Rencontres avec des pros", source: "Onisep", url: "https://www.onisep.fr/avenir-s/accompagner-les-eleves/agenda-et-rendez-vous/rencontres-avec-des-pros", description: "Des rencontres en visio avec des professionnels, auxquelles ta classe peut s'inscrire ; des replays sur Avenir(s)." },
      { titre: "La plateforme Avenir(s)", source: "Onisep", url: "https://www.onisep.fr/avenir-s", description: "Les replays des rencontres et des fiches métiers, avec ton compte ÉduConnect." }
    ],
    passerelles: ["cps-1re-2", "cyber-1re-3", "cyber-tle-2"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Réagit à l'histoire d'Aya : chance, piston ou autre chose ?", "Fait émerger l'idée de réseau."],
        ["5-15 min", "Activité", "Remplit les six cercles de son réseau avec des rôles.", "Ne demande jamais de noms ni de comparaison entre élèves."],
        ["15-23 min", "Activité", "Classe douze questions.", "Fait reformuler les questions maladroites."],
        ["23-38 min", "Activité", "Interview en binôme à partir de fiches de rôle.", "Circule, aide l'intervieweur à relancer."],
        ["38-48 min", "Trace", "Note ses premiers contacts pros.", "Rappelle : pas de numéro ni d'adresse dans l'appli."],
        ["48-55 min", "Synthèse", "Retient la méthode et répond à « Je vérifie ».", "Présente le message de remerciement."]
      ],
      vigilance: "À placer en février. Certains élèves n'ont presque aucun appui familial : insister sur ce qui se construit (stages, profs, anciens élèves). Si le lycée a un annuaire d'anciens ou un bureau des entreprises, le montrer. Prolongement conseillé : inscrire la classe à une « Rencontre avec des pros » de l'Onisep, en visio, pour mettre les questions en pratique. Le forum des anciens du lycée viendra en Terminale."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Les chemins des autres, ma direction pour la Terminale
  // ===================================================================
  function kenza(titre, chemins) {
    var noeuds = {
      a: { contexte: "Kenza est une ancienne élève (inventée). Elle raconte : « En Terminale, j'ai dû choisir. J'avais quatre possibilités. »", question: "Quel chemin veux-tu découvrir ?", choix: [] }
    };
    chemins.forEach(function (c, k) {
      var id = "c" + k;
      noeuds.a.choix.push({ texte: c[0], vers: id });
      noeuds[id] = { contexte: c[1], question: "Et toi, qu'en retiens-tu ?", choix: [{ texte: c[2], vers: "fin", ok: true, retour: "C'est ce que Kenza aurait aimé savoir en Première." }] };
    });
    noeuds.fin = { fin: { ok: true, titre: "À retenir :", texte: "Il y a plusieurs bons chemins. Rejoue pour découvrir les autres." } };
    return { titre: titre, depart: "a", noeuds: noeuds };
  }

  S.push({
    id: "orientation-1re-3", pilier: "orientation", niveau: "1re", num: 3, duree: DUREE,
    titre: "Les chemins des autres, ma direction pour la Terminale",
    objectifCourt: "Préparer le choix insertion ou poursuite d'études",
    objectif: "Comparer les chemins pris par d'autres après le bac pro, connaître le calendrier de la Terminale, et choisir une direction provisoire : plutôt insertion, plutôt poursuite d'études, ou pas encore décidé.",
    rappel: { seance: "orientation-1re-2", texte: "Tu as appris à rencontrer des pros et à noter tes contacts. Aujourd'hui, on écoute ceux qui sont passés avant toi pour préparer ton choix de la rentrée." },
    aqcms: {
      pourquoi: "Dès le début de la Terminale, chaque élève choisit entre un parcours « insertion professionnelle » et un parcours « poursuite d'études ». Ceux qui arrivent sans idée choisissent par défaut.",
      apport: "Une comparaison claire des chemins, le calendrier de la Terminale, une direction et deux actions pour l'été.",
      ou: "À la rentrée de Terminale, sur Parcoursup, pour chercher une alternance, à l'oral de projet.",
      lie: "Décider en quatre questions (CPS Terminale, séance 2), mes contacts pros (Orientation Première, séance 2)."
    },
    accroche: "En septembre, ton professeur principal te demandera : « Insertion ou poursuite d'études ? » Tu réponds quoi, là, maintenant ? Vote à main levée, sans commentaire. On revotera à la fin.",
    activites: [{
      titre: "Le choix de Kenza", moteur: "scenario",
      consigne: "Découvre chacun des chemins de Kenza, et ce qu'elle aurait aimé savoir.",
      config: {
        id: "orientation-1re-3",
        cas: [kenza("Les quatre chemins de Kenza", [
          ["Travailler dès juillet", "Kenza commence à travailler juste après le bac. Elle est payée tout de suite et apprend vite. Deux ans plus tard, elle reprend une formation en cours d'emploi.", "L'emploi direct est un vrai choix, et il n'empêche pas de se former plus tard."],
          ["Un BTS au lycée", "Kenza fait des vœux de BTS sur Parcoursup. Elle apprend qu'avec une mention bien ou très bien, sans proposition, un bachelier pro est admis de droit dans un BTS du même domaine où il a candidaté, et que l'avis du conseil de classe compte dans les dossiers.", "Mes résultats de Première et de Terminale comptent pour entrer en BTS."],
          ["Un BTS en apprentissage", "Kenza veut un BTS et un salaire. Elle doit trouver une entreprise : elle commence à chercher au printemps de Terminale, avec l'aide du CFA.", "L'alternance se cherche tôt : dès l'hiver ou le printemps de Terminale."],
          ["Un certificat de spécialisation", "Kenza prépare en un an un certificat de spécialisation, pour se rendre plus vite employable dans un domaine précis.", "Il existe des formations courtes, d'un an, après le bac pro."]
        ])]
      },
      parFiliere: {
        securite: { cas: [kenza("Les chemins de Kenza en sécurité", [
          ["Agente de sécurité dès juillet", "Kenza obtient sa carte professionnelle (après vérification de son casier) et travaille dans un centre commercial dès juillet.", "Dans la sécurité privée, la carte professionnelle est indispensable."],
          ["BTS Management opérationnel de la sécurité", "Kenza entre en BTS MOS, au lycée ou en apprentissage. Le lycée ne le propose pas : elle candidate dans un lycée proche.", "Je repère dès la Première les BTS proches de chez moi."],
          ["Préparer un concours", "Kenza prépare le concours de gardienne de la paix pendant un an, avec des épreuves écrites et sportives.", "La fonction publique recrute sur concours : il faut s'y préparer."]
        ])] },
        ciel: { cas: [kenza("Les chemins de Kenza en CIEL", [
          ["Technicienne dès juillet", "Kenza est embauchée comme technicienne de maintenance, grâce à son tuteur de PFMP.", "Mes stages et mes contacts peuvent mener directement à un emploi."],
          ["BTS CIEL", "Kenza entre en BTS CIEL option Informatique et réseaux. Le lycée ne le propose pas : elle candidate dans un lycée proche.", "Je repère dès la Première les BTS proches de chez moi."],
          ["BTS SIO en apprentissage", "Kenza préfère le logiciel : elle trouve une entreprise et prépare un BTS SIO en alternance.", "D'autres BTS du numérique sont possibles après le bac pro CIEL."]
        ])] }
      }
    }, {
      titre: "Comparer les chemins", facultatif: true, moteur: "cartes",
      consigne: "À quel chemin correspond le mieux chaque phrase ?",
      config: {
        fin: "Chaque chemin a ses avantages et ses conditions. Le bon chemin, c'est celui qui te correspond.",
        manches: [{
          type: "classer", titre: "C'est surtout…", categories: ["L'emploi", "Le BTS au lycée", "L'apprentissage", "Le concours"],
          cartes: [
            { texte: "Je suis payé dès la rentrée, à temps plein", reponse: "L'emploi" },
            { texte: "Je dois trouver une entreprise moi-même pour étudier", reponse: "L'apprentissage", explication: "Sans entreprise, pas de contrat d'apprentissage." },
            { texte: "J'ai le statut d'étudiant et je fais des vœux sur Parcoursup", reponse: "Le BTS au lycée", explication: "On peut aussi faire des vœux en apprentissage sur Parcoursup." },
            { texte: "J'alterne école et entreprise, avec un salaire", reponse: "L'apprentissage" },
            { texte: "Je passe des épreuves écrites et sportives", reponse: "Le concours", explication: "Police, gendarmerie, pompiers." },
            { texte: "Je signe un contrat de travail sans suivre de formation", reponse: "L'emploi" },
            { texte: "Je prépare un diplôme bac + 2 à temps plein au lycée", reponse: "Le BTS au lycée" },
            { texte: "Ma formation ne me coûte rien et je suis salarié", reponse: "L'apprentissage", explication: "Si on te demande de payer pour un contrat d'apprentissage, méfie-toi." }
          ],
          bilan: "Emploi, BTS, apprentissage, concours : chacun a ses conditions."
        }]
      }
    }, {
      titre: "Mon calendrier jusqu'au bac", moteur: "quiz",
      config: { id: "orientation-1re-3-calendrier", questions: [
        { type: "ordre", enonce: "Remets les étapes dans l'ordre, de la Première au bac.",
          elements: ["PFMP de juin de Première", "Choix du parcours, à la rentrée de Terminale", "Ouverture des vœux sur Parcoursup (mi-janvier)", "Forum des anciens du lycée (février)", "Parcours personnalisé (" + A("parcoursPersoDuree") + ", " + A("parcoursPersoQuand").toLowerCase() + ")", "Épreuves écrites du bac (début juin)", "Oral de projet (fin juin)"],
          explication: "En " + A("sessionBac") + " : vœux du " + A("voeuxDebut") + " au " + A("voeuxFin") + ", écrits du " + A("ecritsDebut") + " au " + A("ecritsFin") + ", oral de projet à partir du " + A("oralProjet") + ". Les dates changent chaque année : vérifie-les avec ton professeur principal." }
      ] }
    }],
    retenir: [
      "Après le bac pro, il y a plusieurs bons chemins : emploi, BTS au lycée, apprentissage, concours, certificat de spécialisation.",
      "Dès la rentrée de Terminale, je choisis une direction : insertion ou poursuite d'études.",
      "L'alternance se cherche tôt, et mes résultats comptent pour le BTS.",
      "Ma direction se prépare maintenant, et elle peut encore bouger."
    ],
    ressource: {
      titre: "Mon chemin après le bac pro",
      intro: "Les chemins possibles et le calendrier de la Terminale.",
      blocs: [
        { type: "tableau", titre: "Les chemins", colonnes: ["Chemin", "Ce qu'il faut", "Quand s'en occuper", "Un avantage", "Une difficulté"], lignes: [
          ["Emploi", "Le diplôme, de bons stages", "Printemps de Terminale", "Payé tout de suite", "Sans diplôme supplémentaire"],
          ["BTS au lycée", "Un bon dossier, Parcoursup", "Janvier à mars de Terminale", "Un diplôme bac + 2", "Pas de salaire"],
          ["Apprentissage", "Trouver une entreprise", "Dès l'hiver de Terminale", "Diplôme et salaire", "Trouver l'entreprise"],
          ["Concours", "Une préparation", "Selon les dates des concours", "Un emploi stable", "Sélectif"],
          ["Certificat de spécialisation", "Un dossier", "Printemps de Terminale", "Se spécialiser en un an", "Peu de places"]
        ] },
        { type: "etapes", titre: "Le calendrier de la Terminale (" + A("annee") + ")", items: ["Rentrée : choix du parcours, insertion ou poursuite d'études", A("voeuxDebut") + " – " + A("voeuxFin") + " : vœux sur Parcoursup", "Février : forum des anciens du lycée", "Parcours personnalisé : " + A("parcoursPersoDuree") + ", " + A("parcoursPersoQuand").toLowerCase(), "Printemps : recherche d'alternance ou d'emploi", A("ecritsDebut") + " – " + A("ecritsFin") + " : épreuves écrites", "À partir du " + A("oralProjet") + " : oral de projet"] },
        { type: "texte", titre: "Ma direction et mes deux actions de l'été", texte: "Plutôt insertion / plutôt poursuite d'études / pas encore décidé. Avant septembre, je vais : 1. … 2. … Qui peut m'aider : …" }
      ]
    },
    traces: [{
      titre: "Ma direction pour la Terminale", moteur: "choisir",
      outil: { id: "direction-terminale", nom: "Ma direction pour la Terminale", description: "Plutôt insertion, plutôt poursuite d'études, ou pas encore décidé." },
      consigne: "Choisis la direction qui te ressemble aujourd'hui. Tu pourras en changer à la rentrée.",
      config: {
        cle: "direction-terminale", min: 1, max: 1, titre: "Ma direction", resume: "Ma direction",
        cartes: [
          { nom: "Plutôt insertion", ex: "Travailler après le bac" },
          { nom: "Plutôt poursuite d'études", ex: "BTS, apprentissage, certificat de spécialisation" },
          { nom: "Pas encore décidé", ex: "J'en parle à la rentrée avec mon professeur principal" }
        ]
      }
    }, {
      titre: "Mes deux actions de l'été", moteur: "choisir",
      outil: { id: "actions-ete", nom: "Mes actions avant la Terminale", description: "Deux choses à faire avant septembre pour préparer mon choix." },
      consigne: "Choisis deux actions, ou écris les tiennes.",
      config: {
        cle: "actions-ete", min: 2, max: 2, titre: "Mes actions", resume: "Mes actions", perso: true, persoAide: "Une autre action",
        cartes: [
          { nom: "Visiter un salon ou une porte ouverte", ex: "BTS, CFA, écoles" },
          { nom: "Recontacter un tuteur", ex: "Pour lui donner des nouvelles et demander conseil" },
          { nom: "Demander un rendez-vous au Psy-EN", ex: "Au lycée ou au CIO" },
          { nom: "Regarder les offres d'alternance de ma région", ex: "Avec La bonne alternance" },
          { nom: "Recontacter un professionnel noté dans mes contacts pros", ex: "Ce qu'il m'a appris, ce que je peux lui demander" },
          { nom: "Profiter de la PFMP de juin", ex: "Interroger mon tuteur sur son parcours" },
          { nom: "Consulter les fiches Onisep de deux formations", ex: "Ce qu'il faut, où elles se trouvent" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Le choix entre insertion et poursuite d'études se fait en fin de Terminale.", bonne: false, explication: "Il se fait dès la rentrée de Terminale : il se prépare en Première." },
      { type: "vf", enonce: "L'apprentissage demande de trouver une entreprise.", bonne: true, explication: "Sans entreprise, pas de contrat. D'où l'intérêt de chercher tôt." },
      { type: "vf", enonce: "Avec une mention bien ou très bien et sans proposition sur Parcoursup, je suis admis de droit dans un BTS du même domaine où j'ai candidaté.", bonne: true, explication: "C'est une règle de l'admission en BTS (Onisep)." },
      { type: "vf", enonce: "Si je travaille après le bac, je ne pourrai jamais reprendre d'études.", bonne: false, explication: "On peut reprendre une formation plus tard : apprentissage, formation continue, validation des acquis." }
    ],
    plusLoin: [
      { titre: "La bonne alternance", source: "Service public", url: "https://labonnealternance.apprentissage.beta.gouv.fr/guide-alternant/preparer-son-projet-en-alternance", description: "Préparer son projet en alternance et chercher une entreprise." },
      { titre: "Testez vos connaissances sur les études", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep/testez-vos-connaissances-sur-les-etudes", description: "Un quiz sur les études après le bac." },
      { titre: "Parcoursup", source: "Ministère de l'Enseignement supérieur", url: "https://www.parcoursup.gouv.fr", description: "Le calendrier officiel et l'offre de formation." }
    ],
    passerelles: ["cps-tle-2", "cps-tle-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Vote : insertion, poursuite d'études, ou pas encore décidé.", "Ne commente pas les votes."],
        ["5-20 min", "Activité", "Découvre les chemins de Kenza.", "Fait formuler ce que Kenza aurait aimé savoir."],
        ["20-30 min", "Activité", "Compare les chemins.", "Insiste sur les conditions de chaque chemin."],
        ["30-38 min", "Activité", "Remet le calendrier de la Terminale dans l'ordre.", "Donne les dates de l'année si elles sont connues au lycée."],
        ["38-48 min", "Trace", "Choisit sa direction et deux actions pour l'été.", "Rappelle que la direction peut bouger."],
        ["48-55 min", "Synthèse", "Second vote, « Je retiens », « Je vérifie ».", "Commente l'évolution des votes, pas les choix individuels."]
      ],
      vigilance: "À placer en mai, avant la PFMP de juin. Ne pas présenter la poursuite d'études comme la voie des « bons » élèves. « Pas encore décidé » est une réponse acceptable, à reprendre à la rentrée avec le professeur principal. Citer les BTS CIEL et MOS proposés à proximité, le lycée n'en ayant pas. Vérifier chaque année les dates de Parcoursup et l'organisation du parcours personnalisé, qui a changé plusieurs fois depuis 2024."
    }
  });
})();
