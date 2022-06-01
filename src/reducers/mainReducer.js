import {CLEAR_REPOS, SET_CURRENT_PAGE, SET_REPOS} from '../constants';
import userReducer from './userReducer';
import {combineReducers} from 'redux';
import advertReducer from "./advertReducer";

export const defaultState = {
  items: [],
  currentPage: 1,
};

const MainReducer = (state = defaultState, action) => {
  switch (action.type) {
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

export default combineReducers({
  advertReducer,
  MainReducer,
  userReducer,
});
