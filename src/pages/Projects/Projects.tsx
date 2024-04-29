import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Details, List } from './components';
import getProjects from 'services/projects/get-projects';
import { Project } from 'types';
import { useNavigate, useParams } from 'react-router-dom';

const Projects = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    if (Number.isNaN(Number(id))) {
      navigate('/projects');
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <ListSection>
        <List projects={projects} />
      </ListSection>
      <DetailsSection>
        {projects.length > 0 ? (
          <Details project={projects[Number(id) || 0]} />
        ) : null}
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
