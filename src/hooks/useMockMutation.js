import { useMutation } from "@tanstack/react-query";
import { postMockForm } from "@/services/mockFormService";

export const useMockMutation = () => {
  return useMutation({
    mutationFn: postMockForm,
    onSuccess: () => {
      console.log("Form submitted successfully");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
    },
  });
};
