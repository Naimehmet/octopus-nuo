import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication logic if needed
    navigate("/ai"); // Redirect to AI page after login
  };

  return (
    <div className="login-container">
      <h2>Octopus Energy - Nuo</h2>
      <p>Log in to access AI-powered meter analysis</p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Log In</button>
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
  );
}

export default Login;
