import React from "react";

const Registration = () => {
  return (
    <>
      <div>Registration</div>
      <form>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contact-Number</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Mobile"
          />
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button type="reset" class="btn btn-danger">
          Reset Data
        </button>
      </form>
    </>
  );
};

export default Registration;
