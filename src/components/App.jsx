import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Container from './Container';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
    
  };
  
  countPositiveFeedbackPercentage = () => { 
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  onLeaveFeedback = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const objKey = Object.keys(this.state);

    return (
    
      <Container>
        < Section text="Please leave Feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        { total === 0 ? (
            <Notification message="There is no feedback" />
          ):( <Section text="Statistic">
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage}
                  />
              </Section>)
          }  
      </Container>
    
    );
  }
};

export default App;