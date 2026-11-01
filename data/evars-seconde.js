/*
 * PILIER EVARS · SECONDE
 * Contenu validé (document « Pilier EVARS – Seconde »), conforme au programme EVARS
 * (BO de février 2025). Trois séances d'environ 1 h 50, en deux temps de 55 minutes.
 * Ressources vérifiées en octobre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var FSJ = "Fil Santé Jeunes";
  var DUREE = "1 h 50 (2 × 55 min)";

  // Petite situation à une étape : une bonne réponse, des réponses à retravailler
  function situation(titre, contexte, question, options, bilan) {
    var noeuds = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
    options.forEach(function (o) { noeuds.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }

  // ===================================================================
  // SÉANCE 1 · Mon corps, mon image
  // ===================================================================
  S.push({
    id: "evars-2nde-1", pilier: "evars", niveau: "2nde", num: 1, duree: DUREE,
    titre: "Mon corps, mon image",
    objectifCourt: "Les images, les normes et ma santé",
    objectif: "Prendre soin de son corps et développer une image positive de soi.",
    rappel: { seance: "cps-2nde-3", etiquette: "Lien avec CPS", texte: "En CPS, tu as travaillé ton estime de toi. Ici, on regarde ce qui l'abîme parfois : les images qu'on voit chaque jour, et les normes sur ce que « doit » être un corps." },
    aqcms: {
      pourquoi: "Les images des réseaux sont souvent retouchées, et on se compare à elles sans le savoir.",
      apport: "Regarder les images avec recul, et prendre soin de ma santé sans honte.",
      ou: "Sur mes réseaux, face à une pub, quand je doute de mon corps, quand j'ai une question de santé.",
      lie: "Mon estime de moi (CPS Seconde, séance 3), mon empreinte numérique (Cyber)."
    },
    accroche: "Narcisse, un jeune homme de la mythologie grecque, voit son reflet dans l'eau d'une source. Il tombe amoureux de cette image et ne peut plus s'en détacher. Aujourd'hui, où est le miroir ?",
    temps: ["L'image de soi et les normes", "Prendre soin de sa santé"],
    activites: [{
      temps: 1, titre: "Réel ou retouché ?", moteur: "retouche",
      consigne: "Fais glisser le curseur : à chaque cran, une retouche s'ajoute au portrait. Pour chacune, demande-toi si c'est possible dans la vraie vie.",
      config: {
        etapes: [
          { nom: "Peau lissée", question: "Une peau sans aucun grain, bouton ni cerne, est-ce possible ?", reponse: "Non : toute peau a des pores, des marques, des petites imperfections." },
          { nom: "Visage affiné", question: "Le visage et la mâchoire ont été rétrécis. Peut-on changer la forme de son visage en un jour ?", reponse: "Non : c'est une déformation de l'image." },
          { nom: "Yeux agrandis", question: "Des yeux aussi grands, est-ce naturel ?", reponse: "Non : les filtres agrandissent les yeux pour un effet « poupée »." },
          { nom: "Dents blanchies", question: "Des dents d'un blanc pur, est-ce la couleur naturelle des dents ?", reponse: "Non : des dents en bonne santé sont légèrement jaunes ou ivoire." },
          { nom: "Filtre lumineux", question: "Une lumière parfaite et des couleurs éclatantes, partout, tout le temps ?", reponse: "Non : c'est un réglage de l'image, pas une réalité." }
        ]
      }
    }, {
      temps: 1, titre: "Pourquoi retoucher ?", facultatif: true, moteur: "quiz",
      config: { id: "evars-2nde-1-retouche", questions: [
        { type: "qcm", enonce: "Quel indice peut montrer qu'une photo est retouchée ?", options: ["Une peau sans aucun grain ni marque", "Une photo prise de jour", "Une personne qui sourit"], bonne: 0, explication: "Autres indices : un fond déformé autour de la silhouette, des proportions irréalistes, une lumière parfaite partout." },
        { type: "qcm", enonce: "Pourquoi beaucoup d'influenceurs retouchent-ils leurs images ?", options: ["Pour vendre des produits et gagner des abonnés", "Parce que la loi l'impose", "Parce que les téléphones le font sans qu'on puisse l'éviter"], bonne: 0, explication: "Depuis 2023, un influenceur qui fait la promotion d'un produit doit signaler une image retouchée ou créée par intelligence artificielle." }
      ] }
    }, {
      temps: 1, titre: "Biologique ou norme ?", moteur: "cartes",
      consigne: "Le corps est biologique. Mais beaucoup de choses qu'on attend de lui viennent de la société. Classe chaque phrase.",
      config: {
        fin: "Les normes changent selon les époques et les pays : elles ne sont pas des lois de la nature.",
        manches: [{
          type: "classer", titre: "D'où ça vient ?", categories: ["Biologique", "Norme de la société"],
          cartes: [
            { texte: "À la puberté, le corps change sous l'effet des hormones.", reponse: "Biologique" },
            { texte: "Les garçons ne doivent pas pleurer.", reponse: "Norme de la société", explication: "Pleurer est une réaction humaine. L'idée que les garçons doivent se retenir est une norme." },
            { texte: "Une belle peau, c'est une peau sans aucun bouton.", reponse: "Norme de la société", explication: "C'est un idéal irréaliste, renforcé par les images retouchées." },
            { texte: "Les organes génitaux des filles et des garçons se développent à partir des mêmes structures chez l'embryon.", reponse: "Biologique" },
            { texte: "Certaines personnes naissent avec des caractéristiques à la fois féminines et masculines : on parle de personnes intersexes.", reponse: "Biologique" },
            { texte: "Le maquillage, c'est pour les filles.", reponse: "Norme de la société" },
            { texte: "Avoir la peau bronzée, c'est beau.", reponse: "Norme de la société", explication: "Pendant longtemps en Europe, c'est au contraire la peau très claire qui était valorisée." }
          ],
          bilan: "Le corps est biologique ; ce qu'on attend de lui est souvent une norme."
        }]
      }
    }, {
      temps: 2, titre: "Prendre soin de sa santé : vrai ou faux ?", moteur: "quiz",
      consigne: "Prendre soin de son corps, c'est aussi oser poser ses questions de santé.",
      config: { id: "evars-2nde-1-sante", questions: [
        { type: "vf", enonce: "La vaccination contre les papillomavirus concerne seulement les filles.", bonne: false, explication: "Filles et garçons, idéalement entre 11 et 14 ans. Un rattrapage est possible : demande à un médecin ou à l'infirmière." },
        { type: "vf", enonce: "Une mineure peut obtenir gratuitement la contraception d'urgence, sans ordonnance, en pharmacie ou à l'infirmerie du lycée.", bonne: true, explication: "Oui, et de façon anonyme. Plus elle est prise tôt, plus elle est efficace." },
        { type: "vf", enonce: "Des règles très douloureuses, c'est normal : il faut supporter.", bonne: false, explication: "Il faut en parler à un professionnel de santé : cela peut être le signe d'une endométriose." },
        { type: "vf", enonce: "Les mutilations sexuelles féminines sont interdites et punies par la loi en France.", bonne: true, explication: "Même quand elles sont pratiquées à l'étranger sur une jeune fille qui vit en France. Une jeune fille menacée peut appeler le 119." },
        { type: "vf", enonce: "Il existe un numéro gratuit et anonyme pour toutes les questions sur la sexualité et la contraception.", bonne: true, explication: "Le 0 800 08 11 11." }
      ] }
    }],
    retenir: [
      "Beaucoup d'images des réseaux sont retouchées ou filtrées : on se compare souvent à quelque chose qui n'existe pas.",
      "Le corps est biologique ; ce qu'on attend de lui (rôles, beauté) est souvent une norme de la société, qui change.",
      "Prendre soin de son corps, c'est aussi oser poser ses questions de santé à un professionnel."
    ],
    ressource: {
      titre: "Mon corps, mon image",
      intro: "Une fiche pour regarder les images avec recul et prendre soin de ta santé.",
      blocs: [
        { type: "liste", titre: "Les indices d'une image retouchée", items: ["Une peau sans grain, sans bouton ni cerne", "Un visage ou une silhouette aux proportions irréalistes", "Un fond déformé autour du corps (lignes courbées)", "Des yeux très grands, des dents très blanches", "Une lumière parfaite partout"] },
        { type: "tableau", titre: "Biologique ou norme ?", colonnes: ["", "Biologique", "Norme de la société"], lignes: [
          ["Ce que c'est", "Ce qui vient du corps", "Ce que la société attend du corps"],
          ["Exemple", "La puberté, les hormones", "« Les garçons ne pleurent pas », « une peau parfaite »"],
          ["Ça change ?", "Non", "Oui, selon les époques et les pays"]
        ] },
        { type: "tableau", titre: "Mes repères santé", colonnes: ["Question", "Ce qu'il faut savoir"], lignes: [
          ["Vaccin contre les papillomavirus", "Pour les filles et les garçons, avec un rattrapage possible"],
          ["Contraception d'urgence", "Gratuite, sans ordonnance et anonyme pour une mineure, en pharmacie ou à l'infirmerie, au plus vite"],
          ["Règles très douloureuses", "Pas normal : en parler à un professionnel (possible endométriose)"],
          ["Mutilations sexuelles féminines", "Interdites et punies par la loi ; une jeune fille menacée peut appeler le 119"]
        ] },
        { type: "liste", titre: "Où trouver de l'aide", items: ["L'infirmière du lycée", "0 800 08 11 11 : sexualité, contraception, IVG (gratuit, anonyme)", "Fil Santé Jeunes : 0 800 235 236", "119 : enfance en danger"] }
      ]
    },
    traces: [{
      titre: "Ce que j'aime chez moi", moteur: "carnet",
      outil: { id: "aime-chez-moi", nom: "Ce que j'aime chez moi", description: "Mes qualités, une chose de mon corps, une chose que je sais faire." },
      config: {
        cle: "aime-chez-moi", titreDoc: "Ce que j'aime chez moi",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "caractere", label: "Trois choses que j'aime dans mon caractère", multi: true },
          { id: "corps", label: "Une chose que j'aime dans mon corps" },
          { id: "savoir", label: "Une chose que je sais faire" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite deux indices qui montrent qu'une image a été retouchée.", modele: "Une peau sans aucun grain, des yeux très grands, un fond déformé autour de la silhouette, des proportions irréalistes." },
      { type: "qcm", enonce: "« Les garçons ne doivent pas pleurer » : c'est…", options: ["Biologique", "Une norme de la société"], bonne: 1, explication: "Pleurer est une réaction humaine, pour tout le monde." },
      { type: "qcm", enonce: "Où une mineure peut-elle obtenir gratuitement et anonymement une contraception d'urgence ?", options: ["En pharmacie ou à l'infirmerie du lycée", "Seulement chez un médecin, avec ses parents", "Nulle part avant 18 ans"], bonne: 0, explication: "Sans ordonnance, gratuitement et anonymement." }
    ],
    plusLoin: [
      { titre: "Ça veut dire quoi être beau ?", source: FSJ, url: "https://www.filsantejeunes.com/ca-veut-dire-quoi-etre-beau-23714", description: "La beauté change selon les époques, et les filtres effacent ce qui rend unique." },
      { titre: "Selfie : miroir ou fenêtre ?", source: FSJ, url: "https://www.filsantejeunes.com/selfie-miroir-ou-fenetre-17393", description: "Pourquoi on se photographie, et ce que cela dit de nous." },
      { titre: "Contraception d'urgence", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/f1100", description: "Où l'obtenir, gratuitement et anonymement." }
    ],
    passerelles: ["cps-2nde-3"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-10 min", "Accroche", "Lit le mythe de Narcisse. Où est le miroir aujourd'hui ?", "Fait le lien avec le téléphone, les selfies, les likes."],
        ["Temps 1 · 10-30 min", "Activité", "Utilise le décodeur « Réel ou retouché ? » puis le quiz.", "Fait nommer chaque retouche et se demander pourquoi on la fait."],
        ["Temps 1 · 30-45 min", "Activité", "Classe des phrases : biologique ou norme.", "Montre que les normes changent selon les époques et les pays."],
        ["Temps 1 · 45-55 min", "Mise en commun", "Formule ce qu'il retient sur les images et les normes.", "Rappelle l'obligation de signaler une image retouchée dans un contenu commercial."],
        ["Temps 2 · 0-10 min", "Accroche", "« Prendre soin de son corps, ça veut dire quoi pour toi ? »", "Élargit : sommeil, sport, santé sexuelle, demander de l'aide."],
        ["Temps 2 · 10-35 min", "Activité", "Répond au quiz « Vrai ou faux ? » sur la santé.", "Corrige avec des faits, invite à consulter l'infirmière."],
        ["Temps 2 · 35-45 min", "Ressources", "Repère les lieux et numéros d'aide.", "Présente l'infirmière et ses horaires."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Ce que j'aime chez moi » et répond à « Je vérifie ».", "Rappelle que la trace est privée."]
      ],
      vigilance: "Prévenir l'infirmière et le CPE des dates. Un élève peut être concerné par les mutilations sexuelles féminines, une maladie ou un handicap visible : rester factuel et orienter vers l'infirmière. Si un élève se confie : écouter, ne pas promettre le secret, ne pas enquêter, informer le chef d'établissement le jour même."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Les émotions de la relation
  // ===================================================================
  S.push({
    id: "evars-2nde-2", pilier: "evars", niveau: "2nde", num: 2, duree: DUREE,
    titre: "Les émotions de la relation",
    objectifCourt: "Comprendre l'autre, et se respecter",
    objectif: "Reconnaître et comprendre ses émotions, ses sentiments et ceux des autres.",
    rappel: { seance: "evars-2nde-1", texte: "La dernière fois, tu as appris à regarder ton corps et les images avec recul. Aujourd'hui, on parle de ce qui se passe entre deux personnes : les émotions, les sentiments, et la façon de se respecter." },
    aqcms: {
      pourquoi: "L'amour et l'amitié font naître des émotions fortes, parfois difficiles à comprendre.",
      apport: "Comprendre ce que je ressens, et ce que l'autre ressent, pour vivre des relations où chacun se sent bien.",
      ou: "Quand quelqu'un me plaît, quand on me dit non, quand je veux mettre fin à une relation.",
      lie: "Ma roue des émotions (CPS Seconde, séance 1), dire non (CPS Seconde, séance 5)."
    },
    accroche: "Roméo et Juliette, de Shakespeare. Au cours d'un bal masqué, Roméo aperçoit Juliette. Ils échangent quelques répliques, s'embrassent, puis découvrent que leurs familles sont ennemies. Le lendemain, ils se marient en secret. Qu'est-ce qui rend cette rencontre romantique ? Est-ce que ça se passe comme ça dans la vraie vie ?",
    temps: ["Les étapes d'une relation", "Comprendre l'autre, et se respecter"],
    activites: [{
      temps: 1, titre: "Les étapes d'une relation", moteur: "quiz",
      consigne: "Remets les étapes dans l'ordre qui te semble le plus courant. Il n'y a pas de correction : compare avec tes voisins.",
      config: { id: "evars-2nde-2-etapes", questions: [
        { type: "ordre", libre: true, enonce: "Dans quel ordre vois-tu ces étapes ?",
          elements: ["Se rencontrer", "Faire connaissance", "Se plaire", "Se déclarer", "Se rapprocher physiquement", "Avoir une relation sexuelle, si les deux le veulent", "S'engager", "Se séparer, parfois"],
          explication: "Chaque relation a son rythme. Chaque étape se décide à deux. On peut s'arrêter ou dire non à chaque étape, et aucune n'est obligatoire." }
      ] }
    }, {
      temps: 2, titre: "Peut-on savoir ?", moteur: "cartes",
      consigne: "Les signaux peuvent tromper. Pour chaque situation, que peut-on vraiment savoir ?",
      config: {
        fin: "La seule façon de savoir ce que veut l'autre, c'est de demander, et d'écouter la réponse.",
        manches: [{
          type: "classer", titre: "Que dit ce signal ?",
          categories: ["Plutôt de l'intérêt", "Plutôt de la gêne ou de l'hésitation", "On ne peut pas savoir : il faut demander"],
          cartes: [
            { texte: "Elle te sourit quand tu lui parles.", reponse: "On ne peut pas savoir : il faut demander", explication: "Un sourire peut être de la politesse, de la gêne ou de l'intérêt." },
            { texte: "Il te propose de lui-même de vous revoir.", reponse: "Plutôt de l'intérêt" },
            { texte: "Elle recule quand tu t'approches.", reponse: "Plutôt de la gêne ou de l'hésitation" },
            { texte: "Il dit : « je sais pas… peut-être ».", reponse: "Plutôt de la gêne ou de l'hésitation", explication: "Une hésitation n'est pas un oui." },
            { texte: "Elle porte une tenue moulante.", reponse: "On ne peut pas savoir : il faut demander", explication: "Une tenue ne dit rien de ce que veut une personne." },
            { texte: "Il a accepté un rendez-vous.", reponse: "On ne peut pas savoir : il faut demander", explication: "Accepter un rendez-vous ne veut pas dire accepter autre chose." }
          ],
          bilan: "Une hésitation ou un silence ne sont pas un oui."
        }]
      }
    }, {
      temps: 2, titre: "Dire les choses avec respect", moteur: "scenario",
      consigne: "Quatre situations. Choisis la réponse qui respecte l'autre et toi-même.",
      config: {
        id: "evars-2nde-2",
        cas: [
          situation("Dire à quelqu'un qu'il nous plaît", "Sami te plaît. Tu voudrais le lui dire.", "Comment fais-tu ?", [
            ["Je le dis devant tout le groupe, pour voir sa réaction.", false, "Devant les autres, Sami ne peut pas répondre librement, et un refus serait public."],
            ["Je le lui dis en privé, simplement, en lui laissant la possibilité de répondre non.", true, "Oui : tu respectes sa liberté de répondre, et la tienne."],
            ["J'attends qu'il devine tout seul.", false, "C'est possible, mais il risque de ne jamais le savoir. Dire les choses simplement, c'est plus clair."]
          ], "Dire ses sentiments demande du courage. Le faire en privé, sans pression, respecte la liberté de l'autre."),
          situation("Recevoir un non", "Tu as dit à Léna qu'elle te plaît. Elle répond : « Je t'aime bien, mais pas comme ça. »", "Que réponds-tu ?", [
            ["« Allez, laisse-moi une chance, tu verras. »", false, "Insister après un non, c'est mettre la pression."],
            ["« De toute façon, tu ne me plaisais pas tant que ça. »", false, "La blessure est compréhensible, mais blesser l'autre en retour n'aide personne."],
            ["« D'accord, merci de m'avoir répondu franchement. »", true, "Oui : tu respectes sa réponse, même si ça fait mal."]
          ], "Un non fait mal, c'est normal. On le respecte, et on peut en parler à un ami pour se sentir mieux."),
          situation("Mettre fin à une relation", "Tu veux arrêter ta relation avec Noa.", "Comment fais-tu ?", [
            ["Je ne réponds plus à ses messages : il ou elle comprendra.", false, "Disparaître sans un mot laisse l'autre dans l'incompréhension."],
            ["Je change mon statut sur les réseaux.", false, "Noa l'apprendrait en public : c'est humiliant."],
            ["Je le lui dis en face, ou par un appel, avec respect.", true, "Oui : c'est difficile, mais c'est respectueux pour vous deux."]
          ], "Une rupture fait souffrir les deux personnes. L'annoncer directement et avec respect, c'est la façon la plus juste."),
          situation("La jalousie", "Ton ou ta partenaire veut lire tes messages « pour être rassuré ».", "Que réponds-tu ?", [
            ["Je donne mon téléphone pour éviter une dispute.", false, "Céder une fois installe l'idée qu'il est normal de te surveiller."],
            ["« T'es malade, t'es complètement parano ! »", false, "L'attaque fait monter la tension sans régler le problème."],
            ["« Je comprends que tu sois inquiet, mais mon téléphone, c'est privé. On peut parler de ce qui t'inquiète. »", true, "Oui : tu poses ta limite et tu ouvres le dialogue."]
          ], "Contrôler le téléphone de l'autre n'est pas une preuve d'amour. Une relation repose sur la confiance et la liberté de chacun.")
        ]
      }
    }],
    retenir: [
      "Dans une relation, chacun a son rythme : chaque étape se décide à deux, et on peut dire non à tout moment.",
      "Les signaux peuvent tromper : pour savoir ce que veut l'autre, on demande et on écoute. Une hésitation ou un silence ne sont pas un oui.",
      "Recevoir un non fait mal, mais on le respecte.",
      "Une relation où l'on se sent bien repose sur le respect, la confiance et la liberté de chacun."
    ],
    ressource: {
      titre: "Mes repères dans une relation",
      intro: "Une fiche pour vivre des relations où chacun se sent bien.",
      blocs: [
        { type: "liste", titre: "Les règles d'or", items: ["Chaque relation a son rythme", "Chaque étape se décide à deux", "On peut dire non, ou s'arrêter, à tout moment", "Aucune étape n'est obligatoire"] },
        { type: "liste", titre: "Les signaux peuvent tromper", items: ["Un sourire, une tenue, un rendez-vous accepté ne veulent pas dire oui", "Une hésitation, un « peut-être », un silence ne sont pas un oui", "Pour savoir : je demande, et j'écoute la réponse"] },
        { type: "tableau", titre: "Dire et recevoir", colonnes: ["Situation", "Une façon respectueuse"], lignes: [
          ["Dire que quelqu'un me plaît", "En privé, simplement, en laissant la possibilité de dire non"],
          ["Recevoir un non", "« D'accord, merci de m'avoir répondu franchement. »"],
          ["Mettre fin à une relation", "En face ou par un appel, avec respect"],
          ["Refuser d'être surveillé", "« Mon téléphone, c'est privé. On peut parler de ce qui t'inquiète. »"]
        ] },
        { type: "tableau", titre: "Relation saine ou signal d'alerte ?", colonnes: ["Relation saine", "Signal d'alerte"], lignes: [
          ["Chacun garde ses amis et ses activités", "Il ou elle veut m'éloigner de mes amis"],
          ["On respecte le non de l'autre", "Il ou elle insiste, met la pression"],
          ["On se fait confiance", "Il ou elle surveille mon téléphone, me contrôle"],
          ["On se parle quand ça ne va pas", "Je n'ose plus dire ce que je pense"]
        ] },
        { type: "liste", titre: "À qui en parler ?", items: ["Un ami, un adulte de confiance", "L'infirmière, le CPE", "Fil Santé Jeunes : 0 800 235 236", "119 si tu es en danger"] }
      ]
    },
    traces: [{
      titre: "Mes repères pour une relation où je me sens bien", moteur: "carnet",
      outil: { id: "reperes-relation", nom: "Mes repères dans une relation", description: "Ce qui compte pour moi, ce que je n'accepte pas, à qui parler." },
      config: {
        cle: "reperes-relation", titreDoc: "Mes repères pour une relation où je me sens bien",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "compte", label: "Ce qui compte pour moi dans une relation", multi: true },
          { id: "refuse", label: "Ce que je n'accepte pas", multi: true },
          { id: "parler", label: "À qui je peux parler si ça ne va pas" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Si quelqu'un a accepté un rendez-vous, il est d'accord pour la suite.", bonne: false, explication: "Accepter un rendez-vous ne veut pas dire accepter autre chose. Chaque étape se décide à deux." },
      { type: "ouverte", enonce: "Comment savoir ce que veut l'autre ?", modele: "En lui demandant, et en écoutant vraiment sa réponse. Une hésitation ou un silence ne sont pas un oui." },
      { type: "ouverte", enonce: "Cite deux signaux d'alerte dans une relation.", modele: "Surveiller le téléphone de l'autre, l'éloigner de ses amis, insister après un non, le dévaloriser." }
    ],
    plusLoin: [
      { titre: "Roméo et Juliette, de Shakespeare (texte intégral)", source: "Projet Gutenberg", url: "https://www.gutenberg.org/ebooks/18143", description: "La pièce en français (traduction de François Guizot), libre de droits. La scène du bal est à l'acte I, scène 5." },
      { titre: "L'amour, c'est pas si simple !", source: FSJ, url: "https://www.filsantejeunes.com/quand-lamour-fait-mal-aie-6913", description: "Les émotions de l'amour, et le respect dans la relation." },
      { titre: "Vivre une rupture", source: FSJ, url: "https://www.filsantejeunes.com/vivre-une-rupture-5543", description: "Annoncer une rupture avec respect, et traverser le chagrin." }
    ],
    passerelles: ["cps-2nde-1", "cps-2nde-5", "cps-1re-4"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-15 min", "Accroche", "Découvre la scène du bal de Roméo et Juliette (acte I, scène 5), lue ou vue dans le film de Baz Luhrmann (1996, scène de l'aquarium). Est-ce réaliste ?", "Fait distinguer la fiction de la vie réelle : coup de foudre, mariage le lendemain, pression des familles. Texte : traduction Guizot, libre de droits (Projet Gutenberg). Film : DVD du CDI ou de l'établissement, à diffuser en classe dans le cadre de l'exception pédagogique (le film existe aussi sur Disney+ ou en location, mais ces abonnements sont réservés à un usage privé)."],
        ["Temps 1 · 15-35 min", "Activité", "Remet dans l'ordre qu'il imagine les cartes des étapes d'une relation. Aucune correction.", "Fait émerger qu'il n'existe pas d'ordre unique et que chaque étape se fait à deux."],
        ["Temps 1 · 35-55 min", "Mise en commun", "Liste ce qui influence nos attentes : films, amis, famille, culture, réseaux.", "Rappelle que les images, y compris pornographiques, ne montrent pas la réalité d'une relation."],
        ["Temps 2 · 0-10 min", "Accroche", "Repère sur sa roue des émotions celles qu'on peut ressentir quand on est amoureux.", "Montre que toutes ces émotions sont normales."],
        ["Temps 2 · 10-25 min", "Activité", "Classe des signaux : intérêt, gêne, ou on ne peut pas savoir.", "Insiste : la seule façon de savoir est de demander."],
        ["Temps 2 · 25-45 min", "Activité", "Joue quatre situations : se déclarer, recevoir un non, rompre, la jalousie.", "Fait justifier les choix respectueux."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Mes repères pour une relation où je me sens bien » et répond à « Je vérifie ».", "Rappelle les adultes et numéros d'aide."]
      ],
      vigilance: "Parler de situations fictives, jamais de la vie d'un élève précis. Si un élève se confie : écouter, ne pas promettre le secret, ne pas enquêter, informer le chef d'établissement le jour même."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Mon intimité en ligne
  // ===================================================================
  S.push({
    id: "evars-2nde-3", pilier: "evars", niveau: "2nde", num: 3, duree: DUREE,
    titre: "Mon intimité en ligne",
    objectifCourt: "Me protéger et protéger les autres sur les réseaux",
    objectif: "Se protéger et protéger les autres : l'intimité à l'ère des réseaux sociaux.",
    rappel: { seance: "evars-2nde-2", texte: "La dernière fois, tu as vu qu'une relation se construit à deux, dans le respect. Ce respect vaut aussi en ligne : aujourd'hui, on apprend à protéger son intimité et celle des autres sur les réseaux." },
    aqcms: {
      pourquoi: "Une image partagée peut circuler pour toujours, et certaines diffusions sont des délits.",
      apport: "Savoir ce que je peux partager, reconnaître une situation dangereuse, et savoir quoi faire.",
      ou: "Sur mes réseaux, dans les groupes de classe, face à une demande ou une menace en ligne.",
      lie: "Mon empreinte numérique (Cyber), dire non (CPS Seconde, séance 5), les adultes ressources (Sentinelles)."
    },
    accroche: "Se montrer : partager un moment de sa journée avec ses amis. S'exposer : rendre publics sa vie personnelle, sa localisation, ses états d'âme. S'exhiber : montrer à un large public ce qui relève de l'intime. Où places-tu tes dernières publications ?",
    temps: ["Intime, privé, public", "La loi, et que faire"],
    activites: [{
      temps: 1, titre: "Intime, privé ou public ?", moteur: "cartes",
      consigne: "Intime : ce qui ne regarde que moi. Privé : ma famille et mes proches. Public : tout le monde peut le voir. Classe chaque information.",
      config: {
        fin: "C'est toi qui choisis ce que tu partages. Et tu demandes l'accord des autres avant de publier une image d'eux.",
        manches: [{
          type: "classer", titre: "Qui peut le savoir ?", categories: ["Intime", "Privé", "Public"],
          cartes: [
            { texte: "Mes sentiments pour quelqu'un", reponse: "Intime" },
            { texte: "Mes problèmes de santé", reponse: "Intime" },
            { texte: "Mon corps dénudé", reponse: "Intime", explication: "Une image intime, c'est l'intimité : elle ne regarde que toi." },
            { texte: "Mon adresse", reponse: "Privé" },
            { texte: "Mon numéro de téléphone", reponse: "Privé" },
            { texte: "Une photo de groupe du voyage scolaire", reponse: "Privé", explication: "Avant de la publier, on demande l'accord de chacun." },
            { texte: "Le résultat du match de mon club", reponse: "Public" },
            { texte: "Mon pseudo de jeu en ligne", reponse: "Public" }
          ],
          bilan: "Plus une information est intime, plus il faut la protéger."
        }]
      }
    }, {
      temps: 2, titre: "Le débat mouvant", moteur: "debat",
      consigne: "Pour chaque affirmation, place-toi avant le débat. Écoutez les arguments en classe, puis replace-toi.",
      config: { affirmations: [
        { texte: "Si une personne a envoyé elle-même une photo intime, celui qui la reçoit peut la partager.", repere: "La diffuser sans son accord est un délit, même si elle l'a envoyée volontairement." },
        { texte: "Quand une photo intime circule, la personne sur la photo est un peu responsable.", repere: "La victime n'est jamais responsable : le responsable est celui qui diffuse." },
        { texte: "Partager un commentaire sexiste ou homophobe, ce n'est pas grave, je ne l'ai pas écrit.", repere: "Partager, c'est participer à la diffusion. On peut au contraire signaler le contenu." },
        { texte: "Dans un groupe privé, je peux dire ce que je veux sur quelqu'un.", repere: "Injures, menaces et harcèlement restent punis, même dans un groupe privé." },
        { texte: "Il est interdit de montrer des images pornographiques à un mineur.", repere: "Vrai. Si on t'en envoie, ce n'est pas ta faute : tu peux en parler à un adulte et signaler." }
      ] }
    }, {
      temps: 2, titre: "Que faire ?", moteur: "scenario",
      consigne: "Trois situations. Choisis la bonne réaction.",
      config: {
        id: "evars-2nde-3",
        cas: [
          situation("Témoin dans le groupe de classe", "Dans le groupe de classe, quelqu'un poste une photo intime d'une élève. Les messages s'enchaînent.", "Que fais-tu ?", [
            ["Je la transfère à un ami pour lui montrer.", false, "La transférer, c'est participer à la diffusion : c'est un délit."],
            ["J'écris « mdr » pour ne pas paraître coincé.", false, "Commenter encourage la diffusion et blesse l'élève."],
            ["Je ne partage pas, je ne commente pas, je n'enregistre pas la photo. Je note qui l'a postée et où, je soutiens l'élève et je préviens un adulte ou le 3018.", true, "Oui : c'est exactement ce qu'il faut faire."]
          ], "Le 3018 peut faire supprimer les contenus. La victime n'est jamais responsable."),
          situation("Une menace en ligne", "Quelqu'un rencontré en ligne menace de diffuser une photo de toi si tu ne lui envoies pas d'argent ou d'autres photos.", "Que fais-tu ?", [
            ["J'envoie ce qu'il demande pour que ça s'arrête.", false, "Ça ne s'arrête presque jamais : la personne en redemande."],
            ["Je supprime mon compte et je n'en parle à personne.", false, "Tu restes seul avec la menace. Tu as le droit d'être aidé."],
            ["Je n'envoie rien, je ne paie pas, je garde les preuves, je bloque et je signale, j'appelle le 3018 et j'en parle à un adulte.", true, "Oui. Et ce n'est pas ta faute : le coupable est celui qui menace."]
          ], "C'est un chantage, puni par la loi. Le 3018 aide gratuitement et anonymement, 7 jours sur 7."),
          situation("Des signaux d'alerte", "Une personne plus âgée rencontrée en ligne te couvre de compliments et de cadeaux. Elle demande que votre relation reste secrète et te propose de « gagner de l'argent facilement ».", "Que fais-tu ?", [
            ["Je garde le secret, elle est gentille avec moi.", false, "Le secret demandé par un adulte est un signal d'alerte."],
            ["J'accepte de la rencontrer seul pour voir.", false, "C'est dangereux : tu ne sais pas qui elle est vraiment."],
            ["J'en parle à un adulte de confiance.", true, "Oui. Le secret, les cadeaux, l'isolement et les promesses d'argent sont des signaux d'alerte."]
          ], "Des réseaux d'exploitation utilisent ces méthodes en ligne. Un adulte de confiance, le 3018 ou le 119 peuvent t'aider.")
        ]
      }
    }],
    retenir: [
      "Intime, privé, public : je choisis ce que je partage, et je demande l'accord des autres avant de publier une image d'eux.",
      "Diffuser une image intime sans accord est un délit, même si elle a été envoyée volontairement.",
      "La victime n'est jamais responsable.",
      "Témoin, je ne partage pas, je soutiens et je préviens un adulte.",
      "Le 3018 aide gratuitement, et peut faire supprimer des contenus."
    ],
    ressource: {
      titre: "Mon intimité en ligne",
      intro: "Une fiche pour te protéger et protéger les autres sur les réseaux.",
      blocs: [
        { type: "tableau", titre: "Intime, privé, public", colonnes: ["", "Qui peut le savoir ?", "Exemples"], lignes: [
          ["Intime", "Moi seul, ou une personne de très grande confiance", "Mes sentiments, ma santé, mon corps"],
          ["Privé", "Ma famille, mes proches", "Mon adresse, mon numéro, une photo de groupe"],
          ["Public", "Tout le monde", "Le résultat d'un match, un pseudo"]
        ] },
        { type: "tableau", titre: "Se montrer, s'exposer, s'exhiber", colonnes: ["", "Ce que c'est"], lignes: [
          ["Se montrer", "Partager un moment de sa journée avec ses amis"],
          ["S'exposer", "Rendre publics sa vie personnelle, sa localisation, ses états d'âme"],
          ["S'exhiber", "Montrer à un large public ce qui relève de l'intime"]
        ] },
        { type: "liste", titre: "Ce que dit la loi", items: ["Diffuser une image intime sans accord est un délit, même si elle a été envoyée volontairement", "Injures, menaces et harcèlement sont punis, même dans un groupe privé", "Montrer des images pornographiques à un mineur est interdit", "Faire du chantage avec une image est puni"] },
        { type: "etapes", titre: "Victime ou témoin : que faire ?", items: ["Je ne partage pas, je ne réponds pas aux menaces", "Je garde les preuves (sans enregistrer une image intime)", "Je bloque et je signale sur la plateforme", "J'en parle à un adulte, j'appelle le 3018"] },
        { type: "liste", titre: "Signaux d'alerte en ligne", items: ["Une personne demande le secret", "Des cadeaux ou des compliments excessifs", "Elle t'éloigne de tes proches", "Elle promet de l'argent facile", "Elle insiste pour des photos ou une rencontre seul à seul"] },
        { type: "liste", titre: "Les aides", items: ["3018 : harcèlement et violences en ligne (gratuit, anonyme)", "Les adultes du lycée", "Pharos (internet-signalement.gouv.fr) pour signaler un contenu illégal", "17 ou 112 en cas de danger"] }
      ]
    },
    traces: [{
      titre: "Mon check-up de confidentialité", moteur: "carnet",
      outil: { id: "check-up-confidentialite", nom: "Mon check-up de confidentialité", description: "Vérifier les réglages de mes réseaux." },
      config: {
        cle: "check-up-confidentialite", titreDoc: "Mon check-up de confidentialité",
        intro: "Ouvre les réglages de tes réseaux et réponds pour toi. Personne ne voit tes réponses.",
        champs: [
          { id: "compte", label: "Mon compte est-il public ou privé ?" },
          { id: "stories", label: "Qui voit mes stories ?" },
          { id: "localisation", label: "Ma localisation est-elle désactivée ?" },
          { id: "messages", label: "Qui peut m'envoyer des messages ?" },
          { id: "changer", label: "Ce que je décide de changer", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Quelle différence entre se montrer et s'exposer ?", modele: "Se montrer, c'est partager un moment avec ses amis. S'exposer, c'est rendre publics sa vie personnelle, sa localisation ou ses états d'âme." },
      { type: "vf", enonce: "Une personne dont la photo intime circule est un peu responsable.", bonne: false, explication: "La victime n'est jamais responsable : le responsable est celui qui diffuse." },
      { type: "ouverte", enonce: "Tu reçois la photo intime d'un camarade dans un groupe. Que fais-tu ?", modele: "Je ne la partage pas, je ne la commente pas, je ne l'enregistre pas. Je note qui l'a postée, je soutiens mon camarade et je préviens un adulte ou le 3018." }
    ],
    plusLoin: [
      { titre: "Partage non consenti de contenus intimes : que dit la loi et que faire ?", source: "e-Enfance / 3018", url: "https://e-enfance.org/wp-content/uploads/2026/07/Copie-de-V2-Fiche-Partage-de-contenu-intime-Courte.pdf", description: "La loi, les démarches, et l'aide du 3018." },
      { titre: "Quand le groupe pense à ta place !", source: FSJ, url: "https://www.filsantejeunes.com/quand-le-groupe-pense-a-ta-place-6817", description: "Ne pas rester témoin passif." }
    ],
    passerelles: ["cps-2nde-5"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-15 min", "Accroche", "Distingue se montrer, s'exposer et s'exhiber, à partir d'exemples de publications.", "Fait émerger la notion de public visé et de contrôle de son image."],
        ["Temps 1 · 15-35 min", "Activité", "Classe des informations et des images : intime, privé ou public.", "Rappelle qu'on demande l'accord des personnes avant de publier une photo d'elles."],
        ["Temps 1 · 35-55 min", "Activité", "Fait son check-up de confidentialité sur ses propres réseaux.", "Montre où se trouvent les réglages. Ne demande jamais à voir les réseaux d'un élève."],
        ["Temps 2 · 0-25 min", "Activité", "Débat mouvant sur cinq affirmations.", "Apporte le cadre légal après chaque débat."],
        ["Temps 2 · 25-45 min", "Activité", "Joue trois situations « Que faire ? ».", "Insiste : la victime n'est jamais responsable ; on peut toujours demander de l'aide."],
        ["Temps 2 · 45-55 min", "Trace", "Garde la fiche et répond à « Je vérifie ».", "Présente le 3018 et les adultes ressources."]
      ],
      vigilance: "On ne demande jamais aux élèves de montrer leurs messages ou leurs réseaux. Si un élève révèle une diffusion d'image ou un chantage : le croire, ne pas lui demander de montrer l'image, informer le chef d'établissement le jour même et orienter vers le 3018."
    }
  });
})();
