import { useState } from "react";
import { FlexContainer, PageLayout } from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import { Carousel } from "../../common/components/Carousel";
import { NoteList } from "./components/NoteList";

function Home() {
  const { data: noteList } = useQuery({
    queryKey: ["noteList"],
    queryFn: async () => await getNotes({}),
    onSuccess: () => {
      console.log("success");
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });

  const onCreate = useMutation({
    mutationFn: createNote,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onClickCreate = async () => {
    onCreate.mutate();
  };

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

        <Carousel />

        <NoteList />

        {/* {noteList &&
        noteList.map((note) => (
          <div key={note.id}>
            <Txt20>{note.title}</Txt20>
            <Txt20>{dayjs(note.createdAt).toString()}</Txt20>
          </div>
        ))} */}
        {/* <LoginCTA onClick={onClickCreate}>
        <Txt24Bold>노트 생성하기</Txt24Bold>
      </LoginCTA> */}
      </FlexContainer>
    </FlexContainer>
  );
}

export default Home;
