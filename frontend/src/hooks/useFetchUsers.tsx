import {useEffect, useState} from 'react';
import usersService from '../services/users';

export interface IUser {
  id: number,
  username: string,
  email: string,
  is_active: boolean,
  is_staff: boolean,
  is_mobile_user: boolean,
  last_login: string,
}


interface IState {
  users: IUser[],
  loading: boolean,
}

export const useFetchUsers = () => {
  const [state, setState] = useState<IState>({
    users: [],
    loading: true,
  });

  useEffect(() => {
    usersService.users()
    .then((users:IUser[]) => {
      setState({
        users: users,
        loading: false,
      });
    })
    .catch((error:Error) => {
      localStorage.clear();
      window.location.pathname = "/";
    });
  }, []);

  return state;
}