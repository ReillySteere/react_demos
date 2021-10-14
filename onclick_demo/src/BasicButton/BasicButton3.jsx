import React from 'react';
import PropTypes from 'prop-types';

import './BasicButton.css';

const BasicButton3 = ({ onClick, selectedTheme }) => (
  <button
    className="colorButton"
    type="button"
    onClick={() => { onClick(selectedTheme) }}
  >
    Change color
  </button>
);

BasicButton3.propTypes = {
  onClick: PropTypes.node.isRequired,
  selectedTheme: PropTypes.string,
};

BasicButton3.defaultProps = {
  selectedTheme: 'NONE',
}

export default BasicButton3;
