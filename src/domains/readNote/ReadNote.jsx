import { useEffect, useState } from "react";
import {
  FlexContainer,
  LoginBtn,
  PageLayout,
  SaveBtn,
  Txt24Bold,
} from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import NoteContent from "./components/NoteContent";
import { useNavigate, useParams } from "react-router-dom";

function ReadNote() {
  const { noteId } = useParams(); // 동적 라우트 파라미터 추출
  const navigate = useNavigate(); // useNavigate 훅 사용

  const {
    data: noteData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["noteData"],
    queryFn: async () => await getNote(noteId),
    onSuccess: () => {
      console.log("success");
      console.log(noteData);
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });

  return (
    <FlexContainer width="100vw" height="100vh">
      <LeftSidebar />

      <FlexContainer
        flexDirection="column"
        width="100%"
        height="100%"
        justifyContent="flex-start"
      >
        <TopBar />

        {isLoading ? (
          <FlexContainer
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </FlexContainer>
        ) : isError ? (
          <FlexContainer
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Txt24Bold>열심히 노트를 생성중이에요!</Txt24Bold>
            <Txt24Bold>아래 버튼을 눌러 목록으로 돌아가세요.</Txt24Bold>
            <div style={{ height: "20px" }}></div>
            <SaveBtn
              onClick={() => {
                navigate(`/`);
              }}
            >
              목록으로
            </SaveBtn>
          </FlexContainer>
        ) : (
          <NoteContent noteData={noteData} />
        )}
      </FlexContainer>
    </FlexContainer>
  );
}

export default ReadNote;
