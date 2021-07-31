import React, { useState } from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  // const [error, setError] = useState();
  const { currentUser } = useAuth();

  const userEmail = currentUser.email;
  let userName = "";
  for (var i = 0; i < userEmail.length; i++) {
    if (userEmail[i] !== "@") {
      userName += userEmail[i];
    } else {
      break;
    }
  }

  function handleLogout() {
    console.log("logout");
  }

  return (
    <>
      <div className="dash-container">
        <strong>Welcome! </strong> "{userName}"
        <Link to="/profile">Profile</Link>
      </div>
      <div className="dash-footer">
        <Link exact="true">
          <button onClick={handleLogout}>Log out</button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
