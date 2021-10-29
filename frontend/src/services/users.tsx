import axios from "axios";


const users = async () => {
  const url = `http://localhost:4000/api/user/`;
  const token = window.localStorage.getItem('token');
  const config = {
    headers:{
      'Authorization': `Bearer ${token}`
    }
  }
  const { data } = await axios.get(url, config)
  return data
}

export default { users };
