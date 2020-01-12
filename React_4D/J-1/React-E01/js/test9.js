/*
 * Exo9 : BONUS
 *
 * Wouaw, vous êtes déjà au point 9 ?
 * Ça veut dire que vous avez traversé les obstacles d'ES5, êtes passés entre
 * les mailles de .filter(), en suivant la .map(), bref, bravo !
 *
 * Allez, un dernier boss pour la route :
 *
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste
 *
 * Le but, faire la moyenne des nombres passés en argument, quel que soit le
 * nombre d'arguments. À la vôtre !
 */

function average(...grades) {}













/*
 * Tests
 */
var result = document.getElementById('test');
if (average(15, 10, 16, 9) === 12.5) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
