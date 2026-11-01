/*
 * PILIER ORIENTATION · SECONDE (« Moi »)
 * Contenu validé (document « Cap'Autonomie – Orientation Seconde »).
 * Trois séances de 55 minutes : Ce qui me ressemble, Où mène ma filière ?, Libre de choisir ?
 * Au lycée : CIEL se prépare après une 2nde TNE (Métiers des transitions numérique et énergétique) ;
 * la seule Première ouverte ensuite est CIEL. Le bac pro Métiers de la sécurité se prépare en 3 ans.
 * Ressources vérifiées le 1er novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var DUREE = "55 min";

  // Un parcours fictif en deux étapes : l'élève trouve la condition, puis le fait suivant.
  function parcours(titre, e1, e2, bilan) {
    function noeud(e, vers) {
      return { contexte: e[0], question: e[1], choix: e[2].map(function (c) {
        return c[1] ? { texte: c[0], vers: vers, ok: true, retour: c[2] } : { texte: c[0], ok: false, retour: c[2] };
      }) };
    }
    return { titre: titre, depart: "a", noeuds: { a: noeud(e1, "b"), b: noeud(e2, "fin"), fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } } };
  }

  // ===================================================================
  // SÉANCE 1 · Ce qui me ressemble
  // ===================================================================
  S.push({
    id: "orientation-2nde-1", pilier: "orientation", niveau: "2nde", num: 1, duree: DUREE,
    titre: "Ce qui me ressemble",
    objectifCourt: "Mes goûts, mes qualités, ce qui compte pour moi",
    objectif: "Repérer trois boussoles pour s'orienter (ce que j'aime faire, ce que je sais faire, ce qui compte pour moi au travail) et les écrire dans mon portrait d'orientation.",
    rappel: { seance: "cps-2nde-3", texte: "En CPS, tu as choisi tes qualités et écrit le CV de tes réussites. Aujourd'hui, on s'en sert pour une question concrète : quel travail pourrait te ressembler ?" },
    aqcms: {
      pourquoi: "Beaucoup d'élèves de lycée professionnel n'ont pas vraiment choisi leur filière, ou l'ont choisie vite. Se connaître, c'est reprendre la main sur la suite.",
      apport: "Trois boussoles simples, que je réutiliserai toute l'année et en Première.",
      ou: "En stage, au conseil de classe, devant un employeur qui me dit : « Parlez-moi de vous. »",
      lie: "Mes qualités et le CV de mes réussites (CPS Seconde, séance 3), mon empreinte numérique (Cyber Seconde, séance 2)."
    },
    accroche: "Léo, 15 ans, est en Seconde (il est inventé). Son oncle lui a dit : « Toi, avec ta carrure, fais de la sécurité. » Sa mère : « Fais de l'informatique, ça paie. » Personne ne lui a demandé ce qu'il aimait. Qui a le droit de décider de ce qui te ressemble ?",
    activites: [{
      titre: "Le tri des verbes", moteur: "tas",
      consigne: "Pour chaque verbe : est-ce que tu aimes faire ça ? Il n'y a pas de bonne réponse. À la fin, garde tes cinq verbes préférés.",
      config: {
        cle: "verbes-orientation", tas: ["J'adore", "Ça me va", "Pas pour moi"], garder: 5, mot: "verbes préférés", resume: "Mes verbes",
        cartes: [
          { nom: "Réparer", ex: "Trouver pourquoi ça ne marche plus" }, { nom: "Câbler", ex: "Relier, brancher, tirer des fils" },
          { nom: "Coder", ex: "Écrire des instructions pour une machine" }, { nom: "Observer", ex: "Remarquer ce qui cloche" },
          { nom: "Surveiller", ex: "Garder un œil sur un lieu" }, { nom: "Protéger", ex: "Mettre des personnes ou des biens à l'abri" },
          { nom: "Secourir", ex: "Agir quand quelqu'un est en danger" }, { nom: "Aider", ex: "Rendre service, dépanner quelqu'un" },
          { nom: "Expliquer", ex: "Faire comprendre à quelqu'un" }, { nom: "Organiser", ex: "Prévoir, ranger, planifier" },
          { nom: "Vérifier", ex: "Contrôler que tout est en ordre" }, { nom: "Ranger", ex: "Mettre chaque chose à sa place" },
          { nom: "Convaincre", ex: "Faire changer quelqu'un d'avis" }, { nom: "Négocier", ex: "Trouver un accord" },
          { nom: "Créer", ex: "Inventer quelque chose de nouveau" }, { nom: "Dessiner", ex: "Faire un plan, un schéma" },
          { nom: "Bouger", ex: "Ne pas rester assis" }, { nom: "Conduire", ex: "Un véhicule, un engin" },
          { nom: "Calculer", ex: "Mesurer, compter, estimer" }, { nom: "Chercher", ex: "Enquêter, trouver une information" },
          { nom: "Écouter", ex: "Laisser l'autre parler, comprendre" }, { nom: "Diriger", ex: "Prendre la tête d'un groupe" },
          { nom: "Transmettre", ex: "Apprendre quelque chose à quelqu'un" }, { nom: "Anticiper", ex: "Prévoir ce qui pourrait arriver" }
        ]
      }
    }, {
      titre: "Mes qualités au travail", moteur: "carnet",
      consigne: "On ne refait pas la liste de tes qualités : reprends celles que tu as déjà choisies. Pour deux d'entre elles, imagine une situation de travail où elles servent.",
      config: {
        cle: "qualites-travail", titreDoc: "Mes qualités au travail",
        afficher: {
          titre: "Les qualités que tu as déjà notées",
          sources: ["mes-qualites", "cv-reussites"],
          vide: "Tu n'as pas encore fait la séance CPS « Renforcer l'estime de soi ». Tu pourras la faire plus tard, ou choisir tes qualités ici maintenant.",
          faireIci: "mes-qualites"
        },
        intro: "Exemples inventés : « patient » → expliquer une panne à un client âgé ; « calme » → rester posé face à un client énervé à l'entrée d'un magasin ; « organisé » → préparer le matériel avant une intervention.",
        champs: [
          { id: "q1", label: "Ma qualité n° 1, et une situation de travail où elle sert", multi: true },
          { id: "q2", label: "Ma qualité n° 2, et une situation de travail où elle sert", multi: true }
        ]
      }
    }, {
      titre: "Ce qui compte pour moi au travail", moteur: "jauges",
      consigne: "Pour chaque ligne, place le curseur vers le mot qui te ressemble le plus. Il n'y a pas de bonne réponse. Tes positions restent sur ton appareil.",
      config: {
        id: "valeurs-travail", cle: "valeurs-travail", bornes: ["◀ Le premier mot", "Le second mot ▶"],
        items: ["Dedans ↔ dehors", "Seul ↔ en équipe", "Horaires fixes ↔ horaires décalés (nuit, week-end)", "Routine ↔ imprévu", "Peu de public ↔ beaucoup de public", "Rester posé ↔ bouger"],
        note: "Les métiers n'ont pas tous le même rythme. Indique ta filière dans « Mon espace » pour voir où se situent souvent les métiers de ta filière."
      },
      parFiliere: {
        ciel: { config: { note: "En CIEL, beaucoup de métiers se font plutôt dedans, en équipe ou seul, avec de la résolution de pannes et des horaires plutôt fixes (des astreintes sont possibles). Compare avec tes curseurs : ce sont des points à vérifier en stage." } },
        securite: { config: { note: "En sécurité, beaucoup de métiers ont des horaires décalés, de l'imprévu, beaucoup de public, et on bouge. Compare avec tes curseurs : ce sont des points à vérifier en stage." } }
      }
    }],
    retenir: [
      "S'orienter, ce n'est pas trouver « le » métier en Seconde.",
      "Trois boussoles : ce que j'aime faire, ce que je sais faire, ce qui compte pour moi au travail.",
      "Une qualité se prouve par une situation, à l'école ou en dehors.",
      "Mes boussoles peuvent bouger pendant le lycée : c'est normal."
    ],
    ressource: {
      titre: "Mes trois boussoles",
      intro: "Trois questions pour savoir si un métier peut te ressembler.",
      blocs: [
        { type: "tableau", titre: "Les trois boussoles", colonnes: ["Boussole", "Je me demande"], lignes: [
          ["Mes goûts", "Qu'est-ce que j'aime faire, sans voir le temps passer ?"],
          ["Mes qualités", "Qu'est-ce que je sais déjà faire ? Qui l'a remarqué ?"],
          ["Mes valeurs", "Qu'est-ce qui compte pour moi au travail : horaires, équipe, public, dehors ?"]
        ] },
        { type: "tableau", titre: "Six familles de verbes, et des métiers de nos filières", colonnes: ["Famille", "Des verbes", "Des métiers"], lignes: [
          ["Faire", "réparer, câbler, conduire", "technicien de maintenance, installateur fibre"],
          ["Comprendre", "observer, chercher, calculer", "technicien réseaux, technicien en cybersécurité"],
          ["Aider", "aider, écouter, expliquer", "technicien support, secouriste"],
          ["Protéger", "surveiller, protéger, secourir", "agent de sécurité, sapeur-pompier"],
          ["Organiser", "organiser, vérifier, anticiper", "agent de sécurité incendie, chef d'équipe"],
          ["Créer", "créer, dessiner, coder", "électronicien, intégrateur domotique"]
        ] },
        { type: "texte", titre: "Mon portrait en trois phrases", texte: "J'aime surtout… Je sais déjà… Au travail, ce qui compte pour moi, c'est… Et je me pose encore cette question : …" }
      ]
    },
    traces: [{
      titre: "Mon portrait d'orientation", moteur: "carnet",
      outil: { id: "portrait-orientation", nom: "Mon portrait d'orientation", description: "Mes goûts, mes qualités, ce qui compte pour moi au travail." },
      config: {
        cle: "portrait-orientation", titreDoc: "Mon portrait d'orientation",
        afficher: { titre: "Pour t'aider, ce que tu viens de noter", sources: ["mes-qualites"] },
        intro: "Tu le compléteras au fil des années. Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "aime", label: "J'aime surtout…", aide: "reprends tes verbes préférés", multi: true },
          { id: "sais", label: "Je sais déjà…", aide: "reprends tes qualités", multi: true },
          { id: "compte", label: "Au travail, ce qui compte pour moi, c'est…", multi: true },
          { id: "question", label: "Une question que je me pose encore" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "En Seconde, il faut déjà savoir quel métier on fera.", bonne: false, explication: "La Seconde sert à se connaître et à découvrir. Le projet se construit sur les trois ans." },
      { type: "vf", enonce: "Une qualité peut se montrer en dehors de l'école.", bonne: true, explication: "Un job, un club, la famille, une association : ce sont aussi des preuves." },
      { type: "vf", enonce: "Si un métier me plaît mais a des horaires décalés et que je préfère les horaires fixes, je dois le rayer.", bonne: false, explication: "C'est un point à vérifier, par exemple en stage : certains s'y adaptent très bien." },
      { type: "vf", enonce: "Mes goûts peuvent changer pendant le lycée.", bonne: true, explication: "C'est normal : les stages et les rencontres font bouger les boussoles." }
    ],
    plusLoin: [
      { titre: "Quiz : Quels métiers selon mes goûts ?", source: "Onisep", url: "https://www.onisep.fr/metier/quiz-quels-metiers-selon-mes-gouts", description: "Des idées de métiers à partir de ce que tu aimes, sans créer de compte." },
      { titre: "Quiz : Quels univers professionnels selon ma personnalité ?", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep/quiz-secteurs", description: "24 questions, sans compte." },
      { titre: "La plateforme Avenir(s)", source: "Onisep", url: "https://www.onisep.fr/avenir-s", description: "Des activités et un portfolio d'orientation, avec ton compte ÉduConnect, à faire chez toi si tu le souhaites." }
    ],
    passerelles: ["cps-2nde-3", "cyber-2nde-2", "cps-tle-1"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Réagit à l'histoire de Léo : qui décide de ce qui me ressemble ?", "Recueille quelques réponses à main levée, sans débat long."],
        ["5-17 min", "Activité", "Trie 24 verbes et garde ses cinq préférés.", "Rappelle qu'il n'y a pas de bonne réponse."],
        ["17-29 min", "Activité", "Reprend ses qualités notées en CPS et les relie à des situations de travail.", "Si la séance CPS n'a pas été faite, l'élève choisit ses qualités sur place."],
        ["29-39 min", "Activité", "Se place sur six curseurs de conditions de travail.", "Montre que chaque métier a son rythme : ce sont des points à vérifier en stage."],
        ["39-47 min", "Trace", "Écrit son portrait d'orientation.", "Aide à formuler, sans lire les portraits à voix haute."],
        ["47-55 min", "Synthèse", "Retient les trois boussoles et répond à « Je vérifie ».", "Insiste : les boussoles peuvent bouger."]
      ],
      vigilance: "Certains élèves sont là par défaut d'affectation : ne pas leur demander de justifier leur filière devant la classe. Ne jamais classer ni comparer les profils ; dire « aujourd'hui, tu penches vers… », pas « tu es… ». Un rejet fort de la filière se signale discrètement au professeur principal ou au Psy-EN. Ressource pour l'adulte : le référentiel des compétences à s'orienter au lycée (Onisep, édition de novembre 2025, qui intègre le lycée professionnel)."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Où mène ma filière ?
  // ===================================================================
  S.push({
    id: "orientation-2nde-2", pilier: "orientation", niveau: "2nde", num: 2, duree: DUREE,
    titre: "Où mène ma filière ?",
    objectifCourt: "Les chemins après mon bac pro",
    objectif: "Connaître les chemins réels après mon bac pro (emploi, BTS, apprentissage, concours, certificat de spécialisation) et retenir trois métiers à explorer qui collent à mon portrait.",
    rappel: { seance: "orientation-2nde-1", texte: "Tu as écrit ton portrait : ce que tu aimes, ce que tu sais faire, ce qui compte pour toi. Aujourd'hui, on le pose à côté des métiers de ta filière." },
    aqcms: {
      pourquoi: "Beaucoup pensent qu'un bac pro « ferme » les études. C'est faux, mais chaque chemin a des conditions qu'il vaut mieux connaître dès la Seconde.",
      apport: "Une carte des chemins de ma filière, avec ce que chacun demande.",
      ou: "Au passage en Première (fin de 2nde TNE en CIEL), puis en Terminale.",
      lie: "Mon empreinte numérique (Cyber Seconde, séance 2) : en sécurité, le casier judiciaire est vérifié avant la carte professionnelle."
    },
    accroche: "Vrai ou faux ? « Avec un bac pro, on ne peut pas faire d'études. » « Le bac pro sécurité suffit pour devenir gendarme. » « En CIEL, on ne fait que de l'informatique. » « L'apprentissage après le bac, c'est pour ceux qui ont raté. » Les réponses arrivent pendant la séance.",
    activites: [{
      titre: "Où sont-ils cinq ans après ?", moteur: "scenario",
      consigne: "Des anciens élèves inventés. Pour chacun, trouve ce qu'il lui a fallu pour réussir son chemin.",
      config: {
        id: "orientation-2nde-2",
        cas: [
          parcours("Yanis, agent de sûreté (Sécurité)",
            ["Yanis veut travailler dès la fin du bac pro Métiers de la sécurité, comme agent de sûreté dans un aéroport.", "Qu'est-ce qui sera vérifié avant qu'il puisse exercer ?", [
              ["Son casier judiciaire, pour obtenir sa carte professionnelle", true, "Oui : pour travailler dans la sécurité privée, le casier judiciaire est vérifié avant la carte professionnelle."],
              ["Rien : le bac suffit", false, "Le bac ne suffit pas : il faut aussi la carte professionnelle, délivrée après vérification du casier."]
            ]],
            ["Cinq ans plus tard, Yanis aimerait encadrer une petite équipe.", "Est-ce encore possible ?", [
              ["Oui, avec de l'expérience et des formations en cours de carrière", true, "Oui : l'emploi direct n'empêche pas de progresser ni de reprendre une formation."],
              ["Non, il fallait faire un BTS tout de suite", false, "On peut se former plus tard : formation continue, apprentissage, validation des acquis."]
            ]],
            "L'emploi direct est un vrai choix. Dans la sécurité privée, le casier est vérifié."),
          parcours("Ilyes, technicien de maintenance (CIEL)",
            ["Ilyes a passé un bac pro CIEL. Il veut travailler tout de suite comme technicien de maintenance.", "Qu'est-ce qui l'aide le plus à être recruté ?", [
              ["Ses stages, et ce que ses tuteurs ont dit de lui", true, "Oui : les PFMP sont souvent le meilleur argument d'un bachelier pro."],
              ["Ses notes de Seconde", false, "Les recruteurs regardent surtout le diplôme, les stages et l'attitude."]
            ]],
            ["Ilyes découvre au travail qu'il adore la cybersécurité.", "Peut-il s'y former plus tard ?", [
              ["Oui, par exemple par un BTS en apprentissage ou une formation continue", true, "Oui : on peut reprendre une formation après quelques années de travail."],
              ["Non, c'est trop tard", false, "Il n'est jamais trop tard pour se former."]
            ]],
            "Le bac pro mène d'abord à un métier, et on peut toujours se former ensuite.")
        ]
      },
      parFiliere: {
        securite: { cas: [
          parcours("Manon, BTS Management opérationnel de la sécurité",
            ["Manon veut continuer en BTS Management opérationnel de la sécurité après son bac pro.", "Comment entre-t-on en BTS ?", [
              ["Sur dossier, en faisant des vœux sur Parcoursup en Terminale", true, "Oui. Un bon dossier et l'avis du conseil de classe comptent."],
              ["Automatiquement, avec le bac", false, "L'entrée en BTS n'est pas automatique : elle se fait sur dossier, via Parcoursup."]
            ]],
            ["Manon a obtenu son bac avec une mention bien.", "Qu'est-ce que la mention peut changer ?", [
              ["Sans proposition sur Parcoursup, elle donne un accès de droit à un BTS du même domaine où elle a candidaté", true, "Oui. Une raison de plus de travailler dès la Seconde."],
              ["Rien du tout", false, "La mention bien ou très bien ouvre un accès de droit au BTS du même domaine, si l'élève n'a reçu aucune proposition."]
            ]],
            "Le BTS est possible après le bac pro : dossier, Parcoursup, et une mention qui peut aider."),
          parcours("Samir, gardien de la paix",
            ["Samir veut devenir gardien de la paix.", "Le bac pro Métiers de la sécurité suffit-il ?", [
              ["Non : il faut réussir un concours", true, "Oui. Le bac pro prépare bien, mais la fonction publique recrute sur concours."],
              ["Oui, le bac pro donne directement accès à la police", false, "Le bac pro ne suffit pas pour la fonction publique : il faut un concours."]
            ]],
            ["Samir prépare le concours pendant un an.", "Qu'est-ce qui peut l'aider ?", [
              ["Une préparation au concours et une bonne condition physique", true, "Oui : les concours ont des épreuves écrites et sportives."],
              ["Attendre d'avoir 25 ans", false, "On peut s'y préparer dès la fin du bac."]
            ]],
            "Police, gendarmerie, pompiers : ces métiers se gagnent par concours."),
          parcours("Maëlle, sapeur-pompier",
            ["Au lycée, Maëlle est devenue sapeur-pompier volontaire.", "À partir de quel âge peut-on l'être ?", [
              ["Dès 16 ans, avec l'accord des parents", true, "Oui. C'est une façon de tester le métier pendant le lycée."],
              ["Seulement après 21 ans", false, "On peut s'engager comme volontaire dès 16 ans, avec l'accord des parents."]
            ]],
            ["Après son bac, Maëlle veut devenir sapeur-pompier professionnel.", "Comment ?", [
              ["En réussissant un concours", true, "Oui. Son expérience de volontaire est un vrai atout."],
              ["En le demandant à sa caserne", false, "Les sapeurs-pompiers professionnels sont recrutés sur concours."]
            ]],
            "S'engager pendant le lycée permet de tester un métier et de se faire connaître.")
        ] },
        ciel: { cas: [
          parcours("Aya, BTS CIEL",
            ["Aya veut continuer en BTS CIEL option Informatique et réseaux.", "Comment entre-t-on en BTS ?", [
              ["Sur dossier, en faisant des vœux sur Parcoursup en Terminale", true, "Oui. Un bon dossier et l'avis du conseil de classe comptent."],
              ["Automatiquement, avec le bac", false, "L'entrée en BTS n'est pas automatique : elle se fait sur dossier, via Parcoursup."]
            ]],
            ["Aya a obtenu son bac avec une mention bien.", "Qu'est-ce que la mention peut changer ?", [
              ["Sans proposition sur Parcoursup, elle donne un accès de droit à un BTS du même domaine où elle a candidaté", true, "Oui. Une raison de plus de travailler dès la Seconde."],
              ["Rien du tout", false, "La mention bien ou très bien ouvre un accès de droit au BTS du même domaine, si l'élève n'a reçu aucune proposition."]
            ]],
            "Le BTS est possible après le bac pro : dossier, Parcoursup, et une mention qui peut aider."),
          parcours("Tom, BTS en apprentissage",
            ["Tom veut un BTS, mais il veut aussi être payé.", "Quelle solution ?", [
              ["Un BTS en apprentissage : il alterne école et entreprise, avec un salaire", true, "Oui. Mais il faut trouver soi-même une entreprise."],
              ["Ce n'est pas possible", false, "L'apprentissage permet justement de préparer un diplôme en étant payé."]
            ]],
            ["Tom cherche une entreprise en mai de Terminale. Il n'en trouve pas.", "Qu'aurait-il pu faire ?", [
              ["Commencer à chercher plus tôt, dès l'hiver, et se faire aider par le CFA", true, "Oui. L'alternance se cherche tôt."],
              ["Rien, c'est une question de chance", false, "Ce n'est pas de la chance : une méthode et un calendrier font la différence."]
            ]],
            "L'apprentissage permet d'étudier en étant payé, à condition de chercher une entreprise tôt."),
          parcours("Jade, licence pro en cybersécurité",
            ["Après son BTS CIEL, Jade veut se spécialiser en cybersécurité.", "Est-ce possible après un bac pro puis un BTS ?", [
              ["Oui : une licence professionnelle, en un an, après le BTS", true, "Oui. Le bac pro n'est pas une impasse : on peut aller jusqu'à bac + 3, et plus."],
              ["Non : les études longues sont réservées au bac général", false, "Faux : bac pro, BTS, puis licence pro, c'est un chemin réel."]
            ]],
            ["Jade travaille aujourd'hui dans une entreprise de sécurité informatique.", "Qu'est-ce qui l'a aidée le plus ?", [
              ["Avancer étape par étape, en vérifiant à chaque fois que ça lui plaisait", true, "Oui. Un projet se construit par étapes."],
              ["Avoir tout décidé en Seconde", false, "Personne n'a besoin de tout décider en Seconde."]
            ]],
            "Bac pro, BTS, licence pro : on peut aller loin, une étape après l'autre.")
        ] }
      }
    }, {
      titre: "Vrai ou idée reçue ?", moteur: "quiz",
      config: { id: "orientation-2nde-2-idees", questions: [
        { type: "vf", enonce: "Avec un bac pro, on ne peut pas faire d'études.", bonne: false, explication: "Le BTS, l'apprentissage, les certificats de spécialisation et même la licence pro sont possibles." },
        { type: "vf", enonce: "Le bac pro Métiers de la sécurité suffit pour devenir gendarme.", bonne: false, explication: "Le bac pro ne suffit pas pour la fonction publique : il faut réussir un concours." },
        { type: "vf", enonce: "En CIEL, on ne fait que de l'informatique.", bonne: false, explication: "CIEL veut dire cybersécurité, informatique et réseaux, électronique." },
        { type: "vf", enonce: "L'apprentissage après le bac, c'est pour ceux qui ont raté.", bonne: false, explication: "C'est un choix : on prépare un diplôme en étant payé, mais il faut trouver une entreprise." }
      ] },
      parFiliere: {
        securite: { questions: [
          { type: "vf", enonce: "Le casier judiciaire est vérifié avant de pouvoir travailler dans la sécurité privée.", bonne: true, explication: "C'est une condition pour obtenir la carte professionnelle." },
          { type: "vf", enonce: "En Terminale, on choisit une dominante : « sécurité publique et sûreté » ou « sécurité incendie ».", bonne: true, explication: "C'est indiqué dans le programme du bac pro (Onisep)." }
        ] },
        ciel: { questions: [
          { type: "vf", enonce: "En 2nde TNE, je découvre plusieurs bacs d'une même famille de métiers.", bonne: true, explication: "CIEL, MELEC, MFER… partagent une Seconde commune. Au lycée, la Première ouverte ensuite est CIEL." },
          { type: "vf", enonce: "La cybersécurité fait partie de la formation CIEL.", bonne: true, explication: "C'est même la première lettre du sigle." }
        ] }
      }
    }, {
      titre: "Mes trois pistes", moteur: "tas",
      consigne: "Trie ces métiers, puis garde trois pistes à explorer. Regarde la ligne sous chaque métier : elle dit son rythme, compare avec tes curseurs de la séance 1.",
      config: {
        cle: "mes-pistes", tas: ["Ça me tente", "À vérifier", "Pas pour moi"], garder: 3, mot: "pistes à explorer", resume: "Mes pistes",
        cartes: [
          { nom: "Agent de sécurité", ex: "Accueil et surveillance d'un site, horaires souvent décalés, beaucoup de public" },
          { nom: "Technicien réseaux", ex: "Installer et dépanner des réseaux, plutôt dedans, en équipe" },
          { nom: "Sapeur-pompier", ex: "Secours et incendie, sur concours, gardes de jour et de nuit" },
          { nom: "Technicien support informatique", ex: "Aider les utilisateurs, au téléphone ou sur place" }
        ]
      },
      parFiliere: {
        securite: { cartes: [
          { nom: "Agent de sûreté aéroportuaire ou ferroviaire", ex: "Contrôles et filtrage, horaires décalés, beaucoup de public" },
          { nom: "Opérateur en télésurveillance", ex: "Devant des écrans, souvent de nuit, peu de public" },
          { nom: "Convoyeur de fonds", ex: "Transport de valeurs, en équipe, vigilance permanente" },
          { nom: "Maître-chien", ex: "Surveillance avec un chien, souvent la nuit, dehors" },
          { nom: "Agent de sécurité incendie", ex: "Rondes et prévention dans un bâtiment recevant du public" },
          { nom: "Policier municipal", ex: "Sur concours, sur la voie publique, au contact des habitants" },
          { nom: "Gardien de la paix", ex: "Sur concours, horaires variables, imprévu" },
          { nom: "Gendarme", ex: "Sur concours, logé en caserne, imprévu" }
        ] },
        ciel: { cartes: [
          { nom: "Technicien de maintenance électronique", ex: "Diagnostiquer et réparer des appareils, en atelier" },
          { nom: "Installateur fibre et télécoms", ex: "Sur les chantiers et chez les clients, on bouge beaucoup" },
          { nom: "Technicien en cybersécurité", ex: "Surveiller et protéger des réseaux, souvent après un BTS" },
          { nom: "Technicien vidéoprotection", ex: "Installer des caméras et des alarmes, chez les clients" },
          { nom: "Électronicien", ex: "Monter et tester des cartes électroniques, en atelier" },
          { nom: "Intégrateur domotique", ex: "Rendre une maison connectée, chez les clients" },
          { nom: "Électricien", ex: "Un autre bac de la 2nde TNE (MELEC), sur les chantiers" },
          { nom: "Frigoriste", ex: "Un autre bac de la 2nde TNE (MFER), chez les clients" }
        ] }
      }
    }],
    retenir: [
      "Mon bac pro mène d'abord à un métier, mais il ouvre aussi le BTS, l'apprentissage, des certificats de spécialisation et des concours.",
      "L'entrée en BTS se fait sur dossier, via Parcoursup : mes résultats comptent dès maintenant.",
      "Chaque chemin a ses conditions : dossier, mention, casier, concours, entreprise à trouver.",
      "Une piste se vérifie : je compare son rythme à mes curseurs, et je teste en stage."
    ],
    ressource: {
      titre: "Les chemins de ma filière",
      intro: "Où peut mener ton bac pro, et ce qu'il faut pour chaque chemin.",
      blocs: [
        { type: "tableau", titre: "Après le bac pro", colonnes: ["Chemin", "Ce qu'il faut"], lignes: [
          ["Emploi", "Le diplôme, de bons stages ; en sécurité privée, un casier compatible et la carte professionnelle"],
          ["BTS au lycée", "Un bon dossier, des vœux sur Parcoursup en Terminale ; une mention bien ou très bien peut aider"],
          ["BTS en apprentissage", "Trouver une entreprise, tôt ; on est payé"],
          ["Certificat de spécialisation", "Un an pour se spécialiser après le bac"],
          ["Concours", "Police, gendarmerie, pompiers : une préparation et des épreuves écrites et sportives"]
        ] },
        { type: "tableau", titre: "Quelques métiers", colonnes: ["Métier", "Filière", "Rythme"], lignes: [
          ["Agent de sécurité", "Sécurité", "Horaires décalés, public"],
          ["Agent de sécurité incendie", "Sécurité", "Rondes, prévention"],
          ["Gardien de la paix", "Sécurité", "Concours, imprévu"],
          ["Opérateur en télésurveillance", "Sécurité", "Écrans, nuit"],
          ["Technicien réseaux", "CIEL", "Dedans, en équipe"],
          ["Technicien support", "CIEL", "Contact avec les utilisateurs"],
          ["Installateur fibre", "CIEL", "Chantiers, on bouge"],
          ["Technicien en cybersécurité", "CIEL", "Souvent après un BTS"]
        ] },
        { type: "liste", titre: "Ce qu'il faut savoir dès maintenant", items: ["Sécurité : le casier judiciaire est vérifié avant la carte professionnelle ; la fonction publique recrute sur concours", "CIEL : la 2nde TNE est commune à plusieurs bacs ; au lycée, la Première ouverte ensuite est CIEL", "Pour tous : l'entrée en BTS se fait sur dossier, via Parcoursup"] }
      ]
    },
    traces: [{
      titre: "Mon point à vérifier", moteur: "carnet",
      config: {
        cle: "pistes-a-verifier", titreDoc: "Mes pistes et ce qu'il faut vérifier",
        afficher: { titre: "Tes pistes et ton portrait", sources: ["portrait-orientation"] },
        intro: "Exemple inventé : « Agent de sûreté : ce qui colle, j'aime bouger ; à vérifier, je préfère les horaires fixes. »",
        champs: [
          { id: "p1", label: "Piste 1 : ce qui colle à mon portrait, ce que je dois vérifier", multi: true },
          { id: "p2", label: "Piste 2 : ce qui colle, ce que je dois vérifier", multi: true },
          { id: "p3", label: "Piste 3 : ce qui colle, ce que je dois vérifier", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite deux poursuites d'études possibles après ton bac pro.", modele: "Un BTS (au lycée ou en apprentissage), un certificat de spécialisation, puis plus tard une licence professionnelle." },
      { type: "qcm", enonce: "Comment entre-t-on en BTS ?", options: ["Automatiquement avec le bac", "Sur dossier, avec des vœux sur Parcoursup", "Par tirage au sort"], bonne: 1, explication: "Le dossier compte : résultats, avis du conseil de classe, stages." },
      { type: "ouverte", enonce: "Cite un point de vigilance propre à ta filière.", modele: "Sécurité : le casier judiciaire est vérifié, et la fonction publique recrute sur concours. CIEL : en fin de 2nde TNE, on passe en Première CIEL, les autres bacs de la famille se préparent dans d'autres lycées." }
    ],
    plusLoin: [
      { titre: "Bac pro métiers de la sécurité", source: "Onisep", url: "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-metiers-de-la-securite", description: "Programme, dominantes, métiers, et ce que deviennent les élèves." },
      { titre: "Bac pro cybersécurité, informatique et réseaux, électronique (CIEL)", source: "Onisep", url: "https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-pro-cybersecurite-informatique-et-reseaux-electronique", description: "Programme, métiers et poursuites d'études." },
      { titre: "BTS CIEL option A informatique et réseaux", source: "Onisep", url: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-cybersecurite-informatique-et-reseaux-electronique-option-a-informatique-et-reseaux", description: "La suite la plus directe après le bac pro CIEL." },
      { titre: "BTS management opérationnel de la sécurité", source: "Onisep", url: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-management-operationnel-de-la-securite", description: "La suite la plus directe après le bac pro Métiers de la sécurité." },
      { titre: "Testez vos connaissances sur la voie pro", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep/testez-vos-connaissances-sur-la-voie-pro", description: "Un quiz pour vérifier ce que tu sais du lycée professionnel." }
    ],
    passerelles: ["cyber-2nde-2"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Vote vrai ou faux sur quatre affirmations.", "Ne corrige pas tout de suite : les réponses arrivent pendant la séance."],
        ["5-20 min", "Activité", "Suit les parcours d'anciens élèves inventés (ceux de sa filière s'il l'a choisie).", "Fait nommer la condition de chaque chemin."],
        ["20-28 min", "Activité", "Répond au vrai ou faux.", "Corrige les affirmations de l'accroche."],
        ["28-43 min", "Activité", "Trie les métiers et garde trois pistes.", "Invite à comparer le rythme de chaque métier aux curseurs de la séance 1."],
        ["43-48 min", "Trace", "Écrit pour chaque piste ce qui colle et ce qu'il faut vérifier.", "Rappelle que la PFMP sert à vérifier."],
        ["48-55 min", "Synthèse", "Retient les chemins et répond à « Je vérifie ».", ""]
      ],
      vigilance: "Ne pas présenter un chemin comme meilleur qu'un autre : l'emploi direct est un vrai choix. En sécurité, parler du casier sans jamais demander à un élève sa situation personnelle."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Libre de choisir ?
  // ===================================================================
  S.push({
    id: "orientation-2nde-3", pilier: "orientation", niveau: "2nde", num: 3, duree: DUREE,
    titre: "Libre de choisir ?",
    objectifCourt: "Ce qui pèse sur mes choix, mon choix de fin de Seconde",
    objectif: "Repérer ce qui influence mes choix (entourage, stéréotypes, réseaux sociaux, la petite voix « c'est pas pour moi »), puis faire mon choix de fin de Seconde en connaissance de cause.",
    rappel: { seance: "orientation-2nde-2", texte: "Tu as gardé trois pistes de métiers. Mais d'où viennent-elles vraiment ? De toi, de ta famille, de ce que tu as vu sur les réseaux ? Aujourd'hui, on fait le tri." },
    aqcms: {
      pourquoi: "En lycée professionnel, les choix se font tôt et sous influence. Les filières CIEL et Sécurité comptent très peu de filles, et beaucoup d'élèves se ferment des portes avant même d'essayer.",
      apport: "Savoir distinguer ce que je veux de ce qu'on attend de moi, et transformer « c'est pas pour moi » en une vraie question.",
      ou: "Pour mon choix de fin de Seconde, en stage, puis sur Parcoursup en Terminale.",
      lie: "L'estime de soi (CPS Seconde, séance 3), être soi parmi les autres (EVARS Première, séance 3), pourquoi je vois ça (Cyber Première, séance 1)."
    },
    accroche: "Lina est la seule fille de sa 2nde TNE. Elle adore câbler et dépanner, mais on lui répète que la cybersécurité, « c'est pas un truc de fille ». Bilal, en Sécurité, a découvert en secourisme qu'il aime prendre soin des gens ; il se demande si « un mec comme lui » peut devenir ambulancier ou infirmier. Tous deux sont inventés. Qu'est-ce qui les retient vraiment ?",
    activites: [{
      titre: "Qui pèse sur mes choix ?", moteur: "jauges",
      consigne: "Pour chaque ligne, à quel point ça influence tes choix d'orientation ? Rien n'est enregistré ni montré.",
      config: {
        id: "influences", bornes: ["Un peu", "Beaucoup"],
        items: ["Ma famille", "Mes amis", "Mes profs", "Ce que je vois sur les réseaux et dans les séries", "Ce qu'on dit des filles et des garçons", "Moi-même"],
        note: "Être influencé n'est pas un problème. Le problème, c'est de ne pas s'en rendre compte."
      }
    }, {
      titre: "Métier de fille, métier de garçon ?", moteur: "debat",
      consigne: "Place-toi avant d'en parler en classe, puis replace-toi après avoir écouté les arguments.",
      config: { affirmations: [
        { texte: "La sécurité, c'est un métier d'hommes.", repere: "La force compte beaucoup moins que le sang-froid, la communication et le respect des procédures. Des femmes sont agentes de sécurité, gendarmes, sapeuses-pompières." },
        { texte: "Les filles sont moins douées en informatique.", repere: "Aucune différence de capacité : les écarts viennent des choix, des modèles et des encouragements reçus." },
        { texte: "Un garçon qui veut un métier du soin, c'est bizarre.", repere: "Le soin recrute des hommes comme des femmes. Aucun métier n'est réservé à un sexe." },
        { texte: "Être la seule fille ou le seul garçon d'une classe, c'est forcément dur.", repere: "Ça peut l'être. C'est pour ça que les remarques sexistes sont interdites et qu'un adulte du lycée peut t'aider." }
      ] }
    }, {
      titre: "La petite voix", moteur: "reformuler",
      consigne: "Transforme chaque phrase qui ferme une porte en question qui ouvre une piste.",
      config: {
        textes: { etiquette: "Phrase", depart: "La petite voix dit", message: "Ma question", suivant: "Phrase suivante", fin: "Tu as transformé ces phrases en questions. La prochaine fois que la petite voix parle, pose-lui ta question." },
        items: [
          { reproche: "Je suis nul en maths, le BTS c'est pas pour moi.", exemple: "Quel niveau de maths demande ce BTS, et qui peut m'aider à progresser d'ici la Terminale ?" },
          { reproche: "Personne dans ma famille n'a fait d'études.", exemple: "Qui, au lycée ou parmi les anciens élèves, pourrait m'expliquer comment ça se passe ?" },
          { reproche: "Je suis une fille, je ne serai jamais prise en stage dans la sécurité.", exemple: "Quelles entreprises accueillent des stagiaires filles, et qui peut m'aider à les contacter ?" },
          { reproche: "J'ai raté mon premier entretien, je ne suis pas fait pour ça.", exemple: "Qu'est-ce que je pourrais préparer différemment la prochaine fois ?" }
        ],
        champs: [
          { id: "faudrait", label: "Qu'est-ce qu'il faudrait pour…", placeholder: "réussir ce BTS, trouver ce stage…" },
          { id: "aide", label: "Qui peut m'aider ?", placeholder: "un prof, le Psy-EN, un ancien élève…" }
        ],
        gabarit: "Qu'est-ce qu'il faudrait pour {faudrait} ? Qui peut m'aider : {aide} ?",
        alertes: [
          { motif: "jamais|pas pour moi|pas fait pour|nul|personne", conseil: "Ce mot ferme la porte. Remplace-le par ce que tu pourrais apprendre ou demander." }
        ]
      }
    }],
    retenir: [
      "Tout le monde est influencé : l'important, c'est de savoir par qui.",
      "Aucun métier n'est réservé aux filles ou aux garçons.",
      "Quand une petite voix dit « c'est pas pour moi », je la transforme en question : qu'est-ce qu'il faudrait, et qui peut m'aider ?",
      "Mon choix final doit rester le mien."
    ],
    ressource: {
      titre: "Mon choix, mes raisons",
      intro: "Une fiche pour faire un choix qui t'appartient.",
      blocs: [
        { type: "liste", titre: "Ce qui peut peser sur mes choix", items: ["Ma famille", "Mes amis", "Mes profs", "Les réseaux et les séries", "Ce qu'on dit des filles et des garçons", "Moi-même"] },
        { type: "tableau", titre: "De la phrase qui ferme à la question qui ouvre", colonnes: ["La petite voix dit…", "Je me demande plutôt…"], lignes: [
          ["Je suis nul en maths.", "Quel niveau faut-il, et qui peut m'aider ?"],
          ["Ce n'est pas pour les filles.", "Qui fait déjà ce métier, et comment a-t-elle commencé ?"],
          ["Personne ne m'aidera.", "Quels adultes du lycée peuvent m'accompagner ?"]
        ] },
        { type: "etapes", titre: "Faire mon choix", items: ["Je liste mes pistes", "Je repère ce qui m'influence", "Je choisis trois critères qui comptent pour moi", "Je demande l'avis d'un adulte", "Je décide"] },
        { type: "texte", titre: "Si on m'embête à cause de mon choix", texte: "Les remarques sexistes sont interdites. J'en parle à un adulte du lycée : professeur principal, CPE, Psy-EN (voir « Besoin d'aide »)." }
      ]
    },
    traces: [{
      titre: "Mon choix de fin de Seconde", moteur: "choisir",
      outil: { id: "choix-fin-seconde", nom: "Mon choix de fin de Seconde", description: "Ce que j'envisage pour la suite." },
      consigne: "Choisis la direction qui te ressemble aujourd'hui. Elle peut encore bouger.",
      config: {
        cle: "choix-fin-seconde", min: 1, max: 1, titre: "Ma direction", resume: "Ma direction",
        cartes: [
          { nom: "Je continue dans ma filière", ex: "La suite de mon bac pro" },
          { nom: "Une autre formation m'attire", ex: "J'en parle à mon professeur principal" },
          { nom: "J'ai un autre projet", ex: "J'en parle à un adulte du lycée" }
        ]
      },
      parFiliere: {
        ciel: { config: { cartes: [
          { nom: "Je continue en Première CIEL", ex: "Sécuriser, dépanner, câbler : la suite de ma 2nde TNE" },
          { nom: "Un autre bac de la famille m'attire", ex: "MELEC, MFER… dans un autre lycée : j'en parle au professeur principal" },
          { nom: "J'ai un autre projet", ex: "J'en parle à un adulte du lycée" }
        ] } },
        securite: { config: { cartes: [
          { nom: "La sécurité publique m'attire", ex: "Police, gendarmerie : sur concours ; je peux tester en stage" },
          { nom: "La sécurité civile m'attire", ex: "Pompiers, secours : sapeur-pompier volontaire dès 16 ans, avec l'accord des parents" },
          { nom: "La sécurité privée m'attire", ex: "Agent de sécurité, sûreté, télésurveillance : je teste en stage" },
          { nom: "J'ai un autre projet", ex: "J'en parle à un adulte du lycée" }
        ] } }
      }
    }, {
      titre: "Mes trois critères", moteur: "choisir",
      outil: { id: "criteres-choix", nom: "Mes critères pour choisir", description: "Les trois critères qui comptent pour moi quand je fais un choix d'orientation." },
      consigne: "Choisis les trois critères qui comptent vraiment pour toi dans ce choix.",
      config: {
        cle: "criteres-choix", min: 3, max: 3, titre: "Mes critères", resume: "Mes critères",
        cartes: [
          { nom: "Ce que j'aime faire", ex: "Mes verbes préférés" },
          { nom: "Mes résultats", ex: "Là où je réussis" },
          { nom: "Les métiers", ex: "Ce qu'on fait vraiment" },
          { nom: "Ce que j'ai vécu en stage", ex: "Ce que la PFMP m'a appris" },
          { nom: "La poursuite d'études", ex: "Ce qu'on peut faire après" },
          { nom: "L'avis d'un adulte", ex: "Un prof, un tuteur, le Psy-EN" },
          { nom: "Suivre un ami", ex: "Attention : ton ami ne fera pas ton métier à ta place. Vérifie que ce choix est bien le tien." }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Être influencé, c'est forcément mauvais.", bonne: false, explication: "Tout le monde est influencé. L'important est de s'en rendre compte." },
      { type: "vf", enonce: "Certains métiers sont interdits aux filles.", bonne: false, explication: "Aucun métier n'est réservé à un sexe." },
      { type: "vf", enonce: "Choisir une spécialité pour suivre un ami est un critère solide.", bonne: false, explication: "C'est un critère possible, mais pas une raison suffisante : ton ami ne fera pas ton métier à ta place." },
      { type: "vf", enonce: "Une phrase « c'est pas pour moi » peut devenir une question.", bonne: true, explication: "Qu'est-ce qu'il faudrait, et qui peut m'aider ?" }
    ],
    plusLoin: [
      { titre: "Testez vos connaissances sur l'égalité filles-garçons", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep/testez-vos-connaissances-sur-l-egalite-filles-garcons", description: "Un quiz sur les métiers et les stéréotypes." },
      { titre: "Tous les quiz de l'Onisep", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep", description: "Métiers, voie pro, études : des quiz sans compte." },
      { titre: "Filles et garçons sur le chemin de l'égalité (édition 2026)", source: "Ministère de l'Éducation nationale (DEPP)", url: "https://www.education.gouv.fr/depp/filles-et-garcons-sur-le-chemin-de-l-egalite-de-l-ecole-l-enseignement-superieur-edition-2026-469418", description: "Les chiffres de l'égalité à l'école, pour aller plus loin." }
    ],
    passerelles: ["cps-2nde-3", "evars-1re-3", "cyber-1re-1"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Réagit aux histoires de Lina et Bilal.", "Fait nommer ce qui les retient, sans débat long."],
        ["5-12 min", "Activité", "Se place sur six curseurs d'influence.", "Rien n'est montré ni enregistré."],
        ["12-27 min", "Activité", "Débat mouvant sur quatre affirmations.", "Recadre immédiatement toute remarque sexiste ; donne le repère après chaque affirmation."],
        ["27-37 min", "Activité", "Transforme quatre phrases d'autocensure en questions.", "Valorise les questions concrètes (qui, quoi, comment)."],
        ["37-50 min", "Trace", "Fait son choix de fin de Seconde et choisit trois critères.", "Rappelle que le choix peut encore bouger."],
        ["50-55 min", "Synthèse", "Retient l'essentiel et répond à « Je vérifie ».", ""]
      ],
      vigilance: "À placer au 2e trimestre, avant les vœux de fin de Seconde. Dans une classe très masculine, ne jamais faire parler la ou les filles « au nom des filles ». Recadrer immédiatement toute remarque sexiste. Ne pas commenter les choix des familles ; certains élèves n'ont pas la main sur leur orientation : leur proposer de voir le professeur principal ou le Psy-EN. En CIEL, un élève qui choisit un autre bac de la famille doit changer de lycée : l'orienter vers le PP et le Psy-EN, sans promettre de place."
    }
  });
})();
