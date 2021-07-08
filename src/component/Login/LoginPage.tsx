import React, { useEffect } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Form, Field, ErrorMessage, useFormik } from "formik";

function LoginPage() {
  useEffect(() => {
    axios
      .post("/user", {
        firstName: "email",
        lastName: "password",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="Login-page text-center mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            className="form-control"
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
