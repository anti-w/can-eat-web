import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const Button = ({ textInside, typeAction = '' }) => {
  return (
    <Styled.ButtonContainer>
      <Link to={`/${typeAction}`}>
        <Styled.ButtonCall>{textInside}</Styled.ButtonCall>
      </Link>
    </Styled.ButtonContainer>
  );
};

Button.propTypes = {
  textInside: P.string.isRequired,
  typeAction: P.string,
};
