import { ADDCV, GETCVS, GETMYCVS } from "../constants";
import axios from 'axios';

export const addCv = cv => {
  return async dispatch => {
    await axios
      .post('http://192.168.1.111:3000/cv/create-cv', {
        cv: cv,
      })
      .then(response => {
        dispatch(add(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const searchCv = speciality => {
  return async dispatch => {
    await axios
      .post('http://192.168.1.111:3000/cv/search-cvs', {
        speciality: speciality,
      })
      .then(response => {
        dispatch(getCvs(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const add = cv => ({type: ADDCV, cv: cv});

export const getCvs = cvs => ({type: GETCVS, cvs: cvs});
export const getMyCvs = cvs => ({type: GETMYCVS, cvs: cvs});
