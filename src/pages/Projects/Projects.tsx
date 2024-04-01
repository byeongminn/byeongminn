import React, { useState } from 'react';
import styled from 'styled-components';
import {
  List,
  ProjectFourDetails,
  ProjectOneDetails,
  ProjectThreeDetails,
  ProjectTwoDetails,
} from './components';
import { eng14, eng16 } from 'constants/fonts';

const Projects = () => {
  const [activeId, setActiveId] = useState(0);

  const handleProjectClick = (id: number) => {
    setActiveId(id);
  };

  const handleTopClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <ListSection>
        <List activeId={activeId} onClick={handleProjectClick} />
      </ListSection>
      <DetailsSection>
        {activeId + 1 === 1 ? (
          <ProjectOneDetails />
        ) : activeId + 1 === 2 ? (
          <ProjectTwoDetails />
        ) : activeId + 1 === 3 ? (
          <ProjectThreeDetails />
        ) : activeId + 1 === 4 ? (
          <ProjectFourDetails />
        ) : null}
        <Button onClick={handleTopClick}>TOP</Button>
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
  padding-left: 0.5rem;
  flex: 1;

  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 0;
  }
`;

const Button = styled.button`
  padding-block: 1.5rem;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border-block: 0.5px solid ${({ theme }) => theme.footerColor};
  border-inline: none;
  ${eng16};
  color: ${({ theme }) => theme.footerColor};

  @media ${({ theme }) => theme.device.mobile} {
    ${eng14};
  }
`;
