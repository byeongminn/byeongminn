import SectionTitle from 'components/Common/SectionTitle';
import { eng12, eng14, kor14, kor14M, kor16, kor18 } from 'constants/fonts';
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
      <SectionTitle>Education</SectionTitle>
      <SectionContent>
        {education.map(({ id, school, major, period }) => (
          <ContentItem key={id}>
            <School>{school}</School>
            <Major>{major}</Major>
            <Period>{period}</Period>
          </ContentItem>
        ))}
      </SectionContent>
    </Container>
  ) : null;
};

export default EducationComponent;

const Container = styled.div``;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    column-gap: 0;
    row-gap: 0.5rem;
  }
`;

const School = styled.h3`
  ${kor18};

  @media ${({ theme }) => theme.device.mobile} {
    ${kor14M};
  }
`;

const Major = styled.h4`
  ${kor16};

  @media ${({ theme }) => theme.device.mobile} {
    ${kor14};
  }
`;

const Period = styled.h4`
  ${eng14};

  @media ${({ theme }) => theme.device.mobile} {
    ${eng12};
  }
`;
