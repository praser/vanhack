import { API_LAST_RESPONSE } from '../actions/response'

const apiLastResponse = (state = {ok: false}, action) => {
  switch (action.type) {
    case API_LAST_RESPONSE:
      return action.apiLastResponse
  
    default:
      return state;
  }
}

export default apiLastResponse;