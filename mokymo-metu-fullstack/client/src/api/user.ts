import axios from "axios";
import { NewUser, User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

// į DB {name: '', surname: .., ...}
// grįžta su id {id: 2, name: '', surname: .., ...}

export const createUser = async (user: NewUser): Promise<User> => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  return response.data;
};
