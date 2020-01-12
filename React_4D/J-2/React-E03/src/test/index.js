/*
 * Code
 */
const result = document.getElementById('result');


/*
 * Export default
 */
export default (bool) => {
  if (bool) {
    result.className = 'success';
    result.textContent = 'Yep !';
  }
};
