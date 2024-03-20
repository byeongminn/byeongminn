import { GRAY800 } from 'constants/colors';
import { kor18, kor20 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
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
      <Heading>Introduction</Heading>
      <Contents>
        {introduction.map(({ id, title, content }: Introduction) => (
          <Content key={id}>
            <Title>{title}</Title>
            <IntroductionContent>{content}</IntroductionContent>
          </Content>
        ))}
      </Contents>
    </Container>
  ) : null;
};

export default IntroductionComponent;

const Container = styled.div`
  margin-bottom: 3rem;
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
  align-items: start;
  color: ${GRAY800};
`;

const Title = styled.h4`
  flex: 1;
  ${kor20};
`;

const IntroductionContent = styled.p`
  flex: 3;
  ${kor18};
  font-weight: 400;
`;
