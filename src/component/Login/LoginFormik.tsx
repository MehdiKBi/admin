import React from "react";
import { Form, Field, ErrorMessage, useFormik } from "formik";

function LoginFromik() {

  const formik = useFormik({
    initialValues: {
      email: '',
    },

   onSubmit: values => {
     alert(JSON.stringify(values, null, 2));
   },
 });
  return (
    <div>
    
   return (
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <button type="submit">Submit</button>
     </form>
  </div>
  );
}

export default LoginFromik;
