import { useState } from "react";
import {
  LoginCTA,
  LogoTxt,
  PageLayout,
  Txt20,
  Txt24Bold,
} from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";
import dayjs from "dayjs";

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
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      {noteList &&
        noteList.map((note) => (
          <div key={note.id}>
            <Txt20>{note.title}</Txt20>
            <Txt20>{dayjs(note.createdAt).toString()}</Txt20>
          </div>
        ))}
      <LoginCTA onClick={onClickCreate}>
        <Txt24Bold>노트 생성하기</Txt24Bold>
      </LoginCTA>
    </PageLayout>
  );
}

export default Home;
