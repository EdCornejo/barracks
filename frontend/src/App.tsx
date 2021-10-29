import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from './components/Home';
import Admin from './components/Admin';
import Movie from './components/Movie';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/admin" component={Admin} />
      <ProtectedRoute exact path="/movie/:id" component={Movie} />
    </BrowserRouter>
  );
}

export default App;
