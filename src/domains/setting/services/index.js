import client from "../../../services/client";

export const getUser = async () => {
  const response = await client.get("/users/me");
  return response.data;
};

export const updatePw = async ({current_password, new_password}) => {
  const response = await client.post("/notes", {current_password, new_password});
  return response.data;
};
