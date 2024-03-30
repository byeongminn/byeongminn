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
  flex-direction: column;
  row-gap: 3rem;
`;

const Cue = styled.section`
  display: flex;
  column-gap: 1.5rem;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 3rem;
  }
`;

const Notes = styled.section``;
