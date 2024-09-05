import { Formik, Form } from "formik";
import FormikInput from "../components/formik/FormikInput";
import { NewTodo } from "../types/todos";
import { useCreateTodo } from "../hooks/todos";

interface TodoFormValues {
  title: string;
}

const initialValues: TodoFormValues = {
  title: "",
};

const CreateTodo = () => {
  const { mutateAsync: createTodo, isPending } = useCreateTodo();

  const handleSubmit = async (values: TodoFormValues) => {
    const newTodo: NewTodo = { ...values, userId: 1, completed: false };
    await createTodo(newTodo);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormikInput name="title" />
        <button type="submit" disabled={isPending}>
          Create new todo
        </button>
      </Form>
    </Formik>
  );
};

export default CreateTodo;
