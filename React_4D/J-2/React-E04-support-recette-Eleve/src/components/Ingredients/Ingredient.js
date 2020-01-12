import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ quantity, name }) => (
  <li
    key={name}
    className="ingredient"
  >
    <span className="ingredient-quantity">{quantity}</span>
    <span className="ingredient-name">{name}</span>
  </li>
);

Ingredient.propTypes = {
  quantity: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Ingredient;