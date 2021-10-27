interface IUser {
  id: number,
  username: string,
  is_active: boolean,
  is_staff: boolean,
  is_mobile_user: boolean,
}

interface IRegistrationResponse {
  user: IUser,
  token: string,
}


export const registerService = (email:string, username:string, password:string) => {

  const url = `http://localhost:8000/api/user/register/`;
  const payload = {email, username, password};
  const config = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{ 'Content-Type': 'application/json'}
  }

  const promise = new Promise((resolve, reject) => {
    fetch(url, config)
    .then((response:Response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Error en el registro');
      }
    })
    .then((data:IRegistrationResponse) => {
      resolve ({
        user: {
          id: data.user.id,
          username: data.user.username,
          is_active: data.user.is_active,
          is_staff: data.user.is_staff,
          is_mobile_user: data.user.is_mobile_user,
        },
        token: data.token,
      });

    })
    .catch((error:Error) => {
      reject({
        error
      })
    });
  });
  return promise;
};
