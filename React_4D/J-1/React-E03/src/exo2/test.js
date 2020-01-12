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
      && root.children[0].children.length === 2
      && root.children[0].children[0].tagName === 'H1'
      && root.children[0].children[0].textContent === 'Ce HTML a été généré par JS'
      && root.children[0].children[1].tagName === 'H2'
      && root.children[0].children[1].textContent === 'Et affiché avec innerHTML'
      && document.defaultView.getComputedStyle(root.children[0]).getPropertyValue('text-align') === 'center'
    ));
  });
};
