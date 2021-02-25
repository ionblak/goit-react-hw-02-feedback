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

  incrementFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);

    const total = bad + good + neutral;

    const countPositiveFeedbackPercentage = () => {
      return Math.round((good * 100) / total);
    };

    return (
      <Section>
        <Titel titel="Please leave feedback" />

        {options.map(item => (
          <FeedbackOptions
            key={item}
            option={item}
            onLeaveFeedback={this.incrementFeedback}
          />
        ))}
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
