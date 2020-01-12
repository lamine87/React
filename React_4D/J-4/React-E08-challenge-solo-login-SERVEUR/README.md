# Challenge découverte : Axios + NodeJS

## Objectif

L'objectif est d'ajouter un peu de serveur et d'Ajax à notre interface de login !

## Instructions

### Lancer le serveur

Dans ce repo, lancez la commande suivante :
```shell
yarn && yarn start
```

Ça va installer les packages nécessaires et lancer le serveur sur le port 3000.

### Appel Ajax

Dans un autre terminal, rendez-vous dans le repo du challenge Login, installez axios, et lancez l'application sur `http://localhost:3333` comme d'habitude. Vous pouvez désormais faire vos requêtes ajax.  
Il vous faut pour cela faire des requêtes `POST` vers `http://localhost:3000`.

Vous disposez de deux routes :
* `/login`, qui doit recevoir `email` et `password`.  
En cas de succès, le serveur renvoie le prénom de l'utilisateur.  
Vous pouvez alors afficher un message pour lui souhaiter la bienvenue !

* `/forgot`, qui doit recevoir `email`.

Dans les deux cas, le serveur renvoie un code 200 en cas de succès,
ainsi qu'un code 400 en cas d'échec (mauvais mot de passe, e-mail inconnu…).

Pour ce faire, vous pouvez utiliser `axios({ method: 'POST' })` ou `axios.post()`.

### Id de connexion

Pour tester la connexion, vous pouvez utiliser les identifiants suivants :
* bouclierman@herocorp.io / jennifer
* acidman@herocorp.io / fructis
* captain.sportsextremes@herocorp.io / pingpong

## Whaaat ?!

Pas de panique, c'est plus simple que ça en a l'air !
* https://github.com/mzabriskie/axios#axios-api
* https://github.com/mzabriskie/axios#axiosposturl-data-config
* [Fiches récap Ajax](../../../fiches-recap/blob/master/js/ajax.md)

Vous pouvez vous aider des DevTools de Chrome pour visualiser les requêtes ajax,
via l'onglet **Network**.

:warning: Si vous voyez deux requêtes au lieu d'une, c'est normal. :warning:  
Lorsque l'on fait une requête d'un domaine (http://localhost:3333) vers un autre
(http://localhost:3000), axios enverra une première requête pour demander l'autorisation.
Il s'agit d'une précaution de sécurité, ce n'est pas notre code qui bug !


## Bonus

* Essayez de tirer parti de `axios.create()`, afin de ne pas avoir à spécifier `http://localhost:3000` à chaque requête.

* Afficher une erreur différente à l'utilisateur quand il y a des problèmes serveurs (erreur 500). Pour cela, vous pouvez couper votre serveur node.
