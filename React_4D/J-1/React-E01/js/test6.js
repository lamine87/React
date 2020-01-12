/*
 * Exo6 : Un sacré pactole
 *
 * Se rendant compte que tout le monde ne peut pas entrer en boîte,
 * la famille se console en se disant qu'ils ont économisé des sous.
 *
 * D'ailleurs, ils aimeraient bien savoir combien ils ont d'argent au total.
 * Mais ils ne savent pas utiliser `reduce`, donc ils galèrent un peu. Aidez-les !
 *
 * Notions :
 * - JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce (ES6)
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

var totalCash;










/*
 * Tests
 */
var result = document.getElementById('test');
if (totalCash === 4447) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
