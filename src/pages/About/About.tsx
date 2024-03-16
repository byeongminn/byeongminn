import React from 'react';
import styled from 'styled-components';
import {
  Awards,
  Education,
  Experiences,
  Introduction,
  MoreInfomation,
  Profile,
  Skills,
} from './components';

const About = () => {
  return (
    <Container>
      <Cue>
        <Profile />
        <Skills />
        <MoreInfomation />
      </Cue>
      <Notes>
        <Introduction />
        <Education />
        <Experiences />
        <Awards />
      </Notes>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  column-gap: 0.75rem;
`;

const Cue = styled.section`
  flex: 1;
`;

const Notes = styled.section`
  flex: 4;
`;
