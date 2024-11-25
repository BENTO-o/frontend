import { useEffect, useState } from "react";
import { FlexContainer, PageLayout } from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import NoteContent from "./components/NoteContent";
import { useLocation, useParams } from "react-router-dom";

function ReadNote() {
  const { noteId } = useParams(); // 동적 라우트 파라미터 추출
  const location = useLocation(); // 현재 URL 정보 가져오기

  const { data: noteData } = useQuery({
    queryKey: ["noteData"],
    queryFn: async () => await getNote(noteId),
    onSuccess: () => {
      console.log("success");
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

        <NoteContent noteData={noteData} />
      </FlexContainer>
    </FlexContainer>
  );
}

export default ReadNote;
