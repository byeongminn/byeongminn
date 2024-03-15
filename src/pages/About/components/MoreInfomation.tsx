import { moreInfomation } from 'constants/about';
import React from 'react';
import styled from 'styled-components';
import { Content, Contents, Heading } from 'styles/fontStyles';

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
