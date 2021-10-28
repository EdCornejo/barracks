
  export const getMovies = () => {

    const url = `http://localhost:8000/api/movie/`;
    const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2MDEyNzMwLCJqdGkiOiIzZDZhNmQ4ZDY3YmU0ZjQ4OWFhNTU5MDhhZTg4M2RkNyIsInVzZXJfaWQiOjEsInVzZXIiOnsiaWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGVqZW1wbG8ucG9jIiwiaXNfYWN0aXZlIjp0cnVlLCJpc19zdGFmZiI6dHJ1ZSwiaXNfbW9iaWxlX3VzZXIiOmZhbHNlfSwidGltZXN0YW1wIjoiMTYzNTQwNzkzMC44NDA5MTgiLCJpc19zdXBlcnVzZXIiOnRydWV9.qMOz7p32TLa_xjx-ANRfH7PKMWQ773rSLxYO-V-jvTU`;
    const config = {
      method: 'GET',
      headers:{
        'Authorization': `Bearer ${token}`
      }
    };

    const promise = new Promise((resolve, reject) => {
      fetch(url, config)
      .then((response:Response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Error en el login');
        }
      })
      .then((data:any) => {
        resolve (data);
      })
      .catch((error:Error) => {
        reject({
          error
        })
      });
    });
    return promise;
  };


export const getMovie = (id:number) => {

  const url = `http://localhost:8000/api/movie/${id}/`;
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2MDEyNzMwLCJqdGkiOiIzZDZhNmQ4ZDY3YmU0ZjQ4OWFhNTU5MDhhZTg4M2RkNyIsInVzZXJfaWQiOjEsInVzZXIiOnsiaWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGVqZW1wbG8ucG9jIiwiaXNfYWN0aXZlIjp0cnVlLCJpc19zdGFmZiI6dHJ1ZSwiaXNfbW9iaWxlX3VzZXIiOmZhbHNlfSwidGltZXN0YW1wIjoiMTYzNTQwNzkzMC44NDA5MTgiLCJpc19zdXBlcnVzZXIiOnRydWV9.qMOz7p32TLa_xjx-ANRfH7PKMWQ773rSLxYO-V-jvTU`;
  const config = {
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${token}`
    }
  };

  const promise = new Promise((resolve, reject) => {
    fetch(url, config)
    .then((response:Response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error en el login');
      }
    })
    .then((data:any) => {
      resolve (data);
    })
    .catch((error:Error) => {
      reject({
        error
      })
    });
  });
  return promise;
};