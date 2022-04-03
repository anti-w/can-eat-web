import * as Styled from './styles';
import { Github, Linkedin } from '@styled-icons/bootstrap';

export const Footer = () => {
  return (
    <Styled.Container id="footer">
      <h4>Logo</h4>
      <div
        style={{
          display: 'flex',
          margin: '10px',
        }}
      >
        <Github size="32" style={{ marginRight: '15px' }} />
        <Linkedin
          size="32"
          style={{ marginRight: '15px' }}
        />
      </div>

      <div
        style={{
          textAlign: 'right',
          fontSize: '12px',
        }}
      >
        <h4>Acompanhe nosso projeto!</h4>
        <h4>Adoramos feedbacks.</h4>
      </div>
    </Styled.Container>
  );
};
