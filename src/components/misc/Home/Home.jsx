import React from 'react';
import Posts from '../../Posts/Posts';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Posts />
      <Posts LinkToComments={true} />
    </div>
  );
};

export default Home;