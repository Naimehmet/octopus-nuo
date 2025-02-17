import React from "react";

function Login() {
  return (
    <div className="login-container">
      <h2>Octopus Energy - Nuo</h2>
      <p>Log in to access AI-powered meter analysis</p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
  );
}

export default Login;
