import React from "react";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
