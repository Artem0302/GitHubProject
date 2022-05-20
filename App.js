import React from 'react';
import MainReducer from './src/reducers/mainReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import MainApp from './src/screens/mainApp';
import {StatusBar} from 'react-native';

const store = createStore(MainReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#F5B7B1" />
      <MainApp />
    </Provider>
  );
};

export default App;
