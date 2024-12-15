import client from "../../../services/client";

export const getNotes = async () => {
  const response = await client.get("/notes");
  return response.data;
};

export const createNote = async () => {
  const response = await client.post("/notes", {});
  return response.data;
};

export const getNotesByFolder = async (folderId) => {
  const response = await client.get(`/notes/folders/${folderId}`);
  return response.data;
}

export const getNoteByDate = async ({startDate, endDate}) => {
  const response = await client.get(`/notes/search?startDate=${startDate}&endDate=${endDate}`);
  return response.data;
}

export const getNoteBySearch = async (search) => {
  const response = await client.get(`/notes/search?query=${search}`);
  return response.data;
}

export const deleteNote = async (noteId) => {
  const response = await client.delete(`/notes/${noteId}`);
  return response.data;
}