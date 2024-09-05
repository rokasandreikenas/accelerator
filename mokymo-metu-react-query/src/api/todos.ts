import axios from "axios";
import { NewTodo, Todo } from "../types/todos";

const API = "https://jsonplaceholder.typicode.com";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${API}/todos`);
  return response.data;
};

export const fetchTodo = async (id: Todo["id"]): Promise<Todo> => {
  const response = await axios.get(`${API}/todos/${id}`);
  return response.data;
};

export const createTodo = async (todo: NewTodo): Promise<Todo> => {
  const response = await axios.post(`${API}/todos`, todo);
  return response.data;
};
