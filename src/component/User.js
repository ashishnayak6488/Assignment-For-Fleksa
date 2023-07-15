import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../actions/UserAction';

function User() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(setUser(data)));
  }, [dispatch]);


  return (
    <div>
        <h1 className='heading2'>Users</h1>
        <hr className='hr' />
      <ol type='number'>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.address.city}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
};


export default User;
