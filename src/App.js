import React from 'react';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import User from './component/User';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element= {<Header />} />
      </Routes>
      <Routes>
        <Route path='/users' element= {<User />} />
      </Routes>
    </div>
  );
}

export default App;
