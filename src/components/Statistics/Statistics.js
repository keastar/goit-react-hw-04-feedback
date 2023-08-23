import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.task1}>
      <div className={css.task1__text}>
        <p className={css.task1__text_p}>
          Good:<span>{good}</span>
        </p>
        <p className={css.task1__text_p}>
          Neutral: <span>{neutral}</span>
        </p>
        <p className={css.task1__text_p}>
          Bad:<span>{bad}</span>
        </p>
        <p className={css.task1__text_p}>
          Total:<span>{total}</span>
        </p>
        <p className={css.task1__text_p}>
          Positive Percentage:<span>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
