import { GRAY800 } from 'constants/colors';
import { eng16, kor16, kor18 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import getAwards from 'services/about/get-awards';
import styled from 'styled-components';
import { Award } from 'types';

const AwardsComponent = () => {
  const [awards, setAwards] = useState<Array<Award>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAwards();
      setAwards(data);
    };
    fetchData();
  }, []);

  return awards.length > 0 ? (
    <Container>
      <Heading>Awards & activities</Heading>
      <Contents>
        {awards.map(({ id, year, name, outcome }: Award) => (
          <Content key={id}>
            <Year>{year}</Year>
            <Name>{name}</Name>
            <Outcome>{outcome}</Outcome>
          </Content>
        ))}
      </Contents>
    </Container>
  ) : null;
};

export default AwardsComponent;

const Container = styled.div``;

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
