import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterFormValues } from "./types";
import { registerValidationSchema } from "./consts";
import styles from "./Form.module.scss";

const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm: React.FC = () => {
  const handleSubmit = (values: RegisterFormValues) => {
    console.log("Formos duomenys:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Vardas</label>
            <Field type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">El. paštas</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Slaptažodis</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Pateikti
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
