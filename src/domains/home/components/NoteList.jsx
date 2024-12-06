import React from "react";
import { NoteListContainer } from "../../../common/common";
import { NoteItem } from "./NoteItem";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../services";

export const NoteList = () => {
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

  return (
    <NoteListContainer>
      {noteList &&
        noteList.map((note) => <NoteItem note={note} key={note.notedId} />)}
    </NoteListContainer>
  );
};
