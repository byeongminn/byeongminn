import { GRAY800 } from 'constants/colors';
import { eng16 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import getBeyond from 'services/contact/get-beyond';
import styled from 'styled-components';
import { Beyond } from 'types';

const BeyondWorkComponent = () => {
  const [beyondWork, setBeyondWork] = useState<Array<Beyond>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBeyond();
      setBeyondWork(data);
    };
    fetchData();
  }, []);

  return beyondWork.length > 0 ? (
    <Container>
      <Heading>Beyond Work</Heading>
      <Contents>
        {beyondWork.map(({ id, information }) => (
          <Content key={id}>
            <Information>{information}</Information>
          </Content>
        ))}
      </Contents>
    </Container>
  ) : null;
};

export default BeyondWorkComponent;

const Container = styled.div``;

const Heading = styled.h2`
  ${HEADING};
`;

const Contents = styled.div`
  ${CONTENTS};
`;

const Content = styled.div`
  ${CONTENT};
`;

const Information = styled.h4`
  ${eng16};
  ${GRAY800};
  text-transform: capitalize;
`;
