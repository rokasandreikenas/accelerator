import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/user";

export const USERS_KEY = "users";

export const useUsers = () => {
  return useQuery({
    queryKey: [USERS_KEY],
    queryFn: fetchUsers,
  });
};
