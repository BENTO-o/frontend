import { useState } from "react";
import {
  FlexContainer,
  LoginBtn,
  LogoTxt,
  PageLayout,
  Txt20,
  Txt24Bold,
} from "../../common/common";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, getNotes } from "./services";
import dayjs from "dayjs";

function Home() {
  const [fakeData, setFakeData] = useState([
    {
      noteId: 1,
      title: "Title",
      createdAt: "2024-11-13 12:41:19",
    },
    {
      noteId: 2,
      title: "Title",
      createdAt: "2024-11-13 12:42:24",
    },
    {
      noteId: 3,
      title: "Title",
      createdAt: "2024-11-13 12:45:37",
    },
  ]);

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
    setFakeData([
      ...fakeData,
      {
        noteId: fakeData.length + 1,
        title: "Title",
        createdAt: dayjs(),
      },
    ]);

    // onCreate.mutate();
  };

  return (
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      <LoginBtn onClick={onClickCreate}>
        <Txt24Bold>노트 생성하기</Txt24Bold>
      </LoginBtn>
      {fakeData &&
        fakeData.map((note) => (
          <FlexContainer margin="10px" key={note.noteId}>
            <Txt20>{note.title}</Txt20>
            <span style={{ width: "20px" }}></span>
            <Txt20>{dayjs(note.createdAt).format("YYYY-MM-DD hh:mm:ss")}</Txt20>
          </FlexContainer>
        ))}
    </PageLayout>
  );
}

export default Home;
