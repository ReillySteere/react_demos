import React from 'react';
import PropTypes from 'prop-types';

import './BasicButton.css';

const BasicButton = ({ onClick }) => (
  <button
    className="colorButton"
    type="button"
    onClick={onClick}
  >
    Change color
  </button>
);

BasicButton.propTypes = {
  onClick: PropTypes.node.isRequired,
};

export default BasicButton;
