import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import "../css/Signup.css";

const Signup = () => {
  const emailRef = useRef();
  const pwd1Ref = useRef();
  const pwd2Ref = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [errAlert, setErrAlert] = useState("error");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (pwd1Ref.current.value !== pwd2Ref.current.value) {
      console.log(
        `Both password doesn't match
          PW1: ${pwd1Ref.current.value} PW2: ${pwd2Ref.current.value}`
      );
      return setError("Both password doesn't match");
    }

    try {
      setError("");
      setLoading(true);
      setErrAlert("success");
      setError("Creating Account...");
      await signup(emailRef.current.value, pwd1Ref.current.value);
      setError("Account Created!");
      console.log(`Account creation is successfull
        Email: ${emailRef.current.value} PW: ${pwd1Ref.current.value}`);
      history.push("/login");
    } catch {
      setError("Fail to create an account. Try Again Later");
      setErrAlert("error");
      console.log("Create account failed");
      console.log(
        `Email: ${emailRef.current.value}
        PW1: ${pwd1Ref.current.value} PW2: ${pwd2Ref.current.value}`
      );
    }
    setLoading(false);
  }

  function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
  }

  return (
    <>
      <div className="nav-container">
        <Link to="/" exact>
          <button className="back-btn" title="Back to Homepage">
            Back Home
          </button>
        </Link>
        <h1>Sign Up Page</h1>
        <Link to="/login">
          <button className="fwd-btn" title="Login">
            Login
          </button>
        </Link>
      </div>
      <form className="signup-container" onSubmit={handleSubmit}>
        {error && <Alert severity={errAlert}>{error}</Alert>}
        <h1 className="header-form">Sign Up</h1>
        <label>Email Address:</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          required
        />
        <label>Password:</label>
        <input
          ref={pwd1Ref}
          type="password"
          id="pwd1"
          name="pwd1"
          placeholder="minimum of 6 characters"
          minLength="6"
          required
        />
        <label>Confirmation Password:</label>
        <input ref={pwd2Ref} type="password" id="pwd2" name="pwd2" required />
        <button disabled={loading} className="btn">
          Sign Up!
        </button>
      </form>
      <div className="form-footer">
        Already have an account?{" "}
        <Link to="/login" title="Login">
          Log In here
        </Link>
      </div>
    </>
  );
};

export default Signup;
