import SectionTitle from 'components/Common/SectionTitle';
import {
  eng12,
  eng14,
  eng16,
  kor12,
  kor14,
  kor14M,
  kor16,
  kor18,
} from 'constants/fonts';
import { useThemeActions } from 'context/ThemeProvider';
import React, { useEffect, useState } from 'react';
import getExperiences from 'services/about/get-experiences';
import styled from 'styled-components';
import { Experience } from 'types';

const ExperiencesComponent = () => {
  const { theme } = useThemeActions();

  const [experiences, setExperiences] = useState<Array<Experience>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExperiences();
      setExperiences(data);
    };
    fetchData();
  }, []);

  return experiences.length > 0 ? (
    <Container>
      <SectionTitle>Experiences</SectionTitle>
      <SectionContent>
        {experiences.map(
          ({ id, company, position, job, duration, projects }) => (
            <ContentItem key={id}>
              <Company>
                <Group>
                  <CompanyName>{company}</CompanyName>
                  <PositionAndJob>
                    {position} · {job}
                  </PositionAndJob>
                </Group>
                <Duration>{duration}</Duration>
              </Company>
              {projects.length > 0 ? (
                <>
                  <Projects>
                    {projects.map(({ id, title, roles, link }) => (
                      <Project key={id}>
                        <TableGroup>
                          <ProjectTitle>{title}</ProjectTitle>
                          <ProjectRoles>
                            {roles.map((role, idx) => (
                              <ProjectRole key={idx}>{role}</ProjectRole>
                            ))}
                          </ProjectRoles>
                        </TableGroup>
                        {link ? (
                          <ProjectLink href={link}>
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/icons/link-${theme}.svg`}
                              alt="link"
                            />
                          </ProjectLink>
                        ) : (
                          <div style={{ width: '1.5rem' }} />
                        )}
                      </Project>
                    ))}
                  </Projects>
                  <ProjectsMobile>
                    {projects.map(({ id, title, roles, link }) => (
                      <Project key={id}>
                        <TableGroup>
                          <ProjectTitle>{title}</ProjectTitle>
                          {link ? (
                            <ProjectLink href={link}>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/icons/link-${theme}.svg`}
                                alt="link"
                              />
                            </ProjectLink>
                          ) : null}
                        </TableGroup>
                        <ProjectRoles>
                          {roles.map((role, idx) => (
                            <ProjectRole key={idx}>{role}</ProjectRole>
                          ))}
                        </ProjectRoles>
                      </Project>
                    ))}
                  </ProjectsMobile>
                </>
              ) : null}
            </ContentItem>
          ),
        )}
      </SectionContent>
    </Container>
  ) : null;
};

export default ExperiencesComponent;

const Container = styled.div``;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  color: ${({ theme }) => theme.detailsColor};
  word-break: keep-all;
`;

const Company = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    align-items: normal;
    column-gap: 0;
    row-gap: 0.25rem;
  }
`;

const Group = styled.section`
  display: flex;
  column-gap: 1.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
  }
`;

const CompanyName = styled.h3`
  ${kor18};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor14M};
  }
`;

const PositionAndJob = styled.div`
  ${kor16};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor14};
  }
`;

const Duration = styled.h4`
  ${eng16}

  @media ${({ theme }) => theme.device.tablet} {
    ${eng12};
    text-align: right;
  }
`;

const Projects = styled.div`
  background-color: ${({ theme }) => theme.tableBgColor};
  border-top: 1px solid ${({ theme }) => theme.tableBorderColor};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const ProjectsMobile = styled.div`
  background-color: ${({ theme }) => theme.tableBgColor};
  border-top: 1px solid ${({ theme }) => theme.tableBorderColor};
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

const Project = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  column-gap: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.tableBorderColor};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem;
    flex-direction: column;
    row-gap: 0.5rem;
  }
`;

const TableGroup = styled(Group)`
  flex: 1;
`;

const ProjectTitle = styled.h4`
  flex: 2;
  ${kor16};
  font-weight: 500;
  color: ${({ theme }) => theme.tableNameColor};

  @media ${({ theme }) => theme.device.tablet} {
    ${eng14};
    font-weight: 500;
  }
`;

const ProjectRoles = styled.div`
  flex: 8.3;
`;

const ProjectRole = styled.h4`
  ${kor16};
  color: ${({ theme }) => theme.tableDescriptionColor};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor12};
  }
`;

const ProjectLink = styled.a`
  height: 1.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    height: 1.125rem;

    > img {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;
