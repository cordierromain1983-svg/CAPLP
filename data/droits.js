/*
 * PILIER DROITS « Travail : contrat, salaire, sécurité » · SECONDE, PREMIÈRE, TERMINALE
 * Trois séances de 55 minutes par niveau.
 * Seconde « Moi » : mes droits de stagiaire. Première « Moi et les autres » : le contrat de travail.
 * Terminale « Moi et le monde » : majeur, citoyen, salarié.
 * Repères : Code du travail (code.travail.gouv.fr), Service-Public.fr, Défenseur des droits, INRS.
 * Les chiffres qui changent viennent de data/actualites.js. Contenu à relire par l'enseignant : il n'a pas
 * fait l'objet d'un document de validation préalable.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var A = window.CAP_ACTU.texte, K = window.CAP_AIDE;
  var vf = K.vf, qcm = K.qcm, ouv = K.ouv, sit = K.sit, lien = K.lien;
  var D = "55 min";
  var CTN = lien("Code du travail numérique", "Ministère du Travail", "https://code.travail.gouv.fr", "Des réponses simples et officielles sur le droit du travail.");
  var SP = lien("Service-Public.fr", "Site officiel de l'administration française", "https://www.service-public.gouv.fr", "Les fiches officielles sur vos droits et vos démarches.");
  var DDD = lien("Défenseur des droits", "Autorité indépendante", "https://www.defenseurdesdroits.fr", "Aide gratuite en cas de discrimination ou d'atteinte aux droits. Téléphone : 39 28.");
  var VIG = "Les situations sont inventées. Si un élève décrit une situation réelle (accident, harcèlement, horaires abusifs en PFMP), on l'écoute à part et on prévient le professeur référent de la PFMP et le chef d'établissement. ";

  // =================================================================== SECONDE
  S.push({
    id: "droits-2nde-1", pilier: "droits", niveau: "2nde", num: 1, duree: D,
    titre: "Stagiaire : mes droits, mes devoirs",
    objectifCourt: "La convention de PFMP, les horaires, le tuteur",
    objectif: "Connaître son statut en PFMP, ce que dit la convention de stage, les horaires autorisés avant 18 ans et ce qu'on attend d'un stagiaire.",
    aqcms: {
      pourquoi: "En PFMP, tu entres dans une entreprise sans être salarié : tu as des droits précis, et des devoirs.",
      apport: "Savoir ce qu'on peut te demander, ce qu'on ne peut pas, et à qui parler en cas de problème.",
      ou: "Dès ta première période de formation en milieu professionnel.",
      lie: "L'allocation de PFMP (EDUCFI Seconde, séance 2) ; les règles et les lois (CPS Terminale, séance 4)."
    },
    accroche: "Premier jour de stage. Le patron te dit : « Ici, on finit quand le travail est fini, parfois 20 heures. » Tu as 15 ans. Il a le droit ?",
    activites: [
      K.classer("Ma convention de stage", "La convention est signée par le lycée, l'entreprise, toi et ton représentant légal. Vrai statut ou idée reçue ?", ["Vrai", "Faux"], [
        ["En PFMP, je reste élève du lycée, sous statut scolaire.", "Vrai"],
        ["Je signe un contrat de travail avec l'entreprise.", "Faux", "Tu signes une convention de stage, pas un contrat de travail."],
        ["L'entreprise me verse un salaire.", "Faux", "C'est l'État qui verse l'allocation de PFMP : " + A("pfmp2nde") + "."],
        ["Un tuteur est désigné pour m'accompagner dans l'entreprise.", "Vrai"],
        ["Un professeur référent suit mon stage et peut venir me voir.", "Vrai"],
        ["Je dois respecter le règlement intérieur de l'entreprise.", "Vrai"],
        ["L'entreprise peut me faire remplacer un salarié absent, seul à son poste.", "Faux", "Un stagiaire apprend : il ne remplace pas un salarié."]
      ], "En PFMP, je suis un élève en formation dans une entreprise : la convention me protège et m'engage."),
      K.quiz("Mes horaires avant 18 ans", "droits-2nde-1-horaires", [
        qcm("Avant 18 ans, on ne peut pas travailler plus de…", ["6 heures par jour", "8 heures par jour", "10 heures par jour"], 1, "8 heures par jour et 35 heures par semaine au maximum."),
        vf("Après 4 h 30 de travail, j'ai droit à une pause d'au moins 30 minutes.", true, "C'est obligatoire avant 18 ans."),
        vf("Entre 16 et 18 ans, on peut me faire travailler jusqu'à minuit.", false, "Le travail de nuit est interdit entre 22 heures et 6 heures (et entre 20 heures et 6 heures avant 16 ans), sauf rares dérogations."),
        vf("J'ai droit à deux jours de repos de suite chaque semaine.", true, "Et à 12 heures de repos au moins entre deux journées.")
      ], "Ces règles valent pour les jeunes de moins de 18 ans, stagiaires comme salariés."),
      K.scenario("Que fais-tu ?", "droits-2nde-1", [
        sit("Les horaires à rallonge", "Ton tuteur te demande de rester jusqu'à 20 heures tous les soirs, soit 10 heures par jour. Tu as 16 ans.", "Que fais-tu ?", [
          ["J'accepte sans rien dire : je ne veux pas d'histoires.", false, "Ces horaires sont interdits avant 18 ans, et tu risques de t'épuiser."],
          ["J'en parle poliment à mon tuteur, et j'appelle mon professeur référent.", true, "Oui : le lycée est là pour faire respecter la convention."]
        ], "En cas de problème en PFMP : mon tuteur d'abord, puis mon professeur référent."),
        sit("Le retard", "Ton bus est en panne : tu arriveras avec 40 minutes de retard.", "Que fais-tu ?", [
          ["J'arrive en retard et j'explique sur place.", false, "Prévenir avant montre que tu es fiable."],
          ["J'appelle l'entreprise tout de suite, puis je préviens le lycée si besoin.", true, "Oui : c'est un devoir du stagiaire, comme d'un salarié."]
        ], "Mes devoirs : ponctualité, prévenir en cas d'absence, respecter les consignes et la confidentialité.")
      ])
    ],
    retenir: [
      "En PFMP, je reste élève : je signe une convention, pas un contrat de travail.",
      "Avant 18 ans : 8 heures par jour et 35 heures par semaine au maximum, pas de travail de nuit.",
      "Mes devoirs : ponctualité, consignes, discrétion.",
      "En cas de problème : mon tuteur, puis mon professeur référent."
    ],
    ressource: { titre: "Mes droits et mes devoirs en PFMP", intro: "Une fiche à glisser dans ton carnet de stage.", blocs: [
      { type: "tableau", titre: "Mes horaires avant 18 ans", colonnes: ["Règle", "Repère"], lignes: [
        ["Durée par jour", "8 heures au plus"], ["Durée par semaine", "35 heures au plus"], ["Pause", "30 minutes après 4 h 30"],
        ["Repos entre deux journées", "12 heures au moins"], ["Repos par semaine", "2 jours de suite"], ["Travail de nuit", "Interdit de 22 h à 6 h (20 h à 6 h avant 16 ans)"]
      ] },
      { type: "liste", titre: "Mes devoirs", items: ["Arriver à l'heure et prévenir en cas de retard ou d'absence", "Respecter les consignes et le règlement intérieur", "Porter la tenue et les protections demandées", "Ne pas divulguer ce que je vois dans l'entreprise"] },
      { type: "etapes", titre: "En cas de problème", items: ["J'en parle à mon tuteur", "J'appelle mon professeur référent ou le lycée", "Je note ce qui s'est passé : dates, faits"] }
    ] },
    traces: [K.carnet("Mes contacts de PFMP", "contacts-pfmp", "Mon tuteur, mon professeur référent, le numéro du lycée, mes horaires.", [
      ["tuteur", "Mon tuteur dans l'entreprise (nom, téléphone)"], ["prof", "Mon professeur référent"], ["lycee", "Le numéro du lycée"], ["horaires", "Mes horaires prévus par la convention", true]
    ])],
    verifie: [
      vf("En PFMP, je suis salarié de l'entreprise.", false, "Je reste élève, sous statut scolaire."),
      qcm("Avant 18 ans, la durée maximale de travail par semaine est de…", ["35 heures", "39 heures", "48 heures"], 0, "Et 8 heures par jour."),
      ouv("Ton tuteur te demande quelque chose qui te semble anormal. Que fais-tu ?", "J'en parle d'abord avec lui, puis j'appelle mon professeur référent ou le lycée.")
    ],
    plusLoin: [lien("Durée du travail d'un jeune de moins de 18 ans", "Service-Public.fr", "https://www.service-public.gouv.fr/particuliers/vosdroits/F2216", "Durée, pauses, repos, travail de nuit."), CTN],
    passerelles: ["educfi-2nde-2", "orientation-2nde-2"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Le patron et les 20 heures : il a le droit ?", "Recueille les avis sans trancher."],
      ["5-20 min", "Activité", "Trie les affirmations sur la convention.", "Montre une convention vierge du lycée."],
      ["20-32 min", "Activité", "Répond au quiz sur les horaires.", "Rappelle que ces règles valent aussi pour un job d'été."],
      ["32-47 min", "Activité", "Joue les deux situations.", "Présente le rôle du professeur référent."],
      ["47-55 min", "Trace", "Remplit « Mes contacts de PFMP », répond à « Je vérifie ».", "Conseille de faire la séance avant la première PFMP."]
    ], vigilance: VIG }
  });

  S.push({
    id: "droits-2nde-2", pilier: "droits", niveau: "2nde", num: 2, duree: D,
    titre: "Ma sécurité au travail",
    objectifCourt: "Risques, protections, droit de retrait, accident",
    objectif: "Repérer les risques d'un poste, connaître les protections obligatoires, le droit d'alerte et de retrait, et savoir quoi faire en cas d'accident.",
    rappel: { seance: "droits-2nde-1", texte: "La dernière fois, tu as vu tes horaires et tes devoirs de stagiaire. Il reste le plus important : rentrer chez toi entier chaque soir." },
    aqcms: {
      pourquoi: "Les jeunes et les nouveaux arrivants ont plus d'accidents du travail que les autres : ils connaissent moins les risques.",
      apport: "Savoir dire stop, me protéger, et réagir si un accident arrive.",
      ou: "En atelier au lycée, en PFMP, dans tous mes futurs emplois.",
      lie: "Stagiaire : mes droits, mes devoirs (séance 1) ; gérer mon stress (CPS Seconde, séance 4)."
    },
    accroche: "« Monte sur l'échelle, ça prendra deux minutes, pas besoin de harnais. » Tu montes ?",
    activites: [
      K.classer("Quel risque ?", "Pour chaque situation, de quel risque s'agit-il ?", ["Chute", "Électrique", "Machine ou outil", "Port de charges", "Agression ou tension"], [
        ["Travailler sur un escabeau instable", "Chute"],
        ["Un sol mouillé non signalé", "Chute"],
        ["Ouvrir une armoire électrique sous tension", "Électrique"],
        ["Un câble dénudé sur un chantier", "Électrique"],
        ["Utiliser une meuleuse sans lunettes", "Machine ou outil"],
        ["Porter seul un carton de 30 kg", "Port de charges"],
        ["Un client très en colère à l'accueil", "Agression ou tension"]
      ], "Avant de commencer une tâche, je me demande : qu'est-ce qui peut mal tourner ici ?"),
      K.quiz("Mes protections, mes droits", "droits-2nde-2-droits", [
        vf("Les équipements de protection (casque, gants, chaussures) sont fournis gratuitement par l'entreprise.", true, "C'est une obligation de l'employeur. À moi de les porter."),
        vf("Avant 18 ans, certains travaux dangereux me sont interdits, sauf dérogation pour ma formation.", true, "Machines dangereuses, travail en hauteur, produits chimiques… La dérogation est encadrée et déclarée."),
        vf("Si je pense qu'il y a un danger grave et imminent, je peux m'arrêter et alerter.", true, "C'est le droit d'alerte et de retrait. On ne peut pas me sanctionner pour cela."),
        vf("Si je me blesse légèrement en PFMP, inutile d'en parler.", false, "Je préviens tout de suite mon tuteur et le lycée : c'est le lycée qui déclare l'accident.")
      ]),
      K.scenario("Que fais-tu ?", "droits-2nde-2", [
        sit("L'échelle", "On te demande de monter à 4 mètres sur une échelle, sans protection, « juste deux minutes ».", "Que fais-tu ?", [
          ["Je monte : je ne veux pas passer pour un peureux.", false, "Une chute de 4 mètres peut te handicaper à vie. Deux minutes suffisent."],
          ["Je refuse calmement, j'explique pourquoi, et j'en parle à mon tuteur.", true, "Oui : dire non à un danger, c'est ton droit et c'est professionnel."]
        ], "Face à un danger grave : je m'arrête, j'alerte, je ne reprends pas tant que le danger est là."),
        sit("La coupure", "Tu te coupes à la main avec un cutter. Ça saigne, mais « ce n'est rien ».", "Que fais-tu ?", [
          ["Je mets un pansement et je ne dis rien.", false, "Sans déclaration, tu ne seras pas couvert si la blessure s'aggrave."],
          ["Je préviens tout de suite mon tuteur, je me fais soigner, et j'informe le lycée.", true, "Oui. Le lycée déclare l'accident : tes soins sont pris en charge."]
        ], "Tout accident se signale le jour même, même léger.")
      ], null, { parFiliere: {
        ciel: { cas: [sit("CIEL · L'armoire sous tension", "Un technicien pressé te dit d'intervenir dans une baie électrique sans couper le courant. Tu n'as pas d'habilitation électrique.", "Que fais-tu ?", [
          ["J'y vais, il sait ce qu'il fait.", false, "Sans habilitation et sans consignation, le risque d'électrisation est réel."],
          ["Je refuse : je n'interviens pas sous tension sans habilitation ni consignation.", true, "Oui. L'habilitation électrique est obligatoire pour ce type d'intervention."]
        ], "Pas d'intervention électrique sans habilitation, et jamais sous tension sans consignation.")] },
        securite: { cas: [sit("Sécurité · L'individu agressif", "Pendant une ronde, tu tombes seul sur un homme agressif qui refuse de quitter les lieux.", "Que fais-tu ?", [
          ["J'essaie de le maîtriser moi-même.", false, "Un stagiaire n'intervient jamais seul physiquement : c'est dangereux et interdit."],
          ["Je garde mes distances, j'alerte mon tuteur ou le poste de sécurité, et j'observe.", true, "Oui : alerter et se protéger d'abord."]
        ], "Je n'interviens jamais seul : je me protège, j'alerte, j'observe.")] }
      } })
    ],
    retenir: [
      "Avant chaque tâche : qu'est-ce qui peut mal tourner ?",
      "Les protections sont fournies par l'entreprise ; je les porte.",
      "Danger grave et imminent : je m'arrête et j'alerte.",
      "Tout accident se signale le jour même, même léger."
    ],
    ressource: { titre: "Ma sécurité au travail", intro: "Les bons réflexes, à relire avant chaque PFMP.", blocs: [
      { type: "etapes", titre: "Avant de commencer une tâche", items: ["Je repère les risques", "Je vérifie mes protections", "Je demande si je ne sais pas faire", "Je refuse si le danger est grave"] },
      { type: "etapes", titre: "En cas d'accident en PFMP", items: ["Je me mets en sécurité, j'alerte (15, 18 ou 112 si c'est grave)", "Je préviens mon tuteur", "Je préviens le lycée le jour même", "Je garde les papiers médicaux"] },
      { type: "texte", titre: "Le droit d'alerte et de retrait", texte: "Si j'ai un motif raisonnable de penser qu'une situation présente un danger grave et imminent pour ma vie ou ma santé, je peux m'arrêter et je dois alerter tout de suite. Aucune sanction ne peut être prise contre moi." }
    ] },
    traces: [K.carnet("Les risques de mon métier", "risques-metier", "Trois risques de mon métier et la protection pour chacun.", [
      ["r1", "Un risque de mon métier, et comment je m'en protège"], ["r2", "Un deuxième"], ["r3", "Un troisième"]
    ], true)],
    verifie: [
      vf("Je dois acheter moi-même mes chaussures de sécurité pour le stage.", false, "Les protections sont fournies par l'entreprise (ou par le lycée pour l'atelier)."),
      qcm("Tu te blesses en PFMP. Qui déclare l'accident ?", ["Moi", "Le lycée", "Personne si c'est léger"], 1, "Tu préviens ton tuteur et le lycée tout de suite : le lycée fait la déclaration."),
      ouv("Qu'est-ce que le droit de retrait ?", "Le droit de m'arrêter et d'alerter face à un danger grave et imminent, sans être sanctionné.")
    ],
    plusLoin: [lien("INRS", "Institut national de recherche et de sécurité", "https://www.inrs.fr", "Les risques de chaque métier et comment s'en protéger."), CTN],
    passerelles: ["cps-2nde-4", "cyber-tle-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "L'échelle sans harnais : tu montes ?", "Fait émerger la pression du « ça ira »."],
      ["5-18 min", "Activité", "Classe les situations par risque.", "Relie aux risques de l'atelier du lycée."],
      ["18-30 min", "Activité", "Répond au vrai ou faux sur les protections et les droits.", "Explique le droit d'alerte et de retrait."],
      ["30-47 min", "Activité", "Joue les situations (et celle de sa filière).", "Insiste : tout accident se signale."],
      ["47-55 min", "Trace", "Écrit les risques de son métier, répond à « Je vérifie ».", "Peut s'appuyer sur le professeur d'atelier ou de PSE."]
    ], vigilance: VIG + "Un élève peut avoir vécu ou vu un accident : on accueille sans faire raconter les détails." }
  });

  S.push({
    id: "droits-2nde-3", pilier: "droits", niveau: "2nde", num: 3, duree: D,
    titre: "Respecté au travail",
    objectifCourt: "Discrimination, harcèlement : reconnaître et agir",
    objectif: "Reconnaître une discrimination et un harcèlement au travail, savoir que la loi les interdit et à qui s'adresser.",
    rappel: { seance: "droits-2nde-2", texte: "Tu sais protéger ton corps au travail. Aujourd'hui, on parle de ton respect : on n'a pas le droit de t'écarter ou de t'humilier." },
    aqcms: {
      pourquoi: "Chercher un stage ou travailler, c'est parfois se heurter à des refus injustes ou à des comportements humiliants.",
      apport: "Mettre un mot sur ce qui se passe, savoir que ce n'est pas normal, et connaître les recours.",
      ou: "En recherche de stage, en PFMP, en emploi.",
      lie: "Être soi : stéréotypes et discriminations (EVARS Première, séance 3) ; s'affirmer (CPS Seconde, séance 5)."
    },
    accroche: "« On ne prend pas de filles dans cet atelier. » « Avec ce nom-là, ça va être compliqué. » Tu as déjà entendu ce genre de phrase ?",
    activites: [
      K.classer("Discrimination ou pas ?", "Discriminer, c'est traiter moins bien une personne à cause d'un critère interdit par la loi : origine, sexe, âge, handicap, apparence, adresse, religion, orientation sexuelle…", ["Discrimination", "Pas une discrimination"], [
        ["Refuser une stagiaire « parce que c'est un métier d'hommes »", "Discrimination", "Critère : le sexe."],
        ["Refuser un candidat à cause de son quartier", "Discrimination", "Critère : le lieu de résidence."],
        ["Écarter un CV à cause du nom de famille", "Discrimination", "Critère : l'origine."],
        ["Refuser un stagiaire parce qu'il n'a pas le niveau demandé", "Pas une discrimination", "C'est un critère professionnel."],
        ["Refuser un candidat arrivé avec une heure de retard à l'entretien", "Pas une discrimination"],
        ["Refuser d'adapter un poste pour un élève en situation de handicap, sans chercher de solution", "Discrimination", "Critère : le handicap."],
        ["Choisir le candidat qui a le plus d'expérience", "Pas une discrimination"]
      ], "La loi interdit plus de vingt-cinq critères de discrimination. Un refus doit reposer sur des raisons professionnelles."),
      K.classer("Blague, conflit ou harcèlement ?", "Le harcèlement, ce sont des propos ou des comportements répétés qui dégradent les conditions de travail ou la dignité. Le harcèlement sexuel peut exister même sans répétition, quand il y a une pression grave.", ["Harcèlement", "Conflit ou maladresse"], [
        ["Chaque jour, un salarié se moque de ton physique devant les autres", "Harcèlement"],
        ["Ton tuteur te reprend sèchement une fois pour une erreur", "Conflit ou maladresse"],
        ["Un collègue fait des remarques répétées à connotation sexuelle", "Harcèlement"],
        ["On t'ignore volontairement et on te confie des tâches humiliantes pendant des semaines", "Harcèlement"],
        ["Deux collègues se disputent sur l'organisation du travail", "Conflit ou maladresse"],
        ["Quelqu'un te propose un avantage en échange d'un geste intime", "Harcèlement", "Une seule fois suffit : c'est puni par la loi."]
      ], "Ce n'est jamais « normal pour un stagiaire ». Le harcèlement moral et le harcèlement sexuel sont des délits."),
      K.scenario("À qui en parler ?", "droits-2nde-3", [
        sit("Le refus de stage", "Au téléphone, une entreprise accepte ta candidature. Quand tu donnes ton nom et ton adresse, elle dit que la place est prise. Un camarade appelle dix minutes après : la place est libre.", "Que fais-tu ?", [
          ["Je laisse tomber, c'est comme ça.", false, "Tu as le droit de ne pas accepter l'injustice, et de te faire aider."],
          ["Je note les faits (date, heure, paroles), j'en parle à mon professeur, et je peux contacter le Défenseur des droits.", true, "Oui : le 39 28 et antidiscriminations.fr sont gratuits."]
        ], "Je note les faits, j'en parle à un adulte du lycée, je peux saisir gratuitement le Défenseur des droits (39 28)."),
        sit("Les remarques", "En PFMP, un salarié te fait chaque jour des remarques déplacées. Tu n'oses plus aller à l'atelier.", "Que fais-tu ?", [
          ["J'attends la fin du stage.", false, "Tu n'as pas à subir : le lycée peut intervenir, voire changer ton lieu de stage."],
          ["J'en parle à mon tuteur ou à un autre adulte de l'entreprise, et j'appelle mon professeur référent.", true, "Oui. Et je note les faits pour être cru et protégé."]
        ], "Je ne reste pas seul : tuteur, professeur référent, CPE, infirmière. En cas d'urgence : 17.")
      ])
    ],
    retenir: [
      "Discriminer, c'est traiter moins bien quelqu'un à cause d'un critère interdit par la loi.",
      "Des humiliations répétées, ce n'est pas « normal pour un stagiaire » : c'est du harcèlement.",
      "Je note les faits : dates, lieux, paroles, témoins.",
      "J'en parle à un adulte du lycée ; le Défenseur des droits (39 28) aide gratuitement."
    ],
    ressource: { titre: "Respecté au travail", intro: "Reconnaître, noter, alerter.", blocs: [
      { type: "liste", titre: "Des critères de discrimination interdits", items: ["L'origine, le nom, la couleur de peau", "Le sexe, l'orientation sexuelle, l'identité de genre", "L'âge, le handicap, l'état de santé", "L'apparence physique", "Le lieu de résidence", "La religion, les opinions"] },
      { type: "etapes", titre: "Si ça m'arrive", items: ["Je note les faits : date, lieu, paroles, témoins", "J'en parle à un adulte de confiance du lycée", "Je garde les messages et les preuves", "Je peux contacter le Défenseur des droits : 39 28"] }
    ] },
    traces: [K.carnet("Mes adultes ressources au travail", "ressources-travail", "À qui je parle si je ne suis pas respecté en stage.", [
      ["entreprise", "Dans l'entreprise, je peux parler à…"], ["lycee", "Au lycée, je peux parler à…"], ["exterieur", "À l'extérieur (numéros, sites)", true]
    ])],
    verifie: [
      vf("Refuser quelqu'un à cause de son adresse est une discrimination.", true, "Le lieu de résidence est un critère interdit."),
      vf("Pour qu'il y ait harcèlement moral, il faut des faits répétés.", true, "Le harcèlement sexuel, lui, peut exister dès une pression grave."),
      qcm("Quel numéro gratuit aide en cas de discrimination ?", ["39 28", "30 18", "15"], 0, "C'est le numéro du Défenseur des droits.")
    ],
    plusLoin: [DDD, lien("Antidiscriminations.fr", "Défenseur des droits", "https://www.antidiscriminations.fr", "Signaler une discrimination et être accompagné.")],
    passerelles: ["evars-1re-3", "cps-2nde-5"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Réagit aux deux phrases.", "Pose le cadre : on ne cite aucune entreprise ni personne."],
      ["5-20 min", "Activité", "Trie : discrimination ou pas.", "Distingue critère interdit et critère professionnel."],
      ["20-35 min", "Activité", "Trie : harcèlement ou conflit.", "Donne les définitions légales simplement."],
      ["35-48 min", "Activité", "Joue les deux situations.", "Présente le Défenseur des droits et les adultes du lycée."],
      ["48-55 min", "Trace", "Remplit ses adultes ressources, répond à « Je vérifie ».", "Rappelle qu'on peut changer un élève de lieu de stage."]
    ], vigilance: VIG + "Certains élèves ont vécu des refus de stage discriminatoires : on accueille la parole et on propose un accompagnement concret." }
  });

  // =================================================================== PREMIÈRE
  S.push({
    id: "droits-1re-1", pilier: "droits", niveau: "1re", num: 1, duree: D,
    titre: "Le contrat de travail",
    objectifCourt: "CDI, CDD, intérim, apprentissage, période d'essai",
    objectif: "Distinguer les principaux contrats de travail, savoir ce qu'un contrat doit contenir et ce qu'est une période d'essai.",
    rappel: { seance: "droits-2nde-1", etiquette: "Revoir Droits Seconde, séance 1", texte: "En Seconde, tu as vu la convention de stage : tu restais élève. Avec un job d'été, un apprentissage ou un emploi, tu signes un vrai contrat de travail." },
    aqcms: {
      pourquoi: "Un contrat t'engage et engage l'employeur : il faut savoir ce qu'on signe.",
      apport: "Comparer deux offres, repérer ce qui manque, poser les bonnes questions.",
      ou: "Pour un job d'été, un contrat d'apprentissage, un premier emploi.",
      lie: "Ma fiche de paie (EDUCFI Première, séance 1) ; voie scolaire ou apprentissage (Orientation Première)."
    },
    accroche: "« Tu commences lundi, on verra pour les papiers plus tard. » Bonne idée ?",
    activites: [
      K.classer("Quel contrat ?", "Relie chaque phrase au bon contrat.", ["CDI", "CDD", "Intérim", "Apprentissage"], [
        ["Sans date de fin : c'est la forme normale du contrat de travail", "CDI"],
        ["Pour une durée limitée et un motif précis : remplacement, surcroît d'activité, saison", "CDD"],
        ["Je suis salarié d'une agence, qui m'envoie en mission dans des entreprises", "Intérim"],
        ["J'alterne entreprise et centre de formation pour préparer un diplôme", "Apprentissage"],
        ["À la fin, je touche en général une prime de précarité de 10 %", "CDD", "L'intérim donne aussi droit à une indemnité de fin de mission."],
        ["Il doit toujours être écrit, sinon il peut être requalifié en CDI", "CDD"],
        ["Mon salaire est un pourcentage du SMIC selon mon âge et mon année", "Apprentissage"]
      ], "Le CDI est la règle. CDD et intérim sont permis seulement pour un besoin temporaire."),
      K.classer("Ce que je vérifie avant de signer", "Dans un contrat, qu'est-ce qui doit figurer, et qu'est-ce qui doit t'alerter ?", ["Doit y figurer", "Doit m'alerter"], [
        ["Le poste et les tâches", "Doit y figurer"],
        ["Le salaire brut et la durée du travail", "Doit y figurer"],
        ["Le lieu de travail et la date de début", "Doit y figurer"],
        ["La durée de la période d'essai", "Doit y figurer"],
        ["La convention collective qui s'applique", "Doit y figurer"],
        ["« Le salarié paiera sa tenue et son matériel de sécurité »", "Doit m'alerter", "Les protections sont à la charge de l'employeur."],
        ["Un salaire en dessous du SMIC pour un adulte à temps plein", "Doit m'alerter", "Le SMIC est à " + A("smicBrut") + " brut par mois pour 35 heures."],
        ["Aucun papier : « on verra plus tard »", "Doit m'alerter", "Travailler sans contrat ni déclaration, c'est du travail dissimulé : aucune protection en cas d'accident."]
      ], "Je lis tout, je pose mes questions, et je garde un exemplaire signé."),
      K.quiz("La période d'essai", "droits-1re-1-essai", [
        vf("La période d'essai sert à l'employeur et au salarié pour voir si le poste convient.", true, "Chacun peut y mettre fin, en respectant un court délai de prévenance."),
        vf("Elle existe automatiquement, même si le contrat n'en parle pas.", false, "Elle doit être écrite dans le contrat."),
        qcm("Pour un employé ou un ouvrier en CDI, elle dure au maximum…", ["2 mois", "6 mois", "1 an"], 0, "2 mois pour les ouvriers et employés, renouvelable seulement si un accord le prévoit."),
        vf("Pendant la période d'essai, je suis payé normalement.", true, "C'est du vrai travail, avec les mêmes droits.")
      ])
    ],
    retenir: [
      "Le CDI est la règle ; le CDD et l'intérim répondent à un besoin temporaire.",
      "Un contrat précise le poste, le salaire, la durée du travail, le lieu, la période d'essai.",
      "Je ne commence jamais à travailler sans contrat ni déclaration.",
      "Je garde un exemplaire signé de mon contrat."
    ],
    ressource: { titre: "Le contrat de travail", intro: "Comparer les contrats et vérifier avant de signer.", blocs: [
      { type: "tableau", titre: "Les contrats", colonnes: ["Contrat", "Durée", "À savoir"], lignes: [
        ["CDI", "Sans date de fin", "La forme normale du contrat"],
        ["CDD", "Limitée", "Motif précis, écrit obligatoire, prime de précarité"],
        ["Intérim", "Le temps d'une mission", "Salarié de l'agence, indemnité de fin de mission"],
        ["Apprentissage", "1 à 3 ans", "Alternance, salaire en % du SMIC, diplôme à la clé"]
      ] },
      { type: "liste", titre: "Avant de signer, je vérifie", items: ["Le poste et les tâches", "Le salaire brut et les horaires", "Le lieu et la date de début", "La période d'essai", "La convention collective", "Qu'on me remet un exemplaire"] }
    ] },
    traces: [K.carnet("Mes questions avant de signer", "questions-contrat", "Les questions que je pose avant de signer un contrat.", [
      ["q1", "Une question sur le poste"], ["q2", "Une question sur le salaire ou les horaires"], ["q3", "Une question sur la suite (formation, évolution)"]
    ], true)],
    verifie: [
      qcm("Quel contrat n'a pas de date de fin ?", ["Le CDD", "Le CDI", "L'intérim"], 1, "C'est la forme normale du contrat de travail."),
      vf("On peut commencer à travailler sans contrat, c'est plus simple.", false, "Sans contrat ni déclaration, pas de protection en cas d'accident, pas de droits."),
      ouv("Cite trois éléments que doit contenir un contrat de travail.", "Le poste, le salaire, la durée du travail, le lieu, la date de début, la période d'essai, la convention collective.")
    ],
    plusLoin: [CTN, lien("Le portail de l'alternance", "Ministère du Travail", "https://www.alternance.emploi.gouv.fr", "Tout sur le contrat d'apprentissage.")],
    passerelles: ["educfi-1re-1", "orientation-1re-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "« On verra pour les papiers plus tard. »", "Nomme le travail dissimulé."],
      ["5-20 min", "Activité", "Relie les phrases aux contrats.", "Insiste sur le CDI comme règle."],
      ["20-37 min", "Activité", "Trie ce qui doit figurer et ce qui doit alerter.", "Montre un contrat type anonymisé si possible."],
      ["37-48 min", "Activité", "Répond au quiz sur la période d'essai.", "Précise les durées."],
      ["48-55 min", "Trace", "Écrit ses questions avant de signer, répond à « Je vérifie ».", "Relie à la séance EDUCFI sur la fiche de paie."]
    ], vigilance: VIG }
  });

  S.push({
    id: "droits-1re-2", pilier: "droits", niveau: "1re", num: 2, duree: D,
    titre: "Mon temps, mes congés, mon salaire",
    objectifCourt: "35 heures, heures supplémentaires, repos, congés payés",
    objectif: "Connaître les règles du temps de travail, des heures supplémentaires, du repos et des congés payés, et vérifier qu'on est payé correctement.",
    rappel: { seance: "droits-1re-1", texte: "Ton contrat est signé. Il annonce 35 heures par semaine. Et si on t'en demande 42 ?" },
    aqcms: {
      pourquoi: "Les heures non payées et les repos non pris sont les problèmes les plus fréquents des jeunes salariés.",
      apport: "Compter mes heures, connaître mes repos, vérifier ma paie.",
      ou: "Dans un job d'été, en apprentissage, dans mon premier emploi.",
      lie: "Ma fiche de paie (EDUCFI Première, séance 1) ; le contrat de travail (séance 1)."
    },
    accroche: "Lina a travaillé 42 heures cette semaine. Sur sa fiche de paie : 35 heures. « Les heures en plus, c'est pour l'entreprise », dit le patron. Vrai ?",
    activites: [
      K.quiz("Le temps de travail", "droits-1re-2-temps", [
        qcm("La durée légale du travail à temps plein est de…", ["35 heures par semaine", "39 heures par semaine", "40 heures par semaine"], 0, "Au-delà, ce sont des heures supplémentaires."),
        vf("Les heures supplémentaires sont payées plus cher, ou compensées par du repos.", true, "En général + 25 % pour les huit premières, selon l'accord de l'entreprise (jamais moins de + 10 %)."),
        vf("Un adulte peut travailler 14 heures dans la même journée si l'employeur le demande.", false, "Le maximum est de 10 heures par jour, sauf dérogation, avec 11 heures de repos entre deux journées."),
        vf("Les heures travaillées en plus doivent apparaître sur la fiche de paie.", true, "Je note mes heures chaque jour : c'est ma preuve.")
      ]),
      K.quiz("Mes congés payés", "droits-1re-2-conges", [
        qcm("Chaque mois travaillé donne droit à…", ["1 jour de congé", "2,5 jours ouvrables de congé", "5 jours de congé"], 1, "Soit cinq semaines pour une année complète."),
        vf("Un CDD d'un mois ne donne droit à aucun congé.", false, "Il donne droit à 2,5 jours, souvent payés en fin de contrat (indemnité de congés payés)."),
        vf("C'est l'employeur qui valide les dates de congés.", true, "Je les demande à l'avance ; il organise les départs."),
        vf("Les jours fériés sont toujours chômés et payés double.", false, "Seul le 1er mai est obligatoirement chômé et payé ; pour les autres, cela dépend de la convention collective.")
      ]),
      K.scenario("Que fais-tu ?", "droits-1re-2", [
        sit("Les heures de Lina", "Lina a noté ses heures : 42 cette semaine. Sa fiche de paie n'en compte que 35.", "Que lui conseilles-tu ?", [
          ["De ne rien dire pour garder sa place.", false, "Les heures faites sont dues. Elle peut en parler calmement, preuves à l'appui."],
          ["D'en parler à son employeur avec son relevé d'heures, puis de se renseigner si rien ne change.", true, "Oui : représentants du personnel, Code du travail numérique, inspection du travail."]
        ], "Je note mes heures chaque jour. Toute heure travaillée doit être payée."),
        sit("Le planning", "Un samedi soir, ton patron t'envoie un message : « Demain dimanche, tu viens à 6 heures. » Tu as fini à 23 heures.", "Qu'en penses-tu ?", [
          ["C'est normal, il faut être flexible.", false, "Il faut 11 heures de repos entre deux journées (12 heures avant 18 ans)."],
          ["Ce n'est pas possible : je dois avoir au moins 11 heures de repos entre deux journées de travail.", true, "Oui. Je le dis calmement et je propose une autre heure."]
        ], "11 heures de repos entre deux journées pour un adulte, 12 heures avant 18 ans.")
      ])
    ],
    retenir: [
      "Durée légale : 35 heures par semaine ; au-delà, des heures supplémentaires majorées.",
      "Repos : 11 heures entre deux journées (12 heures avant 18 ans).",
      "Congés payés : 2,5 jours ouvrables par mois travaillé, soit cinq semaines par an.",
      "Je note mes heures chaque jour et je vérifie ma fiche de paie."
    ],
    ressource: { titre: "Mon temps de travail", intro: "Les repères et mon relevé d'heures.", blocs: [
      { type: "tableau", titre: "Les repères (adulte)", colonnes: ["Règle", "Repère"], lignes: [
        ["Durée légale", "35 heures par semaine"], ["Maximum par jour", "10 heures"], ["Repos entre deux journées", "11 heures"],
        ["Heures supplémentaires", "Majorées (souvent + 25 %) ou récupérées"], ["Congés payés", "2,5 jours ouvrables par mois"], ["SMIC", A("smicBrut") + " brut par mois"]
      ] },
      { type: "tableau", titre: "Mon relevé d'heures", colonnes: ["Jour", "Début", "Fin", "Pause", "Total"], lignes: [["Lundi", "", "", "", ""], ["Mardi", "", "", "", ""], ["Mercredi", "", "", "", ""], ["Jeudi", "", "", "", ""], ["Vendredi", "", "", "", ""], ["Samedi", "", "", "", ""]] }
    ] },
    traces: [{ titre: "Mon relevé d'heures", moteur: "liste", outil: { id: "releve-heures", nom: "Mon relevé d'heures", description: "Mes heures de travail, jour après jour." },
      config: { cle: "releve-heures", titreDoc: "Mon relevé d'heures", bouton: "Ajouter la journée", intro: "Pour toi seul. Note tes heures chaque jour de travail : c'est ta preuve.",
        champs: [{ id: "jour", label: "Date" }, { id: "debut", label: "Heure de début" }, { id: "fin", label: "Heure de fin" }, { id: "pause", label: "Pause" }, { id: "total", label: "Total de la journée" }] } }],
    verifie: [
      qcm("Combien de jours de congés payés pour un mois travaillé ?", ["1", "2,5", "5"], 1, "2,5 jours ouvrables."),
      vf("Les heures supplémentaires peuvent ne pas être payées si l'entreprise va mal.", false, "Elles sont dues, payées ou récupérées."),
      ouv("Pourquoi noter ses heures chaque jour ?", "Pour vérifier sa fiche de paie et avoir une preuve en cas de désaccord.")
    ],
    plusLoin: [CTN, SP],
    passerelles: ["educfi-1re-1"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Les 42 heures de Lina.", "Recueille les expériences de jobs, sans nommer d'entreprise."],
      ["5-20 min", "Activité", "Répond au quiz sur le temps de travail.", "Distingue règles des mineurs et des adultes."],
      ["20-33 min", "Activité", "Répond au quiz sur les congés.", "Fait calculer : 2 mois de job d'été = 5 jours."],
      ["33-48 min", "Activité", "Joue les deux situations.", "Présente les recours, du plus simple au plus formel."],
      ["48-55 min", "Trace", "Découvre le relevé d'heures, répond à « Je vérifie ».", "Conseille de l'utiliser dès le prochain job."]
    ], vigilance: VIG }
  });

  S.push({
    id: "droits-1re-3", pilier: "droits", niveau: "1re", num: 3, duree: D,
    titre: "Quand ça se passe mal",
    objectifCourt: "Conflit, rupture du contrat, à qui s'adresser",
    objectif: "Connaître les façons dont un contrat peut se terminer, les documents à recevoir, et les personnes qui peuvent aider en cas de conflit.",
    rappel: { seance: "droits-1re-2", texte: "Tu connais tes horaires et tes congés. Et si le désaccord s'installe, ou si le contrat s'arrête ?" },
    aqcms: {
      pourquoi: "Un conflit au travail arrive à tout le monde. Mal géré, il peut coûter un emploi et des droits.",
      apport: "Garder mon calme, connaître mes recours, ne pas perdre mes droits sur un coup de tête.",
      ou: "En apprentissage, en CDD, en CDI.",
      lie: "Gérer un conflit (CPS Première, séance 5) ; le message « Je » (CPS Première, séance 4)."
    },
    accroche: "Après une dispute, Karim claque la porte : « Je ne reviens plus ! » Deux semaines plus tard, il demande le chômage. Que va-t-il se passer ?",
    activites: [
      K.classer("Comment un contrat se termine", "Relie chaque phrase à la bonne façon de rompre un contrat.", ["Démission", "Licenciement", "Rupture conventionnelle", "Fin de CDD", "Abandon de poste"], [
        ["Je décide de partir ; je respecte un préavis", "Démission"],
        ["L'employeur met fin au contrat, pour un motif réel et sérieux, après un entretien", "Licenciement"],
        ["L'employeur et moi sommes d'accord pour arrêter, et nous signons une convention", "Rupture conventionnelle"],
        ["Le contrat arrive à la date prévue", "Fin de CDD"],
        ["Je ne viens plus sans prévenir", "Abandon de poste", "Depuis 2023, il est en général considéré comme une démission : pas d'allocation chômage."],
        ["En principe, elle ne donne pas droit au chômage", "Démission"],
        ["Elle ouvre droit au chômage si j'ai assez travaillé", "Rupture conventionnelle"]
      ], "Partir sur un coup de tête peut faire perdre ses droits : je me renseigne avant d'agir."),
      K.classer("Qui peut m'aider ?", "À chaque situation, son interlocuteur.", ["Les représentants du personnel (CSE)", "L'inspection du travail", "Le conseil de prud'hommes", "Le Défenseur des droits"], [
        ["Je veux un conseil d'un collègue élu, dans l'entreprise", "Les représentants du personnel (CSE)"],
        ["Mon employeur ne respecte pas les règles de sécurité ou d'horaires", "L'inspection du travail"],
        ["Je conteste mon licenciement ou je réclame des salaires impayés devant un juge", "Le conseil de prud'hommes"],
        ["Je pense être victime d'une discrimination", "Le Défenseur des droits"],
        ["Je veux un renseignement gratuit sur le droit du travail", "L'inspection du travail", "Les services de renseignement en droit du travail répondent gratuitement ; le Code du travail numérique aussi."]
      ], "Du plus simple au plus formel : en parler, se faire conseiller, puis seulement saisir un juge."),
      K.scenario("Que fais-tu ?", "droits-1re-3", [
        sit("Le coup de colère de Karim", "Karim est en CDI. Après une dispute avec son chef, il ne retourne plus au travail et ne répond plus.", "Que risque-t-il ?", [
          ["Rien : il touchera le chômage.", false, "L'abandon de poste est en général traité comme une démission : pas d'allocation."],
          ["Il risque d'être considéré comme démissionnaire, sans chômage. Mieux vaut revenir, s'expliquer, se faire conseiller.", true, "Oui. On peut demander un entretien, se faire accompagner par un représentant du personnel."]
        ], "Avant de partir : je me calme, je me renseigne, je me fais accompagner."),
        sit("La fin du CDD", "Ton CDD de deux mois se termine. L'employeur te dit simplement « merci, au revoir ».", "Que dois-tu recevoir ?", [
          ["Rien de spécial.", false, "Plusieurs documents sont obligatoires."],
          ["Mon dernier bulletin de paie avec la prime de précarité et les congés payés, un certificat de travail, une attestation pour France Travail, le solde de tout compte.", true, "Oui : je les réclame et je les garde."]
        ], "À la fin d'un contrat : certificat de travail, attestation France Travail, solde de tout compte.")
      ])
    ],
    retenir: [
      "Un contrat peut finir par démission, licenciement, rupture conventionnelle ou fin de CDD.",
      "Ne plus venir sans prévenir, c'est risquer de tout perdre.",
      "À la fin d'un contrat, je reçois trois documents : certificat de travail, attestation France Travail, solde de tout compte.",
      "Je ne reste pas seul : représentants du personnel, inspection du travail, prud'hommes."
    ],
    ressource: { titre: "Quand ça se passe mal au travail", intro: "Les recours et les documents de fin de contrat.", blocs: [
      { type: "etapes", titre: "En cas de désaccord", items: ["Je note les faits et je garde les écrits", "J'en parle calmement à mon responsable", "Je demande conseil : représentants du personnel, Code du travail numérique", "Je contacte l'inspection du travail si la loi n'est pas respectée", "En dernier recours : le conseil de prud'hommes"] },
      { type: "liste", titre: "Les documents de fin de contrat", items: ["Le certificat de travail", "L'attestation destinée à France Travail", "Le reçu pour solde de tout compte", "Le dernier bulletin de paie"] }
    ] },
    traces: [K.carnet("Mon plan en cas de conflit au travail", "plan-conflit-travail", "Ce que je fais, dans l'ordre, si un désaccord s'installe.", [
      ["calme", "Ce que je fais pour garder mon calme"], ["parler", "À qui j'en parle en premier"], ["conseil", "Où je me renseigne sur mes droits"]
    ], true)],
    verifie: [
      vf("L'abandon de poste donne droit au chômage.", false, "Il est en général considéré comme une démission."),
      qcm("Qui juge les conflits entre un salarié et son employeur ?", ["Le conseil de prud'hommes", "Le tribunal de police", "La mairie"], 0, "Après une tentative de conciliation."),
      ouv("Cite deux documents à recevoir à la fin d'un contrat.", "Le certificat de travail, l'attestation France Travail, le solde de tout compte, le dernier bulletin de paie.")
    ],
    plusLoin: [CTN, lien("Justice.fr", "Ministère de la Justice", "https://www.justice.fr", "Comprendre les démarches devant le conseil de prud'hommes.")],
    passerelles: ["cps-1re-5", "cps-1re-4"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Karim claque la porte.", "Fait deviner les conséquences."],
      ["5-20 min", "Activité", "Relie les phrases aux modes de rupture.", "Insiste sur l'abandon de poste."],
      ["20-33 min", "Activité", "Relie chaque situation à son interlocuteur.", "Montre le Code du travail numérique."],
      ["33-48 min", "Activité", "Joue les deux situations.", "Liste les documents de fin de contrat."],
      ["48-55 min", "Trace", "Écrit son plan en cas de conflit, répond à « Je vérifie ».", "Relie au message « Je » de CPS."]
    ], vigilance: VIG }
  });

  // =================================================================== TERMINALE
  S.push({
    id: "droits-tle-1", pilier: "droits", niveau: "tle", num: 1, duree: D,
    titre: "Majeur : ce qui change à 18 ans",
    objectifCourt: "Voter, signer, répondre de ses actes",
    objectif: "Connaître les droits et les responsabilités qui arrivent à 18 ans : voter, signer seul un contrat, répondre pleinement de ses actes.",
    rappel: { seance: "cps-tle-4", etiquette: "Lien avec CPS", texte: "En CPS, tu as vu pourquoi une société a besoin de règles et de lois. À 18 ans, ces lois te donnent de nouveaux droits, et de nouvelles responsabilités." },
    aqcms: {
      pourquoi: "La majorité change beaucoup de choses d'un coup, et personne ne l'explique vraiment.",
      apport: "Savoir ce que je peux faire seul, ce que je dois faire, et ce que je risque.",
      ou: "Le jour de mes 18 ans, et toute ma vie de citoyen.",
      lie: "Respecter les règles et les lois (CPS Terminale, séance 4) ; mes papiers (EDUCFI Terminale, séance 4)."
    },
    accroche: "L'élection présidentielle a lieu les " + A("presidentielle2027") + ". Si tu as 18 ans la veille du premier tour, tu peux voter. Tu sais si tu es inscrit ?",
    activites: [
      K.classer("Avant ou après 18 ans ?", "À partir de quand peut-on le faire seul ?", ["Possible avant 18 ans", "À partir de 18 ans"], [
        ["Voter", "À partir de 18 ans"],
        ["Signer seul un bail ou un crédit", "À partir de 18 ans"],
        ["Travailler pendant les vacances", "Possible avant 18 ans", "Dès 14 ans pour des travaux légers, avec l'accord des parents, et dès 16 ans plus largement."],
        ["Ouvrir un compte bancaire avec l'accord de ses parents", "Possible avant 18 ans"],
        ["Se faire recenser à la mairie", "Possible avant 18 ans", "C'est même obligatoire à 16 ans."],
        ["Se présenter à une élection municipale", "À partir de 18 ans"],
        ["Être poursuivi par la justice pour un délit", "Possible avant 18 ans", "Un mineur capable de discernement peut être jugé, avec une justice adaptée à son âge."]
      ], "À 18 ans, je décide seul, et je réponds seul de mes actes."),
      K.quiz("Voter", "droits-tle-1-voter", [
        vf("Si je me suis fait recenser à 16 ans, je suis inscrit d'office sur les listes électorales à 18 ans.", true, "Je vérifie quand même ma situation en ligne sur Service-Public.fr, surtout si j'ai déménagé."),
        vf("Le recensement à 16 ans sert seulement à voter.", false, "Il permet aussi d'être convoqué à la journée défense et citoyenneté, dont l'attestation est demandée pour les examens et le permis."),
        vf("Si je ne peux pas me déplacer le jour du vote, je peux donner procuration.", true, "Une autre personne vote alors à ma place, selon mon choix."),
        vf("Le vote est secret : personne ne peut m'obliger à dire pour qui je vote.", true, "C'est un principe de la démocratie.")
      ], "L'appli ne donne aucune consigne de vote : elle explique seulement comment voter."),
      K.scenario("Responsable de mes actes", "droits-tle-1", [
        sit("La signature", "Tu viens d'avoir 18 ans. Un vendeur te propose un crédit pour un scooter : « Signe ici, c'est une formalité. »", "Qu'est-ce qui a changé depuis tes 18 ans ?", [
          ["Rien, mes parents pourront annuler.", false, "Majeur, ta signature t'engage seul."],
          ["Ma signature m'engage seul : je lis, je compare, et je prends le temps de réfléchir.", true, "Oui. Pour un crédit à la consommation, tu as 14 jours pour changer d'avis."]
        ], "Majeur, ma signature m'engage : je lis avant de signer."),
        sit("La soirée", "En soirée, un ami de 18 ans abîme une voiture « pour rire ».", "Que risque-t-il ?", [
          ["Rien, ses parents paieront.", false, "Majeur, il répond lui-même de ses actes."],
          ["Il devra réparer le dommage, et peut être poursuivi : il est pleinement responsable.", true, "Oui : responsabilité civile (réparer) et pénale (être sanctionné)."]
        ], "À 18 ans, je suis pleinement responsable : je répare les dommages que je cause, et je réponds de mes actes devant la justice.")
      ])
    ],
    retenir: [
      "À 18 ans, je peux voter et signer seul un contrat.",
      "Recensé à 16 ans, je suis inscrit d'office sur les listes électorales ; je vérifie en ligne.",
      "Ma signature m'engage : je lis avant de signer.",
      "Majeur, je réponds pleinement de mes actes."
    ],
    ressource: { titre: "Majeur : ce qui change à 18 ans", intro: "Mes nouveaux droits et mes démarches.", blocs: [
      { type: "tableau", titre: "Ce qui change", colonnes: ["Domaine", "À 18 ans"], lignes: [
        ["Citoyenneté", "Je vote et je peux être candidat"], ["Contrats", "Je signe seul : bail, travail, crédit"], ["Argent", "Je gère seul mon compte"],
        ["Justice", "Je suis pleinement responsable de mes actes"], ["Santé", "Je décide seul de mes soins"]
      ] },
      { type: "etapes", titre: "Mes démarches", items: ["Me faire recenser à la mairie dès 16 ans, si ce n'est pas fait", "Vérifier mon inscription sur les listes électorales sur Service-Public.fr", "Garder mon attestation de la journée défense et citoyenneté", "Mettre à jour mes comptes officiels (voir EDUCFI Terminale)"] }
    ] },
    traces: [K.carnet("Mes démarches de majeur", "demarches-majeur", "Ce que j'ai fait, ce qu'il me reste à faire à 18 ans.", [
      ["fait", "Ce qui est déjà fait (recensement, journée défense et citoyenneté…)", true], ["reste", "Ce qu'il me reste à faire", true]
    ])],
    verifie: [
      vf("À 18 ans, mes parents restent responsables des contrats que je signe.", false, "Ma signature m'engage seul."),
      qcm("À quel âge doit-on se faire recenser ?", ["16 ans", "17 ans", "18 ans"], 0, "À la mairie, ou en ligne."),
      ouv("Comment vérifier que tu es inscrit sur les listes électorales ?", "En ligne sur Service-Public.fr, ou auprès de ma mairie.")
    ],
    plusLoin: [lien("Élections : vérifier son inscription et voter", "Ministère de l'Intérieur", "https://www.elections.interieur.gouv.fr", "S'inscrire, donner procuration, trouver son bureau de vote."), SP],
    passerelles: ["cps-tle-4", "educfi-tle-4"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "La présidentielle : es-tu inscrit ?", "Reste strictement neutre : on parle de la démarche, pas des candidats."],
      ["5-20 min", "Activité", "Trie : avant ou après 18 ans.", "Corrige les idées reçues sur la justice des mineurs."],
      ["20-33 min", "Activité", "Répond au quiz sur le vote.", "Montre la vérification d'inscription en ligne."],
      ["33-48 min", "Activité", "Joue les deux situations.", "Distingue responsabilité civile et pénale."],
      ["48-55 min", "Trace", "Liste ses démarches, répond à « Je vérifie ».", "Propose de vérifier son inscription chez soi."]
    ], vigilance: "Neutralité stricte : aucune consigne de vote, aucun commentaire sur les candidats ou les partis. Certains élèves n'ont pas la nationalité française : on présente le vote sans mettre personne à l'écart. " + VIG }
  });

  S.push({
    id: "droits-tle-2", pilier: "droits", niveau: "tle", num: 2, duree: D,
    titre: "Mon premier emploi : signer en confiance",
    objectifCourt: "De la promesse d'embauche aux premiers jours",
    objectif: "Savoir ce qui se passe entre l'entretien réussi et la fin de la période d'essai : promesse d'embauche, déclaration, contrat, visite de prévention, mutuelle.",
    rappel: { seance: "droits-1re-1", etiquette: "Revoir Droits Première, séance 1", texte: "En Première, tu as appris à lire un contrat. Dans quelques mois, ce sera le tien." },
    aqcms: {
      pourquoi: "Les premières semaines d'un emploi décident souvent de la suite.",
      apport: "Arriver en sachant ce qu'on doit me remettre, ce que je dois fournir, et ce qui doit m'alerter.",
      ou: "À la sortie du bac pro, en emploi ou en alternance.",
      lie: "Mes candidatures et l'entretien (Orientation Terminale) ; ma fiche de paie (EDUCFI Première)."
    },
    accroche: "« C'est bon, vous êtes pris ! » Et maintenant, il se passe quoi ?",
    activites: [
      K.quiz("Les étapes de l'embauche", "droits-tle-2-etapes", [
        K.ordre("Remets les étapes dans l'ordre.", ["Je reçois une promesse d'embauche ou une proposition écrite", "L'employeur me déclare avant mon premier jour", "Je signe mon contrat et j'en garde un exemplaire", "Je passe la visite d'information et de prévention", "Ma période d'essai se termine : je suis confirmé"],
          "La déclaration préalable à l'embauche est obligatoire : sans elle, c'est du travail dissimulé."),
        vf("Je peux demander à mon employeur la preuve qu'il m'a déclaré.", true, "Il doit me remettre une copie de la déclaration ou un contrat qui la mentionne."),
        vf("La mutuelle d'entreprise est obligatoire, et l'employeur en paie au moins la moitié.", true, "Quelques cas de dispense existent, par exemple pour un CDD court.")
      ]),
      K.classer("Ce qu'on peut me demander", "À l'embauche, qu'a-t-on le droit de te demander ?", ["Oui", "Non"], [
        ["Une pièce d'identité", "Oui"],
        ["Mon numéro de Sécurité sociale", "Oui"],
        ["Un RIB pour verser mon salaire", "Oui"],
        ["Mes diplômes", "Oui"],
        ["Si j'ai l'intention d'avoir des enfants", "Non", "Question interdite : elle n'a aucun lien avec l'emploi."],
        ["Ma religion ou mes opinions", "Non"],
        ["De payer ma formation ou mon matériel pour être embauché", "Non", "C'est souvent le signe d'une arnaque à l'emploi."],
        ["Mon état de santé en détail", "Non", "Seul le médecin ou l'infirmier du travail peut m'interroger sur ma santé."]
      ], "Les questions doivent avoir un lien direct avec l'emploi."),
      K.scenario("Les premiers jours", "droits-tle-2", [
        sit("L'essai gratuit", "Une entreprise te propose « une semaine d'essai non payée pour voir ».", "Que réponds-tu ?", [
          ["J'accepte, c'est ma chance.", false, "Un essai en conditions réelles est du travail : il doit être déclaré et payé."],
          ["Je demande un contrat : la période d'essai est payée et écrite dans le contrat.", true, "Oui. Un simple test de quelques heures peut exister, pas une semaine de travail gratuit."]
        ], "Tout travail est déclaré et payé, même pendant la période d'essai."),
        sit("La fin de l'essai", "Au bout de trois semaines, ton employeur met fin à ta période d'essai.", "A-t-il le droit ?", [
          ["Non, il doit me garder.", false, "Pendant l'essai, chacun peut rompre le contrat."],
          ["Oui, en me prévenant un peu à l'avance (délai de prévenance) et sans motif discriminatoire. Je reçois mes documents de fin de contrat.", true, "Oui. Et moi aussi, je peux partir si le poste ne me convient pas."]
        ], "Pendant l'essai, chacun peut rompre le contrat en respectant un délai de prévenance.")
      ])
    ],
    retenir: [
      "Je suis déclaré avant mon premier jour, et je signe un contrat écrit.",
      "La période d'essai est payée.",
      "À l'embauche, les questions doivent avoir un lien direct avec l'emploi.",
      "Je ne paie jamais pour être embauché."
    ],
    ressource: { titre: "Mon premier emploi", intro: "La check-list des premiers jours.", blocs: [
      { type: "liste", titre: "Ce que je fournis", items: ["Pièce d'identité", "Numéro de Sécurité sociale", "RIB", "Diplômes et attestations", "Justificatif de domicile si demandé"] },
      { type: "liste", titre: "Ce qu'on me remet", items: ["Mon contrat signé", "La preuve de ma déclaration d'embauche", "Les informations sur la mutuelle d'entreprise", "Mes protections et ma tenue si le poste l'exige", "Un bulletin de paie chaque mois"] },
      { type: "liste", titre: "Ce qui doit m'alerter", items: ["Pas de contrat écrit", "Un « essai » non payé", "De l'argent à avancer pour être embauché", "Un salaire versé en espèces sans bulletin"] }
    ] },
    traces: [K.carnet("Ma check-list d'embauche", "checklist-embauche", "Ce que je prépare et ce que je vérifie pour mon premier emploi.", [
      ["fournir", "Les papiers que je prépare", true], ["verifier", "Ce que je vérifie dans mon contrat", true], ["question", "La question que je poserai le premier jour"]
    ], true)],
    verifie: [
      vf("Une semaine d'essai non payée est légale si je suis d'accord.", false, "Tout travail doit être déclaré et payé."),
      vf("Un employeur peut me demander si je compte avoir des enfants.", false, "C'est une question interdite."),
      ouv("Cite deux choses qu'on doit te remettre à l'embauche.", "Un contrat signé, la preuve de la déclaration d'embauche, les informations sur la mutuelle, un bulletin de paie chaque mois.")
    ],
    plusLoin: [CTN, lien("France Travail", "Service public de l'emploi", "https://www.francetravail.fr", "Offres, conseils et droits des demandeurs d'emploi.")],
    passerelles: ["orientation-tle-2", "orientation-tle-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "« Vous êtes pris ! » Et après ?", "Liste les idées de la classe."],
      ["5-18 min", "Activité", "Remet les étapes de l'embauche dans l'ordre.", "Explique la déclaration préalable."],
      ["18-33 min", "Activité", "Trie les questions autorisées et interdites.", "Relie aux discriminations vues en Seconde."],
      ["33-48 min", "Activité", "Joue les deux situations.", "Alerte sur les arnaques à l'emploi."],
      ["48-55 min", "Trace", "Prépare sa check-list, répond à « Je vérifie ».", "À placer avant les candidatures de fin d'année."]
    ], vigilance: VIG }
  });

  S.push({
    id: "droits-tle-3", pilier: "droits", niveau: "tle", num: 3, duree: D,
    titre: "Défendre mes droits, et le bilan",
    objectifCourt: "Se faire aider gratuitement ; le bilan des trois ans",
    objectif: "Savoir où trouver une aide juridique gratuite, comment agir sans se mettre en tort, puis faire le bilan des trois années du pilier Droits.",
    rappel: { seance: "droits-1re-3", etiquette: "Revoir Droits Première, séance 3", texte: "En Première, tu as vu qui peut t'aider en cas de conflit au travail. Aujourd'hui, on élargit : logement, consommation, justice." },
    aqcms: {
      pourquoi: "Avoir des droits ne suffit pas : il faut savoir les faire valoir, sans se mettre soi-même en tort.",
      apport: "Trouver la bonne porte, gratuitement, pour n'importe quel problème de droit.",
      ou: "Au travail, dans mon logement, face à un vendeur, face à une administration.",
      lie: "Mon premier logement (EDUCFI Terminale, séance 1) ; consommer sans se faire piéger (EDUCFI Première, séance 2)."
    },
    accroche: "Ton propriétaire refuse de te rendre ta caution. Ton employeur ne t'a pas payé tes heures. Un vendeur refuse de réparer ton téléphone en panne. Tu commences par quoi ?",
    activites: [
      K.classer("La bonne porte", "Pour chaque problème, qui contacter en premier ?", ["Point-justice (30 39)", "Inspection du travail", "SignalConso", "Défenseur des droits", "Police ou gendarmerie (17)"], [
        ["Je veux un conseil juridique gratuit, pour n'importe quel problème", "Point-justice (30 39)"],
        ["Mon employeur ne me paie pas mes heures supplémentaires", "Inspection du travail"],
        ["Un magasin refuse d'appliquer la garantie légale", "SignalConso"],
        ["Une administration ne répond pas à mes demandes depuis des mois", "Défenseur des droits"],
        ["On m'a refusé un logement à cause de mon origine", "Défenseur des droits"],
        ["Je suis victime de violences ou d'un vol", "Police ou gendarmerie (17)"],
        ["Mon propriétaire garde mon dépôt de garantie sans raison", "Point-justice (30 39)", "Un point-justice ou l'ADIL te conseillent gratuitement sur la marche à suivre."]
      ], "Un conseil juridique gratuit existe partout en France : les point-justice, au 30 39."),
      K.quiz("Agir sans me mettre en tort", "droits-tle-3-agir", [
        K.ordre("Remets les étapes dans l'ordre.", ["Je rassemble les preuves : contrat, messages, photos, dates", "Je demande par écrit, poliment, ce que je réclame", "Je me fais conseiller gratuitement", "J'envoie une lettre recommandée (mise en demeure)", "En dernier recours, je saisis un conciliateur ou un juge"],
          "La plupart des conflits se règlent avant le juge, par écrit et avec un conseil."),
        vf("Si mon propriétaire ne fait pas les réparations, je peux arrêter de payer mon loyer.", false, "Se faire justice soi-même met en tort : on continue de payer et on agit par écrit."),
        vf("Si je gagne peu, l'État peut payer mon avocat.", true, "C'est l'aide juridictionnelle, selon les ressources."),
        vf("Un écrit daté vaut mieux qu'un accord oral.", true, "Les paroles s'oublient ; les écrits se prouvent.")
      ]),
      { titre: "Bilan du pilier Droits", moteur: "jauges", consigne: "Trois ans de Droits : où en es-tu ? Tes réponses restent sur ton appareil.",
        config: { id: "bilan-droits", cle: "bilan-droits", bornes: ["Je débute", "Je maîtrise"],
          items: ["Connaître mes droits en stage", "Me protéger au travail", "Reconnaître une discrimination ou un harcèlement", "Lire un contrat de travail", "Vérifier mes heures et mes congés", "Réagir à un conflit", "Exercer mes droits de majeur", "Trouver de l'aide gratuite"],
          note: "Ce bilan rejoindra ton passeport de compétences." } }
    ],
    retenir: [
      "Un conseil juridique gratuit existe : les point-justice, au 30 39.",
      "Je garde des preuves et j'écris : les paroles s'oublient.",
      "Je ne me fais jamais justice moi-même.",
      "La plupart des conflits se règlent avant le juge."
    ],
    ressource: { titre: "Défendre mes droits", intro: "Les bonnes portes, toutes gratuites.", blocs: [
      { type: "tableau", titre: "Qui contacter", colonnes: ["Problème", "Contact"], lignes: [
        ["Un conseil juridique", "Point-justice : 30 39"], ["Travail", "Inspection du travail, Code du travail numérique"], ["Achat, garantie", "SignalConso"],
        ["Discrimination, administration", "Défenseur des droits : 39 28"], ["Logement", "ADIL de mon département"], ["Urgence, violences", "17 ou 112"]
      ] },
      { type: "etapes", titre: "Ma méthode", items: ["Rassembler les preuves", "Demander par écrit", "Me faire conseiller", "Lettre recommandée", "Conciliateur ou juge en dernier recours"] }
    ] },
    traces: [K.carnet("Mon bilan Droits", "bilan-droits-texte", "Ce que je retiens de trois ans de Droits, et le réflexe que je garde.", [
      ["retiens", "Ce que je retiens de ces trois années", true], ["reflexe", "Un réflexe que je garde"]
    ])],
    verifie: [
      qcm("Quel numéro donne accès à un conseil juridique gratuit ?", ["30 39", "39 39", "15"], 0, "Le numéro des point-justice."),
      vf("En cas de litige, je peux arrêter de payer en attendant.", false, "On ne se fait pas justice soi-même."),
      ouv("Pourquoi écrire plutôt que seulement parler ?", "Parce qu'un écrit daté est une preuve, alors qu'un accord oral s'oublie ou se conteste.")
    ],
    plusLoin: [lien("Justice.fr", "Ministère de la Justice", "https://www.justice.fr", "Trouver un point-justice, comprendre ses démarches."), DDD, lien("SignalConso", "DGCCRF", "https://signal.conso.gouv.fr", "Signaler un problème avec un commerçant.")],
    passerelles: ["educfi-tle-1", "educfi-1re-2"],
    ressourcesLocales: ["adil", "social", "mission-locale"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Trois problèmes : par quoi commencer ?", "Montre qu'il existe toujours une porte gratuite."],
      ["5-20 min", "Activité", "Relie chaque problème au bon contact.", "Présente les point-justice."],
      ["20-35 min", "Activité", "Remet la méthode dans l'ordre, répond au vrai ou faux.", "Insiste : ne jamais se faire justice soi-même."],
      ["35-47 min", "Bilan", "Se positionne sur les compétences des trois ans.", "Relie au passeport de compétences."],
      ["47-55 min", "Trace", "Écrit son bilan, répond à « Je vérifie ».", "Indique le point-justice le plus proche."]
    ], vigilance: VIG + "On donne des repères généraux : pour un cas réel, on oriente vers un point-justice." }
  });
})();
