import React from 'react';
import styled from 'styled-components';

const ProjectOneDetails = () => {
  return (
    <Container>
      <Thumbnail href="/assets/pdfs/sample.pdf" target="_blank">
        <picture>
          <source srcSet="/assets/pictures/image.webp" type="image/webp" />
          <img src="/assets/pictures/image.jpg" alt="image" />
        </picture>
      </Thumbnail>
    </Container>
  );
};

export default ProjectOneDetails;

const Container = styled.div``;

const Thumbnail = styled.a`
  img {
    width: 100%;
  }
`;
