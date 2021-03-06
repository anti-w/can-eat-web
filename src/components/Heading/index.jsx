import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  size = 'huge',
  as = 'h1',
}) => {
  return (
    <Styled.Title as={as} size={size}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf([
    'xsmall',
    'small',
    'medium',
    'big',
    'huge',
  ]),
};
