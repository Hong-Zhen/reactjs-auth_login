import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import "../css/Signup.css";

const Changepw = () => {
  const oldpwRef = useRef();
  const pwd1Ref = useRef();
  const pwd2Ref = useRef();
  const { updatePw } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (oldpwRef.current.value === pwd1Ref.current.value) {
      console.log(
        `Old and new password is the same
             old Pw:${oldpwRef.current.value} PW1: ${pwd1Ref.current.value}`
      );
      swal({
        title: "Old and New Password cannot be the same",
        text: "Try Again",
        icon: "error",
      });
      return setError("Old and new password is the same");
    }

    if (pwd1Ref.current.value !== pwd2Ref.current.value) {
      console.log(
        `New password doesn't match
          PW1: ${pwd1Ref.current.value} PW2: ${pwd2Ref.current.value}`
      );
      swal({
        title: "New password do not match",
        text: "Try Again",
        icon: "error",
      });
      return setError("Password do not match");
    }

    const promises = [];
    if (pwd1Ref.current.value) {
      promises.push(updatePw(pwd1Ref.current.value));
    }

    Promise.all(promises)
      .then(() => {
        console.log("direct to dashboard");
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update password");
      })
      .finally(() => {
        setLoading(false);
        setError("Password Updated!");
        swal({
          title: "Password Updated!",
          icon: "success",
        });
        console.log("Password Updated!");
      });
  }

  function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
  }

  return (
    <>
      <div className="nav-container">
        <Link to="/dashboard" exact>
          <button
            className="back-btn"
            title="Back to Dashboard"
            style={{ width: "145px" }}
          >
            To Dashboard
          </button>
        </Link>
        <h1>Change Password Page</h1>
      </div>
      <form className="signup-container" onSubmit={handleSubmit}>
        {error && <Alert severity="error">{error}</Alert>}
        <h1 className="header-form">Change Password</h1>
        <label>Old Password:</label>
        <input
          ref={oldpwRef}
          type="password"
          id="oldPwd"
          name="oldPwd"
          minLength="6"
          required
        />
        <label>New Password:</label>
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
        <input
          ref={pwd2Ref}
          type="password"
          id="pwd2"
          name="pwd2"
          placeholder="minimum of 6 characters"
          minLength="6"
        />
        <button disabled={loading} className="btn">
          Update
        </button>
      </form>
      <div className="form-footer">
        <Link to="/dashboard" title="Back to Dashboard">
          Cancel
        </Link>
      </div>
    </>
  );
};

export default Changepw;
