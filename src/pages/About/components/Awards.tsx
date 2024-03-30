import SectionTitle from 'components/Common/SectionTitle';
import { eng14, eng16, kor12, kor14M, kor16, kor18 } from 'constants/fonts';
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
      <SectionTitle>Awards & activities</SectionTitle>
      <SectionContent>
        {awards.map(({ id, year, name, outcome }: Award) => (
          <ContentItem key={id}>
            <Year>{year}</Year>
            <Name>{name}</Name>
            <Outcome>{outcome}</Outcome>
          </ContentItem>
        ))}
      </SectionContent>
    </Container>
  ) : null;
};

export default AwardsComponent;

const Container = styled.div``;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    row-gap: 1rem;
  }
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: normal;
    column-gap: 0;
    row-gap: 0.25rem;
  }
`;

const Year = styled.h5`
  ${eng16};

  @media ${({ theme }) => theme.device.tablet} {
    ${eng14};
  }
`;

const Name = styled.h3`
  ${kor18};

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 0.5rem;
    ${kor14M};
  }
`;

const Outcome = styled.h4`
  ${kor16};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor12};
  }
`;
