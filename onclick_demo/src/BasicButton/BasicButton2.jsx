import React from 'react';
import PropTypes from 'prop-types';

import './BasicButton.css';

const BasicButton2 = ({ onClick, selectedTheme }) => (
  <button
    className="colorButton"
    type="button"
    onClick={onClick(selectedTheme)}
  >
    Change color
  </button>
);

BasicButton2.propTypes = {
  onClick: PropTypes.node.isRequired,
  selectedTheme: PropTypes.string,
};

BasicButton2.defaultProps = {
  selectedTheme: 'NONE',
}

export default BasicButton2;
