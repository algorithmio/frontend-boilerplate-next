import { apiClient } from "./api/apiClient";

export const postMockForm = async (data) => {
  const response = await apiClient.post("https://httpbin.org/post", data);
  return response.data;
};
