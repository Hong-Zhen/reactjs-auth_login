import React, { useState } from "react";
import "../css/Dashboard.css";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const userEmail = currentUser.email;

  let userName = "";
  for (var i = 0; i < userEmail.length; i++) {
    if (userEmail[i] !== "@") {
      userName += userEmail[i];
    } else {
      break;
    }
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      console.log("logout");
      swal({
        title: "Logged Out Successfully!",
        text: "Bye '" + userName + "'",
        icon: "success",
      });
      history.push("/homepage");
    } catch {
      setError("Fail to logout");
    }
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
