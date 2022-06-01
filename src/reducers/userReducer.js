import {CONFIRMED, LOGIN, REGISTRATION} from '../constants';

export const defaultState = {
  user: {},
  isSignedIn: false,
  correctPassword: true,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user
        ? action.user
        : {
            ...state,
            correctPassword: false,
          };
    case REGISTRATION:
      return {
        ...state,
        user: action.user,
      };
    case CONFIRMED:
      return {
        ...state,
        isSignedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
