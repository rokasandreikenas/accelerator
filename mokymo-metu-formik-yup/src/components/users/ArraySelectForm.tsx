import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { ArraySelectFormValues } from "./types";
import {
  arraySelectInitialValues,
  arraySelectValidationSchema,
} from "./consts";
import styles from "./Form.module.scss";

const ArraySelectForm = () => {
  const handleSubmit = (values: ArraySelectFormValues) => {
    console.log("Formos duomenys:", values);
  };

  // hobbies.0 => hobbies[0]
  // hobbies.1 => hobbies[1] =>
  // hobbies.push('') => ['test', 'best', '']
  return (
    <div>
      <Formik
        initialValues={arraySelectInitialValues}
        validationSchema={arraySelectValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
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
            <ErrorMessage
              name="hobbies"
              component="div"
              className={styles.error}
            />
            <button onClick={() => setFieldValue("hobbies", [])}>
              Išvalyti hobius
            </button>
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

            {/* setFieldMetodas gali pakeisti Formik state. Pirmas paramtetras yra fieldo pavadinimas, antras reikšmė */}
            <button
              type="button"
              onClick={() => setFieldValue("favoriteColor", "blue")}
            >
              Nustatyti mėgstamiausią spalvą melyną
            </button>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ArraySelectForm;
