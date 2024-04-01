import { GRAY400 } from 'constants/colors';
import { eng12, eng14, kor14, kor18 } from 'constants/fonts';
import React, { useEffect, useState } from 'react';
import getProjects from 'services/projects/get-projects';
import styled from 'styled-components';
import { Project } from 'types';

type Props = {
  activeId: string | undefined;
  onClick: (id: number) => void;
};

const List = ({ activeId, onClick }: Props) => {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchData();
  }, []);

  return projects.length > 0 ? (
    <Container>
      {projects.map(({ id, title, chips }) => (
        <ProjectItem
          key={id}
          $isActive={
            activeId === undefined ? id === 0 : Number(activeId) === id
          }
          onClick={() => onClick(id)}
        >
          <Logo></Logo>
          <Content>
            <Title>{title}</Title>
            <Chips>
              {chips.map(({ id, name }) => (
                <Chip key={id}>{name}</Chip>
              ))}
            </Chips>
          </Content>
        </ProjectItem>
      ))}
    </Container>
  ) : null;
};

export default List;

const Container = styled.div`
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 12rem;
  background-image: ${({ theme }) => theme.linearGradient};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-right: 1px solid transparent;

  @media ${({ theme }) => theme.device.tablet} {
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
  background-color: ${GRAY400};

  @media ${({ theme }) => theme.device.mobile} {
    width: 2.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

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
