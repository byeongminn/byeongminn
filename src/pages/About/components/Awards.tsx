import { awardsAndActivities } from 'constants/about';
import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  gray800,
  pretendard16Reg,
  spoqa16Reg,
} from 'styles/fontStyles';

const Awards = () => {
  return (
    <Container>
      <Heading>Awards & activities</Heading>
      <Contents>
        {awardsAndActivities.map(({ id, year, name, outcome }) => (
          <Content key={id}>
            <Year>{year}</Year>
            <Name>{name}</Name>
            <Outcome>{outcome}</Outcome>
          </Content>
        ))}
      </Contents>
    </Container>
  );
};

export default Awards;

const Container = styled.div`
  margin-top: 3rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${gray800};
`;

const Year = styled.h5`
  ${pretendard16Reg};
`;

const Name = styled.h4`
  font-family: 'Spoqa';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.5px;
`;

const Outcome = styled.h5`
  ${spoqa16Reg};
`;
