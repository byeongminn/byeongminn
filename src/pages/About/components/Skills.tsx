import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import getSkills from 'services/about/get-skills';
import styled from 'styled-components';
import { Skill } from 'types';

const SkillsComponent = () => {
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
      <Heading>Skills</Heading>
      <Contents>
        {skills.map(({ id, iconUrl, name }: Skill) => (
          <Content key={id}>
            <img src={iconUrl} alt={name} />
            <h5>{name}</h5>
          </Content>
        ))}
      </Contents>
    </Container>
  ) : null;
};

export default SkillsComponent;

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
  ${CONTENT};
`;
