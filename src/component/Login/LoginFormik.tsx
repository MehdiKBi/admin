import React from "react";
import { Form, Field, ErrorMessage } from "formik";

function LoginFromik() {
  return (
    <Form>
      <Field type="email" name="email" />
      <ErrorMessage name="email" component="div" />
      <Field type="password" name="password" />
      <ErrorMessage name="password" component="div" />
      <button type="submit" disabled>
      </button>
    </Form>
  );
}
export default LoginFromik;
