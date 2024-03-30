import SectionTitle from 'components/Common/SectionTitle';
import { eng14, eng14M, eng16, kor14M, kor18 } from 'constants/fonts';
import React, { useEffect, useState } from 'react';
import getProfile from 'services/about/get-profile';
import styled from 'styled-components';
import { Profile } from 'types';

const DetailsComponent = () => {
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
      <SectionTitle>Profile</SectionTitle>
      <SectionContent>
        {profile.name && profile.englishName ? (
          <ContentItem>
            <Name>{profile.name}</Name>
            <EnglishName>{profile.englishName}</EnglishName>
          </ContentItem>
        ) : null}
        {profile.number ? <ContentItem>{profile.number}</ContentItem> : null}
        {profile.email ? <ContentItem>{profile.email}</ContentItem> : null}
      </SectionContent>
    </Container>
  ) : null;
};

export default DetailsComponent;

const Container = styled.div`
  flex: 0 1 17.375rem;

  @media ${({ theme }) => theme.device.mobile} {
    flex: initial;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  @media ${({ theme }) => theme.device.mobile} {
    row-gap: 0.25rem;
  }
`;

const ContentItem = styled.div`
  display: flex;
  column-gap: 0.125rem;
  ${eng16};
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.mobile} {
    ${eng14};
  }
`;

const Name = styled.h3`
  ${kor18};
  line-height: 24px;

  @media ${({ theme }) => theme.device.mobile} {
    ${kor14M};
  }
`;

const EnglishName = styled.h4`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  @media ${({ theme }) => theme.device.mobile} {
    ${eng14M};
  }
`;
