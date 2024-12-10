import client from "../../services/client";

export const getFolders = async () => {
  const response = await client.get("/notes/folders");
  return response.data;
};

export const createFolder = async (folderName) => {
  const response = await client.post("/notes/folders", {
    folderName: folderName,
  });
  return response.data;
};

export const createMemo = async (memoForm) => {
  const response = await client.post("/memos", {
    noteId: memoForm.noteId,
    timestamp: memoForm.timestamp,
    text: memoForm.text,
  });
  return response.data;
};

export const getMemos = async (noteId) => {
  const response = await client.get(`/memos/note/${noteId}`);
  return response.data;
}