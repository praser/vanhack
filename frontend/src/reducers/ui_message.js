import { ADD_UI_MESSAGE, REMOVE_UI_MESSAGE } from '../actions/ui_message';

const uiMessage = (state = null, action) => {
  switch (action.type) {
    case ADD_UI_MESSAGE:
    case REMOVE_UI_MESSAGE:
      return action.uiMessage;

    default:
      return state;
  }
};

export default uiMessage;
