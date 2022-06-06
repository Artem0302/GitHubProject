import { ADD, DELETEADVERT, GETMYADVERTS } from "../constants";

export const defaultState = {
  adverts: [],
  myAdverts: [],
};

const advertReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      console.log(action.advert);
      return  {
          ...state,
          myAdverts: [...state.myAdverts,action.advert],
        };
    case GETMYADVERTS:
      return  {
        ...state,
        myAdverts: action.adverts,
      };
    case DELETEADVERT:
      let newAdverts = [];
      state.adverts.forEach((item)=>{if(item.adver_id===action.advertId){newAdverts.push(item)}});
      let newMyAdverts = [];
      state.myAdverts.forEach((item)=>{if(item.adver_id===action.advertId){newAdverts.push(item)}})
      return  {
        adverts: newAdverts,
        myAdverts: newMyAdverts,
      };
    default:
      return state;
  }
};

export default advertReducer;
