import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {useState} from 'react';
import styles from './styles';

const Search = () => {
  const [repoName, setRepoName] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="name of repo"
          placeholderTextColor="#003f5c"
          onChangeText={text => setRepoName(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => console.log('hello')}>
        <Text>search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
