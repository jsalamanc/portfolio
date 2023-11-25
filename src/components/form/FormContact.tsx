import React from 'react';
import { Formik } from 'formik';

export const FormContact = () => {
  /*
   * initial values of formik form
   */
  const initialValues = {
    fullName: '',
    email: '',
    message: '',
  };

  /*
   * function to handke validation of formik form
   */
  const validate = (values: typeof initialValues) => {
    const errors: typeof initialValues = {
      fullName: '',
      email: '',
      message: '',
    };
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  /*
   * function to handle submitting of formik form
   */
  const submit = async (values: typeof initialValues, actions) => {
    console.log('values', values);
  };
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={submit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
