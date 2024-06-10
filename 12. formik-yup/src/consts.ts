import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Per trumpas!")
    .max(50, "Per ilgas!")
    .required("Privalomas laukelis"),
  email: Yup.string()
    .email("Netinkamas el. paštas")
    .required("Privalomas laukelis"),
  password: Yup.string()
    .min(8, "Slaptažodis per trumpas - minimalus ilgis yra 8 simboliai")
    .required("Privalomas laukelis"),
});

export const arraySelectValidationSchema = Yup.object().shape({
  hobbies: Yup.array()
    .of(Yup.string().required("Privalomas laukelis"))
    .min(1, "Reikia bent vieno hobio"),
  favoriteColor: Yup.string().required("Pasirinkite spalvą"),
});
