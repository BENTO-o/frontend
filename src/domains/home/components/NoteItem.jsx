import React, { useState } from "react";
import { NoteInfo, NoteItemContainer, NoteTitle } from "../../../common/common";
import dayjs from "dayjs";

export const NoteItem = (props) => {
  const [note, setNote] = useState(props.note);
  return (
    <NoteItemContainer>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteInfo>{dayjs(note.date).format("YY.MM.DD")}</NoteInfo>
      <NoteInfo>{note.duration}</NoteInfo>
    </NoteItemContainer>
  );
};
