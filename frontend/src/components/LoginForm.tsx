import React, { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth";


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null)
    try {
      const user = await authService.login(email, password);
      window.localStorage.setItem('user', JSON.stringify(user.user));
      window.localStorage.setItem('admin', user.user.is_staff);
      window.localStorage.setItem('token', user.access);
      window.location.pathname = "/";
    } catch(e) {
      setErrorMessage('Invalid credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
        {errorMessage && (<p>{errorMessage}</p>)}
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default LoginForm;