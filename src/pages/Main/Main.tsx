import { eng20 } from 'constants/fonts';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Main = () => {
  return (
    <Container>
      <KeepWrapper>
        <Keep>KEEP</Keep>
      </KeepWrapper>
      <ImJeOnGrowingWrapper>
        <ImJe>{`I'M JE`}</ImJe>
        <On>ON</On>
        <Growing>GROWING</Growing>
      </ImJeOnGrowingWrapper>
      <PhraseWrapper>
        <Phrase x={-48}>FRONT-END DEVELOPER,</Phrase>
        <Phrase x={-48}>JEON BYEONGMIN</Phrase>
      </PhraseWrapper>
    </Container>
  );
};

export default Main;

const fontStyle = css`
  ${eng20};
  font-size: 72px;
  line-height: 80px;
  color: ${({ theme }) => theme.sectionColor};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 56px;
    line-height: 64px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const moveX = (x: number) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(${x}px);
  }
`;

const moveToLeft = keyframes`
  from {}
  to {
    left: 0;
  }
`;

const Container = styled.div`
  height: calc(100dvh - 162px - 218px - 3rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${({ theme }) => theme.device.tablet} {
    height: calc(100dvh - 6.75rem - 10rem);
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: calc(100dvh - 5.75rem - 10rem);
  }
`;

const KeepWrapper = styled.div`
  height: 5rem;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    height: 4rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 2rem;
  }
`;

const Keep = styled.h1`
  ${fontStyle};
  opacity: 0;
  position: absolute;
  left: 191.39px;

  animation-fill-mode: forwards;
  animation-name: ${fadeIn}, ${moveToLeft};
  animation-duration: 1.5s, 1.5s;
  animation-delay: 1.5s, 1.5s;

  @media ${({ theme }) => theme.device.tablet} {
    left: 148.86px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 63.8px;
  }
`;

const ImJeOnGrowingWrapper = styled.div`
  height: 5rem;
  position: relative;
  ${fontStyle};

  @media ${({ theme }) => theme.device.tablet} {
    height: 4rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 2rem;
  }
`;

const ImJe = styled.h1`
  position: absolute;
  animation-fill-mode: forwards;
  animation-name: ${fadeIn}, ${fadeOut};
  animation-duration: 1.5s, 0.5s;
  animation-delay: 0s, 1.5s;
`;

const On = styled.h1`
  position: absolute;
  left: 191.39px;
  animation-fill-mode: forwards;
  animation-name: ${fadeIn}, ${moveToLeft};
  animation-duration: 1.5s, 1.5s;
  animation-delay: 0s, 1.5s;

  @media ${({ theme }) => theme.device.tablet} {
    left: 148.86px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 63.8px;
  }
`;

const Growing = styled.h1`
  position: absolute;
  left: 120px;
  opacity: 0;

  animation: ${fadeIn} 1.5s 3s forwards;

  @media ${({ theme }) => theme.device.tablet} {
    left: 96px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 42px;
  }
`;

const PhraseWrapper = styled.div``;

const Phrase = styled.p<{ x: number }>`
  margin-left: 3rem;
  ${fontStyle};
  opacity: 0;

  animation-fill-mode: forwards;
  animation-name: ${fadeIn}, ${({ x }) => moveX(x)};
  animation-duration: 1.5s, 1.5s;

  &:first-of-type {
    margin-top: 1rem;
    animation-delay: 4s;
  }

  &:last-of-type {
    animation-delay: 5s;
  }
`;
