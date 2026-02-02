import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTestdata, testMutationFn } from "./test.service";

export const useTest = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: getTestdata,
  });
};

export const useUpdateTest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: testMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["test"] });
    },
  });
};
