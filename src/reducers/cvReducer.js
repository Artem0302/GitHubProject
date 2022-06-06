import { ADDCV, GETCVS, GETMYCVS } from "../constants";

export const defaultState = {
  cvs: [],
  myCvs: [],
};

const cvReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADDCV:
      console.log(action.cv);
      return  {
        ...state,
        myCvs: [...state.myCvs,action.cv],
      };
    case GETCVS:
      return  {
        ...state,
        cvs: action.cvs,
      };
    case GETMYCVS:
      return  {
        ...state,
        myCvs: action.cvs,
      };
    default:
      return state;
  }
};

export default cvReducer;
