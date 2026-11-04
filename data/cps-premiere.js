/*
 * PILIER CPS · PREMIÈRE « Moi et les autres »
 * Contenu validé (document « Pilier CPS – Première »). Ordre aligné sur le référentiel
 * opérationnel CPS : comprendre (S1-S3) puis réguler (S4-S5).
 * Ressources « Pour aller plus loin » vérifiées en octobre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var FSJ = "Fil Santé Jeunes";

  // ---------- Outils d'écriture des données ----------
  var BRUITS = ["Message flou", "Registre inadapté", "Canal inadapté", "Pas de vérification", "Non-verbal mal lu ou absent"];
  var INDICES_BRUIT = {
    "Message flou": "Le message lui-même est-il précis ? Qui, quoi, quand, comment ?",
    "Registre inadapté": "Le ton et les mots conviennent-ils à la personne (ami, professeur, entreprise) ?",
    "Canal inadapté": "Le moyen choisi (oral, SMS, mail, annonce) permettait-il au message d'arriver ?",
    "Pas de vérification": "Quelqu'un a-t-il vérifié que le message avait bien été compris ?",
    "Non-verbal mal lu ou absent": "Le ton, le regard, la posture ont-ils joué un rôle ?"
  };
  // Séance 1 : où est le bruit ? puis quelle correction ?
  function bruit(titre, texte, bon, corrections, bilan) {
    return {
      titre: titre, depart: "a",
      noeuds: {
        a: { contexte: texte, question: "Où la communication a-t-elle déraillé ?",
          choix: BRUITS.map(function (b) { return { texte: b, vers: "b", ok: b === bon ? true : false, retour: b === bon ? "Exactement." : INDICES_BRUIT[b] + " Ce n'est pas le problème principal ici." }; }) },
        b: { question: "Quelle correction marche le mieux ?",
          choix: corrections.map(function (c) { return { texte: c[0], vers: "fin", ok: c[1], retour: c[2] }; }) },
        fin: { fin: { titre: "À retenir :", texte: bilan, ok: true } }
      }
    };
  }
  // Séance 2 : quelle réponse montre que tu écoutes ?
  function replique(titre, qui, texte, options, bilan) {
    return {
      titre: titre, depart: "a",
      noeuds: {
        a: { qui: qui, texte: texte, question: "Quelle réponse montre que tu écoutes vraiment ?",
          choix: options.map(function (o) {
            var noms = { conseil: "C'est un conseil : il arrive trop tôt, avant d'avoir compris.", jugement: "C'est un jugement : l'autre se sent critiqué et se ferme.", interpretation: "C'est une interprétation : tu inventes ce que l'autre pense.", soi: "Tu ramènes la conversation à toi : l'autre n'est plus écouté." };
            return o[1] === "reformulation" ? { texte: o[0], vers: "fin", ok: true, retour: "C'est une reformulation : tu redis avec tes mots ce que l'autre a dit." }
              : { texte: o[0], vers: "fin", ok: false, retour: noms[o[1]] };
          }) },
        fin: { fin: { titre: "Pourquoi ça marche :", texte: bilan, ok: true } }
      }
    };
  }

  // ===================================================================
  // SÉANCE 1 · Comprendre les bases de la communication
  // ===================================================================
  S.push({
    id: "cps-1re-1", pilier: "cps", niveau: "1re", num: 1, duree: "45 min",
    titre: "Comprendre les bases de la communication",
    objectifCourt: "Pourquoi un message n'arrive pas toujours",
    objectif: "Comprendre pourquoi un message n'arrive pas toujours comme on l'a pensé, et transmettre une consigne claire.",
    rappel: { seance: "cps-2nde-5", etiquette: "L'an dernier",
      texte: "En Seconde, tu as travaillé sur toi : tes émotions, tes besoins, tes qualités, ton stress et ta façon de t'affirmer. Cette année, on passe à « Moi et les autres ». On commence par la base : se comprendre quand on se parle." },
    aqcms: {
      pourquoi: "La plupart des tensions commencent par un malentendu, pas par de la méchanceté.",
      apport: "Vérifier que j'ai été compris, et vérifier que j'ai bien compris.",
      ou: "Consignes en atelier, transmissions entre collègues en stage, messages aux professeurs ou aux entreprises.",
      lie: "L'écoute (séance 2), la coopération (séance 3)."
    },
    accroche: "Le jeu du message déformé : une consigne technique passe de bouche à oreille entre 5 élèves. À la fin, on compare avec l'original. Qu'est-ce qui s'est perdu en route ?",
    activites: [{
      titre: "Où est le bruit ?", moteur: "scenario",
      consigne: "Six malentendus. Pour chacun, trouve où la communication a déraillé, puis la meilleure correction.",
      config: {
        id: "cps-1re-1",
        cas: [
          bruit("Le SMS de deux lettres",
            "Ton ami annule votre sortie. Tu réponds juste « Ok. ». Il croit que tu es fâché, alors que ce n'est pas le cas.",
            "Non-verbal mal lu ou absent",
            [["Écrire quelques mots de plus : « Ok, pas de souci, une autre fois ! »", true, "Oui : à l'écrit, les mots doivent remplacer le ton et le sourire."], ["Ne plus répondre.", false, "Le silence risque de confirmer le malentendu."], ["Envoyer « Pourquoi tu crois que je suis fâché ?? »", false, "Ça risque d'ajouter de la tension. Clarifie plutôt ce que tu voulais dire."]],
            "À l'écrit, le ton et le visage disparaissent. Un message très court peut paraître sec : quelques mots de plus évitent bien des malentendus."),
          bruit("La consigne d'atelier",
            "Ton professeur dit : « Tu me câbles ça pour tout à l'heure. » Tu câbles le mauvais tableau, et pas pour la bonne heure.",
            "Message flou",
            [["Poser une question pour préciser : « Lequel, et pour quelle heure ? »", true, "Oui : quand une consigne est floue, on demande avant d'agir."], ["Deviner et faire au mieux.", false, "C'est justement ce qui a provoqué l'erreur."], ["Attendre qu'il revienne voir.", false, "Tu perds du temps et le problème reste entier."]],
            "Une consigne claire dit qui, quoi, quand et comment. Si elle ne le dit pas, on a le droit, et même le devoir, de demander."),
          bruit("Le regard dans le couloir",
            "Un élève te fixe dans le couloir. Tu crois qu'il te provoque et tu t'énerves. En fait, il lisait l'affiche juste derrière toi.",
            "Non-verbal mal lu ou absent",
            [["Vérifier avant de réagir : « Il y a un souci ? », calmement.", true, "Oui : on vérifie ce qu'on a cru comprendre avant d'agir."], ["Le fixer aussi pour montrer que tu n'as pas peur.", false, "Tu risques de créer un conflit qui n'existait pas."], ["Lui dire « Qu'est-ce que tu regardes ? »", false, "Le ton de reproche transforme un malentendu en dispute."]],
            "Un regard, une posture ou un ton peuvent être mal interprétés. Avant de réagir, on vérifie."),
          bruit("Le mail à l'entreprise",
            "Pour trouver un stage, tu envoies ce mail à une entreprise : « Slt, c'est pour un stage, rép vite. » Personne ne te répond.",
            "Registre inadapté",
            [["Écrire : « Bonjour Madame, Monsieur, je suis élève en 1re bac pro et je cherche un stage du… au… »", true, "Oui : on s'adresse à une entreprise avec un registre soutenu."], ["Renvoyer le même mail plusieurs fois.", false, "Le problème n'est pas le nombre de mails, mais leur ton."], ["Ajouter des émojis pour être sympa.", false, "Pas dans un mail professionnel."]],
            "On n'écrit pas à une entreprise comme à un ami. Le bon registre montre ton sérieux avant même qu'on te rencontre."),
          bruit("La consigne de sécurité",
            "Tu expliques une consigne de sécurité à un nouveau stagiaire. Il hoche la tête. Le lendemain, il fait exactement l'inverse.",
            "Pas de vérification",
            [["Lui demander de reformuler la consigne avec ses mots.", true, "Oui : la reformulation montre s'il a vraiment compris."], ["Lui demander « T'as compris ? »", false, "La plupart des gens répondent oui, même quand ce n'est pas le cas."], ["Répéter la consigne plus fort.", false, "Le volume n'aide pas à comprendre."]],
            "Un hochement de tête ne prouve pas qu'on a compris. Faire reformuler, c'est vérifier pour de vrai."),
          bruit("L'annonce dans le bruit",
            "En atelier, les machines tournent. Le professeur annonce le changement de salle du cours suivant. La moitié de la classe n'a rien entendu.",
            "Canal inadapté",
            [["Couper les machines, puis annoncer, ou écrire l'information au tableau.", true, "Oui : on choisit un moyen qui permet au message d'arriver."], ["Le dire une deuxième fois.", false, "Dans le même bruit, le résultat sera le même."], ["Compter sur les élèves pour se passer l'information.", false, "C'est le jeu du message déformé !"]],
            "Le canal compte autant que le message : à l'oral dans le bruit, une information importante se perd.")
        ]
      }
    }],
    retenir: [
      "Une communication, c'est un émetteur, un message, un canal, un récepteur et un retour (feed-back).",
      "Les « bruits » qui perturbent : message flou, registre inadapté, canal inadapté, pas de vérification, non-verbal mal lu.",
      "Une consigne claire dit qui, quoi, quand, comment, et on vérifie qu'elle est comprise.",
      "À l'écrit, le ton disparaît : les mots doivent en dire plus."
    ],
    ressource: {
      titre: "Bien communiquer",
      intro: "Une fiche pour comprendre les malentendus et donner des consignes claires.",
      blocs: [
        { type: "etapes", titre: "Le circuit d'un message", items: ["L'émetteur : celui qui parle ou écrit", "Le message : ce qu'il veut dire", "Le canal : oral, SMS, mail, affiche…", "Le récepteur : celui qui reçoit", "Le retour : la preuve que le message est compris"] },
        { type: "tableau", titre: "Les bruits qui perturbent",
          colonnes: ["Bruit", "Exemple", "Ce qui aide"],
          lignes: [
            ["Message flou", "« Tu me fais ça pour tout à l'heure. »", "Préciser : qui, quoi, quand, comment"],
            ["Registre inadapté", "« Slt, rép vite » à une entreprise", "Adapter ses mots à la personne"],
            ["Canal inadapté", "Une annonce importante dans le bruit", "Choisir un moyen qui arrive : écrire, couper le bruit"],
            ["Pas de vérification", "Un hochement de tête, puis l'erreur", "Faire reformuler"],
            ["Non-verbal mal lu", "Un regard pris pour une provocation", "Vérifier avant de réagir"]
          ] },
        { type: "tableau", titre: "Trois façons de communiquer",
          colonnes: ["Type", "Ce qui compte", "Exemple"],
          lignes: [
            ["Verbal", "Les mots choisis", "« Peux-tu ranger les outils dans l'armoire 2 avant 16 h ? »"],
            ["Non-verbal", "Le ton, le regard, la posture, les gestes", "Un ton calme, regarder la personne"],
            ["Écrit", "Les mots, la ponctuation, la politesse", "Un mail avec bonjour, une phrase claire, une signature"]
          ] },
        { type: "liste", titre: "Ma check-list d'une consigne claire", items: ["Qui doit faire ?", "Quoi, exactement ?", "Quand, pour quelle heure ?", "Comment, avec quoi ?", "Je vérifie : « Tu peux me redire ce que tu vas faire ? »"] }
      ]
    },
    traces: [{
      titre: "Ma consigne claire", moteur: "carnet",
      rendre: true,
      outil: { id: "consigne-claire", nom: "Ma consigne claire", description: "Transformer une consigne floue en consigne précise." },
      config: {
        cle: "consigne-claire", titreDoc: "Ma consigne claire",
        intro: "Réécris cette consigne floue : « Tu ranges le truc là-bas quand t'as fini. »",
        champs: [
          { id: "qui", label: "Qui ?", placeholder: "Ex. : Toi, Yanis" },
          { id: "quoi", label: "Quoi ?", placeholder: "Ex. : la perceuse et les forets" },
          { id: "quand", label: "Quand ?", placeholder: "Ex. : avant 16 h" },
          { id: "comment", label: "Comment ?", placeholder: "Ex. : dans l'armoire 2, forets dans leur boîte" },
          { id: "consigne", label: "Ma consigne réécrite", multi: true },
          { id: "verif", label: "Comment je vérifie qu'elle est comprise ?", placeholder: "Ex. : Tu peux me redire ce que tu vas faire ?" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "À quoi sert le retour (feed-back) dans une communication ?",
        options: ["À vérifier que le message a été compris", "À répéter le message plus fort", "À changer de sujet"], bonne: 0,
        explication: "Le retour, c'est la preuve que le message est arrivé : une reformulation, une question, une action." },
      { type: "ouverte", enonce: "Donne un exemple de « bruit » dans un message écrit.", modele: "Un SMS très court qui paraît sec, un mail sans bonjour, des abréviations que l'autre ne comprend pas, un message sans date ni heure." },
      { type: "ouverte", enonce: "Améliore la consigne : « Tu ranges le truc là-bas quand t'as fini. »", modele: "Yanis, quand tu as fini ton montage, range la perceuse et les forets dans l'armoire 2, avant 16 h. Tu peux me redire où tu les ranges ?" }
    ],
    plusLoin: [
      { titre: "Mes parents me prennent la tête !", source: FSJ, url: "https://www.filsantejeunes.com/mes-parents-me-prennent-la-tete-5949", description: "Quand le dialogue se tend à la maison : comprendre l'autre et parler sans crier." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-10 min", "Accroche", "Jeu du message déformé : une consigne technique passe de bouche à oreille entre 5 élèves, puis on compare avec l'original.", "Fait repérer ce qui s'est perdu ou transformé à chaque passage."],
        ["10-25 min", "Activité", "Analyse 6 malentendus et identifie où la communication a déraillé.", "Relance : « Qui aurait pu éviter le problème, et comment ? »"],
        ["25-35 min", "Mise en commun", "Construit le schéma : émetteur, message, canal, récepteur, retour, et les bruits.", "Distingue le verbal, le non-verbal et l'écrit."],
        ["35-45 min", "Trace", "Réécrit une consigne floue en consigne claire, puis répond à « Je vérifie ».", "Donne la règle : qui, quoi, quand, comment, et je vérifie."]
      ],
      vigilance: "Adaptez les situations à vos filières : tableau électrique pour la CIEL, consigne de poste ou de ronde pour les Métiers de la sécurité."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Écoute active et reformulation
  // ===================================================================
  S.push({
    id: "cps-1re-2", pilier: "cps", niveau: "1re", num: 2, duree: "45 min",
    titre: "Écoute active et reformulation",
    objectifCourt: "Écouter vraiment, sans couper ni juger",
    objectif: "Écouter sans couper ni juger, et reformuler pour montrer qu'on a compris.",
    rappel: { seance: "cps-1re-1", texte: "La dernière fois, tu as vu qu'un message peut se perdre en route, et qu'il faut vérifier qu'on a été compris. Aujourd'hui, on passe de l'autre côté : écouter vraiment." },
    aqcms: {
      pourquoi: "On croit écouter alors qu'on prépare déjà sa réponse.",
      apport: "L'autre se sent compris, et je comprends vraiment ce qu'il veut.",
      ou: "Face à un client mécontent, un tuteur qui explique une procédure, un ami qui va mal.",
      lie: "La communication (séance 1), la gestion des conflits (séance 5)."
    },
    accroche: "Imagine que tu racontes un souci à quelqu'un. Il te coupe, te dit ce que tu aurais dû faire, puis parle de lui. Comment te sens-tu ? Et si, au contraire, il t'écoutait jusqu'au bout et te disait « Si je comprends bien… » ?",
    activites: [{
      titre: "Quelle réponse montre que tu écoutes ?", moteur: "scenario",
      consigne: "Six répliques. À chaque fois, une seule réponse est une vraie reformulation. Les autres sont des pièges : conseil, jugement, interprétation.",
      config: {
        id: "cps-1re-2",
        cas: [
          replique("Le client mécontent", "Un client", "Ça fait trois fois qu'on me livre la mauvaise pièce !",
            [["Vous devriez vérifier votre bon de commande.", "conseil"], ["Si je comprends bien, c'est la troisième erreur et vous en avez assez.", "reformulation"], ["Calmez-vous, ce n'est pas si grave.", "jugement"], ["Vous êtes toujours pressé, vous, non ?", "interpretation"]],
            "Le client se sent entendu : sa colère baisse, et on peut chercher une solution ensemble."),
          replique("La procédure du tuteur", "Ton tuteur", "Tu coupes l'alimentation, tu consignes, tu vérifies l'absence de tension, et seulement après tu interviens.",
            [["C'est long comme procédure.", "jugement"], ["Vous pensez que je ne vais pas y arriver ?", "interpretation"], ["Donc : couper, consigner, vérifier l'absence de tension, puis intervenir. C'est bien ça ?", "reformulation"], ["Vous devriez l'afficher au mur.", "conseil"]],
            "En reformulant une procédure, tu vérifies que tu l'as bien comprise, et ton tuteur peut corriger tout de suite une erreur."),
          replique("Le stage difficile", "Un camarade", "J'en ai marre, personne ne m'explique rien dans cette boîte.",
            [["T'as qu'à changer de stage.", "conseil"], ["Tu exagères, c'est pareil pour tout le monde.", "jugement"], ["En fait, t'aimes pas ce métier.", "interpretation"], ["Tu te sens un peu seul dans ton stage, sans explications.", "reformulation"]],
            "Ton camarade se sent compris. Ensuite seulement, vous pourrez chercher ensemble qui pourrait l'aider."),
          replique("La dispute à la maison", "Un ami", "Je me suis encore pris la tête avec mes parents.",
            [["Ça recommence avec tes parents, et ça a l'air de te peser.", "reformulation"], ["Laisse tomber, ignore-les.", "conseil"], ["Moi aussi, l'autre jour, avec mon père…", "soi"], ["Tu dois les provoquer aussi.", "jugement"]],
            "La reformulation ouvre la porte : ton ami peut continuer à parler s'il en a besoin."),
          replique("Le dossier en retard", "Une collègue", "Je n'arrive pas à finir ce dossier avant ce soir.",
            [["Il fallait t'y prendre plus tôt.", "jugement"], ["Tu n'aimes pas ce genre de dossier, c'est ça ?", "interpretation"], ["Demande un délai au chef.", "conseil"], ["Tu es à court de temps pour ce dossier.", "reformulation"]],
            "Reformuler d'abord permet de comprendre ce qui bloque vraiment avant de proposer une aide."),
          replique("Le doute avant l'examen", "Une camarade", "Je ne sais pas si je vais réussir mon examen.",
            [["Mais si, arrête de stresser pour rien.", "jugement"], ["Tu doutes de toi pour l'examen.", "reformulation"], ["Révise plus, c'est tout.", "conseil"], ["Tu dis ça pour qu'on te rassure.", "interpretation"]],
            "« Arrête de stresser » ne rassure personne. Montrer qu'on a compris le doute, ça aide vraiment.")
        ]
      }
    }, {
      titre: "L'écoute en binôme", moteur: "binome",
      consigne: "Par deux. L'élève A raconte pendant 3 minutes, l'élève B écoute sans couper, puis reformule. Ensuite, on change de rôle.",
      config: {
        duree: 180,
        sujets: ["Mon meilleur souvenir de stage", "Un objet auquel je tiens, et pourquoi", "Ce que je ferais avec une journée libre", "Un métier qui m'intrigue", "Un endroit où je me sens bien", "Une personne qui m'a appris quelque chose", "Mon plat préféré et son histoire", "Un défi que j'aimerais relever"]
      }
    }],
    retenir: [
      "Trois gestes d'écoute : le silence, les questions ouvertes, la reformulation.",
      "Les pièges : couper, conseiller trop tôt, juger, interpréter, ramener à soi.",
      "Reformuler, c'est redire avec ses mots ce que l'autre a dit, sans rien ajouter.",
      "Écouter, ce n'est pas être d'accord : c'est comprendre."
    ],
    ressource: {
      titre: "Écouter vraiment",
      intro: "Une fiche pour écouter un client, un tuteur ou un ami.",
      blocs: [
        { type: "etapes", titre: "Les 3 gestes de l'écoute", items: ["Je me tais et je regarde la personne", "Je pose des questions ouvertes", "Je reformule : « Si je comprends bien… »"] },
        { type: "tableau", titre: "Les pièges qui empêchent d'écouter",
          colonnes: ["Piège", "Exemple", "Ce que ressent l'autre"],
          lignes: [
            ["Couper", "« Attends, attends… »", "Pas important"],
            ["Conseiller trop tôt", "« T'as qu'à… »", "Pas compris"],
            ["Juger", "« Tu exagères. »", "Critiqué"],
            ["Interpréter", "« En fait, t'aimes pas ce métier. »", "Mal compris"],
            ["Ramener à soi", "« Moi aussi, une fois… »", "Oublié"]
          ] },
        { type: "tableau", titre: "Questions ouvertes ou fermées",
          colonnes: ["Type", "Exemple", "Effet"],
          lignes: [
            ["Fermée", "« Ça va ? »", "Réponse en un mot : oui ou non"],
            ["Ouverte", "« Comment ça s'est passé ? »", "L'autre peut développer"],
            ["Ouverte", "« Qu'est-ce qui te gêne le plus ? »", "On comprend ce qui compte pour lui"]
          ] },
        { type: "liste", titre: "Formules pour reformuler", items: ["« Si je comprends bien… »", "« Tu veux dire que… »", "« Ce qui te gêne, c'est… »", "« Donc, pour toi… C'est bien ça ? »"] }
      ]
    },
    verifie: [
      { type: "qcm", enonce: "Quelle est la différence entre reformuler et conseiller ?",
        options: ["Reformuler, c'est redire ce que l'autre a dit ; conseiller, c'est dire quoi faire", "C'est la même chose", "Conseiller montre mieux qu'on a écouté"], bonne: 0,
        explication: "Le conseil peut venir ensuite, une fois qu'on a vraiment compris." },
      { type: "ouverte", enonce: "Reformule : « J'en ai marre, personne ne m'explique rien dans cette boîte. »", modele: "Si je comprends bien, tu te sens un peu seul dans ce stage, et tu aimerais qu'on t'explique davantage." },
      { type: "ouverte", enonce: "Cite deux attitudes qui montrent qu'on écoute, sans parler.", modele: "Regarder la personne, hocher la tête, se tourner vers elle, poser son téléphone, ne pas couper." }
    ],
    plusLoin: [
      { titre: "J'ai un copain, une copine qui va mal… Que faire ?", source: FSJ, url: "https://www.filsantejeunes.com/jai-un-copain-une-copine-qui-va-mal-que-faire-21568", description: "Écouter un ami en difficulté, et savoir quand passer le relais." },
      { titre: "Mon ami-e va mal", source: FSJ, url: "https://www.filsantejeunes.com/mon-ami-e-va-mal-5951", description: "Repérer le mal-être d'un ami et réagir quand il se confie." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Imagine deux façons d'être écouté : l'une où l'on coupe, conseille et juge, l'autre où l'on écoute.", "Fait dire ce que ressent celui qui parle dans chaque cas."],
        ["8-18 min", "Activité 1", "Choisit la vraie reformulation parmi 4 réponses, sur 6 répliques.", "Distingue reformuler, interpréter, conseiller et juger."],
        ["18-35 min", "Activité 2", "En binôme, 3 minutes chacun sur un sujet tiré au sort : l'un raconte, l'autre écoute puis reformule.", "Circule, repère les écouteurs qui coupent ou conseillent."],
        ["35-45 min", "Mise en commun et trace", "Dit ce qui était difficile. Garde la fiche « Écouter vraiment ».", "Rappelle les 3 gestes : silence, questions ouvertes, reformulation."]
      ],
      vigilance: "Les sujets du binôme sont neutres. Un élève peut changer de sujet ou de partenaire sans se justifier."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Coopérer et travailler en équipe
  // ===================================================================
  var ROLES = [
    { nom: "Organisateur", ex: "Je répartis les tâches" },
    { nom: "Gardien du temps", ex: "Je surveille l'heure" },
    { nom: "Secrétaire", ex: "Je note les idées et les décisions" },
    { nom: "Médiateur", ex: "J'apaise et je fais parler chacun" },
    { nom: "Créatif", ex: "Je propose des idées" },
    { nom: "Observateur", ex: "Je repère les oublis et les erreurs" },
    { nom: "Porte-parole", ex: "Je présente le travail du groupe" }
  ];
  S.push({
    id: "cps-1re-3", pilier: "cps", niveau: "1re", num: 3, duree: "45 min",
    titre: "Coopérer et travailler en équipe",
    objectifCourt: "Réussir ensemble ce qu'on ne peut pas faire seul",
    objectif: "Vivre une tâche impossible à réussir seul, identifier les rôles dans un groupe et repérer le sien.",
    rappel: { seance: "cps-1re-2", texte: "La dernière fois, tu t'es entraîné à écouter sans couper et à reformuler. C'est la base pour travailler à plusieurs : aujourd'hui, on coopère en équipe." },
    aqcms: {
      pourquoi: "En entreprise, presque tout se fait en équipe, avec des gens qu'on n'a pas choisis.",
      apport: "Savoir quelle place je prends dans un groupe, et comment l'aider à avancer.",
      ou: "Le chef-d'œuvre, les travaux d'atelier, une équipe en stage, un club sportif.",
      lie: "L'écoute (séance 2), les conflits dans un groupe (séance 5)."
    },
    accroche: "Quel est le pire et le meilleur souvenir que tu as d'un travail de groupe ? « Un seul qui bosse », « personne n'écoute », « on a trop rigolé et on a réussi »…",
    activites: [{
      titre: "L'enquête de l'armoire électrique", moteur: "defi",
      consigne: "Par groupes de 4. Chacun choisit un numéro et ne voit que ses indices. Personne ne peut montrer son écran : il faut tout dire à l'oral.",
      config: {
        contexte: "Ce matin, l'armoire électrique de l'atelier B a été retrouvée ouverte, sans sécurité. Quatre personnes ont travaillé hier après-midi : Adam, Bérénice, Chloé et Dylan. Qui l'a laissée ouverte ?",
        note: "Groupe de 3 ? Un élève prend deux numéros. Groupe de 5 ? Deux élèves partagent un numéro.",
        joueurs: {
          "1": ["Le badge de l'armoire indique une seule ouverture hier, à 16 h 20.", "Adam est parti à 15 h 30 : son badge de sortie le prouve.", "Dylan est stagiaire.", "La machine à café de l'atelier était en panne.", "L'armoire se referme avec une clé spéciale."],
          "2": ["Les stagiaires n'ont pas l'habilitation électrique.", "Chloé animait une réunion en salle 3 de 16 h à 17 h.", "Bérénice dit avoir changé un disjoncteur dans l'après-midi.", "Il pleuvait hier en fin de journée.", "La réunion de Chloé était filmée pour les collègues à distance."],
          "3": ["Seules les personnes habilitées peuvent ouvrir l'armoire.", "Bérénice est habilitée.", "Chloé est habilitée.", "Adam est habilité.", "Le chef d'atelier était en congé hier."],
          "4": ["Le disjoncteur changé hier se trouve dans l'armoire B.", "Le planning indique que Bérénice travaillait à l'atelier B de 14 h à 18 h.", "Dylan a aidé Chloé à préparer la salle 3 à 15 h 45.", "Adam a laissé sa veste au vestiaire.", "La porte de l'atelier B grince."]
        },
        question: "Qui a laissé l'armoire ouverte ?",
        options: [
          { texte: "Adam", ok: false, retour: "Adam est habilité, mais regardez à quelle heure il est parti." },
          { texte: "Bérénice", ok: true, retour: "Elle est habilitée, elle travaillait à l'atelier B, elle a changé un disjoncteur de l'armoire B, et les autres ne pouvaient pas l'ouvrir à 16 h 20." },
          { texte: "Chloé", ok: false, retour: "Chloé est habilitée, mais où était-elle à 16 h 20 ?" },
          { texte: "Dylan", ok: false, retour: "Dylan est stagiaire : peut-il ouvrir l'armoire ?" }
        ],
        bilan: "Qui a organisé ? Qui a noté ? Qui a vérifié que tout le monde avait parlé ? Certains indices ne servaient à rien : qui les a repérés ?"
      }
    }, {
      titre: "Le rôle que j'ai pris", moteur: "choisir",
      consigne: "Pendant l'enquête, quel rôle as-tu pris ? Tu peux en choisir deux.",
      config: { cle: "roles-pris", max: 2, min: 1, resume: "Le rôle que j'ai pris", titre: "Rôles", cartes: ROLES }
    }],
    retenir: [
      "Certaines tâches sont impossibles seul : chaque membre du groupe apporte une information ou une compétence.",
      "Les rôles utiles : organisateur, gardien du temps, secrétaire, médiateur, créatif, observateur, porte-parole.",
      "Aucun rôle n'est meilleur qu'un autre, et un rôle dépend de la situation.",
      "Un groupe avance quand chacun parle, écoute et vérifie que tout le monde a compris."
    ],
    ressource: {
      titre: "Travailler en équipe",
      intro: "Une fiche pour le chef-d'œuvre, l'atelier ou une équipe en stage.",
      blocs: [
        { type: "tableau", titre: "Les rôles dans un groupe",
          colonnes: ["Rôle", "Ce qu'il fait", "Sa phrase"],
          lignes: [
            ["Organisateur", "Répartit les tâches", "« Qui s'occupe de quoi ? »"],
            ["Gardien du temps", "Surveille l'heure", "« Il nous reste 10 minutes. »"],
            ["Secrétaire", "Note les idées et les décisions", "« Je note : on a décidé que… »"],
            ["Médiateur", "Apaise et fait parler chacun", "« On n'a pas entendu Sarah. »"],
            ["Créatif", "Propose des idées", "« Et si on essayait… ? »"],
            ["Observateur", "Repère les oublis", "« On a oublié l'étape 3. »"],
            ["Porte-parole", "Présente le travail", "« Notre groupe a trouvé que… »"]
          ] },
        { type: "liste", titre: "Les règles d'un bon travail de groupe", items: ["Chacun parle à son tour", "On écoute jusqu'au bout", "On répartit les tâches dès le début", "On surveille le temps", "On décide ensemble, et on note la décision", "On vérifie que tout le monde a compris"] },
        { type: "texte", titre: "À savoir", texte: "Un rôle n'est pas une étiquette : on peut être organisateur dans un groupe et créatif dans un autre. Essayer un nouveau rôle, c'est développer une compétence." }
      ]
    },
    traces: [{
      titre: "Le rôle que j'aimerais essayer", moteur: "choisir",
      outil: { id: "mon-role", nom: "Mon rôle dans un groupe", description: "Le rôle que je veux essayer dans mon prochain travail de groupe." },
      consigne: "Choisis un rôle que tu n'as pas encore pris et que tu aimerais essayer, par exemple dans ton chef-d'œuvre.",
      config: { cle: "role-a-essayer", max: 1, min: 1, resume: "Le rôle que j'aimerais essayer", titre: "Rôles", cartes: ROLES }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite trois rôles utiles dans un groupe.", modele: "Organisateur, gardien du temps, secrétaire, médiateur, créatif, observateur, porte-parole." },
      { type: "qcm", enonce: "Pourquoi l'enquête était-elle impossible à résoudre seul ?",
        options: ["Chacun n'avait qu'une partie des indices", "Les questions étaient trop difficiles", "Il fallait un ordinateur par personne"], bonne: 0,
        explication: "Il fallait rassembler les informations de tous : c'est le principe de la coopération." },
      { type: "ouverte", prive: true, enonce: "Quel rôle aimerais-tu essayer dans ton chef-d'œuvre ?", modele: "Choisis un rôle que tu prends rarement : c'est en essayant qu'on progresse." }
    ],
    plusLoin: [
      { titre: "Quand le groupe pense à ta place !", source: FSJ, url: "https://www.filsantejeunes.com/quand-le-groupe-pense-a-ta-place-6817", description: "Le groupe peut aussi pousser à mal agir : garder son propre jugement." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Dit ce qu'il a vécu de pire et de mieux dans un travail de groupe.", "Note sans commenter : « un seul qui bosse », « personne n'écoute »…"],
        ["5-25 min", "Activité", "Groupes de 4 : chacun voit 5 indices sur son écran. Personne ne montre son écran, tout se dit à l'oral.", "Observe sans aider. Note qui organise, qui note, qui se tait, qui relance."],
        ["25-37 min", "Mise en commun", "Découvre les rôles : organisateur, gardien du temps, secrétaire, médiateur, créatif, observateur, porte-parole.", "Restitue ses observations sans nommer personne. Aucun rôle n'est meilleur."],
        ["37-45 min", "Trace", "Fait son auto-évaluation : le rôle qu'il a pris, celui qu'il aimerait essayer.", "Propose de réutiliser ces rôles dans le chef-d'œuvre."]
      ],
      vigilance: "L'adulte restitue sans nommer d'élève et sans étiqueter (« tu es un suiveur »). Solution de l'enquête : Bérénice."
    }
  });

  // ===================================================================
  // SÉANCE 4 · Exprimer ses émotions dans la relation à l'autre
  // ===================================================================
  var CHAMPS_JE = [
    { id: "fait", label: "Quand…", aide: "un fait précis, sans juger", placeholder: "tu arrives après 8 h" },
    { id: "emotion", label: "je me sens…", aide: "une émotion", placeholder: "énervé" },
    { id: "besoin", label: "parce que j'ai besoin…", aide: "mon besoin", placeholder: "de commencer le travail à deux" },
    { id: "demande", label: "Est-ce que tu pourrais… ?", aide: "une demande concrète", placeholder: "arriver à l'heure demain" }
  ];
  var GABARIT_JE = "Quand {fait}, je me sens {emotion} parce que j'ai besoin {besoin}. Est-ce que tu pourrais {demande} ?";
  S.push({
    id: "cps-1re-4", pilier: "cps", niveau: "1re", num: 4, duree: "45 min",
    titre: "Exprimer ses émotions dans la relation à l'autre",
    objectifCourt: "Dire ce qui ne va pas sans accuser",
    objectif: "Transformer un reproche en message « Je » qui dit ce que je ressens sans accuser l'autre.",
    rappel: { seance: "cps-1re-3", texte: "La dernière fois, tu as vu qu'en groupe chacun a un rôle, et que ça ne se passe pas toujours bien. Quand quelque chose ne va pas, comment le dire sans accuser ? Aujourd'hui : le message « Je »." },
    aqcms: {
      pourquoi: "Un « Tu » accusateur provoque presque toujours une défense ou une contre-attaque.",
      apport: "Dire ce qui ne va pas sans déclencher une dispute.",
      ou: "Avec un collègue qui ne fait pas sa part, un proche, un professeur, dans mon couple.",
      lie: "Mes émotions (Seconde, séance 1), m'affirmer (Seconde, séance 5), gérer un conflit (séance 5)."
    },
    accroche: "Compare : « Tu es toujours en retard, tu t'en fiches de nous. » et « Quand tu arrives après 8 h, je dois commencer seul et ça m'énerve. » Laquelle aurais-tu envie d'entendre ?",
    activites: [{
      titre: "L'atelier du message « Je »", moteur: "reformuler",
      consigne: "Transforme chaque reproche en message en 4 cases. L'application te signale les mots qui accusent : à toi de les retirer.",
      config: {
        champs: CHAMPS_JE, gabarit: GABARIT_JE,
        alertes: [
          { motif: "\\b(toujours|jamais)\\b", conseil: "« toujours » et « jamais » généralisent. Décris plutôt un fait précis." },
          { motif: "\\b(tu es|t'es|t es|vous êtes)\\b", conseil: "« Tu es… » juge la personne. Parle de ce qu'elle a fait, pas de ce qu'elle est." },
          { motif: "(^|[\\s,.!?'])(nul|nulle|idiot|idiote|débile|égoïste|feignant|feignante|fainéant|fainéante|relou)($|[\\s,.!?])", conseil: "Ce mot est un jugement : il blesse et n'explique rien. Décris le fait." }
        ],
        items: [
          { reproche: "Tu es toujours en retard, tu t'en fiches de nous.", exemple: "Quand tu arrives après 8 h, je me sens énervé parce que j'ai besoin de commencer le travail à deux. Est-ce que tu pourrais arriver à l'heure demain ?" },
          { reproche: "T'es nul, tu fais jamais ta part dans le groupe.", exemple: "Quand je fais seul les deux tiers du dossier, je me sens découragé parce que j'ai besoin qu'on partage le travail. Est-ce que tu pourrais prendre la partie 3 ?" },
          { reproche: "Tu me prends jamais au sérieux.", exemple: "Quand tu ris pendant que je parle de mon projet, je me sens blessé parce que j'ai besoin d'être écouté. Est-ce que tu pourrais m'écouter jusqu'au bout ?" },
          { reproche: "Tu fouilles toujours dans mes affaires !", exemple: "Quand je trouve mon sac ouvert, je me sens en colère parce que j'ai besoin d'intimité. Est-ce que tu pourrais me demander avant ?" },
          { reproche: "Vous ne m'expliquez jamais rien. (à un tuteur)", exemple: "Quand je dois utiliser un logiciel que je ne connais pas, je me sens inquiet parce que j'ai besoin de comprendre pour bien faire. Est-ce que vous pourriez me montrer une fois ?" },
          { reproche: "T'es égoïste, tu penses qu'à toi.", exemple: "Quand tu choisis le film sans me demander, je me sens mis de côté parce que j'ai besoin d'avoir mon mot à dire. Est-ce qu'on pourrait choisir ensemble la prochaine fois ?" }
        ]
      }
    }],
    retenir: [
      "Le message « Je » a 4 cases : le fait, l'émotion, le besoin, la demande.",
      "On décrit un fait précis, sans « toujours », sans « jamais », sans « tu es ».",
      "C'est la suite de la méthode en 3 temps vue en Seconde.",
      "Le message « Je » ne garantit pas que l'autre accepte, mais il évite de déclencher une dispute."
    ],
    ressource: {
      titre: "Le message « Je »",
      intro: "Une fiche pour dire ce qui ne va pas, sans accuser.",
      blocs: [
        { type: "etapes", titre: "Les 4 cases", items: ["Quand… (le fait précis)", "je me sens… (mon émotion)", "parce que j'ai besoin… (mon besoin)", "Est-ce que tu pourrais… ? (ma demande)"] },
        { type: "tableau", titre: "Du « Tu » qui accuse au « Je » qui explique",
          colonnes: ["« Tu » qui accuse", "« Je » qui explique"],
          lignes: [
            ["« Tu es toujours en retard ! »", "« Quand tu arrives après 8 h, je dois commencer seul et ça m'énerve. »"],
            ["« Tu fais jamais ta part. »", "« Quand je fais seul le dossier, je me sens découragé. On peut partager ? »"],
            ["« Tu me prends pas au sérieux. »", "« Quand tu ris pendant que je parle, je me sens blessé. »"]
          ] },
        { type: "liste", titre: "Les mots qui accusent (à éviter)", items: ["toujours, jamais", "tu es…, t'es…", "les insultes et les jugements : nul, égoïste, feignant…", "les menaces : « tu vas voir »"] },
        { type: "texte", titre: "À savoir", texte: "Si tu es trop en colère pour parler calmement, attends : « J'ai besoin de me calmer, on en reparle tout à l'heure. » Un message « Je » se dit mieux à froid." }
      ]
    },
    traces: [{
      titre: "Mes messages « Je »", moteur: "liste",
      outil: { id: "messages-je", nom: "Mes messages « Je »", description: "Les messages que j'aimerais dire, préparés à froid." },
      config: {
        cle: "messages-je", titreDoc: "Mes messages « Je »", titreListe: "Mes messages", bouton: "Garder ce message",
        intro: "Pour toi : écris un message « Je » que tu aurais aimé dire récemment. Il reste sur ton appareil.",
        gabarit: GABARIT_JE, champs: CHAMPS_JE
      }
    }],
    verifie: [
      { type: "ordre", enonce: "Remets les 4 cases du message « Je » dans l'ordre.", elements: ["Le fait", "L'émotion", "Le besoin", "La demande"], explication: "Quand…, je me sens…, parce que j'ai besoin…, est-ce que tu pourrais… ?" },
      { type: "qcm", enonce: "Pourquoi éviter « toujours » et « jamais » ?",
        options: ["Ils généralisent, et l'autre se défend au lieu d'écouter", "Ce sont des gros mots", "Ils rendent la phrase trop longue"], bonne: 0,
        explication: "L'autre va chercher l'exception (« Mais non, pas toujours ! ») au lieu d'entendre ce que tu ressens." },
      { type: "ouverte", enonce: "Transforme : « T'es nul, tu fais jamais ta part dans le groupe. »", modele: "Quand je fais seul les deux tiers du dossier, je me sens découragé parce que j'ai besoin qu'on partage le travail. Est-ce que tu pourrais prendre la partie 3 ?" }
    ],
    plusLoin: [
      { titre: "Les violences verbales : quand les mots frappent, et blessent", source: FSJ, url: "https://www.filsantejeunes.com/les-violences-verbales-5664", description: "Pourquoi les mots blessent, et comment poser ses limites." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Compare un reproche en « Tu » et un message en « Je ». Dit lequel il aurait envie d'entendre.", "Fait repérer les mots qui accusent : toujours, jamais, tu es…"],
        ["8-15 min", "Notion", "Découvre les 4 cases : le fait, l'émotion, le besoin, la demande.", "Fait le lien avec la méthode en 3 temps vue en Seconde."],
        ["15-35 min", "Activité", "Transforme 6 reproches en messages « Je » avec l'atelier guidé.", "Fait lire quelques messages, vérifie qu'ils restent naturels et pas récités."],
        ["35-45 min", "Trace", "Écrit, pour lui, un message « Je » qu'il aurait aimé dire. Répond à « Je vérifie ».", "Rappelle que le message « Je » ne garantit pas que l'autre accepte."]
      ],
      vigilance: "Le message « Je » ne doit pas devenir une formule récitée : on accepte des phrases simples, à la manière de l'élève."
    }
  });

  // ===================================================================
  // SÉANCE 5 · Gérer les conflits de manière constructive
  // ===================================================================
  S.push({
    id: "cps-1re-5", pilier: "cps", niveau: "1re", num: 5, duree: "45 min",
    titre: "Gérer les conflits de manière constructive",
    objectifCourt: "Sortir d'un conflit sans perdant",
    objectif: "Reconnaître un type de conflit, choisir une attitude adaptée et savoir quand faire appel à un adulte.",
    rappel: { seance: "cps-1re-4", texte: "La dernière fois, tu as appris à dire ce que tu ressens sans accuser. Aujourd'hui, on va plus loin : traverser un vrai conflit sans perdant, et savoir quand il faut appeler un adulte." },
    aqcms: {
      pourquoi: "Un conflit n'est pas un échec : c'est un désaccord à traiter avant qu'il ne grossisse.",
      apport: "Des étapes concrètes pour sortir d'un conflit sans perdant.",
      ou: "En atelier, en stage avec un collègue ou un tuteur, dans ma famille, dans un groupe de projet.",
      lie: "L'écoute (séance 2), la coopération (séance 3), le message « Je » (séance 4), mes besoins (Seconde, séance 2)."
    },
    accroche: "Pense à un désaccord récent, sans le dire. Était-ce un problème de partage (un objet, un horaire), de valeurs (ce qui est juste ou pas), ou un simple malentendu ?",
    activites: [{
      titre: "Quel type de situation ?", moteur: "cartes",
      consigne: "Classe chaque situation. Attention : l'une des catégories n'est pas un conflit.",
      config: {
        fin: "Tu sais maintenant reconnaître un conflit, et le distinguer d'un harcèlement.",
        manches: [{
          type: "classer", titre: "Conflit ou pas ?",
          categories: ["Conflit d'intérêts", "Conflit de valeurs", "Malentendu", "Harcèlement"],
          cartes: [
            { texte: "Deux élèves veulent le même poste d'atelier, le seul avec l'outil neuf.", reponse: "Conflit d'intérêts", explication: "Les deux veulent la même chose : on peut partager, alterner ou trouver une autre solution." },
            { texte: "Ton ami trouve normal de tricher à un contrôle. Toi, pas du tout.", reponse: "Conflit de valeurs", explication: "Vous n'avez pas la même idée de ce qui est juste. On peut en discuter, sans forcément se mettre d'accord." },
            { texte: "Ta collègue croit que tu as pris son badge, alors que tu l'as rangé à l'accueil.", reponse: "Malentendu", explication: "Une information manque : il suffit souvent de s'expliquer." },
            { texte: "Depuis des semaines, un groupe insulte le même élève sur une messagerie.", reponse: "Harcèlement", explication: "C'est répété, plusieurs contre un, avec un rapport de force : ce n'est pas un conflit. On ne négocie pas : on alerte un adulte." },
            { texte: "Deux équipes veulent la salle de réunion au même créneau.", reponse: "Conflit d'intérêts" },
            { texte: "Ton tuteur dit « Fais-le vite ». Tu comprends « bâcle-le ». Il voulait dire « commence tout de suite ».", reponse: "Malentendu" },
            { texte: "Ton coéquipier veut finir le projet en copiant un site. Toi, tu veux le faire vous-mêmes.", reponse: "Conflit de valeurs" }
          ],
          bilan: "Un conflit oppose des personnes à égalité. Le harcèlement, c'est autre chose : il faut toujours en parler à un adulte."
        }]
      }
    }, {
      titre: "L'arbre de décision", moteur: "scenario",
      consigne: "Deux conflits. À chaque étape, choisis une attitude et regarde la suite.",
      config: {
        id: "cps-1re-5",
        cas: [
          {
            titre: "Le poste d'atelier", depart: "a",
            noeuds: {
              a: { contexte: "Mehdi et toi voulez le même poste d'atelier : le seul avec l'outil neuf. Tu en as besoin pour ton TP noté.", qui: "Mehdi", texte: "Dégage, j'étais là avant !", question: "Que fais-tu ?",
                choix: [
                  { texte: "Bon… je vais ailleurs. (J'évite.)", type: "passif", vers: "eviter" },
                  { texte: "Non, c'est moi qui le prends ! (J'impose.)", type: "agressif", vers: "escalade" },
                  { texte: "J'ai besoin de cet outil pour mon TP noté. Toi, tu en as besoin pour quoi ?", type: "affirme", vers: "dialogue" }
                ] },
              eviter: { fin: { type: "passif", titre: "Tu as évité le conflit…", texte: "…sur le moment. Mais ton TP noté est en retard, et tu en veux à Mehdi. Éviter peut être utile pour se calmer, pas pour régler le problème." } },
              escalade: { qui: "Mehdi", texte: "Tu veux te battre ou quoi ?", question: "Le ton monte. Que fais-tu ?",
                choix: [
                  { texte: "Je le pousse.", type: "agressif", vers: "cadre" },
                  { texte: "Je m'éloigne et je préviens le professeur.", type: "affirme", vers: "prof" }
                ] },
              cadre: { fin: { type: "agressif", titre: "Ça dépasse le cadre.", texte: "Dès qu'il y a menace ou violence, ce n'est plus un conflit à régler entre vous : on arrête, on s'éloigne et on prévient un adulte." } },
              prof: { fin: { ok: true, titre: "Bon réflexe.", texte: "Quand le ton monte jusqu'à la menace, faire appel à un adulte n'est pas une faiblesse : c'est la bonne décision." } },
              dialogue: { qui: "Mehdi", texte: "Je dois finir mon montage avant 11 h, sinon je suis mort.", question: "Vous avez tous les deux un vrai besoin. Que proposes-tu ?",
                choix: [
                  { texte: "Bon, prends-le, je ferai sans. (Je cède.)", type: "passif", vers: "ceder" },
                  { texte: "Prends-le jusqu'à 10 h 30, je le prends après. (Compromis.)", type: "affirme", vers: "compromis" },
                  { texte: "On demande au prof s'il y a un autre outil. Sinon, on alterne toutes les 20 minutes ? (Je coopère.)", type: "affirme", vers: "cooperer" }
                ] },
              ceder: { fin: { type: "passif", titre: "Tu as cédé.", texte: "Mehdi est content, mais ton besoin n'est pas pris en compte. Céder peut être généreux de temps en temps, pas à chaque fois." } },
              compromis: { fin: { ok: true, titre: "Compromis.", texte: "Chacun lâche un peu : ça marche. Vous avez tous les deux une partie de ce que vous vouliez." } },
              cooperer: { fin: { ok: true, titre: "Coopération.", texte: "Vous cherchez ensemble une solution qui respecte vos deux besoins. C'est l'attitude qui règle le conflit le plus durablement." } }
            }
          },
          {
            titre: "Le reproche en stage", depart: "a",
            noeuds: {
              a: { contexte: "En stage, devant toute l'équipe, ta collègue Laura t'accuse d'avoir mal rangé le stock. Ce n'est pas toi.", qui: "Laura", texte: "C'est encore toi qui as mal rangé le stock !", question: "Que réponds-tu ?",
                choix: [
                  { texte: "C'est faux, t'es une menteuse !", type: "agressif", vers: "menace" },
                  { texte: "(Tu ne dis rien et tu baisses les yeux.)", type: "passif", vers: "silence" },
                  { texte: "Je ne suis pas d'accord : je n'étais pas au stock ce matin. Je suis mal à l'aise d'en parler devant tout le monde. On regarde ensemble à la pause ?", type: "affirme", vers: "pause" }
                ] },
              silence: { fin: { type: "passif", titre: "Le malentendu reste.", texte: "Toute l'équipe croit maintenant que c'est toi. Tu avais le droit de rétablir les faits, calmement." } },
              menace: { qui: "Laura", texte: "Tu vas voir à la sortie, toi.", question: "Elle te menace. Que fais-tu ?",
                choix: [
                  { texte: "Je la menace à mon tour.", type: "agressif", vers: "escalade" },
                  { texte: "Je préviens mon tuteur et j'appelle mon professeur référent de stage.", type: "affirme", vers: "relais" }
                ] },
              escalade: { fin: { type: "agressif", titre: "Ça dépasse le cadre.", texte: "Des menaces de part et d'autre : la situation peut dégénérer. En stage, ton professeur référent est là pour t'aider." } },
              relais: { fin: { ok: true, titre: "Bon réflexe.", texte: "Une menace dépasse le cadre d'un conflit entre collègues : on ne négocie pas, on prévient. C'est le rôle de ton tuteur et de ton professeur référent." } },
              pause: { qui: "Laura", texte: "Bon… d'accord. Mais quelqu'un l'a mal rangé, le stock.", question: "Que proposes-tu ?",
                choix: [
                  { texte: "Bon, c'était peut-être moi… (Je cède.)", type: "passif", vers: "ceder" },
                  { texte: "On propose au responsable une fiche de rangement : ça évitera que ça recommence. (Je coopère.)", type: "affirme", vers: "cooperer" }
                ] },
              ceder: { fin: { type: "passif", titre: "Tu as cédé sur un fait.", texte: "Reconnaître une faute que tu n'as pas faite, ce n'est pas apaiser : c'est créer un nouveau malentendu." } },
              cooperer: { fin: { ok: true, titre: "Coopération.", texte: "Tu as rétabli les faits sans humilier Laura, et tu proposes une solution utile pour toute l'équipe." } }
            }
          }
        ]
      }
    }],
    retenir: [
      "Trois grands types de conflits : d'intérêts, de valeurs, et les malentendus.",
      "Cinq attitudes : éviter, imposer, céder, faire un compromis, coopérer. Coopérer règle le plus durablement.",
      "La méthode en 4 étapes : j'observe les faits, je dis ce que je ressens, je dis mon besoin, je fais une demande. Puis j'écoute l'autre.",
      "Un harcèlement n'est pas un conflit : on ne négocie pas, on alerte un adulte. Pareil dès qu'il y a menace ou violence."
    ],
    ressource: {
      titre: "Sortir d'un conflit",
      intro: "Une fiche pour traverser un désaccord sans perdant, et savoir quand passer le relais.",
      blocs: [
        { type: "tableau", titre: "Les 5 attitudes face à un conflit",
          colonnes: ["Attitude", "Ce que je fais", "Utile quand…", "Le risque"],
          lignes: [
            ["Éviter", "Je m'éloigne, je ne dis rien", "Il faut d'abord se calmer", "Le problème revient"],
            ["Imposer", "Je force ma solution", "Il y a une urgence de sécurité", "L'autre se braque"],
            ["Céder", "Je laisse l'autre gagner", "L'enjeu est minuscule pour moi", "Mon besoin est oublié"],
            ["Compromis", "Chacun lâche un peu", "On doit décider vite", "Personne n'est vraiment satisfait"],
            ["Coopérer", "On cherche ensemble une solution pour les deux", "On veut régler le problème durablement", "Ça prend un peu de temps"]
          ] },
        { type: "etapes", titre: "La méthode en 4 étapes (communication non violente)", items: ["J'observe les faits, sans juger", "Je dis ce que je ressens", "Je dis mon besoin", "Je fais une demande concrète, puis j'écoute l'autre"] },
        { type: "tableau", titre: "Conflit ou harcèlement ?",
          colonnes: ["", "Conflit", "Harcèlement"],
          lignes: [
            ["Entre qui ?", "Des personnes à égalité", "Un ou plusieurs contre une personne isolée"],
            ["Combien de fois ?", "Un désaccord ponctuel", "Répété, pendant des jours ou des semaines"],
            ["Que faire ?", "Discuter, chercher une solution", "Ne pas négocier : alerter un adulte, appeler le 3018"]
          ] },
        { type: "liste", titre: "À qui demander de l'aide ?", items: ["Au lycée : le CPE, un professeur, l'infirmière, le référent harcèlement", "En stage : mon tuteur, et mon professeur référent de stage", "Harcèlement ou cyberharcèlement : le 3018 (gratuit, anonyme)"] }
      ]
    },
    traces: [{
      titre: "Mon conflit en 4 étapes (pour moi seul)", moteur: "liste",
      outil: { id: "conflit-4-etapes", nom: "Mon conflit en 4 étapes", description: "Préparer à froid ce que je veux dire dans un conflit." },
      config: {
        cle: "conflit-4-etapes", titreDoc: "Mon conflit en 4 étapes", titreListe: "Mes préparations", bouton: "Garder",
        intro: "Facultatif et privé. Si tu vis un conflit, prépare ici ce que tu pourrais dire. Si c'est un harcèlement ou s'il y a des menaces, parles-en plutôt à un adulte.",
        champs: [
          { id: "faits", label: "Les faits, sans juger", multi: true },
          { id: "ressens", label: "Ce que je ressens" },
          { id: "besoin", label: "Mon besoin" },
          { id: "demande", label: "Ma demande concrète", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Laquelle de ces attitudes N'EST PAS une des 5 attitudes face à un conflit ?",
        options: ["Coopérer", "Faire un compromis", "Humilier l'autre", "Éviter"], bonne: 2,
        explication: "Les 5 attitudes sont : éviter, imposer, céder, faire un compromis, coopérer. Humilier n'est jamais une solution." },
      { type: "ordre", enonce: "Remets les 4 étapes de la communication non violente dans l'ordre.", elements: ["J'observe les faits", "Je dis ce que je ressens", "Je dis mon besoin", "Je fais une demande"] },
      { type: "vf", enonce: "Quand un élève est harcelé, il faut organiser une médiation entre lui et ses harceleurs.", bonne: false,
        explication: "Le harcèlement repose sur un rapport de force : une médiation mettrait la victime face à ses agresseurs. On alerte un adulte, qui suit le protocole de l'établissement." }
    ],
    plusLoin: [
      { titre: "Faire des compromis : pourquoi ? jusqu'où ?", source: FSJ, url: "https://www.filsantejeunes.com/faire-des-compromis-pourquoi-jusquou-30859", description: "Trouver un arrangement sans renoncer à ce qui compte pour soi." },
      { titre: "Harcèlement scolaire : que faire ?", source: "e-Enfance / 3018", url: "https://e-enfance.org/informer/harcelement-scolaire/", description: "Victime ou témoin : les bons réflexes, et le 3018." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Classe 7 situations : conflit d'intérêts, de valeurs, malentendu, ou harcèlement.", "Fait distinguer conflit et harcèlement."],
        ["8-15 min", "Notion", "Découvre 5 attitudes : éviter, imposer, céder, compromis, coopérer.", "Montre que chacune a sa place, mais que coopérer règle durablement."],
        ["15-35 min", "Activité", "Suit deux études de cas avec l'arbre de décision : un conflit en atelier, un conflit en PFMP.", "Fait justifier chaque choix."],
        ["35-45 min", "Trace", "Retient la méthode en 4 étapes et les adultes vers qui se tourner. Répond à « Je vérifie ».", "Présente le rôle d'un médiateur et ses limites."]
      ],
      vigilance: "Un harcèlement n'est pas un conflit : jamais de médiation entre la victime et les auteurs, on suit le protocole pHARe. Un conflit réel et en cours ne se traite pas devant la classe."
    }
  });
})();
