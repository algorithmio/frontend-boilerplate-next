import { apiClient } from "./api/apiClient";

export const getRandomFacts = async () => {
  const response = await apiClient.get(
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
  );
  return response.data;
};
