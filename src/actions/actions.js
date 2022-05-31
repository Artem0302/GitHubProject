import { CLEAR_REPOS, SET_CURRENT_PAGE, SET_REPOS, LOGIN } from "../constants";
import axios from 'axios';

export const getRepos = (repoName, currentPage,filter='') => {
  return async dispatch => {
    const response = await axios
      .get(
        `https://api.github.com/search/repositories?q=${repoName}${filter}&per_page=15&page=${currentPage}`,
      )
      .catch(error => console.log(error));
    dispatch(setRepos(response.data));
  };
};

// export const login = (repoName, currentPage,filter='') => {
//   return async dispatch => {
//     const response = await axios
//       .get(
//         `https://api.github.com/search/repositories?q=${repoName}${filter}&per_page=15&page=${currentPage}`,
//       )
//       .catch(error => console.log(error));
//     dispatch(setRepos(response.data));
//   };
// };

const setRepos = repos => ({type: SET_REPOS, payload: repos});
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page});
export const clearRepos = () => ({type: CLEAR_REPOS});

