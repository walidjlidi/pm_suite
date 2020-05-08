import React from 'react';
import {useAuth} from '../context/auth';

function Home () {
  let { currentUser } = useAuth();

  return (
    <div className="container">
      <h1>Welcome back {currentUser.name}</h1>
    </div>
  );
}

export default Home;
