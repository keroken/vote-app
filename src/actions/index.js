import * as actionTypes from './types';

export const upVote = () => {
  return {
    type: actionTypes.UP_VOTE,
  };
};

export const downVote = () => {
  return {
    type: actionTypes.DOWN_VOTE,
  };
};