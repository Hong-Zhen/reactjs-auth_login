import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../css/Resetpw.css";

const ResetPw = () => {
  const emailRef = useRef();
  const { resetPw } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [errAlert, setErrAlert] = useState("error");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      setErrAlert("success");
      setError("Resetting...");
      await resetPw(emailRef.current.value);
      setErrAlert("success");
      setError("Check your inbox for instructions");
      swal({
        title: "Password Reset!",
        text: "Check your inbox for instructions",
        icon: "success",
      });
      console.log(`Reset successfully!
          Email: ${emailRef.current.value}`);
    } catch {
      setError("Fail to reset password. Try Again Later");
      setErrAlert("error");
      swal({
        title: "Fail to Reset Password",
        text: "Try Again Later",
        icon: "error",
      });
      console.log("Reset PW failed");
      console.log(`Email: ${emailRef.current.value}`);
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
        <h1>Reset Password Page</h1>
      </div>
      <form className="resetpw-container" onSubmit={handleSubmit}>
        {error && <Alert severity={errAlert}>{error}</Alert>}
        <h1 className="header-form">Reset Password</h1>
        <label>Email Address:</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          required
        />

        <button disabled={loading} className="btn">
          Reset
        </button>
        <div className="" style={{ textAlign: "center" }}>
          <Link to="/login-signup">Login Here</Link>
        </div>
      </form>
      <div className="form-footer">
        Need an account?{" "}
        <Link to="/login-signup" title="Sign Up Now">
          Sign Up here
        </Link>
      </div>
    </>
  );
};

export default ResetPw;
