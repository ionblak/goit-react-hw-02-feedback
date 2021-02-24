import React from 'react';

import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Titel from './Components/Titel';
import Statistics from './Components/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGoodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  incrementNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  incrementBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { bad, good, neutral } = this.state;

    const total = bad + good + neutral;

    const countPositiveFeedbackPercentage = () => {
      return Math.round((good * 100) / total);
    };

    return (
      <Section>
        <Titel titel="Please leave feedback" />

        <FeedbackOptions
          option="good"
          onLeaveFeedback={this.incrementGoodFeedback}
        />
        <FeedbackOptions
          option="neutral"
          onLeaveFeedback={this.incrementNeutralFeedback}
        />
        <FeedbackOptions
          option="bad"
          onLeaveFeedback={this.incrementBadFeedback}
        />

        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
