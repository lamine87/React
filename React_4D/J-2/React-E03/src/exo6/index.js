/* eslint-disable react/prop-types */
/*
 * Exo 6 : Faites des gosses…
 *
 * Ça commence à plus du tout ressembler à du JS cette histoire
 * mais on s'amuse bien, alors on continue encore un peu :P !
 *
 * 1) Créer un composant <HelloWorld />, qui renvoie le JSX suivant :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par *lang*</h1>
 *        <h2>Et affiché avec *method*</h2>
 *        *enfant*
 *      </div>
 *
 *      *lang* et *method* étant les deux propriétés d'un objet passé en argument.
 *      *enfant* est le JSX passé en enfant
 *
 *    Par exemple :
 *
 *      <HelloWorld lang="Titi" method="Gros minet">
 *        <p>Je suis un enfant</p>
 *      </HelloWorld>
 *
 *    doit renvoyer :
 *
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par Titi</h1>
 *        <h2>Et affiché avec Gros minet</h2>
 *        <p>Je suis un enfant</p>
 *      </div>
 *
 * 2) Exécuter au chargement du DOM la fonction render() de ReactDOM
 *    pour afficher
 *    <HelloWorld lang="React" method="ReactDOM">
 *      <p>Et c'est super cool !</p>
 *      <p>Vous ne trouvez pas ?</p>
 *    </HelloWorld>
 *    dans la div #root
 */

/*
 * Import
 */
import test from './test';


/*
 * Tests
 */
test();
