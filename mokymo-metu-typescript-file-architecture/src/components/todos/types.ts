// export interface Todo {
//   id: number;
//   userId: number;
//   title: string;
//   completed: boolean;
// }

// export type NewTodo = Omit<Todo, "id">;

export interface NewTodo {
  userId: number;
  title: string;
  completed: boolean;
}

export interface Todo extends NewTodo {
  id: number;
}
