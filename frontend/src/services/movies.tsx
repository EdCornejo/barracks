import axios from "axios";


const movies = async () => {
  const url = `http://localhost:8000/api/movie/`;
  const token = window.localStorage.getItem('token');
  const config = {
    headers:{
      'Authorization': `Bearer ${token}`
    }
  }
  const { data } = await axios.get(url, config)
  return data
}


const movie = async (id:string) => {
  const url = `http://localhost:8000/api/movie/${id}/`;
  const token = window.localStorage.getItem('token');
  const config = {
    headers:{
      'Authorization': `Bearer ${token}`
    }
  }
  const { data } = await axios.get(url, config)
  return data
}

export default { movies, movie };
