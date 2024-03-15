import { introduction } from 'constants/about';
import React from 'react';
import styled from 'styled-components';
import { Heading, gray800 } from 'styles/fontStyles';

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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: start;
  column-gap: 0.75rem;
  font-family: 'Spoqa';
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.5px;
  color: ${gray800};
`;

const Title = styled.h4`
  flex: 1;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.5px;
`;

const IntroductionContent = styled.p`
  flex: 3;
`;
