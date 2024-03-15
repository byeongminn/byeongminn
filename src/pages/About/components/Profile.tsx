import { profile } from 'constants/about';
import React from 'react';
import styled from 'styled-components';
import { Contents, Heading, gray900, pretendard16Reg } from 'styles/fontStyles';

const Profile = () => {
  const { name, englishName, birth, address, number, email } = profile;

  return (
    <Container>
      <Heading>Profile</Heading>
      <Contents>
        <Content>
          <Name>{name}</Name>
          <EnglishName>{englishName}</EnglishName>
        </Content>
        <Content>{birth}</Content>
        <Content>{address}</Content>
        <Content>{number}</Content>
        <Content>{email}</Content>
      </Contents>
    </Container>
  );
};

export default Profile;

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  ${pretendard16Reg};
  color: ${gray900};
`;

const Name = styled.h4`
  font-family: 'Spoqa';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${gray900};
`;

const EnglishName = styled.h4`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${gray900};
`;
