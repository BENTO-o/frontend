import { useState } from "react";
import { FlexContainer, PageLayout } from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import NoteContent from "./components/NoteContent";

function ReadNote() {
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
