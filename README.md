# putaclic-js-jn-am-mp

## Je peux écrire !


Projet PutaClic – Version Mexicaine 🎉

Objectif du projet
Développer un jeu interactif en JavaScript sur le thème mexicain. Le joueur doit cliquer sur des objets culturels (piñatas, calaveras, cactus) apparaissant aléatoirement à l'écran pour marquer des points dans le temps imparti. Le jeu propose trois niveaux de difficulté avec des paramètres différents.

Fonctionnalités principales
1. Niveaux de difficulté
Le jeu propose 3 niveaux de difficulté thématiques :

¡Chiquito! (facile)
¡Valiente! (intermédiaire)
¡Luchador! (difficile)
Chaque niveau modifie les paramètres suivants :

Nombre d'objets à apparaître.
Temps de jeu imparti.
Temps d’apparition des objets.

2. Système d'objets à cliquer
Les balles sont remplacées par des objets culturels mexicains :

Piñatas colorées : +1 point.
Calaveras dorées (crânes en sucre) : +5 points (bonus).
Cactus : -2 points (malus).
Les objets apparaissent de manière aléatoire à l'écran, et disparaissent après un temps limité.

3. Système de score
Score en temps réel : affiché à l'écran pendant la partie.
Les objets bonus et malus influencent directement le score.

4. Interface utilisateur
Choix des niveaux : le joueur peut sélectionner un niveau via une interface thématique mexicaine.
Affichage du temps restant : un compteur ou une barre de progression montre le temps restant.
Affichage du score : score actuel visible en temps réel.


BONUS
Objets en mouvement: Les objets se déplacent La vitesse de déplacement des objets est défini dans les niveaux de difficulté.
Meilleur score : sauvegardé dans le local storage et mis à jour si le joueur dépasse son ancien record.
Affichage du meilleur score : toujours visible à côté du score actuel.
Animation et dynamique
Les piñatas explosent en confettis quand elles sont cliquées.
Les calaveras dorées produisent un effet lumineux ou des fleurs de cempasúchil (fleurs associées à Día de los Muertos).
Si un joueur clique sur un cactus, des épines apparaissent autour du curseur, symbolisant un malus.
Musique et sons
Bruitages : clics sur les objets produisent des sons typiques (maracas, guitare mariachi, etc.).
Musique de fond : bande sonore mexicaine jouée pendant la partie, intensifiée avec la difficulté.
Technologies utilisées
Langage principal : JavaScript (utilisation de l'API Canvas pour les animations).
HTML/CSS : pour l'interface utilisateur (choix des niveaux, affichage des scores).
Points techniques
1. Génération des objets
Les objets (piñatas, calaveras, cactus) sont générés de manière aléatoire sur le canvas.
2. Gestion des événements de clic
Les clics sont détectés en fonction des coordonnées des objets. Chaque type d'objet modifie le score en conséquence (bonus, malus, points réguliers).
3. Système de timing
Un compteur de temps régit la durée de la partie, avec un affichage en temps réel à l'écran.
Étapes de développement
Création de la structure HTML/CSS pour l'interface utilisateur (choix du niveau, affichage du score).
Développement du système de génération des objets (piñatas, calaveras, cactus).
Ajout des fonctionnalités de clic et de gestion du score (points, bonus, malus).
Intégration des niveaux de difficulté avec des paramètres ajustables (vitesse, nombre d'objets, temps).
Tests et ajustements pour équilibrer la difficulté et améliorer l'expérience utilisateur.
Ressources
freep!k : keyword -> mexique