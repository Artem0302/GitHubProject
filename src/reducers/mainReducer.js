export const defaultState = {
  repository: [
    {
      name: 'wwayne/react-native-nba-app',
      uri: 'https://github.com/wwayne/react-native-nba-app',
      forks: 2,
      stars: 5,
    },
  ],
  password: '',
  email: '',
  correctPassword: true,
  isSignedIn: false,
};

const MainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return Object.assign({}, state, {
        password: action.password,
        email: action.email,
        isSignedIn: !state.isSignedIn,
      });
    default:
      return state;
  }
};

export default MainReducer;
