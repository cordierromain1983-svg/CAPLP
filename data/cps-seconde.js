/*
 * PILIER CPS · SECONDE « Moi »
 * Contenu validé (document « Pilier CPS – Seconde »). Ordre aligné sur le référentiel
 * opérationnel CPS de Santé publique France : comprendre (S1-S3) puis réguler (S4-S5).
 *
 * Pour modifier un texte : changez-le ici, entre guillemets, puis enregistrez.
 * « passerelles » : laissées vides, elles seront remplies lors de la passe de liens.
 */
(function () {
  var S = window.CAP_SEANCES = window.CAP_SEANCES || [];

  // Petit outil pour écrire les situations de la séance 2 (deux étapes : émotion puis besoin)
  function situation(titre, texte, emotions, besoins, bilan) {
    return {
      titre: titre, depart: "emotion",
      noeuds: {
        emotion: {
          contexte: texte, question: "Quelle émotion ressentirais-tu ?",
          choix: emotions.map(function (e) { return { texte: e[0], vers: "besoin", ok: e[1], retour: e[2] }; })
        },
        besoin: {
          question: "Quel besoin n'a pas été respecté ?",
          choix: besoins.map(function (b) { return { texte: b[0], vers: "fin", ok: b[1], retour: b[2] }; })
        },
        fin: { fin: { titre: "Une réaction plus utile :", texte: bilan, ok: true } }
      }
    };
  }
  var BESOINS = {
    repos: "Repos", securite: "Sécurité", respect: "Respect", reconnaissance: "Reconnaissance",
    appartenance: "Appartenance (être accepté)", autonomie: "Autonomie (avoir mon mot à dire)", comprendre: "Comprendre (avoir l'information)"
  };

  // ===================================================================
  // SÉANCE 1 · Connaître et gérer ses émotions
  // ===================================================================
  S.push({
    id: "cps-2nde-1", pilier: "cps", niveau: "2nde", num: 1, duree: "45 min",
    titre: "Connaître et gérer ses émotions",
    objectifCourt: "Nommer ce que je ressens",
    objectif: "Nommer précisément une émotion, repérer ses signaux dans le corps et voir comment elle influence ce que je fais.",
    aqcms: {
      pourquoi: "Une émotion qu'on ne sait pas nommer décide souvent à notre place.",
      apport: "Mettre un mot sur ce que je ressens, au lieu de « je suis énervé » pour tout.",
      ou: "En classe, en stage quand on me fait une remarque, avec mes proches.",
      lie: "Mon estime de moi (séance 3), gérer mon stress (séance 4), m'affirmer (séance 5)."
    },
    accroche: "Ton tuteur te reprend devant un client. Qu'est-ce que tu ressentirais ? Essaie de trouver le mot le plus précis possible.",
    activites: [{
      titre: "Le jeu des émotions", moteur: "cartes",
      consigne: "Trois manches : ce que je vois sur un visage, ce que je sens dans mon corps, puis l'intensité.",
      config: {
        fin: "Tu as fait le tour des six émotions de base et de leurs nuances.",
        manches: [
          {
            type: "classer", titre: "Ce que je vois sur un visage",
            consigne: "Lis la description et choisis l'émotion qui correspond.",
            categories: ["Joie", "Tristesse", "Colère", "Peur", "Dégoût", "Surprise"],
            cartes: [
              { texte: "Sourcils froncés, mâchoire serrée, regard fixe", reponse: "Colère" },
              { texte: "Yeux grands ouverts, sourcils relevés, bouche ouverte", reponse: "Surprise", explication: "La surprise est brève : elle se transforme vite en une autre émotion." },
              { texte: "Coins de la bouche vers le bas, regard baissé", reponse: "Tristesse" },
              { texte: "Nez plissé, lèvre du haut relevée", reponse: "Dégoût" },
              { texte: "Yeux écarquillés, corps qui recule, sourcils tendus", reponse: "Peur" },
              { texte: "Joues relevées, yeux plissés, sourire", reponse: "Joie" }
            ],
            bilan: "Les autres lisent souvent nos émotions sur notre visage avant même qu'on parle."
          },
          {
            type: "classer", titre: "Ce que je sens dans mon corps",
            consigne: "Le corps donne des signaux. Quelle émotion annoncent-ils ?",
            categories: ["Joie", "Tristesse", "Colère", "Peur", "Dégoût", "Surprise"],
            cartes: [
              { texte: "Gorge serrée, mains moites, cœur qui bat vite", reponse: "Peur" },
              { texte: "Chaleur au visage, poings serrés, envie de crier", reponse: "Colère", explication: "Repérer ces signaux tôt permet de souffler avant d'exploser." },
              { texte: "Boule dans la gorge, envie de pleurer, fatigue", reponse: "Tristesse" },
              { texte: "Légèreté, énergie, envie de bouger", reponse: "Joie" },
              { texte: "Nausée, envie de reculer ou de détourner les yeux", reponse: "Dégoût" },
              { texte: "Sursaut, souffle coupé une seconde", reponse: "Surprise" }
            ],
            bilan: "Ces signaux sont des alertes utiles : ils te préviennent avant que l'émotion prenne toute la place."
          },
          {
            type: "ordonner", titre: "L'intensité",
            consigne: "Une même émotion a des nuances. Touche les mots du plus faible au plus fort.",
            series: [
              { nom: "Colère", mots: ["Agacé", "Énervé", "Furieux"] },
              { nom: "Peur", mots: ["Inquiet", "Effrayé", "Terrifié"] },
              { nom: "Tristesse", mots: ["Déçu", "Triste", "Effondré"] },
              { nom: "Joie", mots: ["Content", "Joyeux", "Euphorique"] }
            ],
            bilan: "Plus le mot est précis, plus il est facile d'expliquer aux autres ce qui se passe pour toi."
          }
        ]
      }
    }],
    retenir: [
      "Il y a six émotions de base : joie, tristesse, colère, peur, dégoût et surprise.",
      "Chaque émotion a des nuances, de la plus faible à la plus forte.",
      "Le corps donne des signaux : les repérer aide à agir avant d'exploser.",
      "Aucune émotion n'est mauvaise : c'est ce qu'on en fait qui compte."
    ],
    traces: [{
      titre: "Ma roue des émotions", moteur: "carnet",
      outil: { id: "roue-emotions", nom: "Ma roue des émotions", description: "Mes mots à moi pour chaque émotion." },
      config: {
        cle: "roue-emotions", titreDoc: "Ma roue des émotions",
        intro: "Pour chaque émotion, écris les mots que TOI tu utilises, et où tu la sens dans ton corps. C'est enregistré sur ton appareil, personne d'autre ne le voit.",
        champs: [
          { id: "joie", label: "Joie", aide: "content, joyeux, euphorique", placeholder: "Mes mots, où je la sens…" },
          { id: "tristesse", label: "Tristesse", aide: "déçu, triste, effondré", placeholder: "Mes mots, où je la sens…" },
          { id: "colere", label: "Colère", aide: "agacé, énervé, furieux", placeholder: "Mes mots, où je la sens…" },
          { id: "peur", label: "Peur", aide: "inquiet, effrayé, terrifié", placeholder: "Mes mots, où je la sens…" },
          { id: "degout", label: "Dégoût", aide: "gêné, écœuré, révulsé", placeholder: "Mes mots, où je la sens…" },
          { id: "surprise", label: "Surprise", aide: "étonné, stupéfait, choqué", placeholder: "Mes mots, où je la sens…" }
        ]
      }
    }],
    verifie: [
      { type: "ouverte", enonce: "Cite deux signaux du corps qui accompagnent la peur.", modele: "Gorge serrée, cœur qui bat vite, mains moites, tremblements, souffle court." },
      { type: "qcm", enonce: "Quelle est la différence entre « agacé » et « furieux » ?",
        options: ["L'intensité : agacé est faible, furieux est très fort", "Ce sont deux émotions différentes", "Il n'y a aucune différence"],
        bonne: 0, explication: "Ce sont deux nuances de la colère, à des intensités différentes." },
      { type: "vf", enonce: "Ressentir de la colère, c'est mal.", bonne: false,
        explication: "La colère signale souvent une injustice ou un besoin non respecté. C'est ce qu'on en fait qui peut poser problème." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Réagit à la situation du tuteur et dit ce qu'il ressentirait.", "Note les mots au tableau sans corriger. Constate souvent 3 ou 4 mots seulement."],
        ["8-25 min", "Activité", "Joue au jeu des émotions : visages, signaux du corps, intensité.", "Circule, relance : « Où le sens-tu dans ton corps ? »"],
        ["25-37 min", "Mise en commun", "Compare ses réponses : une même situation peut provoquer des émotions différentes.", "Fait émerger : émotion, intensité, signal du corps, réaction. Aucune émotion n'est « mauvaise »."],
        ["37-45 min", "Trace", "Complète sa roue des émotions et répond à « Je vérifie ».", "Présente le journal de bord facultatif utilisé en séance 2."]
      ],
      vigilance: "Les exemples personnels restent facultatifs. L'adulte ne lit pas la roue des émotions de l'élève."
    }
  });

  // ===================================================================
  // SÉANCE 2 · Comprendre ses besoins et ses réactions
  // ===================================================================
  S.push({
    id: "cps-2nde-2", pilier: "cps", niveau: "2nde", num: 2, duree: "45 min",
    titre: "Comprendre ses besoins et ses réactions",
    objectifCourt: "Ce qui se cache derrière mes réactions",
    objectif: "Relier une émotion à un besoin qui n'est pas satisfait, et repérer mes propres déclencheurs.",
    aqcms: {
      pourquoi: "Derrière une réaction forte, il y a souvent un besoin : respect, repos, sécurité, reconnaissance…",
      apport: "Comprendre pourquoi j'ai réagi ainsi, et pouvoir agir sur la cause.",
      ou: "Quand je m'emporte sans comprendre, en stage quand je suis fatigué ou mal à l'aise.",
      lie: "Mes émotions (séance 1), m'affirmer en exprimant mon besoin (séance 5)."
    },
    accroche: "Lucas claque la porte de l'atelier après une remarque de son professeur. Certains disent : « Il est caractériel. » Et si on se demandait plutôt : qu'est-ce qui lui manquait ?",
    activites: [{
      titre: "Quel besoin n'a pas été respecté ?", moteur: "scenario",
      consigne: "Six situations. Pour chacune, choisis l'émotion, puis le besoin en jeu. Plusieurs émotions sont parfois possibles.",
      config: {
        id: "cps-2nde-2",
        cas: [
          situation("Le bus en retard",
            "Ton bus est en retard. Tu arrives 10 minutes après le début du cours et le professeur te fait une remarque devant tout le monde.",
            [["Colère", true, "Logique : tu te sens traité injustement."], ["Tristesse", true, "Possible aussi, si tu te sens humilié."], ["Joie", false, "Peu probable ici. Relis la situation."], ["Surprise", true, "Possible au début, puis une autre émotion arrive souvent."]],
            [[BESOINS.respect, true, "Oui : tu as besoin qu'on tienne compte du fait que ce n'était pas de ta faute."], [BESOINS.repos, false, "Le repos n'est pas en jeu ici."], [BESOINS.securite, false, "Tu n'es pas en danger. Cherche du côté de la façon dont on t'a parlé."]],
            "Expliquer calmement le retard du bus après le cours, plutôt que de répondre devant la classe."),
          situation("La moquerie dans le couloir",
            "Un camarade se moque de ta tenue dans le couloir. D'autres rigolent.",
            [["Colère", true, "Oui, c'est une réaction fréquente."], ["Tristesse", true, "Oui, on peut se sentir blessé."], ["Joie", false, "Peu probable ici."], ["Peur", true, "Possible, si tu crains que ça recommence."]],
            [[BESOINS.appartenance, true, "Oui : tu as besoin d'être accepté par le groupe."], [BESOINS.respect, true, "Oui aussi : tu as besoin qu'on te respecte."], [BESOINS.comprendre, false, "Ce n'est pas un manque d'information. Pense au groupe."]],
            "Ne pas répondre par une insulte. Dire calmement « Ça ne me fait pas rire », et en parler à un adulte si ça se répète."),
          situation("Le tuteur qui ne dit jamais bonjour",
            "En stage, ton tuteur ne te dit jamais bonjour et ne te parle que pour donner des ordres.",
            [["Tristesse", true, "Oui, on peut se sentir transparent."], ["Colère", true, "Oui, ça peut agacer."], ["Joie", false, "Peu probable."], ["Dégoût", false, "Le dégoût concerne plutôt ce qui nous écœure. Essaie une autre émotion."]],
            [[BESOINS.reconnaissance, true, "Oui : tu as besoin d'être reconnu comme une personne, pas seulement comme un stagiaire."], [BESOINS.repos, false, "Ce n'est pas une question de fatigue."], [BESOINS.autonomie, false, "Pas vraiment. Pense à la façon dont il te considère."]],
            "Saluer toi-même chaque matin, demander un court point en fin de journée, et en parler à ton professeur référent si ça te pèse."),
          situation("La nuit trop courte",
            "Tu as dormi 4 heures avant un contrôle. Le matin, tout t'énerve.",
            [["Colère", true, "Oui : l'irritation est une forme de colère."], ["Tristesse", true, "Possible : la fatigue rend plus sensible."], ["Joie", false, "Peu probable avec 4 heures de sommeil."], ["Surprise", false, "Pas vraiment ici."]],
            [[BESOINS.repos, true, "Oui : ton corps manque de sommeil, et ça rend tout plus difficile."], [BESOINS.respect, false, "Personne ne t'a manqué de respect. La cause est ailleurs."], [BESOINS.reconnaissance, false, "Ce n'est pas le problème ici."]],
            "Repérer que l'énervement vient de la fatigue, prévenir « Je suis crevé aujourd'hui, je suis à cran », et protéger son sommeil avant les jours importants."),
          situation("Le changement de groupe",
            "On t'a changé de groupe d'atelier sans te demander ton avis.",
            [["Colère", true, "Oui, c'est fréquent."], ["Tristesse", true, "Oui, si tu quittes des camarades que tu apprécies."], ["Surprise", true, "Oui, au début."], ["Joie", false, "Peu probable si tu n'as pas choisi."]],
            [[BESOINS.autonomie, true, "Oui : tu as besoin d'avoir ton mot à dire sur ce qui te concerne."], [BESOINS.comprendre, true, "Oui aussi : tu as besoin de savoir pourquoi."], [BESOINS.repos, false, "Ce n'est pas une question de fatigue."]],
            "Demander calmement pourquoi ce changement a été décidé, et dire ce que tu en penses."),
          situation("La machine inconnue",
            "En stage, on te demande d'utiliser une machine que tu n'as jamais utilisée, sans t'expliquer.",
            [["Peur", true, "Oui : c'est normal d'avoir peur face à un danger possible."], ["Colère", true, "Possible, si tu trouves que c'est irresponsable."], ["Joie", false, "Peu probable."], ["Dégoût", false, "Pas vraiment ici."]],
            [[BESOINS.securite, true, "Oui : tu as besoin d'être en sécurité."], [BESOINS.comprendre, true, "Oui aussi : tu as besoin d'être formé avant d'utiliser la machine."], [BESOINS.appartenance, false, "Ce n'est pas le cœur du problème."]],
            "Dire « Je n'ai jamais été formé sur cette machine, vous pouvez me montrer ? ». C'est ton droit, et c'est une question de sécurité.")
        ]
      }
    }],
    retenir: [
      "Une réaction suit souvent une chaîne : situation, émotion, besoin, réaction.",
      "Familles de besoins : repos, sécurité, respect, reconnaissance, appartenance, autonomie, comprendre.",
      "Agir sur le besoin calme souvent l'émotion.",
      "Un déclencheur est une situation qui me fait réagir fort : le connaître aide à anticiper."
    ],
    traces: [{
      titre: "Mon journal de bord (facultatif)", moteur: "liste",
      outil: { id: "journal", nom: "Mon journal de bord", description: "Comprendre une situation qui m'a fait réagir." },
      config: {
        cle: "journal", titreDoc: "Mon journal de bord", titreListe: "Mes fiches", bouton: "Enregistrer dans mon journal",
        intro: "Facultatif et privé. Il reste sur cet appareil, personne ne le lit, et tu peux tout effacer quand tu veux.",
        champs: [
          { id: "situation", label: "Ce qui s'est passé", multi: true },
          { id: "ressenti", label: "Ce que j'ai ressenti", aide: "ta roue des émotions peut t'aider" },
          { id: "besoin", label: "Ce dont j'avais besoin" },
          { id: "prochaine", label: "Ce que je pourrais faire la prochaine fois", multi: true }
        ]
      }
    }],
    verifie: [
      { type: "ordre", enonce: "Remets la chaîne dans l'ordre.", elements: ["Situation", "Émotion", "Besoin", "Réaction"],
        explication: "La situation déclenche une émotion, qui signale un besoin, et c'est tout cela qui produit la réaction." },
      { type: "qcm", enonce: "Quel besoin peut se cacher derrière l'irritation après une nuit de 4 heures ?",
        options: ["Le repos", "La reconnaissance", "L'appartenance"], bonne: 0, explication: "Le manque de sommeil rend irritable : le besoin en jeu est le repos." },
      { type: "ouverte", prive: true, enonce: "Cite un de tes déclencheurs, pour toi seul.", modele: "Un déclencheur peut être une remarque devant les autres, une injustice, la fatigue, un ton sec… Le connaître t'aide à souffler avant de réagir." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Lit l'histoire de Lucas et propose une explication.", "Fait passer de « il est caractériel » à « qu'est-ce qui lui manquait ? »."],
        ["8-25 min", "Activité", "Joue à « Quel besoin n'a pas été respecté ? » sur 6 situations.", "Accepte plusieurs réponses possibles et demande de les justifier."],
        ["25-37 min", "Mise en commun", "Construit la chaîne : situation, émotion, besoin, réaction.", "Présente les familles de besoins comme un outil de discussion, pas comme une loi."],
        ["37-45 min", "Trace", "Découvre le journal de bord et y note, s'il le veut, une situation récente.", "Rappelle que le journal est privé et facultatif."]
      ],
      vigilance: "La pyramide de Maslow est contestée scientifiquement : on parle de « familles de besoins », sans hiérarchie fixe."
    }
  });

  // ===================================================================
  // SÉANCE 3 · Renforcer l'estime de soi
  // ===================================================================
  S.push({
    id: "cps-2nde-3", pilier: "cps", niveau: "2nde", num: 3, duree: "45 min",
    titre: "Renforcer l'estime de soi",
    objectifCourt: "Ce que je sais faire, preuves à l'appui",
    objectif: "Identifier mes qualités et mes réussites concrètes, et apprendre à les dire sans fausse modestie.",
    aqcms: {
      pourquoi: "On retient souvent ses échecs scolaires et on oublie ce qu'on réussit ailleurs.",
      apport: "Savoir dire ce que je sais faire, preuves à l'appui.",
      ou: "Dans un CV, une lettre de motivation, un entretien de stage, un oral d'examen.",
      lie: "Gérer mon stress avant un entretien (séance 4), m'affirmer (séance 5)."
    },
    accroche: "En 2 minutes, liste ce que tu ne sais pas faire. Puis, en 2 minutes, ce que tu sais faire. Quelle liste est la plus longue ?",
    activites: [{
      titre: "Mes qualités", moteur: "choisir",
      outil: { id: "mes-qualites", nom: "Mes qualités", description: "Les qualités que je me reconnais." },
      consigne: "Choisis de 3 à 5 qualités que tu te reconnais vraiment. Ensuite, demande à deux camarades volontaires celles qu'ils voient chez toi.",
      config: {
        cle: "mes-qualites", max: 5, min: 3, resume: "Mes qualités", titre: "Qualités",
        cartes: [
          { nom: "Persévérant(e)", ex: "Je ne lâche pas facilement" },
          { nom: "À l'écoute", ex: "Les autres se confient à moi" },
          { nom: "Débrouillard(e)", ex: "Je trouve des solutions" },
          { nom: "Ponctuel(le)", ex: "Je suis à l'heure" },
          { nom: "Calme", ex: "Je garde mon sang-froid" },
          { nom: "Curieux(se)", ex: "J'aime comprendre comment ça marche" },
          { nom: "Drôle", ex: "Je mets de la bonne humeur" },
          { nom: "Fiable", ex: "On peut compter sur moi" },
          { nom: "Courageux(se)", ex: "J'ose malgré la peur" },
          { nom: "Patient(e)", ex: "Je prends le temps" },
          { nom: "Organisé(e)", ex: "Je prévois et je range" },
          { nom: "Créatif(ve)", ex: "J'ai des idées" },
          { nom: "Serviable", ex: "J'aide sans qu'on me le demande" },
          { nom: "Honnête", ex: "Je dis la vérité" },
          { nom: "Minutieux(se)", ex: "Je fais attention aux détails" },
          { nom: "Manuel(le)", ex: "Je suis à l'aise avec mes mains" },
          { nom: "Sportif(ve)", ex: "Je m'entraîne avec régularité" },
          { nom: "Sociable", ex: "Je vais facilement vers les autres" },
          { nom: "Discret(e)", ex: "Je sais garder un secret" },
          { nom: "Motivé(e)", ex: "Je m'investis" },
          { nom: "Solidaire", ex: "Je soutiens les autres" },
          { nom: "Autonome", ex: "Je sais avancer seul(e)" },
          { nom: "Respectueux(se)", ex: "Je respecte les autres et les règles" },
          { nom: "Réfléchi(e)", ex: "Je pense avant d'agir" },
          { nom: "Rapide", ex: "J'exécute vite et bien" },
          { nom: "Attentif(ve)", ex: "Je remarque ce qui se passe" },
          { nom: "Accueillant(e)", ex: "Les nouveaux se sentent bien avec moi" },
          { nom: "Observateur(trice)", ex: "Je repère les problèmes" },
          { nom: "Pédagogue", ex: "J'explique bien aux autres" },
          { nom: "Responsable", ex: "J'assume ce que je fais" }
        ]
      }
    }, {
      titre: "Mes qualités en miroir", moteur: "carnet",
      consigne: "Deux camarades volontaires te donnent chacun une qualité, à l'oral ou sur papier. Uniquement des qualités, jamais de remarque négative.",
      config: {
        cle: "qualites-miroir", titreDoc: "Mes qualités en miroir",
        champs: [
          { id: "recues", label: "Les qualités que les autres voient chez moi", multi: true, placeholder: "Ex. : fiable, drôle, pédagogue…" },
          { id: "surprise", label: "Celle qui m'a surpris(e)", placeholder: "Et pourquoi ?" }
        ]
      }
    }],
    retenir: [
      "L'estime de soi, c'est la valeur que je m'accorde. La confiance en soi, c'est ce que je me sens capable de faire.",
      "Une qualité se prouve par un fait : « J'ai aidé mon oncle à rénover une pièce » montre que je suis manuel et persévérant.",
      "Mes réussites hors de l'école comptent autant que les autres.",
      "Savoir dire ce que je sais faire n'est pas de la vantardise : c'est utile pour un stage ou un emploi."
    ],
    traces: [{
      titre: "Le CV de mes réussites", moteur: "liste",
      outil: { id: "cv-reussites", nom: "Le CV de mes réussites", description: "Mes réussites et les qualités qu'elles montrent." },
      config: {
        cle: "cv-reussites", titreDoc: "Le CV de mes réussites", titreListe: "Mes réussites", bouton: "Ajouter cette réussite",
        intro: "Note au moins 3 réussites, scolaires ou non. Elles serviront plus tard pour ton CV et ton portfolio.",
        gabarit: "J'ai {reussite}, ce qui montre que je suis {qualite}.",
        champs: [
          { id: "reussite", label: "Ma réussite", placeholder: "Ex. : entraîné l'équipe de foot des moins de 10 ans" },
          { id: "qualite", label: "La qualité qu'elle montre", placeholder: "Ex. : patient et pédagogue" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "L'estime de soi, c'est…",
        options: ["La valeur que je m'accorde", "Ce que je me sens capable de faire", "Ce que les autres pensent de moi"],
        bonne: 0, explication: "« Ce que je me sens capable de faire », c'est la confiance en soi. Les deux sont liées mais différentes." },
      { type: "ouverte", enonce: "Transforme « je suis sérieux » en une phrase avec une preuve.",
        modele: "J'ai rendu tous mes dossiers de stage à l'heure cette année, ce qui montre que je suis sérieux." },
      { type: "ouverte", prive: true, enonce: "Cite une réussite qui n'a rien à voir avec l'école.",
        modele: "Garder ses frères et sœurs, réparer un scooter, progresser dans un sport, aider un voisin : tout cela compte." }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Liste en 2 minutes ce qu'il ne sait pas faire, puis ce qu'il sait faire. Compare les deux listes.", "Constate avec la classe que la première liste est souvent plus longue."],
        ["8-25 min", "Activité", "Choisit ses qualités, puis en reçoit de 2 camarades volontaires.", "Cadre strict : uniquement des qualités, aucune remarque négative ni ironique."],
        ["25-37 min", "Mise en commun", "Distingue estime de soi et confiance en soi.", "Insiste : une qualité se prouve par un fait."],
        ["37-45 min", "Trace", "Commence le CV de mes réussites : 3 réussites et la qualité qu'elles montrent.", "Indique que ce CV nourrira plus tard le portfolio et le vrai CV."]
      ],
      vigilance: "« Qualités en miroir » est à éviter dans une classe où un élève est isolé ou harcelé : l'adulte peut alors donner lui-même une qualité à chacun."
    }
  });

  // ===================================================================
  // SÉANCE 4 · Gérer son stress et les situations tendues
  // ===================================================================
  S.push({
    id: "cps-2nde-4", pilier: "cps", niveau: "2nde", num: 4, duree: "45 min",
    titre: "Gérer son stress et les situations tendues",
    objectifCourt: "Une technique qui marche en 5 minutes",
    objectif: "Reconnaître mes signaux de stress, tester une technique de régulation et me constituer une boîte à outils personnelle.",
    aqcms: {
      pourquoi: "Un peu de stress aide à se mobiliser ; trop de stress bloque la réflexion.",
      apport: "Une technique utilisable en 5 minutes, n'importe où.",
      ou: "Avant un contrôle, un oral, un appel à une entreprise, le premier jour de stage.",
      lie: "Mes émotions (séance 1), mes besoins (séance 2), la confiance avant un entretien (séance 3)."
    },
    accroche: null,
    activites: [{
      titre: "Mon thermomètre du stress", moteur: "jauges",
      consigne: "Place ton niveau de stress pour chaque situation. Rien n'est enregistré.",
      config: {
        id: "stress",
        items: ["Passer un oral devant la classe", "Appeler un patron pour un stage", "Un conflit avec un ami", "Arriver en retard", "Le premier jour de stage"],
        note: "Compare avec tes voisins si tu veux : les niveaux varient beaucoup d'une personne à l'autre. Le stress est personnel."
      }
    }, {
      titre: "La cohérence cardiaque", moteur: "coherence",
      outil: { id: "coherence-cardiaque", nom: "Cohérence cardiaque", description: "Respirer 5 minutes pour faire baisser le stress." },
      consigne: "Suis le cercle : il grandit pendant 5 secondes (j'inspire), puis diminue pendant 5 secondes (j'expire). Personne n'est obligé de fermer les yeux.",
      config: {}
    }],
    retenir: [
      "Un peu de stress aide à se mobiliser ; trop de stress bloque.",
      "Le stress se voit dans le corps : cœur rapide, souffle court, muscles tendus.",
      "Cohérence cardiaque : 6 respirations par minute (5 secondes pour inspirer, 5 pour expirer), pendant 5 minutes.",
      "Si le stress devient envahissant, on en parle à un adulte."
    ],
    traces: [{
      titre: "Ma boîte à outils anti-stress", moteur: "choisir",
      outil: { id: "anti-stress", nom: "Ma boîte anti-stress", description: "Les 3 techniques qui marchent pour moi." },
      consigne: "Choisis les 3 techniques qui marchent le mieux pour toi. Tu peux ajouter les tiennes.",
      config: {
        cle: "anti-stress", max: 3, min: 1, resume: "Ma boîte anti-stress", titre: "Techniques", perso: true, persoAide: "Ma propre technique",
        cartes: [
          { nom: "Cohérence cardiaque", ex: "5 minutes de respiration guidée" },
          { nom: "Bouger", ex: "Marcher, courir, m'étirer" },
          { nom: "Écrire", ex: "Noter ce qui me stresse pour le sortir de ma tête" },
          { nom: "Parler", ex: "À quelqu'un de confiance" },
          { nom: "Écouter de la musique", ex: "Une playlist qui me calme" },
          { nom: "Découper", ex: "Couper une grosse tâche en petites étapes" },
          { nom: "Préparer", ex: "Tenue, trajet, fiche : la veille" },
          { nom: "Visualiser", ex: "Imaginer la situation qui se passe bien" },
          { nom: "Dormir", ex: "Me coucher plus tôt avant un grand jour" }
        ]
      }
    }],
    verifie: [
      { type: "vf", enonce: "Le stress est toujours négatif.", bonne: false, explication: "Un peu de stress aide à se mobiliser. C'est l'excès de stress qui bloque." },
      { type: "qcm", enonce: "Combien de respirations par minute en cohérence cardiaque ?", options: ["3", "6", "12"], bonne: 1, explication: "6 respirations par minute : 5 secondes pour inspirer, 5 pour expirer." },
      { type: "ouverte", prive: true, enonce: "Dans quelle situation de ton stage pourrais-tu utiliser ta boîte à outils ?", modele: "Avant d'appeler une entreprise, le premier matin, avant de présenter ton travail au tuteur, après une remarque difficile…" }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Place sur le thermomètre son niveau de stress dans 5 situations.", "Montre que les niveaux varient d'un élève à l'autre : le stress est personnel."],
        ["8-15 min", "Notion", "Repère la courbe : trop peu de stress démotive, un peu mobilise, trop bloque.", "Explique avec un exemple sportif ou professionnel."],
        ["15-25 min", "Activité", "Pratique 5 minutes de cohérence cardiaque guidée.", "Pratique avec la classe. Précise que personne n'est obligé de fermer les yeux."],
        ["25-37 min", "Mise en commun", "Dit ce qu'il a remarqué et liste d'autres techniques qui marchent pour lui.", "Complète : bouger, écrire, parler à quelqu'un, découper une tâche."],
        ["37-45 min", "Trace", "Remplit sa boîte à outils anti-stress : 3 techniques qu'il choisit.", "Rappelle vers qui se tourner si le stress devient envahissant."]
      ],
      vigilance: "La cohérence cardiaque est sans risque pour la plupart des élèves ; un élève mal à l'aise peut simplement observer ou arrêter."
    }
  });

  // ===================================================================
  // SÉANCE 5 · S'affirmer sans s'opposer
  // ===================================================================
  S.push({
    id: "cps-2nde-5", pilier: "cps", niveau: "2nde", num: 5, duree: "45 min",
    titre: "S'affirmer sans s'opposer",
    objectifCourt: "Dire non sans blesser",
    objectif: "Distinguer les attitudes passive, agressive et affirmée, puis m'entraîner à dire non et à exprimer un désaccord calmement.",
    aqcms: {
      pourquoi: "Se taire ou s'emporter coûte cher, en classe comme en entreprise.",
      apport: "Des phrases toutes prêtes pour refuser, être en désaccord ou demander de l'aide sans blesser.",
      ou: "Face à la pression d'un groupe, avec un tuteur qui demande trop, dans mon couple, entre amis.",
      lie: "Mes émotions (séance 1), mes besoins (séance 2), mon estime de moi (séance 3)."
    },
    accroche: "On te demande : « Tu me prêtes ton chargeur ? » alors que tu en as besoin. Trois réponses possibles : te taire et le donner, crier « Achète-toi le tien ! », ou dire « Non, j'en ai besoin là, mais je te le prête après. » Laquelle préfères-tu entendre ?",
    activites: [{
      titre: "Le simulateur de dialogues", moteur: "scenario",
      consigne: "Quatre situations. À chaque étape, choisis ta réponse et regarde comment la suite change.",
      config: {
        id: "cps-2nde-5",
        cas: [
          {
            titre: "Copier ton devoir", depart: "a",
            noeuds: {
              a: { qui: "Karim", texte: "Vas-y, passe-moi ton devoir, je le recopie vite fait.", question: "Que réponds-tu ?",
                choix: [
                  { texte: "Bon… d'accord, tiens.", type: "passif", vers: "pa" },
                  { texte: "T'as qu'à bosser, t'es vraiment un profiteur.", type: "agressif", vers: "ag" },
                  { texte: "Non, je ne le passe pas. Par contre, je peux t'expliquer l'exercice 2 à la pause.", type: "affirme", vers: "b" }
                ] },
              pa: { fin: { type: "passif", titre: "Tu as cédé.", texte: "Karim recopie. Le professeur repère deux copies identiques et vous convoque tous les deux. Tu as dit oui alors que tu pensais non." } },
              ag: { qui: "Karim", texte: "Ok, garde-le ton devoir. T'es pas un pote.", fin: { type: "agressif", titre: "Le message est passé, mais à quel prix ?", texte: "Tu as refusé, mais en blessant Karim. L'ambiance est tendue toute la journée." } },
              b: { qui: "Karim", texte: "Allez, sois sympa, juste cette fois !", question: "Il insiste. Que réponds-tu ?",
                choix: [
                  { texte: "Bon, OK, mais juste cette fois…", type: "passif", vers: "bpa" },
                  { texte: "Lâche-moi maintenant !", type: "agressif", vers: "bag" },
                  { texte: "Je comprends que tu sois pressé, mais c'est non. Ma proposition pour la pause tient toujours.", type: "affirme", vers: "baf" }
                ] },
              bpa: { fin: { type: "passif", titre: "Attention.", texte: "Céder après avoir dit non apprend à l'autre qu'insister, ça marche." } },
              bag: { fin: { type: "agressif", titre: "Dommage.", texte: "Tu avais bien commencé. Sous la pression, tu t'es emporté : Karim retient surtout ton ton." } },
              baf: { qui: "Karim", texte: "Bon… OK, explique-moi à la pause alors.", fin: { type: "affirme", titre: "Réponse affirmée.", texte: "Tu as dit non à la demande, pas à la personne. Tu as tenu ta position calmement, et tu as proposé une solution." } }
            }
          },
          {
            titre: "Une photo moqueuse sur les réseaux", depart: "a",
            noeuds: {
              a: { qui: "Le groupe", texte: "On poste la photo de Théo endormi en cours, ça va faire un carton !", question: "Que réponds-tu ?",
                choix: [
                  { texte: "(Tu ne dis rien et tu regardes.)", type: "passif", vers: "pa" },
                  { texte: "Vous êtes vraiment des gros nazes.", type: "agressif", vers: "ag" },
                  { texte: "Moi, je ne suis pas d'accord. Publier ça, c'est l'humilier, et c'est interdit sans son accord.", type: "affirme", vers: "b" }
                ] },
              pa: { fin: { type: "passif", titre: "Se taire, c'est laisser faire.", texte: "La photo circule. Théo est humilié devant tout le lycée. Le silence du témoin aide celui qui se moque." } },
              ag: { qui: "Le groupe", texte: "Ah, monsieur fait la morale ! On poste quand même.", fin: { type: "agressif", titre: "L'insulte ne protège personne.", texte: "Le groupe se moque maintenant de toi aussi, et la photo part quand même." } },
              b: { qui: "Le groupe", texte: "Oh ça va, c'est pour rire !", question: "Que réponds-tu ?",
                choix: [
                  { texte: "Bon, faites ce que vous voulez…", type: "passif", vers: "bpa" },
                  { texte: "Vous êtes lourds, sérieux.", type: "agressif", vers: "bag" },
                  { texte: "Pour vous, peut-être. Pas pour lui. Moi, je ne partagerai pas.", type: "affirme", vers: "baf" }
                ] },
              bpa: { fin: { type: "passif", titre: "Tu as lâché.", texte: "Ton premier message était juste. Tu peux encore en parler à un adulte si la photo circule." } },
              bag: { fin: { type: "agressif", titre: "Le ton a pris le dessus.", texte: "Le groupe se braque et n'écoute plus ton argument." } },
              baf: { qui: "Le groupe", texte: "Bon… laisse tomber, on ne la poste pas.", fin: { type: "affirme", titre: "Réponse affirmée.", texte: "Tu as protégé Théo sans insulter personne. Si la photo circule quand même, parles-en à un adulte : ce n'est pas « balancer », c'est protéger." } }
            }
          },
          {
            titre: "Rester après l'heure en stage", depart: "a",
            noeuds: {
              a: { qui: "Ton tuteur", texte: "Tu restes jusqu'à 19 h ce soir, on a du retard.", question: "Ton dernier bus part à 18 h. Que réponds-tu ?",
                choix: [
                  { texte: "D'accord… (et tu te demandes comment rentrer).", type: "passif", vers: "pa" },
                  { texte: "C'est pas mon problème, je suis stagiaire.", type: "agressif", vers: "ag" },
                  { texte: "Je comprends l'urgence. Mon dernier bus part à 18 h et mes horaires sont fixés par ma convention de stage. Je peux arriver plus tôt demain ?", type: "affirme", vers: "b" }
                ] },
              pa: { fin: { type: "passif", titre: "Tu t'es mis en difficulté.", texte: "Tu rates ton bus et tu rentres très tard. Tes horaires de stage sont fixés par la convention : tu avais le droit d'en parler." } },
              ag: { qui: "Ton tuteur", texte: "Très bien. On verra ça dans ton évaluation.", fin: { type: "agressif", titre: "La relation se tend.", texte: "Ta limite était légitime, mais ta façon de la dire a fermé la discussion." } },
              b: { qui: "Ton tuteur", texte: "Les autres restent, eux.", question: "Il insiste. Que réponds-tu ?",
                choix: [
                  { texte: "Bon… je vais me débrouiller.", type: "passif", vers: "bpa" },
                  { texte: "Les autres, ils font ce qu'ils veulent !", type: "agressif", vers: "bag" },
                  { texte: "Je ne veux pas vous mettre en difficulté. J'appelle mon professeur référent pour voir ce qui est possible.", type: "affirme", vers: "baf" }
                ] },
              bpa: { fin: { type: "passif", titre: "Pense à ton professeur référent.", texte: "Quand une demande dépasse ta convention, ton professeur référent de stage est là pour t'aider." } },
              bag: { fin: { type: "agressif", titre: "Dommage.", texte: "Tu avais bien posé ta limite. L'attaque fait oublier ton argument." } },
              baf: { qui: "Ton tuteur", texte: "D'accord. Arrive à 7 h 30 demain alors.", fin: { type: "affirme", titre: "Réponse affirmée.", texte: "Tu as respecté ta limite et ta convention, tout en montrant ta bonne volonté." } }
            }
          },
          {
            titre: "Une note que tu trouves injuste", depart: "a",
            noeuds: {
              a: { contexte: "Tu reçois ta note de TP. Tu n'es pas d'accord avec la note sur la partie câblage.", question: "Que fais-tu ?",
                choix: [
                  { texte: "(Tu ne dis rien, mais tu rumines toute la journée.)", type: "passif", vers: "pa" },
                  { texte: "Monsieur, c'est n'importe quoi votre note, vous m'avez saqué !", type: "agressif", vers: "ag" },
                  { texte: "Monsieur, je ne comprends pas ma note sur la partie câblage. On peut regarder ensemble ce qui n'allait pas ?", type: "affirme", vers: "b" }
                ] },
              pa: { fin: { type: "passif", titre: "Tu restes avec ta frustration.", texte: "Tu ne sauras jamais ce qui n'allait pas, et tu risques de refaire la même erreur." } },
              ag: { qui: "Le professeur", texte: "Sur ce ton, on n'en parle pas.", fin: { type: "agressif", titre: "La porte se ferme.", texte: "Même si tu avais raison, l'accusation empêche toute discussion." } },
              b: { qui: "Le professeur", texte: "Je n'ai pas le temps maintenant.", question: "Que réponds-tu ?",
                choix: [
                  { texte: "Tant pis.", type: "passif", vers: "bpa" },
                  { texte: "Vous n'avez jamais le temps !", type: "agressif", vers: "bag" },
                  { texte: "D'accord. Quand est-ce que je pourrais passer ? C'est important pour moi.", type: "affirme", vers: "baf" }
                ] },
              bpa: { fin: { type: "passif", titre: "Tu as abandonné trop vite.", texte: "Ta demande était légitime : tu pouvais proposer un autre moment." } },
              bag: { fin: { type: "agressif", titre: "Dommage.", texte: "Ta première phrase était parfaite. Le reproche gâche tout." } },
              baf: { qui: "Le professeur", texte: "Passe demain à la fin du cours, on regardera.", fin: { type: "affirme", titre: "Réponse affirmée.", texte: "Tu as exprimé ton désaccord sans accuser, et tu as obtenu un rendez-vous." } }
            }
          }
        ]
      }
    }],
    retenir: [
      "Trois attitudes : passive (je m'efface), agressive (j'écrase l'autre), affirmée (je respecte l'autre et moi).",
      "La méthode en 3 temps : je décris les faits, je dis ce que je ressens ou ce dont j'ai besoin, je propose.",
      "Dire non à une demande, ce n'est pas dire non à la personne.",
      "Si l'autre insiste, je répète calmement ma position."
    ],
    traces: [{
      titre: "Mon guide d'affirmation", moteur: "carnet",
      outil: { id: "guide-affirmation", nom: "Mon guide d'affirmation", description: "Mes phrases pour dire non, être en désaccord, demander de l'aide." },
      config: {
        cle: "guide-affirmation", titreDoc: "Mon guide d'affirmation",
        intro: "Écris 3 phrases que tu pourrais vraiment dire, avec tes mots. Méthode : les faits, ce que je ressens ou mon besoin, ma proposition.",
        champs: [
          { id: "non", label: "Pour dire non", multi: true, placeholder: "Ex. : Non, je ne peux pas ce soir, mais samedi je suis dispo." },
          { id: "desaccord", label: "Pour exprimer un désaccord", multi: true, placeholder: "Ex. : Je ne suis pas d'accord, parce que… On pourrait plutôt…" },
          { id: "aide", label: "Pour demander de l'aide", multi: true, placeholder: "Ex. : Je n'ai pas compris cette étape, vous pouvez me la remontrer ?" }
        ]
      }
    }],
    verifie: [
      { type: "qcm", enonce: "« T'es lourd. » C'est une réponse…", options: ["Passive", "Agressive", "Affirmée"], bonne: 1, explication: "Elle attaque la personne au lieu de parler de la situation." },
      { type: "qcm", enonce: "« Bon… d'accord. » (alors que tu pensais non) C'est une réponse…", options: ["Passive", "Agressive", "Affirmée"], bonne: 0, explication: "Tu t'effaces : tu dis oui alors que tu pensais non." },
      { type: "qcm", enonce: "« Non, j'en ai besoin, mais je te le prête après. » C'est une réponse…", options: ["Passive", "Agressive", "Affirmée"], bonne: 2, explication: "Tu respectes ton besoin et l'autre, et tu proposes une solution." },
      { type: "ordre", enonce: "Remets la méthode en 3 temps dans l'ordre.", elements: ["Je décris les faits", "Je dis ce que je ressens ou mon besoin", "Je propose"], explication: "Les faits d'abord, sans juger ; puis ce que je ressens ; puis une proposition." },
      { type: "ouverte", enonce: "Reformule « Tu me saoules avec tes questions » de manière affirmée.", modele: "Là, je n'arrive pas à me concentrer avec toutes ces questions. On peut en parler à la pause ?" }
    ],
    passerelles: [],
    adulte: {
      deroule: [
        ["0-8 min", "Accroche", "Compare trois réponses à « Tu me prêtes ton chargeur ? » : se taire, crier, refuser poliment.", "Fait nommer les trois attitudes : passive, agressive, affirmée."],
        ["8-25 min", "Activité", "Joue le simulateur de dialogues sur 4 situations et compare les réactions de l'interlocuteur.", "Insiste sur le ton et les mots, pas seulement le contenu."],
        ["25-37 min", "Mise en commun", "Construit la méthode en 3 temps : faits, ressenti ou besoin, proposition.", "Fait le lien avec le message « Je », approfondi en Première."],
        ["37-45 min", "Trace", "Rédige son guide personnel : 3 phrases d'affirmation.", "Vérifie que les phrases sont réalistes dans la bouche d'un élève."]
      ],
      vigilance: "Si un élève évoque une situation réelle de harcèlement ou de pression, on ne la traite pas devant la classe : on en parle à part et on informe le CPE ou l'infirmière."
    }
  });
})();
