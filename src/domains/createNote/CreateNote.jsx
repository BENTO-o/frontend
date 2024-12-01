import { useState } from "react";
import { FlexContainer, PageLayout } from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import { CreateNoteForm } from "./components/CreateNoteForm";
import { useCreateNoteFormStore } from "../../stores/useCreateNoteForm";
import { useLocation, useParams } from "react-router-dom";

function CreateNote() {
  const { form, setFormField, resetForm } = useCreateNoteFormStore(); // zustand 훅 사용하여 form 상태 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isRecord = queryParams.get("isRecord") === 'true';


  return (
    <FlexContainer width="100vw" height="100vh">
      {/* Left 메뉴 컴포넌트로 분리 */}
      <LeftSidebar />

      <FlexContainer
        flexDirection="column"
        width="100%"
        height="100%"
        justifyContent="flex-start"
      >
        <TopBar />

        <CreateNoteForm isRecord={isRecord} />
      </FlexContainer>
    </FlexContainer>
  );
}

export default CreateNote;
