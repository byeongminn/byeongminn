import { eng12, eng14, kor14, kor18 } from 'constants/fonts';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Project } from 'types';

interface Props {
  projects: Array<Project>;
}

const ListComponent = ({ projects }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleItemClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return projects.length > 0 ? (
    <Container>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          $isActive={
            id === undefined ? project.id === 0 : Number(id) === project.id
          }
          onClick={() => handleItemClick(project.id)}
        >
          <Logo></Logo>
          <Content>
            <Title>{project.title}</Title>
            <Chips>
              {project.chips.map(({ id, name }) => (
                <Chip key={id}>{name}</Chip>
              ))}
            </Chips>
          </Content>
        </ProjectItem>
      ))}
    </Container>
  ) : null;
};

export default ListComponent;

const Container = styled.div`
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 12rem;
  background-image: ${({ theme }) => theme.linearGradient};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-right: 1px solid transparent;

  @media ${({ theme }) => theme.device.tablet} {
    padding-right: 1rem;
    width: 8rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding-right: 0;
    width: 100%;
    flex-direction: row;
    row-gap: 0;
    column-gap: 1.25rem;
    background-image: none;
    border: none;
    padding-bottom: 1.25rem;
    overflow-x: auto;
  }
`;

const ProjectItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  text-align: center;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: row;
    row-gap: 0;
    column-gap: 0.75rem;
  }
`;

const Logo = styled.div`
  aspect-ratio: 4 / 3;
  background-color: #e1e5ed;

  @media ${({ theme }) => theme.device.mobile} {
    width: 2.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  white-space: nowrap;

  @media ${({ theme }) => theme.device.mobile} {
    row-gap: 0.25rem;
  }
`;

const Title = styled.h2`
  ${kor18};
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.mobile} {
    ${kor14};
    text-align: left;
  }
`;

const Chips = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.device.mobile} {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const Chip = styled.div`
  padding-inline: 0.5rem;
  background-color: ${({ theme }) => theme.chipBgColor};
  border: 1px solid ${({ theme }) => theme.chipBorderColor};
  border-radius: 10px;
  ${eng14};
  color: ${({ theme }) => theme.chipColor};

  @media ${({ theme }) => theme.device.mobile} {
    ${eng12};
  }
`;
