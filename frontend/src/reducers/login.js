export default function login(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESSFULLY':
      return action.user;
    case 'LOGOUT':
      return {};
    case 'LOAD_USER':
      return action.user;

    default:
      return state;
  }
}
