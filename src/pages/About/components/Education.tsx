import { GRAY700, GRAY800 } from 'constants/colors';
import { eng14, kor16, kor18 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import getEducation from 'services/about/get-education';
import styled from 'styled-components';
import { Education } from 'types';

const EducationComponent = () => {
  const [education, setEducation] = useState<Array<Education>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEducation();
      setEducation(data);
    };
    fetchData();
  }, []);

  return education.length > 0 ? (
    <Container>
      <Heading>Education</Heading>
      <Contents>
        {education.map(({ id, school, major, period }: Education) => (
          <Content key={id}>
            <School>{school}</School>
            <Major>{major}</Major>
            <Period>{period}</Period>
          </Content>
        ))}
      </Contents>
    </Container>
  ) : null;
};

export default EducationComponent;

const Container = styled.div`
  margin-bottom: 3rem;
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
  ${eng14};
  color: ${GRAY700};
`;
