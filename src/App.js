import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  return errors;
};

export default function App() {
  return (
    <Formik
      initialValues={{
        name: '', // text
        email: '' // email
      }}
      validate={validate}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => {
        return (
          <>
            <h1>Job Application</h1>
            <Form>
              <div>
                <label>Candidate Name :</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />
              </div>
              <br />
              <div>
                <label>Candidate Email :</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

