import { ButtonStyle, ButtonsWrapper } from './FeedbackOptions.styled';

export const FeedbackButtons = props => {
  const { onFeedback } = props;
  return (
    <ButtonsWrapper>
      <ButtonStyle name="good" key={crypto.randomUUID()} onClick={onFeedback}>
        Good
      </ButtonStyle>

      <ButtonStyle
        name="neutral"
        key={crypto.randomUUID()}
        onClick={onFeedback}
      >
        Neutral
      </ButtonStyle>

      <ButtonStyle name="bad" key={crypto.randomUUID()} onClick={onFeedback}>
        Bad
      </ButtonStyle>
    </ButtonsWrapper>
  );
};
