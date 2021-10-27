import React, { useState } from "react";
import { registerService } from "../helpers/auth";


export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);


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
    registerService(email, username, password)
    .then(
      data => {
        console.log(data)
      }
    ).catch((error:Error) => {
      console.log(error)
    });
  };


  return (
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
    </form>
  );
}

export default RegistrationForm;