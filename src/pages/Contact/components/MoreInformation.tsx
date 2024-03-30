// import { moreInfomation } from 'constants/about';
import { GRAY900 } from 'constants/colors';
import { eng16 } from 'constants/fonts';
import { CONTENT, CONTENTS, HEADING } from 'constants/styles';
import React, { useEffect, useState } from 'react';
import getMore from 'services/contact/get-more';
import styled from 'styled-components';
import { More } from 'types';

const MoreInformationComponent = () => {
  const [more, setMore] = useState<Array<More>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMore();
      setMore(data);
    };
    fetchData();
  }, []);

  return more.length > 0 ? (
    <Container>
      <Heading>More Information</Heading>
      <Contents>
        {more.map(({ id, name, url }) => (
          <Content key={id}>
            <Name>
              <a href={url}>{name}</a>
            </Name>
          </Content>
        ))}
      </Contents>
    </Container>
  ) : null;
};

export default MoreInformationComponent;

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

const Name = styled.h4`
  ${eng16};
  color: ${GRAY900};
  text-decoration: underline;
  text-transform: capitalize;
`;
