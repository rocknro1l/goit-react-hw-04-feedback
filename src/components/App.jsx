import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackButtons } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => good / countTotalFeedback();

  const totalFeedback = countTotalFeedback();
  const positiveFeedback =
    (countPositiveFeedbackPercentage() * 100).toFixed(0) + '%';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '50px',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackButtons onFeedback={handlerClick} />
      </Section>
      {totalFeedback === 0 ? (
        <Section title="Statistics">
          <h3>There is no feedback</h3>
        </Section>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      )}
    </div>
  );
};
