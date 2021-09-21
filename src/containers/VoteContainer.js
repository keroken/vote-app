import VoteButtons from '../components/VoteButtons';
import * as actionTypes from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    voteScore: state.voteScore,
    voteCount: state.voteCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpvote: () => {
      dispatch(actionTypes.upVote())
    },
    onDownvote: () => {
      dispatch(actionTypes.downVote())
    }
  };
};

export const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteButtons);