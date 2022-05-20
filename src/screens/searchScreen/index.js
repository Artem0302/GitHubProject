import * as React from 'react';
import {ScrollView} from 'react-native';
import Search from '../../components/searchComponent';
import Repository from '../../components/repositoryComponent';

const MainScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <Search />
      <Repository />
    </ScrollView>
  );
};

export default MainScreen;
