import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: number,
  title: string,
  description: string,
  poster_path: string
  popularity: number,
  vote_average: number,
  vote_count: number,
}

export const MovieItem:React.FunctionComponent<IProps> = ({id, title, poster_path}) => {

  return (
    <div>
      <img src={poster_path} alt={title}/>
      <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    </div>
  );
}
