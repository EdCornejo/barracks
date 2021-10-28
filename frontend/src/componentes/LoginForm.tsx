import React, { useState } from "react";
import { loginService } from "../helpers/auth";


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);


  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  };


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim().length > 1 && password.trim().length > 1 ) {
      loginService(email, password)
      .then(
        data => {
          console.log(data)
        }
      ).catch((error:Error) => {
        console.log(error)
      });
    } else {
      console.log("Datos invalidos");
    }

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
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;