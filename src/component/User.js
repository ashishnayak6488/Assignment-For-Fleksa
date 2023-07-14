// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from './actions/UserAction';

// function User() {
//   const users = useSelector((state) => state.users);
//   // const dispatch = useDispatch();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => dispatch(setUser(data)));
//   }, [dispatch]);


//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <h3>{user.name}</h3>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// export default User;
