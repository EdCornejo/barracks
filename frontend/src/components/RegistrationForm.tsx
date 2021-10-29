import React, { useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth";


export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  };


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, username, password);
    authService.register(email, username, password)
      .then(
        response => {
          window.location.pathname = "/login";
        }
      ).catch((error:Error) => {
        setErrorMessage('Invalid data')
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      });
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
          id="username"
          type="username"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Register</button>
        {errorMessage && (<p>{errorMessage}</p>)}
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default RegistrationForm;