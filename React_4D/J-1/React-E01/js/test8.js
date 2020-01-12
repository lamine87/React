/*
 * Exo8 : Soyons poli
 *
 * Les développeurs c'est pas toujours poli. La tête dans le code, on en oublie
 * parfois les bonnes manières. Du coup, en bons développeurs, on va se créer un
 * robot qui répondra à notre place, poliement.
 *
 * Créez la fonction createRobot qui fonctionnera comme suit :
 *
 *    var hello = createRobot(['Bonjour', 'Hello']);
 *    hello.say(); // => 'Bonjour'
 *    hello.say(); // => 'Hello'
 *    hello.say(); // => 'Bonjour'
 *    hello.add('Coucou');
 *    hello.say(); // => 'Hello'
 *    hello.say(); // => 'Coucou'
 *    hello.say(); // => 'Bonjour'
 *    hello.delete('Hello');
 *    hello.say(); // => 'Coucou'
 *    hello.say(); // => 'Bonjour'
 *    hello.say(); // => 'Coucou'
 *    hello.add('Salut');
 *    hello.say(); // => 'Salut'
 *
 *  - say() = permet de dire la prochaine phrase
 *  - add(x) = permet d'ajouter la phrase x au vocabulaire du robot
 *  - delete(x) = permet de supprimer la phrase x du vocabulaire
 *
 * Notions :
 * JS : objet / encapsulation par fonctions
 * paradigme : programmation fonctionnelle / API
 */

function createRobot() {}















/*
 * Tests
 */
var result = document.getElementById('test');
var thanks = createRobot(['Thank you']);
thanks.add('Thanks');
thanks.delete('Thank you');
thanks.add('Ouh, thanks a lot!');
thanks.add('Thank you');
var oclock = createRobot([]);
oclock.add('J’peux pas, j’ai React');
oclock.delete('blabla');
oclock.add('Le JS, c’est la vie');
oclock.delete('J’peux pas, j’ai React');
if (
  thanks.say() === 'Thanks'
  && thanks.say() === 'Ouh, thanks a lot!'
  && thanks.say() === 'Thank you'
  && oclock.say() === 'Le JS, c’est la vie'
  && oclock.say() === 'Le JS, c’est la vie'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
