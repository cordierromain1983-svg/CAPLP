/*
 * BOÎTE À OUTILS : LES SITUATIONS
 * Chaque situation regroupe les outils utiles à ce moment-là. Un outil peut apparaître dans
 * plusieurs situations. Les identifiants sont ceux des champs « outil.id » des séances.
 * Un outil d'un pilier pas encore actif n'est pas affiché.
 * Le vérificateur (node tests/verifier.js) signale un identifiant inconnu ou un outil rangé nulle part.
 * Ces situations pourront servir de base au passeport de compétences par situations.
 */
window.CAP_SITUATIONS = [
  { id: "stress", nom: "Ça ne va pas, je suis stressé ou en colère",
    outils: ["coherence-cardiaque", "anti-stress", "roue-emotions", "journal", "guide-affirmation", "messages-je", "conflit-4-etapes"] },
  { id: "autres", nom: "Avec les autres : groupe, désaccord, conflit",
    outils: ["mon-role", "consigne-claire", "messages-je", "conflit-4-etapes", "guide-affirmation", "charte-groupe", "face-aux-normes"] },
  { id: "relations", nom: "Mes relations, ma vie affective, ma santé",
    outils: ["aime-chez-moi", "reperes-relation", "envies-limites", "plan-soiree", "carte-sante", "bilan-evars"] },
  { id: "en-ligne", nom: "En ligne et sur les réseaux",
    outils: ["journal-verification", "fil-loupe", "nettoyage-numerique", "plan-securite", "check-up-confidentialite", "reflexe-anti-arnaque", "charte-groupe", "charte-ia", "bilan-cyber-texte"] },
  { id: "stage", nom: "Je pars en stage",
    outils: ["regles-stage", "bilan-stage", "contacts-pros", "mes-qualites", "cv-reussites", "coherence-cardiaque"] },
  { id: "candidater", nom: "Je cherche un emploi, une alternance ou une formation",
    outils: ["mon-cv", "lettre-type", "plan-candidatures", "reponses-entretien", "profil-pro", "contacts-pros", "reflexe-anti-arnaque", "cv-reussites"] },
  { id: "choisir", nom: "Je dois faire un choix",
    outils: ["decider", "criteres-choix", "choix-fin-seconde", "direction-terminale", "actions-ete", "projet-cercles", "engagement-apres-bac", "mes-valeurs"] },
  { id: "me-connaitre", nom: "Mieux me connaître",
    outils: ["portrait-orientation", "mes-qualites", "cv-reussites", "aime-chez-moi", "mes-valeurs", "valeurs-action", "mes-engagements", "roue-emotions"] }
];
