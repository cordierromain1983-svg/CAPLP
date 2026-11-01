/*
 * PILIER CYBER & ESPRIT CRITIQUE · TERMINALE (« Moi et le monde »)
 * Contenu validé (document « Pilier Cyber & esprit critique – Terminale »).
 * Trois séances de 55 minutes : Information (IA générative), Identité numérique pro,
 * Cybersécurité en stage et au travail (avec situations par filière et bilan du pilier).
 * Points juridiques : règlement européen sur l'IA (transparence, depuis le 2 août 2026),
 * loi SREN du 21 mai 2024 (hypertrucages), RGPD.
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
  // SÉANCE 1 · Vrai, faux ou généré ?
  // ===================================================================
  S.push({
    id: "cyber-tle-1", pilier: "cyber", niveau: "tle", num: 1, duree: DUREE,
    titre: "Vrai, faux ou généré ?",
    objectifCourt: "IA générative, deepfakes, esprit critique",
    objectif: "Savoir vérifier une image, une vidéo ou une voix qui a pu être fabriquée par une IA, et utiliser l'IA générative comme un outil, sans lui confier son jugement.",
    rappel: { seance: "cyber-1re-1", texte: "En Première, tu as compris que ton fil est calculé par un algorithme. Aujourd'hui, une autre question : ce que tu vois dans ce fil, quelqu'un l'a-t-il vraiment filmé, photographié, dit ?" },
    aqcms: {
      pourquoi: "Quelques secondes suffisent pour fabriquer une photo, une vidéo ou une voix réaliste, et beaucoup de ces contenus circulent sans étiquette.",
      apport: "Des réflexes pour ne pas me faire piéger, et des règles pour utiliser l'IA sans me faire avoir.",
      ou: "Sur mes réseaux, pour mes devoirs, en stage, face à un appel ou un message vocal suspect.",
      lie: "Fabriqué ou réel (EVARS Terminale, séance 1), agir de manière responsable (CPS Terminale, séance 2)."
    },
    accroche: "Depuis le 2 août 2026, le règlement européen sur l'IA oblige à signaler un hypertrucage (« deepfake »). Pourtant, une grande partie des contenus générés circulent sans aucune mention. Comment faire la différence ?",
    activites: [{
      titre: "Les bons indices", moteur: "cartes",
      consigne: "Huit façons de repérer un contenu généré. Lesquelles restent fiables, lesquelles le sont de moins en moins ?",
      config: {
        fin: "Les défauts visuels disparaissent à chaque nouvelle version des outils. La source et le recoupement restent les réflexes les plus sûrs.",
        manches: [{
          type: "classer", titre: "Cet indice est…", categories: ["Un réflexe fiable", "De moins en moins fiable"],
          cartes: [
            { texte: "Compter les doigts des mains", reponse: "De moins en moins fiable", explication: "Les premières IA se trompaient souvent sur les mains ; les outils récents beaucoup moins." },
            { texte: "Lire le texte dans l'image (panneaux, étiquettes)", reponse: "De moins en moins fiable" },
            { texte: "Regarder les reflets et les ombres", reponse: "De moins en moins fiable" },
            { texte: "Chercher la source d'origine : qui a publié en premier ?", reponse: "Un réflexe fiable" },
            { texte: "Faire une recherche d'image inversée", reponse: "Un réflexe fiable" },
            { texte: "Vérifier si des médias fiables en parlent", reponse: "Un réflexe fiable" },
            { texte: "Regarder la date et le lieu annoncés", reponse: "Un réflexe fiable" },
            { texte: "Chercher une mention « généré par IA »", reponse: "Un réflexe fiable", explication: "Utile quand elle est là. Mais son absence ne prouve rien : beaucoup de contenus ne sont pas étiquetés." }
          ],
          bilan: "Je ne juge pas un contenu à l'œil : je remonte à la source et je recoupe."
        }]
      }
    }, {
      titre: "La vidéo qui fait le buzz", moteur: "scenario",
      consigne: "Le maire et la ville sont inventés. À chaque étape, que fais-tu ?",
      config: {
        id: "cyber-tle-1",
        cas: [{
          titre: "La veille de l'élection",
          depart: "a",
          noeuds: {
            a: { contexte: "La veille d'une élection municipale à Saint-Aubin (ville inventée), une vidéo montre le maire tenir des propos choquants. Elle circule dans tous les groupes.", question: "Que fais-tu ?", choix: [
              { texte: "Je partage : les gens doivent savoir avant de voter.", ok: false, retour: "Si la vidéo est fausse, tu participes à une manipulation de l'élection." },
              { texte: "J'attends et je cherche d'où vient cette vidéo.", vers: "b", ok: true, retour: "Une vidéo explosive juste avant un vote : c'est justement le moment où il faut être le plus prudent." }
            ] },
            b: { contexte: "La vidéo a été publiée en premier par un compte créé la veille. Aucun média ne la reprend. Des journalistes remarquent que la voix sonne un peu « plate » et que le maire était ce jour-là à un autre endroit, filmé par la presse locale.", question: "Qu'en conclus-tu ?", choix: [
              { texte: "C'est très probablement un deepfake : la voix a été clonée.", vers: "c", ok: true, retour: "Oui : compte récent, aucune reprise, alibi documenté." },
              { texte: "Ça a l'air vrai, donc c'est vrai.", ok: false, retour: "Aujourd'hui, « avoir l'air vrai » ne prouve plus rien." }
            ] },
            c: { contexte: "Le même soir, ta tante reçoit un appel : la voix de ton cousin, en pleurs, dit qu'il a eu un accident et qu'il faut lui envoyer de l'argent tout de suite.", question: "Que lui conseilles-tu ?", choix: [
              { texte: "De raccrocher et de rappeler ton cousin sur son numéro habituel.", vers: "fin", ok: true, retour: "Oui. La même technique de clonage de voix sert à des arnaques au faux proche." },
              { texte: "D'envoyer l'argent vite, c'est une urgence.", ok: false, retour: "L'urgence est un levier de manipulation. Quelques secondes d'audio suffisent pour cloner une voix." }
            ] },
            fin: { fin: { ok: true, titre: "À retenir :", texte: "Une vidéo ou une voix peut être entièrement fabriquée. Parade simple contre l'arnaque à la voix : convenir en famille d'un mot de code." } }
          }
        }]
      }
    }, {
      titre: "Le deepfake n'est pas une blague", moteur: "quiz",
      config: { id: "cyber-tle-1-loi", questions: [
        { type: "vf", enonce: "Faire un montage réaliste avec le visage d'un camarade et le diffuser « pour rire », sans son accord, est autorisé.", bonne: false, explication: "Depuis la loi du 21 mai 2024, diffuser sans son accord un contenu généré par IA représentant une personne est un délit, puni jusqu'à 2 ans de prison et 45 000 € d'amende quand il est diffusé en ligne." },
        { type: "vf", enonce: "Un deepfake à caractère sexuel est puni encore plus sévèrement.", bonne: true, explication: "Jusqu'à 3 ans de prison et 75 000 € d'amende en ligne. La victime peut appeler le 3018, qui fait retirer le contenu." },
        { type: "vf", enonce: "Si le montage est clairement présenté comme un faux, avec l'accord de la personne, il n'y a pas de problème.", bonne: true, explication: "C'est l'absence d'accord et la tromperie qui posent problème." }
      ] }
    }, {
      titre: "L'IA, mon assistant, pas mon cerveau", moteur: "cartes",
      consigne: "Pour chaque usage de l'IA générative : oui, oui si je vérifie, ou non ?",
      config: {
        fin: "L'IA peut se tromper avec beaucoup d'assurance. Je vérifie, je dis quand je l'ai utilisée, et je ne lui confie ni données personnelles ni données de l'entreprise.",
        manches: [{
          type: "classer", titre: "J'utilise l'IA pour…", categories: ["Oui", "Oui, si je vérifie", "Non"],
          cartes: [
            { texte: "Reformuler mon CV, puis le relire moi-même", reponse: "Oui, si je vérifie", explication: "Elle peut inventer une compétence ou changer le sens : je relis tout." },
            { texte: "M'entraîner à un entretien d'embauche", reponse: "Oui" },
            { texte: "Trouver une date ou un chiffre pour un devoir", reponse: "Oui, si je vérifie", explication: "L'IA peut « halluciner » : inventer une réponse fausse mais crédible. Je vérifie dans une source fiable." },
            { texte: "Demander un avis sur un symptôme", reponse: "Oui, si je vérifie", explication: "Elle ne remplace pas un médecin, un pharmacien ou l'infirmière." },
            { texte: "Faire rédiger mon rapport de stage et le rendre tel quel", reponse: "Non", explication: "C'est de la triche, et l'oral te trahira : tu dois pouvoir expliquer ce que tu as fait." },
            { texte: "Coller dans un chatbot le fichier clients de mon entreprise de stage", reponse: "Non", explication: "Ces données sont confidentielles : elles quittent l'entreprise et peuvent être réutilisées." },
            { texte: "Comprendre une notion de cours avec des exemples", reponse: "Oui, si je vérifie" },
            { texte: "Créer une image de quelqu'un que je connais, sans le lui dire", reponse: "Non" }
          ],
          bilan: "L'IA est un outil : je garde la main."
        }]
      }
    }],
    retenir: [
      "Une image, une vidéo ou une voix peut être entièrement fabriquée.",
      "Le réflexe le plus sûr : remonter à la source et recouper.",
      "Fabriquer et diffuser un deepfake de quelqu'un sans son accord est puni par la loi.",
      "L'IA est un outil : je garde la main, je vérifie, je ne lui donne pas de données sensibles."
    ],
    ressource: {
      titre: "Vrai, faux ou généré ?",
      intro: "Une fiche pour vérifier un contenu et utiliser l'IA sans se faire avoir.",
      blocs: [
        { type: "etapes", titre: "Vérifier une image, une vidéo ou une voix en cinq réflexes", items: ["Qui l'a publiée en premier ? Le compte est-il ancien, identifiable ?", "Recherche d'image inversée (ou d'une capture de la vidéo)", "Des médias fiables en parlent-ils ?", "La date et le lieu sont-ils cohérents ?", "Une mention « généré par IA » ? Son absence ne prouve rien."] },
        { type: "liste", titre: "Contre l'arnaque à la voix clonée", items: ["Je raccroche et je rappelle la personne sur son numéro habituel", "Je pose une question que seul le vrai proche connaît", "On convient en famille d'un mot de code"] },
        { type: "liste", titre: "Ce que dit la loi", items: ["Depuis le 2 août 2026, un deepfake diffusé doit être signalé comme généré ou modifié par IA (règlement européen)", "Diffuser sans son accord un contenu généré représentant une personne est un délit (loi du 21 mai 2024)", "Un deepfake à caractère sexuel est puni plus sévèrement ; le 3018 aide à le faire retirer"] },
        { type: "tableau", titre: "Utiliser l'IA sans se faire avoir", colonnes: ["Je peux", "Je n'oublie pas"], lignes: [
          ["Reformuler, résumer, m'entraîner", "Je relis et je vérifie tout"],
          ["Comprendre une notion", "Elle peut inventer avec assurance : je recoupe"],
          ["M'aider à démarrer un texte", "Je dis quand je l'ai utilisée"],
          ["", "Jamais de données personnelles ni de données de l'entreprise"]
        ] }
      ]
    },
    traces: [{
      titre: "Ma charte IA", moteur: "carnet",
      outil: { id: "charte-ia", nom: "Ma charte IA", description: "Les usages de l'IA que je m'autorise, celui que je m'interdis, comment je vérifie." },
      config: {
        cle: "charte-ia", titreDoc: "Ma charte IA",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "autorise", label: "Trois usages que je m'autorise", multi: true },
          { id: "interdit", label: "Un usage que je m'interdis" },
          { id: "verifie", label: "Comment je vérifie ce que l'IA me répond", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Quel est l'indice le plus fiable pour savoir si une image est authentique ?", options: ["Compter les doigts", "Remonter à la source et recouper", "Regarder si elle est en haute définition"], bonne: 1, explication: "Les défauts visuels disparaissent ; la vérification de la source reste valable." },
      { type: "ouverte", enonce: "Quelle parade simple contre l'arnaque à la voix clonée ?", modele: "Raccrocher et rappeler la personne sur son numéro habituel ; convenir en famille d'un mot de code." },
      { type: "vf", enonce: "Diffuser sans son accord un deepfake d'une personne est un délit.", bonne: true, explication: "Loi du 21 mai 2024 : jusqu'à 2 ans de prison et 45 000 € d'amende en ligne." },
      { type: "ouverte", enonce: "Cite un usage de l'IA à éviter en stage.", modele: "Y coller des données de l'entreprise ou des clients ; faire rédiger son rapport de stage et le rendre tel quel." }
    ],
    plusLoin: [
      { titre: "AFP Factuel", source: "AFP", url: "https://factuel.afp.com", description: "Des vérifications de fausses images et vidéos, expliquées pas à pas." },
      { titre: "Intelligence artificielle", source: "CNIL", url: "https://www.cnil.fr/fr/intelligence-artificielle", description: "Les conseils de la CNIL pour utiliser l'IA en protégeant ses données." },
      { titre: "Le 3018", source: "Caf.fr", url: "https://caf.fr/allocataires/vies-de-famille/articles/3018-le-numero-d-e-enfance-une-aide-concrete-contre-le-cyberharcelement-et-les-violences-en-ligne", description: "Pour faire retirer un deepfake ou un contenu qui te vise." }
    ],
    passerelles: ["evars-tle-1", "cps-tle-2"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Comment faire la différence entre un contenu réel et généré ?", "Présente l'obligation de transparence du 2 août 2026 et ses limites."],
        ["5-15 min", "Activité", "Classe huit indices : fiable ou de moins en moins fiable.", "Insiste sur la source et le recoupement."],
        ["15-30 min", "Activité", "Suit « La vidéo qui fait le buzz ».", "Élargit au clonage de voix et au mot de code familial."],
        ["30-35 min", "Activité", "Répond au vrai ou faux sur la loi.", "Rappelle le 3018 pour les victimes."],
        ["35-50 min", "Activité", "Classe huit usages de l'IA.", "Fait formuler : je vérifie, je dis quand je l'ai utilisée, pas de données sensibles."],
        ["50-55 min", "Trace", "Rédige « Ma charte IA » et répond à « Je vérifie ».", "Peut relier la charte au règlement de l'établissement sur l'IA."]
      ],
      vigilance: "Le maire et la ville sont fictifs, sans parti ni propos identifiable. On ne projette pas de deepfake réel d'une personne existante. Si l'enseignant fait tester un outil d'IA, il choisit un outil autorisé par l'établissement, et les élèves n'y saisissent aucune donnée personnelle. Un élève victime d'un deepfake, surtout à caractère sexuel : l'écouter, ne pas regarder le contenu, informer le chef d'établissement le jour même, orienter vers le 3018."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Mon identité numérique pro
  // ===================================================================
  S.push({
    id: "cyber-tle-2", pilier: "cyber", niveau: "tle", num: 2, duree: DUREE,
    titre: "Mon identité numérique pro",
    objectifCourt: "Ce qu'un recruteur trouve sur moi",
    objectif: "Voir son image en ligne avec les yeux d'un recruteur, nettoyer ce qui peut desservir, connaître ses droits sur ses données et construire une présentation professionnelle.",
    rappel: { seance: "cyber-1re-2", texte: "En Première, tu t'es demandé ce que tu avais le droit de publier sur les autres. Dans quelques mois, ce sont les autres qui chercheront : un employeur, un tuteur de stage, une école tapera ton nom." },
    aqcms: {
      pourquoi: "Beaucoup de recruteurs regardent les réseaux des candidats avant un entretien.",
      apport: "Une image en ligne qui me sert au lieu de me desservir, et des droits pour faire effacer ce qui me gêne.",
      ou: "Pour une candidature, un stage, une alternance, Parcoursup.",
      lie: "Mes valeurs, mes choix (CPS Terminale, séance 1), mon empreinte numérique (Cyber Seconde, séance 2), le CV (Orientation)."
    },
    accroche: "Tape ton nom dans un moteur de recherche… mais pas maintenant : chez toi. Que trouverait un recruteur ?",
    activites: [{
      titre: "Le recruteur cherche", moteur: "cartes",
      consigne: "Sami, 18 ans, postule pour un emploi après son bac pro (il est inventé). Voici ce qu'on trouve à son nom. Atout, neutre ou à risque ?",
      config: {
        fin: "Ce que je publie aujourd'hui peut être lu par un recruteur demain. Mais mon image en ligne peut aussi devenir un atout.",
        manches: [{
          type: "classer", titre: "Pour le recruteur, c'est…", categories: ["Un atout", "Neutre", "À risque"],
          cartes: [
            { texte: "Une photo de soirée, bouteille à la main", reponse: "À risque" },
            { texte: "Un commentaire insultant posté il y a trois ans", reponse: "À risque", explication: "Même ancien, il peut être retrouvé. On peut le supprimer." },
            { texte: "Une adresse mail « dark.killer93@… »", reponse: "À risque", explication: "Une adresse sobre (prénom.nom) fait plus sérieux." },
            { texte: "Une vidéo de lui en compétition sportive", reponse: "Un atout", explication: "Persévérance, esprit d'équipe : des qualités appréciées." },
            { texte: "Un avis où il dénigre son ancien patron", reponse: "À risque", explication: "Un recruteur se dit : « il pourrait faire pareil avec moi »." },
            { texte: "Une attestation de bénévolat à la banque alimentaire", reponse: "Un atout" },
            { texte: "Un profil professionnel avec ses stages", reponse: "Un atout" },
            { texte: "Une photo de classe", reponse: "Neutre" }
          ],
          bilan: "Je fais le tri : je garde ce qui me sert, je supprime ce qui me dessert."
        }]
      }
    }, {
      titre: "Mon plan de nettoyage", moteur: "choisir",
      consigne: "Coche ce que tu feras, chez toi et pas en classe (au moins trois actions).",
      config: {
        cle: "cyber-nettoyage-pro", max: 6, min: 3, titre: "Actions", resume: "Mes actions",
        cartes: [
          { nom: "Taper mon nom dans un moteur de recherche", ex: "Chez moi, avec et sans mon pseudo" },
          { nom: "Passer mes comptes personnels en privé", ex: "Seuls mes amis voient mes publications" },
          { nom: "Supprimer les vieilles publications gênantes", ex: "Photos, commentaires, vidéos" },
          { nom: "Créer une adresse mail sobre", ex: "prénom.nom@…" },
          { nom: "Choisir une photo de profil neutre", ex: "Pour mes comptes visibles" },
          { nom: "Séparer pseudo personnel et identité professionnelle", ex: "Un compte pro, un compte perso" }
        ]
      }
    }, {
      titre: "Mes droits sur mes données", moteur: "cartes",
      consigne: "Le RGPD te donne des droits sur tes données. Quel droit utiliser dans chaque situation ?",
      config: {
        fin: "Sans réponse sous un mois, on peut saisir la CNIL. Pour ce qui a été publié quand on était mineur, l'effacement est renforcé.",
        manches: [{
          type: "classer", titre: "Quel droit ?", categories: ["Accès", "Rectification", "Effacement", "Déréférencement", "Opposition"],
          cartes: [
            { texte: "Je veux savoir ce qu'une enseigne a enregistré sur moi.", reponse: "Accès" },
            { texte: "Mon nom est mal orthographié dans le fichier d'une école.", reponse: "Rectification" },
            { texte: "Je veux qu'un site supprime une photo de moi publiée quand j'avais 14 ans.", reponse: "Effacement", explication: "Pour des données publiées quand on était mineur, le site doit les effacer dans les meilleurs délais." },
            { texte: "Je veux qu'un lien vers un vieil article ne sorte plus quand on tape mon nom.", reponse: "Déréférencement", explication: "On le demande au moteur de recherche, avec son formulaire." },
            { texte: "Je ne veux plus recevoir la publicité d'un magasin.", reponse: "Opposition" }
          ],
          bilan: "Accès, rectification, effacement, déréférencement, opposition : ce sont mes droits."
        }]
      }
    }],
    retenir: [
      "Ce que je publie aujourd'hui peut être lu par un recruteur demain.",
      "Je sépare ma vie privée de mon identité professionnelle.",
      "J'ai des droits sur mes données : accès, rectification, effacement, déréférencement.",
      "Mon image en ligne peut aussi devenir un atout."
    ],
    ressource: {
      titre: "Mon identité numérique pro",
      intro: "Une fiche pour soigner ce qu'un recruteur trouve sur toi.",
      blocs: [
        { type: "liste", titre: "Ce qu'un recruteur voit : la check-list", items: ["Mon nom dans un moteur de recherche (avec et sans pseudo)", "Ma photo de profil", "Mon adresse mail", "Mes publications publiques et mes commentaires", "Mes avis en ligne", "Mon profil professionnel s'il existe"] },
        { type: "tableau", titre: "Mes droits sur mes données (RGPD)", colonnes: ["Droit", "Pour…"], lignes: [
          ["Accès", "Savoir ce qu'un organisme a sur moi"],
          ["Rectification", "Corriger une erreur"],
          ["Effacement", "Faire supprimer des données (renforcé si publiées quand j'étais mineur)"],
          ["Déréférencement", "Faire disparaître un lien des résultats d'un moteur de recherche"],
          ["Opposition", "Refuser une utilisation, par exemple la publicité"]
        ] },
        { type: "etapes", titre: "Faire effacer une publication ou un lien", items: ["Demander à la personne qui l'a publiée de la retirer", "Écrire au site (formulaire ou adresse du délégué à la protection des données) ; la CNIL propose des modèles de courrier", "Pour un lien : remplir le formulaire de déréférencement du moteur de recherche", "Sans réponse sous un mois : saisir la CNIL", "Si c'est du harcèlement ou un contenu intime : le 3018 peut agir vite"] },
        { type: "liste", titre: "Mon profil pro : ce que je montre, ce que je garde", items: ["Je montre : ma formation, mes compétences, mes stages, ce que je cherche", "Je garde pour moi : mon adresse, mon numéro de téléphone, ma vie privée"] }
      ]
    },
    traces: [{
      titre: "Mon profil pro", moteur: "carnet",
      outil: { id: "profil-pro", nom: "Mon profil pro", description: "Ma présentation professionnelle en cinq lignes et mes actions de nettoyage." },
      config: {
        cle: "profil-pro", titreDoc: "Mon profil pro",
        intro: "Elle pourra resservir pour ton CV et tes lettres de motivation. Jamais d'adresse ni de numéro de téléphone sur un profil public.",
        champs: [
          { id: "titre", label: "Mon titre (ex. : Titulaire d'un bac pro CIEL, à la recherche d'une alternance)" },
          { id: "formation", label: "Ma formation" },
          { id: "competences", label: "Trois compétences", multi: true },
          { id: "stages", label: "Mes expériences de stage", multi: true },
          { id: "cherche", label: "Ce que je cherche" },
          { id: "nettoyage", label: "Mes trois actions de nettoyage", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Qu'est-ce que le déréférencement ?", options: ["Supprimer son compte", "Faire disparaître un lien des résultats d'un moteur de recherche", "Changer de pseudo"], bonne: 1, explication: "Le contenu peut rester en ligne, mais il ne sort plus quand on tape ton nom." },
      { type: "qcm", enonce: "Combien de temps une entreprise a-t-elle pour répondre à une demande sur tes données ?", options: ["Une semaine", "Un mois", "Un an"], bonne: 1, explication: "Un mois en principe. Sans réponse, tu peux saisir la CNIL." },
      { type: "ouverte", enonce: "Qu'est-ce qu'on ne met jamais sur un profil public ?", modele: "Son adresse postale, son numéro de téléphone, des informations sur sa vie privée." },
      { type: "ouverte", enonce: "Donne un exemple d'atout en ligne.", modele: "Un profil professionnel avec ses stages, une vidéo d'une compétition, un engagement bénévole, une réalisation faite en formation." }
    ],
    plusLoin: [
      { titre: "Exercer ses droits par l'intermédiaire de la CNIL", source: "CNIL", url: "https://cnil.fr/exercer-ses-droits-par-lintermediaire-de-la-cnil", description: "Que faire quand un organisme ne répond pas à ta demande." },
      { titre: "Le droit au déréférencement", source: "CNIL", url: "https://cnil.fr/droit-au-dereferencement", description: "Faire disparaître un lien des résultats d'un moteur de recherche." },
      { titre: "Données personnelles : les modèles de courriers", source: "Ministère de l'Économie", url: "https://www.economie.gouv.fr/particuliers/donnees-personnelles-modeles-courriers-rgpd-cnil", description: "Des lettres prêtes à envoyer pour exercer ses droits." }
    ],
    passerelles: ["cps-tle-1"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Que trouverait un recruteur en tapant ton nom ?", "Rappelle : la recherche de son nom se fait chez soi, jamais projetée en classe."],
        ["5-17 min", "Activité", "Classe huit résultats de recherche sur Sami.", "Rappelle que beaucoup de recruteurs regardent les réseaux des candidats."],
        ["17-27 min", "Activité", "Coche ses actions de nettoyage.", "Montre comment passer un compte en privé, sans regarder le compte d'un élève."],
        ["27-40 min", "Activité", "Associe cinq situations aux droits du RGPD.", "Présente le délai d'un mois et la saisine de la CNIL."],
        ["40-55 min", "Trace", "Rédige son profil pro en cinq lignes et répond à « Je vérifie ».", "Peut relier au CV travaillé en Orientation."]
      ],
      vigilance: "La recherche de son nom se fait à la maison, jamais projetée en classe : un résultat gênant ne doit pas devenir public. Sami est inventé."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Cybersécurité en stage et au travail
  // ===================================================================
  S.push({
    id: "cyber-tle-3", pilier: "cyber", niveau: "tle", num: 3, duree: DUREE,
    titre: "Cybersécurité en stage et au travail",
    objectifCourt: "Les bons réflexes en entreprise, et le bilan",
    objectif: "Adopter les bons réflexes de sécurité numérique en entreprise, savoir ce qu'on peut publier sur son stage, réagir vite en cas d'incident, et faire le bilan du pilier Cyber.",
    rappel: { seance: "cyber-1re-3", texte: "En Première, tu as appris à déjouer les arnaques qui te visent. En entreprise, les pirates visent aussi les salariés, et un stagiaire qui ne connaît pas encore les règles est une porte d'entrée idéale." },
    aqcms: {
      pourquoi: "Hôpitaux, mairies, PME : beaucoup ont été paralysés après un seul clic d'un salarié.",
      apport: "Les réflexes qu'un employeur attend, et la confiance de savoir quoi faire en cas de problème.",
      ou: "En PFMP, en alternance, dans mon futur emploi.",
      lie: "Respecter les règles et les lois (CPS Terminale, séance 4), protéger mes comptes (Cyber Seconde, séance 3), le contrat de travail (Droits)."
    },
    accroche: "Un seul clic sur une pièce jointe piégée peut bloquer tous les ordinateurs d'une entreprise pendant des semaines. Et si ce clic, c'était celui du stagiaire ?",
    activites: [{
      titre: "Premier jour de stage", moteur: "scenario",
      consigne: "Une journée de stage inventée, en plusieurs moments. Choisis à chaque fois la bonne réaction.",
      config: {
        id: "cyber-tle-3",
        cas: [
          situation("Le post-it", "Ton tuteur te montre ton poste : « Le mot de passe est sur le post-it sous le clavier, c'est plus simple. »", "Que fais-tu ?", [
            ["Je fais pareil, c'est l'habitude de l'entreprise.", false, "N'importe qui passant dans le bureau peut le lire."],
            ["Je demande poliment si je peux avoir mon propre identifiant, et je mémorise mon mot de passe sans l'écrire en clair.", true, "Oui : chacun son accès, et un mot de passe ne se note pas en clair."]
          ], "Un mot de passe professionnel ne se note pas en clair et ne se partage pas."),
          situation("La clé USB sur le parking", "En arrivant, tu trouves une clé USB sur le parking de l'entreprise, avec l'étiquette « Salaires 2026 ».", "Que fais-tu ?", [
            ["Je la branche pour voir à qui elle appartient.", false, "C'est un piège classique : la clé peut contenir un logiciel malveillant qui s'installe dès qu'on la branche."],
            ["Je ne la branche pas et je la remets au service informatique ou à mon tuteur.", true, "Oui. La curiosité est exactement ce que cherche le pirate."]
          ], "Une clé USB inconnue ne se branche jamais : on la remet au service informatique."),
          situation("Le virement urgent", "Un mail du « directeur » : « Je suis en réunion, j'ai besoin que tu fasses un virement urgent et confidentiel à ce fournisseur. N'en parle à personne. »", "Que fais-tu ?", [
            ["J'obéis, c'est le directeur.", false, "Urgence, autorité, secret : c'est la fraude au président."],
            ["Je ne fais rien et je vérifie auprès de mon tuteur, ou du directeur par un autre moyen.", true, "Oui. On vérifie toujours par un autre canal."]
          ], "Urgence + autorité + secret = fraude au président. On vérifie toujours par un autre canal."),
          situation("La batterie à plat", "Ton téléphone n'a plus de batterie. Tu as ton câble, et l'ordinateur de l'entreprise a un port USB libre.", "Que fais-tu ?", [
            ["Je le branche sur l'ordinateur, ça ne risque rien.", false, "Brancher un appareil personnel sur un poste de l'entreprise peut y faire entrer un virus, ou faire sortir des données."],
            ["Je demande où je peux le recharger sur une prise.", true, "Oui. Les appareils personnels ne se branchent pas sur les postes de l'entreprise, sauf accord."]
          ], "Je ne branche pas mes appareils personnels sur le matériel de l'entreprise."),
          situation("Le Wi-Fi du café", "À la pause, au café d'en face, tu dois envoyer d'urgence un fichier client à ton tuteur. Le café propose un Wi-Fi gratuit sans mot de passe.", "Que fais-tu ?", [
            ["Je me connecte et j'envoie le fichier.", false, "Sur un Wi-Fi public ouvert, quelqu'un peut intercepter ce que tu envoies."],
            ["J'attends d'être revenu dans l'entreprise, ou j'utilise le partage de connexion de mon téléphone.", true, "Oui. Les données des clients ne passent pas par un Wi-Fi public."]
          ], "Pas de données professionnelles sur un Wi-Fi public ouvert."),
          situation("Le faux support", "Un appel : « Bonjour, ici le support informatique. On a un souci sur votre session, donnez-moi votre identifiant et votre mot de passe. »", "Que fais-tu ?", [
            ["Je donne mes identifiants : c'est le support.", false, "Un vrai support n'a jamais besoin de ton mot de passe."],
            ["Je refuse poliment, je raccroche et je préviens mon tuteur.", true, "Oui. Personne, pas même le service informatique, ne demande ton mot de passe."]
          ], "Personne ne demande un mot de passe, pas même le service informatique.")
        ]
      },
      parFiliere: {
        ciel: { cas: [
          situation("CIEL · Le routeur du client", "Tu interviens chez un client. Sur son routeur, l'identifiant d'administration est encore celui d'usine : « admin ». Le client te dit : « Laisse comme ça, c'est plus pratique. »", "Que fais-tu ?", [
            ["Je laisse comme ça, c'est son matériel.", false, "Les identifiants d'usine sont publics : n'importe qui peut prendre le contrôle du réseau."],
            ["J'explique le risque au client, je propose de changer l'accès, et j'en parle à mon tuteur.", true, "Oui : changer les accès par défaut fait partie du métier."]
          ], "On change toujours les identifiants par défaut d'un équipement réseau."),
          situation("CIEL · Le logiciel gratuit", "Un client te demande d'installer sur son ordinateur un logiciel de montage vidéo trouvé sur un site de téléchargement gratuit (version « crackée »).", "Que fais-tu ?", [
            ["Je l'installe, il insiste.", false, "Ces versions contiennent souvent des logiciels malveillants, et c'est illégal."],
            ["Je refuse, j'explique pourquoi et je propose une alternative officielle ou gratuite.", true, "Oui : on n'installe que des logiciels de source officielle."]
          ], "On n'installe que des logiciels de source officielle.")
        ] },
        securite: { cas: [
          situation("Sécurité · Le faux technicien", "Un homme en gilet orange se présente au poste de sécurité : « Je viens pour la maintenance des caméras, ouvrez-moi. » Il n'a pas de bon d'intervention.", "Que fais-tu ?", [
            ["J'ouvre : il a un gilet et une caisse à outils.", false, "Un gilet ne prouve rien. C'est de l'ingénierie sociale, appliquée à l'intrusion physique."],
            ["Je n'ouvre pas, je vérifie auprès de mon responsable et de la société de maintenance.", true, "Oui : on vérifie toute identité avant d'ouvrir."]
          ], "On vérifie toute identité et tout bon d'intervention avant de laisser entrer."),
          situation("Sécurité · L'extrait vidéo", "Un ami t'écrit : « T'as les images de la bagarre d'hier sur le parking ? Envoie-moi l'extrait, ça va faire le buzz ! »", "Que fais-tu ?", [
            ["J'envoie l'extrait, personne ne le saura.", false, "Les images de vidéoprotection sont réservées aux personnes habilitées. Les diffuser est une faute grave, et un délit."],
            ["Je refuse : ces images sont confidentielles et réservées aux personnes habilitées.", true, "Oui. Le secret professionnel s'applique aussi en ligne."]
          ], "Les images de vidéoprotection ne se transmettent jamais : accès réservé aux personnes habilitées.")
        ] }
      }
    }, {
      titre: "Ce que je peux publier sur mon stage", moteur: "cartes",
      consigne: "Le stagiaire, comme le salarié, a une obligation de discrétion. Pour chaque publication : oui, oui si l'entreprise est d'accord, ou non ?",
      config: {
        fin: "Ce que je vois en stage reste en stage. Dénigrer son employeur ou divulguer des informations peut entraîner une sanction.",
        manches: [{
          type: "classer", titre: "Je publie ?", categories: ["Oui", "Oui, si l'entreprise est d'accord", "Non"],
          cartes: [
            { texte: "Un selfie en tenue devant le logo de l'entreprise", reponse: "Oui, si l'entreprise est d'accord" },
            { texte: "Une photo où l'on voit un écran avec des données clients", reponse: "Non", explication: "Ce sont des données personnelles et confidentielles." },
            { texte: "Une story dans un poste de sécurité, avec les écrans de vidéoprotection", reponse: "Non" },
            { texte: "« Mon patron est nul, vivement la fin du stage »", reponse: "Non", explication: "Dénigrer son employeur publiquement peut entraîner une sanction, et se retrouver dans un futur recrutement." },
            { texte: "« Fier d'avoir terminé mon stage chez… » sur mon profil professionnel", reponse: "Oui", explication: "C'est valorisant, à condition de ne rien révéler de confidentiel." },
            { texte: "Une photo du plan des locaux", reponse: "Non", explication: "Un plan aide un cambrioleur ou un intrus." }
          ],
          bilan: "Avant de publier sur mon stage, je me demande : est-ce que ça révèle quelque chose de l'entreprise ?"
        }]
      },
      parFiliere: {
        ciel: { cartes: [
          { texte: "CIEL · Une photo de la baie réseau avec les étiquettes d'adresses et de mots de passe", reponse: "Non", explication: "On ne montre jamais une configuration : c'est une carte pour un pirate." }
        ] },
        securite: { cartes: [
          { texte: "Sécurité · Une story avec mon badge d'accès et le code de l'alarme visible en arrière-plan", reponse: "Non", explication: "Badge et code permettent d'entrer. Le secret professionnel s'applique aussi en ligne." }
        ] }
      }
    }, {
      titre: "La charte informatique", moteur: "quiz",
      config: { id: "cyber-tle-3-charte", questions: [
        { type: "vf", enonce: "La charte informatique fixe les règles d'usage des outils de l'entreprise, et on la signe en arrivant.", bonne: true, explication: "Lis-la vraiment : elle dit ce qui est permis et interdit." },
        { type: "vf", enonce: "L'employeur peut contrôler l'usage professionnel des outils, dans un cadre fixé par la loi et annoncé aux salariés.", bonne: true, explication: "Il doit informer les salariés des contrôles mis en place." },
        { type: "vf", enonce: "Je peux installer les logiciels que je veux sur mon poste de travail.", bonne: false, explication: "En général, seul le service informatique installe des logiciels." }
      ] }
    }, {
      titre: "Incident ! Les bons réflexes", moteur: "quiz",
      consigne: "Tu as ouvert une pièce jointe suspecte et l'écran affiche un message de rançon.",
      config: { id: "cyber-tle-3-incident", questions: [
        { type: "ordre", enonce: "Remets les gestes dans l'ordre.",
          elements: ["Je déconnecte le poste du réseau (câble, Wi-Fi)", "Je préviens tout de suite mon tuteur ou le service informatique", "Je n'éteins pas et je ne touche plus à rien", "Je note ce que j'ai fait et à quelle heure"],
          explication: "Signaler vite, ce n'est pas se dénoncer : c'est protéger tout le monde. Plus on attend, plus le rançongiciel se propage." }
      ] }
    }, {
      titre: "Bilan du pilier Cyber", moteur: "jauges",
      consigne: "Trois ans de Cyber : où en es-tu ? Place chaque curseur. Tes réponses restent sur ton appareil.",
      config: {
        id: "bilan-cyber", cle: "bilan-cyber", bornes: ["Je débute", "Je maîtrise"],
        items: ["Vérifier une information", "Protéger mes données", "Protéger mes comptes", "Respecter l'image des autres", "Déjouer une manipulation", "Agir en cas d'incident"],
        note: "Ce bilan prépare la certification Pix, et rejoindra bientôt ton passeport de compétences."
      }
    }],
    retenir: [
      "Un mot de passe professionnel ne se note pas en clair et ne se partage pas.",
      "Clé USB inconnue, mail urgent du « directeur », faux support : je me méfie et je vérifie.",
      "Ce que je vois en stage reste en stage.",
      "En cas d'incident : je déconnecte, je préviens, je n'efface rien."
    ],
    ressource: {
      titre: "Cybersécurité en stage",
      intro: "Une fiche à glisser dans ton carnet de PFMP.",
      blocs: [
        { type: "etapes", titre: "Les cinq règles", items: ["Mon mot de passe est à moi : je ne le note pas en clair, je ne le prête pas", "Je ne branche ni clé USB inconnue ni appareil personnel sur un poste de l'entreprise", "Urgence, autorité, secret : je vérifie par un autre canal", "Pas de données de l'entreprise sur un Wi-Fi public, dans un chatbot ou sur mes réseaux", "Ce que je vois en stage reste en stage"] },
        { type: "etapes", titre: "Incident informatique : les quatre gestes", items: ["Je déconnecte le poste du réseau", "Je préviens tout de suite mon tuteur ou le service informatique", "Je n'éteins pas et je ne touche plus à rien", "Je note ce que j'ai fait et à quelle heure"] },
        { type: "tableau", titre: "Selon ma filière", colonnes: ["Filière", "Ce que je retiens"], lignes: [
          ["CIEL", "Changer les accès par défaut, n'installer que des logiciels de source officielle, ne jamais montrer une configuration"],
          ["Métiers de la sécurité", "Vérifier toute identité avant d'ouvrir, ne jamais transmettre d'images de vidéoprotection, le secret professionnel s'applique aussi en ligne"]
        ] }
      ]
    },
    traces: [{
      titre: "Mes cinq règles de cybersécurité en stage", moteur: "carnet",
      outil: { id: "regles-stage", nom: "Mes règles de cybersécurité en stage", description: "Mes cinq règles à emporter en PFMP." },
      config: {
        cle: "regles-stage", titreDoc: "Mes cinq règles de cybersécurité en stage",
        intro: "Écris-les avec tes mots, puis imprime-les pour ton carnet de PFMP.",
        champs: [
          { id: "r1", label: "Règle 1" }, { id: "r2", label: "Règle 2" }, { id: "r3", label: "Règle 3" },
          { id: "r4", label: "Règle 4" }, { id: "r5", label: "Règle 5" }
        ]
      }
    }, {
      titre: "Mon bilan Cyber", moteur: "carnet",
      outil: { id: "bilan-cyber-texte", nom: "Mon bilan Cyber", description: "Ce que je retiens de trois ans de Cyber, et l'habitude que je garde." },
      config: {
        cle: "bilan-cyber-texte", titreDoc: "Mon bilan Cyber",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "retiens", label: "Ce que je retiens de ces trois années", multi: true },
          { id: "habitude", label: "Une habitude que je garde" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Qu'est-ce que la fraude au président ?", modele: "Un escroc se fait passer pour un dirigeant et demande un virement urgent et confidentiel. Urgence + autorité + secret : on vérifie par un autre canal." },
      { type: "qcm", enonce: "Tu trouves une clé USB sur le parking de l'entreprise. Que fais-tu ?", options: ["Je la branche pour trouver son propriétaire", "Je la remets au service informatique sans la brancher", "Je la garde"], bonne: 1, explication: "Une clé inconnue peut contenir un logiciel malveillant." },
      { type: "vf", enonce: "Je peux publier une photo de mon poste de travail tant qu'on ne voit pas mon visage.", bonne: false, explication: "Ce qui compte, c'est ce qu'on voit à l'écran ou autour : données clients, plans, codes." },
      { type: "qcm", enonce: "Premier geste face à un rançongiciel ?", options: ["Éteindre l'ordinateur", "Déconnecter le poste du réseau", "Payer la rançon"], bonne: 1, explication: "On isole le poste pour éviter la propagation, puis on prévient immédiatement." }
    ],
    plusLoin: [
      { titre: "SecNumacadémie", source: "ANSSI", url: "https://secnumacademie.gouv.fr", description: "La formation en ligne gratuite de l'agence nationale de la sécurité des systèmes d'information." },
      { titre: "Rançongiciels : que faire ? (fiche réflexe pour les professionnels)", source: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/medias/2025/06/260204_FicheReflexe_Rancongiciels_Pro_SCREEN.pdf", description: "Les bons gestes en cas d'attaque." },
      { titre: "Faux ordres de virement : la fiche réflexe", source: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/medias/2021/01/230602_FicheReflexe_FauxOrdresDeVirement.pdf", description: "Reconnaître la fraude au président et réagir." }
    ],
    passerelles: ["cps-tle-4"],
    adulte: {
      deroule: [
        ["0-3 min", "Accroche", "Et si le clic qui bloque l'entreprise était celui du stagiaire ?", "Cite un exemple d'hôpital ou de collectivité paralysés par un rançongiciel."],
        ["3-15 min", "Activité", "Joue les moments de « Premier jour de stage » (et ceux de sa filière s'il l'a choisie).", "Fait nommer le piège à chaque moment."],
        ["15-23 min", "Activité", "Classe ce qu'il peut publier sur son stage.", "Pose l'obligation de discrétion."],
        ["23-28 min", "Activité", "Répond au vrai ou faux sur la charte informatique.", "Invite à demander la charte dès le premier jour de PFMP."],
        ["28-38 min", "Activité", "Remet dans l'ordre les gestes face à un rançongiciel.", "Insiste : signaler vite, ce n'est pas se dénoncer."],
        ["38-48 min", "Bilan", "Se positionne sur six compétences et remplit « Mon bilan Cyber ».", "Relie au passeport de compétences et à la certification Pix."],
        ["48-55 min", "Trace", "Écrit ses cinq règles et répond à « Je vérifie ».", "Conseille de remettre la fiche juste avant une PFMP."]
      ],
      vigilance: "Entreprises et situations sont inventées. En CIEL, la séance peut introduire des contenus professionnels plus poussés ; en Métiers de la sécurité, on insiste sur le secret professionnel et la confidentialité des images de vidéoprotection. La fiche « Mes cinq règles » gagne à être reprise au retour de PFMP avec les situations vécues."
    }
  });
})();
