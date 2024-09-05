import { Formik, Form, Field } from "formik";

const SimpleForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", surname: "", age: 0, password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field name="name" />
          <br />
          <Field name="surname" />
          <br />
          <Field type="number" name="age" />
          <br />
          <Field type="password" name="password" />
          <br />
          <button type="submit">Create new user</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SimpleForm;
