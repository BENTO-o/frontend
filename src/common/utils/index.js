import client from "../../services/client";

export const getFolders = async () => {
  const response = await client.get("/notes/folders");
  return response.data;
};
