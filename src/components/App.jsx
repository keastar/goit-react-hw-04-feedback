import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Container from './Container';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const PositivePercentage = Math.round((good / total) * 100);

  function onLeaveFeedback(event) {
    const { name } = event.target;
    // console.log({ name });

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <Section text="Please leave Feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section text="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            PositivePercentage={PositivePercentage}
          />
        </Section>
      )}
    </Container>
  );
};
export default App;
