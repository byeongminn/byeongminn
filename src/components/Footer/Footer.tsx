import { eng12, eng14 } from 'constants/fonts';
import React, { useEffect, useState } from 'react';
import getProfile from 'services/about/get-profile';
import styled from 'styled-components';
import { Profile } from 'types';

const Footer = () => {
  const [profile, setProfile] = useState<Profile>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Copyright>
        Copyright <strong>{profile.englishName}</strong> 2024 All rights
        reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding-block: 4.5rem;
`;

const Copyright = styled.h5`
  ${eng14};
  color: ${({ theme }) => theme.footerColor};
  text-align: right;

  > strong {
    text-transform: uppercase;
  }

  @media ${({ theme }) => theme.device.tablet} {
    ${eng12};
    text-align: center;
  }
`;
