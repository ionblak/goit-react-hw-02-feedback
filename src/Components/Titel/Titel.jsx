import React from 'react';
import PropTypes from 'prop-types';

const Titel = ({ titel }) => <h2>{titel}</h2>;

export default Titel;

Titel.propTypes = {
  titel: PropTypes.string.isRequired,
};
