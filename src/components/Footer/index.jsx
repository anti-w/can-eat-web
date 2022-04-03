import * as Styled from './styles';
import { Github, Linkedin } from '@styled-icons/bootstrap';

export const Footer = () => {
  return (
    <Styled.Container id="footer">
      <h4>Logo</h4>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Github
          size="32"
          style={{
            marginInline: '40px',
          }}
        />
        <Linkedin size="32" />
      </div>

      <div
        style={{
          textAlign: 'right',
          fontSize: '12px',
        }}
      >
        <h4>Acompanhe nosso projeto e intereja!</h4>
        <h4>Adoramos feedbacks.</h4>
      </div>
    </Styled.Container>
  );
};
