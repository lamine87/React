/*
 * Exo5 : Ça va pas être possible…
 *
 * La famille Dunphy prévoit une sortie en boîte de nuit !
 *
 * Seul problème, pour rentrer, il faut :
 * - avoir au moins 18 ans ;
 * - avoir au moins 20 € en poche ;
 * - ceux qui n'ont pas 18 ans peuvent corrompre le videur, s'ils ont 500 € en poche.
 *
 * Créez un tableau admittedUsers à partir du tableau users, ne comportant que
 * les membres de la famille qui ont le droit d'entrer.
 *
 * Notions :
 * - JS : ce serait cool de pouvoir filtrer… (ES6)
 * - paradigme : programmation fonctionnelle
 */

var users = [
  {
    name: 'Claire',
    age: 34,
    cash: 2250,
  },
  {
    name: 'Phil',
    age: 35,
    cash: 1005,
  },
  {
    name: 'Haley',
    age: 18,
    cash: 10,
  },
  {
    name: 'Luke',
    age: 15,
    cash: 0,
  },
  {
    name: 'Alex',
    age: 16,
    cash: 400,
  },
  {
    name: 'Manny',
    age: 14,
    cash: 777,
  },
  {
    name: 'Lily',
    age: 5,
    cash: 5,
  },
];

var admittedUsers = users;










/*
 * Tests
 */
var result = document.getElementById('test');
if (
  admittedUsers.length === 3
  && admittedUsers[0].name === 'Claire'
  && admittedUsers[1].name === 'Phil'
  && admittedUsers[2].name === 'Manny'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
