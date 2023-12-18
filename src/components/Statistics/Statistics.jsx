import { StatisticsWrapper } from './Statistics.styled';

export const Statistics = props => {
  const { good, neutral, bad, totalFeedback, positiveFeedback } = props;

  return (
    <StatisticsWrapper>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive feedback: {positiveFeedback} </li>
    </StatisticsWrapper>
  );
};
