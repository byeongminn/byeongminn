import React, { useEffect, useState } from 'react';
import getImage from 'services/contact/get-image';
import styled from 'styled-components';
import { Image } from 'types';

const ImageComponent = () => {
  const [image, setImage] = useState<Image>({ url: '' });

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
  height: 100%;
  background: url(${({ src }) => src}) no-repeat center / contain;
`;
