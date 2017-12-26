export default function signup(state = {}, action) {
  switch (action.type) {
    case 'SIGNUP_SUCCESSFULLY':
      return action.user;

    default:
      return state;
  }
}
