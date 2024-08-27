import * as Yup from "yup";
import { LoginFormValues, RegisterFormValues } from "./types";

export const loginValidationSchema: Yup.Schema<LoginFormValues> =
  Yup.object().shape({
    email: Yup.string()
      .email("Netinkamas el. paštas")
      .required("Laukas būtinas"),
    password: Yup.string()
      .min(5, "Jūsų slaptažodis yra per trumpas. Min 5 simboliai")
      .required("Laukas būtinas"),
  });

export const schema = Yup.object().shape({
  age: Yup.number().min(18, "Too young").max(99, "Too old"),
});

export const loginFormInitialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const registerValidationSchema: Yup.Schema<RegisterFormValues> =
  Yup.object().shape({
    name: Yup.string().required("Laukas būtinas"),
    surname: Yup.string().required("Laukas būtinas"),
    email: Yup.string()
      .email("Netinkamas el. paštas")
      .required("Laukas būtinas"),
    password: Yup.string()
      .required("Laukas būtinas")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    repeatPassword: Yup.string()
      .required("Laukas būtinas")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });

export const registerFormInitialValues: RegisterFormValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
  repeatPassword: "",
};
