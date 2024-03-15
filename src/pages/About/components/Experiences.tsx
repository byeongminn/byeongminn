import { experiences } from 'constants/about';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Heading,
  gray500,
  gray800,
  pretendard14Reg,
  pretendard16Reg,
  spoqa16Reg,
} from 'styles/fontStyles';

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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const Content = styled.div``;

const AboutCompany = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${gray800};
`;

const Company = styled.div`
  font-family: 'Spoqa';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.5px;
`;

const Position = styled.div`
  ${spoqa16Reg};
`;

const Job = styled.div`
  ${spoqa16Reg};
`;

const Period = styled.div`
  flex: 1;
  text-align: right;
  ${pretendard16Reg}
`;

const AboutProjects = styled.div`
  margin-top: 1rem;
  border-block: 1px solid ${gray500};
`;

const AboutProject = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border-block: 1px solid ${gray500};

  &:first-child,
  &:last-child {
    border: none;
  }
`;

const ProjectTitle = styled.div`
  margin-right: 1.5rem;
  flex: 0 0 200px;
  font-family: 'Spoqa';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const ProjectPeriod = styled.div`
  margin-right: 4rem;
  flex: 0 0 113px;
  ${pretendard14Reg};
`;

const ProjectRole = styled.div`
  margin-right: 1.5rem;
  flex: 1 0 600px;
  ${spoqa16Reg};
`;

const ProjectLink = styled(Link)`
  height: 1.5rem;
`;
