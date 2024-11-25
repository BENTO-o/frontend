import React, { useEffect, useState } from "react";
import { NoteInfo, NoteItemContainer, NoteTitle } from "../../../common/common";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const NoteItem = (props) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [note, setNote] = useState(props?.note);

  return (
    <NoteItemContainer
      onClick={() => {
        navigate(`/notes/${note.noteId}`);
      }}
    >
      <NoteTitle>{note.title}</NoteTitle>
      <NoteInfo>{dayjs(note.createdAt).format("YY.MM.DD")}</NoteInfo>
      <NoteInfo>{note.duration}</NoteInfo>
      <NoteInfo>{note.folder}</NoteInfo>
    </NoteItemContainer>
  );
};
