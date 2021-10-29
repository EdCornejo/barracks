import {useEffect, useState} from 'react';
import moviesService from '../services/movies';


interface IState {
  movies: [],
  loading: boolean,
}

export const useFetchMovies = () => {
  const [state, setState] = useState<IState>({
    movies: [],
    loading: true,
  });

  useEffect(() => {
    moviesService.movies()
    .then((movies:[]) => {
      setState({
        movies: movies,
        loading: false,
      });
    })
    .catch((error:Error) => {
      localStorage.clear();
      window.location.pathname = "/login";
    });
  }, []);

  return state;
}