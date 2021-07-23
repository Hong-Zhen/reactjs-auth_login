import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const pwd1Ref = useRef();
  const pwd2Ref = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

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
      await signup(emailRef.current.value, pwd1Ref.current.value);
      setError("Account Created!");
      console.log(`Account creation successfull
        Email: ${emailRef.current.value} PW: ${pwd1Ref.current.value}`);
    } catch {
      setError("Fail to create an account");
      console.log("Create account failed");
      console.log(
        `Email: ${emailRef.current.value}
        PW1: ${pwd1Ref.current.value} PW2: ${pwd2Ref.current.value}`
      );
    }
    setLoading(false);
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      {error && <h3>{error}</h3>}
      <h1 style={{}}>Header Tag Text</h1>
      <label>Email Address:</label>
      <input
        ref={emailRef}
        type="email"
        id="email"
        name="email"
        placeholder="example@email.com"
        // required
      />
      <label>Password:</label>
      <input
        ref={pwd1Ref}
        type="password"
        id="pwd1"
        name="pwd1"
        //  required
      />
      <label>Confirmation Password:</label>
      <input
        ref={pwd2Ref}
        type="password"
        id="pwd2"
        name="pwd2"
        //  required
      />
      <button disabled={loading} className="btn signup-btn">
        Sign Up!
      </button>
      <div className="form-footer">Already have an account? Log In here</div>
    </form>
  );
};

export default Signup;
