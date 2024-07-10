export interface User {
  id: number;
  name: string;
}

export type NewUser = Omit<User, "id">; // Omit išima nurodytus tipus
