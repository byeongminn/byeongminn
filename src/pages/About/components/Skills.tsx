import { skills } from 'constants/about';
import React from 'react';
import styled from 'styled-components';
import { Content, Contents, Heading } from 'styles/fontStyles';

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
