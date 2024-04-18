import Portal from 'components/Common/Portal';
import { eng14, eng16, kor14M } from 'constants/fonts';
import { NAVIGATION } from 'constants/navigation';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getProfile from 'services/about/get-profile';
import styled from 'styled-components';
import { Profile } from 'types';

interface Props {
  onItemClick: () => void;
}

const MobileNavigationComponent = ({ onItemClick }: Props) => {
  const { pathname } = useLocation();
  const [profile, setProfile] = useState<Profile>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchData();
  }, []);

  return (
    <Portal>
      <Container>
        <NavSection>
          <NavList>
            {NAVIGATION.map(({ id, name, url }) => (
              <NavItem
                key={id}
                $isActive={pathname.includes(url)}
                onClick={onItemClick}
              >
                <Link to={url}>{name}</Link>
              </NavItem>
            ))}
          </NavList>
        </NavSection>
        <ProfileSection>
          <ProfileList>
            <ProfileItem>
              {profile.name} {profile.englishName}
            </ProfileItem>
            <ProfileItem>{profile.number}</ProfileItem>
            <ProfileItem>{profile.email}</ProfileItem>
          </ProfileList>
        </ProfileSection>
      </Container>
    </Portal>
  );
};

export default MobileNavigationComponent;

const Container = styled.div`
  position: fixed;
  top: 73px;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.mobileNavBgColor};
  box-shadow: ${({ theme }) => theme.mobileNavShadow};
  backdrop-filter: blur(2px);
  width: 65%;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.section`
  flex: 1;
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2.25rem;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  a {
    ${eng16};
    color: ${({ theme, $isActive }) =>
      $isActive ? theme.headerColor : theme.headerActiveColor};
    text-transform: uppercase;
  }
`;

const ProfileSection = styled.section`
  padding: 2rem;
`;

const ProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  align-items: center;
`;

const ProfileItem = styled.li`
  height: 1.125rem;
  ${eng14};
  color: ${({ theme }) => theme.mobileNavColor};

  &:first-of-type {
    height: 1.25rem;
    ${kor14M};
  }
`;
