import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
import "../css/LoginSignup.css";

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();
  const fromLogin = location.state.fromLogin;

  useEffect(() => {
    if (fromLogin === true) {
      setShowLogin(true);
      setShowSignup(false);
    } else {
      setShowLogin(false);
      setShowSignup(true);
    }
  }, []);

  //   Login
  const loginEmailRef = useRef();
  const loginPwRef = useRef();
  const { login } = useAuth();

  //   Signup
  const signupEmailRef = useRef();
  const signupPw1Ref = useRef();
  const signupPw2Ref = useRef();
  const { signup } = useAuth();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [errAlert, setErrAlert] = useState("error");
  const history = useHistory();

  const handleRegisterBtn = () => {
    setShowLogin(false);
    setShowSignup(true);
    console.log("click register btn");
  };
  const handleLoginBtn = () => {
    setShowLogin(true);
    setShowSignup(false);
    console.log("click login btn");
  };

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      setErrAlert("success");
      setError("Logging in...");
      await login(loginEmailRef.current.value, loginPwRef.current.value);
      console.log(`Logged In successfully!
          Email: ${loginEmailRef.current.value} PW: ${loginPwRef.current.value}`);
      setErrAlert("success");
      setError("Logged in! Redirecting...");
      history.push("/dashboard");
    } catch {
      setError("Fail to sign in. Try Again Later");
      setErrAlert("error");
      swal({
        title: "Incorrect Email or Password",
        text: "Please Try Again",
        icon: "error",
      });
      console.log("Sign in failed");
      console.log(
        `Email: ${loginEmailRef.current.value}
          PW: ${loginPwRef.current.value}`
      );
    }
    setLoading(false);
  }

  async function handleSignup(e) {
    e.preventDefault();

    if (signupPw1Ref.current.value !== signupPw2Ref.current.value) {
      console.log(
        `Both password do not match
          PW1: ${signupPw1Ref.current.value} PW2: ${signupPw2Ref.current.value}`
      );
      swal({
        title: "Both password doesn't match",
        text: "Try Again",
        icon: "error",
      });
      return setError("Both password do not match");
    }

    try {
      setError("");
      setLoading(true);
      setErrAlert("success");
      setError("Creating Account...");
      await signup(signupEmailRef.current.value, signupPw1Ref.current.value);
      setError("Account Created!");
      swal({
        title: "Congratulation!",
        text: "Account Created Successfully",
        icon: "success",
        button: "To Login!",
      });
      console.log(`Account creation is successfull
        Email: ${signupEmailRef.current.value} PW: ${signupPw1Ref.current.value}`);
      history.push("/dashboard");
    } catch {
      setError("Invalid Email Address. Please Try Again");
      setErrAlert("error");
      swal({
        title: "Fail to create an account",
        text: "Try Again Later",
        icon: "error",
      });
      console.log(
        `Create account failed Email: ${signupEmailRef.current.value}
        PW1: ${signupPw1Ref.current.value} PW2: ${signupPw2Ref.current.value}`
      );
    }
    setLoading(false);
  }

  function Alert(props) {
    return <MuiAlert variant="filled" {...props} />;
  }

  return (
    <div className={showSignup ? "body body-active" : "body"}>
      <div className="container">
        <div className="blueBg">
          <div className="signin box">
            <h2>Already Have an Account?</h2>
            <button onClick={handleLoginBtn}>Log In</button>
          </div>
          <div className="signup box">
            <h2>Don't Have an Account?</h2>
            <button onClick={handleRegisterBtn}>Register Now</button>
          </div>
        </div>

        <div className={showSignup ? "formbox-active" : "formbox"}>
          {showLogin ? (
            <div className="form signinform">
              <form>
                {error === "false" && (
                  <Alert severity={errAlert}>{error}</Alert>
                )}
                <h3>Log In</h3>
                <input
                  ref={loginEmailRef}
                  type="loginEmail"
                  id="loginEmail"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  ref={loginPwRef}
                  type="password"
                  id="loginPw"
                  name="loginPw"
                  placeholder="Password"
                  minLength="6"
                  required
                />
                <button disabled={loading} onClick={handleLogin}>
                  Log In!
                </button>
                <div>
                  <Link to="/reset-pw">Forget Password?</Link>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
          {showSignup ? (
            <div className="form signupform">
              <form>
                <h3>Sign Up</h3>
                <input
                  ref={signupEmailRef}
                  type="signupEmail"
                  id="signupEmail"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  ref={signupPw1Ref}
                  type="password"
                  id="signupPw1"
                  name="signupPw1"
                  placeholder="Password"
                  minLength="6"
                  required
                />
                <input
                  ref={signupPw2Ref}
                  type="password"
                  id="signupPw2"
                  name="signupPw2"
                  placeholder="Confirm Password"
                  minLength="6"
                  required
                />
                <button disabled={loading} onClick={handleSignup}>
                  Sign Up!
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
