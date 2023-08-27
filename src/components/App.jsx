import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  handleLeaveFeedback = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };

  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { handleLeaveFeedback } = this;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={handleLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {(total === 0) ? <Notification message="There is no feedback"></Notification> : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
        </Section>
      </div>
    );
  }
}