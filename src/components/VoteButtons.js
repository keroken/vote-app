import React from 'react';

const VoteButtons = ({ label, onUpvote, onDownvote, voteScore, voteCount }) => {
  return (
    <div>
      <h2>{label}</h2>
      <button alt="upvote" onClick={onUpvote}>&uarr;</button> &nbsp;
      <button alt="downvote" onClick={onDownvote}>&darr;</button>
      <p>Score: {voteScore || 0} out of {voteCount || 0 } total votes!</p>
    </div>
  );
}

export default VoteButtons;