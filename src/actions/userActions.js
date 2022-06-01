import { CONFIRMED, LOGIN, REGISTRATION, SET_CURRENT_PAGE } from "../constants";
import axios from 'axios';

export const login = (email,password) => {
  return async dispatch => {
    const response = await axios.post('http://192.168.1.111:3000/auth/login', {
      email: email,
      password: password
    }).then((response)=> {
      dispatch(returnUser(response.data));
    })
      .catch(error => {
        console.log(error);
        dispatch(returnUser({}));
      });
  };
};

const returnUser = data => ({type: LOGIN, user: data});
export const regUser = user => ({type: REGISTRATION, user: user});
export const confirmUser = () => ({type: CONFIRMED});

