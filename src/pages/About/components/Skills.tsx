import SectionTitle from 'components/Common/SectionTitle';
import { eng14, eng16 } from 'constants/fonts';
import { useThemeActions } from 'context/ThemeProvider';
import React, { useEffect, useState } from 'react';
import getSkills from 'services/about/get-skills';
import styled from 'styled-components';
import { Skill } from 'types';

const SkillsComponent = () => {
  const { theme } = useThemeActions();

  const [skills, setSkills] = useState<Array<Skill>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSkills();
      setSkills(data);
    };
    fetchData();
  }, []);

  return skills.length > 0 ? (
    <Container>
      <SectionTitle>Skills</SectionTitle>
      <SectionContent>
        {skills.map(({ id, name }) => (
          <ContentItem key={id}>
            <Image
              src={`${process.env.PUBLIC_URL}/assets/icons/${name}-${theme}.svg`}
              alt={name}
            />
            <h5>{name}</h5>
          </ContentItem>
        ))}
      </SectionContent>
    </Container>
  ) : null;
};

export default SkillsComponent;

const Container = styled.div``;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0.75rem;
  }
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  ${eng16};
  color: ${({ theme }) => theme.detailsColor};
  text-transform: capitalize;

  @media ${({ theme }) => theme.device.tablet} {
    column-gap: 0.5rem;
    ${eng14};
  }
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    width: 1.125rem;
    height: 1.125rem;
  }
`;
