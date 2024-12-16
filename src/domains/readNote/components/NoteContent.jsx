import React, { useEffect, useState } from "react";
import { Memo } from "../../../common/components/Memo";
import Icon_DefaultImg from "../../../assets/DefaultImg.svg";
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
  SpeakerBox,
  Title,
  TitleSection,
  Txt18Bold,
  Txt20Bold,
  Txt24Bold,
  VerticalLineEEE,
} from "../../../common/common";
import Icon_Bookmark from "../../../assets/Bookmark.svg";
import Icon_Bookmark_Yellow from "../../../assets/Bookmark_yellow.svg";
import Icon_Trash from "../../../assets/Trash.svg";
import dayjs from "dayjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBookmark, deleteBookmark, getAISummary } from "../services";
import { createMemo, getMemos } from "../../../common/utils";
import { useMemos } from "../../../stores/useMemos";

// JSX 컴포넌트
const NoteContent = (props) => {
  const queryClient = useQueryClient();

  const [selectedTimestamp, setSelectedTimestamp] = useState("");
  const [speakerColors, setSpeakerColors] = useState([]);

  const { memos, setMemos } = useMemos(); // zustand 훅 사용하여 form 상태 가져오기

  const onChangeTimestamp = (timestamp) => {
    timestamp === selectedTimestamp
      ? setSelectedTimestamp("")
      : setSelectedTimestamp(timestamp);
  };

  const { data: summary } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => await getAISummary(props?.noteData?.noteId),
    onSuccess: () => {
      console.log("success");
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
      queryClient.invalidateQueries(["noteData"]);
    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onDeleteBookmark = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["noteData"]);
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

  const onClickDeleteBookmrk = async (bookmarkId) => {
    // console.log(bookmarkId);
    onDeleteBookmark.mutate(bookmarkId);
  };

  const generateRandomColor = () => {
    // 랜덤 색상 생성
    const letters = "0123456789ABCDEF"; // 16진수 값
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    console.log("noteData", props.noteData);
    setMemos(props.noteData?.memos);
  }, [props.noteData]);

  // noteData.speaker에 대한 색상 배열 초기화
  useEffect(() => {
    console.log("noteData", props.noteData.content.speaker);
    if (props.noteData?.content.speaker) {
      const uniqueSpeakers = [...new Set(props.noteData.content.speaker)];
      const colors = uniqueSpeakers.map(() => generateRandomColor());
      console.log("colors", colors);
      setSpeakerColors(colors);
    }
  }, []);

  return (
    <FlexContainer
      width="90%"
      height="85vh"
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
                onClick={() => onChangeTimestamp(item.timestamp)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* <RecordIcon src={Icon_DefaultImg} /> */}
                <SpeakerBox
                  background={speakerColors[item.speaker.substring(8, 9) - 1]}
                >
                  {item.speaker.substring(8, 9)}
                </SpeakerBox>
                <FlexContainer
                  flexDirection="column"
                  alignItems="flex-start"
                  margin="0 10px"
                >
                  <RecordText>{item.text}</RecordText>
                </FlexContainer>
              </FlexContainer>
              {/* {index !== props.noteData?.content?.script?.length - 1 && ()} */}
              {selectedTimestamp === item.timestamp && (
                <DividerWithIcon>
                  <LineEEE />
                  {item.bookmark.status ? (
                    <CustomIcon
                      src={Icon_Bookmark_Yellow}
                      onClick={() => onClickDeleteBookmrk(item.bookmark.id)}
                    />
                  ) : (
                    <CustomIcon
                      src={Icon_Bookmark}
                      onClick={() => onClickCreteBookmrk(item.timestamp)}
                    />
                  )}
                  <LineEEE />
                </DividerWithIcon>
              )}
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
            <Memo
              noteId={props.noteData?.noteId}
              memos={props.noteData?.memos}
              timestamp={selectedTimestamp}
            />
          </DetailMemoContainer>
          <LineEEE />

          {summary ? (
            <FlexContainer
              flexDirection="column"
              alignItems="flex-start"
              padding="10px"
            >
              <AISummaryTitle>AI 요약</AISummaryTitle>
              <AISummaryText>
                {summary?.summary.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </AISummaryText>
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
