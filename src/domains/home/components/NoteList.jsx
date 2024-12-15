import React, { useCallback } from "react";
import { NoteListContainer } from "../../../common/common";
import { NoteItem } from "./NoteItem";
import { useQuery } from "@tanstack/react-query";
import { getNoteByDate, getNoteBySearch, getNotes, getNotesByFolder } from "../services";
import { useDateStore } from "../../../stores/useDate";
import { useSearchStore } from "../../../stores/useSearch";
import { useFolderStore } from "../../../stores/useFolder";
import dayjs from "dayjs";

export const NoteList = () => {
  const { startDate, endDate } = useDateStore();
  const { searchQuery } = useSearchStore();
  const { folderId } = useFolderStore();

  const fetchNotes = useCallback(async () => {
    if (folderId) {
      return await getNotesByFolder(folderId);
    }
    if (startDate && endDate) {
      // dayjs를 사용하여 날짜를 YYYY-MM-DD 형식으로 변환
      const formattedStartDate = dayjs(startDate).format("YYYY-MM-DD");
      const formattedEndDate = dayjs(endDate).format("YYYY-MM-DD");
      return await getNoteByDate({ startDate: formattedStartDate, endDate: formattedEndDate });
    }
    if (searchQuery) {
      return await getNoteBySearch(searchQuery);
    }
    return await getNotes();
  }, [folderId, startDate, endDate, searchQuery]);

  const { data: noteList, isError, isLoading } = useQuery({
    queryKey: ["noteList", folderId, startDate, endDate, searchQuery],
    queryFn: fetchNotes,
    onSuccess: () => {
      console.log("Fetched notes successfully");
    },
    onError: (error) => {
      console.error("Error fetching notes:", error);
    },
    refetchOnMount: "always",
    staleTime: 1000 * 60, // Adjust stale time as needed
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load notes</div>;

  return (
    <NoteListContainer>
      {Array.isArray(noteList) &&
        noteList.map((note) => <NoteItem note={note} key={note.notedId} />)}
    </NoteListContainer>
  );
};
