import { GRAY300, GRAY400, GRAY700, GRAY800 } from 'constants/colors';
import { eng14, kor18 } from 'constants/fonts';
import { projects } from 'constants/projects';
import React from 'react';
import styled from 'styled-components';

type Props = {
  activeId: number;
  onClick: (id: number) => void;
};

const List = ({ activeId, onClick }: Props) => {
  return (
    <Container>
      {projects.map(({ id, title, chips }) => (
        <Project
          key={id}
          $isActive={activeId === id}
          onClick={() => onClick(id)}
        >
          <Logo></Logo>
          <Title>{title}</Title>
          <Chips>
            {chips.map(({ id, name }) => (
              <Chip key={id}>{name}</Chip>
            ))}
          </Chips>
        </Project>
      ))}
    </Container>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const Project = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  text-align: center;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.2)};
`;

const Logo = styled.div`
  height: 8.375rem;
  background-color: ${GRAY400};
`;

const Title = styled.h2`
  ${kor18};
  color: ${GRAY800};
`;

const Chips = styled.div`
  display: flex;
  column-gap: 0.25rem;
  justify-content: center;
  align-items: center;
`;

const Chip = styled.div`
  padding-inline: 0.5rem;
  background-color: ${GRAY300};
  border-radius: 999px;
  ${eng14};
  color: ${GRAY700};
`;
