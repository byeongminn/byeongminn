import React, { useEffect, useState } from 'react';
import getImage from 'services/contact/get-image';
import styled from 'styled-components';
import { Image } from 'types';

const ImageComponent = () => {
  const [image, setImage] = useState<Image>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImage();
      setImage(data);
    };
    fetchData();
  }, []);

  return image.url ? <Img src={image.url} /> : null;
};

export default ImageComponent;

const Img = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: url(${({ src }) => src}) no-repeat center / cover;
`;
