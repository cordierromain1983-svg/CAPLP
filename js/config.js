/*
 * CONFIGURATION DE L'ÉTABLISSEMENT
 * ---------------------------------
 * C'est le SEUL fichier à modifier pour adapter l'application à votre lycée.
 * Vérifiez les numéros nationaux au moins une fois par an.
 * Dernière vérification des numéros nationaux : octobre 2026.
 */
window.CAP_CONFIG = {
  etablissement: "[Nom de votre lycée]",

  // Adultes ressources de l'établissement (affichés sur la page « Besoin d'aide »).
  // Mettez des fonctions et des lieux, pas forcément des noms.
  adultes: [
    { role: "CPE", ou: "Bureau de la vie scolaire, [bâtiment]", quand: "Tous les jours" },
    { role: "Infirmière / infirmier", ou: "Infirmerie, [bâtiment]", quand: "[Horaires]" },
    { role: "Référent harcèlement", ou: "[Lieu ou contact]", quand: "[Horaires]" },
    { role: "Psychologue de l'Éducation nationale (Psy-EN)", ou: "[Lieu]", quand: "Sur rendez-vous" },
    { role: "Ton professeur principal", ou: "En classe ou par la messagerie de l'ENT", quand: "" }
  ],

  // Numéros nationaux, gratuits.
  numeros: [
    { numero: "3018", titre: "Harcèlement et cyberharcèlement",
      detail: "Gratuit, anonyme et confidentiel. Tous les jours de 9 h à 23 h, aussi par tchat et appli 3018." },
    { numero: "0 800 235 236", titre: "Fil Santé Jeunes (12-25 ans)",
      detail: "Écoute sur la santé, le moral, les relations. Gratuit et anonyme, tous les jours de 9 h à 23 h." },
    { numero: "119", titre: "Enfance en danger",
      detail: "Si toi ou un autre jeune êtes en danger. Gratuit, 24 h/24, tchat jusqu'à 21 ans." },
    { numero: "3114", titre: "Prévention du suicide",
      detail: "Si tu as des idées noires ou si tu t'inquiètes pour quelqu'un. Gratuit, 24 h/24, 7 j/7." },
    { numero: "17 ou 112", titre: "Urgence, danger immédiat",
      detail: "Police ou gendarmerie. Le 114 par SMS pour les personnes sourdes ou malentendantes." }
  ]
};
