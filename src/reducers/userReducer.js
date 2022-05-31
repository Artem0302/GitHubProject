import {LOGIN} from '../constants';

export const defaultState = {
  user: {},
  isSignedIn: false,
  correctPassword: true,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload.user
        ? action.payload
        : {
            ...state,
            correctPassword: false,
          };
    default:
      return state;
  }
};

export default userReducer;
