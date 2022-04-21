import P from 'prop-types';
import * as Styled from './styles';

export const FilterByGroup = ({ children }) => {
  return (
    <Styled.Container>
      <>{children}</>
    </Styled.Container>
  );
};

FilterByGroup.propTypes = {
  children: P.node.isRequired,
};
