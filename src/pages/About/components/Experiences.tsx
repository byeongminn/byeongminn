import { experiences } from 'constants/about';
import { GRAY500, GRAY800 } from 'constants/colors';
import { eng14, eng16, kor16, kor18 } from 'constants/fonts';
import { CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Experiences = () => {
  return (
    <Container>
      <Heading>Experiences</Heading>
      <Contents>
        {experiences.map(({ id, company, position, job, period, projects }) => (
          <Content key={id}>
            <AboutCompany>
              <Company>{company}</Company>
              <Position>{position}</Position>
              <Job>{job}</Job>
              <Period>{period}</Period>
            </AboutCompany>
            {projects.length > 0 ? (
              <AboutProjects>
                {projects.map(({ id, title, period, role, link }) => (
                  <AboutProject key={id}>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectPeriod>{period}</ProjectPeriod>
                    <ProjectRole>{role}</ProjectRole>
                    <ProjectLink to={link}>
                      <img src="/assets/icons/link.svg" alt="link" />
                    </ProjectLink>
                  </AboutProject>
                ))}
              </AboutProjects>
            ) : null}
          </Content>
        ))}
      </Contents>
    </Container>
  );
};

export default Experiences;

const Container = styled.div`
  margin-top: 3rem;
`;

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
  row-gap: 1.5rem;
`;

const Content = styled.div``;

const AboutCompany = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${GRAY800};
`;

const Company = styled.h3`
  ${kor18};
`;

const Position = styled.h4`
  ${kor16};
`;

const Job = styled.h4`
  ${kor16};
`;

const Period = styled.h4`
  flex: 1;
  text-align: right;
  ${eng16}
`;

const AboutProjects = styled.div`
  margin-top: 1rem;
  border-block: 1px solid ${GRAY500};
`;

const AboutProject = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border-block: 1px solid ${GRAY500};
  color: ${GRAY800};

  &:first-child,
  &:last-child {
    border: none;
  }
`;

const ProjectTitle = styled.h4`
  margin-right: 1.5rem;
  flex: 0 0 200px;
  ${kor16};
  font-weight: 500;
`;

const ProjectPeriod = styled.h5`
  margin-right: 4rem;
  flex: 0 0 113px;
  ${eng14};
`;

const ProjectRole = styled.h4`
  margin-right: 1.5rem;
  flex: 1 0 600px;
  ${kor16};
`;

const ProjectLink = styled(Link)`
  height: 1.5rem;
`;
