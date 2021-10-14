import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ label, children }) => (
  <div className="row">
    <span>
      {label}
    </span>
    <span className="value">
      {children}
    </span>
  </div>
);

Row.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Row;
