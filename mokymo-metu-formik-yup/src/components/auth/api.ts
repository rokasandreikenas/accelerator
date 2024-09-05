import { LoginFormValues, RegisterFormValues } from "./types";

export const loginUser = (user: LoginFormValues): Promise<LoginFormValues> => {
  return new Promise((resolve) => resolve(user));
};

export const registerUser = (
  user: RegisterFormValues
): Promise<RegisterFormValues> => {
  return new Promise((resolve) => resolve(user));
};
