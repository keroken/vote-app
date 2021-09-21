import React from 'react';
import { Link } from 'react-router-dom';
import { VoteContainer } from '../containers/VoteContainer';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul style={{ listStyle: 'none' }}>
        <li><Link to="/about">About</Link></li>
      </ul>
      <VoteContainer label="Upvote or downvote this app!" />
    </div>
  );
}

export default Home;