import client from "../../../services/client";

export const getNotes = async () => {
  const response = await client.get("/notes");
  return response.data;
};

export const createNote = async () => {
  const response = await client.post("/notes", {});
  return response.data;
};
