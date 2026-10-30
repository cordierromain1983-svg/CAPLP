/*
 * PILIER CPS · TERMINALE « Moi et le monde »
 * Contenu validé (document « Pilier CPS – Terminale »).
 * Ressources « Pour aller plus loin » vérifiées en octobre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var FSJ = "Fil Santé Jeunes";

  // Dilemmes de la séance 2 : une décision, puis ses conséquences
  function dilemme(titre, contexte, options) {
    var noeuds = { a: { contexte: contexte, question: "Que fais-tu ?", choix: [] } };
    options.forEach(function (o, i) {
      var id = "c" + i;
      noeuds.a.choix.push({ texte: o.texte, vers: id });
      noeuds[id] = { fin: o.ok ? { ok: true, titre: "Décision réfléchie.", texte: o.consequences } : { type: "passif", titre: "Pèse les conséquences.", texte: o.consequences } };
    });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }

  // ===================================================================
  // SÉANCE 1 · Mes valeurs, mes choix
  // ===================================================================
  S.push({
    id: "cps-tle-1", pilier: "cps", niveau: "tle", num: 1, duree: "45 min",
    titre: "Mes valeurs, mes choix",
    objectifCourt: "Ce qui compte vraiment pour moi",
    objectif: "Identifier mes cinq valeurs principales et vérifier si mes choix récents leur correspondent.",
    rappel: { seance: "cps-1re-5", etiquette: "L'an dernier", texte: "En Première, tu as appris à vivre avec les autres : communiquer, écouter, coopérer, traverser un conflit. Cette dernière année, on passe à « Moi et le monde ». On commence par ce qui compte vraiment pour toi : tes valeurs." },
    aqcms: {
      pourquoi: "Quand on agit contre ses valeurs, on se sent mal sans toujours comprendre pourquoi.",
      apport: "Un repère pour choisir une formation, un employeur, un engagement.",
      ou: "Choisir entre deux offres d'emploi, refuser une pression, rédiger un projet motivé sur Parcoursup.",
      lie: "Mes besoins (Seconde, séance 2), mes décisions (séance 2), mon projet (séance 5)."
    },
    accroche: "Deux offres de premier emploi. La première est mieux payée, mais loin de tes proches. La seconde est moins payée, dans une équipe que tu apprécies, près de chez toi. Laquelle choisis-tu ? Ce qui fait pencher la balance, c'est une valeur.",
    activites: [{
      titre: "Le tri des valeurs", moteur: "tas",
      outil: { id: "mes-valeurs", nom: "Mes 5 valeurs clés", description: "Ce qui compte le plus pour moi, ma boussole pour choisir." },
      consigne: "Range chaque valeur dans un tas : essentiel, important ou secondaire. Il n'y a pas de bonne réponse. Ensuite, garde tes 5 valeurs clés.",
      config: {
        cle: "valeurs-tas", tas: ["Essentiel", "Important", "Secondaire"], garder: 5, mot: "valeurs clés", resume: "Mes 5 valeurs clés",
        cartes: [
          { nom: "Liberté", ex: "Décider moi-même de ma vie" },
          { nom: "Famille", ex: "Passer du temps avec mes proches" },
          { nom: "Amitié", ex: "Compter sur mes amis, et qu'ils comptent sur moi" },
          { nom: "Sécurité", ex: "Avoir une vie stable" },
          { nom: "Argent", ex: "Bien gagner ma vie" },
          { nom: "Honnêteté", ex: "Dire la vérité" },
          { nom: "Entraide", ex: "Aider et être aidé" },
          { nom: "Reconnaissance", ex: "Être apprécié pour ce que je fais" },
          { nom: "Aventure", ex: "Découvrir, voyager, oser" },
          { nom: "Justice", ex: "Que chacun soit traité équitablement" },
          { nom: "Travail bien fait", ex: "Être fier de ce que je réalise" },
          { nom: "Foi", ex: "Avoir une vie spirituelle" },
          { nom: "Santé", ex: "Prendre soin de mon corps et de mon moral" },
          { nom: "Respect", ex: "Respecter les autres et être respecté" },
          { nom: "Égalité", ex: "Les mêmes droits pour tous" },
          { nom: "Loyauté", ex: "Être fidèle à ceux qui comptent" },
          { nom: "Réussite", ex: "Atteindre mes objectifs" },
          { nom: "Créativité", ex: "Inventer, imaginer" },
          { nom: "Nature", ex: "Protéger l'environnement" },
          { nom: "Plaisir", ex: "Profiter de la vie" },
          { nom: "Courage", ex: "Affronter les difficultés" },
          { nom: "Tolérance", ex: "Accepter les différences" },
          { nom: "Autonomie", ex: "Me débrouiller par moi-même" },
          { nom: "Partage", ex: "Donner, ne pas tout garder pour moi" },
          { nom: "Engagement", ex: "M'investir pour une cause" },
          { nom: "Humour", ex: "Rire, ne pas tout prendre au sérieux" },
          { nom: "Apprendre", ex: "Découvrir, progresser" },
          { nom: "Tradition", ex: "Garder les coutumes de ma famille" },
          { nom: "Calme", ex: "Vivre sans trop de stress" },
          { nom: "Utilité", ex: "Servir à quelque chose pour les autres" }
        ]
      }
    }],
    retenir: [
      "Une valeur, c'est ce qui compte vraiment pour moi et qui guide mes choix.",
      "Il n'y a pas de bonnes ou de mauvaises valeurs : on ne juge pas celles des autres.",
      "Deux valeurs peuvent s'opposer (loyauté envers un ami, honnêteté envers l'employeur) : il faut alors choisir en conscience.",
      "Agir en accord avec ses valeurs donne de l'assurance ; agir contre elles crée un malaise."
    ],
    ressource: {
      titre: "Mes valeurs, ma boussole",
      intro: "Une fiche pour choisir une formation, un emploi ou un engagement en accord avec ce qui compte pour toi.",
      blocs: [
        { type: "tableau", titre: "Ne pas confondre",
          colonnes: ["Notion", "Ce que c'est", "Exemple"],
          lignes: [
            ["Valeur", "Ce qui compte pour moi, dans la durée", "La justice, la famille, le travail bien fait"],
            ["Besoin", "Ce qui me manque à un moment", "Du repos, de la reconnaissance"],
            ["Goût", "Ce que j'aime faire", "Le sport, l'informatique, la musique"]
          ] },
        { type: "liste", titre: "Quand deux de mes valeurs s'opposent", items: ["Quelles sont les deux valeurs en jeu ?", "Laquelle compte le plus pour moi, dans cette situation ?", "Y a-t-il une solution qui respecte un peu les deux ?", "Est-ce que je pourrai expliquer mon choix sans honte ?"] },
        { type: "tableau", titre: "Mes valeurs et mon avenir",
          colonnes: ["Si je tiens à…", "je peux regarder…"],
          lignes: [
            ["La sécurité", "La stabilité du contrat, le secteur qui recrute"],
            ["La famille", "La distance, les horaires, le travail le week-end"],
            ["L'utilité", "Les métiers où l'on aide, protège ou répare"],
            ["L'aventure", "La mobilité, les déplacements, l'étranger"],
            ["Le travail bien fait", "Les métiers où l'on voit le résultat de son travail"]
          ] }
      ]
    },
    traces: [{
      titre: "Mes valeurs en action", moteur: "liste",
      outil: { id: "valeurs-action", nom: "Mes valeurs en action", description: "Un exemple concret pour chacune de mes valeurs." },
      config: {
        cle: "valeurs-action", titreDoc: "Mes valeurs en action", titreListe: "Mes valeurs", bouton: "Ajouter",
        intro: "Pour chacune de tes 5 valeurs, donne un exemple tiré de ta vie. Elles te serviront pour ton projet, en séance 5.",
        gabarit: "{valeur} : par exemple, {exemple}.",
        champs: [
          { id: "valeur", label: "Ma valeur", placeholder: "Ex. : Entraide" },
          { id: "exemple", label: "Un exemple dans ma vie", placeholder: "Ex. : j'aide mon voisin âgé à porter ses courses" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Qu'est-ce qu'une valeur ?",
        options: ["Ce qui compte vraiment pour moi et guide mes choix", "Ce que je ressens sur le moment", "Une règle fixée par le lycée"], bonne: 0,
        explication: "Une émotion passe ; une valeur dure et oriente mes décisions." },
      { type: "ouverte", prive: true, enonce: "Cite une situation où deux de tes valeurs pourraient s'opposer.", modele: "Par exemple : la loyauté envers un ami et l'honnêteté, si cet ami te demande de mentir pour le couvrir." },
      { type: "ouverte", enonce: "Comment tes valeurs peuvent-elles t'aider à choisir une formation ou un emploi ?", modele: "Si je tiens à la famille, je regarde la distance et les horaires. Si je tiens à l'utilité, je regarde les métiers où l'on aide les autres." }
    ],
    plusLoin: [
      { titre: "Quand le groupe pense à ta place !", source: FSJ, url: "https://www.filsantejeunes.com/quand-le-groupe-pense-a-ta-place-6817", description: "Garder son propre jugement face à la pression du groupe." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Choisit entre deux offres de premier emploi.", "Fait dire ce qui a fait pencher la balance : c'est une valeur."],
        ["8-25 min", "Activité", "Trie 30 valeurs en trois tas, puis garde ses 5 valeurs clés.", "Précise qu'il n'y a pas de bonnes valeurs : on ne juge pas les choix des autres."],
        ["25-37 min", "Mise en commun", "Débat sur une situation fictive où deux valeurs s'opposent (loyauté envers un ami ou honnêteté envers l'employeur).", "Fait argumenter les deux positions, sans trancher à la place des élèves."],
        ["37-45 min", "Trace", "Note un exemple concret pour chacune de ses valeurs.", "Annonce que ces valeurs serviront pour le projet de la séance 5."]
      ],
      vigilance: "Aucune valeur n'est évaluée. La carte « Foi » figure parmi les autres, sans être mise en avant ; l'espace pastoral reste un lien facultatif."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Agir de manière responsable
  // ===================================================================
  S.push({
    id: "cps-tle-2", pilier: "cps", niveau: "tle", num: 2, duree: "45 min",
    titre: "Agir de manière responsable",
    objectifCourt: "Décider avec méthode, pas à chaud",
    objectif: "Prendre une décision difficile avec méthode, en pesant les conséquences pour soi et pour les autres.",
    rappel: { seance: "cps-tle-1", texte: "La dernière fois, tu as trouvé tes 5 valeurs clés. Elles servent de boussole quand il faut décider. Aujourd'hui : prendre une décision difficile, avec méthode." },
    aqcms: {
      pourquoi: "À 18 ans, mes décisions ont des conséquences juridiques, professionnelles et personnelles réelles.",
      apport: "Une méthode pour ne pas décider sous le coup de l'émotion ou de la pression.",
      ou: "Un dilemme au travail, une pression du groupe, une décision d'orientation ou d'argent.",
      lie: "Mes valeurs (séance 1), résister à la pression (Seconde, séance 5), les règles (séance 4)."
    },
    accroche: "Réponds à chaud, sans réfléchir : « Ton collègue vole du matériel dans l'entreprise. Tu fais quoi ? » Garde ta réponse en tête : on y reviendra après la méthode.",
    activites: [{
      titre: "Trois dilemmes, et un de ta filière", moteur: "scenario",
      consigne: "Pour chaque dilemme, choisis ce que tu ferais et découvre les conséquences. Utilise la méthode : mes options, les conséquences pour moi et pour les autres, mes valeurs, ma décision.",
      config: {
        id: "cps-tle-2",
        cas: [
          dilemme("Le collègue qui vole",
            "En stage, tu vois un collègue glisser des câbles neufs de l'entreprise dans son sac. Il te fait un clin d'œil.",
            [
              { texte: "Je ne dis rien, ce ne sont pas mes affaires.", consequences: "Pour toi : tu gardes un malaise, et si le vol est découvert, les soupçons peuvent tomber sur toute l'équipe, toi compris. Pour l'entreprise : le vol continue." },
              { texte: "Je le dénonce devant toute l'équipe.", consequences: "Le vol est révélé, mais l'humiliation publique crée un conflit durable. Il existe des façons plus justes de faire." },
              { texte: "Je lui parle seul à seul : « J'ai vu. Remets-les, sinon je devrai en parler. »", ok: true, consequences: "Tu lui laisses une chance de réparer, sans te rendre complice. S'il refuse, tu en parles à ton tuteur." },
              { texte: "J'en parle directement à mon tuteur.", ok: true, consequences: "C'est légitime : tu n'as pas à porter ce secret. Ton tuteur saura gérer la situation." }
            ]),
          dilemme("L'ami qui veut prendre le volant",
            "Fin de soirée. Ton ami a bu plusieurs verres. Il prend ses clés : « T'inquiète, j'habite à 5 minutes. »",
            [
              { texte: "Je le laisse partir, il est grand.", consequences: "L'alcool multiplie le risque d'accident. Laisser partir quelqu'un qui n'est pas en état de conduire, c'est le laisser se mettre en danger, lui et les autres." },
              { texte: "Je monte avec lui pour le surveiller.", consequences: "Tu te mets en danger aussi. Surveiller le conducteur ne réduit pas l'effet de l'alcool." },
              { texte: "Je lui prends ses clés et je propose qu'il dorme ici, ou j'appelle quelqu'un pour le ramener.", ok: true, consequences: "Il sera peut-être vexé ce soir, mais vivant demain. C'est ça, être un vrai ami." },
              { texte: "S'il refuse et part quand même, j'appelle le 17 ou le 112.", ok: true, consequences: "C'est difficile, mais c'est protéger sa vie et celle des autres usagers de la route." }
            ]),
          dilemme("Filière CIEL : le téléphone à réparer",
            "Un client dépose un téléphone à réparer. Il te demande discrètement de récupérer les messages privés de sa compagne, à qui appartient le téléphone.",
            [
              { texte: "J'accepte, c'est le client.", consequences: "Lire et transmettre les messages privés de quelqu'un sans son accord est une atteinte à la vie privée et au secret des correspondances : c'est un délit. Tu engages ta responsabilité et celle de l'entreprise." },
              { texte: "J'accepte s'il paie un supplément.", consequences: "L'argent n'efface pas le délit, il l'aggrave : tu deviens complice en connaissance de cause." },
              { texte: "Je refuse calmement : « Je ne peux pas accéder aux données personnelles d'une autre personne, c'est interdit. »", ok: true, consequences: "Tu protèges la vie privée de cette personne, ta responsabilité et la réputation de l'entreprise." },
              { texte: "Je refuse et j'en parle à mon responsable.", ok: true, consequences: "Ton responsable doit être au courant d'une demande pareille : il pourra la gérer et protéger l'entreprise." }
            ]),
          dilemme("Filière Métiers de la sécurité : le sac du client",
            "Tu es agent à l'entrée d'un magasin. Ton responsable te demande de fouiller le sac d'un client qui refuse qu'on le touche.",
            [
              { texte: "Je fouille le sac quand même, c'est un ordre.", consequences: "Un agent de sécurité privée ne peut fouiller un sac qu'avec le consentement de la personne. Sans accord, tu commets une faute, même sur ordre." },
              { texte: "Je refuse sèchement : « Pas question. »", consequences: "Tu as raison sur le fond, mais sans explication, ton responsable et le client ne comprennent pas la règle." },
              { texte: "J'explique : « Je peux faire une inspection visuelle. Pour fouiller, il me faut son accord. S'il refuse, on peut lui refuser l'entrée, ou appeler la police en cas de soupçon. »", ok: true, consequences: "Tu respectes la loi et la déontologie de ton métier, et tu proposes une solution à ton responsable." }
            ])
        ]
      }
    }],
    retenir: [
      "Décider en 4 questions : mes options, les conséquences pour moi et pour les autres, l'accord avec mes valeurs, ma décision.",
      "Une décision à chaud est souvent guidée par l'émotion ou la pression : prendre quelques secondes change tout.",
      "Une demande, même d'un responsable, ne rend pas légal ce qui ne l'est pas.",
      "On peut demander conseil avant de décider : ce n'est pas un manque d'autonomie."
    ],
    ressource: {
      titre: "Décider en 4 questions",
      intro: "Une fiche pour les décisions difficiles, au travail comme dans la vie.",
      blocs: [
        { type: "etapes", titre: "La méthode « Et si c'était moi ? »", items: ["Quelles sont mes options ? (au moins trois)", "Quelles conséquences pour moi, et pour les autres ?", "Laquelle respecte mes valeurs ?", "Ma décision, et ce que je fais maintenant"] },
        { type: "tableau", titre: "Décision à chaud ou décision réfléchie",
          colonnes: ["", "À chaud", "Réfléchie"],
          lignes: [
            ["Guidée par", "L'émotion, la pression", "Mes valeurs, les conséquences"],
            ["Temps", "Une seconde", "Quelques secondes à quelques jours"],
            ["Risque", "Regretter, se mettre en faute", "Plus faible, et je peux expliquer mon choix"]
          ] },
        { type: "liste", titre: "Avant de dire oui, je me demande", items: ["Est-ce légal ?", "Est-ce que je pourrais l'expliquer à ma famille, à mon tuteur ?", "Qui pourrait être blessé ou mis en danger ?", "Qui peut me conseiller avant de décider ?"] }
      ]
    },
    traces: [{
      titre: "Décider en 4 questions (pour moi)", moteur: "liste",
      outil: { id: "decider", nom: "Décider en 4 questions", description: "Préparer une décision difficile, à mon rythme." },
      config: {
        cle: "decider", titreDoc: "Mes décisions", titreListe: "Mes décisions", bouton: "Garder",
        intro: "Facultatif et privé. Utilise la méthode pour une décision que tu dois prendre en ce moment.",
        champs: [
          { id: "situation", label: "La situation", multi: true },
          { id: "options", label: "Mes options", multi: true },
          { id: "consequences", label: "Les conséquences pour moi et pour les autres", multi: true },
          { id: "valeurs", label: "Ce que disent mes valeurs" },
          { id: "decision", label: "Ma décision" }
        ]
      }
    }],
    verifie: [
      { type: "ordre", enonce: "Remets les 4 questions de la méthode dans l'ordre.", elements: ["Mes options", "Les conséquences", "Mes valeurs", "Ma décision"] },
      { type: "qcm", enonce: "Pourquoi une décision prise à chaud est-elle souvent moins bonne ?",
        options: ["Elle est guidée par l'émotion ou la pression, pas par les conséquences", "Elle est toujours illégale", "Elle prend trop de temps"], bonne: 0,
        explication: "Quelques secondes de réflexion suffisent souvent pour éviter une décision qu'on regrette." },
      { type: "ouverte", enonce: "Dans ta filière, cite une situation où tu devras peut-être dire non à une demande.", modele: "CIEL : accéder aux données personnelles d'un client. Sécurité : fouiller un sac sans consentement, utiliser la force sans nécessité. Partout : travailler sans équipement de protection." }
    ],
    plusLoin: [
      { titre: "Dire non", source: FSJ, url: "https://www.filsantejeunes.com/dire-non-5681", description: "Poser ses limites, même face à la pression." },
      { titre: "Faire des compromis : pourquoi ? jusqu'où ?", source: FSJ, url: "https://www.filsantejeunes.com/faire-des-compromis-pourquoi-jusquou-30859", description: "La différence entre un compromis et renoncer à ses principes." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Répond à chaud : « Ton collègue vole du matériel. Tu fais quoi ? »", "Note la diversité des réponses sans les juger."],
        ["8-15 min", "Notion", "Découvre la méthode en 4 questions.", "Distingue décision impulsive et décision réfléchie."],
        ["15-35 min", "Activité", "Traite 3 dilemmes, dont un propre à sa filière.", "Fait comparer la réponse à chaud et la réponse après réflexion."],
        ["35-45 min", "Trace", "Garde la fiche méthode et répond à « Je vérifie ».", "Rappelle qu'on peut demander conseil avant de décider."]
      ],
      vigilance: "Les dilemmes de filière ont une réponse légale claire, à vérifier avant la séance. On ne laisse pas croire qu'une infraction est une option comme une autre."
    }
  });

  // ===================================================================
  // SÉANCE 3 · S'engager dans la société
  // ===================================================================
  S.push({
    id: "cps-tle-3", pilier: "cps", niveau: "tle", num: 3, duree: "45 min",
    titre: "S'engager dans la société",
    objectifCourt: "Agir pour les autres, près de chez moi",
    objectif: "Découvrir des formes d'engagement accessibles près de chez moi et valoriser une initiative.",
    rappel: { seance: "cps-tle-2", texte: "La dernière fois, tu as appris à peser les conséquences de tes choix pour toi et pour les autres. Aujourd'hui, on passe à l'action : s'engager pour les autres." },
    aqcms: {
      pourquoi: "S'engager donne du sens, crée un réseau et développe des compétences que l'école ne voit pas toujours.",
      apport: "Des expériences à valoriser dans un CV, un entretien ou un dossier Parcoursup.",
      ou: "Bénévolat, club sportif, association de quartier, service civique, sapeur-pompier volontaire.",
      lie: "Mes valeurs (séance 1), coopérer (Première, séance 3), mon projet (séance 5)."
    },
    accroche: "Garder tes frères et sœurs, entraîner des jeunes au foot, aider un voisin, donner un coup de main dans une association : beaucoup d'élèves sont déjà engagés sans le savoir. Et toi ?",
    activites: [{
      titre: "La carte des engagements", moteur: "repertoire",
      consigne: "Explore les formes d'engagement et repère celle qui te touche. Filtre par thème.",
      config: {
        locaux: "engagements",
        themes: ["Solidarité", "Environnement", "Sport", "Sécurité civile", "Culture", "Vie du lycée"],
        items: [
          { nom: "Service civique", theme: "Solidarité", age: "16 à 25 ans (30 ans en situation de handicap)", description: "Une mission d'intérêt général indemnisée : solidarité, environnement, sport, culture, éducation…", url: "https://www.service-civique.gouv.fr/comprendre-le-service-civique/en-bref" },
          { nom: "Bénévolat avec JeVeuxAider.gouv.fr", theme: "Solidarité", age: "Dès 16 ans", description: "La plateforme publique du bénévolat : des missions près de chez toi ou à distance, à filtrer selon ta ville et tes disponibilités.", url: "https://www.jeveuxaider.gouv.fr/engagement/presentation-offre-benevolat-jeunes-16-18-ans/" },
          { nom: "Sapeur-pompier volontaire", theme: "Sécurité civile", age: "Dès 16 ans (accord écrit d'un parent si mineur)", description: "Porter secours en parallèle de ses études ou de son travail, après une aptitude médicale et une formation.", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F72" },
          { nom: "Encadrer ou arbitrer dans un club", theme: "Sport", age: "Selon les clubs", description: "Aider un entraîneur, arbitrer, encadrer les plus jeunes : renseigne-toi auprès de ton club." },
          { nom: "Agir pour la nature près de chez toi", theme: "Environnement", age: "Dès 16 ans", description: "Ramassage de déchets, jardins partagés, protection d'espaces naturels : de nombreuses missions sur JeVeuxAider.gouv.fr.", url: "https://www.jeveuxaider.gouv.fr/engagement/presentation-offre-benevolat-jeunes-16-18-ans/" },
          { nom: "Bénévole dans un festival ou une médiathèque", theme: "Culture", age: "Selon les structures", description: "Accueil du public, installation, animation : renseigne-toi auprès de ta mairie ou des lieux culturels proches." }
        ]
      }
    }, {
      titre: "Notre affiche ou notre podcast", moteur: "carnet",
      consigne: "En groupe, préparez une affiche ou un mini-podcast de 2 minutes pour faire connaître une initiative.",
      config: {
        cle: "affiche-engagement", titreDoc: "Notre affiche ou notre podcast",
        champs: [
          { id: "initiative", label: "L'initiative choisie" },
          { id: "probleme", label: "Le problème auquel elle répond", multi: true },
          { id: "action", label: "Ce qu'elle fait concrètement", multi: true },
          { id: "participer", label: "Comment y participer", multi: true },
          { id: "slogan", label: "Notre phrase d'accroche", placeholder: "Ex. : 2 heures par mois, ça change une vie." }
        ]
      }
    }],
    retenir: [
      "S'engager, c'est donner de son temps pour une cause ou pour les autres.",
      "On peut s'engager dès 16 ans : bénévolat, service civique, sapeur-pompier volontaire, club, association, vie du lycée.",
      "Un engagement développe des compétences : responsabilité, travail en équipe, organisation.",
      "Ces expériences se valorisent dans un CV, un entretien ou un dossier Parcoursup."
    ],
    ressource: {
      titre: "S'engager",
      intro: "Une fiche pour trouver un engagement et le valoriser.",
      blocs: [
        { type: "tableau", titre: "Quelques façons de s'engager",
          colonnes: ["Engagement", "À partir de", "En bref"],
          lignes: [
            ["Bénévolat (JeVeuxAider.gouv.fr)", "16 ans", "Des missions près de chez toi ou à distance"],
            ["Service civique", "16 ans, jusqu'à 25 ans", "Une mission d'intérêt général indemnisée"],
            ["Sapeur-pompier volontaire", "16 ans, avec accord parental si mineur", "Porter secours, après formation"],
            ["Club ou association", "Selon les structures", "Encadrer, arbitrer, organiser"],
            ["Vie du lycée", "Tous les lycéens", "Délégué de classe, CVL, projets d'élèves"]
          ] },
        { type: "liste", titre: "Ce que l'engagement développe", items: ["Le sens des responsabilités", "Le travail en équipe", "L'organisation et la ponctualité", "La communication avec des publics variés", "La confiance en soi"] },
        { type: "etapes", titre: "Le valoriser dans un CV ou un entretien", items: ["Ce que j'ai fait, où et combien de temps", "Ce que j'ai appris", "La compétence que ça montre pour le métier visé"] }
      ]
    },
    traces: [{
      titre: "Mes engagements (portfolio)", moteur: "liste",
      outil: { id: "mes-engagements", nom: "Mes engagements", description: "Mes expériences d'engagement et les compétences qu'elles montrent." },
      config: {
        cle: "mes-engagements", titreDoc: "Mes engagements", titreListe: "Mes engagements", bouton: "Ajouter à mon portfolio",
        intro: "Note une expérience d'engagement, même petite, et la compétence qu'elle montre.",
        gabarit: "Je me suis engagé(e) {ou} : {quoi}. Cela montre que je sais {competence}.",
        champs: [
          { id: "ou", label: "Où ?", placeholder: "Ex. : au club de foot de ma ville" },
          { id: "quoi", label: "Qu'est-ce que je fais ?", placeholder: "Ex. : j'entraîne les moins de 10 ans le mercredi" },
          { id: "competence", label: "Ce que ça montre", placeholder: "Ex. : encadrer un groupe et être régulier" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite deux formes d'engagement accessibles à 18 ans.", modele: "Bénévolat dans une association, service civique, sapeur-pompier volontaire, encadrement dans un club, CVL." },
      { type: "qcm", enonce: "Quelle compétence montre le fait d'entraîner une équipe de jeunes ?",
        options: ["Encadrer un groupe et être responsable", "Savoir réparer un circuit électrique", "Parler une langue étrangère"], bonne: 0,
        explication: "Entraîner des jeunes, c'est encadrer, organiser, être régulier : des compétences recherchées par les employeurs." },
      { type: "ouverte", enonce: "Comment présenterais-tu un engagement dans un entretien d'embauche ?", modele: "Depuis deux ans, j'entraîne les moins de 10 ans de mon club le mercredi. J'ai appris à encadrer un groupe et à être régulier : c'est utile pour travailler en équipe." }
    ],
    plusLoin: [
      { titre: "Le Service Civique en bref", source: "Agence du Service Civique", url: "https://www.service-civique.gouv.fr/comprendre-le-service-civique/en-bref", description: "Qui peut le faire, et comment trouver une mission." },
      { titre: "Le bénévolat dès 16 ans", source: "JeVeuxAider.gouv.fr", url: "https://www.jeveuxaider.gouv.fr/engagement/presentation-offre-benevolat-jeunes-16-18-ans/", description: "Trouver une mission près de chez toi ou à distance." },
      { titre: "Sapeur-pompier volontaire", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F72", description: "Les conditions pour s'engager, dès 16 ans." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Repère ce qu'il fait déjà pour les autres sans l'appeler « engagement ».", "Montre que beaucoup d'élèves sont déjà engagés sans le savoir."],
        ["8-25 min", "Activité", "Explore la carte des engagements et choisit une initiative qui le touche.", "Présente les dispositifs accessibles : service civique, bénévolat, sapeur-pompier volontaire, CVL."],
        ["25-40 min", "Production", "En groupe, conçoit une affiche ou le plan d'un mini-podcast de 2 minutes.", "Aide à trouver le message principal."],
        ["40-45 min", "Trace", "Note dans son portfolio une expérience d'engagement et la compétence qu'elle montre.", "Fait le lien avec le portfolio."]
      ],
      vigilance: "Les initiatives locales s'ajoutent dans js/config.js (rubrique « engagements ») : elles apparaissent en tête de la carte des engagements."
    }
  });

  // ===================================================================
  // SÉANCE 4 · Respecter les règles et les lois
  // ===================================================================
  S.push({
    id: "cps-tle-4", pilier: "cps", niveau: "tle", num: 4, duree: "45 min",
    titre: "Respecter les règles et les lois",
    objectifCourt: "Comprendre une règle avant de la juger",
    objectif: "Comprendre à quoi servent les règles, distinguer règle, loi et valeur, et argumenter sans s'emporter.",
    rappel: { seance: "cps-tle-3", texte: "La dernière fois, tu as découvert comment t'engager dans la société. Vivre ensemble suppose aussi des règles communes : aujourd'hui, on cherche à quoi elles servent, et comment les faire évoluer." },
    aqcms: {
      pourquoi: "Une règle qu'on comprend est plus facile à respecter, ou à contester par les bons moyens.",
      apport: "Savoir pourquoi une règle existe avant de la juger, et exercer mon esprit critique.",
      ou: "Le règlement intérieur d'une entreprise, les consignes de sécurité, mes droits et devoirs de majeur.",
      lie: "Mes décisions (séance 2), le conflit avec une règle (Première, séance 5)."
    },
    accroche: "Imagine une journée au lycée ou en atelier sans aucune règle. Que se passe-t-il au bout d'une heure ? Qui en souffre le plus ?",
    activites: [{
      titre: "Règle, loi ou valeur ?", moteur: "cartes",
      consigne: "Classe chaque phrase : une règle (d'un lieu), une loi (pour tous), ou une valeur (personnelle).",
      config: {
        fin: "Tu sais distinguer ce qui vient d'un lieu, de la loi, ou de toi.",
        manches: [{
          type: "classer", titre: "D'où ça vient ?",
          categories: ["Règle", "Loi", "Valeur"],
          cartes: [
            { texte: "Le téléphone est interdit en classe dans ce lycée.", reponse: "Règle", explication: "C'est le règlement intérieur de cet établissement : il peut être différent ailleurs." },
            { texte: "Rouler à scooter sans casque est interdit en France.", reponse: "Loi", explication: "Elle s'applique à tout le monde, partout en France." },
            { texte: "Pour moi, il faut toujours dire la vérité.", reponse: "Valeur", explication: "C'est un choix personnel : d'autres pensent autrement." },
            { texte: "Dans mon entreprise de stage, la pause est à 10 h.", reponse: "Règle" },
            { texte: "Diffuser la photo de quelqu'un sans son accord peut être puni.", reponse: "Loi" },
            { texte: "La famille passe avant tout.", reponse: "Valeur" },
            { texte: "On peut voter à partir de 18 ans.", reponse: "Loi" }
          ],
          bilan: "Une règle vaut pour un lieu, une loi pour tous, une valeur pour moi."
        }]
      }
    }, {
      titre: "Le débat mouvant", moteur: "debat",
      consigne: "Pour chaque affirmation, place-toi avant le débat. Écoutez les arguments en classe, puis replace-toi.",
      config: {
        affirmations: [
          { texte: "Une règle injuste, on peut ne pas la respecter.", repere: "Une règle ou une loi qu'on trouve injuste se conteste par des moyens légaux : délégués, CVL, représentants du personnel, vote, pétition. Ne pas la respecter expose à une sanction." },
          { texte: "Les équipements de protection, c'est pour les débutants.", repere: "Les équipements de protection sont obligatoires pour tous quand le poste l'exige : l'expérience ne protège pas d'un accident." },
          { texte: "Ce qui se passe sur un groupe privé n'a pas de conséquence légale.", repere: "Insultes, menaces, harcèlement ou diffusion d'images sans accord restent punis par la loi, même sur une messagerie privée." },
          { texte: "Le règlement intérieur ne sert qu'à punir.", repere: "Il fixe aussi les droits des élèves : liberté d'expression, de réunion, d'association, droit d'être représentés." },
          { texte: "À 18 ans, on peut faire tout ce qu'on veut.", repere: "À 18 ans, on gagne des droits (voter, signer un contrat seul) et on devient pleinement responsable de ses actes devant la loi." }
        ]
      }
    }],
    retenir: [
      "Une règle vaut pour un lieu (lycée, entreprise). Une loi est votée et vaut pour tous. Une valeur est personnelle.",
      "Les règles protègent la sécurité, l'égalité et la liberté de chacun.",
      "On peut contester une règle par des moyens légaux : délégués, CVL, représentants du personnel, vote, pétition.",
      "Changer d'avis face à un bon argument est une force."
    ],
    ressource: {
      titre: "Règle, loi, valeur",
      intro: "Une fiche pour comprendre d'où viennent les règles, et comment les faire évoluer.",
      blocs: [
        { type: "tableau", titre: "Trois notions",
          colonnes: ["", "Règle", "Loi", "Valeur"],
          lignes: [
            ["Qui la décide ?", "Un lieu : lycée, entreprise, club", "Le Parlement, qui la vote", "Moi"],
            ["Pour qui ?", "Les personnes de ce lieu", "Tout le monde, partout en France", "Moi"],
            ["Si je ne la respecte pas", "Une sanction du lieu", "Une sanction prévue par la loi", "Un malaise avec moi-même"],
            ["Exemple", "Pas de téléphone en classe", "Le casque obligatoire à scooter", "Toujours dire la vérité"]
          ] },
        { type: "liste", titre: "Contester une règle, légalement", items: ["Au lycée : en parler à mes délégués, au CVL", "En entreprise : passer par les représentants du personnel", "Pour une loi : voter, signer une pétition, s'engager dans une association", "Toujours : argumenter calmement, avec des faits"] },
        { type: "texte", titre: "À 18 ans", texte: "Je peux voter, signer un contrat seul, ouvrir un compte sans mes parents. Je deviens aussi pleinement responsable de mes actes devant la loi." }
      ]
    },
    verifie: [
      { type: "qcm", enonce: "Quelle est la différence entre une règle et une loi ?",
        options: ["Une règle vaut pour un lieu ; une loi est votée et vaut pour tous", "Il n'y en a aucune", "Une loi est moins importante qu'une règle"], bonne: 0,
        explication: "Le règlement de ton lycée ne s'applique qu'à ton lycée ; la loi s'applique partout en France." },
      { type: "ouverte", enonce: "Cite deux moyens légaux de contester une règle.", modele: "Passer par ses délégués ou le CVL, les représentants du personnel en entreprise, une pétition, le vote." },
      { type: "vf", enonce: "Changer d'avis après un bon argument est une faiblesse.", bonne: false, explication: "C'est une preuve d'esprit critique : on accepte d'être convaincu par de meilleures raisons." }
    ],
    plusLoin: [
      { titre: "Quels sont les droits et obligations du lycéen ?", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1364", description: "Liberté d'expression, de réunion, d'association, obligations et sanctions." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-10 min", "Accroche", "Imagine en groupe une journée au lycée ou en atelier sans aucune règle.", "Fait émerger ce que protègent les règles : la sécurité, l'égalité, la liberté des autres."],
        ["10-30 min", "Activité", "Classe règle, loi, valeur, puis débat mouvant sur 5 affirmations : il se positionne, écoute, se repositionne.", "Garantit le respect des prises de parole, rappelle le cadre légal quand c'est utile."],
        ["30-40 min", "Mise en commun", "Distingue règle, loi et valeur. Voit les moyens légaux de contester une règle.", "Cite les moyens : délégués, CVL, représentants du personnel, vote, pétition."],
        ["40-45 min", "Trace", "Note un argument qui l'a fait changer d'avis, ou renforcé dans le sien.", "Valorise le fait de changer d'avis face à un bon argument."]
      ],
      vigilance: "Les affirmations portent sur la vie du lycée, du travail et du numérique, pas sur l'actualité politique. Les positions des élèves ne sont pas enregistrées."
    }
  });

  // ===================================================================
  // SÉANCE 5 · Construire son avenir avec sens
  // ===================================================================
  S.push({
    id: "cps-tle-5", pilier: "cps", niveau: "tle", num: 5, duree: "45 min",
    titre: "Construire son avenir avec sens",
    objectifCourt: "Une piste et une première étape pour l'après-bac",
    objectif: "Relier ce que j'aime, ce que je sais faire, ce dont les autres ont besoin et ce qui peut me faire vivre, puis me fixer une première étape réaliste.",
    rappel: { seance: "cps-tle-4", texte: "La dernière fois, tu as réfléchi aux règles et exercé ton esprit critique. Pour finir l'année, on rassemble tout : tes valeurs, tes qualités, tes engagements, pour construire ton projet après le bac." },
    aqcms: {
      pourquoi: "Un projet qui a du sens tient mieux face aux difficultés.",
      apport: "Une direction claire et une première étape concrète, même si le projet change plus tard.",
      ou: "Projet motivé Parcoursup, entretien d'embauche ou d'alternance, choix d'une formation.",
      lie: "Mes valeurs (séance 1), mon engagement (séance 3), le CV de mes réussites (Seconde, séance 3), mon rôle dans un groupe (Première, séance 3)."
    },
    accroche: "Deux parcours imaginés, mais très fréquents. Inès, bac pro sécurité, devient agente en centre commercial, puis passe le concours de sapeur-pompier professionnel après cinq ans de volontariat. Hugo, bac pro CIEL, commence un BTS, l'arrête, travaille un an en dépannage informatique, puis reprend une formation en alternance. Un projet se construit, et se réajuste.",
    activites: [{
      titre: "Mon projet en cercles", moteur: "cercles",
      outil: { id: "projet-cercles", nom: "Mon projet en cercles", description: "Ce que j'aime, ce que je sais faire, ce dont le monde a besoin, ce qui peut me faire vivre." },
      consigne: "Ajoute des étiquettes (tes goûts, tes qualités, des métiers, des causes…), puis place chacune dans un ou plusieurs cercles. Tu peux reprendre ce que tu as noté dans les séances précédentes.",
      config: {
        cle: "projet-cercles", titreDoc: "Mon projet en cercles",
        cercles: [
          { id: "aime", nom: "Ce que j'aime", question: "Les activités, les sujets, les ambiances qui me plaisent." },
          { id: "sais", nom: "Ce que je sais faire", question: "Mes qualités, mes compétences, mes réussites." },
          { id: "besoin", nom: "Ce dont le monde a besoin", question: "Les causes, les services, les métiers utiles aux autres." },
          { id: "vivre", nom: "Ce qui peut me faire vivre", question: "Les métiers et secteurs qui recrutent et paient." }
        ],
        importer: [
          { cle: "valeurs-tas", type: "choix" },
          { cle: "mes-qualites", type: "choix", cercle: "sais" },
          { cle: "cv-reussites", type: "liste", champ: "reussite", cercle: "sais" },
          { cle: "mes-engagements", type: "liste", champ: "quoi", cercle: "besoin" }
        ]
      }
    }],
    retenir: [
      "Un projet relie ce que j'aime, ce que je sais faire, ce dont le monde a besoin et ce qui peut me faire vivre.",
      "Ce qui se trouve à l'intersection de plusieurs cercles est une piste, pas un engagement définitif.",
      "Un projet qui change n'est pas un échec : il se construit et se réajuste.",
      "Une bonne première étape est concrète, datée, et je sais qui peut m'aider."
    ],
    ressource: {
      titre: "Construire mon projet",
      intro: "Une fiche pour passer d'une piste à une première étape concrète.",
      blocs: [
        { type: "tableau", titre: "Les quatre cercles",
          colonnes: ["Cercle", "Je me demande"],
          lignes: [
            ["Ce que j'aime", "Qu'est-ce que je fais sans voir le temps passer ?"],
            ["Ce que je sais faire", "Pour quoi les autres me demandent-ils de l'aide ?"],
            ["Ce dont le monde a besoin", "Quels problèmes ai-je envie d'aider à résoudre ?"],
            ["Ce qui peut me faire vivre", "Quels métiers recrutent, et à quel salaire ?"]
          ] },
        { type: "etapes", titre: "De la piste à l'action", items: ["Ma piste : ce qui est au centre de mes cercles", "Je m'informe : Onisep, professionnels, anciens élèves", "Je teste : stage, journée découverte, bénévolat", "Je décide, et je fixe une première étape datée"] },
        { type: "liste", titre: "Qui peut m'aider ?", items: ["Mon professeur principal", "La ou le psychologue de l'Éducation nationale (Psy-EN), au lycée ou au CIO", "Les entreprises où j'ai fait mes stages", "La Mission locale, après le lycée (16-25 ans)"] },
        { type: "texte", titre: "À savoir", texte: "Le cercle « Ce qui peut me faire vivre » compte autant que les autres : choisir un métier pour sa stabilité n'est pas un manque d'ambition." }
      ]
    },
    traces: [{
      titre: "Mon engagement pour l'après-bac", moteur: "liste",
      outil: { id: "engagement-apres-bac", nom: "Mon engagement pour l'après-bac", description: "Mon objectif, ma première étape, ma date et qui peut m'aider." },
      config: {
        cle: "engagement-apres-bac", titreDoc: "Mon engagement pour l'après-bac", titreListe: "Mes engagements", bouton: "M'engager",
        intro: "Écris ton engagement. Tu peux l'imprimer ou l'enregistrer en PDF pour ton portfolio.",
        gabarit: "D'ici {date}, je vais {etape} pour {objectif}. Je peux demander de l'aide à {personne}.",
        champs: [
          { id: "objectif", label: "Mon objectif", placeholder: "Ex. : entrer en BTS en alternance" },
          { id: "etape", label: "Ma première étape", placeholder: "Ex. : prendre rendez-vous avec la Psy-EN" },
          { id: "date", label: "Pour quand ?", placeholder: "Ex. : la fin du mois de janvier" },
          { id: "personne", label: "Qui peut m'aider ?", placeholder: "Ex. : mon professeur principal" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Quels sont les quatre cercles ?", modele: "Ce que j'aime, ce que je sais faire, ce dont le monde a besoin, ce qui peut me faire vivre." },
      { type: "vf", enonce: "Si mon projet change, c'est un échec.", bonne: false, explication: "Un projet se construit et se réajuste au fil des expériences : c'est normal." },
      { type: "ouverte", prive: true, enonce: "Quelle est ta première étape, et pour quand ?", modele: "Si tu ne sais pas encore, ta première étape peut être : « rencontrer la Psy-EN avant les vacances » ou « faire un stage d'observation »." }
    ],
    plusLoin: [
      { titre: "Après un bac pro : quelles études possibles ?", source: "Onisep", url: "https://www.onisep.fr/formation/apres-le-bac-les-etudes-superieures/que-faire-apres-le-bac/apres-un-bac-professionnel-poursuivre-ses-etudes", description: "BTS, formations complémentaires, alternance, entrée dans la vie active." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Lit deux courts parcours, dont un qui a changé de voie.", "Montre qu'un projet se construit et se réajuste."],
        ["8-28 min", "Activité", "Remplit ses quatre cercles, en reprenant ses valeurs, qualités et réussites des séances précédentes.", "Aide à trouver des exemples concrets, surtout dans « Ce que je sais faire »."],
        ["28-38 min", "Synthèse", "Repère ce qui se trouve à l'intersection de plusieurs cercles et formule une piste.", "Rappelle qu'une piste n'est pas un engagement définitif."],
        ["38-45 min", "Trace", "Écrit son engagement : un objectif, une première étape, une date, une personne qui peut l'aider.", "Oriente vers le professeur principal ou la Psy-EN pour la suite."]
      ],
      vigilance: "Les deux parcours de l'accroche sont des exemples imaginés : remplacez-les si possible par ceux d'anciens élèves, avec leur accord. Un élève sans projet ne doit pas se sentir en échec. Le schéma des quatre cercles (souvent appelé Ikigaï) est un outil de réflexion, pas une méthode scientifique."
    }
  });
})();
