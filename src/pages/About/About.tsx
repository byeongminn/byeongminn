import React from 'react';
import styled from 'styled-components';
import {
  Awards,
  Education,
  Experiences,
  Introduction,
  Profile,
  Skills,
} from './components';

const About = () => {
  return (
    <Container>
      <Cue>
        <Profile />
        <Skills />
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
  margin-top: 3.25rem;
  display: flex;
  column-gap: 0.75rem;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 1rem;
    flex-direction: column;
    row-gap: 3rem;
  }
`;

const Cue = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

const Notes = styled.section`
  flex: 4;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;
