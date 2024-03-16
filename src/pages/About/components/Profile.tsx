import { profile } from 'constants/about';
import { GRAY900 } from 'constants/colors';
import { kor18 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import styled from 'styled-components';

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

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
`;

const Content = styled.div`
  ${CONTENT}
  color: ${GRAY900};
`;

const Name = styled.h3`
  ${kor18};
  line-height: 24px;
  color: ${GRAY900};
`;

const EnglishName = styled.h4`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${GRAY900};
`;
