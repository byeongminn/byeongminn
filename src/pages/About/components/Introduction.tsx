import SectionTitle from 'components/Common/SectionTitle';
import { kor14, kor14M, kor18, kor20 } from 'constants/fonts';
import React, { useEffect, useState } from 'react';
import getIntroduction from 'services/about/get-introduction';
import styled from 'styled-components';
import { Introduction } from 'types';

const IntroductionComponent = () => {
  const [introduction, setIntroduction] = useState<Array<Introduction>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIntroduction();
      setIntroduction(data);
    };
    fetchData();
  }, []);

  return introduction.length > 0 ? (
    <Container>
      <SectionTitle>Introduction</SectionTitle>
      <SectionContent>
        {introduction.map(({ id, title, content }) => (
          <ContentItem key={id}>
            <Title>{title}</Title>
            <IntroductionContent>{content}</IntroductionContent>
          </ContentItem>
        ))}
      </SectionContent>
    </Container>
  ) : null;
};

export default IntroductionComponent;

const Container = styled.div``;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const ContentItem = styled.div`
  display: flex;
  column-gap: 0.75rem;
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 0.25rem;
  }
`;

const Title = styled.h4`
  flex: 1;
  ${kor20};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor14M};
  }
`;

const IntroductionContent = styled.p`
  flex: 3;
  ${kor18};
  font-weight: 400;

  @media ${({ theme }) => theme.device.tablet} {
    ${kor14};
  }
`;
