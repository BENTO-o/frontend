import React, { useEffect } from "react";
import { Memo } from "../../../common/components/Memo";
import {
  AISummaryContainer,
  AISummaryText,
  AISummaryTitle,
  CustomIcon,
  DateTime,
  DetailMemoContainer,
  DividerWithIcon,
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
import Icon_Bookmark from "../../../assets/Bookmark.svg";
import Icon_Bookmark_Yellow from "../../../assets/Bookmark_yellow.svg";
import Icon_Trash from "../../../assets/Trash.svg";
import dayjs from "dayjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createBookmark, getAISummary } from "../services";
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

  const onCreateBookmark = useMutation({
    mutationFn: createBookmark,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onClickCreteBookmrk = async (timestamp) => {
    onCreateBookmark.mutate({
      noteId: props.noteData?.noteId,
      timestamp: timestamp,
    });
  };

  useEffect(() => {
    console.log("noteData", props.noteData);
  }, [props.noteData]);

  // useEffect(() => {
  //   console.log("summary", summary);
  // }, [summary]);

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
          <CustomIcon src={Icon_Trash} />
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
            <React.Fragment key={index}>
              <FlexContainer
                width="100%"
                alignItems="center"
                flexDirection="row"
                padding="10px"
                margin="10px 0"
                border="1px solid #EEE"
                borderRadius="8px"
                justifyContent="flex-start"
              >
                <RecordIcon />
                <FlexContainer
                  flexDirection="column"
                  alignItems="flex-start"
                  margin="0 10px"
                >
                  <RecordText>{item.text}</RecordText>
                  {/* <RecordText>{item.timestamp}</RecordText> */}
                </FlexContainer>
              </FlexContainer>
              {/* {index !== props.noteData?.content?.script?.length - 1 && ()} */}
              <DividerWithIcon>
                <LineEEE />
                {item.bookmark ? (
                  <CustomIcon
                    src={Icon_Bookmark_Yellow}
                    onClick={()=>{}}
                  />
                ) : (
                  <CustomIcon
                    src={Icon_Bookmark}
                    onClick={() => onClickCreteBookmrk(item.timestamp)}
                  />
                )}
                <LineEEE />
              </DividerWithIcon>
            </React.Fragment>
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
            <Memo noteId={props.noteData?.noteId} memos={props.noteData?.memos} />
          </DetailMemoContainer>
          <LineEEE />

          {summary ? (
            <FlexContainer
              flexDirection="column"
              alignItems="flex-start"
              padding="10px"
            >
              <AISummaryTitle>AI 요약</AISummaryTitle>
              <AISummaryText>{summary?.summary}</AISummaryText>
            </FlexContainer>
          ) : (
            <>AI 요약이 없습니다.</>
          )}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default NoteContent;
