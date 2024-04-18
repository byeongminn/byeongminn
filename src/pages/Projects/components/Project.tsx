import { eng14, eng16, kor14, kor16, kor20 } from 'constants/fonts';
import React from 'react';
import styled from 'styled-components';
import { Details } from 'types';

interface Props {
  details: Details;
}

const ProjectComponent = ({ details }: Props) => {
  const handleTopClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      {details ? (
        <>
          {details.thumbnail ? (
            <ImageSection>
              <picture>
                <source
                  srcSet={`/assets/pictures/${details.thumbnail}.webp`}
                  type="image/webp"
                />
                <img
                  src={`/assets/pictures/${details.thumbnail}.jpg`}
                  alt="image"
                />
              </picture>
            </ImageSection>
          ) : null}
          <ContentSection>
            {details.overview ? (
              <ContentWrapper>
                <H>프로젝트 개요</H>
                <P>{details.overview}</P>
              </ContentWrapper>
            ) : null}
            {details.background?.length ? (
              <ContentWrapper>
                <H>프로젝트 배경</H>
                {details.background.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </ContentWrapper>
            ) : null}
            {details.duration ? (
              <ContentWrapper>
                <H>기간</H>
                <P>{details.duration}</P>
              </ContentWrapper>
            ) : null}
            {details.members ? (
              <ContentWrapper>
                <H>구성 팀원</H>
                <P>{details.members}</P>
              </ContentWrapper>
            ) : null}
            {details.skills ? (
              <ContentWrapper>
                <H>기술 스택</H>
                <P>{details.skills}</P>
              </ContentWrapper>
            ) : null}
            {details.features?.length ? (
              <ContentWrapper>
                <H>주요 기능</H>
                {details.features.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </ContentWrapper>
            ) : null}
            {details.role?.length ? (
              <ContentWrapper>
                <H>담당 역할</H>
                {details.role.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </ContentWrapper>
            ) : null}
            {details.collaboration?.length ? (
              <ContentWrapper>
                <H>협업 방식</H>
                {details.collaboration.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </ContentWrapper>
            ) : null}
            {details.performance?.length ? (
              <ContentWrapper>
                <H>성과 및 배운 점</H>
                {details.performance.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </ContentWrapper>
            ) : null}
          </ContentSection>
          <ButtonSection>
            <Button onClick={handleTopClick}>TOP</Button>
          </ButtonSection>
        </>
      ) : (
        <P>해당 프로젝트가 존재하지 않습니다.</P>
      )}
    </Container>
  );
};

export default ProjectComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const ImageSection = styled.section`
  img {
    width: 100%;
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  word-break: keep-all;
`;

const H = styled.h2`
  ${kor20};
  color: ${({ theme }) => theme.sectionColor};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor16};
    font-weight: 500;
  }
`;

const P = styled.p`
  ${kor16};
  color: ${({ theme }) => theme.detailsColor};

  @media ${({ theme }) => theme.device.tablet} {
    ${kor14};
  }
`;

const ButtonSection = styled.section`
  margin-top: 4.5rem;
`;

const Button = styled.button`
  padding-block: 1.5rem;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border-block: 0.5px solid ${({ theme }) => theme.footerColor};
  border-inline: none;
  ${eng16};
  color: ${({ theme }) => theme.footerColor};

  @media ${({ theme }) => theme.device.mobile} {
    ${eng14};
  }
`;
