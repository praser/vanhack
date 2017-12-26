export function addMessage(state = null, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.message
  
    default:
      return state
  }
}