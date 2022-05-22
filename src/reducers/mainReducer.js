import { CLEAR_REPOS, SET_CURRENT_PAGE, SET_REPOS, SIGN_IN } from "../constants";

export const defaultState = {
  items: [],
  password: '',
  email: '',
  correctPassword: true,
  isSignedIn: false,
  currentPage: 1,
};

const MainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        password: action.password,
        email: action.email,
        isSignedIn: !state.isSignedIn,
      });
    case SET_REPOS:
      return {
        ...state,
        items: [...state.items, ...action.payload.items],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CLEAR_REPOS:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default MainReducer;
