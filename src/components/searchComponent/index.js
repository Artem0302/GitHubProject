import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import {useEffect, useState} from 'react';
import styles from './styles';
import { clearRepos, getRepos, setCurrentPage } from "../../actions/actions";
import {useDispatch, useSelector} from 'react-redux';

const Search = () => {
  const [repoName, setRepoName] = useState('');
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.MainReducer.currentPage);
  useEffect(() => {
    if (repoName && currentPage!==1){
      dispatch(getRepos(repoName, currentPage,filter));
    }
  }, [currentPage]);
  const onSearch = () =>{
    if (repoName) {
      dispatch(clearRepos());
      dispatch(setCurrentPage(1));
      dispatch(getRepos(repoName, 1,filter));
    }
    else{
      Alert.alert('Please, write name of repo');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.searching}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="name of repo"
            placeholderTextColor="#003f5c"
            onChangeText={text => setRepoName(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => onSearch()}>
          <Text>search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filters}>
        <TouchableOpacity style={filter==='&sort=stars' ? styles.filterBtn : styles.searchBtn} onPress={() => setFilter('&sort=stars')}>
          <Text>stars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={filter==='&sort=forks' ? styles.filterBtn : styles.searchBtn} onPress={() => setFilter('&sort=forks')}>
          <Text>forks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={filter==='' ? styles.filterBtn : styles.searchBtn} onPress={() => setFilter('')}>
          <Text>none</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
