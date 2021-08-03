import React, { useState } from "react";
import "../css/LoginSignup.css";

const LoginSignup = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleclick = () => {
    setShowSignup(!showSignup);
    console.log("click btn");
  };

  return (
    <div className={showSignup ? "body body-active" : "body"}>
      <div className="container">
        <div className="blueBg">
          <div className="signin box">
            <h2>Already Have an Account?</h2>
            <button onClick={handleclick}>Sign In</button>
          </div>
          <div className="signup box">
            <h2>Don't Have an Account?</h2>
            <button onClick={handleclick}>Sign Up</button>
          </div>
        </div>

        <div className={showSignup ? "formbox-active" : "formbox"}>
          {!showSignup && (
            <div className="form signinform">
              <form>
                <h3>Sign In</h3>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Log In</button>
                <p>Forget Password?</p>
              </form>
            </div>
          )}

          {showSignup && (
            <div className="form signupform">
              <form>
                <h3>Sign Up</h3>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign Up</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
