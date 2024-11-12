import client from "../../../services/client";

export const signup = async ({ email, username, password }) => {
  const response = await client.post("/users/register", {
    email: email,
    username: username,
    password: password,
  });
  return response.data;
};
