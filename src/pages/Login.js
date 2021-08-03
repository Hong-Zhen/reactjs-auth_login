import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import "../css/Login.css";

const Login = () => {
  const emailRef = useRef();
  const pwd1Ref = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [errAlert, setErrAlert] = useState("error");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      setErrAlert("success");
      setError("Logging in...");
      await login(emailRef.current.value, pwd1Ref.current.value);
      console.log(`Logged In successfully!
          Email: ${emailRef.current.value} PW: ${pwd1Ref.current.value}`);
      setErrAlert("success");
      setError("Logged in! Redirecting...");
      history.push("/dashboard");
    } catch {
      setError("Fail to sign in. Try Again Later");
      setErrAlert("error");
      swal({
        title: "Fail to Sign In",
        text: "Try Again Later",
        icon: "error",
      });
      console.log("Sign in failed");
      console.log(
        `Email: ${emailRef.current.value}
          PW: ${pwd1Ref.current.value}`
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
        <Link to="/homepage" exact>
          <button className="back-btn" title="Back to Homepage">
            Back Home
          </button>
        </Link>
        <h1>Login Page</h1>
        <Link to="/signup">
          <button className="fwd-btn" title="Sign Up">
            Sign Up
          </button>
        </Link>
      </div>
      <form className="login-container" onSubmit={handleSubmit}>
        {error && <Alert severity={errAlert}>{error}</Alert>}
        <h1 className="header-form">Log In</h1>
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
          //   placeholder="minimum of 6 characters"
          minLength="6"
          required
        />

        <button disabled={loading} className="btn">
          Log In!
        </button>
        <div style={{ textAlign: "center" }}>
          <Link to="/reset-pw">Forget Password?</Link>
        </div>
      </form>
      <div className="form-footer">
        Need an account?{" "}
        <Link to="/signup" title="Sign Up Now">
          Sign Up here
        </Link>
      </div>
    </>
  );
};

export default Login;
