import React from 'react';
import styled from 'styled-components';
import { BeyondWork, Details, Image, MoreInformation } from './components';

const Contact = () => {
  return (
    <Container>
      <Cue>
        <Details />
        <MoreInformation />
        <BeyondWork />
      </Cue>
      <Notes>
        <Image />
      </Notes>
    </Container>
  );
};

export default Contact;

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
