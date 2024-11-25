import client from "../../services/client";

export const getFolders = async () => {
  const response = await client.get("/notes/folders");
  return response.data;
};

export const createMemo = async (noteId, timestamp, text) => {
  const response = await client.post("/memos", {
    noteId: noteId,
    timestamp: timestamp,
    text: text,
  });
  return response.data;
};

export const getMemos = async (noteId) => {
  const response = await client.get(`/memos/note/${noteId}`);
  return response.data;
}