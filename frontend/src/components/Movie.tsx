import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchMovie } from '../hooks/useFetchMovie';


interface IProps {
  id: string
}


const Movie = () => {
  let {id}:IProps = useParams();

  const {movie, loading} = useFetchMovie(id);

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <button onClick={handleLogout}>
        Logout
      </button>
      { loading && <p>Loading</p>}
      <div>
        <img src={movie.poster_path} alt={movie.title}/>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>Vote average: {movie.vote_average}</p>
        <p>Vote count: {movie.vote_count}</p>
      </div>
    </div>
  );
};


export default Movie;