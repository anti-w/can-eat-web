import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const Button = ({
  textInside,
  typeAction = '',
  size = 'small',
}) => {
  return (
    <Styled.ButtonContainer size={size}>
      <Link to={`/${typeAction}`}>
        <Styled.ButtonCall>{textInside}</Styled.ButtonCall>
      </Link>
    </Styled.ButtonContainer>
  );
};

Button.propTypes = {
  textInside: P.string.isRequired,
  typeAction: P.string,
  size: P.oneOf[('small', 'medium', 'big')],
};
