import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import './ingredients.sass';

/**
 * Composant React qui s'appelle Ingredients, qui génère un objet React.
 */
const Ingredients = ({ ingredients }) => (
  <div className="ingredients">
    <ul>
      {
        ingredients.map(ingredient => (
          <Ingredient
            key={ingredient.name}
            {...ingredient}
          />
        ))
      }
    </ul>
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default Ingredients;
