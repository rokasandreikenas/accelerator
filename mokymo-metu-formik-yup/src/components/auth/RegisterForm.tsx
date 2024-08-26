import { Formik, Form } from "formik";
import { registerFormInitialValues, registerValidationSchema } from "./consts";
import { RegisterFormValues } from "./types";
import { registerUser } from "./api";
import RegisterFormFields from "./RegisterFormFields";

const RegisterForm = () => {
  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      await registerUser(values);
      alert("Successfull register");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={registerFormInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <RegisterFormFields />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
