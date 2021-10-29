import {useEffect, useState} from 'react';
import moviesService from '../services/movies';


export interface IMovie {
  id: number,
  title: string,
  description: string,
  poster_path: string
  popularity: number,
  vote_average: number,
  vote_count: number,
}


interface IState {
  movie: IMovie,
  loading: boolean,
}

export const useFetchMovie = (id:string) => {
  const [state, setState] = useState<IState>({
    movie: {
      id: 0,
      title: '',
      description: '',
      poster_path: '',
      popularity: 0,
      vote_average: 0,
      vote_count: 0
    },
    loading: true,
  });

  useEffect(() => {
    moviesService.movie(id)
    .then((movie:IMovie) => {
      setState({
        movie: movie,
        loading: false,
      });
    })
    .catch((error:Error) => {
      localStorage.clear();
      window.location.pathname = "/login";
    });
  }, [id]);

  return state;
}