import { education } from 'constants/about';
import { GRAY700, GRAY800 } from 'constants/colors';
import { eng16, kor16, kor18 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import styled from 'styled-components';

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

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
  row-gap: 0.75rem;
`;

const Content = styled.div`
  ${CONTENT};
  column-gap: 2.5rem;
`;

const School = styled.h3`
  ${kor18};
  color: ${GRAY800};
`;

const Major = styled.h4`
  ${kor16};
  color: ${GRAY700};
`;

const Period = styled.h4`
  ${eng16};
  color: ${GRAY700};
`;
