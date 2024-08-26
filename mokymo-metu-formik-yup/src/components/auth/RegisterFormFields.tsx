import { useFormikContext } from "formik";
import FormikInput from "../formik/FormikInput";
import { RegisterFormValues } from "./types";
import { useEffect } from "react";

const RegisterFormFields = () => {
  const { values, setFieldValue } = useFormikContext<RegisterFormValues>();

  useEffect(() => {
    if (values.name && values.surname) {
      const customEmail = `${values.name.toLowerCase()}.${values.surname.toLowerCase()}@iamjunior.lt`;
      setFieldValue("email", customEmail);
    }
  }, [values.name, values.surname]);

  return (
    <div>
      <FormikInput placeholder="Vardas" name="name" />
      <br />
      <FormikInput placeholder="Pavarde" name="surname" />
      <br />
      <FormikInput placeholder="El. pastas" name="email" />
      <br />
      <FormikInput type="password" placeholder="Slaptazodis" name="password" />
      <br />
      <FormikInput
        type="password"
        placeholder="Pakartoti slaptazodi"
        name="repeatPassword"
      />
      <br />
    </div>
  );
};

export default RegisterFormFields;
