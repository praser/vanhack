/**
 * Add a message to be showed in toast
 * @param {String} message
 */
export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    message,
  };
}

export function requestHasErrored(bool) {
  return {
    type: 'REQUEST_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function requestIsLoading(bool) {
  return {
    type: 'REQUEST_IS_LOADING',
    isLoading: bool,
  };
}

export function loginSuccessfully(user) {
  return {
    type: 'LOGIN_SUCCESSFULLY',
    user,
  };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetch('http://localhost:3030/authenticate', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: new Headers({ 'Content-type': 'application/json' }),
    })
      .then((response) => {
        dispatch(requestIsLoading(false));

        if (!response.ok) {
          dispatch(addMessage("That's embarrassing I but couldn't recognize you."));
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(addMessage(`We're so happy to see you again ${user.name.split(' ')[0]}. Enjoy your session`));
        return dispatch(loginSuccessfully(user));
      })
      .catch(() => dispatch(requestHasErrored(true)));
  };
}

export function logout() {
  localStorage.removeItem('user');
  return {
    type: 'LOGOUT',
    user: {},
  };
}

export function signupSuccessfully(user) {
  return {
    type: 'SIGNUP_SUCCESSFULLY',
    user,
  };
}

export function signupRequest(name, email, password, agreement, avatar) {
  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetch('http://localhost:3030/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        agreement,
        avatar,
      }),
      headers: new Headers({ 'Content-type': 'application/json' }),
    })
      .then((response) => {
        dispatch(requestIsLoading(false));

        if (!response.ok) {
          dispatch(addMessage("Wooooow. I'm having some throobles right now. Plese come back later and try again."));
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(addMessage(`Welcome ${user.name.split(' ')[0]}, we are delightful to have you here. Enjoy your session.`));
        return dispatch(loginSuccessfully(user));
      })
      .catch(() => dispatch(requestHasErrored(true)));
  };
}

export function loadUser() {
  return {
    type: 'LOAD_USER',
    user: JSON.parse(localStorage.getItem('user')) || {},
  };
}
