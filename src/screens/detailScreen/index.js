import * as React from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { useState } from "react";
import WebView from "react-native-webview";

const Details = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const {advertId} = route.params;
  const advert = useSelector(state =>
    state.advertReducer.myAdverts.find(item => item.advert_id === advertId),
  );
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView source={{uri: `${advert.link}`}} />
          </View>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.bio}>Information:</Text>
        <View style={styles.block}>
          <Text style={{fontSize: 15}}>Title: </Text>
          <Text style={{fontSize: 15, color: '#000000'}}>{advert.title}</Text>
        </View>
        <View style={styles.block}>
          <Text style={{fontSize: 15}}>Salary: </Text>
          <Text style={{fontSize: 15, color: '#000000'}}>{advert.salary}</Text>
        </View>
        <TouchableOpacity style={styles.block} onPress={()=> setModalVisible(true)}>
          <Text style={{fontSize: 15}}>Link: </Text>
          <Text style={{fontSize: 15, color: '#00C4F3', textDecorationLine: 'underline'}}>{advert.link}</Text>
        </TouchableOpacity>
        <View style={styles.block}>
          <Text style={{fontSize: 15}}>Description: </Text>
          <Text style={{fontSize: 15, color: '#000000'}}>
            {advert.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
