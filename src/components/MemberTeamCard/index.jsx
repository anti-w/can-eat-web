import P from 'prop-types';
import * as Styled from './styles';

import { Link } from 'react-router-dom';

import { Github, Linkedin } from '@styled-icons/bootstrap';

import { Description } from '../Description';
import { Heading } from '../Heading';

export const MemberTeamCard = ({
  photo,
  name,
  role,
  gitHub,
  linkedin,
}) => {
  return (
    <Styled.Container>
      <img src={photo} />
      <Heading size="small" as="h3">
        {name}
      </Heading>
      <Description>{role}</Description>
      <Styled.IconsContainer>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <Github
            size="32"
            style={{ marginRight: '15px' }}
          />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Linkedin
            size="32"
            style={{ marginRight: '15px' }}
          />
        </a>
      </Styled.IconsContainer>
    </Styled.Container>
  );
};

MemberTeamCard.propTypes = {
  photo: P.string.isRequired,
  name: P.string.isRequired,
  role: P.string.isRequired,
  gitHub: P.string.isRequired,
  linkedin: P.string.isRequired,
};
