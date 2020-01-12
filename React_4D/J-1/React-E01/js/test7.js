/*
 * Exo7 : Hello Proto !
 *
 * Bon, ils n'ont pas été en boîte, mais vraisemblablement ça leur a plus de
 * faire du JS. Du coup, ils aimeraient carrément enrichir les types de baset
 * de JavaScript !
 *
 * Pour cela, il paraît que `prototype` et `this` sont utiles :
 *
 *    Array.prototype.hello = function() {
 *      console.log('Je suis un array qui contient ' + this.length + ' éléments.');
 *    }
 *
 *    ['un', 'deux', 'trois'].hello() // => Je suis un array qui contient 3 éléments.
 *
 *
 * On aimerait enrichir le type Array avec les méthodes suivantes :
 * - sum() => renvoie la somme de tous les éléments
 * - product() => renvoie le produit (multiplication) de tous les éléments
 * - divide(x) => renvoie un array, avec chaque élément de l'array qui a été divisé par x
 *
 * Notions :
 * - JS : fonctions fournies par ES6
 * - paradigme : programmation fonctionnelle
 */














/*
 * Tests
 */
var result = document.getElementById('test');
if (
  [1, 2, 3, 4].sum() === 10
  && [1, 2, 3, 4].product() === 24
  && [1, 2, 3, 4].divide(2).sum() === 5
  && [4, 4, 4, 4].divide(4).product() === 1
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
