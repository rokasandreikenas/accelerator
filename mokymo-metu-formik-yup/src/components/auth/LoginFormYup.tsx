import { Formik, Form } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "./consts";
import { LoginFormValues } from "./types";
import { loginUser } from "./api";
import LoginFormFields from "./LoginFormFields";

const LoginFormYup = () => {
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      await loginUser(values);
      alert("Successfull login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={loginFormInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            <div>{console.log(errors)}</div>
            <LoginFormFields />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormYup;
