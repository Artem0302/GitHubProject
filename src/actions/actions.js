// import * as APIHandler from '../Api/ApiHandler.js';

export const signIn = (password, email) => {
  return {
    type: 'SIGN_IN',
    password: password,
    email: email,
  };
};
