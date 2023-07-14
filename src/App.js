import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './actions/UserAction';
import Header from './component/Header';

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(setUser(data)));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h2>Users</h2>
      <ol type='number'>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
