import axios from 'axios'



const login = async (email:string, password:string) => {
  const url = `http://localhost:4000/api/user/login/`;
  const payload = JSON.stringify({email, password});
  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }
  const { data } = await axios.post(url, payload, config)
  return data
}


const register = async (email:string, username:string, password:string) => {
  const url = `http://localhost:4000/api/user/register/`;
  const payload = {email, username, password};
  console.log(payload);
  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }
  const { data } = await axios.post(url, payload, config)
  return data
}

export default { login, register };
