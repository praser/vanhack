export const ADD_UI_MESSAGE = 'ADD_UI_MESSAGE';
export const REMOVE_UI_MESSAGE = 'REMOVE_UI_MESSAGE';

export function addUIMessage(uiMessage) {
  const message = uiMessage ? uiMessage : null
  return {
    type: ADD_UI_MESSAGE,
    uiMessage: message,
  };
}

export function removeUIMessage() {
  return {
    type: REMOVE_UI_MESSAGE,
    uiMessage: '',
  };
}
