import * as React from 'react';
import {FlatList, View} from 'react-native';
import Search from '../../components/searchComponent';
import Repository from '../../components/repositoryComponent';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage} from '../../actions/actions';

const MainScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.items;
  });
  const currentPage = useSelector(state => state.currentPage);
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <Search />
      <FlatList
        data={data}
        onEndReachedThreshold={0.5}
        onEndReached={() => dispatch(setCurrentPage(currentPage + 1))}
        renderItem={({item}) => {
          return (
            <View>
              <Repository repo={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default MainScreen;
