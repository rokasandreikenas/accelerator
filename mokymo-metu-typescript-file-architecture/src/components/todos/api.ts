import axios from "axios";
import { NewTodo, Todo } from "./types";

const API = "https://jsonplaceholder.typicode.com/";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${API}/todos`);
  return response.data;
};

export const createTodo = async (todo: NewTodo): Promise<Todo> => {
  const response = await axios.post(`${API}/todos`, todo);
  return response.data;
};

// createTodo({userId: 1, title: 'Learn TS', completed: false}) =>
// {userId: 1, title: 'Learn TS', completed: false, id: 1}
