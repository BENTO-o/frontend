import { useEffect, useState } from "react";
import { FlexContainer, PageLayout } from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";

import { LeftSidebar } from "../../common/components/LeftSidebar";
import { TopBar } from "../../common/components/TopBar";
import { Carousel } from "../../common/components/Carousel";
import { NoteList } from "./components/NoteList";
import { getUser } from "../../common/utils";
import { useUserStore } from "../../stores/useUser";

function Home() {
  const { user, setUser } = useUserStore(); // zustand 훅 사용하여 form 상태 가져오기

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error fetching notes:", error);
    },
  });

  useEffect(() => {
    setUser(users);
  }, [users]);

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
      </FlexContainer>
    </FlexContainer>
  );
}

export default Home;
