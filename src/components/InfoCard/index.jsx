import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from '../Heading';
import { Description } from '../Description';

export const InfoCard = ({
  coverUrl,
  firstText,
  secondText,
}) => {
  return (
    <Styled.Container>
      <img src={coverUrl} />
      <Heading size="small" as="h3">
        {firstText}
      </Heading>
      <Description>{secondText}</Description>
    </Styled.Container>
  );
};

InfoCard.propTypes = {
  coverUrl: P.string.isRequired,
  firstText: P.string.isRequired,
  secondText: P.string.isRequired,
};
