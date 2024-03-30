// import { moreInfomation } from 'constants/about';
import SectionTitle from 'components/Common/SectionTitle';
import { eng14, eng16 } from 'constants/fonts';
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
      <SectionTitle>More Information</SectionTitle>
      <SectionContent>
        {more.map(({ id, name, url }) => (
          <ContentItem key={id}>
            <Name>
              <a href={url}>{name}</a>
            </Name>
          </ContentItem>
        ))}
      </SectionContent>
    </Container>
  ) : null;
};

export default MoreInformationComponent;

const Container = styled.div`
  flex: 0 1 17.375rem;

  @media ${({ theme }) => theme.device.mobile} {
    flex: initial;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

const ContentItem = styled.div`
  ${eng16};
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.mobile} {
    ${eng14};
  }
`;

const Name = styled.h4`
  text-decoration: underline;
  text-transform: capitalize;
`;
