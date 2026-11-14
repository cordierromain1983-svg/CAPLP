/*
 * PILIER E3D « Éco-gestes : comprendre mon impact, agir » · SECONDE, PREMIÈRE, TERMINALE
 * Trois séances de 55 minutes par niveau.
 * Seconde « Moi » : mon impact. Première « Moi et les autres » : agir au lycée et dans mon métier.
 * Terminale « Moi et le monde » : comprendre les enjeux, m'engager.
 * Repères : éducation au développement durable (éduscol), ADEME, objectifs de développement durable de l'ONU.
 * Les chiffres qui changent viennent de data/actualites.js. Contenu à relire par l'enseignant : il n'a pas
 * fait l'objet d'un document de validation préalable.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var A = window.CAP_ACTU.texte, K = window.CAP_AIDE;
  var vf = K.vf, qcm = K.qcm, ouv = K.ouv, sit = K.sit, lien = K.lien;
  var D = "55 min";
  var ADEME = lien("Agir pour la transition", "ADEME", "https://agirpourlatransition.ademe.fr", "Des conseils concrets de l'agence de la transition écologique.");
  var NGC = lien("Nos Gestes Climat", "ADEME", "https://nosgestesclimat.fr", "Calculer son empreinte carbone en dix minutes, gratuitement et sans compte.");
  var VIG = "On parle de gestes et de choix, jamais de « bons » ou de « mauvais » élèves : beaucoup de choix dépendent de la famille et du budget. On évite la culpabilisation et le catastrophisme : chaque séance se termine par une action possible. ";

  // =================================================================== SECONDE
  S.push({
    id: "e3d-2nde-1", pilier: "e3d", niveau: "2nde", num: 1, duree: D,
    titre: "Mon empreinte",
    objectifCourt: "Ce qui pèse le plus dans mon impact",
    objectif: "Comprendre ce qu'est une empreinte carbone, repérer les postes qui pèsent le plus, et distinguer les gestes qui comptent beaucoup de ceux qui comptent peu.",
    aqcms: {
      pourquoi: "On entend parler de climat partout, sans toujours savoir ce qui compte vraiment dans nos gestes.",
      apport: "Savoir où agir en premier, sans se disperser ni culpabiliser.",
      ou: "Dans mes déplacements, mon assiette, mes achats, mon téléphone.",
      lie: "Mon budget, mes choix (EDUCFI Seconde, séance 1) ; info ou intox (Cyber Seconde, séance 1)."
    },
    accroche: "En France, une personne émet en moyenne " + A("empreinteMoyenne") + " de gaz à effet de serre par an. Pour limiter le réchauffement, il faudrait descendre vers " + A("empreinteCible") + ". À ton avis, qu'est-ce qui pèse le plus ?",
    activites: [
      K.quiz("Les grands postes", "e3d-2nde-1-postes", [
        K.ordre("Range ces postes du plus lourd au plus léger dans l'empreinte moyenne d'un Français.", ["Se déplacer", "Se nourrir", "Se loger (chauffage, électricité)", "Le numérique (appareils et usages)"],
          "Le transport arrive en tête, devant l'alimentation et le logement. Le numérique pèse moins, mais augmente vite."),
        vf("L'empreinte carbone compte aussi ce qui est fabriqué à l'étranger et que j'achète.", true, "Un téléphone fabriqué en Asie compte dans l'empreinte de celui qui l'achète."),
        vf("Pour un smartphone, c'est surtout la fabrication qui pèse, bien plus que l'utilisation.", true, "Le garder plus longtemps est donc le geste le plus efficace.")
      ]),
      K.classer("Ça compte beaucoup ou un peu ?", "Tous les gestes ne se valent pas. Lesquels ont le plus d'effet ?", ["Compte beaucoup", "Compte un peu"], [
        ["Remplacer des trajets en voiture par le bus, le vélo ou le covoiturage", "Compte beaucoup"],
        ["Manger moins souvent de la viande de bœuf", "Compte beaucoup"],
        ["Garder son téléphone quatre ans au lieu de deux", "Compte beaucoup"],
        ["Éviter un voyage en avion", "Compte beaucoup"],
        ["Baisser le chauffage d'un degré", "Compte beaucoup"],
        ["Éteindre la lumière en sortant d'une pièce", "Compte un peu", "Utile, mais l'éclairage pèse peu dans la consommation."],
        ["Supprimer ses vieux courriels", "Compte un peu", "L'effet est très faible : mieux vaut garder ses appareils longtemps."],
        ["Débrancher son chargeur", "Compte un peu"]
      ], "Les petits gestes sont utiles, mais ce sont les déplacements, l'alimentation, le logement et la durée de vie des objets qui changent vraiment les choses."),
      K.quiz("Se déplacer, se nourrir", "e3d-2nde-1-ordres", [
        K.ordre("Pour un même trajet, du plus émetteur au moins émetteur par personne.", ["L'avion", "La voiture, seul", "Le bus", "Le train"], "À plusieurs dans une voiture, les émissions par personne baissent : c'est l'intérêt du covoiturage."),
        K.ordre("Pour un repas, du plus émetteur au moins émetteur.", ["Un repas avec du bœuf", "Un repas avec du poulet", "Un repas végétarien"], "Pas besoin de tout changer : remplacer quelques repas dans la semaine a déjà un effet.")
      ])
    ],
    retenir: [
      "L'empreinte carbone, c'est l'ensemble des gaz à effet de serre liés à ma façon de vivre, y compris ce qui est fabriqué ailleurs.",
      "Ce qui pèse le plus : se déplacer, se nourrir, se loger, et les objets qu'on achète.",
      "Garder ses appareils longtemps est l'un des gestes les plus efficaces.",
      "Je commence par ce qui compte beaucoup, à ma portée."
    ],
    ressource: { titre: "Mon empreinte : où agir en premier", intro: "Les ordres de grandeur à garder en tête.", blocs: [
      { type: "tableau", titre: "Les repères", colonnes: ["Repère", "Valeur"], lignes: [
        ["Empreinte moyenne en France", A("empreinteMoyenne") + " par personne et par an"], ["Objectif pour 2050", A("empreinteCible")], ["Premier poste", "Les déplacements"]
      ] },
      { type: "liste", titre: "Les gestes qui comptent beaucoup", items: ["Moins de voiture seul : bus, vélo, covoiturage, train", "Moins de viande rouge", "Garder ses appareils longtemps, réparer, acheter d'occasion", "Chauffer un peu moins", "Éviter l'avion quand une autre solution existe"] },
      { type: "texte", titre: "Calculer mon empreinte", texte: "Le simulateur public Nos Gestes Climat (nosgestesclimat.fr) calcule ton empreinte en dix minutes, sans compte, et propose des actions adaptées." }
    ] },
    traces: [K.carnet("Mes deux gestes qui comptent", "gestes-qui-comptent", "Deux gestes à ma portée, parmi ceux qui comptent beaucoup.", [
      ["g1", "Un geste que je peux faire dès cette semaine"], ["g2", "Un geste que je vise d'ici la fin de l'année"], ["frein", "Ce qui peut me freiner, et comment je fais"]
    ])],
    verifie: [
      qcm("Quel est le premier poste de l'empreinte carbone moyenne en France ?", ["Le numérique", "Les déplacements", "L'éclairage"], 1, "Devant l'alimentation et le logement."),
      vf("Supprimer ses courriels est l'un des gestes les plus efficaces pour le climat.", false, "L'effet est très faible. Garder ses appareils longtemps compte bien plus."),
      ouv("Cite deux gestes qui comptent beaucoup.", "Moins de voiture seul, moins de viande rouge, garder ses appareils longtemps, chauffer moins, éviter l'avion.")
    ],
    plusLoin: [NGC, lien("Impact CO2", "ADEME", "https://impactco2.fr", "Comparer l'impact d'un trajet, d'un repas, d'un objet.")],
    passerelles: ["educfi-2nde-1", "cyber-2nde-1"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Devine ce qui pèse le plus.", "Note les hypothèses au tableau."],
      ["5-20 min", "Activité", "Range les postes, répond au vrai ou faux.", "Explique l'empreinte : on compte aussi les importations."],
      ["20-35 min", "Activité", "Trie les gestes : beaucoup ou un peu.", "Dédramatise : pas de geste « inutile », mais des priorités."],
      ["35-47 min", "Activité", "Range les trajets et les repas.", "Peut projeter Impact CO2 pour comparer."],
      ["47-55 min", "Trace", "Choisit ses deux gestes, répond à « Je vérifie ».", "Propose de faire Nos Gestes Climat chez soi."]
    ], vigilance: VIG }
  });

  S.push({
    id: "e3d-2nde-2", pilier: "e3d", niveau: "2nde", num: 2, duree: D,
    titre: "Mes objets, mes déchets",
    objectifCourt: "Acheter moins, réparer, bien trier",
    objectif: "Connaître les étapes de la vie d'un objet, les solutions pour le faire durer (réparer, acheter d'occasion) et les règles du tri.",
    rappel: { seance: "e3d-2nde-1", texte: "La dernière fois, tu as vu que la fabrication des objets pèse lourd. Aujourd'hui : comment les faire durer, et que faire quand ils ne servent plus." },
    aqcms: {
      pourquoi: "Le meilleur déchet est celui qu'on ne produit pas. Et réparer coûte souvent moins cher que racheter.",
      apport: "Faire des économies, et savoir enfin dans quelle poubelle va chaque chose.",
      ou: "Quand j'achète, quand quelque chose casse, devant les poubelles.",
      lie: "Mon budget (EDUCFI Seconde, séance 1) ; consommer sans se faire piéger (EDUCFI Première, séance 2)."
    },
    accroche: "L'écran de ton téléphone est fissuré. Tu le changes, tu le répares, tu le gardes comme ça ?",
    activites: [
      K.quiz("La bonne priorité", "e3d-2nde-2-priorite", [
        K.ordre("Du plus efficace au moins efficace pour réduire les déchets.", ["Ne pas acheter ce dont je n'ai pas besoin", "Réparer ou faire réparer", "Acheter d'occasion ou donner", "Recycler"],
          "Recycler est utile, mais vient en dernier : il consomme encore de l'énergie. D'abord éviter, puis faire durer."),
        vf("Une aide de l'État, le bonus réparation, réduit le prix de la réparation de certains appareils chez un réparateur labellisé.", true, "Elle est déduite directement de la facture."),
        vf("L'indice de réparabilité ou de durabilité affiché en magasin aide à choisir un appareil qui durera.", true, "C'est une note sur 10, obligatoire sur plusieurs familles de produits.")
      ]),
      K.classer("Dans quelle poubelle ?", "Partout en France, tous les emballages vont désormais dans le bac de tri. Et le reste ?", ["Bac de tri (emballages, papiers)", "Verre", "Biodéchets", "Point de collecte ou déchèterie", "Ordures ménagères"], [
        ["Un pot de yaourt vide", "Bac de tri (emballages, papiers)", "Tous les emballages en plastique se trient, sans les laver."],
        ["Une canette", "Bac de tri (emballages, papiers)"],
        ["Un carton de pizza un peu gras", "Bac de tri (emballages, papiers)"],
        ["Une bouteille en verre", "Verre"],
        ["Des épluchures", "Biodéchets", "Depuis 2024, chaque collectivité doit proposer une solution : compost ou collecte."],
        ["Des piles", "Point de collecte ou déchèterie", "Elles se rapportent en magasin."],
        ["Un vieux téléphone", "Point de collecte ou déchèterie", "En magasin ou en déchèterie : il contient des métaux précieux et des substances polluantes."],
        ["Un mouchoir en papier usagé", "Ordures ménagères"]
      ], "En cas de doute, les consignes de ma commune font foi : elles sont affichées sur les bacs et en ligne."),
      K.scenario("Que fais-tu ?", "e3d-2nde-2", [
        sit("L'écran fissuré", "L'écran de ton téléphone est fissuré, mais tout fonctionne. Un nouveau modèle sort ce mois-ci.", "Que fais-tu ?", [
          ["J'en profite pour changer de téléphone.", false, "C'est la fabrication d'un téléphone qui pèse le plus, et ton budget aussi."],
          ["Je compare : faire réparer l'écran (avec le bonus réparation) ou acheter un modèle reconditionné.", true, "Oui : les deux solutions coûtent moins cher et évitent un appareil neuf."]
        ], "Réparer d'abord ; sinon, acheter d'occasion ou reconditionné ; et rapporter l'ancien appareil."),
        sit("Les vêtements", "Ton armoire déborde de vêtements que tu ne mets plus.", "Que fais-tu ?", [
          ["Je les jette à la poubelle.", false, "Ils peuvent resservir, ou être recyclés."],
          ["Je donne, je revends, ou je les dépose dans une borne de collecte de textiles.", true, "Oui : même abîmés, les textiles se déposent en borne."]
        ], "Un objet dont je ne veux plus peut servir à quelqu'un d'autre.")
      ])
    ],
    retenir: [
      "D'abord éviter d'acheter, puis réparer, puis réutiliser, et enfin recycler.",
      "Tous les emballages vont dans le bac de tri.",
      "Piles, appareils électriques et textiles ont leurs points de collecte.",
      "Réparer ou acheter d'occasion, c'est aussi bon pour mon budget."
    ],
    ressource: { titre: "Mes objets, mes déchets", intro: "Faire durer, puis bien trier.", blocs: [
      { type: "etapes", titre: "Avant d'acheter", items: ["En ai-je vraiment besoin ?", "Puis-je emprunter, louer ou réparer ?", "Existe-t-il d'occasion ou reconditionné ?", "Sinon, je choisis un produit qui dure (indice de réparabilité)"] },
      { type: "tableau", titre: "Où ça va ?", colonnes: ["Déchet", "Où"], lignes: [
        ["Emballages, papiers, cartons", "Bac de tri"], ["Verre", "Conteneur à verre"], ["Épluchures, restes", "Compost ou collecte des biodéchets"],
        ["Piles, ampoules", "Points de collecte en magasin"], ["Appareils électriques", "Magasin ou déchèterie"], ["Vêtements, chaussures", "Borne de collecte de textiles"]
      ] }
    ] },
    traces: [K.carnet("Mon objet à faire durer", "objet-a-faire-durer", "Un objet que je vais réparer, donner ou garder plus longtemps.", [
      ["objet", "L'objet"], ["action", "Ce que je décide : réparer, donner, revendre, garder"], ["ou", "Où je vais (réparateur, borne, site, association)"]
    ])],
    verifie: [
      qcm("Quelle est l'action la plus efficace pour réduire ses déchets ?", ["Recycler", "Ne pas acheter ce dont on n'a pas besoin", "Trier le verre"], 1, "Le meilleur déchet est celui qu'on ne produit pas."),
      vf("Un pot de yaourt en plastique va dans le bac de tri.", true, "Tous les emballages se trient."),
      ouv("Où déposer un vieux téléphone ?", "Dans un point de collecte en magasin ou en déchèterie, ou le donner ou le revendre s'il fonctionne.")
    ],
    plusLoin: [lien("Longue vie aux objets", "ADEME", "https://longuevieauxobjets.ademe.fr", "Trouver un réparateur, donner, acheter d'occasion près de chez soi."), ADEME],
    passerelles: ["educfi-1re-2"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "L'écran fissuré : tu fais quoi ?", "Fait le lien avec le budget."],
      ["5-17 min", "Activité", "Range les priorités, répond au vrai ou faux.", "Présente le bonus réparation."],
      ["17-32 min", "Activité", "Trie les déchets.", "Vérifie les consignes de la commune du lycée."],
      ["32-47 min", "Activité", "Joue les deux situations.", "Indique les bornes et réparateurs proches."],
      ["47-55 min", "Trace", "Choisit un objet à faire durer, répond à « Je vérifie ».", "Peut déboucher sur une collecte au lycée avec les éco-délégués."]
    ], vigilance: VIG }
  });

  S.push({
    id: "e3d-2nde-3", pilier: "e3d", niveau: "2nde", num: 3, duree: D,
    titre: "Mon assiette, mon eau, mon énergie",
    objectifCourt: "Gaspiller moins au quotidien",
    objectif: "Réduire le gaspillage alimentaire, comprendre les dates sur les produits, et adopter les gestes qui économisent le plus d'eau et d'énergie.",
    rappel: { seance: "e3d-2nde-2", texte: "Tu sais faire durer tes objets. Reste ce qu'on consomme chaque jour sans y penser : la nourriture, l'eau, l'énergie." },
    aqcms: {
      pourquoi: "Ce qu'on gaspille, on l'a payé. Moins gaspiller, c'est bon pour la planète et pour le porte-monnaie.",
      apport: "Des gestes simples qui font baisser les factures.",
      ou: "À la cantine, à la maison, plus tard dans mon logement.",
      lie: "Mon premier budget seul (EDUCFI Terminale, séance 3)."
    },
    accroche: "Un yaourt dont la date est dépassée de trois jours. Tu le manges ou tu le jettes ?",
    activites: [
      K.classer("Je mange ou je jette ?", "Deux dates différentes existent. « À consommer jusqu'au » : après, il y a un risque pour la santé. « À consommer de préférence avant » : après, le produit peut perdre du goût, mais reste consommable.", ["Je peux le manger", "Je ne prends pas de risque"], [
        ["Des pâtes, « de préférence avant » le mois dernier", "Je peux le manger"],
        ["Un yaourt, « à consommer jusqu'au » avant-hier, bien conservé au frais", "Je peux le manger", "Les yaourts se gardent en général quelques jours après la date, s'ils sont restés au frais et que l'opercule n'est pas gonflé."],
        ["De la viande hachée, « à consommer jusqu'au » avant-hier", "Je ne prends pas de risque"],
        ["Du poisson frais, date dépassée", "Je ne prends pas de risque"],
        ["Une boîte de conserve, « de préférence avant » il y a trois mois, non bombée", "Je peux le manger"],
        ["Du chocolat avec la date de préférence dépassée", "Je peux le manger"]
      ], "« À consommer jusqu'au » : je respecte la date. « De préférence avant » : je regarde, je sens, je goûte."),
      K.classer("Les gestes qui économisent le plus", "Quels gestes font le plus baisser la consommation d'eau et d'énergie ?", ["Grosse économie", "Petite économie"], [
        ["Baisser le chauffage d'un degré", "Grosse économie", "Le chauffage est le premier poste d'énergie d'un logement. Repère : 19 °C dans les pièces à vivre."],
        ["Une douche de cinq minutes plutôt qu'un bain", "Grosse économie", "L'eau chaude est le deuxième poste."],
        ["Laver le linge à 30 °C plutôt qu'à 60 °C", "Grosse économie"],
        ["Couvrir la casserole quand l'eau chauffe", "Petite économie"],
        ["Éteindre les appareils en veille", "Petite économie", "Utile sur l'année, surtout pour les consoles et les box."],
        ["Couper l'eau pendant le brossage des dents", "Petite économie"]
      ], "Chauffage et eau chaude : c'est là que se font les grosses économies."),
      { titre: "Mon défi anti-gaspi", moteur: "choisir", consigne: "Choisis deux défis pour cette semaine.",
        config: { cle: "e3d-defi-antigaspi", max: 2, min: 1, titre: "Défis", resume: "Mes défis de la semaine",
          cartes: [
            { nom: "Finir mon assiette à la cantine", ex: "Je demande une plus petite portion si besoin" },
            { nom: "Une gourde plutôt que des bouteilles", ex: "Tous les jours au lycée" },
            { nom: "Une douche de cinq minutes", ex: "Avec une chanson comme minuteur" },
            { nom: "Regarder les dates avant de jeter", ex: "« Jusqu'au » ou « de préférence avant » ?" },
            { nom: "Un pull plutôt qu'un degré de plus", ex: "À la maison" },
            { nom: "Cuisiner les restes", ex: "Une fois dans la semaine" }
          ] } }
    ],
    retenir: [
      "« À consommer jusqu'au » : je respecte la date. « De préférence avant » : je peux encore consommer.",
      "Chauffage et eau chaude sont les deux gros postes d'énergie d'un logement.",
      "Ce que je gaspille, je l'ai payé.",
      "Je me lance un défi simple, une semaine à la fois."
    ],
    ressource: { titre: "Gaspiller moins", intro: "Les dates, l'eau, l'énergie.", blocs: [
      { type: "tableau", titre: "Les deux dates", colonnes: ["Mention", "Ce que ça veut dire"], lignes: [
        ["À consommer jusqu'au…", "Date limite : après, risque pour la santé"], ["À consommer de préférence avant…", "Après, le produit reste consommable s'il est bien conservé"]
      ] },
      { type: "liste", titre: "Les gestes qui comptent à la maison", items: ["19 °C dans les pièces à vivre, moins dans les chambres", "Des douches courtes", "Le linge à 30 °C", "Les appareils éteints plutôt qu'en veille", "Les restes cuisinés ou congelés"] }
    ] },
    traces: [K.carnet("Mon défi de la semaine", "defi-antigaspi", "Mon défi, et ce que j'ai observé au bout d'une semaine.", [
      ["defi", "Mon défi"], ["bilan", "Au bout d'une semaine : ce qui a marché, ce qui a été difficile", true]
    ], true)],
    verifie: [
      vf("Un produit dont la date « de préférence avant » est dépassée doit être jeté.", false, "Il reste consommable s'il a été bien conservé."),
      qcm("Quel est le premier poste d'énergie d'un logement ?", ["L'éclairage", "Le chauffage", "La télévision"], 1, "Baisser d'un degré fait une vraie différence."),
      ouv("Cite deux gestes qui évitent le gaspillage alimentaire.", "Regarder les dates, cuisiner ou congeler les restes, se servir selon sa faim, faire une liste de courses.")
    ],
    plusLoin: [ADEME, lien("Ministère de la Transition écologique", "Gouvernement", "https://www.ecologie.gouv.fr", "Les politiques et les conseils officiels.")],
    passerelles: ["educfi-tle-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Le yaourt périmé de trois jours.", "Fait voter à main levée."],
      ["5-20 min", "Activité", "Trie : je mange ou je jette.", "Distingue bien les deux mentions."],
      ["20-35 min", "Activité", "Trie les gestes : grosse ou petite économie.", "Relie aux factures d'un futur logement."],
      ["35-47 min", "Activité", "Choisit deux défis.", "Peut lancer un défi de classe avec les éco-délégués."],
      ["47-55 min", "Trace", "Note son défi, répond à « Je vérifie ».", "Prévoit un retour sur les défis une semaine plus tard."]
    ], vigilance: VIG + "Sur l'alimentation, on ne commente jamais ce que mangent les élèves ou leurs familles." }
  });

  // =================================================================== PREMIÈRE
  S.push({
    id: "e3d-1re-1", pilier: "e3d", niveau: "1re", num: 1, duree: D,
    titre: "Agir au lycée",
    objectifCourt: "Éco-délégués, label E3D, mener un projet",
    objectif: "Connaître le rôle des éco-délégués et le label E3D, repérer ce qu'on peut améliorer dans son lycée et construire un petit projet réaliste.",
    rappel: { seance: "e3d-2nde-1", etiquette: "Revoir E3D Seconde, séance 1", texte: "En Seconde, tu as regardé ton impact à toi. Seul, on change peu de choses. À plusieurs, dans un lycée, on peut changer beaucoup." },
    aqcms: {
      pourquoi: "Un lycée consomme de l'énergie, de l'eau, de la nourriture et produit des déchets : c'est un terrain d'action à ta portée.",
      apport: "Mener un projet de A à Z, une compétence qui se valorise dans un CV.",
      ou: "Dans ma classe, à la cantine, à l'atelier, au conseil de la vie lycéenne.",
      lie: "Coopérer (CPS Première, séance 3) ; s'engager (CPS Terminale, séance 3)."
    },
    accroche: "Si tu pouvais changer une seule chose dans ce lycée pour qu'il gaspille moins, ce serait quoi ?",
    activites: [
      K.quiz("Les éco-délégués et le label E3D", "e3d-1re-1-eco", [
        vf("Chaque classe de lycée élit des éco-délégués.", true, "Ils proposent et animent des actions avec leurs camarades et les adultes."),
        vf("E3D veut dire « établissement en démarche de développement durable ».", true, "C'est un label de l'Éducation nationale, avec plusieurs niveaux."),
        vf("Le développement durable concerne seulement l'environnement.", false, "Il réunit trois dimensions : l'environnement, le social et l'économie. Les Nations unies l'ont traduit en 17 objectifs."),
        vf("Les éco-délégués doivent tout faire seuls.", false, "Ils entraînent les autres : un projet réussit quand il est porté par plusieurs.")
      ]),
      K.classer("Le diagnostic de mon lycée", "Où peut-on agir ? Range chaque constat dans le bon domaine.", ["Énergie", "Déchets", "Alimentation", "Mobilité", "Biodiversité"], [
        ["Les lumières restent allumées dans les salles vides", "Énergie"],
        ["Les ordinateurs de la salle informatique tournent toute la nuit", "Énergie"],
        ["Il n'y a pas de bac de tri dans les classes", "Déchets"],
        ["Les chutes de matériaux de l'atelier partent à la benne", "Déchets"],
        ["Beaucoup de pain est jeté à la cantine", "Alimentation"],
        ["Il n'y a pas d'abri à vélos", "Mobilité"],
        ["La cour est entièrement goudronnée", "Biodiversité"]
      ], "Un bon projet part d'un constat précis, observé dans le lycée."),
      K.quiz("Monter un projet", "e3d-1re-1-projet", [
        K.ordre("Remets les étapes d'un projet dans l'ordre.", ["Observer et mesurer le problème", "Choisir un objectif précis et réaliste", "Trouver des alliés : camarades, adultes, direction", "Agir et communiquer", "Mesurer le résultat et le faire savoir"],
          "Mesurer avant et après permet de montrer que l'action a servi : par exemple, peser le pain jeté pendant une semaine."),
        qcm("Lequel est un bon objectif ?", ["Sauver la planète", "Réduire d'un tiers le pain jeté à la cantine d'ici les vacances", "Sensibiliser tout le monde"], 1, "Un bon objectif est précis, mesurable et daté.")
      ])
    ],
    retenir: [
      "Chaque classe élit des éco-délégués, qui entraînent les autres.",
      "Le développement durable réunit l'environnement, le social et l'économie.",
      "Un projet part d'un constat mesuré et vise un objectif précis et daté.",
      "On mesure avant et après, et on fait connaître le résultat."
    ],
    ressource: { titre: "Monter un projet au lycée", intro: "La méthode en cinq étapes.", blocs: [
      { type: "etapes", titre: "Les cinq étapes", items: ["Observer et mesurer", "Fixer un objectif précis, mesurable, daté", "Trouver des alliés", "Agir et communiquer", "Mesurer le résultat et le faire savoir"] },
      { type: "tableau", titre: "Notre projet", colonnes: ["Question", "Notre réponse"], lignes: [["Le constat", ""], ["L'objectif", ""], ["Nos alliés", ""], ["Nos actions", ""], ["Comment on mesure", ""]] }
    ] },
    traces: [K.carnet("Mon idée de projet pour le lycée", "projet-lycee", "Un constat, un objectif, des alliés, une première action.", [
      ["constat", "Ce que j'ai observé"], ["objectif", "L'objectif précis et daté"], ["allies", "Les personnes à convaincre"], ["action", "La première action"]
    ], true)],
    verifie: [
      vf("Le label E3D récompense les établissements engagés dans une démarche de développement durable.", true, "Il comporte plusieurs niveaux."),
      qcm("Par quoi commence un projet ?", ["Par une affiche", "Par l'observation et la mesure du problème", "Par une réunion avec le proviseur"], 1, "Sans constat mesuré, impossible de montrer un progrès."),
      ouv("Donne un exemple d'objectif précis pour ton lycée.", "Par exemple : installer un bac de tri dans chaque classe avant janvier, ou réduire d'un tiers le pain jeté à la cantine.")
    ],
    plusLoin: [lien("Éducation au développement durable", "Éduscol", "https://eduscol.education.gouv.fr/1117/education-au-developpement-durable", "Le rôle des éco-délégués et le label E3D."), lien("Les 17 objectifs de développement durable", "Nations unies", "https://www.un.org/sustainabledevelopment/fr/", "Les objectifs mondiaux pour 2030.")],
    passerelles: ["cps-1re-3", "cps-tle-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Une seule chose à changer au lycée.", "Note toutes les idées."],
      ["5-17 min", "Activité", "Répond au vrai ou faux sur les éco-délégués et le label.", "Indique le niveau de label du lycée s'il en a un."],
      ["17-30 min", "Activité", "Range les constats par domaine.", "Fait ajouter des constats réels du lycée."],
      ["30-45 min", "Activité", "Remet les étapes d'un projet dans l'ordre.", "Insiste sur la mesure avant et après."],
      ["45-55 min", "Trace", "Écrit son idée de projet, répond à « Je vérifie ».", "Transmet les meilleures idées aux éco-délégués et au CVL."]
    ], vigilance: VIG }
  });

  S.push({
    id: "e3d-1re-2", pilier: "e3d", niveau: "1re", num: 2, duree: D,
    titre: "Mon métier et l'environnement",
    objectifCourt: "Les éco-gestes professionnels",
    objectif: "Repérer les impacts de son futur métier sur l'environnement et les gestes professionnels qui les réduisent : énergie, matières, déchets, numérique.",
    rappel: { seance: "e3d-1re-1", texte: "Tu as vu comment agir au lycée. En PFMP et dans ton futur métier, tes gestes professionnels comptent aussi, et les entreprises y sont de plus en plus attentives." },
    aqcms: {
      pourquoi: "Chaque métier consomme des ressources et produit des déchets. Les employeurs recherchent des jeunes qui savent y faire attention.",
      apport: "Des réflexes de professionnel, et un argument pour mes candidatures.",
      ou: "À l'atelier, en PFMP, dans mon futur emploi.",
      lie: "Ma sécurité au travail (Droits Seconde, séance 2) ; cybersécurité en stage (Cyber Terminale, séance 3)."
    },
    accroche: "En fin de journée d'atelier ou de stage, qu'est-ce qui part à la poubelle, et qu'est-ce qui reste allumé ?",
    activites: [
      K.classer("Les éco-gestes au travail", "Range chaque geste professionnel dans son domaine.", ["Énergie", "Matières", "Déchets", "Numérique"], [
        ["Éteindre les machines et les postes en fin de journée", "Énergie"],
        ["Régler le chauffage ou la climatisation de l'atelier sans excès", "Énergie"],
        ["Calculer ses quantités pour éviter les chutes", "Matières"],
        ["Réutiliser les chutes pour de petites pièces", "Matières"],
        ["Trier les déchets dans les bons bacs de l'entreprise", "Déchets"],
        ["Ne jamais vider un produit chimique dans l'évier", "Déchets", "Les déchets dangereux ont une filière spéciale."],
        ["Réparer un ordinateur plutôt que le remplacer", "Numérique"],
        ["Rapporter les appareils électroniques hors d'usage dans la filière de collecte", "Numérique"]
      ], "Un bon professionnel ne gaspille ni l'énergie, ni la matière, ni le matériel.", { parFiliere: {
        ciel: { cartes: K.cartes([
          ["CIEL · Prolonger la vie d'un ordinateur en ajoutant de la mémoire ou un disque", "Numérique", "Le reconditionnement évite la fabrication d'un appareil neuf."],
          ["CIEL · Éteindre les équipements réseau inutiles et régler la mise en veille des postes", "Énergie"],
          ["CIEL · Effacer les données puis envoyer le matériel hors d'usage dans la filière des déchets électroniques", "Déchets", "Avec un effacement sécurisé avant le départ du matériel."]
        ]) },
        securite: { cartes: K.cartes([
          ["Sécurité · Signaler pendant la ronde une fuite d'eau ou une lumière restée allumée", "Énergie", "L'agent de sécurité est souvent le premier à voir les gaspillages la nuit."],
          ["Sécurité · Alerter en cas de pollution ou de déversement de produit sur le site", "Déchets", "La protection de l'environnement fait partie de la prévention des risques."],
          ["Sécurité · Vérifier que les véhicules de service ne tournent pas à l'arrêt", "Énergie"]
        ]) }
      } }),
      K.quiz("Les déchets professionnels", "e3d-1re-2-dechets", [
        vf("Une entreprise est responsable de ses déchets jusqu'à leur traitement.", true, "Elle doit les trier et les confier à des filières autorisées."),
        vf("Les huiles, solvants, peintures et batteries peuvent aller dans la benne ordinaire.", false, "Ce sont des déchets dangereux : filière spéciale et protections pour les manipuler."),
        vf("Un pictogramme de danger sur un bidon m'indique aussi comment m'en débarrasser.", false, "Il indique le danger. Pour l'élimination, je suis la consigne de l'entreprise ou la fiche de données de sécurité."),
        vf("Bien ranger et étiqueter les produits évite le gaspillage et les accidents.", true, "Sécurité et environnement vont ensemble.")
      ]),
      K.scenario("Que fais-tu ?", "e3d-1re-2", [
        sit("Le bidon", "En fin de chantier, un collègue te dit de vider un reste de solvant dans le caniveau, « comme d'habitude ».", "Que fais-tu ?", [
          ["Je le fais, c'est lui qui connaît le métier.", false, "C'est une pollution, interdite, et l'entreprise comme la personne peuvent être sanctionnées."],
          ["Je demande où se trouve le bac des déchets dangereux, et j'en parle à mon tuteur si besoin.", true, "Oui : tu poses une question de professionnel."]
        ], "Les déchets dangereux ne vont jamais à l'égout ni dans la benne ordinaire."),
        sit("L'idée", "Tu remarques que les chutes de l'atelier pourraient servir pour les exercices des Secondes.", "Que fais-tu ?", [
          ["Je garde l'idée pour moi : je ne suis que stagiaire.", false, "Une bonne idée, bien présentée, est appréciée et te valorise."],
          ["Je la propose à mon tuteur ou à mon professeur, avec une estimation de ce qu'on économiserait.", true, "Oui : c'est exactement ce qu'on attend d'un futur professionnel."]
        ], "Proposer une amélioration, chiffres à l'appui, est une compétence professionnelle.")
      ])
    ],
    retenir: [
      "Chaque métier a des impacts : énergie, matières, déchets, numérique.",
      "Les déchets dangereux ont une filière spéciale.",
      "Réparer et faire durer le matériel est un geste professionnel.",
      "Proposer une amélioration, c'est une compétence à mettre en avant."
    ],
    ressource: { titre: "Les éco-gestes de mon métier", intro: "À relire avant une PFMP.", blocs: [
      { type: "tableau", titre: "Les quatre domaines", colonnes: ["Domaine", "Mon réflexe"], lignes: [
        ["Énergie", "J'éteins ce qui ne sert pas"], ["Matières", "Je calcule, je réutilise les chutes"], ["Déchets", "Je trie ; les déchets dangereux dans leur filière"], ["Numérique", "Je répare, je fais durer, je recycle"]
      ] },
      { type: "liste", titre: "À observer pendant ma PFMP", items: ["Comment l'entreprise trie-t-elle ses déchets ?", "Que deviennent les chutes et le matériel usagé ?", "Qui s'occupe de l'énergie et de l'environnement ?", "Quelle amélioration simple pourrais-je proposer ?"] }
    ] },
    traces: [K.carnet("Les éco-gestes de mon métier", "eco-gestes-metier", "Trois gestes professionnels de mon métier, et une idée à proposer.", [
      ["g1", "Un geste sur l'énergie ou les matières"], ["g2", "Un geste sur les déchets"], ["g3", "Un geste sur le matériel ou le numérique"], ["idee", "Une amélioration que je pourrais proposer en PFMP"]
    ], true)],
    verifie: [
      vf("Un reste de solvant peut être vidé dans l'évier s'il y en a peu.", false, "C'est un déchet dangereux : il suit une filière spéciale."),
      qcm("Que faire d'un ordinateur lent mais en état de marche ?", ["Le jeter", "Chercher à le réparer ou à le faire évoluer", "Le stocker dans un placard"], 1, "Faire durer évite la fabrication d'un appareil neuf."),
      ouv("Cite deux éco-gestes de ton futur métier.", "Selon le métier : éteindre les machines, calculer les quantités, trier les déchets, réparer le matériel, signaler les fuites.")
    ],
    plusLoin: [lien("Que faire de mes déchets ?", "ADEME", "https://quefairedemesdechets.ademe.fr", "Trouver la bonne filière pour chaque déchet."), lien("INRS", "Institut national de recherche et de sécurité", "https://www.inrs.fr", "Produits dangereux : étiquettes et précautions.")],
    passerelles: ["droits-2nde-2", "cyber-tle-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Ce qui part à la poubelle, ce qui reste allumé.", "S'appuie sur l'atelier du lycée."],
      ["5-22 min", "Activité", "Range les gestes par domaine (et ceux de sa filière).", "Fait ajouter les gestes propres à la spécialité."],
      ["22-34 min", "Activité", "Répond au vrai ou faux sur les déchets professionnels.", "Peut montrer une fiche de données de sécurité."],
      ["34-47 min", "Activité", "Joue les deux situations.", "Valorise la prise d'initiative."],
      ["47-55 min", "Trace", "Écrit les éco-gestes de son métier, répond à « Je vérifie ».", "À reprendre au retour de PFMP avec les observations."]
    ], vigilance: VIG + "La séance gagne à être menée avec le professeur d'enseignement professionnel, sans que ce soit obligatoire." }
  });

  S.push({
    id: "e3d-1re-3", pilier: "e3d", niveau: "1re", num: 3, duree: D,
    titre: "Vraiment vert ?",
    objectifCourt: "Reconnaître l'écoblanchiment, se fier aux bons labels",
    objectif: "Repérer les arguments écologiques trompeurs dans la publicité, connaître quelques labels fiables et savoir vérifier une promesse.",
    rappel: { seance: "cyber-1re-1", etiquette: "Lien avec Cyber", texte: "En Cyber, tu as appris à repérer la publicité déguisée des influenceurs. Même chose ici : « vert », « naturel », « éco-responsable »… tous les mots ne se valent pas." },
    aqcms: {
      pourquoi: "Les marques savent que l'écologie fait vendre : certaines promesses sont sincères, d'autres trompeuses.",
      apport: "Ne pas payer plus cher pour un argument vide, et reconnaître les vrais efforts.",
      ou: "En magasin, en ligne, devant une publicité.",
      lie: "Pourquoi je vois ça ? (Cyber Première, séance 1) ; consommer sans se faire piéger (EDUCFI Première, séance 2)."
    },
    accroche: "Un tee-shirt « éco-responsable », un emballage vert avec une feuille, un soda « neutre en carbone ». Lequel te convainc ? Pourquoi ?",
    activites: [
      K.classer("Preuve ou poudre aux yeux ?", "L'écoblanchiment (ou greenwashing), c'est faire croire qu'un produit est bon pour l'environnement sans le prouver.", ["Argument vérifiable", "Argument trompeur ou flou"], [
        ["« Fabriqué avec 60 % de coton recyclé, certifié par un organisme indépendant »", "Argument vérifiable"],
        ["« Respectueux de la planète »", "Argument trompeur ou flou", "Une formule générale, sans preuve, ne veut rien dire."],
        ["Un emballage vert avec une feuille dessinée", "Argument trompeur ou flou", "La couleur et les images ne prouvent rien."],
        ["Un produit portant l'Écolabel européen", "Argument vérifiable"],
        ["« 100 % naturel » sur un produit d'entretien", "Argument trompeur ou flou", "Naturel ne veut pas dire sans danger ni sans impact."],
        ["« Neutre en carbone », sans aucune explication", "Argument trompeur ou flou", "Depuis 2023, la loi impose de publier le bilan des émissions et la façon dont elles sont compensées."],
        ["L'indice de réparabilité affiché sur un téléphone", "Argument vérifiable"]
      ], "Je cherche un chiffre, une preuve, un label reconnu. Sans cela, ce n'est qu'un slogan."),
      K.quiz("Les labels", "e3d-1re-3-labels", [
        vf("Un label officiel est délivré après un contrôle par un organisme indépendant.", true, "C'est ce qui le distingue d'un logo inventé par la marque."),
        vf("Le logo « AB » ou la feuille verte européenne garantissent un produit issu de l'agriculture biologique.", true, "Ce sont des labels officiels."),
        vf("Le petit rond avec trois flèches (Triman) veut dire que le produit est recyclé.", false, "Il indique que le produit ou l'emballage doit être trié."),
        vf("Un logo vert créé par la marque elle-même vaut un label officiel.", false, "Rien ne prouve qu'il a été contrôlé.")
      ]),
      K.scenario("Je vérifie", "e3d-1re-3", [
        sit("Les baskets « vertes »", "Une marque lance des baskets « éco-conçues », 30 € plus cher que le modèle classique. La page parle de « matériaux responsables ».", "Que fais-tu avant d'acheter ?", [
          ["J'achète : c'est écrit, donc c'est vrai.", false, "« Responsable » ne veut rien dire sans précision."],
          ["Je cherche des preuves : quelle part de matière recyclée, quel label, où c'est fabriqué. Sinon, je garde mes 30 €.", true, "Oui. Et la paire la plus écologique reste souvent celle qu'on a déjà."]
        ], "Avant de payer plus cher pour un argument écologique, je cherche la preuve.")
      ])
    ],
    retenir: [
      "L'écoblanchiment, c'est une promesse écologique sans preuve.",
      "Je cherche un chiffre, une preuve, un label officiel.",
      "Vert, naturel, responsable : ces mots seuls ne garantissent rien.",
      "Le produit le plus écologique est souvent celui que je n'achète pas."
    ],
    ressource: { titre: "Vraiment vert ?", intro: "Trois questions et quelques labels.", blocs: [
      { type: "etapes", titre: "Trois questions devant une promesse écologique", items: ["Qu'est-ce qui est promis, précisément ?", "Où est la preuve : un chiffre, un label, un contrôle ?", "En ai-je besoin ?"] },
      { type: "tableau", titre: "Quelques repères", colonnes: ["Logo ou mention", "Ce que ça veut dire"], lignes: [
        ["Écolabel européen", "Impact réduit tout au long de la vie du produit, contrôlé"], ["AB, feuille verte européenne", "Agriculture biologique, contrôlée"],
        ["Triman", "Le produit ou l'emballage doit être trié"], ["Indice de réparabilité ou de durabilité", "Note sur 10, obligatoire sur plusieurs produits"], ["« Vert », « naturel », « responsable »", "Aucune garantie sans précision"]
      ] }
    ] },
    traces: [K.carnet("Ma publicité passée au crible", "pub-au-crible", "Une publicité « verte » analysée avec les trois questions.", [
      ["pub", "La publicité ou le produit"], ["promesse", "Ce qui est promis"], ["preuve", "La preuve que j'ai trouvée (ou pas)"], ["verdict", "Mon verdict"]
    ], true)],
    verifie: [
      qcm("Qu'est-ce que l'écoblanchiment ?", ["Un produit de nettoyage écologique", "Une promesse écologique sans preuve", "Un label officiel"], 1, "On dit aussi greenwashing."),
      vf("Un emballage vert prouve que le produit est écologique.", false, "La couleur ne prouve rien."),
      ouv("Que cherches-tu pour vérifier une promesse écologique ?", "Un chiffre précis, une preuve, un label officiel contrôlé par un organisme indépendant.")
    ],
    plusLoin: [ADEME, lien("SignalConso", "DGCCRF", "https://signal.conso.gouv.fr", "Signaler une publicité ou une mention trompeuse.")],
    passerelles: ["cyber-1re-1", "educfi-1re-2"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Trois produits « verts » : lequel convainc ?", "Utilise des exemples inventés, sans marque réelle."],
      ["5-22 min", "Activité", "Trie les arguments : vérifiables ou trompeurs.", "Nomme l'écoblanchiment."],
      ["22-35 min", "Activité", "Répond au vrai ou faux sur les labels.", "Montre les logos officiels."],
      ["35-45 min", "Activité", "Joue la situation des baskets.", "Relie au budget et aux techniques de vente."],
      ["45-55 min", "Trace", "Analyse une publicité, répond à « Je vérifie ».", "Peut donner l'analyse à faire chez soi."]
    ], vigilance: VIG + "On ne cite aucune marque réelle comme exemple de tromperie." }
  });

  // =================================================================== TERMINALE
  S.push({
    id: "e3d-tle-1", pilier: "e3d", niveau: "tle", num: 1, duree: D,
    titre: "Climat : comprendre les enjeux",
    objectifCourt: "Ce que dit la science, sans panique ni déni",
    objectif: "Comprendre les mécanismes du réchauffement climatique, distinguer atténuation et adaptation, et reconnaître les idées reçues.",
    rappel: { seance: "e3d-2nde-1", etiquette: "Revoir E3D Seconde, séance 1", texte: "En Seconde, tu as mesuré ton empreinte. Aujourd'hui, on prend de la hauteur : que se passe-t-il pour le climat, et que peut-on encore faire ?" },
    aqcms: {
      pourquoi: "Sur le climat, on entend tout et son contraire. Comprendre évite la panique comme le déni.",
      apport: "Des repères solides pour me faire mon avis et en discuter.",
      ou: "Dans les médias, dans les débats, dans mes choix de citoyen.",
      lie: "Vrai, faux ou généré ? (Cyber Terminale, séance 1) ; agir de manière responsable (CPS Terminale, séance 2)."
    },
    accroche: "« Il a fait froid cet hiver, donc le réchauffement, c'est exagéré. » Que réponds-tu ?",
    activites: [
      K.quiz("Ce que dit la science", "e3d-tle-1-science", [
        vf("L'effet de serre est un phénomène naturel, sans lequel la Terre serait glacée.", true, "Le problème vient de son renforcement par les gaz émis par les activités humaines."),
        vf("Les scientifiques sont partagés sur la cause du réchauffement actuel.", false, "Le GIEC, qui rassemble les travaux de milliers de chercheurs, conclut que les activités humaines en sont la cause, sans équivoque."),
        vf("La météo d'une semaine et le climat, c'est la même chose.", false, "La météo décrit le temps qu'il fait sur quelques jours ; le climat, des moyennes sur des dizaines d'années."),
        vf("Chaque dixième de degré de réchauffement évité compte.", true, "Les effets s'aggravent avec chaque hausse : il n'est jamais « trop tard » pour limiter."),
        vf("Les émissions mondiales viennent surtout de l'utilisation du charbon, du pétrole et du gaz.", true, "Mais aussi de l'agriculture et de la déforestation.")
      ]),
      K.classer("Atténuer ou s'adapter ?", "Atténuer, c'est réduire les émissions pour limiter le réchauffement. S'adapter, c'est se préparer à ses effets. Les deux sont nécessaires.", ["Atténuation", "Adaptation"], [
        ["Isoler les logements pour moins chauffer", "Atténuation"],
        ["Développer le train et le vélo", "Atténuation"],
        ["Produire de l'électricité sans charbon ni gaz", "Atténuation"],
        ["Planter des arbres en ville pour rafraîchir les rues", "Adaptation"],
        ["Adapter les horaires de chantier pendant les canicules", "Adaptation", "Le climat change aussi les conditions de travail."],
        ["Construire hors des zones inondables", "Adaptation"],
        ["Faire durer les objets au lieu d'en fabriquer de nouveaux", "Atténuation"]
      ], "On réduit les émissions et on se prépare : l'un ne remplace pas l'autre."),
      { titre: "Idées reçues", moteur: "debat", consigne: "Place-toi, écoute les arguments, puis replace-toi.",
        config: { affirmations: [
          { texte: "À mon échelle, je ne peux rien y faire.", repere: "Les gestes individuels ne suffisent pas, mais ils comptent, et ils entraînent les autres. Les choix collectifs (entreprises, villes, lois) dépendent aussi des citoyens." },
          { texte: "La technologie réglera le problème toute seule.", repere: "Elle aide beaucoup (énergies renouvelables, isolation), mais ne suffit pas sans changement des usages." },
          { texte: "C'est trop tard, autant ne rien faire.", repere: "Chaque dixième de degré évité réduit les dégâts. Le découragement est compréhensible, mais agir aide aussi à se sentir mieux." }
        ] } }
    ],
    retenir: [
      "Le réchauffement actuel est causé par les activités humaines : c'est un consensus scientifique.",
      "Météo et climat ne sont pas la même chose.",
      "Atténuer (réduire les émissions) et s'adapter (se préparer) : il faut les deux.",
      "Chaque dixième de degré évité compte."
    ],
    ressource: { titre: "Climat : les repères", intro: "L'essentiel en une page.", blocs: [
      { type: "tableau", titre: "Les mots", colonnes: ["Mot", "Ce que ça veut dire"], lignes: [
        ["Effet de serre", "Des gaz retiennent la chaleur ; les activités humaines le renforcent"], ["GIEC", "Groupe d'experts qui fait la synthèse des connaissances scientifiques sur le climat"],
        ["Atténuation", "Réduire les émissions"], ["Adaptation", "Se préparer aux effets"], ["Neutralité carbone", "Ne pas émettre plus que ce que la nature et les techniques peuvent absorber"]
      ] },
      { type: "liste", titre: "Pour répondre aux idées reçues", items: ["« Il a fait froid » : la météo n'est pas le climat", "« Les scientifiques ne sont pas d'accord » : le consensus est établi", "« C'est trop tard » : chaque dixième de degré compte"] }
    ] },
    traces: [K.carnet("Ce que j'ai compris du climat", "compris-climat", "Trois idées que je retiens, et une question que je me pose encore.", [
      ["idees", "Trois idées que je retiens", true], ["question", "Une question que je me pose encore"]
    ], true)],
    verifie: [
      vf("Un hiver froid prouve que le climat ne se réchauffe pas.", false, "La météo d'une saison ne dit rien de la tendance sur des dizaines d'années."),
      qcm("Planter des arbres en ville pour rafraîchir les rues, c'est…", ["De l'atténuation", "De l'adaptation", "Ni l'un ni l'autre"], 1, "On se prépare aux effets du réchauffement."),
      ouv("Qu'est-ce que le GIEC ?", "Un groupe international d'experts qui fait la synthèse des connaissances scientifiques sur le climat.")
    ],
    plusLoin: [lien("Ministère de la Transition écologique", "Gouvernement", "https://www.ecologie.gouv.fr", "Comprendre le changement climatique et les politiques menées."), NGC],
    passerelles: ["cyber-tle-1", "cps-tle-2"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "« Il a fait froid cet hiver… »", "Distingue météo et climat."],
      ["5-20 min", "Activité", "Répond au vrai ou faux sur la science.", "S'appuie sur le consensus scientifique, sans débat d'opinion sur les faits."],
      ["20-33 min", "Activité", "Trie : atténuation ou adaptation.", "Relie aux métiers des élèves (canicules, chantiers)."],
      ["33-48 min", "Activité", "Débat sur trois idées reçues.", "Accueille l'inquiétude : l'écoanxiété existe, et agir aide."],
      ["48-55 min", "Trace", "Écrit ce qu'il a compris, répond à « Je vérifie ».", "Oriente vers l'infirmière un élève très angoissé."]
    ], vigilance: VIG + "Les faits scientifiques ne sont pas soumis au débat ; les solutions politiques, elles, relèvent du choix des citoyens : on reste neutre sur ces choix." }
  });

  S.push({
    id: "e3d-tle-2", pilier: "e3d", niveau: "tle", num: 2, duree: D,
    titre: "Les métiers de la transition",
    objectifCourt: "Mes compétences vertes, un atout pour l'emploi",
    objectif: "Découvrir comment la transition écologique transforme les métiers, repérer ses propres compétences « vertes » et savoir les présenter à un employeur.",
    rappel: { seance: "e3d-1re-2", etiquette: "Revoir E3D Première, séance 2", texte: "En Première, tu as listé les éco-gestes de ton métier. Ces gestes sont des compétences : elles comptent dans une candidature." },
    aqcms: {
      pourquoi: "Rénovation, énergie, réparation, numérique responsable : la transition crée des emplois et change presque tous les métiers.",
      apport: "Des arguments concrets pour mon CV, ma lettre et mon entretien.",
      ou: "Dans mes candidatures, à l'oral de projet, en entretien.",
      lie: "Mon CV et ma lettre (Orientation Terminale, séance 1) ; réussir un entretien (Orientation Terminale, séance 3)."
    },
    accroche: "Un recruteur te demande : « Chez nous, on fait attention à l'environnement. Et vous, qu'est-ce que vous savez faire dans ce domaine ? » Tu réponds quoi ?",
    activites: [
      K.classer("Des métiers qui changent", "La transition crée des métiers et en transforme beaucoup d'autres. Range chaque exemple.", ["Un métier qui se développe", "Un métier qui se transforme"], [
        ["Technicien de maintenance en reconditionnement d'appareils électroniques", "Un métier qui se développe"],
        ["Installateur de panneaux solaires ou de pompes à chaleur", "Un métier qui se développe"],
        ["Réparateur de vélos et de trottinettes électriques", "Un métier qui se développe"],
        ["Électricien, qui installe désormais des bornes de recharge", "Un métier qui se transforme"],
        ["Agent de sécurité, formé aux risques d'incendie des batteries", "Un métier qui se transforme"],
        ["Technicien réseau, qui optimise la consommation d'énergie des équipements", "Un métier qui se transforme"],
        ["Mécanicien automobile, qui entretient des véhicules électriques", "Un métier qui se transforme"]
      ], "Presque tous les métiers intègrent de nouveaux gestes : c'est une chance pour ceux qui les connaissent déjà."),
      { titre: "Mes compétences vertes", moteur: "choisir", consigne: "Coche ce que tu sais déjà faire, grâce à l'atelier, aux PFMP ou à ta vie personnelle.",
        config: { cle: "e3d-competences-vertes", max: 8, min: 1, titre: "Compétences", resume: "Mes compétences vertes",
          cartes: [
            { nom: "Trier les déchets d'un chantier ou d'un atelier", ex: "Y compris les déchets dangereux" },
            { nom: "Réparer plutôt que remplacer", ex: "Diagnostiquer une panne, changer une pièce" },
            { nom: "Économiser l'énergie à mon poste", ex: "Éteindre, régler, signaler" },
            { nom: "Éviter le gaspillage de matière", ex: "Calculer les quantités, réutiliser les chutes" },
            { nom: "Lire une étiquette ou une fiche de produit", ex: "Pictogrammes de danger, consignes" },
            { nom: "Proposer une amélioration", ex: "Avec des chiffres à l'appui" },
            { nom: "Mener un projet collectif", ex: "Éco-délégué, action au lycée" },
            { nom: "Expliquer un geste à quelqu'un", ex: "Former un camarade, un client" }
          ] } },
      K.scenario("En entretien", "e3d-tle-2", [
        sit("La question du recruteur", "« Et vous, qu'est-ce que vous savez faire pour l'environnement ? »", "Quelle réponse est la plus convaincante ?", [
          ["« Je trie mes déchets à la maison. »", false, "C'est bien, mais le recruteur attend un exemple professionnel."],
          ["« En PFMP, j'ai proposé de réutiliser les chutes pour les petites pièces : on a réduit la benne d'environ un quart. »", true, "Oui : un fait, un contexte, un résultat."],
          ["« L'écologie, c'est très important pour moi. »", false, "Une opinion ne prouve pas une compétence."]
        ], "En entretien, une compétence se prouve par un exemple : la situation, ce que j'ai fait, le résultat.")
      ])
    ],
    retenir: [
      "La transition écologique crée des métiers et en transforme beaucoup d'autres.",
      "Mes éco-gestes professionnels sont des compétences.",
      "Je les prouve par un exemple : la situation, ce que j'ai fait, le résultat.",
      "Elles ont leur place dans mon CV, ma lettre et mon entretien."
    ],
    ressource: { titre: "Mes compétences vertes", intro: "Les repérer et les présenter.", blocs: [
      { type: "etapes", titre: "Présenter une compétence", items: ["La situation : où, quand", "Ce que j'ai fait, précisément", "Le résultat, si possible avec un chiffre", "Ce que j'en ai appris"] },
      { type: "liste", titre: "Où les placer", items: ["Dans la rubrique « Compétences » du CV", "Dans une phrase de la lettre de motivation", "En réponse à une question d'entretien", "À l'oral de projet"] }
    ] },
    traces: [K.carnet("Ma compétence verte, prouvée", "competence-verte", "Un exemple prêt pour le CV, la lettre ou l'entretien.", [
      ["situation", "La situation"], ["action", "Ce que j'ai fait"], ["resultat", "Le résultat"], ["phrase", "La phrase pour mon CV ou ma lettre"]
    ], true)],
    verifie: [
      vf("La transition écologique ne concerne que quelques métiers spécialisés.", false, "Elle transforme presque tous les métiers."),
      qcm("Quelle réponse convainc le plus un recruteur ?", ["Une opinion", "Un exemple précis avec un résultat", "Une promesse"], 1, "Une compétence se prouve."),
      ouv("Donne un exemple de compétence verte de ton métier.", "Selon le métier : trier les déchets, réparer le matériel, optimiser la consommation d'énergie, éviter le gaspillage de matière.")
    ],
    plusLoin: [lien("Onisep", "Office national d'information sur les enseignements et les professions", "https://www.onisep.fr", "Les métiers de la transition écologique et les formations."), lien("France Travail", "Service public de l'emploi", "https://www.francetravail.fr", "Les offres et les métiers qui recrutent.")],
    passerelles: ["orientation-tle-1", "orientation-tle-3"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "La question du recruteur.", "Recueille les premières réponses."],
      ["5-18 min", "Activité", "Range les métiers : se développe ou se transforme.", "Ajoute des exemples de la spécialité."],
      ["18-30 min", "Activité", "Coche ses compétences vertes.", "Aide chacun à en trouver au moins deux."],
      ["30-42 min", "Activité", "Choisit la meilleure réponse d'entretien.", "Rappelle la méthode : situation, action, résultat."],
      ["42-55 min", "Trace", "Rédige sa compétence prouvée, répond à « Je vérifie ».", "À réutiliser dans le CV travaillé en Orientation."]
    ], vigilance: VIG }
  });

  S.push({
    id: "e3d-tle-3", pilier: "e3d", niveau: "tle", num: 3, duree: D,
    titre: "M'engager, et le bilan",
    objectifCourt: "Agir à plusieurs échelles ; le bilan des trois ans",
    objectif: "Connaître les façons de s'engager pour l'environnement, seul et avec d'autres, choisir la sienne, puis faire le bilan des trois années du pilier E3D.",
    rappel: { seance: "e3d-tle-1", texte: "Tu as compris les enjeux du climat. Reste la question la plus personnelle : et moi, qu'est-ce que je fais de tout ça ?" },
    aqcms: {
      pourquoi: "S'engager, même un peu, aide à ne pas subir, et pèse plus qu'on ne le croit.",
      apport: "Trouver la forme d'action qui me correspond, sans pression.",
      ou: "Dans ma vie quotidienne, mon métier, ma commune, mes choix de citoyen.",
      lie: "S'engager (CPS Terminale, séance 3) ; majeur : ce qui change à 18 ans (Droits Terminale, séance 1)."
    },
    accroche: "Trier ses déchets, convaincre son entreprise de changer ses pratiques, voter : lequel de ces gestes pèse le plus ? Et lequel te ressemble ?",
    activites: [
      K.classer("Trois échelles d'action", "On peut agir seul, avec d'autres, ou comme citoyen. Range chaque action.", ["Seul", "Avec d'autres", "Comme citoyen"], [
        ["Garder mon téléphone longtemps", "Seul"],
        ["Aller au travail à vélo ou en covoiturage", "Seul"],
        ["Proposer une amélioration dans mon entreprise", "Avec d'autres"],
        ["Rejoindre une association de ma commune", "Avec d'autres"],
        ["Participer à un chantier de nettoyage ou de plantation", "Avec d'autres"],
        ["Voter et m'informer sur les projets de ma commune", "Comme citoyen"],
        ["Participer à une consultation publique sur un projet local", "Comme citoyen"]
      ], "Les trois échelles se complètent : aucune n'est obligatoire, toutes comptent."),
      { titre: "Mon engagement", moteur: "choisir", consigne: "Choisis une ou deux façons d'agir qui te ressemblent. Il n'y a pas de mauvaise réponse.",
        config: { cle: "e3d-engagement", max: 2, min: 1, titre: "Engagements", resume: "Mon engagement",
          cartes: [
            { nom: "Mes gestes du quotidien", ex: "Déplacements, alimentation, achats" },
            { nom: "Mon métier", ex: "Être le professionnel qui fait attention et qui propose" },
            { nom: "Une association", ex: "Près de chez moi, quelques heures par mois" },
            { nom: "Un service civique", ex: "De 6 à 12 mois, indemnisé, entre 16 et 25 ans, dans l'environnement ou ailleurs" },
            { nom: "Ma voix de citoyen", ex: "M'informer, voter, participer aux consultations" },
            { nom: "Transmettre", ex: "Expliquer à mes proches ce que j'ai appris" }
          ] } },
      { titre: "Bilan du pilier E3D", moteur: "jauges", consigne: "Trois ans d'E3D : où en es-tu ? Tes réponses restent sur ton appareil.",
        config: { id: "bilan-e3d", cle: "bilan-e3d", bornes: ["Je débute", "Je maîtrise"],
          items: ["Connaître ce qui pèse dans mon empreinte", "Faire durer mes objets et bien trier", "Gaspiller moins", "Mener un projet au lycée", "Appliquer les éco-gestes de mon métier", "Repérer l'écoblanchiment", "Expliquer les enjeux du climat", "Présenter mes compétences vertes"],
          note: "Ce bilan rejoindra ton passeport de compétences." } }
    ],
    retenir: [
      "On peut agir seul, avec d'autres, et comme citoyen : les trois se complètent.",
      "Mon métier est un levier d'action.",
      "Un engagement choisi tient plus longtemps qu'un engagement subi.",
      "Agir aide aussi à ne pas se décourager."
    ],
    ressource: { titre: "M'engager", intro: "Des pistes concrètes.", blocs: [
      { type: "tableau", titre: "Trois échelles", colonnes: ["Échelle", "Exemples"], lignes: [
        ["Seul", "Déplacements, alimentation, achats, durée de vie des objets"], ["Avec d'autres", "Entreprise, association, chantier collectif"], ["Comme citoyen", "S'informer, voter, participer aux consultations"]
      ] },
      { type: "texte", titre: "Le service civique", texte: "Un engagement volontaire de 6 à 12 mois, indemnisé, ouvert de 16 à 25 ans (30 ans en situation de handicap), dans une association ou un service public, notamment dans le domaine de l'environnement." }
    ] },
    traces: [K.carnet("Mon bilan E3D", "bilan-e3d-texte", "Ce que je retiens de trois ans d'E3D, et l'engagement que je choisis.", [
      ["retiens", "Ce que je retiens de ces trois années", true], ["engagement", "L'engagement que je choisis"], ["premier", "Mon premier pas"]
    ])],
    verifie: [
      vf("Seuls les gestes individuels comptent pour l'environnement.", false, "Les actions collectives et les choix de citoyens comptent aussi."),
      qcm("Le service civique est ouvert…", ["De 16 à 25 ans", "Seulement aux étudiants", "À partir de 25 ans"], 0, "Et jusqu'à 30 ans en situation de handicap."),
      ouv("Cite une action à chacune des trois échelles.", "Seul : garder mon téléphone longtemps. Avec d'autres : proposer une amélioration au travail. Comme citoyen : m'informer et voter.")
    ],
    plusLoin: [lien("Service civique", "Agence du service civique", "https://www.service-civique.gouv.fr", "Trouver une mission, notamment dans l'environnement."), ADEME],
    passerelles: ["cps-tle-3", "droits-tle-1"],
    adulte: { deroule: [
      ["0-5 min", "Accroche", "Quel geste pèse le plus ? Lequel te ressemble ?", "Laisse la question ouverte."],
      ["5-20 min", "Activité", "Range les actions selon l'échelle.", "Montre que les échelles se complètent."],
      ["20-32 min", "Activité", "Choisit son engagement.", "Aucune réponse n'est meilleure qu'une autre."],
      ["32-45 min", "Bilan", "Se positionne sur les compétences des trois ans.", "Relie au passeport de compétences."],
      ["45-55 min", "Trace", "Écrit son bilan et son premier pas, répond à « Je vérifie ».", "Reste neutre sur les choix politiques."]
    ], vigilance: VIG + "Neutralité : on présente les formes d'engagement sans en recommander une, et sans commentaire sur les partis ou les mouvements." }
  });
})();
