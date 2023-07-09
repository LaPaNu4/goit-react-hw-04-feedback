import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedbackoptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [state, setState] = React.useState({
    
      good: 0,
      neutral: 0,
      bad: 0,
    },
  );

const onLeaveFeedback = type => {
  setState(prevState => ({
    
      ...prevState,
      [type]: prevState[type] + 1,
    
  }));
};
  const  countTotal = () => {
   
    return state.good + state.neutral + state.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotal()) * 100);
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
          options={Object.keys(state)}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() === 0 ? (
          'There is no feedback'
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotal()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
