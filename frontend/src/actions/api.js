import { appIsLoading } from './loading';
import { addUIMessage } from './ui_message';
import { apiLastResponse } from './response'

function apiRequest(uri, options) {
  const defaultOptions = Object.assign(
    {},
    {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    },
    options,
  );

  return (dispatch) => {
    dispatch(appIsLoading(true));
    return (
      fetch(uri, defaultOptions)
        .then((response) => {
          dispatch(appIsLoading(false));
          dispatch(apiLastResponse(response));

          if (response.ok) {
            dispatch(addUIMessage(options.successMessage));
          } else {
            throw Error;
          }

          return response.json();
        })
        .catch(() => (
          dispatch(appIsLoading(false)),
          dispatch(addUIMessage(options.errorMessage)),
          null
        ))
    );
  };
}

// Do Post Request in API
export function apiPost(uri, opt, callback) {
  const options = Object.assign(
    {},
    {
      method: 'POST',
    },
    opt
  )

  return (dispatch) => {
    dispatch(apiRequest(uri, options))
      .then(json => dispatch(callback(json)));
  };
}
