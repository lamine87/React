import React from 'react';
import PropTypes from 'prop-types';

import './steps.sass';

const Steps = ({ steps }) => (
  <ol className="steps">
    {steps.map((step, index) => (
      <li
        key={step}
        className="step"
      >
        {step}
      </li>
    ))}
  </ol>
);

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Steps;
