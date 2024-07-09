import * as Yup from "yup";
import { RegisterFormValues } from "./types";
import { errorMessage } from "../../consts/errors";

export const registerValidationSchema: Yup.Schema<RegisterFormValues> =
  Yup.object().shape({
    name: Yup.string()
      .min(2, "Per trumpas!")
      .max(50, "Per ilgas!")
      .required(errorMessage.required),
    surname: Yup.string().required(),
    email: Yup.string()
      .email("Netinkamas el. paštas")
      .required(errorMessage.required),
    password: Yup.string()
      .min(8, "Slaptažodis per trumpas - minimalus ilgis yra 8 simboliai")
      .required(errorMessage.required),
  });

export const exampleSchema: Yup.Schema<RegisterFormValues> = Yup.object().shape(
  {
    name: Yup.string().required(errorMessage.required),
    surname: Yup.string().required(),
    email: Yup.string().email("Blogas emailas").required(errorMessage.required),
    password: Yup.string().required(errorMessage.required),
  }
);
