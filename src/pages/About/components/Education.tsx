import { education } from 'constants/about';
import React from 'react';
import styled from 'styled-components';
import { Heading, gray700, gray800, spoqa16Reg } from 'styles/fontStyles';

const Education = () => {
  return (
    <Container>
      <Heading>Education</Heading>
      <Contents>
        {education.map(({ id, school, major, period }) => (
          <Content key={id}>
            <School>{school}</School>
            <Major>{major}</Major>
            <Period>{period}</Period>
          </Content>
        ))}
      </Contents>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  margin-top: 3rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
`;

const School = styled.h5`
  font-family: 'Spoqa';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${gray800};
`;

const Major = styled.h6`
  ${spoqa16Reg};
  color: ${gray700};
`;

const Period = styled.h6`
  ${spoqa16Reg};
  color: ${gray700};
`;
