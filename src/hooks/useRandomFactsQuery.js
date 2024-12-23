import { useQuery } from "@tanstack/react-query";
import { getRandomFacts } from "@/services/randomFactsService";

export const useRandomFactsQuery = () => {
  return useQuery({
    queryKey: ["randomFacts"],
    queryFn: getRandomFacts,
    enabled: false,
  });
};
