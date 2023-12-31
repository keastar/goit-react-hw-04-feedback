import css from './Container.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <>
      <div className={css.Container}>{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
