import React, { useEffect } from "react";
import "./LoginPage.css"
import axios from "axios"




function LoginPage() {

  useEffect(() => {
    axios.post('/user', {
      firstName: 'email',
      lastName: 'password'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  })





  return (
      <div className="Login-page" style={{marginTop:"200px"}}>
     <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
      </div>

  );
}

export default LoginPage;
