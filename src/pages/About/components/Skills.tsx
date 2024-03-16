import { skills } from 'constants/about';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Container>
      <Heading>Skills</Heading>
      <Contents>
        {skills.map(({ id, iconUrl, name }) => (
          <Content key={id}>
            <img src={iconUrl} alt={name} />
            <h5>{name}</h5>
          </Content>
        ))}
      </Contents>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  margin-top: 3rem;
`;

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
`;

const Content = styled.div`
  ${CONTENT};
`;
