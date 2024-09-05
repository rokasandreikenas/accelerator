import { Field, ErrorMessage } from "formik";
import FormikInput from "../formik/FormikInput";
import styles from "./LoginForm.module.scss";

const LoginFormFields = () => {
  return (
    <div>
      <FormikInput placeholder="El. pastas" name="email" />
      <br />
      <Field placeholder="Slaptazodis" type="password" name="password" />
      <ErrorMessage name="password" component="div" className={styles.error} />
      <br />
    </div>
  );
};

export default LoginFormFields;
