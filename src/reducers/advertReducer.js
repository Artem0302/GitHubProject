import { ADD} from "../constants";

export const defaultState = {
  adverts: [],
  myAdverts: [],
  isSignedIn: false,
  correctPassword: true,
};

const advertReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      console.log([...state.myAdverts,action.advert]);
      return  {
          ...state,
          myAdverts: [...state.myAdverts,action.advert],
        };
    default:
      return state;
  }
};

export default advertReducer;
