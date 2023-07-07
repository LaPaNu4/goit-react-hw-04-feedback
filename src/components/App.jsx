import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedbackoptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [state, setState] = React.useState({
    stats: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  });

const onLeaveFeedback = type => {
  setState(prevState => ({
    stats: {
      ...prevState.stats,
      [type]: prevState.stats[type] + 1,
    },
  }));
};
  const  countTotal = () => {
   
    return state.stats.good + state.stats.neutral + state.stats.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.stats.good / countTotal()) * 100);
  };



  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(state.stats)}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() === 0 ? (
          'There is no feedback'
        ) : (
          <Statistics
            good={state.stats.good}
            neutral={state.stats.neutral}
            bad={state.stats.bad}
            total={countTotal()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
