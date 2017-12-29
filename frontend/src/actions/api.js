import fetch from 'cross-fetch';
import { appIsLoading } from './loading';
import { addUIMessage } from './ui_message';

const BASE_URI = 'http://localhost:3030';
export const USER_AUTH_URI = `${BASE_URI}/authenticate`;
export const USER_CREATE_URI = `${BASE_URI}/users`;

function apiRequest(uri, options) {
  const defaultOptions = Object.assign(
    {},
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
    options,
  );

  return (dispatch) => {
    dispatch(appIsLoading(true));
    return (
      fetch(uri, defaultOptions)
        .then((response) => {
          dispatch(appIsLoading(false));

          if (response.ok) {
            dispatch(addUIMessage(options.successMessage));
          } else {
            throw Error;
          }

          return response.json();
        })
        .catch(() => {
          dispatch(addUIMessage(options.errorMessage));
        })
    );
  };
}

// Do Post Request in API
export function apiPost(uri, opt, callback) {
  const options = {
    method: 'POST',
    body: JSON.stringify(opt.body),
    successMessage: opt.successMessage,
    errorMessage: opt.errorMessage,
  };

  return (dispatch) => {
    dispatch(apiRequest(uri, options))
      .then(json => dispatch(callback(json)));
  };
}
