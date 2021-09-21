import { upVote, downVote } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  voteScore: 0,
  voteCount: 0
};

const votes = (state = initialState, action) => {
  switch (action.type) {
    case upVote:
      return {
        voteScore: (state.voteScore) ? state.voteScore + 1 : 1,
        voteCount: (state.voteCount) ? state.voteCount + 1 : 1
      };
    case downVote:
      return {
        voteScore: (state.voteScore) ? state.voteScore - 1 : -1,
        voteCount: (state.voteCount) ? state.voteCount + 1 : 1
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  votes
});

export default rootReducer;