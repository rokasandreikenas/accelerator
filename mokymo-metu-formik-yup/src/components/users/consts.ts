import * as Yup from "yup";
import { ArraySelectFormValues } from "./types";

export const arraySelectValidationSchema: Yup.Schema<ArraySelectFormValues> =
  Yup.object().shape({
    hobbies: Yup.array()
      .of(Yup.string().required("Privalomas laukelis"))
      .min(1, "Reikia bent vieno hobio")
      .required(),
    favoriteColor: Yup.string().required("Pasirinkite spalvą"),
  });

export const arraySelectInitialValues: ArraySelectFormValues = {
  hobbies: [""],
  favoriteColor: "",
};
