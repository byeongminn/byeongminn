import { introduction } from 'constants/about';
import { GRAY800 } from 'constants/colors';
import { kor18, kor20 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import styled from 'styled-components';

const Introduction = () => {
  return (
    <Container>
      <Heading>Introduction</Heading>
      <Contents>
        {introduction.map(({ id, title, content }) => (
          <Content key={id}>
            <Title>{title}</Title>
            <IntroductionContent>{content}</IntroductionContent>
          </Content>
        ))}
      </Contents>
    </Container>
  );
};

export default Introduction;

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
