import React from 'react';
import styled from 'styled-components';
import {
  List,
  ProjectFourDetails,
  ProjectOneDetails,
  ProjectThreeDetails,
  ProjectTwoDetails,
} from './components';
import { eng14, eng16 } from 'constants/fonts';
import { useNavigate, useParams } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleProjectClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  const handleTopClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <ListSection>
        <List activeId={id} onClick={handleProjectClick} />
      </ListSection>
      <DetailsSection>
        {id === undefined || Number(id) === 0 ? (
          <ProjectOneDetails />
        ) : Number(id) === 1 ? (
          <ProjectTwoDetails />
        ) : Number(id) === 2 ? (
          <ProjectThreeDetails />
        ) : Number(id) === 3 ? (
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
  margin-top: 4.5rem;
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
