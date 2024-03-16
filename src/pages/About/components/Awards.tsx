import { awardsAndActivities } from 'constants/about';
import { GRAY800 } from 'constants/colors';
import { eng16, kor16, kor18 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import styled from 'styled-components';

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

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
  row-gap: 1.5rem;
`;

const Content = styled.div`
  ${CONTENT};
  column-gap: 1.5rem;
  color: ${GRAY800};
`;

const Year = styled.h5`
  ${eng16};
`;

const Name = styled.h3`
  ${kor18};
`;

const Outcome = styled.h4`
  ${kor16};
`;
