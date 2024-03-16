import React, { useState } from 'react';
import styled from 'styled-components';
import {
  List,
  ProjectFourDetails,
  ProjectOneDetails,
  ProjectThreeDetails,
  ProjectTwoDetails,
} from './components';

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
      </DetailsSection>
      <Button onClick={handleTopClick}>TOP</Button>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  column-gap: 1rem;
  position: relative;
`;

const ListSection = styled.section`
  flex: 1;
`;

const DetailsSection = styled.section`
  flex: 6;
`;

const Button = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  cursor: pointer;
`;
