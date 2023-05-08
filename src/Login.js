import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { loginWithRedirect, logout, isAuthenticated} = useAuth0();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Sign In</h2>
      <h5>Sign in to your account</h5>
      {isAuthenticated ? (
        <li>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <button onClick={() => loginWithRedirect()}>
            Sign in with Google
          </button>
        </li>
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          id="password"
          name="password"
        />
        <a href="/forgot-password">Forgot Password?</a>
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
export default Login;
