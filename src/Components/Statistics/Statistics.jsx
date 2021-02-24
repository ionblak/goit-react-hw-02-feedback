import React from 'react';
import Titel from '../Titel';
import Notification from '../Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const isFeedback = total === 0;
  return (
    <>
      <Titel titel="Statistics" />
      {isFeedback ? (
        <Notification message="No feedback given" />
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      )}
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
