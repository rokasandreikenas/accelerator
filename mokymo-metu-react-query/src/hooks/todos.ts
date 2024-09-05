import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, fetchTodo, fetchTodos } from "../api/todos";
import { Todo } from "../types/todos";

const TODOS_KEY = "TODOS";

export const useTodos = () => {
  return useQuery({
    queryKey: [TODOS_KEY],
    queryFn: fetchTodos,
  });
};

export const useTodo = (id: Todo["id"]) => {
  return useQuery({
    queryKey: [TODOS_KEY, id],
    queryFn: () => fetchTodo(id),
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [TODOS_KEY] }),
  });
};
