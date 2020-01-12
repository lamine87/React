/*
 * Import
 */
import test from '../test';


/*
 * Export default
 */
export default () => {
  window.addEventListener('load', () => {
    const root = document.getElementById('root');
    test((
      root.children.length === 1
      && root.children[0].id === 'hello-world'
      && root.children[0].children.length === 4
      && root.children[0].children[0].tagName === 'H1'
      && root.children[0].children[0].textContent === 'Ce HTML a été généré par React'
      && root.children[0].children[1].tagName === 'H2'
      && root.children[0].children[1].textContent === 'Et affiché avec ReactDOM'
      && root.children[0].children[2].tagName === 'P'
      && root.children[0].children[2].textContent === 'Et c\'est super cool !'
      && root.children[0].children[3].tagName === 'P'
      && root.children[0].children[3].textContent === 'Vous ne trouvez pas ?'
    ));
  });
};
