import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const options = { good, neutral, bad };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  const handleLeaveFeedback = e => {
    switch (e) {
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
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {(countTotalFeedback() === 0) ? <Notification message="There is no feedback" /> : (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />)}
      </Section>
    </div>
  );
};