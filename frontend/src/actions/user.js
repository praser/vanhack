import { USER_AUTH_URI, USER_CREATE_URI, apiPost } from './api';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


const lsUserKey = 'user';

// Load user from localStorage
export function getLocalUser() {
  return JSON.parse(localStorage.getItem(lsUserKey));
}

// Save user in localStorage
function setLocalUser(userData) {
  const user = JSON.stringify(userData);
  return user ? localStorage.setItem(lsUserKey, user) : false;
}

export function receiveUser(user) {
  setLocalUser(user);

  return {
    type: RECEIVE_USER,
    user: user || {},
    sessionStarted: Date.now(),
  };
}

// Remove user from localStorage
function removeLocalUser() {
  return localStorage.removeItem(lsUserKey);
}

// Create a new user in the API
function postUser(userData) {
  const user = apiPost(
    USER_CREATE_URI,
    {
      body: userData,
      successMessage: `Welcolme ${userData.name}, your account has been created`,
      errorMessage: 'Ops, we are so sorry to inform you that something went wrong.',
    },
    receiveUser,
  );

  return user;
}

// Load user from the API
function getApiUser(credentials) {
  const user = apiPost(
    USER_AUTH_URI,
    {
      body: credentials,
      successMessage: 'Welcome back dear friend.',
      errorMessage: 'Ops, we could not authenticate you. Please try again',
    },
    receiveUser,
  );

  return user;
}

// Load user from API or localstorage
function loadUser(credentials) {
  return getLocalUser() ? getLocalUser() : getApiUser(credentials);
}

export function logoutUser() {
  removeLocalUser();

  return {
    type: LOGOUT_USER,
    user: {},
    sessionStarted: null,
  };
}

export function createUser(userData) {
  return postUser(userData);
}

export function getUser(credentials) {
  return loadUser(credentials);
}

export function loadLocalUser() {
  return {
    type: RECEIVE_USER,
    user: getLocalUser() || {},
  };
}
