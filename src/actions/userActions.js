import { LOGIN } from "../constants";
import axios from 'axios';

export const login = () => {
  return async dispatch => {
    const response = await axios
      .get(
        `https://api.github.com/search/repositories?q=${repoName}${filter}&per_page=15&page=${currentPage}`,
      )
      .catch(error => console.log(error));
  };
};
