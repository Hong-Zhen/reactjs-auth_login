import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import ResetPw from "./pages/ResetPw";
import Changepw from "./pages/Changepw";

function App() {
  return (
    <>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/homepage" exact component={Homepage} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/reset-pw" component={ResetPw} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/change-pw" exact component={Changepw} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
