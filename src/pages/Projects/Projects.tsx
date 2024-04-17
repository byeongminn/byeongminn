import React from 'react';
import styled from 'styled-components';
import { Detail, List } from './components';

const Projects = () => {
  return (
    <Container>
      <ListSection>
        <List />
      </ListSection>
      <DetailsSection>
        <Detail />
      </DetailsSection>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    row-gap: 0.5rem;
  }
`;

const ListSection = styled.section``;

const DetailsSection = styled.section`
  padding-left: 2rem;
  flex: 1;

  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 0;
  }
`;
