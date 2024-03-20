import { GRAY900 } from 'constants/colors';
import { kor18 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import getProfile from 'services/about/get-profile';
import styled from 'styled-components';
import { Profile } from 'types';

const ProfileComponent = () => {
  const [profile, setProfile] = useState<Profile>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchData();
  }, []);

  return Object.keys(profile).length !== 0 ? (
    <Container>
      <Heading>Profile</Heading>
      <Contents>
        {profile.name && profile.englishName ? (
          <Content>
            <Name>{profile.name}</Name>
            <EnglishName>{profile.englishName}</EnglishName>
          </Content>
        ) : null}
        {profile.birth ? <Content>{profile.birth}</Content> : null}
        {profile.address ? <Content>{profile.address}</Content> : null}
        {profile.number ? <Content>{profile.number}</Content> : null}
        {profile.email ? <Content>{profile.email}</Content> : null}
      </Contents>
    </Container>
  ) : null;
};

export default ProfileComponent;

const Container = styled.div`
  margin-bottom: 3rem;
`;

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
