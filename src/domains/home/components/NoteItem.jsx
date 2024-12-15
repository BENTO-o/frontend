import React, { useEffect, useState } from "react";
import {
  CustomIcon,
  NoteInfo,
  NoteItemContainer,
  NoteItemInnerContainer,
  NoteTitle,
} from "../../../common/common";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Icon_Trash from "../../../assets/Trash.svg";
import { deleteNote } from "../services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const NoteItem = (props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [note, setNote] = useState(props?.note);

  const onDelete = useMutation({
    mutationFn: deleteNote,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["noteList"]);
      // navigate(`/`);
    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onClickDelete = async (noteId) => {
    onDelete.mutate(noteId);
  };

  return (
    <NoteItemContainer>
      <NoteItemInnerContainer
        onClick={() => {
          navigate(`/notes/${note.noteId}`);
        }}
      >
        <NoteTitle>{note.title}</NoteTitle>
        <NoteInfo>{dayjs(note.createdAt).format("YY.MM.DD")}</NoteInfo>
        <NoteInfo>{note.duration}</NoteInfo>
        <NoteInfo>{note.folder}</NoteInfo>
      </NoteItemInnerContainer>
      <CustomIcon
        src={Icon_Trash}
        onClick={() => {
          onClickDelete(note.noteId);
        }}
      />
    </NoteItemContainer>
  );
};
