# Cap'Autonomie

Application pédagogique pour le lycée professionnel : sept piliers (CPS, EVARS, Cyber, Orientation, EDUCFI, Droits, E3D), une boîte à outils et un espace personnel.

**Version actuelle : piliers CPS (15 séances de 45 min), EVARS (9 séances d'environ 1 h 50, en deux temps de 55 min), Cyber (9 séances de 55 min) et Orientation (9 séances de 55 min), de la Seconde à la Terminale.** Les autres piliers et niveaux apparaissent comme « Bientôt ».

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
| `data/actualites.js` | **Les faits datés à relire chaque rentrée** : calendrier Parcoursup, dates du bac, lois et peines citées. Les séances y puisent avec `A("cle")` |
| `data/situations.js` | Les situations de « Ma boîte à outils » (« Je pars en stage », « Ça ne va pas »…) et les outils de chacune |
| `data/cps-seconde.js` | Les 5 séances CPS de Seconde |
| `data/cps-premiere.js` | Les 5 séances CPS de Première |
| `data/cps-terminale.js` | Les 5 séances CPS de Terminale |
| `data/evars-seconde.js`, `evars-premiere.js`, `evars-terminale.js` | Les 3 séances EVARS de chaque niveau (programme EVARS de février 2025) |
| `data/cyber-seconde.js`, `cyber-premiere.js`, `cyber-terminale.js` | Les 3 séances Cyber & esprit critique de chaque niveau (EMI, CRCN / Pix, CNIL) |
| `data/orientation-seconde.js`, `orientation-premiere.js`, `orientation-terminale.js` | Les 3 séances Orientation de chaque niveau (référentiel des compétences à s'orienter, Parcoursup 2027) |
| `js/engines.js` | Les moteurs d'activités réutilisables |
| `js/app.js` | Les pages et la navigation |
| `css/app.css` | L'apparence |

Pour ajouter un niveau ou un pilier, créez un fichier `data/<pilier>-<niveau>.js` sur le modèle de `cps-seconde.js`, ajoutez-le dans `index.html` (balise `<script>`) et dans la liste `FICHIERS` de `sw.js`, et passez le pilier à `actif: true` dans `data/piliers.js`.

**Après toute modification**, augmentez le numéro `VERSION` en haut de `sw.js` (par exemple `cap-v2`) pour que les appareils des élèves récupèrent la nouvelle version.

Une activité peut porter `facultatif: true` : elle s'affiche avec la mention « si on a le temps », pour aider l'adulte à tenir les 55 minutes. À réserver aux séances denses (quatre activités ou plus).

## Chaque rentrée

1. Ouvrez `data/actualites.js`, vérifiez chaque valeur à sa source (dates Parcoursup, calendrier du bac, lois), puis mettez à jour `verifie` et `annee`.
2. Vérifiez les numéros nationaux et les adultes ressources dans `js/config.js`.
3. Lancez les vérifications ci-dessous, puis augmentez `VERSION` dans `sw.js`.

## Vérifier avant de publier

| Commande | Ce qu'elle vérifie |
| --- | --- |
| `node tests/verifier.js` | Sans navigateur, en une seconde : champs obligatoires, rappels et passerelles vers des séances existantes, outils et clés uniques, réglages de chaque moteur (y compris avec `parFiliere`), liens en https, tableaux des fiches, situations de la boîte à outils, faits datés utilisés et sourcés. Signale aussi `data/actualites.js` s'il n'a pas été relu depuis un an. |
| `python3 tests/navigateur.py` | Dans un navigateur invisible, trois fois (sans filière, CIEL, Métiers de la sécurité) : affiche chaque séance, fiche et outil, joue rapidement les activités, et signale toute erreur JavaScript. Il faut Python et Playwright (`pip install playwright`, puis `playwright install chromium`). |

Les deux commandes s'arrêtent avec une erreur s'il y a un problème : à corriger avant de publier.

## Moteurs d'activités disponibles

| Moteur | Usage |
| --- | --- |
| `cartes` | Classer des cartes dans des catégories, ou ordonner des mots |
| `choisir` | Sélectionner des cartes (qualités, techniques), avec ajout personnel |
| `scenario` | Situations et dialogues à embranchements, avec retours |
| `quiz` | QCM, vrai/faux, ordre, question ouverte avec réponse possible |
| `carnet` | Formulaire personnel enregistré, imprimable ; option `afficher` pour montrer ce que l'élève a déjà noté dans d'autres outils |
| `liste` | Fiches répétables (journal, CV de mes réussites), imprimables |
| `coherence` | Cohérence cardiaque guidée (5 s / 5 s) |
| `jauges` | Se situer sur des curseurs, sans enregistrement |
| `defi` | Défi collaboratif : chaque élève du groupe voit des indices différents (hors ligne) |
| `binome` | Minuteur en binôme, avec sujets tirés au sort (rôles et durée réglables) |
| `reformuler` | Atelier de reformulation qui repère des mots (message « Je », phrases de CV…), libellés réglables |
| `tas` | Trier des cartes en tas sans bonne réponse, puis garder les cartes clés (valeurs) |
| `debat` | Débat mouvant : se placer avant puis après le débat, avec un point de repère |
| `repertoire` | Liste filtrable par thème (carte des engagements), complétée par `js/config.js` |
| `cercles` | Projet en quatre cercles, avec reprise des traces des séances précédentes |
| `retouche` | Décodeur « Réel ou retouché ? » sur un portrait dessiné |
| `motdepasse` | Testeur de robustesse d'un mot de passe inventé (repères CNIL). Rien n'est enregistré ni envoyé |

Une séance peut être découpée en deux temps : champ `temps` de la séance (titres des deux temps) et champ `temps: 1` ou `temps: 2` sur chaque activité. Dans un quiz, une question `ordre` avec `libre: true` n'a pas de bonne réponse.

## Liens entre piliers

Chaque séance a un champ `passerelles` : la liste des identifiants des séances d'autres piliers qui lui sont liées (par exemple `["cps-2nde-3"]`). Il suffit d'écrire le lien dans un sens : le lien retour s'affiche automatiquement. Les liens apparaissent en haut de la séance (pastilles « Aussi dans : ») et dans le bloc « Voir aussi dans… ». Les liens EVARS ↔ CPS et Cyber ↔ CPS / EVARS sont déjà en place.

### Situations par filière

Une activité peut avoir un champ `parFiliere` : `{ ciel: { cas: [...] }, securite: { cartes: [...] } }`. Si l'élève a choisi sa filière dans « Mon espace », les situations (`cas` d'un scénario) ou les cartes (première manche d'un jeu de cartes) de sa filière s'ajoutent. Toute autre liste du même nom s'ajoute aussi (`sujets` d'un binôme, `questions` d'un quiz, `cartes` d'un tri…), et `config: {...}` remplace des réglages (par exemple la `note` d'une jauge ou les `cartes` d'un choix). Les filières sont déclarées dans `js/config.js` (`filieres`). Exemples : Cyber Terminale, séance 3 ; Orientation Seconde, séances 2 et 3.
