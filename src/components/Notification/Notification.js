import React from 'react';
import css from '../Section/Section.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <h5 className={css.h5}>{message}</h5>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
