import client from "../../../services/client";

export const getNotes = async () => {
  const response = await client.get("/notes");
  return response.data;
};

export const getNote = async (noteId) => {
  const response = await client.get(`/notes/${noteId}`);
  return response.data;
};

export const getAISummary = async (noteId) => {
  const response = await client.get(`/notes/${noteId}/ai-summary`);
  return response.data;
};

export const createNote = async () => {
  const response = await client.post("/notes", {});
  return response.data;
};

export const createBookmark = async (bookmarkForm) => {
  const response = await client.post(`/bookmarks`, bookmarkForm);
  return response.data;
};

export const deleteBookmark = async (bookmarkId) => {
  const response = await client.delete(`/bookmarks/${bookmarkId}`);
  return response.data;
}

export const deleteMemo = async (memoId) => {
  const response = await client.delete(`/memos/${memoId}`);
  return response.data;
}