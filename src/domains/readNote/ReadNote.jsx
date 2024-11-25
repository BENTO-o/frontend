import { useEffect, useState } from "react";
import { FlexContainer, PageLayout } from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import NoteContent from "./components/NoteContent";
import { useLocation, useParams } from "react-router-dom";

function ReadNote() {
  const { noteId } = useParams(); // 동적 라우트 파라미터 추출
  const location = useLocation(); // 현재 URL 정보 가져오기

  useEffect(() => {
    // 쿼리스트링에서 필요한 정보 추출
    const queryParams = new URLSearchParams(location.search);
    const action = queryParams.get("action");

    console.log("Note ID:", noteId); // 동적 라우트 파라미터 출력
    console.log("Action:", action); // 쿼리스트링 파라미터 출력
  }, [noteId, location]);

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

        <NoteContent />
      </FlexContainer>
    </FlexContainer>
  );
}

export default ReadNote;
