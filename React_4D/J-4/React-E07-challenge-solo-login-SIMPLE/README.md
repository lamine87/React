# Challenge Login

Des formulaires, d'accord, mais des formulaires React :muscle:

## Instructions

L'objectif est de créer un formulaire de connexion offrant une expérience utilisateur
conciliant *design* et utilisabilité. Une image vaut mieux que 1000 mots :

![resultat](resultat.gif)

On souhaite coder le formulaire en utilisant React, et la logique qui va avec :

- avec des inputs *contrôlées* (par React ^^)
- en séparant composants de présentation et « container » (ie. composant s'occupant de gérer les données)
- en minimisant le code, par exemple en factorisant les comportements liés à `setState`

Il semblerait que l'interface utilisateur soit dynamique : il doit être possible de passer d'une « vue » *connexion* à une autre, *mot de passe oublié*. Oh, et il semblerait que d'une vue à l'autre, les données soient persistantes…

## Charte

Cette fois-ci plus encore que d'habitude, on se donne pour objectif de faire une interface assez jolie… alors on sort ce qu'il faut : polices, couleurs, sens du détails !

Pour ne pas perdre trop de temps sur le challenge, le fichier `src/components/App/app.styl` est déjà préparé :kissing_heart:

Quant aux `<input />`, n'hésitez pas à reprendre notre composant `<Field />` codé aujourd'hui !

### Google Fonts

* Titres : Cinzel
* Textes : Crimson Text
* Boutons : Source Sans Pro

### Couleurs

* Titres : #51483f
* Textes : #999
* Input
  + Placeholder : #999
  + Valeur : #51483f
  + Bordure : #ccc
  + Bordure focus : #67c8d4
  + Label : #51483f
  + Label focus : #82d2dc
  + Error : #e31e2a
* Bouton : #67c8d4 + #fff
* Lien : #aaa8a6

### Images

Vous trouverez des images dans le dossier `src/components/App/assets/images`. Elles sont déjà branchées dans `app.styl` !
