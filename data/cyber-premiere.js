/*
 * PILIER CYBER & ESPRIT CRITIQUE · PREMIÈRE (« Moi et les autres »)
 * Contenu validé (document « Pilier Cyber & esprit critique – Première »).
 * Trois séances de 55 minutes : Information, Identité et relations, Sécurité.
 * Points juridiques : loi du 9 juin 2023 (influence commerciale), loi du 2 mars 2022
 * (harcèlement scolaire), règlement européen sur les services numériques.
 * Ressources vérifiées en novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var DUREE = "55 min";

  function situation(titre, contexte, question, options, bilan) {
    var noeuds = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
    options.forEach(function (o) { noeuds.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }

  // ===================================================================
  // SÉANCE 1 · Pourquoi je vois ça ?
  // ===================================================================
  S.push({
    id: "cyber-1re-1", pilier: "cyber", niveau: "1re", num: 1, duree: DUREE,
    titre: "Pourquoi je vois ça ?",
    objectifCourt: "Algorithmes, bulles et publicité déguisée",
    objectif: "Comprendre comment un fil d'actualité est fabriqué, repérer la publicité déguisée et choisir des réglages pour reprendre la main.",
    rappel: { seance: "cyber-2nde-1", texte: "En Seconde, tu as appris à vérifier une information avant de la croire. Mais qui a décidé qu'elle arriverait sur ton écran ?" },
    aqcms: {
      pourquoi: "Mon fil d'actualité n'est pas neutre : il est calculé pour me garder le plus longtemps possible, et il est rempli de publicités.",
      apport: "Comprendre ce qu'on me montre et pourquoi, et choisir ce que je regarde.",
      ou: "Sur mes réseaux, face à un influenceur, quand je passe trop de temps sur mon téléphone.",
      lie: "Les images retouchées (EVARS Seconde, séance 1), info ou intox (Cyber Seconde, séance 1)."
    },
    accroche: "Deux élèves de la même classe ouvrent la même appli au même moment. Leurs fils n'ont presque rien en commun. Pourquoi ?",
    activites: [{
      titre: "Deux fils, deux mondes", moteur: "cartes",
      consigne: "Inès (elle est inventée) aime le foot et le maquillage. Yanis (inventé lui aussi) aime la mécanique et les jeux vidéo. Dans quel fil chaque publication a-t-elle le plus de chances d'arriver ?",
      config: {
        fin: "L'appli montre à chacun ce qui le retient le plus. Certaines publications arrivent chez tout le monde : parce qu'elles sont très populaires, ou parce qu'elles sont payées.",
        manches: [{
          type: "classer", titre: "Dans quel fil ?", categories: ["Inès", "Yanis", "Les deux"],
          cartes: [
            { texte: "Un tuto « maquillage de soirée en 5 minutes »", reponse: "Inès" },
            { texte: "Les buts du week-end en Ligue 1", reponse: "Inès" },
            { texte: "Restaurer une mobylette des années 80", reponse: "Yanis" },
            { texte: "La bande-annonce d'un nouveau jeu vidéo", reponse: "Yanis" },
            { texte: "Une publicité pour une boisson énergisante", reponse: "Les deux", explication: "Une marque a payé pour toucher tous les 15-20 ans." },
            { texte: "La vidéo la plus vue de la journée en France", reponse: "Les deux", explication: "Ce qui est très populaire est montré à presque tout le monde." },
            { texte: "Un crash de voiture spectaculaire", reponse: "Yanis", explication: "Et peut-être Inès aussi : les contenus choquants retiennent l'attention de tous." },
            { texte: "Une influenceuse qui teste une crème « miracle »", reponse: "Inès" }
          ],
          bilan: "Le fil est calculé pour chacun : on ne voit jamais le même monde."
        }]
      }
    }, {
      titre: "Ce que l'appli remarque", moteur: "quiz",
      consigne: "L'algorithme apprend de tout ce que tu fais. Vrai ou faux ?",
      config: { id: "cyber-1re-1-algo", questions: [
        { type: "vf", enonce: "Si je regarde une vidéo jusqu'au bout sans liker, l'appli ne le sait pas.", bonne: false, explication: "Le temps passé sur une vidéo est l'un des signaux les plus forts." },
        { type: "vf", enonce: "Revoir une vidéo deux fois, ou faire une pause dessus, compte aussi.", bonne: true, explication: "Tout ce qui montre ton intérêt est enregistré." },
        { type: "vf", enonce: "Plus je regarde un type de contenu, plus on m'en montre, et moins je vois le reste.", bonne: true, explication: "C'est ce qu'on appelle une bulle de filtres." },
        { type: "vf", enonce: "Le but principal d'un fil est de m'informer le mieux possible.", bonne: false, explication: "Son but est de te garder le plus longtemps possible, pour te montrer plus de publicités." }
      ] }
    }, {
      titre: "Sponsorisé ou pas ?", moteur: "cartes",
      consigne: "Ces publications d'influenceurs sont inventées. Est-ce une publicité ? Cherche l'indice.",
      config: {
        fin: "Depuis la loi du 9 juin 2023, un influenceur doit écrire « Publicité » ou « Collaboration commerciale » quand il est payé ou reçoit un produit, et « Image retouchée » ou « Image virtuelle » quand le corps a été modifié.",
        manches: [{
          type: "classer", titre: "Publicité ?", categories: ["Publicité", "Pas de publicité visible"],
          cartes: [
            { texte: "« Mon avis sur ces écouteurs » avec la mention « Collaboration commerciale »", reponse: "Publicité", explication: "La mention est là : c'est honnête." },
            { texte: "« -20 % avec mon code LÉA20 ! »", reponse: "Publicité", explication: "Un code promo veut dire que l'influenceur touche une commission. La mention devrait apparaître." },
            { texte: "« Lien en bio pour avoir la même ! »", reponse: "Publicité", explication: "Un lien d'affiliation rapporte de l'argent à chaque achat." },
            { texte: "« On m'a offert ce sac, je l'adore »", reponse: "Publicité", explication: "Un produit offert est une forme de paiement : la mention est obligatoire." },
            { texte: "Une vidéo de randonnée en famille, sans produit ni marque", reponse: "Pas de publicité visible" },
            { texte: "Un tuto cuisine avec des ingrédients du marché, sans marque", reponse: "Pas de publicité visible" }
          ],
          bilan: "Code promo, lien en bio, produit offert : c'est de la publicité. Sans mention, je reste prudent."
        }]
      }
    }, {
      titre: "Reprendre la main", moteur: "choisir",
      consigne: "Choisis deux réglages que tu vas essayer cette semaine.",
      config: {
        cle: "cyber-reglages-fil", max: 2, titre: "Réglages", resume: "Mes deux réglages",
        cartes: [
          { nom: "Signaler « Pas intéressé »", ex: "Sur les contenus que je ne veux plus voir" },
          { nom: "Effacer mon historique de visionnage", ex: "Pour repartir de zéro" },
          { nom: "Activer un fil non personnalisé", ex: "Les grandes plateformes doivent le proposer (règlement européen)" },
          { nom: "Couper la lecture automatique", ex: "Pour choisir la vidéo suivante" },
          { nom: "Régler un rappel de temps d'écran", ex: "Dans l'appli ou le téléphone" },
          { nom: "Suivre des comptes variés", ex: "Pour sortir de ma bulle" }
        ]
      }
    }],
    retenir: [
      "Un fil n'est pas neutre : il est calculé pour me garder le plus longtemps possible.",
      "Ce que je regarde compte plus que ce que je like.",
      "Une publicité d'influenceur doit être signalée comme telle ; sans mention, je reste prudent.",
      "Je peux agir sur mon fil : il existe des réglages, et je peux choisir ce que je suis."
    ],
    ressource: {
      titre: "Mon fil sous contrôle",
      intro: "Une fiche pour repérer la publicité déguisée et reprendre la main sur ton fil.",
      blocs: [
        { type: "liste", titre: "Ce qui nourrit l'algorithme", items: ["Le temps passé sur chaque vidéo", "Les revisionnages et les pauses", "Les likes, partages, commentaires", "Les abonnements et les recherches", "La localisation"] },
        { type: "texte", titre: "La bulle de filtres", texte: "Plus je regarde un type de contenu, plus on m'en montre, et moins je vois le reste. Je finis par croire que tout le monde pense ou vit comme dans mon fil." },
        { type: "tableau", titre: "Repérer une publicité déguisée", colonnes: ["Indice", "Ce que ça veut dire"], lignes: [
          ["« Publicité », « Collaboration commerciale »", "L'influenceur est payé : la mention est obligatoire (loi du 9 juin 2023)"],
          ["Code promo", "Il touche une commission sur les ventes"],
          ["Lien en bio, lien d'affiliation", "Il gagne de l'argent à chaque achat"],
          ["Produit offert", "C'est aussi une forme de paiement"],
          ["« Image retouchée », « Image virtuelle »", "Le corps a été modifié ou créé par ordinateur"]
        ] },
        { type: "liste", titre: "Six réglages pour reprendre la main", items: ["Signaler « Pas intéressé »", "Effacer l'historique de visionnage", "Activer un fil non personnalisé", "Couper la lecture automatique", "Régler un rappel de temps d'écran", "Suivre volontairement des comptes variés"] }
      ]
    },
    traces: [{
      titre: "Mon fil sous la loupe", moteur: "carnet",
      outil: { id: "fil-loupe", nom: "Mon fil sous la loupe", description: "Ce qui domine mon fil, ce que je veux y voir, mes réglages." },
      config: {
        cle: "fil-loupe", titreDoc: "Mon fil sous la loupe",
        intro: "Pour toi seul : rien n'est envoyé, tout reste sur ton appareil.",
        champs: [
          { id: "domine", label: "Ce qui domine mon fil cette semaine", multi: true },
          { id: "envie", label: "Ce que j'aimerais y voir davantage", multi: true },
          { id: "reglages", label: "Les deux réglages que je choisis" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Quel est l'un des signaux les plus forts pour l'algorithme ?", options: ["Le nombre de mes abonnés", "Le temps que je passe sur une vidéo", "La couleur de mon profil"], bonne: 1, explication: "Même sans liker, regarder longtemps dit à l'appli que ça t'intéresse." },
      { type: "ouverte", enonce: "Qu'est-ce qu'une bulle de filtres ?", modele: "Plus je regarde un type de contenu, plus on m'en montre, et moins je vois le reste : mon fil m'enferme dans ce que j'aime déjà." },
      { type: "qcm", enonce: "Un influenceur reçoit gratuitement un produit et en parle. Que doit-il écrire ?", options: ["Rien, puisqu'il n'est pas payé", "« Publicité » ou « Collaboration commerciale »", "« Avis personnel »"], bonne: 1, explication: "Un produit offert est une forme de paiement : la mention est obligatoire." },
      { type: "ouverte", enonce: "Cite un réglage qui aide à diversifier son fil.", modele: "Activer un fil non personnalisé, effacer l'historique, signaler « Pas intéressé », suivre des comptes variés." }
    ],
    plusLoin: [
      { titre: "5 conseils pour protéger ma vie privée sur les réseaux sociaux", source: "CNIL", url: "https://www.cnil.fr/fr/5-conseils-pour-proteger-ma-vie-privee-sur-les-reseaux-sociaux", description: "Les réglages essentiels pour limiter ce que les plateformes savent de toi." },
      { titre: "AFP Factuel", source: "AFP", url: "https://factuel.afp.com", description: "Le service de vérification de l'AFP : des rumeurs virales démêlées pas à pas." }
    ],
    passerelles: ["evars-2nde-1"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Deux élèves, deux fils différents : pourquoi ?", "Fait émerger l'idée d'un fil calculé."],
        ["5-15 min", "Activité", "Range des publications dans le fil d'Inès, de Yanis, ou des deux.", "Explique pourquoi certaines arrivent chez tout le monde : popularité, publicité."],
        ["15-25 min", "Activité", "Répond au vrai ou faux « Ce que l'appli remarque ».", "Nomme la bulle de filtres."],
        ["25-40 min", "Activité", "Repère la publicité dans des publications d'influenceurs inventées.", "Présente les mentions obligatoires de la loi du 9 juin 2023."],
        ["40-50 min", "Activité", "Choisit deux réglages pour reprendre la main.", "Montre où se trouvent ces réglages, sans regarder le fil d'un élève."],
        ["50-55 min", "Trace", "Remplit « Mon fil sous la loupe » et répond à « Je vérifie ».", "Rappelle que la trace reste sur l'appareil."]
      ],
      vigilance: "On ne demande jamais aux élèves de montrer leur fil. Influenceurs et publications sont inventés. On évite les exemples à enjeu politique."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Mon image, celle des autres
  // ===================================================================
  S.push({
    id: "cyber-1re-2", pilier: "cyber", niveau: "1re", num: 2, duree: DUREE,
    titre: "Mon image, celle des autres",
    objectifCourt: "Droit à l'image, cyberharcèlement, témoin",
    objectif: "Savoir ce qu'on a le droit de publier sur les autres, reconnaître le moment où une blague devient du harcèlement, et savoir agir quand on en est témoin.",
    rappel: { seance: "cyber-2nde-2", texte: "En Seconde, tu as enquêté sur l'empreinte numérique de Lina, ce qu'elle laissait sur elle-même. Aujourd'hui, on retourne la question : qu'est-ce que tu publies sur les autres, et qu'est-ce qu'ils publient sur toi ?" },
    aqcms: {
      pourquoi: "Une photo ou une blague publiée sur quelqu'un peut le blesser durablement, et certaines publications sont des délits.",
      apport: "Savoir ce que je peux publier, et savoir agir quand quelqu'un est pris pour cible.",
      ou: "Dans le groupe de classe, sur mes réseaux, en soirée, en sortie scolaire.",
      lie: "Le consentement (EVARS Première, séance 2), gérer un conflit (CPS Première, séance 5)."
    },
    accroche: "Une photo prise en dix secondes, partagée en une seconde, peut circuler pendant des années. Qui décide de ce qu'on publie sur toi ?",
    activites: [{
      titre: "Je poste ou pas ?", moteur: "cartes",
      consigne: "Chacun a droit à son image et à sa vie privée. Pour chaque situation inventée, que fais-tu ?",
      config: {
        fin: "Avant de publier quelqu'un, je lui demande son accord. Filmer ou diffuser quelqu'un dans un lieu privé sans son accord, ou diffuser un montage sans son accord, est un délit.",
        manches: [{
          type: "classer", titre: "Je publie ?", categories: ["Oui", "Oui, si la personne est d'accord", "Non"],
          cartes: [
            { texte: "La photo de groupe d'une soirée", reponse: "Oui, si la personne est d'accord", explication: "Il faut l'accord de chaque personne reconnaissable." },
            { texte: "Un camarade endormi dans le car de la sortie", reponse: "Non", explication: "Il ne peut pas être d'accord : il dort. C'est souvent le début d'une moquerie." },
            { texte: "La capture d'écran d'une conversation privée", reponse: "Non", explication: "Une conversation privée reste privée. La diffuser trahit la confiance, et peut être puni." },
            { texte: "Une vidéo d'un professeur en plein cours", reponse: "Non", explication: "Filmer et diffuser quelqu'un sans son accord porte atteinte à son droit à l'image." },
            { texte: "Un montage avec le visage d'un camarade sur un corps ridicule", reponse: "Non", explication: "Diffuser un montage sans l'accord de la personne est un délit." },
            { texte: "Une story avec ton meilleur ami, qui a dit oui", reponse: "Oui" },
            { texte: "La photo de ton plat au restaurant", reponse: "Oui" },
            { texte: "Une photo de classe officielle", reponse: "Oui, si la personne est d'accord", explication: "Même sur une photo de classe, chacun peut refuser d'être publié." }
          ],
          bilan: "La règle : je demande avant de publier quelqu'un."
        }]
      }
    }, {
      titre: "De la blague au harcèlement", moteur: "scenario",
      consigne: "Noah est inventé, mais son histoire est fréquente. À chaque étape, tu es membre du groupe de classe : que fais-tu ?",
      config: {
        id: "cyber-1re-2",
        cas: [{
          titre: "L'histoire de Noah",
          depart: "a",
          noeuds: {
            a: { contexte: "Étape 1. Quelqu'un poste dans le groupe de classe une photo de Noah avec sa nouvelle coupe : « Mdr il s'est fait coiffer par sa grand-mère ». Plusieurs réagissent avec des émojis qui rient.", question: "Que fais-tu ?", choix: [
              { texte: "J'ajoute un émoji, c'est juste une blague.", ok: false, retour: "Chaque réaction encourage l'auteur et montre à Noah que tout le monde rit de lui." },
              { texte: "Je ne réagis pas, et j'écris à Noah en privé : « T'inquiète, elle te va bien ta coupe. »", vers: "b", ok: true, retour: "Ne pas relayer et soutenir en privé : deux gestes qui comptent." }
            ] },
            b: { contexte: "Étape 2. Les jours suivants, des stickers avec la tête de Noah circulent. Puis quelqu'un lance un sondage : « Le plus ridicule de la classe ? » Noah arrive en tête.", question: "Que fais-tu ?", choix: [
              { texte: "Je vote, tout le monde le fait.", ok: false, retour: "Voter, c'est participer. Le harcèlement peut venir de plusieurs personnes qui n'écrivent qu'une fois chacune." },
              { texte: "Je fais des captures d'écran (date, pseudo, contenu) et je signale le sondage.", vers: "c", ok: true, retour: "Les captures serviront de preuves. Le signalement peut faire retirer le contenu." }
            ] },
            c: { contexte: "Étape 3. Un faux compte au nom de Noah apparaît, avec ses photos et des messages qu'il n'a jamais écrits. Noah ne vient plus en cours depuis deux jours.", question: "Que fais-tu ?", choix: [
              { texte: "Ce n'est pas mes affaires, je ne veux pas d'histoires.", ok: false, retour: "Noah est en danger. Tu peux agir sans t'exposer : un adulte ou le 3018 peuvent intervenir discrètement." },
              { texte: "J'en parle à un adulte du lycée (CPE, professeur principal) et je donne mes captures, ou j'appelle le 3018.", vers: "fin", ok: true, retour: "C'est exactement ce qu'il faut faire. Tu n'es pas une « balance » : tu protèges quelqu'un." }
            ] },
            fin: { fin: { ok: true, titre: "À retenir :", texte: "Le cyberharcèlement, ce sont des messages répétés, ou envoyés par plusieurs personnes même si chacune n'a écrit qu'une fois. Liker ou partager, c'est y participer. Le harcèlement scolaire est un délit depuis la loi du 2 mars 2022." } }
          }
        }]
      }
    }, {
      titre: "Le témoin qui agit", moteur: "quiz",
      consigne: "Il n'y a pas de bon ordre : chacun repère le geste qu'il est prêt à faire.",
      config: { id: "cyber-1re-2-temoin", questions: [
        { type: "ordre", libre: true, aide: "Touche les gestes du plus facile au plus difficile pour toi.",
          elements: ["Ne pas relayer ni liker", "Envoyer un message de soutien en privé à la personne visée", "Faire des captures d'écran (date, pseudo, contenu)", "Signaler le contenu sur la plateforme", "En parler à un adulte ou appeler le 3018"],
          explication: "Chaque geste compte. Le premier, ne pas relayer, est à la portée de tous. Et si tu es la cible : ne réponds pas, bloque, garde les preuves, parles-en. Le 3018 peut faire retirer un contenu par les plateformes." }
      ] }
    }],
    retenir: [
      "Avant de publier quelqu'un, je lui demande son accord.",
      "Une blague qui se répète ou que tout le monde reprend peut devenir du harcèlement.",
      "Le témoin a du pouvoir : ne pas relayer, soutenir, signaler.",
      "3018 : gratuit, anonyme, confidentiel, aussi en appli."
    ],
    ressource: {
      titre: "Mon image, celle des autres",
      intro: "Une fiche pour publier sans blesser, et agir face au cyberharcèlement.",
      blocs: [
        { type: "etapes", titre: "Avant de publier quelqu'un : trois questions", items: ["Est-ce que la personne est d'accord ?", "Est-ce que je publierais la même chose sur moi ?", "Est-ce que ça peut la blesser ou se retourner contre elle ?"] },
        { type: "liste", titre: "Ce que dit la loi", items: ["Chacun a droit à son image et au respect de sa vie privée", "Filmer ou diffuser quelqu'un dans un lieu privé sans son accord est un délit", "Diffuser un montage sans l'accord de la personne est un délit", "Le harcèlement scolaire, y compris en ligne, est un délit depuis la loi du 2 mars 2022"] },
        { type: "tableau", titre: "Cyberharcèlement : que faire ?", colonnes: ["Je suis témoin", "Je suis la cible"], lignes: [
          ["Je ne relaie pas, je ne like pas", "Je ne réponds pas"],
          ["Je soutiens la personne en privé", "Je bloque le compte"],
          ["Je fais des captures d'écran", "Je garde les preuves (captures avec date et pseudo)"],
          ["Je signale sur la plateforme", "Je signale sur la plateforme"],
          ["J'en parle à un adulte ou au 3018", "J'en parle à un adulte ou au 3018"]
        ] },
        { type: "texte", titre: "Le 3018", texte: "Gratuit, anonyme et confidentiel, tous les jours de 9 h à 23 h, par téléphone, tchat ou appli. Il peut faire retirer un contenu par les plateformes." }
      ]
    },
    traces: [{
      titre: "Ma charte pour le groupe de classe", moteur: "carnet",
      outil: { id: "charte-groupe", nom: "Ma charte pour le groupe de classe", description: "Trois règles pour notre groupe, et mon geste de témoin." },
      config: {
        cle: "charte-groupe", titreDoc: "Ma charte pour le groupe de classe",
        intro: "Tes idées restent sur ton appareil. Tu peux les proposer à ta classe si tu le souhaites.",
        champs: [
          { id: "regle1", label: "Règle 1" },
          { id: "regle2", label: "Règle 2" },
          { id: "regle3", label: "Règle 3" },
          { id: "geste", label: "Le geste de témoin que je me sens capable de faire" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Si la photo est prise dans un lieu public, je peux la publier sans demander.", bonne: false, explication: "Une personne reconnaissable garde son droit à l'image : je demande avant de publier." },
      { type: "vf", enonce: "Un seul message ne peut jamais compter dans un harcèlement.", bonne: false, explication: "Quand plusieurs personnes envoient chacune un message, l'ensemble est du harcèlement, et chacun en est responsable." },
      { type: "vf", enonce: "Liker un message moqueur, ce n'est rien.", bonne: false, explication: "Liker encourage l'auteur et participe à la diffusion." },
      { type: "vf", enonce: "Le 3018 peut faire supprimer un contenu.", bonne: true, explication: "Il travaille directement avec les plateformes pour faire retirer les contenus." }
    ],
    plusLoin: [
      { titre: "Le 3018, numéro national contre le harcèlement et les violences numériques", source: "Caf.fr", url: "https://caf.fr/allocataires/vies-de-famille/articles/3018-le-numero-d-e-enfance-une-aide-concrete-contre-le-cyberharcelement-et-les-violences-en-ligne", description: "Par téléphone, tchat ou appli, gratuit et anonyme." },
      { titre: "Non au harcèlement", source: "Ministère de l'Éducation nationale", url: "https://www.education.gouv.fr/non-au-harcelement", description: "Comprendre, reconnaître et agir contre le harcèlement." },
      { titre: "Droit à l'image et respect de la vie privée", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32103", description: "Ce que dit la loi sur la publication de l'image d'une personne." }
    ],
    passerelles: ["evars-1re-2", "cps-1re-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Qui décide de ce qu'on publie sur toi ?", "Fait le lien avec l'enquête sur Lina en Seconde."],
        ["5-17 min", "Activité", "Range huit situations : oui, oui si d'accord, non.", "Pose la règle du droit à l'image et de la vie privée."],
        ["17-32 min", "Activité", "Suit l'histoire de Noah et choisit à chaque étape.", "Nomme les repères : répétition, effet de groupe, délit depuis 2022."],
        ["32-45 min", "Activité", "Range les gestes du témoin du plus facile au plus difficile pour lui.", "Valorise chaque geste, même le plus simple."],
        ["45-55 min", "Trace", "Rédige sa charte pour le groupe de classe et répond à « Je vérifie ».", "Présente le 3018 et les adultes ressources du lycée."]
      ],
      vigilance: "Groupes, photos et situations sont inventés : on ne projette jamais une vraie capture d'un groupe de l'établissement. Si la séance fait écho à une situation réelle dans la classe, on ne la traite pas en collectif : on en parle ensuite avec le CPE et l'équipe, selon le protocole de l'établissement contre le harcèlement."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Arnaques et manipulation
  // ===================================================================
  S.push({
    id: "cyber-1re-3", pilier: "cyber", niveau: "1re", num: 3, duree: DUREE,
    titre: "Arnaques et manipulation",
    objectifCourt: "Déjouer les arnaques et la pression",
    objectif: "Reconnaître les leviers qu'utilisent les arnaqueurs, déjouer les arnaques les plus courantes chez les jeunes et savoir réagir quand on fait pression sur soi.",
    rappel: { seance: "cyber-2nde-3", texte: "En Seconde, tu as appris à repérer un faux message et à protéger tes comptes. Mais les arnaqueurs ont compris qu'il est plus facile de tromper une personne que de pirater un mot de passe. Ils ne cassent pas la porte : ils te demandent poliment la clé." },
    aqcms: {
      pourquoi: "Les arnaques visent de plus en plus les jeunes : faux conseillers, faux concours, vol de compte, chantage.",
      apport: "Reconnaître une manipulation à temps, et savoir qui appeler si je me suis fait avoir.",
      ou: "Au téléphone, sur les réseaux, sur les sites de vente d'occasion, face à une offre d'argent facile.",
      lie: "Mon intimité en ligne (EVARS Seconde, séance 3), s'affirmer et dire non (CPS Seconde, séance 5), les arnaques financières (EDUCFI)."
    },
    accroche: "Un appel : « Bonjour, service fraude de votre banque. Une opération suspecte vient d'avoir lieu sur votre compte. Pour l'annuler, je vais vous envoyer un code… » Tu fais quoi ?",
    activites: [{
      titre: "Les leviers de la manipulation", moteur: "cartes",
      consigne: "L'ingénierie sociale, c'est faire agir quelqu'un avant qu'il ait le temps de réfléchir. Quel levier chaque message utilise-t-il ?",
      config: {
        fin: "Urgence, peur, autorité, cadeau, confiance : dès qu'un message joue là-dessus, je ralentis.",
        manches: [{
          type: "classer", titre: "Quel levier ?", categories: ["Urgence", "Peur", "Autorité", "Cadeau", "Confiance"],
          cartes: [
            { texte: "« Dans une heure, ton compte sera supprimé. »", reponse: "Urgence" },
            { texte: "« Offre valable encore 10 minutes seulement ! »", reponse: "Urgence" },
            { texte: "« Des vidéos de toi circulent, clique pour voir. »", reponse: "Peur" },
            { texte: "« Vous avez une amende impayée, régularisez sous peine de poursuites. »", reponse: "Peur" },
            { texte: "« Ici la gendarmerie nationale, nous avons besoin de vos identifiants. »", reponse: "Autorité", explication: "Les forces de l'ordre ne demandent jamais tes identifiants par message." },
            { texte: "« Service fraude de votre banque, je vais vous guider. »", reponse: "Autorité" },
            { texte: "« Tu as gagné un iPhone ! Paie juste les frais de port. »", reponse: "Cadeau" },
            { texte: "« Gagne 300 € en une journée, sans rien faire. »", reponse: "Cadeau" },
            { texte: "« Salut c'est moi, j'ai changé de numéro, tu peux m'aider ? »", reponse: "Confiance", explication: "Vérifie en appelant l'ancien numéro ou en posant une question que seul ton ami connaît." },
            { texte: "« Je t'ai envoyé un code par erreur, tu peux me le renvoyer ? »", reponse: "Confiance" }
          ],
          bilan: "Plus on me presse, plus je prends le temps."
        }]
      }
    }, {
      titre: "Arnaque ou pas ?", moteur: "scenario",
      consigne: "Six situations fréquentes chez les 15-20 ans. Choisis la bonne réaction.",
      config: {
        id: "cyber-1re-3",
        cas: [
          situation("Le faux conseiller bancaire", "Un « conseiller » de ta banque t'appelle. Il connaît ton nom et ta banque. Il te demande de valider une opération sur ton appli « pour l'annuler ».", "Que fais-tu ?", [
            ["Je valide : il connaît mon nom, c'est forcément ma banque.", false, "Les escrocs achètent ces informations après des fuites de données. On ne valide jamais une opération pour l'annuler."],
            ["Je raccroche et j'appelle ma banque au numéro habituel (au dos de ma carte).", true, "Oui : tu reprends la main en appelant toi-même."],
            ["Je lui donne le code reçu par SMS pour qu'il vérifie.", false, "Une banque ne demande jamais un code par téléphone."]
          ], "Une banque ne demande jamais de valider une opération ou de donner un code par téléphone. Je raccroche et je rappelle moi-même."),
          situation("Le QR code sur l'affiche", "Sur un parcmètre, un autocollant avec un QR code : « Payez ici plus facilement ». Il mène à une page de paiement.", "Que fais-tu ?", [
            ["Je scanne et je paie, c'est pratique.", false, "Ces autocollants sont parfois collés par des escrocs par-dessus les vrais : c'est l'arnaque au QR code."],
            ["Je paie par l'appli officielle ou directement à la machine.", true, "Oui : un QR code collé n'est pas une source fiable."]
          ], "Un QR code peut mener n'importe où. Avant de payer, je vérifie l'adresse du site, ou je passe par l'appli officielle."),
          situation("L'acheteur trop pressé", "Tu vends ta console sur un site d'occasion. Un acheteur veut te payer « par un lien sécurisé » qu'il t'envoie par message.", "Que fais-tu ?", [
            ["Je clique et je remplis mes coordonnées bancaires pour recevoir l'argent.", false, "Pour recevoir de l'argent, on n'a jamais besoin de donner son code ou sa date d'expiration. C'est un faux site."],
            ["Je refuse et je reste sur le paiement prévu par le site de vente.", true, "Oui : les arnaqueurs cherchent à te faire sortir de la plateforme."]
          ], "Je reste sur le paiement de la plateforme, et je ne clique pas sur un lien envoyé par un inconnu."),
          situation("L'argent facile", "Sur un réseau, un message : « Gagne 300 € en prêtant ton compte bancaire une journée. Tu reçois un virement, tu le renvoies, tu gardes ta part. »", "Que fais-tu ?", [
            ["J'accepte une fois, ce n'est pas grave.", false, "C'est faire la « mule » : faire passer de l'argent volé. C'est un délit, même une seule fois, et c'est toi que la police retrouvera."],
            ["Je refuse, je bloque, et j'en parle à un adulte.", true, "Oui. Ton compte bancaire ne se prête jamais."]
          ], "Prêter son compte bancaire, c'est risquer des poursuites pour blanchiment. Si tu l'as déjà fait, parles-en vite à un adulte et à ta banque : tu es souvent toi-même victime."),
          situation("Le faux concours", "Un compte qui ressemble à celui d'un influenceur t'écrit : « Bravo, tu as gagné mon concours ! Paie juste 2,99 € de frais de port ici. »", "Que fais-tu ?", [
            ["Je paie, ce n'est que 2,99 €.", false, "Le but est d'obtenir ta carte bancaire, puis de faire des prélèvements bien plus gros."],
            ["Je vérifie sur le vrai compte de l'influenceur, et je ne paie rien.", true, "Oui : un vrai gagnant ne paie jamais de frais."]
          ], "Un vrai concours ne demande jamais de payer pour recevoir son lot."),
          situation("Le code envoyé « par erreur »", "Un ami t'écrit sur ta messagerie : « Je t'ai envoyé un code par erreur, tu peux me le renvoyer stp ? » Tu viens de recevoir un SMS avec un code.", "Que fais-tu ?", [
            ["Je le renvoie, c'est mon ami.", false, "Le compte de ton ami a été piraté. Avec ce code, le pirate prend aussi le tien."],
            ["Je ne donne pas le code et j'appelle mon ami pour vérifier.", true, "Oui. Un code de vérification ne se transmet à personne, même à un ami."]
          ], "Un code reçu par SMS ne se donne à personne. Je préviens mon ami par un autre moyen : son compte est sans doute piraté.")
        ]
      }
    }, {
      titre: "Quand on fait pression sur moi", moteur: "cartes",
      consigne: "Une personne rencontrée en ligne menace de diffuser des photos si on ne paie pas. Pour chaque geste : je le fais, ou je ne le fais pas ?",
      config: {
        fin: "La honte doit changer de camp : la victime n'est jamais en faute. Le coupable, c'est celui qui menace.",
        manches: [{
          type: "classer", titre: "Face au chantage", categories: ["Je le fais", "Je ne le fais pas"],
          cartes: [
            { texte: "Je paie pour que ça s'arrête.", reponse: "Je ne le fais pas", explication: "Ça ne s'arrête presque jamais : la personne en redemande." },
            { texte: "Je ne réponds plus.", reponse: "Je le fais" },
            { texte: "Je garde les preuves : captures, pseudo, dates.", reponse: "Je le fais" },
            { texte: "Je supprime tout et je n'en parle à personne.", reponse: "Je ne le fais pas", explication: "Tu perdrais les preuves et tu resterais seul avec la menace." },
            { texte: "Je bloque le compte et je le signale.", reponse: "Je le fais" },
            { texte: "J'en parle à un adulte de confiance, j'appelle le 3018.", reponse: "Je le fais", explication: "Le 3018 aide gratuitement et peut faire retirer les contenus." },
            { texte: "J'envoie d'autres photos pour gagner du temps.", reponse: "Je ne le fais pas" },
            { texte: "Je signale sur Pharos (internet-signalement.gouv.fr).", reponse: "Je le fais" }
          ],
          bilan: "Je ne paie pas, je garde les preuves, je bloque, j'en parle."
        }]
      }
    }],
    retenir: [
      "Urgence, peur, cadeau, autorité : quand un message joue là-dessus, je ralentis.",
      "Un code reçu par SMS ne se donne à personne.",
      "Prêter son compte bancaire, même une fois, c'est risquer des poursuites.",
      "En cas de chantage : je ne paie pas, je garde les preuves, j'en parle."
    ],
    ressource: {
      titre: "Déjouer les arnaques",
      intro: "Une fiche pour reconnaître la manipulation et savoir qui appeler.",
      blocs: [
        { type: "tableau", titre: "Les cinq leviers de la manipulation", colonnes: ["Levier", "Exemple"], lignes: [
          ["Urgence", "« Dans une heure, ton compte sera supprimé. »"],
          ["Peur", "« Des vidéos de toi circulent. »"],
          ["Autorité", "Faux policier, faux conseiller bancaire"],
          ["Cadeau", "« Tu as gagné ! Paie juste les frais. »"],
          ["Confiance", "Un faux ami, un « code envoyé par erreur »"]
        ] },
        { type: "liste", titre: "Les règles d'or", items: ["Je ne donne jamais un code reçu par SMS", "Je ne valide jamais une opération « pour l'annuler »", "Je raccroche et je rappelle moi-même le numéro officiel", "Je ne prête jamais mon compte bancaire", "Je reste sur le paiement de la plateforme de vente"] },
        { type: "tableau", titre: "Victime d'une arnaque : qui contacter ?", colonnes: ["Situation", "Qui contacter"], lignes: [
          ["J'ai donné ma carte ou validé un paiement", "Ma banque, tout de suite, pour faire opposition"],
          ["Achat frauduleux avec ma carte", "Perceval, le service de signalement en ligne du ministère de l'Intérieur"],
          ["SMS ou appel suspect", "33700 (envoi gratuit)"],
          ["Arnaque en ligne, compte piraté", "17Cyber et Cybermalveillance.gouv.fr"],
          ["Chantage, harcèlement", "3018, un adulte de confiance, Pharos"]
        ] }
      ]
    },
    traces: [{
      titre: "Mon réflexe anti-arnaque", moteur: "carnet",
      outil: { id: "reflexe-anti-arnaque", nom: "Mon réflexe anti-arnaque", description: "Les trois questions que je me pose avant de cliquer, payer ou donner un code." },
      config: {
        cle: "reflexe-anti-arnaque", titreDoc: "Mon réflexe anti-arnaque",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "questions", label: "Les trois questions que je me pose avant de cliquer, de payer ou de donner un code", multi: true },
          { id: "personne", label: "La personne à qui j'en parle si j'ai un doute" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "« Offre valable encore 10 minutes seulement ! » Quel levier ?", options: ["L'urgence", "L'autorité", "La confiance"], bonne: 0, explication: "On veut t'empêcher de prendre le temps de réfléchir." },
      { type: "qcm", enonce: "Que te demande souvent un faux conseiller bancaire ?", options: ["De passer en agence", "De valider une opération ou de donner un code", "De changer de banque"], bonne: 1, explication: "Une vraie banque ne le demande jamais par téléphone." },
      { type: "ouverte", enonce: "Pourquoi ne faut-il jamais prêter son compte bancaire ?", modele: "Parce qu'on fait passer de l'argent volé (on devient une « mule ») : c'est un délit, et c'est le titulaire du compte qui est poursuivi." },
      { type: "ouverte", enonce: "Quel est le bon réflexe face à un chantage en ligne ?", modele: "Ne pas payer, ne plus répondre, garder les preuves, bloquer et signaler, en parler à un adulte ou au 3018." }
    ],
    plusLoin: [
      { titre: "Fraude au faux conseiller bancaire : la fiche réflexe", source: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/medias/2023/01/240208_FicheReflexe_FraudeFauxConseillerBancaire.pdf", description: "Reconnaître l'arnaque et réagir." },
      { titre: "17Cyber", source: "Ministère de l'Intérieur et Cybermalveillance.gouv.fr", url: "https://www.17cyber.gouv.fr", description: "Le guichet unique pour les victimes de cybermalveillance : diagnostic, conseils, mise en relation." },
      { titre: "Spam, hameçonnage, arnaques : signaler pour agir", source: "CNIL", url: "https://www.cnil.fr/fr/spam-phishing-arnaques-signaler-pour-agir", description: "Où signaler chaque type de message frauduleux." }
    ],
    passerelles: ["evars-2nde-3", "cps-2nde-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Écoute l'appel du faux service fraude. Que ferait-il ?", "Fait émerger : il ne casse pas la porte, il demande la clé."],
        ["5-15 min", "Activité", "Classe dix messages selon leur levier.", "Nomme l'ingénierie sociale."],
        ["15-35 min", "Activité", "Joue six situations « Arnaque ou pas ? ».", "Insiste sur la mule financière : un délit, même une seule fois."],
        ["35-50 min", "Activité", "Trie les gestes face au chantage.", "Reste sans aucun détail ; rappelle que la victime n'est jamais en faute."],
        ["50-55 min", "Trace", "Remplit « Mon réflexe anti-arnaque » et répond à « Je vérifie ».", "Présente les contacts de la fiche."]
      ],
      vigilance: "La situation de chantage reste évoquée sans aucun détail. Si un élève révèle un chantage à caractère sexuel : l'écouter, ne pas regarder les images, informer le chef d'établissement le jour même, orienter vers le 3018. Un élève qui dit avoir prêté son compte est orienté vers un adulte et sa banque, sans être jugé devant la classe."
    }
  });
})();
