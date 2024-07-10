import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../api/user";
import { USERS_KEY } from "./useUsers";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  // invalidateQueries - Invalidate every query in the cache
  // POST after sucess GET pagal nurodyta query
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USERS_KEY] }),
  });
};
