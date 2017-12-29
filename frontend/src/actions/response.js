export const API_LAST_RESPONSE = 'API_LAST_RESPONSE';

export function apiLastResponse(response) {
  return {
    type: API_LAST_RESPONSE,
    apiLastResponse: response
  }
}

export function clearApiLastResponse() {
  return {
    type: API_LAST_RESPONSE,
    apiLastResponse: {ok: false}
  }
}