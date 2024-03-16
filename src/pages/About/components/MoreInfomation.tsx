import { moreInfomation } from 'constants/about';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import styled from 'styled-components';

const MoreInfomation = () => {
  return (
    <Container>
      <Heading>More Infomation</Heading>
      <Contents>
        {moreInfomation.map(({ id, infomation }) => (
          <Content key={id}>{infomation}</Content>
        ))}
      </Contents>
    </Container>
  );
};

export default MoreInfomation;

const Container = styled.div`
  margin-top: 3rem;
`;

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
`;

const Content = styled.div`
  ${CONTENT};
`;
