import { projects } from 'constants/projects';
import React from 'react';
import styled from 'styled-components';
import {
  gray300,
  gray400,
  gray700,
  gray800,
  pretendard14Reg,
} from 'styles/fontStyles';

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
  background-color: ${gray400};
`;

const Title = styled.h4`
  font-family: 'Spoqa';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: ${gray800};
`;

const Chips = styled.div`
  display: flex;
  column-gap: 0.25rem;
  justify-content: center;
  align-items: center;
`;

const Chip = styled.div`
  padding-inline: 0.5rem;
  background-color: ${gray300};
  border-radius: 999px;
  ${pretendard14Reg};
  color: ${gray700};
`;
