import React from 'react';
import { FlatList, Text, View } from "react-native";
import Search from "../../components/searchComponent";
import Repository from "../../components/repositoryComponent";

const  AdvertsScreen = () =>{
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <Search />
      <FlatList
        data={[]}
        onEndReachedThreshold={0.5}
        onEndReached={() => console.log('hello')}
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
}

export default AdvertsScreen;
