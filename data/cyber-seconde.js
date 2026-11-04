/*
 * PILIER CYBER & ESPRIT CRITIQUE · SECONDE (« Moi »)
 * Contenu validé (document « Pilier Cyber & esprit critique – Seconde »).
 * Trois séances de 55 minutes : Information, Vie privée, Sécurité.
 * Repères : EMI (CLEMI), CRCN / Pix, CNIL, Cybermalveillance.gouv.fr.
 * Ressources vérifiées en novembre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var DUREE = "55 min";

  // Petite situation à une étape : une bonne réponse, des réponses à retravailler
  function situation(titre, contexte, question, options, bilan) {
    var noeuds = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
    options.forEach(function (o) { noeuds.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }

  // ===================================================================
  // SÉANCE 1 · Info ou intox ?
  // ===================================================================
  S.push({
    id: "cyber-2nde-1", pilier: "cyber", niveau: "2nde", num: 1, duree: DUREE,
    titre: "Info ou intox ?",
    objectifCourt: "Trier l'information avant de la partager",
    objectif: "Distinguer un fait d'une opinion, repérer un piège à clics et vérifier une information avant de la partager.",
    rappel: { seance: "evars-2nde-1", etiquette: "Lien avec EVARS", texte: "En EVARS, tu as vu que beaucoup d'images des réseaux sont retouchées. C'est la même chose pour les informations : certaines sont déformées, d'autres inventées. Aujourd'hui, on apprend à faire le tri." },
    aqcms: {
      pourquoi: "Une fausse information se partage plus vite qu'une vraie, et chacun de nous peut la relayer sans le vouloir.",
      apport: "Des réflexes simples pour ne pas me faire manipuler, ni manipuler les autres.",
      ou: "Sur mes réseaux, dans les groupes de classe, face à une rumeur, pour un exposé.",
      lie: "Les images retouchées (EVARS Seconde, séance 1), agir de façon responsable (CPS Terminale)."
    },
    accroche: "« Ce lycéen gagne 10 000 € par mois sans travailler : la méthode que les profs détestent ! » Tu cliquerais ? Qu'est-ce qui, dans ce titre, donne envie de cliquer ?",
    activites: [{
      titre: "Fait, opinion ou à vérifier ?", moteur: "cartes",
      consigne: "Un fait se vérifie. Une opinion se discute. Une affirmation sans source se vérifie avant d'être crue. Classe chaque phrase.",
      config: {
        fin: "Avant de croire ou de partager, je me demande : est-ce un fait, une opinion, ou une affirmation à vérifier ?",
        manches: [{
          type: "classer", titre: "De quoi s'agit-il ?", categories: ["Fait vérifiable", "Opinion", "À vérifier"],
          cartes: [
            { texte: "Il a plu hier à Lille.", reponse: "Fait vérifiable", explication: "On peut le vérifier dans les relevés de Météo-France." },
            { texte: "Le bac pro se prépare en trois ans.", reponse: "Fait vérifiable" },
            { texte: "Ce rappeur est le meilleur de tous les temps.", reponse: "Opinion", explication: "C'est un goût personnel : on peut en discuter, pas le prouver." },
            { texte: "Ce téléphone est trop cher.", reponse: "Opinion", explication: "Son prix est un fait ; « trop cher » est un avis." },
            { texte: "Un ami a vu sur un réseau social que le lycée fermera lundi.", reponse: "À vérifier", explication: "On vérifie auprès d'une source officielle : l'ENT, la vie scolaire." },
            { texte: "Une célébrité serait morte, selon un compte anonyme.", reponse: "À vérifier", explication: "Un compte anonyme n'est pas une source. Les médias sérieux en parlent-ils ?" },
            { texte: "La tour Eiffel mesure environ 330 mètres.", reponse: "Fait vérifiable" },
            { texte: "« Les jeunes ne lisent plus », dit une vidéo sans aucun chiffre.", reponse: "À vérifier", explication: "Une affirmation générale, sans chiffre ni source, doit être vérifiée." }
          ],
          bilan: "Un fait se vérifie, une opinion se discute, une affirmation sans source se vérifie."
        }]
      }
    }, {
      titre: "Les indices de l'intox", moteur: "cartes",
      consigne: "Ces publications sont inventées. Pour chaque détail, est-ce un signal d'alerte ou plutôt un gage de sérieux ?",
      config: {
        fin: "Une émotion forte (peur, colère, envie) est souvent un signal d'alerte : c'est elle qui pousse à partager sans réfléchir.",
        manches: [{
          type: "classer", titre: "Signal d'alerte ?", categories: ["Signal d'alerte", "Plutôt rassurant"],
          cartes: [
            { texte: "Le compte qui publie a été créé il y a deux jours et n'a pas de nom.", reponse: "Signal d'alerte" },
            { texte: "Le titre est EN MAJUSCULES, plein d'émojis 😱😱😱", reponse: "Signal d'alerte", explication: "On cherche à te faire réagir vite, pas à t'informer." },
            { texte: "« Partage avant que ce soit supprimé ! »", reponse: "Signal d'alerte", explication: "L'urgence empêche de réfléchir : c'est voulu." },
            { texte: "Aucune source n'est citée.", reponse: "Signal d'alerte" },
            { texte: "La photo date de 2015 et a été prise dans un autre pays.", reponse: "Signal d'alerte", explication: "Une image ancienne sortie de son contexte : la recherche d'image inversée permet de le découvrir." },
            { texte: "Personne d'autre ne reprend l'information.", reponse: "Signal d'alerte" },
            { texte: "L'article cite l'étude d'origine, avec un lien.", reponse: "Plutôt rassurant", explication: "On peut aller vérifier soi-même." },
            { texte: "Plusieurs médias reconnus donnent la même information.", reponse: "Plutôt rassurant" }
          ],
          bilan: "Compte inconnu, pas de source, urgence, émotion forte : je m'arrête avant de partager."
        }]
      }
    }, {
      titre: "Un message urgent dans le groupe de classe", moteur: "scenario",
      config: {
        id: "cyber-2nde-1",
        cas: [{
          titre: "La camionnette blanche",
          depart: "a",
          noeuds: {
            a: { contexte: "Dans le groupe de classe, un message circule :", qui: "Message transféré plusieurs fois", texte: "URGENT : une camionnette blanche enlève des ados devant les lycées, PARTAGEZ !!!", question: "Que fais-tu ?", choix: [
              { texte: "Je partage tout de suite : si c'est vrai, il faut prévenir tout le monde.", ok: false, retour: "C'est la réaction que cherche ce message. Si c'est faux, tu fais peur à tout le monde pour rien." },
              { texte: "Je m'arrête et je vérifie avant de faire quoi que ce soit.", vers: "b", ok: true, retour: "Bon réflexe : l'urgence est justement un signal d'alerte." }
            ] },
            b: { question: "Que vérifies-tu en premier ?", choix: [
              { texte: "Qui a écrit ce message, quand, et d'où vient l'information.", vers: "c", ok: true, retour: "Oui : ici, aucune source, aucune date, aucun lieu précis." },
              { texte: "Combien de personnes l'ont déjà partagé.", ok: false, retour: "Beaucoup de partages ne rendent pas une information vraie : les rumeurs circulent très vite." }
            ] },
            c: { contexte: "Tu cherches « camionnette blanche enlèvement » sur un moteur de recherche. Des médias et la gendarmerie expliquent que cette rumeur revient régulièrement depuis des années, sans aucun fait réel.", question: "Que fais-tu maintenant ?", choix: [
              { texte: "Je ne partage pas, et j'explique gentiment dans le groupe que c'est une rumeur connue, avec le lien.", vers: "fin", ok: true, retour: "Parfait : tu stoppes la rumeur sans humilier personne." },
              { texte: "Je partage quand même, au cas où.", ok: false, retour: "« Au cas où », c'est comme ça que les rumeurs survivent depuis des années." }
            ] },
            fin: { fin: { ok: true, titre: "À retenir :", texte: "Dans le doute, on ne partage pas. En cas de vrai danger, on prévient un adulte ou on appelle le 17." } }
          }
        }]
      }
    }],
    retenir: [
      "Un fait se vérifie ; une opinion se discute ; une affirmation sans source se vérifie avant d'être crue.",
      "Une émotion forte (peur, colère, envie) est souvent un signal d'alerte : c'est elle qui pousse à partager sans réfléchir.",
      "Avant de partager : qui publie ? quand ? quelle source ? d'autres médias sérieux en parlent-ils ?",
      "Dans le doute, on ne partage pas."
    ],
    ressource: {
      titre: "Ma check-list anti-intox",
      intro: "Une fiche pour trier l'information avant de la croire ou de la partager.",
      blocs: [
        { type: "tableau", titre: "Fait, opinion ou à vérifier ?", colonnes: ["", "Ce que c'est", "Exemple"], lignes: [
          ["Fait", "Se vérifie", "« Le bac pro se prépare en trois ans. »"],
          ["Opinion", "Se discute", "« Ce rappeur est le meilleur. »"],
          ["À vérifier", "Affirmation sans source", "« Le lycée fermera lundi, paraît-il. »"]
        ] },
        { type: "liste", titre: "Les indices d'une intox", items: ["Un compte anonyme ou créé récemment", "Aucune source", "Un titre en majuscules, plein d'émojis", "Une urgence : « Partage vite ! »", "Une image ancienne sortie de son contexte", "Une information que personne d'autre ne reprend"] },
        { type: "etapes", titre: "Cinq questions avant de partager", items: ["Qui publie ?", "Quand ?", "Quelle est la source ?", "D'autres médias sérieux en parlent-ils ?", "Qu'est-ce que je ressens ? Une émotion forte doit me faire ralentir."] },
        { type: "etapes", titre: "Vérifier une image", items: ["Faire une recherche d'image inversée (Google Images, Bing, TinEye)", "Regarder où et quand l'image est apparue pour la première fois", "Comparer avec ce que dit la publication"] }
      ]
    },
    traces: [{
      titre: "Mon journal de vérification", moteur: "liste",
      rendre: true,
      outil: { id: "journal-verification", nom: "Mon journal de vérification", description: "Les informations que j'ai vérifiées, et mon verdict." },
      config: {
        cle: "journal-verification", titreDoc: "Mon journal de vérification", bouton: "Ajouter au journal",
        intro: "Note une information repérée cette semaine et ce que tu as vérifié.",
        champs: [
          { id: "info", label: "L'information repérée" },
          { id: "source", label: "Sa source (qui, où, quand)" },
          { id: "verif", label: "Ce que j'ai vérifié" },
          { id: "verdict", label: "Mon verdict : vrai, faux, ou je ne sais pas encore" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "« Ce film est génial » : c'est…", options: ["Un fait", "Une opinion"], bonne: 1, explication: "C'est un avis personnel : on peut en discuter, pas le prouver." },
      { type: "ouverte", enonce: "Cite trois indices qui doivent te faire douter d'une publication.", modele: "Un compte anonyme, aucune source, un titre en majuscules, une urgence, une image ancienne, une information que personne d'autre ne reprend." },
      { type: "ouverte", enonce: "Que fais-tu d'un message qui te dit « Partage vite avant que ce soit supprimé ! » ?", modele: "Je ne partage pas tout de suite : l'urgence est un signal d'alerte. Je vérifie qui publie, quand, avec quelle source." }
    ],
    plusLoin: [
      { titre: "Où est l'info face au commentaire et à l'opinion ?", source: "CLEMI", url: "https://www.clemi.fr/sites/default/files/2025-10/O%C3%B9%20est%20l%27info%20face%20au%20commentaire%20et%20%C3%A0%20l%27opinion.pdf", description: "Une fiche pour distinguer information, commentaire et opinion." },
      { titre: "5 conseils pour protéger ma vie privée sur les réseaux sociaux", source: "CNIL", url: "https://www.cnil.fr/fr/5-conseils-pour-proteger-ma-vie-privee-sur-les-reseaux-sociaux", description: "Dont : je vérifie les informations avant de les partager." }
    ],
    passerelles: ["evars-2nde-1", "cps-tle-2"],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Découvre un titre racoleur inventé. Cliquerait-il ?", "Fait repérer les ressorts : argent facile, mystère, indignation."],
        ["8-20 min", "Activité", "Classe des phrases : fait vérifiable, opinion, ou affirmation à vérifier.", "Donne les définitions : un fait se vérifie, une opinion se discute."],
        ["20-35 min", "Activité", "Repère les indices d'intox sur des publications inventées.", "Montre qu'une émotion forte est souvent un signal d'alerte."],
        ["35-50 min", "Activité", "Suit la situation « Un message urgent » et applique les réflexes de vérification.", "Présente la recherche d'image inversée et les sites de vérification."],
        ["50-55 min", "Trace", "Garde sa check-list, commence son journal et répond à « Je vérifie ».", "Rappelle : dans le doute, on ne partage pas."]
      ],
      vigilance: "Exemples fictifs et sans enjeu politique. Une rumeur visant un élève ou un adulte de l'établissement ne se traite pas en classe : on en parle ensuite avec le CPE, sans nommer personne."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Mon empreinte numérique
  // ===================================================================
  S.push({
    id: "cyber-2nde-2", pilier: "cyber", niveau: "2nde", num: 2, duree: DUREE,
    titre: "Mon empreinte numérique",
    objectifCourt: "Ce que mes traces disent de moi",
    objectif: "Prendre conscience de son empreinte numérique, savoir ce qu'est une donnée personnelle et maîtriser ses traces.",
    rappel: { seance: "cyber-2nde-1", texte: "La dernière fois, tu as appris à vérifier ce que tu lis. Aujourd'hui, on regarde l'inverse : ce que les autres peuvent lire, voir et savoir sur toi." },
    aqcms: {
      pourquoi: "Chaque publication, chaque appli, chaque recherche laisse des traces, et internet oublie difficilement.",
      apport: "Savoir ce qu'un inconnu peut apprendre sur moi, et décider de ce que je montre.",
      ou: "Quand je publie, quand j'installe une appli, quand je cherche un stage.",
      lie: "Mon intimité en ligne (EVARS Seconde, séance 3), mon identité numérique pro (Cyber Terminale)."
    },
    accroche: "Lina, élève de Seconde (elle est inventée), publie comme tout le monde. Un inconnu regarde ses cinq dernières publications. Que peut-il apprendre sur elle ?",
    activites: [{
      titre: "L'enquête sur Lina", moteur: "cartes",
      consigne: "Pour chaque publication de Lina, qu'est-ce qu'un inconnu peut deviner ?",
      config: {
        fin: "Un détail anodin (un logo, un décor, une heure) peut en dire beaucoup sur moi.",
        manches: [{
          type: "classer", titre: "Qu'apprend l'inconnu ?", categories: ["Son lycée", "Son adresse", "Ses horaires", "Quand la maison est vide", "Un mot de passe possible"],
          cartes: [
            { texte: "Un selfie en tenue de sport, avec le logo du lycée sur le sweat.", reponse: "Son lycée" },
            { texte: "Une photo devant sa porte d'entrée, le numéro de la rue bien visible.", reponse: "Son adresse" },
            { texte: "Une story chaque mardi à 17 h : « Au club ! »", reponse: "Ses horaires", explication: "Une habitude répétée permet de savoir où elle sera, et quand." },
            { texte: "« Trop hâte d'être à la mer toute la semaine prochaine ! »", reponse: "Quand la maison est vide" },
            { texte: "Une photo de son chien : « Joyeux anniversaire Pixel, 5 ans aujourd'hui ! »", reponse: "Un mot de passe possible", explication: "Le nom de l'animal et une date : exactement ce que beaucoup de gens utilisent comme mot de passe." }
          ],
          bilan: "Rassemblés, ces détails permettent de savoir où vit Lina, où la trouver, et quand sa maison sera vide."
        }]
      }
    }, {
      titre: "Nécessaire ou pas ?", moteur: "cartes",
      consigne: "Quand une appli demande une autorisation, demande-toi : en a-t-elle vraiment besoin pour fonctionner ?",
      config: {
        fin: "Je n'accorde aux applis que les autorisations dont elles ont vraiment besoin. Je peux les retirer dans les réglages de mon téléphone.",
        manches: [{
          type: "classer", titre: "Cette autorisation est-elle nécessaire ?", categories: ["Nécessaire", "Pas nécessaire", "Utile, au choix"],
          cartes: [
            { texte: "Une lampe torche demande ta localisation.", reponse: "Pas nécessaire", explication: "Une lampe n'a pas besoin de savoir où tu es : ta localisation a de la valeur, souvent revendue à des publicitaires." },
            { texte: "Une appli de GPS demande ta localisation.", reponse: "Nécessaire" },
            { texte: "Un jeu demande l'accès à tes contacts.", reponse: "Pas nécessaire" },
            { texte: "Une appli photo demande l'accès à la caméra.", reponse: "Nécessaire" },
            { texte: "Une calculatrice demande l'accès au micro.", reponse: "Pas nécessaire" },
            { texte: "Une messagerie demande l'accès à tes contacts.", reponse: "Utile, au choix", explication: "Cela aide à retrouver ses amis, mais on peut refuser et ajouter ses contacts à la main." }
          ],
          bilan: "Une autorisation inutile est un signal d'alerte."
        }]
      }
    }, {
      titre: "Donnée personnelle ou pas ?", moteur: "quiz",
      consigne: "Une donnée personnelle, c'est toute information qui permet d'identifier une personne.",
      config: { id: "cyber-2nde-2-donnees", questions: [
        { type: "vf", enonce: "Une photo de moi est une donnée personnelle.", bonne: true, explication: "On peut te reconnaître : c'est une donnée personnelle." },
        { type: "vf", enonce: "Ma localisation est une donnée personnelle.", bonne: true, explication: "Elle dit où tu vis, où tu étudies, où tu vas." },
        { type: "vf", enonce: "Si je supprime une publication, elle disparaît partout.", bonne: false, explication: "Elle a pu être copiée, capturée ou partagée avant." },
        { type: "vf", enonce: "Publier la photo d'un ami sans lui demander, c'est sans risque.", bonne: false, explication: "Chacun a un droit sur son image : on demande avant de publier." },
        { type: "vf", enonce: "Je peux demander à un site de supprimer des données sur moi.", bonne: true, explication: "C'est un droit prévu par la loi. Tu le verras en détail en Terminale." }
      ] }
    }],
    retenir: [
      "Mon empreinte numérique, c'est l'ensemble des traces que je laisse en ligne, volontairement ou non.",
      "Une donnée personnelle est toute information qui permet de m'identifier : nom, photo, localisation, adresse IP…",
      "Un détail anodin (un logo, un décor, une heure) peut en dire beaucoup sur moi.",
      "Je n'accorde aux applis que les autorisations dont elles ont vraiment besoin."
    ],
    ressource: {
      titre: "Maîtriser mes traces",
      intro: "Une fiche pour décider de ce que tu montres en ligne.",
      blocs: [
        { type: "liste", titre: "Les détails qui me trahissent", items: ["Un logo (lycée, club, entreprise)", "Un numéro de rue, une plaque, un décor reconnaissable", "Une story à heure fixe", "Une annonce de vacances", "Le nom d'un animal, une date d'anniversaire"] },
        { type: "tableau", titre: "Les autorisations des applis", colonnes: ["Autorisation", "Je l'accorde si…"], lignes: [
          ["Localisation", "L'appli en a besoin (GPS, météo), et de préférence « seulement pendant l'utilisation »"],
          ["Contacts", "C'est une messagerie et je le choisis"],
          ["Micro, caméra", "L'appli sert à appeler, filmer, photographier"]
        ] },
        { type: "texte", titre: "Qu'est-ce qu'une donnée personnelle ?", texte: "Toute information qui permet d'identifier une personne, directement ou en la croisant avec d'autres : nom, photo, voix, localisation, numéro de téléphone, adresse IP…" },
        { type: "liste", titre: "Mes bons réflexes avant de publier", items: ["Qu'est-ce qu'on voit à l'arrière-plan ?", "Est-ce que ça dit où je suis, ou quand je n'y suis pas ?", "Est-ce que les personnes sur la photo sont d'accord ?", "Est-ce que j'accepterais que ça circule encore dans cinq ans ?"] },
        { type: "texte", titre: "FantomApp", texte: "L'application gratuite de la CNIL pour les ados : des conseils pour régler ses réseaux sociaux et réagir en cas de problème." }
      ]
    },
    traces: [{
      titre: "Mon plan de nettoyage numérique", moteur: "carnet",
      outil: { id: "nettoyage-numerique", nom: "Mon plan de nettoyage numérique", description: "Comptes à supprimer, autorisations à retirer, publications à archiver." },
      config: {
        cle: "nettoyage-numerique", titreDoc: "Mon plan de nettoyage numérique",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "comptes", label: "Les comptes que je n'utilise plus et que je vais supprimer", multi: true },
          { id: "applis", label: "Les applis à qui je retire des autorisations", multi: true },
          { id: "publications", label: "Les publications que je vais archiver ou supprimer", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Qu'est-ce qu'une empreinte numérique ?", modele: "L'ensemble des traces que je laisse en ligne, volontairement (publications, commentaires) ou non (recherches, localisation, données des applis)." },
      { type: "ouverte", enonce: "Cite deux détails d'une photo qui peuvent révéler où tu habites.", modele: "Le numéro de la rue, une plaque, un monument ou un commerce reconnaissable, le logo du lycée, la vue depuis la fenêtre." },
      { type: "qcm", enonce: "Une appli de lampe torche demande ta localisation. Que fais-tu ?", options: ["J'accepte, sinon elle ne marchera pas", "Je refuse : elle n'en a pas besoin", "J'accepte, puis je désinstalle plus tard"], bonne: 1, explication: "Une lampe n'a pas besoin de ta localisation. Si elle insiste, choisis une autre appli." }
    ],
    plusLoin: [
      { titre: "FantomApp, l'application de la CNIL pour se protéger sur les réseaux sociaux", source: "CNIL", url: "https://www.cnil.fr/fr/fantomapp-lapplication-de-la-cnil-pour-se-proteger-sur-les-reseaux-sociaux", description: "Gratuite, pour régler ses comptes et réagir en cas de problème." },
      { titre: "5 conseils pour protéger ma vie privée sur les réseaux sociaux", source: "CNIL", url: "https://www.cnil.fr/fr/5-conseils-pour-proteger-ma-vie-privee-sur-les-reseaux-sociaux", description: "Les réglages et réflexes essentiels." }
    ],
    passerelles: ["evars-2nde-3"],
    adulte: {
      deroule: [
        ["0-15 min", "Accroche", "Mène « L'enquête sur Lina » à partir de cinq publications inventées.", "Montre que chaque détail compte : un logo, un décor, une heure."],
        ["15-30 min", "Activité", "Classe des autorisations demandées par des applis : nécessaire ou pas.", "Montre où voir et retirer les autorisations sur un téléphone."],
        ["30-45 min", "Activité", "Répond au quiz « Donnée personnelle ou pas ? ».", "Donne la définition : toute information qui permet d'identifier une personne."],
        ["45-55 min", "Trace", "Remplit « Mon plan de nettoyage numérique » et répond à « Je vérifie ».", "Présente FantomApp, l'application gratuite de la CNIL pour les ados."]
      ],
      vigilance: "On ne demande jamais à un élève de montrer ses comptes ou ses publications. Lina est inventée : on n'analyse jamais le profil d'un élève réel. La séance « Mon intimité en ligne » (EVARS) traite déjà l'intime et le check-up de confidentialité."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Protéger mes comptes
  // ===================================================================
  S.push({
    id: "cyber-2nde-3", pilier: "cyber", niveau: "2nde", num: 3, duree: DUREE,
    titre: "Protéger mes comptes",
    objectifCourt: "Mots de passe solides et faux messages",
    objectif: "Créer des mots de passe solides, activer la double authentification et déjouer l'hameçonnage.",
    rappel: { seance: "cyber-2nde-2", texte: "La dernière fois, tu as vu tout ce que tes traces disent de toi. Si quelqu'un vole ton compte, il a accès à tout cela, et peut se faire passer pour toi. Aujourd'hui, on verrouille." },
    aqcms: {
      pourquoi: "Un compte volé sert à arnaquer tes contacts, à publier en ton nom ou à te faire chanter.",
      apport: "Des comptes difficiles à pirater, et le réflexe de reconnaître un faux message.",
      ou: "Mes réseaux, ma messagerie, l'ENT, plus tard ma banque et mes comptes professionnels.",
      lie: "Mon empreinte numérique (séance 2), gérer mon stress (CPS Seconde, séance 4), les arnaques financières (EDUCFI)."
    },
    accroche: "« 123456 », « azerty », « motdepasse » : ce sont parmi les mots de passe les plus utilisés en France. Un logiciel les trouve en moins d'une seconde, car il teste des millions de combinaisons par seconde. Et le tien ?",
    activites: [{
      titre: "Le testeur de mot de passe", moteur: "motdepasse",
      consigne: "Teste des mots de passe inventés. Puis construis une phrase de passe : une phrase facile à retenir pour toi, difficile à deviner pour les autres.",
      config: { exemples: ["azerty", "Pixel2010", "Soleil!", "M0nCh@tP1x3l!", "Mon chat Pixel mange 3 croquettes chaque matin à 7h !"] }
    }, {
      titre: "Vrai ou faux message ?", moteur: "cartes",
      consigne: "Ces messages sont inventés. Frauduleux, ou probablement légitime ?",
      config: {
        fin: "Un vrai service ne demande jamais ton mot de passe ou un code par message. Urgence, menace ou cadeau : méfiance.",
        manches: [{
          type: "classer", titre: "Ce message est…", categories: ["Frauduleux", "Probablement légitime"],
          cartes: [
            { texte: "« Votre colis est bloqué. Payez 1,99 € de frais ici : colis-livr4ison.info »", reponse: "Frauduleux", explication: "Lien étrange, petite somme pour obtenir ta carte bancaire." },
            { texte: "« Votre compte sera fermé dans 24 h. Confirmez vos identifiants. »", reponse: "Frauduleux", explication: "Menace + urgence + demande d'identifiants : hameçonnage classique." },
            { texte: "« Félicitations, vous avez gagné un téléphone ! Cliquez pour le recevoir. »", reponse: "Frauduleux" },
            { texte: "Un ami t'écrit soudain : « Regarde cette vidéo de toi lol » avec un lien.", reponse: "Frauduleux", explication: "Son compte a sûrement été piraté. Préviens-le par un autre moyen." },
            { texte: "« Votre code de vérification est 482913. Ne le communiquez à personne. » Tu viens de te connecter.", reponse: "Probablement légitime", explication: "Tu l'attendais. Mais si tu ne t'es pas connecté, quelqu'un essaie d'entrer dans ton compte." },
            { texte: "Un message du lycée t'invite à consulter l'ENT, sans lien à cliquer.", reponse: "Probablement légitime", explication: "Tu passes par l'adresse habituelle de l'ENT, pas par un lien." }
          ],
          bilan: "Je ne clique pas : je passe par l'appli ou le site officiel que je connais."
        }]
      }
    }, {
      titre: "J'ai cliqué !", moteur: "quiz",
      consigne: "Tu as tapé ton mot de passe sur une fausse page. Remets les bonnes réactions dans l'ordre.",
      config: { id: "cyber-2nde-3-clique", questions: [
        { type: "ordre", enonce: "Que fais-tu, dans l'ordre ?",
          elements: ["Je change mon mot de passe tout de suite (et partout où c'était le même)", "J'active la double authentification", "Je préviens mes contacts", "Je signale le message (33700 pour un SMS, Signal Spam pour un courriel)", "J'en parle à un adulte"],
          explication: "Si tu as donné des coordonnées bancaires, appelle ta banque tout de suite pour faire opposition." },
        { type: "vf", enonce: "La double authentification protège mon compte même si mon mot de passe a été volé.", bonne: true, explication: "Il faut en plus un code reçu sur ton téléphone : le pirate ne l'a pas." }
      ] }
    }],
    retenir: [
      "Un mot de passe solide est long et varié : au moins 12 caractères de plusieurs types, ou une phrase de passe.",
      "Un mot de passe différent pour chaque compte important. Jamais de prénom, de date de naissance ou de nom d'animal.",
      "La double authentification bloque la plupart des piratages, même si le mot de passe a été volé.",
      "Un vrai service ne demande jamais ton mot de passe ou un code par message. Urgence, menace ou cadeau : méfiance."
    ],
    ressource: {
      titre: "Mes comptes en sécurité",
      intro: "Une fiche pour verrouiller tes comptes et déjouer les faux messages.",
      blocs: [
        { type: "liste", titre: "Un mot de passe solide", items: ["Au moins 12 caractères : minuscules, majuscules, chiffres, caractères spéciaux", "Ou 14 caractères sans caractère spécial", "Ou une phrase de passe d'au moins 7 mots", "Jamais de prénom, de date, de nom d'animal", "Un mot de passe différent pour chaque compte important, ou un gestionnaire de mots de passe"] },
        { type: "texte", titre: "La méthode de la phrase de passe", texte: "Pars d'une phrase facile à retenir pour toi et impossible à deviner pour les autres, par exemple : « Mon chat Pixel mange 3 croquettes chaque matin à 7h ! » N'utilise pas cet exemple : invente la tienne." },
        { type: "texte", titre: "La double authentification", texte: "En plus du mot de passe, un code arrive sur ton téléphone. Active-la dans les réglages de sécurité de tes réseaux, de ta messagerie et de ton adresse mail." },
        { type: "liste", titre: "Les indices d'hameçonnage", items: ["Une urgence ou une menace", "Un cadeau trop beau", "Un lien étrange, une adresse mal écrite", "Une demande de mot de passe, de code ou de carte bancaire"] },
        { type: "etapes", titre: "Si j'ai cliqué", items: ["Je change mon mot de passe", "J'active la double authentification", "Je préviens mes contacts", "Je signale le message", "J'en parle à un adulte ; si j'ai donné ma carte, j'appelle ma banque"] },
        { type: "liste", titre: "Où signaler", items: ["33700 : SMS ou appel suspect (envoi gratuit)", "Signal Spam : courriel suspect", "Pharos (internet-signalement.gouv.fr) : contenu illégal", "Cybermalveillance.gouv.fr et 17Cyber : aide aux victimes"] }
      ]
    },
    traces: [{
      titre: "Mon plan sécurité", moteur: "carnet",
      outil: { id: "plan-securite", nom: "Mon plan sécurité", description: "Mes comptes importants, la double authentification, les mots de passe à changer." },
      config: {
        cle: "plan-securite", titreDoc: "Mon plan sécurité",
        intro: "N'écris jamais tes mots de passe ici. Note seulement le nom des comptes.",
        champs: [
          { id: "importants", label: "Mes trois comptes les plus importants", multi: true },
          { id: "double", label: "Ceux où j'active la double authentification", multi: true },
          { id: "changer", label: "Ceux dont je change le mot de passe parce qu'il est réutilisé", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite deux règles d'un mot de passe solide.", modele: "Au moins 12 caractères de plusieurs types (ou une phrase de passe) ; un mot de passe différent par compte ; pas de prénom ni de date." },
      { type: "vf", enonce: "Ta banque peut te demander ton code par SMS.", bonne: false, explication: "Jamais. Une banque ne demande ni code ni mot de passe par message ou par téléphone." },
      { type: "ouverte", enonce: "Tu as tapé ton mot de passe sur une fausse page : que fais-tu en premier ?", modele: "Je change immédiatement mon mot de passe, partout où il était le même, puis j'active la double authentification." }
    ],
    plusLoin: [
      { titre: "Mots de passe : recommandations pour maîtriser sa sécurité", source: "CNIL", url: "https://www.cnil.fr/fr/mots-de-passe-recommandations-pour-maitriser-sa-securite", description: "Les repères officiels, et comment créer un mot de passe solide." },
      { titre: "Mémo mots de passe", source: "Cybermalveillance.gouv.fr", url: "https://www.cybermalveillance.gouv.fr/medias/2019/11/Memo_mots-de-passe.pdf", description: "Une page à garder, avec les bonnes pratiques." },
      { titre: "Spam, hameçonnage, arnaques : signaler pour agir", source: "CNIL", url: "https://www.cnil.fr/fr/spam-phishing-arnaques-signaler-pour-agir", description: "Où et comment signaler un message frauduleux." }
    ],
    passerelles: ["evars-2nde-3", "cps-2nde-4"],
    adulte: {
      deroule: [
        ["0-5 min", "Accroche", "Découvre les mots de passe les plus courants. Combien de temps pour les deviner ?", "Explique qu'un logiciel teste des millions de combinaisons par seconde."],
        ["5-20 min", "Activité", "Teste des mots de passe inventés, puis construit une phrase de passe.", "Rappelle : on ne tape jamais son vrai mot de passe dans un exercice. Le testeur n'enregistre et n'envoie rien."],
        ["20-35 min", "Activité", "Classe des messages inventés : frauduleux ou probablement légitime.", "Fait relever les indices d'hameçonnage."],
        ["35-50 min", "Activité", "Remet dans l'ordre les réactions de « J'ai cliqué ! ».", "Montre comment activer la double authentification."],
        ["50-55 min", "Trace", "Remplit « Mon plan sécurité » et répond à « Je vérifie ».", "Rappelle les numéros de signalement."]
      ],
      vigilance: "On ne demande jamais à un élève de montrer ses comptes ni de dire ses mots de passe. Un élève qui révèle un compte piraté, une menace ou un chantage : l'écouter, l'aider à sécuriser son compte sans regarder son contenu, l'orienter vers le 3018 ou un adulte référent. En cas de chantage à caractère sexuel, informer le chef d'établissement le jour même."
    }
  });
})();
