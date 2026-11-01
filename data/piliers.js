/* Les 7 piliers. CPS, EVARS et Cyber sont actifs. */
window.CAP_PILIERS = [
  { id: "cps",         nom: "CPS",         num: 1, sous: "Me connaître, gérer mes émotions",      couleur: "#5B30AA", fond: "#F1EBFB", actif: true },
  { id: "evars",       nom: "EVARS",       num: 2, sous: "Mon corps, mes relations, le consentement", couleur: "#A51F52", fond: "#FBE9F0", actif: true },
  { id: "cyber",       nom: "Cyber",       num: 3, sous: "Protéger mes données, vérifier l'info", couleur: "#1D58A3", fond: "#E8F0FA", actif: true },
  { id: "orientation", nom: "Orientation", num: 4, sous: "Me projeter, montrer mes compétences",  couleur: "#0D6B64", fond: "#E3F4F2", actif: false },
  { id: "educfi",      nom: "EDUCFI",      num: 5, sous: "Budget Express : gérer mon argent",     couleur: "#964600", fond: "#FCEFE2", actif: false },
  { id: "droits",      nom: "Droits",      num: 6, sous: "Travail : contrat, salaire, sécurité",  couleur: "#3A4452", fond: "#ECEEF1", actif: false },
  { id: "e3d",         nom: "E3D",         num: 7, sous: "Éco-gestes : comprendre mon impact, agir", couleur: "#2A6E2A", fond: "#E8F3E6", actif: false }
];

/* Niveaux */
window.CAP_NIVEAUX = [
  { id: "2nde", nom: "Seconde", theme: "« Moi »" },
  { id: "1re",  nom: "Première", theme: "« Moi et les autres »" },
  { id: "tle",  nom: "Terminale", theme: "« Moi et le monde »" }
];

/* Les séances sont ajoutées par les fichiers de données (ex. cps-seconde.js) */
window.CAP_SEANCES = window.CAP_SEANCES || [];
