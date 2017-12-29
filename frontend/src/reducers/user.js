import { RECEIVE_USER, LOGOUT_USER } from '../actions/user';

const user = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
    case LOGOUT_USER:
      return action.user;

    default:
      return state;
  }
};

export default user;
