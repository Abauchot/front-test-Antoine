## LE TEST

### Les libs

- https://chakra-ui.com/getting-started

### A faire

- clean de l'application (fait ce qui te parait nécessaire pour optimiser l'application et la lisibilité du code)  FAIT

- Implémenter un tri par âge (croissant/décroissant)  FAIT

- Implémenter un background color différent entre les ages : plus c'est vieux plus c'est sombre FAIT 

- Fait un truc qui te parait agréable à l'oeil (tu as carte blanche, mais te prends pas trop la tête non plus) MEH

- Intégrer cette api https://api.genderize.io pour obtenir des infos sup de la personne en fonction de son prénom 
(on est d'accord que c'est un peu sexiste c'est pas fou... mais j'ai pas trouvé mieux en rapport avec le prénom, don't judge me) FAIT

- le titre de la page (document.title) doit prendre le nom de la personne sélectionnée (tips : useEffect) FAIT 

- Afficher la moyenne d'âge de toutes les personnes en haut de la page FAIT

- Choses que je veux voir absolument dans le code :
    - un Context (https://reactjs.org/docs/context.html) (tips: ça implique de découper ton code en plusieurs fichiers/composants) FAIT 
    - un peu de typage avec Typescript FAIT 

- Rapport :
- J'ai réussi à clean un peu le code, il est un peu plus lisible cependant on pourrait encore mieux faire avec par exemple un component juste pour le bouton de tri afin d'avoir le moins de fonction possible dans l'App
- J'ai implémenté le tri par âge croissant et décroissant, j'ai aussi implémenté un background color différent en fonction de l'âge de la personne.
- J'ai gardé la même structure de page, mais mon idée de base était de faire en sorte que la partie cliquable avec le nom age et BTN soient sur la même row pour essayer d'en voir le plus possible, 
  - mais j'ai pas réussi à le faire avec chakra-ui.
- J'ai intégré l'api, uniquement pour afficher le 'gender', j'ai pas forcément trouvé pertinent d'ajouter le count. J'ai un peu galéré à l'intégrer, j'ai dû faire un useEffect pour que ça fonctionne.
- J'ai réussi à faire en sorte que le titre de la page change en fonction de la personne sélectionnée.
- J'ai affiché la moyenne d'âge de toutes les personnes en haut de la page.
- De base j'ai voulu faire un context pour un darkmode, mais je voulais pas y passer trop de temps car je voulais faire le plus possible, donc il marche uniquement sur le Heading.
- J'ai mis du typage avec Typescript, j'ai pas trop l'habitude de l'utiliser donc j'ai pas trop osé en mettre partout.
- Je pense que j'ai passé environ une dizaine d'heures dessus. 