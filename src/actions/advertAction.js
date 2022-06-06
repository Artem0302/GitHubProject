import {ADD, GETMYADVERTS} from '../constants';
import axios from 'axios';

export const add = advert => {
  return async dispatch => {
    await axios
      .post('http://192.168.1.111:3000/advert/create-advert', {
        advert: advert,
      })
      .then(response => {
        dispatch(addAdvert(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const addAdvert = advert => ({type: ADD, advert: advert});

export const deleteMyAdvert = advertId => {
  return async dispatch => {
    await axios
      .post('http://192.168.1.111:3000/advert/delete-advert', {
        advert_id: advertId,
      })
      .then(response => {
        dispatch(deleteAdvert(advertId));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const deleteAdvert = advertId => ({type: ADD, advertId: advertId});

export const getMyAdverts = adverts => ({type: GETMYADVERTS, adverts: adverts});
