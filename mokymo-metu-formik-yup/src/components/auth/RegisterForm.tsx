import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterFormValues } from "./types";
import { registerValidationSchema } from "./consts";
import styles from "./Form.module.scss";

// 1. sukuriam initial values
const registerFormInitialValues: RegisterFormValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const handleSubmit = (values: RegisterFormValues) => {
    // Neveikia jeigu schema nepraeina
    console.log(values);
  };

  // 2. Panaudojam Formik komponentą ir priskiriam initialValues
  // 3. sukuriam onSubmit f-ciją ir nurodom values tipą
  return (
    <Formik
      initialValues={registerFormInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
    >
      {/* Render Prop funkcionalumas kuris leidžia ištraukti parametrus renderyje */}
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Vardas</label>
            {/* 4. Sukuriam inputus su Field komponentu ir būtinai!!! panaudojam name atributą */}
            {/* Jeigu nepridėsite "name" atributo neveiks Formiko onChange handleris */}
            <Field type="text" name="name" />
            {/* Panaudojam komponentą ir nurodom name atributą kuriam laukui rodo errorą */}
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="surname">Pavardė</label>
            <Field name="surname" />
            <ErrorMessage
              name="surname"
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

    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="name" />
    //   <input type="email" name="email" />
    //   <input type="password" name="password" />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default RegisterForm;
