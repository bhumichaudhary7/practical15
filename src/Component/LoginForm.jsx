import React, { useRef, useState } from "react";

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    });
  };

  return (
    <div className="login-card">
      <div className="login-icon">🔐</div>
      <h1>Welcome Back!</h1>
      <p className="subtitle">Login to your account</p>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input ref={usernameRef} type="text"
          placeholder="Enter username" required />

        <label>Password</label>
        <input ref={passwordRef} type="password"
          placeholder="Enter password" required />

        <button type="submit">Login</button>
      </form>

      {user && (
        <div className="result">
          <h3>Login Submitted!</h3>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Password:</b> {user.password}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;