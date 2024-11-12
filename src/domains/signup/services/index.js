import client from "../../../services/client";

export const signup = async ({ email, username, password }) => {
    const response = await client.post('/users/register', { email, username, password });
    return response.data;
  };