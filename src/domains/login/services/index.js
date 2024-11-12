import client from "../../../services/client";

export const login = async ({ email, password }) => {
  const response = await client.post("/users/login", {
    email: email,
    password: password,
  });
  return response.data;
};
