/*
 * PILIER EVARS · PREMIÈRE
 * Contenu validé (document « Pilier EVARS – Première »), conforme au programme EVARS
 * (BO de février 2025) et à la loi n° 2025-1057 du 6 novembre 2025 sur le consentement.
 * Ressources vérifiées en octobre 2026.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];
  var FSJ = "Fil Santé Jeunes";
  var DUREE = "1 h 50 (2 × 55 min)";
  var A = window.CAP_ACTU.texte; // faits datés : data/actualites.js

  function situation(titre, contexte, question, options, bilan) {
    var noeuds = { a: { contexte: contexte, question: question, choix: [] }, fin: { fin: { ok: true, titre: "À retenir :", texte: bilan } } };
    options.forEach(function (o) { noeuds.a.choix.push(o[1] ? { texte: o[0], vers: "fin", ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] }); });
    return { titre: titre, depart: "a", noeuds: noeuds };
  }
  // Scénario en plusieurs moments successifs : [{ contexte, question, options:[[texte, ok, retour]] }]
  function enchainement(titre, moments, bilan) {
    var noeuds = {};
    moments.forEach(function (m, i) {
      var suivant = i + 1 < moments.length ? "m" + (i + 1) : "fin";
      noeuds["m" + i] = { contexte: m.contexte, question: m.question, choix: m.options.map(function (o) {
        return o[1] ? { texte: o[0], vers: suivant, ok: true, retour: o[2] } : { texte: o[0], ok: false, retour: o[2] };
      }) };
    });
    noeuds.fin = { fin: { ok: true, titre: "Soirée terminée.", texte: bilan } };
    return { titre: titre, depart: "m0", noeuds: noeuds };
  }

  // ===================================================================
  // SÉANCE 1 · Faire la fête et rester maître de ses choix
  // ===================================================================
  S.push({
    id: "evars-1re-1", pilier: "evars", niveau: "1re", num: 1, duree: DUREE,
    titre: "Faire la fête et rester maître de ses choix",
    objectifCourt: "Profiter, se protéger, réagir après un risque",
    objectif: "Faire des choix en restant maître de soi et attentif à sa santé.",
    rappel: { seance: "evars-2nde-3", etiquette: "L'an dernier", texte: "L'an dernier, tu as appris à prendre soin de ton corps et à protéger ton intimité. Cette année, on passe aux choix : comment profiter d'une fête sans perdre le contrôle, et comment se protéger." },
    aqcms: {
      pourquoi: "L'alcool et les autres substances diminuent le discernement, et la pression du groupe pousse à faire des choses qu'on ne voulait pas.",
      apport: "Profiter d'une fête en restant maître de mes décisions, savoir protéger un ami, et savoir quoi faire après une prise de risque.",
      ou: "En soirée, en vacances, dans une relation, après un rapport non protégé.",
      lie: "Dire non (CPS Seconde, séance 5), décider (CPS Terminale, séance 2), le consentement (séance 2)."
    },
    accroche: "Une fête réussie, c'est quoi pour toi ? Les Grecs anciens avaient un mot, l'hybris : la démesure, quand on dépasse ses propres limites.",
    temps: ["La fête, le plaisir et l'excès", "Se protéger, et réagir après un risque"],
    activites: [{
      temps: 1, titre: "La soirée", moteur: "scenario",
      consigne: "Une soirée en cinq moments. À chaque fois, choisis ta réaction.",
      config: {
        id: "evars-1re-1",
        cas: [enchainement("La soirée de samedi", [
          { contexte: "Tu arrives à la soirée. Le groupe insiste pour que tu boives un verre « cul sec ».", question: "Que fais-tu ?", options: [
            ["Je bois pour ne pas passer pour un rabat-joie.", false, "Boire pour faire plaisir au groupe, c'est laisser les autres décider à ta place."],
            ["Je refuse simplement : « Non merci, ça me va comme ça. »", true, "Oui : refuser sans se justifier longuement, c'est ton droit."]
          ] },
          { contexte: "Tu as posé ton verre pour aller danser. Tu reviens dix minutes plus tard.", question: "Que fais-tu ?", options: [
            ["Je le reprends, c'est le mien.", false, "Un verre laissé seul peut avoir été modifié : on ne le reprend pas."],
            ["Je ne le reprends pas, et j'en prends un nouveau que j'ai vu servir.", true, "Oui : c'est le bon réflexe."]
          ] },
          { contexte: "Ton amie se sent soudain très mal et confuse, alors qu'elle a peu bu.", question: "Que fais-tu ?", options: [
            ["Je la laisse se reposer seule dans une chambre.", false, "On ne laisse jamais seule une personne qui va mal."],
            ["Je reste avec elle, je préviens un adulte et j'appelle le 15 ou le 112.", true, "Oui. Cela peut être une soumission chimique : administrer une substance à quelqu'un à son insu est un crime."]
          ] },
          { contexte: "Un ami très ivre veut partir avec une personne qu'il vient de rencontrer.", question: "Que fais-tu ?", options: [
            ["Je le laisse faire, c'est sa vie.", false, "Une personne très alcoolisée n'est pas en état de consentir ni de se protéger."],
            ["J'interviens et je le garde avec le groupe.", true, "Oui : protéger un ami, c'est ça aussi."]
          ] },
          { contexte: "C'est l'heure de rentrer. Le conducteur prévu a bu.", question: "Que fais-tu ?", options: [
            ["Je monte quand même, il dit qu'il va bien.", false, "L'alcool au volant multiplie le risque d'accident, même quand on se sent bien."],
            ["Je ne monte pas : j'appelle quelqu'un, je dors sur place ou je prends un autre moyen de transport.", true, "Oui : rentrer en sécurité passe avant tout."]
          ] }
        ], "Tu as gardé le contrôle de tes choix et protégé tes amis. Tu peux préparer ton plan pour une soirée sereine plus bas.")]
      }
    }, {
      temps: 2, titre: "Ce qui protège de quoi ?", moteur: "cartes",
      consigne: "Classe chaque moyen selon ce qu'il protège.",
      config: {
        fin: "Seul le préservatif protège à la fois des IST et d'une grossesse.",
        manches: [{
          type: "classer", titre: "Quelle protection ?", categories: ["IST et grossesse", "Grossesse seulement", "VIH seulement", "Pas fiable"],
          cartes: [
            { texte: "Le préservatif externe", reponse: "IST et grossesse" },
            { texte: "Le préservatif interne", reponse: "IST et grossesse" },
            { texte: "La pilule", reponse: "Grossesse seulement", explication: "La pilule ne protège pas des infections sexuellement transmissibles." },
            { texte: "L'implant", reponse: "Grossesse seulement" },
            { texte: "Le stérilet", reponse: "Grossesse seulement" },
            { texte: "La PrEP", reponse: "VIH seulement", explication: "Un traitement préventif contre le VIH, prescrit par un médecin. Il ne protège ni des autres IST ni d'une grossesse." },
            { texte: "Le retrait", reponse: "Pas fiable" }
          ],
          bilan: "Préservatif + contraception : la double protection."
        }]
      }
    }, {
      temps: 2, titre: "Que faire si… ?", moteur: "quiz",
      config: { id: "evars-1re-1-sante", questions: [
        { type: "qcm", enonce: "Le préservatif a craqué. Que faire ?", options: ["Attendre de voir s'il se passe quelque chose", "Contraception d'urgence au plus vite, traitement post-exposition au VIH aux urgences dans les 48 heures, puis dépistage", "Faire un test de grossesse le lendemain"], bonne: 1, explication: "La contraception d'urgence se prend au plus vite (jusqu'à 5 jours selon le type). Le traitement post-exposition au VIH se commence au mieux dans les 4 heures, au plus tard dans les 48 heures." },
        { type: "qcm", enonce: "Je veux me faire dépister des IST. Où aller ?", options: ["Seulement chez un médecin, avec une ordonnance", "En centre de dépistage (gratuit, anonyme) ou en laboratoire (gratuit et sans ordonnance avant 26 ans)", "Ce n'est pas possible avant 18 ans"], bonne: 1, explication: "Le dépistage est accessible gratuitement, et sans ordonnance en laboratoire avant 26 ans." },
        { type: "vf", enonce: "Les préservatifs sont gratuits en pharmacie jusqu'à 26 ans.", bonne: true, explication: "Externes et internes. Avant 18 ans, aucun document n'est demandé." },
        { type: "vf", enonce: "Un mineur peut consulter seul pour sa santé sexuelle et demander le secret.", bonne: true, explication: "Oui, même avant 18 ans." },
        { type: "ouverte", enonce: "Ton ou ta partenaire refuse le préservatif. Que peux-tu répondre ?", modele: "« Pour moi, c'est important : sans préservatif, je ne veux pas. On peut en reparler, mais c'est ma limite. » Tu as le droit de refuser un rapport non protégé." }
      ] }
    }],
    retenir: [
      "L'alcool et les substances diminuent le discernement : on prend des risques qu'on n'aurait pas pris.",
      "On peut refuser sans se justifier, et protéger un ami : ne jamais laisser seul quelqu'un qui va mal.",
      "Administrer une substance à quelqu'un à son insu (soumission chimique) est un crime. Une personne très alcoolisée ne peut pas consentir.",
      "Seul le préservatif protège à la fois des IST et d'une grossesse.",
      "Après un risque, on agit vite : traitement post-exposition dans les 48 heures, contraception d'urgence, dépistage."
    ],
    ressource: {
      titre: "Fête et santé : mes bons réflexes",
      intro: "Une fiche à garder pour les soirées, et en cas de prise de risque.",
      blocs: [
        { type: "liste", titre: "Mes règles d'une soirée sereine", items: ["Je prévois comment je rentre, et avec qui", "Je ne laisse jamais mon verre seul", "Je refuse sans me justifier", "Je ne laisse jamais seul un ami qui va mal", "Je ne monte pas avec un conducteur qui a bu ou consommé"] },
        { type: "tableau", titre: "Ce qui protège de quoi", colonnes: ["Moyen", "Protège de…"], lignes: [
          ["Préservatif externe ou interne", "IST et grossesse"],
          ["Pilule, implant, stérilet", "Grossesse seulement"],
          ["PrEP", "VIH seulement"],
          ["Retrait", "Rien de façon fiable"]
        ] },
        { type: "tableau", titre: "Après un risque : les délais", colonnes: ["Quoi", "Quand", "Où"], lignes: [
          ["Traitement post-exposition au VIH", "Au mieux dans les 4 heures, au plus tard 48 heures", "Urgences de l'hôpital"],
          ["Contraception d'urgence", "Au plus vite, jusqu'à 5 jours selon le type", "Pharmacie, infirmerie, centre de santé sexuelle"],
          ["Dépistage des IST", "Selon les conseils d'un professionnel", "Centre de dépistage, laboratoire"]
        ] },
        { type: "liste", titre: "Mes droits avant 26 ans", items: ["Préservatifs gratuits en pharmacie", "Dépistage gratuit, sans ordonnance en laboratoire", "Première consultation gratuite en santé sexuelle", "Je peux consulter seul et demander le secret, même avant 18 ans"] },
        { type: "liste", titre: "Numéros", items: ["15 ou 112 : urgence", "0 800 08 11 11 : sexualité, contraception, IVG", "Alcool info service : 0 980 980 930"] }
      ]
    },
    traces: [{
      titre: "Mon plan pour une soirée sereine", moteur: "carnet",
      outil: { id: "plan-soiree", nom: "Mon plan pour une soirée sereine", description: "Comment je rentre, ma personne de confiance, ma limite." },
      config: {
        cle: "plan-soiree", titreDoc: "Mon plan pour une soirée sereine",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "retour", label: "Comment je rentre, et avec qui" },
          { id: "confiance", label: "Ma personne de confiance à appeler" },
          { id: "limite", label: "Ma limite" },
          { id: "phrase", label: "Ma phrase pour dire non" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "Qu'est-ce que l'hybris ?", options: ["La démesure : dépasser ses propres limites", "Une boisson grecque", "Une IST"], bonne: 0, explication: "Une notion grecque qui aide à réfléchir à la fête et à l'excès." },
      { type: "ouverte", enonce: "Le préservatif a craqué : cite deux réflexes et leur délai.", modele: "Traitement post-exposition au VIH aux urgences, au plus tard dans les 48 heures ; contraception d'urgence au plus vite, jusqu'à 5 jours selon le type ; puis dépistage." },
      { type: "vf", enonce: "La pilule protège des IST.", bonne: false, explication: "Elle protège seulement d'une grossesse. Seul le préservatif protège des IST." }
    ],
    plusLoin: [
      { titre: "Le traitement post-exposition au VIH", source: "Santé.fr", url: "https://www.sante.fr/node/88575", description: "Les délais, où l'obtenir, comment ça se passe." },
      { titre: "Mes droits en santé sexuelle avant 26 ans", source: "Crips Île-de-France", url: "https://www.lecrips-idf.net/wp-content/uploads/2026/04/crips_affiche_droits_sexuels_moins_26_ans_avril_2026.pdf", description: "Préservatifs, dépistage, contraception, consultation : ce qui est gratuit." },
      { titre: "Contraception d'urgence", source: "Service-Public.fr", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/f1100", description: "Où l'obtenir, et dans quels délais." }
    ],
    passerelles: ["cps-2nde-5", "cps-tle-2"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-10 min", "Accroche", "Répond à : « Une fête réussie, c'est quoi pour toi ? »", "Note les réponses ; présente la notion d'hybris."],
        ["Temps 1 · 10-40 min", "Activité", "Joue la simulation « La soirée » en cinq moments.", "Fait comparer les choix et leurs conséquences."],
        ["Temps 1 · 40-55 min", "Mise en commun", "Formule ses règles d'une soirée sereine.", "Rappelle le cadre légal, dont la soumission chimique."],
        ["Temps 2 · 0-15 min", "Activité", "Classe les moyens de prévention selon ce qu'ils protègent.", "Corrige avec des faits."],
        ["Temps 2 · 15-35 min", "Activité", "Répond au quiz « Que faire si… ? ».", "Insiste sur les délais et la gratuité avant 26 ans."],
        ["Temps 2 · 35-45 min", "Activité", "S'entraîne à répondre à un partenaire qui refuse le préservatif.", "Fait le lien avec la méthode d'affirmation de CPS."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Mon plan pour une soirée sereine » et répond à « Je vérifie ».", "Présente l'infirmière et le centre de santé sexuelle le plus proche."]
      ],
      vigilance: "On parle de prévention et de réduction des risques, jamais de façons de consommer : aucune quantité ni aucun dosage. Les questions intimes sont renvoyées vers l'infirmière ou un centre de santé sexuelle."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Le consentement
  // ===================================================================
  S.push({
    id: "evars-1re-2", pilier: "evars", niveau: "1re", num: 2, duree: DUREE,
    titre: "Le consentement",
    objectifCourt: "Dire oui, dire non, et ce que dit la loi",
    objectif: "Désirer et vouloir, donner ou refuser son consentement, savoir être libre et respecter les autres et leurs libertés.",
    rappel: { seance: "evars-1re-1", texte: "La dernière fois, tu as vu qu'une personne très alcoolisée ne peut pas consentir. Et en Seconde, que les signaux trompent et qu'il faut demander. Aujourd'hui, on va au bout de cette idée : qu'est-ce que le consentement, et que dit la loi ?" },
    aqcms: {
      pourquoi: "Le consentement est la base de toute relation intime, et la loi le définit précisément depuis " + A("loiConsentementMois") + ".",
      apport: "Exprimer mes envies et mes limites, reconnaître et respecter celles de l'autre, et savoir aider une victime.",
      ou: "Dans mes relations, entre amis, en soirée, au travail.",
      lie: "Dire non (CPS Seconde, séance 5), l'écoute (CPS Première, séance 2), la fête et les substances (séance 1)."
    },
    accroche: "Imagine que tu proposes une tasse de thé à quelqu'un. S'il dit oui, tu la lui prépares. S'il dit non, tu ne la lui fais pas boire de force. S'il hésite, tu ne la lui verses pas dans la bouche. S'il s'endort, tu ne lui fais pas boire non plus. S'il voulait du thé hier, ça ne veut pas dire qu'il en veut aujourd'hui. Évident pour le thé, non ?",
    temps: ["Vouloir, et dire oui ou non", "Ce que dit la loi, et aider une victime"],
    activites: [{
      temps: 1, titre: "Consentement ou pas ?", moteur: "cartes",
      consigne: "Pour chaque situation : y a-t-il consentement ?",
      config: {
        fin: "Le consentement est libre et éclairé, spécifique, préalable et révocable. Il ne se déduit jamais du silence.",
        manches: [{
          type: "classer", titre: "Y a-t-il consentement ?", categories: ["Consentement", "Pas de consentement", "Hésitation : on s'arrête"],
          cartes: [
            { texte: "Elle dit : « Oui, j'en ai envie », en souriant.", reponse: "Consentement", explication: "C'est même un consentement enthousiaste." },
            { texte: "Il ne dit rien et ne réagit pas.", reponse: "Pas de consentement", explication: "La loi précise que le silence ou l'absence de réaction ne valent pas accord." },
            { texte: "Elle avait dit oui hier, mais aujourd'hui elle n'a plus envie.", reponse: "Pas de consentement", explication: "Le consentement est révocable : on peut changer d'avis à tout moment." },
            { texte: "Il a dit oui pour s'embrasser, pas pour la suite.", reponse: "Pas de consentement", explication: "Le consentement est spécifique : oui à une chose ne veut pas dire oui à tout." },
            { texte: "Il dit : « Bon… si tu veux. »", reponse: "Hésitation : on s'arrête", explication: "Une hésitation vaut absence de consentement." },
            { texte: "Elle recule et change de sujet.", reponse: "Hésitation : on s'arrête", explication: "On s'arrête et on demande." },
            { texte: "Il a beaucoup bu et ne tient plus debout.", reponse: "Pas de consentement", explication: "Il n'est pas en état de décider librement." },
            { texte: "Elle dit oui après avoir été menacée d'être quittée.", reponse: "Pas de consentement", explication: "Il y a contrainte : le consentement n'est pas libre." }
          ],
          bilan: "Dans le doute, on s'arrête et on demande."
        }]
      }
    }, {
      temps: 2, titre: "Puni par la loi ?", moteur: "quiz",
      consigne: "Ces comportements sont souvent banalisés. Que dit la loi ?",
      config: { id: "evars-1re-2-loi", questions: [
        { type: "qcm", enonce: "Faire des remarques sexuelles répétées à quelqu'un qui n'en veut pas.", options: ["Ce n'est pas grave, c'est de l'humour", "C'est du harcèlement sexuel, puni par la loi"], bonne: 1 },
        { type: "qcm", enonce: "Commenter à voix haute le corps de quelqu'un dans la rue.", options: ["C'est un compliment", "C'est un outrage sexiste, puni par la loi"], bonne: 1 },
        { type: "qcm", enonce: "Envoyer des messages sexuels répétés à quelqu'un qui n'en veut pas.", options: ["C'est du cyberharcèlement, puni par la loi", "C'est autorisé si on ne se connaît pas"], bonne: 0 },
        { type: "qcm", enonce: "Toucher quelqu'un sans son accord.", options: ["C'est une agression sexuelle", "C'est un jeu si on rigole"], bonne: 0 },
        { type: "vf", enonce: "Dans un couple, on ne peut pas parler de viol.", bonne: false, explication: "Être en couple ne donne aucun droit sur le corps de l'autre. Un acte sexuel imposé reste un viol ou une agression sexuelle." }
      ] }
    }, {
      temps: 2, titre: "Une amie se confie", moteur: "scenario",
      config: {
        id: "evars-1re-2",
        cas: [{
          titre: "Une amie se confie", depart: "a",
          noeuds: {
            a: { contexte: "Une amie te dit, en pleurant, qu'elle a été forcée lors d'une soirée.", question: "Que lui réponds-tu d'abord ?", choix: [
              { texte: "« Tu es sûre ? Tu avais bu ? »", ok: false, retour: "Cette question la culpabilise. La victime n'est jamais responsable." },
              { texte: "« Je t'emmène tout de suite à la police. »", ok: false, retour: "L'intention est bonne, mais tu décides à sa place. Elle a d'abord besoin d'être écoutée." },
              { texte: "« Je te crois. Ce n'est pas ta faute. Tu veux qu'on en parle ensemble à quelqu'un qui peut t'aider ? »", vers: "b", ok: true, retour: "Oui : tu la crois, tu ne la juges pas, et tu lui proposes de l'aide." }
            ] },
            b: { qui: "Ton amie", texte: "S'il te plaît, ne dis rien à personne.", question: "Que réponds-tu ?", choix: [
              { texte: "« Promis, je ne dirai rien. »", ok: false, retour: "C'est trop lourd à porter pour vous deux, et elle a besoin d'aide." },
              { texte: "« Je comprends. Mais c'est trop lourd pour toi seule, et pour moi. Allons voir l'infirmière ensemble. »", vers: "fin", ok: true, retour: "Oui : tu restes à ses côtés et tu l'accompagnes vers un adulte." }
            ] },
            fin: { fin: { ok: true, titre: "Pour aider une victime :", texte: "écouter, la croire, ne pas la juger, et alerter un adulte avec elle. Le 119 et le 3919 conseillent aussi les proches." } }
          }
        }]
      }
    }],
    retenir: [
      "Depuis " + A("loiConsentementMois") + ", la loi définit le consentement : libre et éclairé, spécifique, préalable et révocable. Il ne peut pas se déduire du silence ou de l'absence de réaction.",
      "Une hésitation vaut absence de consentement : on s'arrête.",
      "Le viol et l'agression sexuelle sont toujours des crimes ou des délits, y compris dans un couple. La victime n'est jamais responsable.",
      "Pour aider une victime : écouter, la croire, ne pas la juger, et alerter un adulte avec elle."
    ],
    ressource: {
      titre: "Le consentement",
      intro: "Une fiche pour comprendre le consentement et ce que dit la loi.",
      blocs: [
        { type: "tableau", titre: "Les mots de la loi (" + A("loiConsentement") + ")", colonnes: ["Le consentement est…", "Ça veut dire…"], lignes: [
          ["Libre et éclairé", "Sans pression, sans menace, en étant en état de décider"],
          ["Spécifique", "Oui à une chose ne veut pas dire oui à tout"],
          ["Préalable", "Il se donne avant, pas après"],
          ["Révocable", "On peut changer d'avis à tout moment"],
          ["Jamais déduit du silence", "Ne rien dire ou ne pas réagir n'est pas un oui"]
        ] },
        { type: "tableau", titre: "Les mots justes", colonnes: ["Mot", "Ce que c'est"], lignes: [
          ["Harcèlement sexuel", "Des propos ou comportements à connotation sexuelle, répétés et imposés"],
          ["Outrage sexiste", "Un propos ou comportement sexiste ou sexuel qui humilie, par exemple dans la rue"],
          ["Agression sexuelle", "Un acte sexuel imposé, sans consentement"],
          ["Viol", "Une agression sexuelle avec pénétration ; c'est un crime"],
          ["Inceste", "Des violences sexuelles commises par un membre de la famille"]
        ] },
        { type: "texte", titre: "Les mineurs", texte: "Un majeur qui a une relation sexuelle avec un mineur de moins de 15 ans commet une infraction grave quand l'écart d'âge est d'au moins 5 ans. L'inceste sur un mineur est toujours puni." },
        { type: "etapes", titre: "Aider une victime", items: ["J'écoute, au calme", "Je la crois et je ne la juge pas : « Ce n'est pas ta faute »", "Je ne promets pas le secret", "Je l'accompagne vers un adulte ou une aide"] },
        { type: "liste", titre: "À qui en parler ?", items: ["Les adultes du lycée : infirmière, CPE, professeur", "119 : enfance en danger", "3919 : violences faites aux femmes", "17 ou 112 : danger immédiat"] }
      ]
    },
    traces: [],
    verifie: [
      { type: "ouverte", enonce: "Cite les mots qui définissent le consentement dans la loi.", modele: "Libre et éclairé, spécifique, préalable et révocable. Il ne peut pas se déduire du silence ou de l'absence de réaction." },
      { type: "vf", enonce: "Si quelqu'un ne dit rien, c'est qu'il est d'accord.", bonne: false, explication: "La loi précise que le silence ou l'absence de réaction ne valent pas consentement." },
      { type: "ouverte", enonce: "Que dis-tu en premier à une amie qui te confie avoir été forcée ?", modele: "« Je te crois. Ce n'est pas ta faute. »" }
    ],
    plusLoin: [
      { titre: "Sexualité avant 18 ans : ce que dit la loi", source: "CIDJ", url: "https://www.cidj.com/bien-vivre/face-a-la-justice/sexualite-avant-18-ans-ce-que-dit-la-loi", description: "La majorité sexuelle, les règles pour les mineurs." },
      { titre: "Dire non", source: FSJ, url: "https://www.filsantejeunes.com/dire-non-5681", description: "Poser ses limites, et les faire respecter." }
    ],
    passerelles: ["cps-1re-2"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-10 min", "Accroche", "Lit l'histoire de la tasse de thé.", "Fait transposer l'image au consentement."],
        ["Temps 1 · 10-35 min", "Activité", "Classe des situations : consentement, pas de consentement, ou hésitation.", "Apporte les mots de la loi après chaque cas discuté."],
        ["Temps 1 · 35-55 min", "Mise en commun", "Liste des façons d'exprimer ses envies et ses limites, et d'autres façons de montrer son affection.", "Rappelle qu'on peut montrer son amour sans relation sexuelle, et que dire non n'a pas à être justifié."],
        ["Temps 2 · 0-20 min", "Activité", "Répond au quiz « Puni par la loi ? ».", "Donne les mots justes : harcèlement, outrage sexiste, agression sexuelle, viol."],
        ["Temps 2 · 20-45 min", "Activité", "Joue la situation « Une amie se confie ».", "Insiste sur l'écoute, la croyance et l'alerte."],
        ["Temps 2 · 45-55 min", "Trace", "Garde la fiche et répond à « Je vérifie ».", "Rappelle les adultes et les numéros d'aide."]
      ],
      vigilance: "C'est la séance où une révélation est la plus probable : l'infirmière ou le CPE doit être prévenu et joignable. Aucune scène explicite. Si un élève défend une idée fausse (« elle l'a cherché »), répondre par la loi, sans humilier l'élève."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Être soi parmi les autres
  // ===================================================================
  S.push({
    id: "evars-1re-3", pilier: "evars", niveau: "1re", num: 3, duree: DUREE,
    titre: "Être soi parmi les autres",
    objectifCourt: "Stéréotypes, diversité et discriminations",
    objectif: "Être soi, entre acceptation et déni.",
    rappel: { seance: "evars-1re-2", texte: "La dernière fois, tu as vu que chacun décide pour son propre corps. Aujourd'hui, on va plus loin : chacun a aussi le droit d'être qui il est, sans être rejeté ni discriminé." },
    aqcms: {
      pourquoi: "Les stéréotypes et la pression du groupe poussent à rejeter ceux qui sont différents, ou à se cacher soi-même.",
      apport: "Reconnaître une discrimination, savoir réagir et à qui m'adresser, et me regarder avec bienveillance.",
      ou: "Au lycée, dans un club de sport, en stage et au travail.",
      lie: "Biologique ou norme (EVARS Seconde, séance 1), mon estime de moi (CPS Seconde, séance 3), résister au groupe (CPS Seconde, séance 5)."
    },
    accroche: "Fais deux colonnes : ce qu'on attend souvent d'un garçon, et ce qu'on attend souvent d'une fille. Qu'est-ce qui relève vraiment de la nature ?",
    temps: ["Normes, stéréotypes et diversité", "Discriminations, et s'accepter"],
    activites: [{
      temps: 1, titre: "Stéréotype, préjugé ou discrimination ?", moteur: "cartes",
      consigne: "Stéréotype : une idée toute faite sur un groupe. Préjugé : un jugement sur quelqu'un sans le connaître. Discrimination : traiter quelqu'un moins bien, ce qui est interdit par la loi.",
      config: {
        fin: "Le stéréotype et le préjugé peuvent mener à la discrimination, qui est interdite.",
        manches: [{
          type: "classer", titre: "De quoi s'agit-il ?", categories: ["Stéréotype", "Préjugé", "Discrimination"],
          cartes: [
            { texte: "« Les filles sont nulles en mécanique. »", reponse: "Stéréotype" },
            { texte: "« Les garçons ne savent pas s'occuper des enfants. »", reponse: "Stéréotype" },
            { texte: "« Elle doit être pénible, vu son style. »", reponse: "Préjugé" },
            { texte: "« Il ne parle pas beaucoup, il doit être bizarre. »", reponse: "Préjugé" },
            { texte: "Une entreprise refuse une stagiaire parce que c'est une fille.", reponse: "Discrimination", explication: "C'est interdit par la loi." },
            { texte: "On l'exclut de l'équipe parce qu'on dit qu'il est gay.", reponse: "Discrimination" },
            { texte: "Un club refuse l'inscription d'un jeune parce qu'il est trans.", reponse: "Discrimination" }
          ],
          bilan: "Une discrimination peut être signalée au Défenseur des droits (3928)."
        }]
      }
    }, {
      temps: 1, titre: "Les mots justes", moteur: "quiz",
      config: { id: "evars-1re-3-mots", questions: [
        { type: "qcm", enonce: "L'identité de genre, c'est…", options: ["Le genre auquel une personne s'identifie", "Les caractéristiques biologiques", "Par qui une personne est attirée"], bonne: 0 },
        { type: "qcm", enonce: "L'orientation sexuelle, c'est…", options: ["Le genre auquel une personne s'identifie", "Par qui une personne est attirée", "La façon de s'habiller"], bonne: 1 },
        { type: "vf", enonce: "Le sexe, l'identité de genre et l'orientation sexuelle sont la même chose.", bonne: false, explication: "Ce sont trois choses différentes. Chacun les vit à son rythme, et personne n'est obligé d'en parler." }
      ] }
    }, {
      temps: 2, titre: "Trois parcours", moteur: "scenario",
      consigne: "Trois personnages imaginés. Choisis la bonne réaction.",
      config: {
        id: "evars-1re-3",
        cas: [
          situation("Yanis, 17 ans, footballeur", "Dans les vestiaires, des coéquipiers lancent régulièrement des insultes homophobes. Certains rient.", "Tu es coéquipier. Que fais-tu ?", [
            ["Je ris aussi, c'est l'ambiance du vestiaire.", false, "Rire, c'est encourager. Les insultes blessent, même « pour rire »."],
            ["Je ne dis rien, ce n'est pas mon problème.", false, "Le silence du groupe laisse continuer. Tu peux agir sans te mettre en danger."],
            ["Je dis que ce n'est pas acceptable, et j'en parle à l'entraîneur.", true, "Oui. Une insulte liée à l'orientation sexuelle est plus lourdement punie par la loi."]
          ], "Dans le sport comme ailleurs, les insultes homophobes ou sexistes sont interdites. L'entraîneur et le club doivent agir."),
          situation("Clara, apprentie électricienne", "Clara est la seule fille de l'équipe. Elle reçoit chaque jour des remarques sexistes.", "Que peut faire Clara ?", [
            ["Supporter : c'est le métier qui veut ça.", false, "Non : le sexisme au travail est interdit, dans tous les métiers."],
            ["En parler à son tuteur et à son professeur référent.", true, "Oui. L'employeur doit protéger ses salariés contre le harcèlement. L'inspection du travail et la médecine du travail peuvent aussi être contactées."],
            ["Changer de métier.", false, "Ce n'est pas à elle de partir : c'est au comportement des autres de changer."]
          ], "Au travail aussi, le sexisme et le harcèlement sont interdits, et il existe des interlocuteurs."),
          situation("Sam, 16 ans", "Sam se pose des questions sur son orientation et a peur d'en parler. Un jour, Sam se confie à toi.", "Que fais-tu ?", [
            ["Je le raconte à mes amis, ce n'est pas un secret.", false, "Révéler l'orientation de quelqu'un sans son accord (outing) est une atteinte grave à sa vie privée."],
            ["Je lui dis que ça passera.", false, "Ce n'est pas à toi de décider de ce qu'il ressent."],
            ["J'écoute sans juger, et je respecte son rythme.", true, "Oui : chacun choisit s'il parle de son orientation, quand et à qui."]
          ], "Chacun vit son orientation et son identité à son rythme. Fil Santé Jeunes peut aussi écouter.")
        ]
      }
    }],
    retenir: [
      "Un stéréotype est une idée toute faite sur un groupe ; un préjugé, un jugement sans connaître ; une discrimination, un traitement défavorable, interdit par la loi.",
      "Le sexe, l'identité de genre et l'orientation sexuelle sont trois choses différentes. Chacun les vit à son rythme.",
      "Rejeter quelqu'un pour ce qu'il est peut aller jusqu'au harcèlement et à la violence, et fait souffrir.",
      "Au travail aussi, le sexisme et le harcèlement sont interdits, et il existe des interlocuteurs."
    ],
    ressource: {
      titre: "Être soi, respecter les autres",
      intro: "Une fiche pour reconnaître une discrimination et savoir à qui t'adresser.",
      blocs: [
        { type: "tableau", titre: "Trois notions", colonnes: ["Notion", "Ce que c'est", "Exemple"], lignes: [
          ["Stéréotype", "Une idée toute faite sur un groupe", "« Les filles sont nulles en mécanique »"],
          ["Préjugé", "Un jugement sur quelqu'un sans le connaître", "« Il doit être bizarre, il ne parle pas »"],
          ["Discrimination", "Traiter quelqu'un moins bien ; interdit par la loi", "Refuser une stagiaire parce que c'est une fille"]
        ] },
        { type: "tableau", titre: "Les mots justes", colonnes: ["Mot", "Ce que c'est"], lignes: [
          ["Sexe", "Les caractéristiques biologiques"],
          ["Identité de genre", "Le genre auquel une personne s'identifie"],
          ["Orientation sexuelle", "Par qui une personne est attirée"],
          ["Outing", "Révéler l'orientation ou l'identité de quelqu'un sans son accord : une atteinte à sa vie privée"]
        ] },
        { type: "liste", titre: "Au travail, à qui m'adresser ?", items: ["Mon tuteur et mon professeur référent de stage", "Les représentants du personnel", "L'inspection du travail", "La médecine du travail"] },
        { type: "liste", titre: "Les aides", items: ["Les adultes du lycée", "3928 : Défenseur des droits, contre les discriminations", "3018 : harcèlement et cyberharcèlement", "Fil Santé Jeunes : 0 800 235 236"] }
      ]
    },
    traces: [{
      titre: "Moi, face aux normes", moteur: "carnet",
      outil: { id: "face-aux-normes", nom: "Moi, face aux normes", description: "Les normes que je ressens, ce que je choisis, une phrase bienveillante." },
      config: {
        cle: "face-aux-normes", titreDoc: "Moi, face aux normes",
        intro: "Pour toi seul : personne d'autre ne voit ce que tu écris ici.",
        champs: [
          { id: "norme", label: "Une norme que je ressens", multi: true },
          { id: "choix", label: "Ce que je choisis de garder ou de laisser", multi: true },
          { id: "phrase", label: "Une phrase bienveillante pour moi-même" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Quelle différence entre un stéréotype et une discrimination ?", modele: "Un stéréotype est une idée toute faite ; une discrimination est un acte : traiter quelqu'un moins bien. La discrimination est interdite par la loi." },
      { type: "vf", enonce: "Identité de genre et orientation sexuelle, c'est la même chose.", bonne: false, explication: "L'identité de genre concerne le genre auquel on s'identifie ; l'orientation sexuelle, par qui on est attiré." },
      { type: "ouverte", enonce: "En stage, une collègue subit des remarques sexistes. À qui peut-elle s'adresser ?", modele: "Son tuteur, son professeur référent, les représentants du personnel, l'inspection du travail ou la médecine du travail." }
    ],
    plusLoin: [
      { titre: "Le 3928 contre les discriminations", source: "Défenseur des droits", url: "https://www.defenseurdesdroits.fr/sites/default/files/2023-11/ddd_antidiscriminations_3928_depliant_pages_20230112.pdf", description: "Signaler une discrimination, être conseillé gratuitement." },
      { titre: "Quand le groupe pense à ta place !", source: FSJ, url: "https://www.filsantejeunes.com/quand-le-groupe-pense-a-ta-place-6817", description: "Résister à la pression du groupe." }
    ],
    passerelles: ["cps-2nde-3", "cps-1re-5"],
    adulte: {
      deroule: [
        ["Temps 1 · 0-10 min", "Accroche", "Liste ce qu'on attend souvent d'un garçon et d'une fille.", "Fait repérer ce qui relève de la norme."],
        ["Temps 1 · 10-30 min", "Activité", "Classe des phrases : stéréotype, préjugé ou discrimination.", "Rappelle qu'une discrimination est interdite par la loi."],
        ["Temps 1 · 30-55 min", "Notions", "Découvre les mots justes : sexe, identité de genre, orientation sexuelle.", "Donne des définitions factuelles, sans débat sur les personnes."],
        ["Temps 2 · 0-30 min", "Activité", "Suit trois parcours imaginés et choisit ce qu'il ferait.", "Fait le lien avec le sport et le monde du travail."],
        ["Temps 2 · 30-45 min", "Mise en commun", "Liste ce qui aide à s'accepter, et ce qui empêche.", "Montre qu'une société inclusive protège tout le monde."],
        ["Temps 2 · 45-55 min", "Trace", "Remplit « Moi, face aux normes » et répond à « Je vérifie ».", "Rappelle que la trace est privée."]
      ],
      vigilance: "On ne demande jamais à un élève de parler de son orientation ou de son identité. Les parcours sont imaginés : aucun élève ne doit pouvoir s'y reconnaître."
    }
  });
})();
