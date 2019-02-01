/**
 * Initial State
 */
const initialState = {
  messages: [],
  userLogin: '',
  users: '',
  letters: '',
  letters_users: '',
  logged: false,
};

/**
 * Types
 */
const ADD_LETTER = 'ADD_LETTER';
const ADD_LETTER_USER = 'ADD_LETTER_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const SEND_USER = 'SEND_USER';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        ...action.modif,
      };
    case ADD_LETTER_USER:
      return {
        ...state,
        ...action.settings,
      };
    case SEND_MESSAGE:

      return {
        ...state,
        messages: [...state.messages, action.message],
        users: state.users,
        userLogin: action.userLogin,
        letters: '',
      };
    case SEND_USER:

      return {
        ...state,
        users: action.users,
        userLogin: action.users,
        letters_users: '',
        logged: true,
      };
    case RECEIVE_MESSAGE:

      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const loginInputChange = modif => ({
  type: ADD_LETTER,
  modif,
});
export const loginFormSubmit = (message, users) => ({
  type: SEND_MESSAGE,
  message,
  users,
});
export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});
export const SettingsFormSubmit = users => ({
  type: SEND_USER,
  users,
});
export const SettingsInputChange = settings => ({
  type: ADD_LETTER_USER,
  settings,
});

/**
 * Export
 */
export default reducer;
