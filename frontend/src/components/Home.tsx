import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../hooks/useFetchMovie';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { MovieItem } from './MovieItem';

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const {movies, loading} = useFetchMovies();


  useEffect(() => {
    const admin = window.localStorage.getItem('admin')
    setIsAdmin(admin === 'true')
  }, [])

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  return (
    <div className="App">
      <h1>Welcome to the Homepage</h1>
      <button onClick={handleLogout}>
        Logout
      </button>
      {isAdmin && <Link to="/admin">Admin Panel</Link>}
      { loading && <p>Loading</p>}
      <div>
        {
          movies.map( (movie:IMovie) => (
            <MovieItem
              key={movie.id}
              { ...movie }
            />
          ))
        }
      </div>
    </div>
  );
};

export default Home;