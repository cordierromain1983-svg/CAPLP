/*
 * PILIER ORIENTATION · TERMINALE (« Moi et le monde »)
 * Contenu validé (document « Cap'Autonomie – Orientation Terminale »).
 * Trois séances de 55 minutes : Mon CV et ma lettre (octobre), Mes candidatures (janvier),
 * Réussir un entretien et préparer l'oral de projet (avril-mai).
 * Calendrier 2026-2027 vérifié sur l'Onisep : vœux Parcoursup du 18 janvier au 11 mars 2027,
 * pièces avant le 1er avril, premières propositions le 1er juin, écrits du bac pro du 3 au 15 juin,
 * oral de projet à partir du 21 juin 2027.
 * Ressources vérifiées le 1er novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var DUREE = "55 min";

  // ===================================================================
  // SÉANCE 1 · Mon CV et ma lettre
  // ===================================================================
  S.push({
    id: "orientation-tle-1", pilier: "orientation", niveau: "tle", num: 1, duree: DUREE,
    titre: "Mon CV et ma lettre",
    objectifCourt: "Un CV d'une page, une lettre en trois temps",
    objectif: "Rédiger un CV d'une page et une lettre type adaptable, à partir de ce que j'ai déjà produit depuis la Seconde, en parlant de compétences plutôt que de tâches.",
    rappel: { seance: "orientation-1re-3", texte: "En fin de Première, tu as choisi une direction pour la Terminale. Elle est maintenant officielle. Pour avancer, il te faut deux papiers : un CV et une lettre. Bonne nouvelle : tu as déjà presque tout écrit." },
    aqcms: {
      pourquoi: "Un recruteur passe très peu de temps sur un CV. Un CV clair, avec des preuves, fait la différence, même pour un premier emploi.",
      apport: "Un CV prêt à imprimer et une lettre en trois paragraphes, réutilisables pour l'emploi, l'alternance et les formations qui demandent une lettre.",
      ou: "Candidatures d'emploi et d'alternance, Parcoursup quand une lettre est demandée, stage du parcours personnalisé.",
      lie: "Mon identité numérique pro et ma charte IA (Cyber Terminale, séances 1 et 2), le CV de mes réussites (CPS Seconde, séance 3), mes engagements (CPS Terminale, séance 3)."
    },
    accroche: "Deux CV de Sami, élève inventé déjà croisé en Cyber. CV A : « Stage chez Électro+, j'ai aidé le technicien. Qualités : motivé, dynamique. » CV B : « Stage de 5 semaines chez Électro+ : diagnostic et remplacement de cartes sur 15 appareils, accueil des clients au comptoir. Ponctuel et calme, relevé par mon tuteur. » Lequel appellerais-tu, et pourquoi ?",
    activites: [{
      titre: "Ce que j'ai déjà", moteur: "carnet",
      consigne: "Depuis la Seconde, tu as déjà écrit beaucoup de choses sur toi. Relis-les et note ce que tu gardes pour ton CV.",
      config: {
        cle: "cv-repris", titreDoc: "Ce que je garde pour mon CV",
        afficher: {
          titre: "Ce que tu as déjà écrit",
          sources: ["portrait-orientation", "bilan-stage", "cv-reussites", "mes-engagements", "profil-pro"],
          vide: "Tu n'as encore rien noté dans ces outils. Ce n'est pas grave : écris directement ici."
        },
        champs: [
          { id: "garde", label: "Ce que je garde pour mon CV (expériences, qualités prouvées, engagements)", multi: true }
        ]
      }
    }, {
      titre: "Des compétences, pas des tâches", moteur: "reformuler",
      consigne: "Transforme chaque phrase faible en phrase de CV : un verbe précis, un chiffre ou un contexte, et ce que ça montre.",
      config: {
        textes: { etiquette: "Phrase", depart: "Phrase faible", message: "Ma phrase de CV", suivant: "Phrase suivante", fin: "Tes phrases de CV sont prêtes : reprends les meilleures dans ton CV." },
        items: [
          { reproche: "J'ai aidé le technicien.", exemple: "J'ai diagnostiqué et remplacé des cartes électroniques sur 15 appareils, avec mon tuteur, ce qui montre que je sais travailler avec méthode." },
          { reproche: "J'ai fait des rondes.", exemple: "J'ai effectué les rondes de sécurité incendie d'un centre commercial et rempli la main courante chaque jour, ce qui montre que je suis rigoureux." },
          { reproche: "J'ai fait du câblage.", exemple: "J'ai câblé et testé le réseau de 12 postes d'une école, en binôme, ce qui montre que je sais travailler en équipe." },
          { reproche: "J'ai surveillé l'entrée.", exemple: "J'ai assuré le contrôle d'accès d'une salle de 800 personnes pendant un concert, ce qui montre que je reste calme face au public." }
        ],
        champs: [
          { id: "fait", label: "J'ai… (verbe précis, quoi, combien, où)" },
          { id: "montre", label: "ce qui montre que je sais / je suis…" }
        ],
        gabarit: "J'ai {fait}, ce qui montre que {montre}.",
        alertes: [
          { motif: "aidé|un peu|des trucs|etc\\.|motivé|dynamique", conseil: "Remplace ce mot par un fait précis : quoi, combien, avec quel résultat." }
        ]
      }
    }],
    retenir: [
      "Un bon CV tient sur une page et donne des preuves : un verbe précis, un chiffre, un contexte.",
      "Mes qualités sont plus crédibles quand quelqu'un d'autre les a remarquées.",
      "Une lettre se construit en trois temps : vous, moi, nous.",
      "J'adapte au moins le premier paragraphe à chaque destinataire."
    ],
    ressource: {
      titre: "CV et lettre : l'essentiel",
      intro: "Une fiche à garder à côté de toi quand tu rédiges.",
      blocs: [
        { type: "tableau", titre: "Des phrases faibles aux phrases fortes", colonnes: ["Phrase faible", "Phrase forte"], lignes: [
          ["J'ai aidé le technicien", "J'ai diagnostiqué et remplacé des cartes sur 15 appareils"],
          ["J'ai fait des rondes", "J'ai effectué les rondes de sécurité incendie et tenu la main courante"],
          ["J'ai fait du câblage", "J'ai câblé et testé le réseau de 12 postes"],
          ["Motivé et dynamique", "Ponctuel et calme, relevé par mon tuteur"],
          ["J'ai fait de l'accueil", "J'ai accueilli une trentaine de clients par jour au comptoir"],
          ["Je suis sérieux", "Aucun retard pendant mes 5 semaines de stage"]
        ] },
        { type: "liste", titre: "La check-list du CV", items: ["Une page, pas plus", "Une ligne en haut : ce que je recherche", "Une adresse mail sobre (prénom.nom)", "Des expériences avec des preuves", "Aucune faute : je fais relire", "Pas de photo obligatoire", "Le numéro de téléphone s'ajoute sur le papier"] },
        { type: "etapes", titre: "La lettre Vous – Moi – Nous", items: ["Vous : ce que je sais de votre entreprise ou de votre formation, et pourquoi vous", "Moi : ce que j'apporte, avec une preuve tirée de mon CV", "Nous : ce que je propose (une rencontre, un stage, une période d'essai)"] }
      ]
    },
    traces: [{
      titre: "Mon CV", moteur: "carnet",
      outil: { id: "mon-cv", nom: "Mon CV", description: "Mon CV d'une page, prêt à imprimer." },
      config: {
        cle: "mon-cv", titreDoc: "Curriculum vitae",
        intro: "Dans l'appli : prénom, nom, ville et adresse mail sobre seulement. Ton numéro de téléphone s'ajoute à la main, sur le papier.",
        champs: [
          { id: "identite", label: "Prénom, nom, ville, adresse mail" },
          { id: "recherche", label: "Ce que je recherche (une ligne)", placeholder: "Ex. : Titulaire d'un bac pro CIEL, je recherche une alternance en BTS CIEL" },
          { id: "formation", label: "Formation", multi: true },
          { id: "experiences", label: "Expériences (PFMP, jobs, bénévolat), avec une phrase de compétence chacune", multi: true },
          { id: "competences", label: "Compétences techniques", multi: true },
          { id: "qualites", label: "Qualités prouvées", multi: true },
          { id: "certificats", label: "Certificats obtenus (secourisme, habilitations…)", multi: true },
          { id: "interets", label: "Centres d'intérêt utiles", multi: true }
        ]
      }
    }, {
      titre: "Ma lettre type", moteur: "carnet",
      outil: { id: "lettre-type", nom: "Ma lettre type", description: "Ma lettre en trois paragraphes, à adapter à chaque destinataire." },
      config: {
        cle: "lettre-type", titreDoc: "Lettre de motivation",
        intro: "Une lettre écrite par une IA se repère vite. Si tu t'en sers, garde tes propres exemples et relis tout (voir ta charte IA).",
        champs: [
          { id: "vous", label: "Vous : ce que je sais de vous, et pourquoi vous", multi: true },
          { id: "moi", label: "Moi : ce que j'apporte, avec une preuve", multi: true },
          { id: "nous", label: "Nous : ce que je propose", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Un CV de deux pages montre plus de motivation.", bonne: false, explication: "Pour un premier emploi, une page claire vaut mieux." },
      { type: "vf", enonce: "« Motivé et dynamique » suffit comme qualité.", bonne: false, explication: "Sans preuve, ces mots ne disent rien. Donne un fait." },
      { type: "vf", enonce: "Je peux citer une remarque positive de mon tuteur.", bonne: true, explication: "Une qualité remarquée par un professionnel est très crédible." },
      { type: "vf", enonce: "La même lettre peut partir telle quelle à dix entreprises.", bonne: false, explication: "J'adapte au moins le premier paragraphe : « Vous »." }
    ],
    plusLoin: [
      { titre: "Premier job : mode d'emploi", source: "France Travail", url: "https://www.francetravail.fr/candidat/vos-recherches/bien-vous-organiser/premier-job--mode-demploi.html", description: "Cinq étapes et cinq erreurs à éviter, lecture sans compte." },
      { titre: "Créer son CV Europass", source: "Union européenne", url: "https://europass.europa.eu/fr/create-your-europass-cv", description: "Le modèle européen, utile pour un stage ou un emploi à l'étranger. Il faut créer un profil : à faire chez toi, si tu le souhaites." },
      { titre: "Tous les quiz de l'Onisep", source: "Onisep", url: "https://www.onisep.fr/metier/les-quiz-de-l-onisep", description: "Métiers, voie pro, études." }
    ],
    passerelles: ["cyber-tle-2", "cyber-tle-1", "cps-2nde-3", "cps-tle-3"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Compare les deux CV de Sami.", "Fait nommer ce qui rend le CV B convaincant."],
        ["5-13 min", "Activité", "Relit ce qu'il a déjà écrit et note ce qu'il garde.", "Si les outils sont vides, l'élève écrit directement."],
        ["13-25 min", "Activité", "Transforme quatre phrases faibles en phrases de CV.", "Valorise les chiffres et les contextes."],
        ["25-40 min", "Trace", "Rédige son CV.", "Rappelle : une page, pas de numéro de téléphone dans l'appli."],
        ["40-50 min", "Trace", "Rédige sa lettre type Vous – Moi – Nous.", "Rappelle la charte IA."],
        ["50-55 min", "Synthèse", "Retient l'essentiel et répond à « Je vérifie ».", ""]
      ],
      vigilance: "À placer en octobre, après le choix du parcours. Ne pas faire lire les CV à voix haute. Un élève peut avoir un parcours accidenté (redoublement, stage interrompu) : l'aider à le présenter sobrement, en entretien individuel. Pas de photo exigée. Pour les élèves en poursuite d'études, préciser que beaucoup de formations ne demandent pas de lettre sur Parcoursup : la lettre type sert surtout à l'alternance et à l'emploi."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Mes candidatures
  // ===================================================================
  S.push({
    id: "orientation-tle-2", pilier: "orientation", niveau: "tle", num: 2, duree: DUREE,
    titre: "Mes candidatures",
    objectifCourt: "Parcoursup, alternance, emploi : un plan daté",
    objectif: "Organiser toutes mes candidatures dans un plan daté, connaître les règles de Parcoursup, savoir chercher une alternance ou un emploi sans tomber dans les pièges, et préparer mes questions pour le forum des anciens.",
    rappel: { seance: "orientation-tle-1", texte: "Ton CV et ta lettre sont prêts. Maintenant, il faut les envoyer au bon endroit, au bon moment, et suivre ce que tu envoies." },
    aqcms: {
      pourquoi: "Les candidatures ratées tiennent souvent à l'organisation (date oubliée, pièce manquante, pas de relance), pas au niveau de l'élève.",
      apport: "Un plan de candidatures, les règles clés de Parcoursup, une méthode pour l'alternance et l'emploi.",
      ou: "Parcoursup, recherche d'alternance, emploi après le bac, forum des anciens.",
      lie: "Arnaques et manipulation (Cyber Première, séance 3), décider en quatre questions (CPS Terminale, séance 2), construire son avenir avec sens (CPS Terminale, séance 5)."
    },
    accroche: "Inès a fait ses dix vœux le 10 mars à 23 h. Yanis a envoyé le même message à quarante entreprises pour une alternance, sans réponse. Tous deux sont inventés. Qu'auraient-ils pu faire autrement ?",
    activites: [{
      titre: "Mon plan de candidatures", moteur: "liste",
      outil: { id: "plan-candidatures", nom: "Mon plan de candidatures", description: "Où je candidate, avant quand, ce qu'il faut, où j'en suis." },
      consigne: "Une fiche par candidature, selon ta direction (insertion ou poursuite d'études). Crées-en au moins trois.",
      config: {
        cle: "plan-candidatures", titreDoc: "Mon plan de candidatures", titreListe: "Mes candidatures", bouton: "Ajouter cette candidature",
        intro: "Formation, entreprise, concours : note tout ici, et mets à jour au fil des réponses.",
        champs: [
          { id: "cible", label: "Formation ou entreprise" },
          { id: "type", label: "Type", placeholder: "Parcoursup, alternance, emploi, concours" },
          { id: "limite", label: "Date limite" },
          { id: "pieces", label: "Pièces à fournir", placeholder: "CV, lettre, bulletins…" },
          { id: "envoi", label: "Date d'envoi" },
          { id: "relance", label: "Relance prévue le" },
          { id: "reponse", label: "Réponse" }
        ]
      }
    }, {
      titre: "Parcoursup sans pièges", moteur: "quiz",
      config: { id: "orientation-tle-2-parcoursup", questions: [
        { type: "vf", enonce: "En 2027, les vœux se font du 18 janvier au 11 mars.", bonne: true, explication: "Ne pas attendre le dernier soir : le site peut être saturé, et on oublie des pièces." },
        { type: "vf", enonce: "Il faut classer ses vœux par ordre de préférence dès janvier.", bonne: false, explication: "Jusqu'à 10 vœux, non classés. On ne classe qu'au début de juin, pour les vœux encore en attente." },
        { type: "vf", enonce: "Certaines formations demandent une lettre ou des pièces avant le 1er avril.", bonne: true, explication: "C'est la date limite pour compléter son dossier." },
        { type: "vf", enonce: "On peut ajouter des vœux en apprentissage, en plus des autres.", bonne: true, explication: "Jusqu'à 10 vœux supplémentaires en apprentissage." },
        { type: "vf", enonce: "L'avis du conseil de classe compte pour les bacheliers professionnels qui visent un BTS.", bonne: true, explication: "Les formations le prennent en compte quand elles examinent les dossiers." },
        { type: "vf", enonce: "Une formation qui se dit « diplômante » est forcément reconnue par l'État.", bonne: false, explication: "Je vérifie la mention « reconnue par l'État » sur Parcoursup ou sur l'Onisep." }
      ] }
    }, {
      titre: "Alternance et emploi : la méthode", moteur: "quiz",
      config: { id: "orientation-tle-2-methode", questions: [
        { type: "ordre", enonce: "Remets la méthode dans l'ordre.",
          elements: ["Cibler 15 entreprises proches (La bonne alternance, contacts pros, anciens tuteurs)", "Adapter le premier paragraphe de ma lettre", "Envoyer ou déposer ma candidature en main propre", "Noter la candidature dans mon plan", "Relancer après une semaine", "Demander l'aide du CFA ou du lycée qui propose la formation"],
          explication: "Cibler, adapter, envoyer, noter, relancer : c'est la régularité qui paie. Le CFA aide aussi à trouver une entreprise." }
      ] }
    }, {
      titre: "Offre sérieuse ou à vérifier ?", moteur: "cartes",
      consigne: "Des offres inventées. Laquelle est sérieuse, laquelle faut-il vérifier ?",
      config: {
        fin: "Un contrat d'apprentissage ne coûte rien à l'apprenti. Un recruteur sérieux te rencontre avant de te demander tes papiers.",
        manches: [{
          type: "classer", titre: "Cette offre…", categories: ["Semble sérieuse", "À vérifier"],
          cartes: [
            { texte: "Une alternance en BTS, à condition de payer 300 € de frais d'inscription", reponse: "À vérifier", explication: "La formation d'un apprenti est gratuite pour lui." },
            { texte: "Un recruteur qui te demande ta carte d'identité par messagerie avant tout entretien", reponse: "À vérifier", explication: "Tes papiers servent à l'embauche, pas avant. Risque d'usurpation d'identité." },
            { texte: "Une offre sur La bonne alternance, avec le nom de l'entreprise et du CFA", reponse: "Semble sérieuse" },
            { texte: "« Gagne 3 000 € par mois depuis chez toi, sans diplôme »", reponse: "À vérifier", explication: "Trop beau pour être vrai." },
            { texte: "Ton ancien tuteur te propose un entretien pour un poste dans son entreprise", reponse: "Semble sérieuse" },
            { texte: "Une « école » qui promet un diplôme sans dire s'il est reconnu par l'État", reponse: "À vérifier", explication: "Je vérifie sur Parcoursup ou sur l'Onisep." }
          ],
          bilan: "Argent demandé, papiers trop tôt, promesse trop belle : je vérifie."
        }]
      }
    }],
    retenir: [
      "Une candidature réussie : une cible choisie, une date respectée, une pièce complète, une relance.",
      "Sur Parcoursup : vœux jusqu'au 11 mars 2027, pièces jusqu'au 1er avril.",
      "Pour l'alternance : je cherche tôt, je cible, je relance.",
      "Une offre qui demande de l'argent ou mes papiers trop tôt, je la vérifie."
    ],
    ressource: {
      titre: "Mes candidatures",
      intro: "Le calendrier de l'année et un plan à remplir à la main.",
      blocs: [
        { type: "tableau", titre: "Le calendrier de la Terminale (2026-2027)", colonnes: ["Date", "Étape"], lignes: [
          ["Rentrée", "Choix du parcours : insertion ou poursuite d'études"],
          ["17 décembre 2026", "Ouverture de la carte des formations Parcoursup"],
          ["18 janvier – 11 mars 2027", "Vœux sur Parcoursup (jusqu'à 10, non classés)"],
          ["Février", "Forum des anciens du lycée"],
          ["Avant la mi-mars", "Parcours personnalisé de deux semaines"],
          ["1er avril 2027", "Date limite des pièces demandées"],
          ["1er juin 2027", "Premières propositions d'admission"],
          ["3 – 15 juin 2027", "Épreuves écrites du bac pro"],
          ["À partir du 21 juin 2027", "Oral de projet"],
          ["10 juin – 7 septembre 2027", "Phase complémentaire Parcoursup"]
        ] },
        { type: "tableau", titre: "Mon plan de candidatures", colonnes: ["Cible", "Type", "Date limite", "Pièces", "Relance", "Réponse"], lignes: [
          ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""], ["", "", "", "", "", ""]
        ] },
        { type: "liste", titre: "Les signaux d'une fausse offre ou d'une formation douteuse", items: ["On me demande de l'argent pour un contrat d'apprentissage", "On me demande mes papiers avant tout entretien", "Le salaire promis est trop beau", "L'entreprise ou l'école est introuvable", "Le diplôme n'est pas dit « reconnu par l'État »"] }
      ]
    },
    traces: [{
      titre: "Mes questions pour le forum des anciens", moteur: "carnet",
      config: {
        cle: "questions-forum", titreDoc: "Mes questions pour le forum des anciens",
        afficher: { titre: "Tes contacts pros", sources: ["contacts-pros"], vide: "Tu n'as pas encore noté de contacts pros. Après le forum, ajoute les anciens rencontrés dans « Mes contacts pros »." },
        intro: "Exemples : « Qu'est-ce que tu aurais aimé savoir en Terminale ? », « Comment as-tu trouvé ton entreprise ? », « Qu'est-ce qui a été le plus dur la première année ? »",
        champs: [
          { id: "q1", label: "Ma question 1" },
          { id: "q2", label: "Ma question 2" },
          { id: "q3", label: "Ma question 3" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Jusqu'à quand peut-on faire ses vœux sur Parcoursup en 2027 ?", options: ["Le 18 janvier", "Le 11 mars", "Le 1er juin"], bonne: 1, explication: "Puis les pièces jusqu'au 1er avril." },
      { type: "qcm", enonce: "Une semaine après une candidature, pas de réponse. Que fais-tu ?", options: ["J'abandonne", "Je relance poliment", "J'envoie la même lettre à quarante autres entreprises"], bonne: 1, explication: "Une relance montre ta motivation." },
      { type: "ouverte", enonce: "Cite un signe d'arnaque à l'alternance.", modele: "On me demande de payer des frais, ou d'envoyer mes papiers avant tout entretien." }
    ],
    plusLoin: [
      { titre: "Parcoursup 2027 : calendrier et étapes", source: "Onisep", url: "https://www.onisep.fr/orientation/l-enseignement-superieur/parcoursup-2027/parcoursup-2027-calendrier-et-etapes-de-la-procedure", description: "Toutes les dates de la procédure." },
      { titre: "Parcoursup", source: "Ministère de l'Enseignement supérieur", url: "https://www.parcoursup.gouv.fr", description: "Le site officiel." },
      { titre: "La bonne alternance", source: "Service public", url: "https://labonnealternance.apprentissage.beta.gouv.fr/guide-alternant/preparer-son-projet-en-alternance", description: "Chercher une entreprise et préparer son projet." },
      { titre: "L'admission en BTS", source: "Onisep", url: "https://www.onisep.fr/formation/apres-le-bac-les-etudes-superieures/les-principales-filieres-d-etudes-superieures/le-bts-et-le-btsa/l-admission-en-bts-et-en-btsa", description: "Avis du conseil de classe, mention, admission de droit." }
    ],
    passerelles: ["cyber-1re-3", "cps-tle-2", "cps-tle-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Réagit aux erreurs d'Inès et de Yanis.", ""],
        ["5-20 min", "Activité", "Crée au moins trois fiches dans son plan de candidatures.", "Les élèves en insertion travaillent sur l'emploi, l'alternance ou les concours."],
        ["20-30 min", "Activité", "Répond au quiz Parcoursup.", "Ne demande jamais d'ouvrir son dossier Parcoursup en classe."],
        ["30-40 min", "Activité", "Remet la méthode dans l'ordre et trie des offres.", "Fait le lien avec les arnaques vues en Cyber Première."],
        ["40-48 min", "Trace", "Prépare trois questions pour le forum des anciens.", "Annonce la date du forum si elle est connue."],
        ["48-55 min", "Synthèse", "Retient l'essentiel et répond à « Je vérifie ».", ""]
      ],
      vigilance: "À placer en janvier, à l'ouverture des vœux et avant le forum des anciens. Ne jamais demander d'ouvrir son dossier Parcoursup en classe ni de montrer ses vœux. Préciser la date du forum et la période du parcours personnalisé dès qu'elles sont fixées. Vérifier chaque année les dates sur parcoursup.gouv.fr. Renvoyer les questions individuelles vers le professeur principal et le Psy-EN."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Réussir un entretien, préparer l'oral de projet
  // ===================================================================
  S.push({
    id: "orientation-tle-3", pilier: "orientation", niveau: "tle", num: 3, duree: DUREE,
    titre: "Réussir un entretien, préparer l'oral de projet",
    objectifCourt: "Mes réponses, mes droits, le jour J",
    objectif: "Préparer mes réponses aux questions qui reviennent, savoir quoi faire face à une question interdite, m'entraîner à l'oral et connaître les gestes du jour J, utiles aussi pour l'oral de projet.",
    rappel: { seance: "orientation-tle-2", texte: "Tes candidatures sont parties. Si une réponse arrive, ce sera souvent pour un entretien. Et en juin, tu passeras l'oral de projet. Aujourd'hui, on s'entraîne à parler de soi." },
    aqcms: {
      pourquoi: "À l'oral, le stress fait perdre leurs moyens à des élèves qui ont pourtant de bons arguments. Ce qui est préparé se dit mieux.",
      apport: "Des réponses prêtes, une méthode pour raconter une expérience, des repères sur mes droits, une routine du jour J.",
      ou: "Entretien d'embauche, d'alternance ou d'entrée en formation ; oral de projet (à partir du 21 juin 2027 : 5 minutes de présentation, 10 minutes de questions).",
      lie: "Gérer son stress (CPS Seconde, séance 4), l'écoute active (CPS Première, séance 2), mon bilan de stage (Orientation Première, séance 1)."
    },
    accroche: "« Parlez-moi de vous. » Trois réponses inventées. Léo récite son CV ligne par ligne. Nora raconte sa vie de famille. Malik dit en une minute qui il est, ce qu'il a appris en stage et ce qu'il cherche. Laquelle donne envie de continuer l'entretien ?",
    activites: [{
      titre: "Mes réponses d'entretien", moteur: "carnet",
      outil: { id: "reponses-entretien", nom: "Mes réponses d'entretien", description: "Mes réponses aux questions qui reviennent." },
      consigne: "Prépare tes réponses. Pour raconter une expérience : la situation, ce que j'ai fait, le résultat.",
      config: {
        cle: "reponses-entretien", titreDoc: "Mes réponses d'entretien",
        afficher: { titre: "Pour t'aider, ton CV et ton bilan de stage", sources: ["mon-cv", "bilan-stage"] },
        champs: [
          { id: "vous", label: "Parlez-moi de vous", aide: "une minute : qui je suis, ce que j'ai appris, ce que je cherche", multi: true },
          { id: "pourquoi", label: "Pourquoi nous (ou pourquoi cette formation) ?", multi: true },
          { id: "fort", label: "Un point fort, avec un exemple", multi: true },
          { id: "progres", label: "Un point à améliorer, et ce que je fais pour progresser", multi: true },
          { id: "difficulte", label: "Une difficulté en stage et comment je l'ai gérée", aide: "situation, ce que j'ai fait, résultat", multi: true },
          { id: "questions", label: "Mes questions à poser à la fin", multi: true }
        ]
      }
    }, {
      titre: "Normale, délicate ou interdite ?", moteur: "cartes",
      consigne: "Des questions d'entretien inventées. Normale, délicate (je prépare une réponse), ou interdite (je n'ai pas à répondre) ?",
      config: {
        fin: "Le recrutement doit reposer sur les compétences et l'expérience. Je n'ai pas à répondre aux questions sur ma vie privée sans lien avec le poste, et je peux ramener poliment l'échange sur mes compétences.",
        manches: [{
          type: "classer", titre: "Cette question est…", categories: ["Normale", "Délicate", "Interdite"],
          cartes: [
            { texte: "« Quelles tâches faisiez-vous en stage ? »", reponse: "Normale" },
            { texte: "« Pourquoi avez-vous redoublé ? »", reponse: "Délicate", explication: "Je prépare une réponse courte et honnête, tournée vers ce que j'en ai appris." },
            { texte: "« Vous avez des enfants, ou vous en voulez ? »", reponse: "Interdite", explication: "La situation de famille ne doit pas entrer dans un recrutement." },
            { texte: "« Vous êtes croyant ? »", reponse: "Interdite", explication: "Les convictions religieuses ne doivent pas entrer dans un recrutement." },
            { texte: "« D'où vient votre nom ? »", reponse: "Interdite", explication: "L'origine est un critère de discrimination interdit." },
            { texte: "« Vous avez des problèmes de santé ? »", reponse: "Interdite", explication: "L'état de santé relève du médecin du travail, pas du recruteur." },
            { texte: "« Pourquoi avez-vous arrêté votre stage plus tôt ? »", reponse: "Délicate", explication: "Je prépare une réponse sobre, sans critiquer l'entreprise." },
            { texte: "« Quelles sont vos disponibilités ? »", reponse: "Normale" }
          ],
          bilan: "Face à une question interdite : « Je préfère vous parler de ce que je sais faire pour ce poste. »"
        }]
      },
      parFiliere: {
        securite: { cartes: [
          { texte: "Sécurité · « Votre casier judiciaire permet-il d'obtenir la carte professionnelle ? »", reponse: "Normale", explication: "Pour la sécurité privée, cette vérification est prévue par la loi : ce n'est pas de la discrimination." }
        ] }
      }
    }, {
      titre: "La simulation", moteur: "binome",
      consigne: "Par deux. Une question est tirée au sort : l'élève A, candidat, répond ; l'élève B, recruteur, écoute, reformule ce qu'il a retenu et dit une chose réussie. Puis on inverse.",
      config: {
        duree: 120,
        roles: ["Élève A, candidat, répond à la question. Élève B, recruteur, écoute sans couper.", "On inverse : élève B est candidat, élève A recruteur."],
        finTour: "Temps écoulé. Le recruteur reformule ce qu'il a retenu et dit une chose réussie. Puis changez de rôle.",
        sujets: ["Parlez-moi de vous.", "Pourquoi ce métier ?", "Où vous voyez-vous dans trois ans ?", "Racontez une difficulté rencontrée en stage.", "Quel est votre point fort ?"]
      },
      parFiliere: {
        securite: { sujets: ["Que faites-vous face à une personne agressive à l'entrée ?", "Comment rédigez-vous une main courante ?", "Les horaires de nuit, ça vous pose problème ?"] },
        ciel: { sujets: ["Expliquez une panne à un client qui n'y connaît rien.", "Que faites-vous si vous ne trouvez pas la panne ?", "Comment protégez-vous les données d'un client ?"] }
      }
    }, {
      titre: "Le jour J", moteur: "quiz",
      config: { id: "orientation-tle-3-jour-j", questions: [
        { type: "ordre", enonce: "Remets les gestes dans l'ordre.",
          elements: ["La veille : je prépare mon itinéraire, ma tenue, mon CV imprimé", "J'arrive dix minutes en avance, téléphone éteint", "Je salue et je me présente", "J'écoute chaque question jusqu'au bout", "Je pose ma question à la fin", "Je remercie", "Après : un court message de remerciement, et une note dans mon plan de candidatures"],
          explication: "Même posture pour l'oral de projet : une présentation en trois temps (le projet, ce que j'ai fait, ce que j'en retiens), préparée avec tes professeurs de l'enseignement professionnel." }
      ] }
    }],
    retenir: [
      "Un entretien se prépare : mes réponses, une expérience racontée en trois temps, des questions à poser.",
      "Je n'ai pas à répondre aux questions sur ma vie privée sans lien avec le poste.",
      "Le jour J : j'arrive en avance, j'écoute, je remercie.",
      "Ce qui marche en entretien marche aussi à l'oral de projet."
    ],
    ressource: {
      titre: "Mon entretien",
      intro: "Une fiche à relire la veille.",
      blocs: [
        { type: "tableau", titre: "Les questions qui reviennent", colonnes: ["Question", "Ce que le recruteur cherche", "Une piste"], lignes: [
          ["Parlez-moi de vous", "Savoir si tu te connais", "Une minute : qui, ce que j'ai appris, ce que je cherche"],
          ["Pourquoi nous ?", "Savoir si tu t'es renseigné", "Une chose précise sur l'entreprise ou la formation"],
          ["Un point fort ?", "Une preuve", "Une qualité et un exemple de stage"],
          ["Un point à améliorer ?", "Ta lucidité", "Un vrai point, et ce que tu fais pour progresser"],
          ["Une difficulté ?", "Ta façon de réagir", "Situation, ce que j'ai fait, résultat"],
          ["Avez-vous des questions ?", "Ton intérêt", "Une question préparée sur le poste ou la formation"]
        ] },
        { type: "etapes", titre: "Raconter une expérience", items: ["La situation : où, quand, quoi", "Ce que j'ai fait, moi", "Le résultat, et ce que j'en ai appris"] },
        { type: "liste", titre: "La check-list du jour J", items: ["Itinéraire vérifié la veille", "Tenue adaptée au métier", "CV imprimé", "Arrivée dix minutes avant", "Téléphone éteint", "Une question à poser", "Un message de remerciement après"] },
        { type: "texte", titre: "Face à une question interdite", texte: "Je peux répondre : « Je préfère vous parler de ce que je sais faire pour ce poste. » Ensuite, j'en parle à un adulte du lycée (voir « Besoin d'aide »)." }
      ]
    },
    traces: [],
    verifie: [
      { type: "vf", enonce: "« Parlez-moi de vous » attend le récit de toute ma vie.", bonne: false, explication: "Une minute : qui je suis, ce que j'ai appris, ce que je cherche." },
      { type: "vf", enonce: "Je dois répondre si on me demande ma religion.", bonne: false, explication: "C'est une question interdite en recrutement." },
      { type: "vf", enonce: "Dire « je ne sais pas, mais je vais chercher » peut être une bonne réponse.", bonne: true, explication: "C'est honnête, et ça montre que tu sais apprendre." },
      { type: "vf", enonce: "Poser une question à la fin montre mon intérêt.", bonne: true, explication: "Prépare-la à l'avance." }
    ],
    plusLoin: [
      { titre: "Le bac professionnel : le point sur les épreuves", source: "Onisep", url: "https://www.onisep.fr/formation/apres-la-3-la-voie-professionnelle/les-diplomes-de-la-voie-pro/le-bac-professionnel/le-bac-professionnel-le-point-sur-les-epreuves", description: "Le calendrier 2027 et l'oral de projet." },
      { titre: "Entretien d'embauche : les questions à éviter", source: "CCI Paris Île-de-France", url: "https://www.entreprises.cci-paris-idf.fr/web/rh/entretien-d-embauche-les-questions-a-eviter-pour-ne-pas-discriminer", description: "Ce qu'un recruteur n'a pas le droit de demander." }
    ],
    passerelles: ["cps-2nde-4", "cps-1re-2", "cps-tle-5"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Compare trois réponses à « Parlez-moi de vous ».", ""],
        ["5-17 min", "Activité", "Prépare ses réponses aux questions qui reviennent.", "Montre la méthode situation, action, résultat."],
        ["17-25 min", "Activité", "Classe les questions : normale, délicate, interdite.", "Sur la religion : rappelle l'interdiction sans débattre des convictions."],
        ["25-40 min", "Activité", "Simulation en binôme.", "Toujours en binômes, jamais devant la classe."],
        ["40-47 min", "Activité", "Remet les gestes du jour J dans l'ordre.", "Fait le lien avec l'oral de projet."],
        ["47-55 min", "Synthèse", "« Je retiens », « Je vérifie », une minute de cohérence cardiaque (boîte à outils).", ""]
      ],
      vigilance: "À placer en avril-mai, avant les épreuves de juin. La simulation se fait en binômes, jamais devant la classe. Si un élève raconte une discrimination vécue en stage ou en candidature, le reprendre seul et l'orienter vers le CPE. Ne pas évaluer l'oral de projet : c'est l'affaire des professeurs concernés. Un outil de gestion de projet, à venir dans la boîte à outils, gardera la trace des étapes du projet."
    }
  });
})();
