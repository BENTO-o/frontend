import React from "react";
import styled from "@emotion/styled";
import { Memo } from "../../../common/components/Memo";

// 스타일 정의
const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  height: 100%;
`;

const TitleSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const DateTime = styled.p`
  font-size: 16px;
  color: #666;
`;

const FieldLabel = styled.p`
  font-size: 16px;
  margin-top: 5px;
  color: #444;
`;

const RecordContainer = styled.div`
  margin-bottom: 30px;
`;

const RecordItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const RecordIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 15px;
`;

const RecordText = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

const MemoContainer = styled.div`
  margin-bottom: 30px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
`;

const MemoTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MemoText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 5px;
`;

const AISummaryContainer = styled.div`
  border-left: 4px solid #2ecc71;
  padding-left: 15px;
`;

const AISummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AISummaryText = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

// JSX 컴포넌트
const NoteContent = () => {
  return (
    <MainContentContainer>
      {/* 제목, 날짜, 분야 섹션 */}
      <TitleSection>
        <Title>3주차 딥러닝 강의</Title>
        <DateTime>24.09.20 / 1시간 15분</DateTime>
        <FieldLabel>분야: IT</FieldLabel>
      </TitleSection>

      {/* 음성 기록 섹션 */}
      <RecordContainer>
        <MemoTitle>음성 기록</MemoTitle>
        <RecordItem>
          <RecordIcon />
          <RecordText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </RecordText>
        </RecordItem>
        <RecordItem>
          <RecordIcon />
          <RecordText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </RecordText>
        </RecordItem>
        <RecordItem>
          <RecordIcon />
          <RecordText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </RecordText>
        </RecordItem>
      </RecordContainer>

      {/* 메모 섹션 */}
      {/* <MemoContainer>
        <MemoTitle>메모</MemoTitle>
        <MemoText>
          딥러닝 강의는 밑바닥부터 시작하는 딥러닝으로 진행합니다 ~ 네네
          4학년이어도 짤없이 다 듣즐거임~^^
        </MemoText>
        <MemoText>
          하하 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 목요일딥러닝은 앞에서 듣고 싶은데
          가능한가요?
        </MemoText>
      </MemoContainer> */}
      <Memo />

      {/* AI 요약 섹션 */}
      <AISummaryContainer>
        <AISummaryTitle>AI 요약</AISummaryTitle>
        <AISummaryText>
          Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum
          odio eu. Etiam erat velit scelerisque in dictum non consectetur a
          erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor
          posuere.
        </AISummaryText>
      </AISummaryContainer>
    </MainContentContainer>
  );
};

export default NoteContent;
