import React from 'react';
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import Advert from "./advert";

const  HomeScreen = () =>{
  const user = useSelector(state => state.userReducer.user);
  const data = useSelector(state => state.advertReducer.myAdverts);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require('../../../assets/user.png')}
        />
        <View style={{ flex:1 }}>
          <Text style={styles.bio}>{user.name}</Text>
          <Text style={styles.bio}>{user.name}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.bio}>Information:</Text>
        <View style={styles.block}>
          <Text style={{fontSize: 15}}>Email: </Text>
          <Text style={{fontSize: 15,color: '#000000'}}>{user.email}</Text>
        </View>
        <View style={styles.block}>
          <Text style={{fontSize: 15}}>Type: </Text>
          <Text style={{fontSize: 15,color: '#000000'}}>{user.type}</Text>
        </View>
        <View style={styles.block}>
          <Text style={{fontSize: 15}}>Date of birth: </Text>
          <Text style={{fontSize: 15,color: '#000000'}}>{user.dateOfBirth}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.bio}>{user.type==='hr' ? 'My adverts:' : 'My cvs:'}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View>
                <Advert advert={item} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default HomeScreen;
