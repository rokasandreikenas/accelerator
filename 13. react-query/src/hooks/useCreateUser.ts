import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { NewUser, User } from "../types/user";

const createUser = async (user: NewUser): Promise<User> => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  return response.data;
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
