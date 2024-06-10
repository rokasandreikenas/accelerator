import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { ArraySelectFormValues } from "./types";
import { arraySelectValidationSchema } from "./consts";
import styles from "./Form.module.scss";

const initialValues: ArraySelectFormValues = {
  hobbies: [""],
  favoriteColor: "",
};

const ArraySelectForm: React.FC = () => {
  const handleSubmit = (values: ArraySelectFormValues) => {
    console.log("Formos duomenys:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={arraySelectValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className={styles.form}>
          <FieldArray name="hobbies">
            {({ remove, push }) => (
              <div>
                <label>Hobiai</label>
                {values.hobbies.length > 0 &&
                  values.hobbies.map((_hobby, index) => (
                    <div className={styles.formGroup} key={index}>
                      <Field name={`hobbies.${index}`} />
                      <button type="button" onClick={() => remove(index)}>
                        Pašalinti
                      </button>
                      <ErrorMessage
                        name={`hobbies.${index}`}
                        component="div"
                        className={styles.error}
                      />
                    </div>
                  ))}
                <button type="button" onClick={() => push("")}>
                  Pridėti hobi
                </button>
              </div>
            )}
          </FieldArray>

          <div className={styles.formGroup}>
            <label htmlFor="favoriteColor">Mėgstamiausia spalva</label>
            <Field as="select" name="favoriteColor">
              <option value="">Pasirinkite spalvą</option>
              <option value="red">Raudona</option>
              <option value="blue">Mėlyna</option>
              <option value="green">Žalia</option>
            </Field>
            <ErrorMessage
              name="favoriteColor"
              component="div"
              className={styles.error}
            />
          </div>

          <button
            type="button"
            onClick={() => setFieldValue("favoriteColor", "blue")}
          >
            Nustatyti dažniausiai pasirenkamą spalvą
          </button>

          <button type="submit" disabled={isSubmitting}>
            Pateikti
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ArraySelectForm;
