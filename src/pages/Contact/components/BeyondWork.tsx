import SectionTitle from 'components/Common/SectionTitle';
import { eng14, eng16 } from 'constants/fonts';
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
      <SectionTitle>Beyond Work</SectionTitle>
      <SectionContent>
        {beyondWork.map(({ id, information }) => (
          <ContentItem key={id}>
            <Information>{information}</Information>
          </ContentItem>
        ))}
      </SectionContent>
    </Container>
  ) : null;
};

export default BeyondWorkComponent;

const Container = styled.div`
  flex: 1 1 17.375rem;

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

const Information = styled.h4`
  text-transform: capitalize;
`;
