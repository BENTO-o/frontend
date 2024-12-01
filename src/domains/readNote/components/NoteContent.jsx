import React from "react";
import { Memo } from "../../../common/components/Memo";
import {
  AISummaryContainer,
  AISummaryText,
  AISummaryTitle,
  CustomIcon,
  DateTime,
  DetailMemoContainer,
  FieldLabel,
  FlexContainer,
  FormTitleContainer,
  LineEEE,
  MainContentContainer,
  MemoTitle,
  NoteContainer,
  RecordContainer,
  RecordIcon,
  RecordItem,
  RecordText,
  Title,
  TitleSection,
  Txt20Bold,
  Txt24Bold,
  VerticalLineEEE,
} from "../../../common/common";
import dayjs from "dayjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAISummary } from "../services";
import { createMemo, getMemos } from "../../../common/utils";

// JSX 컴포넌트
const NoteContent = (props) => {
  const { data: summary } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => await getAISummary(props?.noteData?.noteId),
    onSuccess: () => {
      console.log("success");
      console.log(summary.data);
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });

  return (
    <FlexContainer
      width="90%"
      height="100%"
      flexDirection="column"
      margin="2rem"
    >
      <FlexContainer width="100%" alignItems="flex-start">
        <FlexContainer
          width="50%"
          flexDirection="column"
          alignItems="flex-start"
          padding="10px"
        >
          <FormTitleContainer>
            <Txt24Bold>{props.noteData?.title}</Txt24Bold>
          </FormTitleContainer>
          <FormTitleContainer>
            <Txt20Bold>
              생성일시 :{" "}
              {dayjs(props.noteData?.createdAt).format("YYYY-MM-DD HH:mm")} /
              동작시간 : {props.noteData?.duration}
            </Txt20Bold>
          </FormTitleContainer>
          <FormTitleContainer>
            <Txt20Bold>분야 : {props.noteData?.folder}</Txt20Bold>
          </FormTitleContainer>
        </FlexContainer>
        <FormTitleContainer>
          <CustomIcon />
        </FormTitleContainer>
      </FlexContainer>

      <FlexContainer width="100%" alignItems="flex-start">
        <FlexContainer
          width="60%"
          alignItems="flex-start"
          flexDirection="column"
          padding="10px"
        >
          <Txt20Bold>음성 기록</Txt20Bold>
          {props.noteData?.content?.script?.map((item, index) => (
            <RecordItem key={index}>
              <RecordIcon />
              <RecordText>{item.text}</RecordText>
            </RecordItem>
          ))}
        </FlexContainer>
        <VerticalLineEEE />
        <FlexContainer
          width="40%"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          height="75vh"
        >
          <DetailMemoContainer>
            <Memo />
          </DetailMemoContainer>
          <LineEEE />
          <FlexContainer
            flexDirection="column"
            alignItems="flex-start"
            padding="10px"
          >
            <AISummaryTitle>AI 요약</AISummaryTitle>
            <AISummaryText>{summary?.summary}</AISummaryText>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default NoteContent;
