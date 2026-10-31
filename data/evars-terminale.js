/*
 * PILIER EVARS · TERMINALE
 * Contenu validé (document « Pilier EVARS – Terminale »), conforme au programme EVARS
 * (BO de février 2025). Aucune image explicite : tout se travaille sur des énoncés écrits.
 * Ressources vérifiées en octobre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var FSJ = "Fil Santé Jeunes";
  var DUREE = "1 h 50 (2 × 55 min)";

  // ===================================================================
  // SÉANCE 1 · Émotions, désir et esprit critique
  // ===================================================================
  S.push({
    id: "evars-tle-1", pilier: "evars", niveau: "tle", num: 1, duree: DUREE,
    titre: "Émotions, désir et esprit critique",
    objectifCourt: "Mettre des mots justes, garder un regard critique",
    objectif: "Reconnaître ses émotions et ses désirs pour mieux se connaître.",
    rappel: { seance: "evars-1re-3", etiquette: "L'an dernier", texte: "L'an dernier, tu as appris à rester maître de tes choix et à comprendre le consentement. Cette dernière année, on revient vers soi : comprendre ses émotions et ses désirs, et garder un regard critique sur les images qui prétendent montrer la sexualité." },
    aqcms: {
      pourquoi: "Beaucoup d'idées reçues sur la sexualité viennent d'images fabriquées, et créent de la pression.",
      apport: "Mettre des mots justes sur ce que je ressens, repérer les fausses normes, et savoir où trouver une information fiable.",
      ou: "Dans mes relations, face aux réseaux, pour prendre soin de ma santé.",
      lie: "Ma roue des émotions (CPS Seconde, séance 1), les images retouchées (EVARS Seconde, séance 1), mes droits en santé (EVARS Première, séance 1)."
    },
    accroche: "Quelle différence entre être amoureux de quelqu'un et avoir envie de quelqu'un ? On mélange souvent plusieurs choses.",
    temps: ["Ce que je ressens, et les idées reçues", "Images fabriquées et sources fiables"],
    oeuvres: {
      temps: 2,
      titre: "Trois « Baiser » : montrer ou suggérer ?",
      consigne: "Observe ces œuvres. L'érotisme suggère et laisse place aux émotions et à l'imaginaire.",
      liste: [
        { titre: "Le Baiser", auteur: "Francesco Hayez", date: "1859", lieu: "Pinacothèque de Brera, Milan",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Francesco_Hayez_008.jpg?width=800",
          source: "https://commons.wikimedia.org/wiki/File:Francesco_Hayez_008.jpg",
          alt: "Tableau : un jeune homme et une jeune femme, en costumes anciens, s'embrassent au pied d'un escalier de pierre." },
        { titre: "Le Baiser", auteur: "Gustav Klimt", date: "1908", lieu: "Galerie du Belvédère, Vienne",
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg?width=800",
          source: "https://commons.wikimedia.org/wiki/File:The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
          alt: "Tableau : un couple enlacé, vêtu d'étoffes dorées couvertes de motifs, agenouillé sur un tapis de fleurs, sur un fond d'or." },
        { titre: "Le Baiser", auteur: "Constantin Brâncuși", date: "1907-1908, première version",
          note: "Deux corps taillés dans un seul bloc de pierre. Cette œuvre est encore protégée par le droit d'auteur : on la regarde sur le site d'un musée.",
          lien: { texte: "Voir la version de 1916 (Philadelphia Museum of Art)", url: "https://www.philamuseum.org/objects/51306" } }
      ],
      questions: ["Qu'est-ce qui est montré ?", "Qu'est-ce qui est suggéré ?", "Quelles émotions ressens-tu ?"]
    },
    activites: [{
      temps: 1, titre: "Quatre mots", moteur: "cartes",
      consigne: "Associe chaque situation au bon mot. On peut ressentir l'un sans les autres.",
      config: {
        fin: "Sentiment, désir, excitation et plaisir sont différents : mettre le mot juste aide à se comprendre.",
        manches: [{
          type: "classer", titre: "Quel mot ?", categories: ["Sentiment", "Désir", "Excitation", "Plaisir"],
          cartes: [
            { texte: "« Je pense à elle depuis des semaines, j'ai envie de la rendre heureuse. »", reponse: "Sentiment", explication: "Un attachement qui dure, tourné vers l'autre." },
            { texte: "« J'ai envie de passer du temps avec lui, de l'embrasser. »", reponse: "Désir", explication: "Une envie, une attirance." },
            { texte: "« Mon corps réagit, mon cœur s'accélère. »", reponse: "Excitation", explication: "Une réaction du corps." },
            { texte: "« Je me sens bien et détendu après un moment partagé. »", reponse: "Plaisir", explication: "Un état de bien-être." }
          ],
          bilan: "On peut aimer sans désirer, désirer sans aimer : tout cela est humain."
        }]
      }
    }, {
      temps: 1, titre: "Idées reçues", moteur: "quiz",
      config: { id: "evars-tle-1-idees", questions: [
        { type: "vf", enonce: "Tout le monde a sa première fois avant 18 ans.", bonne: false, explication: "L'âge varie beaucoup d'une personne à l'autre, et il n'y a aucun retard à rattraper." },
        { type: "vf", enonce: "La première fois doit être parfaite.", bonne: false, explication: "On peut être maladroit, rire, s'arrêter. C'est une découverte, pas une épreuve." },
        { type: "vf", enonce: "Un garçon a toujours envie.", bonne: false, explication: "C'est un stéréotype : le désir varie chez chacun et selon les moments." },
        { type: "vf", enonce: "Le plaisir dépend de la performance.", bonne: false, explication: "Il dépend surtout de la confiance, de la communication et du consentement." },
        { type: "vf", enonce: "On peut changer d'avis à tout moment.", bonne: true, explication: "Oui, toujours." },
        { type: "qcm", enonce: "La santé sexuelle, c'est…", options: ["Seulement ne pas avoir de maladie", "Un bien-être physique, affectif, mental et social"], bonne: 1, explication: "Elle ne se limite pas à l'absence de maladie." }
      ] }
    }, {
      temps: 2, titre: "Fabriqué ou réel ?", moteur: "cartes",
      consigne: "La pornographie est une industrie, faite pour vendre. Classe chaque énoncé : est-ce ce qu'elle montre souvent, ou ce qui se passe dans une relation réelle ?",
      config: {
        fin: "La pornographie montre des scènes fabriquées et souvent stéréotypées : ce n'est pas un modèle de relation. Elle est interdite aux mineurs.",
        manches: [{
          type: "classer", titre: "Fabriqué ou réel ?", categories: ["Souvent dans la pornographie", "Dans une relation réelle"],
          cartes: [
            { texte: "Des scènes jouées, filmées, coupées et montées.", reponse: "Souvent dans la pornographie" },
            { texte: "Des corps choisis selon des normes, parfois retouchés.", reponse: "Souvent dans la pornographie" },
            { texte: "Une performance permanente, sans fatigue ni hésitation.", reponse: "Souvent dans la pornographie" },
            { texte: "Un consentement rarement demandé.", reponse: "Souvent dans la pornographie" },
            { texte: "Des rôles stéréotypés, parfois violents.", reponse: "Souvent dans la pornographie" },
            { texte: "On parle, on demande, on rit, on hésite.", reponse: "Dans une relation réelle" },
            { texte: "Chacun a son rythme, on peut s'arrêter.", reponse: "Dans une relation réelle" },
            { texte: "Le consentement est au cœur de tout.", reponse: "Dans une relation réelle" }
          ],
          bilan: "L'érotisme, lui, suggère et laisse place aux émotions et à l'imaginaire."
        }]
      }
    }],
    retenir: [
      "Sentiment, désir, excitation et plaisir sont différents : on peut ressentir l'un sans les autres.",
      "La santé sexuelle, c'est un bien-être physique, affectif, mental et social.",
      "La pornographie montre des scènes fabriquées et souvent stéréotypées : ce n'est pas un modèle de relation. Elle est interdite aux mineurs.",
      "Pour s'informer, on choisit des sources fiables et des professionnels."
    ],
    ressource: {
      titre: "Mieux me connaître, bien m'informer",
      intro: "Une fiche pour mettre des mots justes et trouver une information fiable.",
      blocs: [
        { type: "tableau", titre: "Quatre mots", colonnes: ["Mot", "Ce que c'est"], lignes: [
          ["Sentiment", "Un attachement qui dure, tourné vers l'autre"],
          ["Désir", "Une envie, une attirance"],
          ["Excitation", "Une réaction du corps"],
          ["Plaisir", "Un état de bien-être"]
        ] },
        { type: "liste", titre: "Idées reçues à oublier", items: ["Il y a un âge pour la première fois", "La première fois doit être parfaite", "Un garçon a toujours envie", "Le plaisir dépend de la performance"] },
        { type: "tableau", titre: "Fabriqué ou réel", colonnes: ["Souvent dans la pornographie", "Dans une relation réelle"], lignes: [
          ["Scènes jouées et montées", "On parle, on rit, on hésite"],
          ["Corps choisis et retouchés", "Des corps réels, tous différents"],
          ["Performance permanente", "Chacun a son rythme"],
          ["Consentement rarement demandé", "Le consentement est au cœur de tout"]
        ] },
        { type: "tableau", titre: "Mes droits en santé sexuelle", colonnes: ["Quoi", "L'essentiel"], lignes: [
          ["Contraception, dépistage", "Gratuits ou remboursés avant 26 ans"],
          ["PrEP et traitement post-exposition", "Prévention et urgence contre le VIH"],
          ["Vaccin contre les papillomavirus", "Rattrapage possible"],
          ["Endométriose", "Des règles très douloureuses justifient une consultation"],
          ["IVG", "Jusqu'à la fin de la 14e semaine de grossesse ; une mineure n'a pas besoin d'autorisation parentale, elle est accompagnée d'un majeur de son choix ; prise en charge à 100 %"]
        ] },
        { type: "liste", titre: "Où aller ?", items: ["Un centre de santé sexuelle", "L'infirmière du lycée, un médecin, une pharmacie", "0 800 08 11 11 : sexualité, contraception, IVG (gratuit, anonyme)"] }
      ]
    },
    traces: [{
      titre: "Ma carte santé", moteur: "carnet",
      outil: { id: "carte-sante", nom: "Ma carte santé", description: "Les lieux et numéros utiles près de chez moi." },
      config: {
        cle: "carte-sante", titreDoc: "Ma carte santé",
        intro: "Note les lieux utiles près de chez toi. Tu peux l'imprimer et la garder.",
        champs: [
          { id: "centre", label: "Le centre de santé sexuelle le plus proche" },
          { id: "pharmacie", label: "Une pharmacie près de chez moi" },
          { id: "medecin", label: "Mon médecin" },
          { id: "numeros", label: "Mes numéros utiles", multi: true, placeholder: "0 800 08 11 11, Fil Santé Jeunes 0 800 235 236…" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Quelle différence entre un sentiment et un désir ?", modele: "Un sentiment est un attachement qui dure, tourné vers l'autre ; un désir est une envie, une attirance. On peut avoir l'un sans l'autre." },
      { type: "ouverte", enonce: "Cite deux raisons pour lesquelles la pornographie ne montre pas la réalité.", modele: "Les scènes sont jouées et montées ; les corps sont choisis ou retouchés ; le consentement est rarement montré ; c'est une industrie faite pour vendre." },
      { type: "vf", enonce: "Une mineure a besoin de l'autorisation de ses parents pour une IVG.", bonne: false, explication: "Non : elle doit être accompagnée d'une personne majeure de son choix." }
    ],
    plusLoin: [
      { titre: "L'essentiel sur l'IVG", source: "ivg.gouv.fr", url: "https://ivg.gouv.fr/lessentiel-sur-livg", description: "Les délais, la prise en charge, la confidentialité." },
      { titre: "Mes droits en santé sexuelle avant 26 ans", source: "Crips Île-de-France", url: "https://www.lecrips-idf.net/wp-content/uploads/2026/04/crips_affiche_droits_sexuels_moins_26_ans_avril_2026.pdf", description: "Ce qui est gratuit et confidentiel." }
    ],
    passerelles: ["cps-2nde-1"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-10 min", "Accroche", "« Quelle différence entre être amoureux et avoir envie de quelqu'un ? »", "Montre qu'on mélange souvent plusieurs choses."],
        ["Temps 1 · 10-25 min", "Activité", "Associe des situations à quatre mots : sentiment, désir, excitation, plaisir.", "Donne les définitions de façon simple et scientifique."],
        ["Temps 1 · 25-45 min", "Activité", "Répond au quiz « Idées reçues ».", "Déconstruit la pression de la performance."],
        ["Temps 1 · 45-55 min", "Mise en commun", "Définit la santé sexuelle avec ses mots.", "Donne la définition large : bien-être physique, affectif, mental et social."],
        ["Temps 2 · 0-10 min", "Accroche", "Compare Le Baiser de Francesco Hayez (1859) et celui de Gustav Klimt (1908) ; en prolongement, Le Baiser de Constantin Brâncuși (1907-1908). Qu'est-ce qui est montré, qu'est-ce qui est suggéré, quelles émotions ?", "Introduit l'érotisme : suggérer, laisser place aux émotions et à l'imaginaire."],
        ["Temps 2 · 10-30 min", "Activité", "Classe des énoncés écrits : pornographie ou relation réelle.", "Aucune image. Rappelle que la pornographie est interdite aux mineurs."],
        ["Temps 2 · 30-45 min", "Activité", "Repère les lieux et sources fiables en santé sexuelle.", "Présente le centre de santé sexuelle le plus proche."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Ma carte santé » et répond à « Je vérifie ».", "Rappelle la confidentialité des consultations."]
      ],
      vigilance: "On ne montre jamais de pornographie, même un extrait : l'analyse se fait sur des énoncés. Un élève qui y a été exposé n'est pas fautif. Sur la prostitution, on reste au niveau des signaux d'alerte (promesses d'argent, cadeaux, isolement) : un mineur concerné est toujours une victime (119)."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Une relation équilibrée
  // ===================================================================
  var CHAMPS_JE = [
    { id: "fait", label: "Quand…", aide: "un fait précis, sans juger", placeholder: "tu insistes après mon non" },
    { id: "emotion", label: "je me sens…", aide: "une émotion", placeholder: "mal à l'aise" },
    { id: "besoin", label: "parce que j'ai besoin…", aide: "mon besoin", placeholder: "que mon non soit respecté" },
    { id: "demande", label: "Est-ce que tu pourrais… ?", aide: "une demande concrète", placeholder: "l'entendre" }
  ];
  S.push({
    id: "evars-tle-2", pilier: "evars", niveau: "tle", num: 2, duree: DUREE,
    titre: "Une relation équilibrée",
    objectifCourt: "Reconnaître l'emprise, dire ses limites",
    objectif: "S'épanouir dans une relation équilibrée à l'autre.",
    rappel: { seance: "evars-tle-1", texte: "La dernière fois, tu as appris à mettre des mots sur tes émotions et tes désirs. Aujourd'hui, on regarde la relation elle-même : ce qui la rend équilibrée, et comment reconnaître l'emprise." },
    aqcms: {
      pourquoi: "L'emprise s'installe souvent peu à peu, sans qu'on la voie venir.",
      apport: "Reconnaître les signaux d'alerte, dire mes limites sans agressivité, et aider un ami.",
      ou: "Dans mon couple, mes amitiés, ma famille, au travail.",
      lie: "Le message « Je » (CPS Première, séance 4), le consentement (EVARS Première, séance 2), la jalousie (EVARS Seconde, séance 2)."
    },
    accroche: "Écris en quelques lignes une scène de fiction : un personnage hésite à rester dans une relation. Quelles raisons et quelles émotions le retiennent, ou le poussent à partir ?",
    temps: ["Équilibre ou emprise ?", "Dire ses limites, et aider"],
    activites: [{
      temps: 1, titre: "L'échelle de la relation", moteur: "cartes",
      consigne: "Inspirée du violentomètre. Place chaque comportement sur l'échelle : profite, vigilance, ou protège-toi.",
      config: {
        fin: "L'emprise s'installe peu à peu. Dès les premiers signaux, on peut en parler.",
        manches: [{
          type: "classer", titre: "Où se place ce comportement ?", categories: ["Profite : relation saine", "Vigilance : dis stop", "Protège-toi : demande de l'aide"],
          cartes: [
            { texte: "Il ou elle respecte mon « non ».", reponse: "Profite : relation saine" },
            { texte: "Chacun garde ses amis et ses activités.", reponse: "Profite : relation saine" },
            { texte: "On n'est pas d'accord, et on en discute.", reponse: "Profite : relation saine" },
            { texte: "Il ou elle veut connaître mes codes.", reponse: "Vigilance : dis stop" },
            { texte: "Il ou elle me critique devant mes amis, puis s'excuse avec des cadeaux.", reponse: "Vigilance : dis stop", explication: "L'alternance entre humiliation et tendresse est un mécanisme de l'emprise." },
            { texte: "Il ou elle me dit que personne d'autre ne voudra de moi.", reponse: "Vigilance : dis stop", explication: "Dévaloriser l'autre pour le garder : un signal d'alerte." },
            { texte: "Je n'ose plus voir mes amis de peur qu'il ou elle se fâche.", reponse: "Vigilance : dis stop", explication: "L'isolement est un signe d'emprise." },
            { texte: "Il ou elle me pousse ou me frappe.", reponse: "Protège-toi : demande de l'aide" },
            { texte: "Il ou elle m'oblige à des actes sexuels.", reponse: "Protège-toi : demande de l'aide" },
            { texte: "Il ou elle menace de diffuser des photos.", reponse: "Protège-toi : demande de l'aide" },
            { texte: "Il ou elle me fait du chantage si je veux partir.", reponse: "Protège-toi : demande de l'aide" }
          ],
          bilan: "La victime d'emprise n'est jamais responsable."
        }]
      }
    }, {
      temps: 2, titre: "Dire ses envies et ses limites", moteur: "reformuler",
      consigne: "Transforme chaque phrase en message « Je ». L'application te signale les mots qui accusent.",
      config: {
        champs: CHAMPS_JE,
        gabarit: "Quand {fait}, je me sens {emotion} parce que j'ai besoin {besoin}. Est-ce que tu pourrais {demande} ?",
        alertes: [
          { motif: "\\b(toujours|jamais)\\b", conseil: "« toujours » et « jamais » généralisent. Décris plutôt un fait précis." },
          { motif: "\\b(tu es|t'es|t es)\\b", conseil: "« Tu es… » juge la personne. Parle de ce qu'elle fait." }
        ],
        items: [
          { reproche: "Tu ne m'écoutes jamais.", exemple: "Quand je te parle de ma journée et que tu regardes ailleurs, je me sens seul, parce que j'ai besoin d'être écouté. Est-ce que tu pourrais poser ton téléphone quand on discute ?" },
          { reproche: "Tu passes ton temps sur ton téléphone quand on est ensemble.", exemple: "Quand on dîne ensemble et que tu es sur ton téléphone, je me sens mis de côté, parce que j'ai besoin de moments à deux. Est-ce qu'on pourrait les ranger pendant le repas ?" },
          { reproche: "Arrête d'insister !", exemple: "Quand tu insistes après mon non, je me sens mal à l'aise, parce que j'ai besoin que mon non soit respecté. Est-ce que tu peux l'entendre ?" }
        ]
      }
    }, {
      temps: 2, titre: "Mon amie est sous emprise", moteur: "scenario",
      config: {
        id: "evars-tle-2",
        cas: [{
          titre: "Mon amie est sous emprise", depart: "a",
          noeuds: {
            a: { contexte: "Ton amie Inès ne voit presque plus personne. Elle s'excuse sans cesse pour son copain et semble triste.", question: "Que lui dis-tu ?", choix: [
              { texte: "« Quitte-le, il est toxique ! »", ok: false, retour: "Elle risque de se fermer et de le défendre. Quitter une relation d'emprise est difficile et prend du temps." },
              { texte: "« C'est ton choix, je ne m'en mêlerai pas. »", ok: false, retour: "Elle reste seule, et l'isolement renforce l'emprise." },
              { texte: "« Je suis là pour toi, quoi qu'il arrive. J'ai remarqué que tu sembles triste. Tu veux en parler ? »", vers: "b", ok: true, retour: "Oui : tu restes présent, sans juger." }
            ] },
            b: { qui: "Inès", texte: "Je ne sais pas… Il dit que c'est de ma faute s'il s'énerve.", question: "Que fais-tu ensuite ?", choix: [
              { texte: "« Ce n'est pas de ta faute. Tu veux qu'on regarde ensemble à qui tu pourrais en parler ? »", vers: "fin", ok: true, retour: "Oui : tu la déculpabilises et tu l'orientes vers l'aide." },
              { texte: "« Tu exagères sûrement un peu. »", ok: false, retour: "Douter de sa parole renforce l'emprise." }
            ] },
            fin: { fin: { ok: true, titre: "Pour aider :", texte: "rester présent, ne pas juger, ne pas forcer, donner les numéros d'aide (3919, 119 pour une mineure), en parler à un adulte de confiance, et appeler le 17 en cas de danger." } }
          }
        }]
      }
    }],
    retenir: [
      "Une relation équilibrée repose sur le respect, la confiance, la liberté de chacun, et le respect du « non ».",
      "Accepter un refus, c'est accepter une frustration : cela fait partie d'une relation adulte.",
      "L'emprise s'installe peu à peu : isolement, dévalorisation, contrôle, alternance de tendresse et de violence.",
      "Pour aider : rester présent, ne pas juger, orienter vers l'aide."
    ],
    ressource: {
      titre: "Une relation équilibrée",
      intro: "Une fiche pour reconnaître l'emprise, dire tes limites et aider un ami.",
      blocs: [
        { type: "tableau", titre: "L'échelle de la relation (inspirée du violentomètre)", colonnes: ["Niveau", "Exemples"], lignes: [
          ["Profite : relation saine", "Il ou elle respecte mon non ; chacun garde ses amis ; on discute de nos désaccords"],
          ["Vigilance : dis stop", "Veut mes codes ; me critique puis s'excuse avec des cadeaux ; me dévalorise ; m'isole"],
          ["Protège-toi : demande de l'aide", "Me pousse ou me frappe ; m'oblige à des actes sexuels ; menace de diffuser des photos ; me fait du chantage"]
        ] },
        { type: "liste", titre: "Les mécanismes de l'emprise", items: ["Isoler la personne de ses proches", "La dévaloriser, la faire douter d'elle-même", "La surveiller, la contrôler", "Alterner tendresse et violence", "La rendre responsable : « c'est de ta faute si je m'énerve »"] },
        { type: "etapes", titre: "Dire mes limites en quatre cases", items: ["Quand… (le fait)", "je me sens… (mon émotion)", "parce que j'ai besoin… (mon besoin)", "Est-ce que tu pourrais… ? (ma demande)"] },
        { type: "etapes", titre: "Aider un ami", items: ["Rester présent, sans juger", "Ne pas forcer la rupture", "Lui dire que ce n'est pas sa faute", "L'orienter vers l'aide, en parler à un adulte"] },
        { type: "liste", titre: "Les aides", items: ["3919 : violences faites aux femmes, gratuit, 24 h/24", "119 : mineurs en danger", "17 ou 112 en cas de danger ; 114 par SMS", "Les adultes du lycée"] }
      ]
    },
    traces: [{
      titre: "Mes envies, mes limites", moteur: "carnet",
      outil: { id: "envies-limites", nom: "Mes envies, mes limites", description: "Ce qui compte pour moi, ce que je refuse, à qui parler." },
      config: {
        cle: "envies-limites", titreDoc: "Mes envies, mes limites",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "compte", label: "Ce qui compte pour moi dans une relation", multi: true },
          { id: "refuse", label: "Ce que je refuse", multi: true },
          { id: "parler", label: "La personne à qui je peux parler" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite trois signes d'emprise.", modele: "L'isolement, la dévalorisation, la surveillance, l'alternance de tendresse et de violence, le chantage." },
      { type: "qcm", enonce: "Pourquoi ne faut-il pas forcer une amie sous emprise à rompre ?", options: ["Elle risque de se fermer et de défendre son partenaire", "Parce que l'emprise n'est pas grave", "Parce que ce n'est jamais possible de partir"], bonne: 0, explication: "Rester présent et l'orienter vers l'aide est plus efficace." },
      { type: "ouverte", enonce: "Transforme « Arrête d'insister ! » en message « Je ».", modele: "Quand tu insistes après mon non, je me sens mal à l'aise, parce que j'ai besoin que mon non soit respecté. Est-ce que tu peux l'entendre ?" }
    ],
    plusLoin: [
      { titre: "Le violentomètre, un outil simple pour repérer les violences dans le couple", source: "Ville de Paris", url: "https://www.paris.fr/pages/le-violentometre-un-outil-simple-pour-reperer-les-violences-dans-le-couple-32819", description: "L'outil complet, avec ses trois niveaux." },
      { titre: "L'amour, c'est pas si simple !", source: FSJ, url: "https://www.filsantejeunes.com/quand-lamour-fait-mal-aie-6913", description: "Écoute, respect et acceptation de l'autre." }
    ],
    passerelles: ["cps-1re-4"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-15 min", "Accroche", "Écrit une courte scène de fiction : un personnage hésite à rester dans une relation.", "Fait émerger la complexité : on peut aimer quelqu'un qui nous fait du mal."],
        ["Temps 1 · 15-40 min", "Activité", "Classe des comportements sur l'échelle : profite, vigilance, protège-toi.", "Explique le mécanisme de l'emprise."],
        ["Temps 1 · 40-55 min", "Mise en commun", "Liste ce qui fait une relation équilibrée.", "Insiste : respect du non, place de la frustration."],
        ["Temps 2 · 0-25 min", "Activité", "Utilise l'atelier de reformulation pour dire ses limites sans reproche.", "Fait le lien avec le message « Je » vu en CPS."],
        ["Temps 2 · 25-45 min", "Activité", "Joue la situation « Mon amie est sous emprise ».", "Insiste : rester présent, ne pas juger, ne pas forcer, orienter."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Mes envies, mes limites » et répond à « Je vérifie ».", "Rappelle les numéros d'aide."]
      ],
      vigilance: "Un élève peut se reconnaître dans l'échelle. Préciser qu'on peut venir en parler après, sans que personne ne le sache. Si un élève se confie : écouter, ne pas promettre le secret, informer le chef d'établissement le jour même."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Libre d'être soi
  // ===================================================================
  S.push({
    id: "evars-tle-3", pilier: "evars", niveau: "tle", num: 3, duree: DUREE,
    titre: "Libre d'être soi",
    objectifCourt: "Droits, violences, et VIH sans préjugés",
    objectif: "Être libre d'être soi parmi les autres et réfléchir aux conditions sociales garantissant cette liberté.",
    rappel: { seance: "evars-tle-2", texte: "La dernière fois, tu as appris à reconnaître une relation équilibrée et l'emprise. Pour finir le parcours EVARS, on regarde la société : quels droits protègent la liberté de chacun, comment ils ont été gagnés, et comment réagir face aux violences." },
    aqcms: {
      pourquoi: "La liberté d'être soi repose sur des droits récents, qu'il faut connaître et défendre.",
      apport: "Connaître mes droits, réagir en témoin sans blesser une victime, et dépasser les préjugés, notamment sur le VIH.",
      ou: "Entre amis, au travail, dans la vie citoyenne.",
      lie: "Être soi (EVARS Première, séance 3), règles et lois (CPS Terminale, séance 4), aider une victime (EVARS Première, séance 2)."
    },
    accroche: "Pendant longtemps, les enfants gauchers étaient forcés d'écrire de la main droite. Être minoritaire, est-ce être anormal ?",
    temps: ["Le droit d'être soi", "Réagir face aux violences, dépasser les préjugés"],
    activites: [{
      temps: 1, titre: "Les droits dans l'ordre", moteur: "quiz",
      consigne: "Ces droits ont été gagnés peu à peu. Remets-les dans l'ordre chronologique, puis découvre la frise complète dans ta fiche.",
      config: { id: "evars-tle-3-frise", questions: [
        { type: "ordre", enonce: "Du plus ancien au plus récent :", elements: ["Émeutes de Stonewall, à l'origine des marches des fiertés", "Loi Veil : l'IVG est dépénalisée", "Création du PACS", "Le mariage est ouvert aux couples de même sexe", "L'IVG est inscrite dans la Constitution"], explication: "1969, 1975, 1999, 2013, 2024. La frise complète est dans ta fiche à garder." },
        { type: "qcm", enonce: "Le coming out, c'est…", options: ["Le choix d'en parler aux autres", "Révéler l'orientation de quelqu'un sans son accord", "Le moment où l'on prend conscience de son orientation"], bonne: 0, explication: "Le coming in est la prise de conscience ; le coming out, le choix d'en parler ; l'outing, la révélation sans accord." },
        { type: "vf", enonce: "Révéler l'orientation ou l'identité de quelqu'un sans son accord (outing) est sanctionné par la loi.", bonne: true, explication: "C'est une atteinte à la vie privée." }
      ] }
    }, {
      temps: 2, titre: "Blesser ou soutenir ?", moteur: "cartes",
      consigne: "Une victime de violences se confie. Classe chaque phrase.",
      config: {
        fin: "Ne pas croire une victime, c'est lui infliger une seconde violence (la victimisation secondaire).",
        manches: [{
          type: "classer", titre: "Cette phrase…", categories: ["Blesse", "Soutient"],
          cartes: [
            { texte: "« Pourquoi tu n'as rien dit avant ? »", reponse: "Blesse", explication: "Parler prend du temps : la peur, la honte, l'emprise retardent souvent la parole." },
            { texte: "« Tu étais habillée comment ? »", reponse: "Blesse", explication: "Une tenue n'excuse jamais une violence." },
            { texte: "« Tu es sûre de ne pas exagérer ? »", reponse: "Blesse" },
            { texte: "« Il a l'air si gentil, pourtant. »", reponse: "Blesse", explication: "La réputation de l'auteur fait souvent durer le silence." },
            { texte: "« Je te crois. »", reponse: "Soutient" },
            { texte: "« Ce n'est pas ta faute. »", reponse: "Soutient" },
            { texte: "« Qu'est-ce qui t'aiderait maintenant ? »", reponse: "Soutient" },
            { texte: "« Tu veux qu'on aille voir quelqu'un ensemble ? »", reponse: "Soutient" }
          ],
          bilan: "Croire, ne pas juger, accompagner."
        }]
      }
    }, {
      temps: 2, titre: "VIH : vrai ou faux ?", moteur: "quiz",
      config: { id: "evars-tle-3-vih", questions: [
        { type: "vf", enonce: "On peut attraper le VIH en partageant un verre ou en s'embrassant.", bonne: false, explication: "Le VIH ne se transmet ni par la salive, ni par un verre, ni par une poignée de main." },
        { type: "vf", enonce: "Une personne séropositive sous traitement efficace, avec une charge virale indétectable, ne transmet pas le VIH par voie sexuelle.", bonne: true, explication: "C'est le principe « Indétectable = Intransmissible »." },
        { type: "vf", enonce: "Avec ce principe, le préservatif ne sert plus à rien.", bonne: false, explication: "Il protège aussi des autres IST et d'une grossesse." },
        { type: "vf", enonce: "On peut vivre longtemps avec le VIH grâce aux traitements.", bonne: true },
        { type: "vf", enonce: "Refuser un emploi à une personne parce qu'elle est séropositive est légal.", bonne: false, explication: "C'est une discrimination liée à l'état de santé, interdite par la loi." }
      ] }
    }],
    retenir: [
      "Être minoritaire n'est pas être anormal. La liberté d'être soi repose sur des droits récents, gagnés par des luttes.",
      "L'outing est une atteinte à la vie privée : chacun choisit s'il parle de son orientation ou de son identité, et à qui.",
      "Face à une victime : la croire, ne pas la juger, l'accompagner. Les questions qui doutent ajoutent une seconde violence.",
      "Ce qui empêche de consentir librement : l'alcool et les substances, la soumission chimique, l'emprise, un handicap qui rend vulnérable, un rapport de domination.",
      "Indétectable = Intransmissible : une personne séropositive sous traitement efficace ne transmet pas le VIH par voie sexuelle."
    ],
    ressource: {
      titre: "Libre d'être soi : droits et recours",
      intro: "Une fiche pour connaître tes droits, soutenir une victime, et dépasser les préjugés.",
      blocs: [
        { type: "tableau", titre: "La frise des droits", colonnes: ["Année", "Événement"], lignes: [
          ["1969", "Émeutes de Stonewall à New York, à l'origine des marches des fiertés"],
          ["1975", "Loi Veil : l'IVG est dépénalisée"],
          ["1982", "La France supprime du Code pénal la dernière discrimination visant l'homosexualité"],
          ["1999", "Création du PACS"],
          ["2013", "Le mariage est ouvert aux couples de même sexe"],
          ["2016", "Changer la mention du sexe à l'état civil n'impose plus d'opération"],
          ["2018", "Création de l'outrage sexiste"],
          ["2024", "La liberté de recourir à l'IVG est inscrite dans la Constitution"],
          ["2025", "Le consentement entre dans la définition pénale du viol"]
        ] },
        { type: "tableau", titre: "Les mots justes", colonnes: ["Mot", "Ce que c'est"], lignes: [
          ["Coming in", "Prendre conscience de son orientation ou de son identité"],
          ["Coming out", "Choisir d'en parler aux autres"],
          ["Outing", "Révéler l'orientation ou l'identité de quelqu'un sans son accord : une atteinte à la vie privée"]
        ] },
        { type: "tableau", titre: "Blesser ou soutenir", colonnes: ["Phrases qui blessent", "Phrases qui soutiennent"], lignes: [
          ["« Pourquoi tu n'as rien dit avant ? »", "« Je te crois. »"],
          ["« Tu étais habillée comment ? »", "« Ce n'est pas ta faute. »"],
          ["« Tu es sûre de ne pas exagérer ? »", "« Qu'est-ce qui t'aiderait maintenant ? »"]
        ] },
        { type: "liste", titre: "Ce qui empêche de consentir librement", items: ["L'alcool et les substances, la soumission chimique", "L'emprise", "Un handicap qui rend vulnérable", "Un rapport de domination : entraîneur, employeur, adulte en position d'autorité"] },
        { type: "texte", titre: "Le VIH sans préjugés", texte: "Indétectable = Intransmissible : une personne séropositive sous traitement efficace ne transmet pas le VIH par voie sexuelle. Le VIH ne se transmet ni par la salive ni par le contact quotidien. Discriminer une personne séropositive est interdit." },
        { type: "liste", titre: "Se faire aider, obtenir réparation", items: ["Les adultes du lycée", "119 : enfance en danger ; 3919 : violences faites aux femmes", "3018 : violences en ligne ; 3928 : discriminations", "116 006 : aide aux victimes", "17 ou 112 en cas de danger"] }
      ]
    },
    traces: [{
      titre: "Ce que je retiens d'EVARS", moteur: "carnet",
      outil: { id: "bilan-evars", nom: "Ce que je retiens d'EVARS", description: "Mon bilan des trois années." },
      config: {
        cle: "bilan-evars", titreDoc: "Ce que je retiens d'EVARS",
        intro: "Pour toi seul : ton bilan des trois années.",
        champs: [
          { id: "appris", label: "Ce qui m'a le plus appris en trois ans", multi: true },
          { id: "idee", label: "Une idée reçue que j'ai abandonnée", multi: true },
          { id: "ami", label: "Ce que je ferai si un ami a besoin d'aide", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Quelle différence entre coming out et outing ?", modele: "Le coming out est le choix d'une personne de parler de son orientation ou de son identité ; l'outing, c'est la révéler sans son accord." },
      { type: "vf", enonce: "Une personne séropositive sous traitement efficace peut transmettre le VIH par voie sexuelle.", bonne: false, explication: "Indétectable = Intransmissible." },
      { type: "ouverte", enonce: "Écris une phrase qui soutient une victime.", modele: "« Je te crois. Ce n'est pas ta faute. Tu veux qu'on aille voir quelqu'un ensemble ? »" }
    ],
    plusLoin: [
      { titre: "Indétectable = Intransmissible", source: "ONUSIDA", url: "https://www.unaids.org/sites/default/files/media_asset/undetectable-untransmittable_fr.pdf", description: "Ce que signifie une charge virale indétectable." },
      { titre: "Le 116 006, numéro d'aide aux victimes", source: "Justice.fr", url: "https://www.justice.fr/je-suis-victime/116006", description: "Écoute, information et accompagnement des victimes." },
      { titre: "Le 3928 contre les discriminations", source: "Défenseur des droits", url: "https://www.defenseurdesdroits.fr/sites/default/files/2023-11/ddd_antidiscriminations_3928_depliant_pages_20230112.pdf", description: "Signaler une discrimination." }
    ],
    passerelles: ["cps-tle-4", "cps-tle-3"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-10 min", "Accroche", "Réfléchit à l'exemple des gauchers. Être minoritaire, est-ce être anormal ?", "Distingue fait majoritaire et fait minoritaire."],
        ["Temps 1 · 10-35 min", "Activité", "Remet dans l'ordre des dates clés des droits, puis découvre la frise complète.", "Explique le sens des marches des fiertés : visibilité, mémoire des luttes, enjeux actuels."],
        ["Temps 1 · 35-55 min", "Notions", "Définit coming in, coming out et outing ; discute de la pression sociale.", "Rappelle que l'outing est une atteinte à la vie privée."],
        ["Temps 2 · 0-20 min", "Activité", "Classe des phrases dites à une victime : celles qui blessent, celles qui soutiennent.", "Explique la victimisation secondaire."],
        ["Temps 2 · 20-30 min", "Notions", "Identifie ce qui empêche de consentir et ce qui fait durer le silence.", "Présente les mouvements de dénonciation des violences depuis #MeToo (2017), sans nommer de personnes mises en cause dans des procédures en cours."],
        ["Temps 2 · 30-45 min", "Activité", "Répond au quiz « VIH : vrai ou faux ? ».", "Explique « Indétectable = Intransmissible »."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Ce que je retiens d'EVARS » et répond à « Je vérifie ».", "Rappelle les lieux d'aide et de réparation."]
      ],
      vigilance: "On transmet des faits et la loi, sans demander à un élève de se positionner sur son orientation ou son identité. On respecte la diversité des convictions des familles, tout en transmettant les objectifs du programme et la loi, qui s'impose à tous."
    }
  });
})();
