import { Formik, Form } from "formik";
import { loginFormInitialValues } from "./consts";
import { LoginFormValues } from "./types";
import { loginUser } from "./api";
import LoginFormFields from "./LoginFormFields";

const LoginForm = () => {
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      await loginUser(values);
      alert("Successfull login");
    } catch (error) {
      console.error(error);
    }
  };

  const validate = (values: LoginFormValues) => {
    const errors: Record<string, string> = {};

    if (!values.email.includes("@")) {
      errors.email = "El. pašte nėra simbolio @";
    }

    if (!values.email) {
      errors.email = "Įveskite reikšmę";
    }

    if (values.password.length < 5) {
      errors.password = "Jūsų slaptažodis yra per trumpas. Min 5 simboliai";
    }
    console.log(errors);
    return errors;
  };

  // {password: "Erorras"}
  return (
    <div>
      <Formik
        initialValues={loginFormInitialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {/* {({ values, errors }) => (
          <Form>
            <h2>{values.email}</h2>
            <Field placeholder="El. pastas" name="email" />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            <br />
            <Field placeholder="Slaptazodis" type="password" name="password" />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
            <br />
            <button type="submit">Login</button>
          </Form>
        )} */}
        <Form>
          <LoginFormFields />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
