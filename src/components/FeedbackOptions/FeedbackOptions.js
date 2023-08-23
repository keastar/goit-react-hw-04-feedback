import React from 'react';
import shortid from 'shortid';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.task1__buttons}>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={css.task1__buttons_btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
