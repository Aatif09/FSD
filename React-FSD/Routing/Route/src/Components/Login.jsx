import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setName] = useState();
  const [password, setpassword] = useState();
  const [error, setError] = useState();

  let navigate = useNavigate();
  function collectData(e) {
    e.preventDefault();
    console.log("Inside Function");
    console.log("Hi, Your name is:" + name);
    if (name == "aatif@gmail.com") {
      console.log("Hey, inside condtion");
      navigate("/registration");
    } else {
      setError("Email id is incorrect");
    }
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={collectData}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            onChange={(e) => {
              setName(e.target.value);
            }}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            {name}
          </small>
          <h2 style={{ color: "red" }}>{error}</h2>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
          />
          <small id="emailHelp" class="form-text text-muted">
            {password}
          </small>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
