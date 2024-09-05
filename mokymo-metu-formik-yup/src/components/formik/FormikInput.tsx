import { Field, ErrorMessage } from "formik";
import styles from "./Input.module.scss";
import Input from "../common/Input";

interface FormikInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormikInput = ({ name, ...props }: FormikInputProps) => {
  return (
    <div>
      <Field name={name} as={Input} {...props} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default FormikInput;
