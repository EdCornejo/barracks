import React from 'react';
import { Link } from 'react-router-dom';
import { IUser, useFetchUsers } from '../hooks/useFetchUsers';



const Admin = () => {
  const {users, loading} = useFetchUsers();

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/login";
  };

  return (
    <div>
      <h1>Users connected</h1>
      <p>Secret Page</p>
      <button onClick={handleLogout}>
        Logout
      </button>
      <Link to="/">Home</Link>
      { loading && <p>Loading</p>}
      <table>
        <tr>
          <th>Email</th>
          <th>Last login date</th>
          <th>Device</th>
        </tr>
        {
          users.map( (user:IUser) => (
            <tr>
              <td>{user.email}</td>
              <td>{user.last_login || '-'}</td>
              <td>{user.is_mobile_user ? 'Mobile':'Desktop'}</td>
            </tr>
          ))
        }
      </table>

    </div>
  )
};

export default Admin;