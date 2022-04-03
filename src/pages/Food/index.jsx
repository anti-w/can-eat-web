import P from 'prop-types';
import * as Styled from './styles';

export const Food = ({ children }) => {
  return (
    <Styled.Container>
      <>{children}</>
    </Styled.Container>
  );
};

Food.propTypes = {
  children: P.node.isRequired,
};
