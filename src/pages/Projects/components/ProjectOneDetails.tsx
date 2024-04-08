import { kor14, kor16, kor20 } from 'constants/fonts';
import React from 'react';
import styled from 'styled-components';

const ProjectOneDetails = () => {
  return (
    <Container>
      <ImageSection>
        <picture>
          <source srcSet="/assets/pictures/billie.webp" type="image/webp" />
          <img src="/assets/pictures/billie.jpg" alt="image" />
        </picture>
      </ImageSection>
      <ContentSection>
        <ContentWrapper>
          <H>프로젝트 개요</H>
          <P>
            Billie는 오프라인 문서를 통해 관리되고 있던 직원들의 근태 및
            기자재를 더욱 체계적으로 관리할 수 있도록 도와줍니다.
          </P>
        </ContentWrapper>
        <ContentWrapper>
          <H>프로젝트 배경</H>
          <P>해당 프로젝트는 자사 서비스입니다.</P>
          <P>
            새로운 직장에 입사하자마자 바로 투입되어, 회사에 신속하게 적응하고
            Billie 프로젝트에 빠르게 기여하였습니다.
          </P>
        </ContentWrapper>
        <ContentWrapper>
          <H>기간</H>
          <P>2022.04 ~ 2022.11</P>
        </ContentWrapper>
        <ContentWrapper>
          <H>구성 팀원</H>
          <P>
            PM 1명 / 기획&디자이너 1명 / 프론트엔드 개발자 1명 (본인) / 백엔드
            개발자 1명
          </P>
        </ContentWrapper>
        <ContentWrapper>
          <H>기술 스택</H>
          <P>React / Sass / @emotion</P>
        </ContentWrapper>
        <ContentWrapper>
          <H>주요 기능</H>
          <P>게시판 탭 : 공지사항 및 자유 게시판 기능</P>
          <P>
            예약 탭 : 차량/교통카드/법인카드/회의실의 대여 상태 조회 및
            대여/반납 신청, 권한에 따른 승인/반려/관리 기능
          </P>
          <P>
            근무 탭 : 휴가 및 추가 근무 신청 기능, 권한에 따른 승인/반려/관리
            기능
          </P>
        </ContentWrapper>
        <ContentWrapper>
          <H>담당 역할</H>
          <P>사용자의 불편함 수집 및 개선을 위한 기획 회의 참여</P>
          <P>UI의 전반적인 개발</P>
          <P>사용자에게 보이는 모든 페이지 화면 개발</P>
        </ContentWrapper>
        <ContentWrapper>
          <H>협업 방식</H>
          <P>
            매주 정기적인 회의를 통해 팀원 간의 진행 상황을 공유하고, 다음 단기
            목표 설정
          </P>
          <P>Figma의 Comment 기능 및 Cursor Chat 기능으로 디자이너와 소통</P>
          <P>지속적인 피드백 및 개선</P>
        </ContentWrapper>
        <ContentWrapper>
          <H>성과 및 배운 점</H>
          <P>사내 서버를 이용하여 http://www.billie.work 홈페이지 배포</P>
          <P>
            기존에 수기로 처리되던 업무들을 Biliie로 이관하여 업무 처리에
            효율성을 향상시킴
          </P>
          <P>
            코드의 비효율성과 Sass의 불편함을 인지하고, 업무 외 시간을 활용하여
            리팩토링을 진행
          </P>
          <P>
            서비스를 처음 배포 및 운영함으로써 사용자는 개발자의 생각대로
            행동하지 않음을 깨닫고 예외 처리에 더욱 꼼꼼히 신경 쓰게 됨
          </P>
          <P>
            사용자의 직급에 따라 다른 요구사항이 있음을 인지하여 기획 및 UI 수정
            후 유지 보수 진행
          </P>
          <P>
            문서화의 중요성을 깨닫고, 팀 내에서 효율적인 정보 공유를 위해
            Notion과 Slack을 도입
          </P>
        </ContentWrapper>
      </ContentSection>
    </Container>
  );
};

export default ProjectOneDetails;

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
