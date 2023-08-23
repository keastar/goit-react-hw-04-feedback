import React from 'react';
import css from '../Section/Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ text, children }) => {
  return (
    <>
      <h5 className={css.h5}>{text}</h5>
      {children}
    </>
  );
};

Section.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
