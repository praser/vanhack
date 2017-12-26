export function requestHasErrored(state = false, action) {
  switch (action.type) {
    case 'REQUEST_HAS_ERRORED':
      return action.hasErrored
  
    default:
      return state
  }
}

export function requestIsLoading(state = false, action) {
  switch (action.type) {
    case 'REQUEST_IS_LOADING':
      return action.isLoading
  
    default:
      return state
  }
}