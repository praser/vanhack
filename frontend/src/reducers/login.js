export function login(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESSFULLY':
      return action.user
    case 'LOGOUT':
      return {}
  
    default:
      return state
  }
}