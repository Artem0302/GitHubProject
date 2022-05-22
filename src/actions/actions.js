import { CLEAR_REPOS, SET_CURRENT_PAGE, SET_REPOS, SIGN_IN } from "../constants";
import axios from 'axios';

export const signIn = (password, email) => {
  return {
    type: SIGN_IN,
    password: password,
    email: email,
  };
};

export const getRepos = (repoName, currentPage,filter='') => {
  console.log(repoName, currentPage);
  return async dispatch => {
    const response = await axios
      .get(
        `https://api.github.com/search/repositories?q=${repoName}${filter}&per_page=15&page=${currentPage}`,
      )
      .catch(error => console.log(error));
    console.log(response.data);
    dispatch(setRepos(response.data));
  };
};

const setRepos = repos => ({type: SET_REPOS, payload: repos});
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page});
export const clearRepos = () => ({type: CLEAR_REPOS});

