# Cap'Autonomie

Application pédagogique pour le lycée professionnel : sept piliers (CPS, EVARS, Cyber, Orientation, EDUCFI, Droits, E3D), une boîte à outils et un espace personnel.

**Version actuelle : pilier CPS, Seconde « Moi » et Première « Moi et les autres » (10 séances).** Les autres piliers et niveaux apparaissent comme « Bientôt ».

## Principes

- **Aucun compte, aucune donnée envoyée.** Tout ce que l'élève écrit reste dans le navigateur de son appareil (stockage local). Il peut télécharger une sauvegarde, la restaurer ou tout effacer depuis « Mon espace ».
- **Fonctionne hors ligne** une fois ouverte une première fois (sur un site en https).
- **Accessible** : police Atkinson Hyperlegible, gros boutons, navigation au clavier.
- Chaque séance contient : « La dernière fois » (lien avec la séance précédente), « À quoi ça me sert ? », une ou plusieurs activités, « Ce qu'il faut retenir », une fiche ressource imprimable (ex. la roue des émotions), « Ce que je garde », « Je vérifie ce que j'ai compris » et « Pour aller plus loin ».
- Les fiches ressources sont aussi rassemblées dans « Ma boîte à outils ».
- Le déroulé de séance destiné à l'adulte est conservé dans les données (`adulte`) mais n'est plus affiché aux élèves : il sera réservé à l'espace enseignant.

## Mettre en ligne avec GitHub Pages

1. Sur GitHub, créez un dépôt public (par exemple `cap-autonomie`) et déposez-y tous les fichiers de ce dossier.
2. Dans le dépôt : **Settings › Pages › Build and deployment** : Source « Deploy from a branch », branche `main`, dossier `/ (root)`, puis **Save**.
3. Après une minute, l'application est en ligne à l'adresse `https://<votre-compte>.github.io/cap-autonomie/`.

## Adapter à votre établissement

Ouvrez **`js/config.js`** : c'est le seul fichier à modifier. Renseignez le nom du lycée et les adultes ressources (CPE, infirmerie, référent harcèlement…). Vérifiez les numéros nationaux une fois par an.

## Modifier ou ajouter du contenu

| Fichier | Contenu |
| --- | --- |
| `data/piliers.js` | Les 7 piliers (nom, couleur, actif ou non) et les niveaux |
| `data/cps-seconde.js` | Les 5 séances CPS de Seconde |
| `data/cps-premiere.js` | Les 5 séances CPS de Première |
| `js/engines.js` | Les moteurs d'activités réutilisables |
| `js/app.js` | Les pages et la navigation |
| `css/app.css` | L'apparence |

Pour ajouter un niveau ou un pilier, créez un fichier `data/<pilier>-<niveau>.js` sur le modèle de `cps-seconde.js`, ajoutez-le dans `index.html` (balise `<script>`) et dans la liste `FICHIERS` de `sw.js`, et passez le pilier à `actif: true` dans `data/piliers.js`.

**Après toute modification**, augmentez le numéro `VERSION` en haut de `sw.js` (par exemple `cap-v2`) pour que les appareils des élèves récupèrent la nouvelle version.

## Moteurs d'activités disponibles

| Moteur | Usage |
| --- | --- |
| `cartes` | Classer des cartes dans des catégories, ou ordonner des mots |
| `choisir` | Sélectionner des cartes (qualités, techniques), avec ajout personnel |
| `scenario` | Situations et dialogues à embranchements, avec retours |
| `quiz` | QCM, vrai/faux, ordre, question ouverte avec réponse possible |
| `carnet` | Formulaire personnel enregistré, imprimable |
| `liste` | Fiches répétables (journal, CV de mes réussites), imprimables |
| `coherence` | Cohérence cardiaque guidée (5 s / 5 s) |
| `jauges` | Se situer sur des curseurs, sans enregistrement |
| `defi` | Défi collaboratif : chaque élève du groupe voit des indices différents (hors ligne) |
| `binome` | Minuteur d'écoute en binôme, avec sujets tirés au sort |
| `reformuler` | Atelier de reformulation (message « Je ») qui repère les mots qui accusent |

## Liens entre piliers

Chaque séance a un champ `passerelles` (vide pour l'instant). Il sera rempli lors de la « passe de liens », quand d'autres piliers seront prêts ; les pastilles « Aussi dans : » apparaîtront alors automatiquement.
