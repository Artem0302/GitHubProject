import * as React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import WebView from 'react-native-webview';
import {useState} from 'react';

const Repository = () => {
  const repo = useSelector(state => {
    return state.repository;
  });
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.repoName}>{repo[0].name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView source={{uri: `${repo[0].uri}`}} />
          </View>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.forkStars}>
        <Text style={{marginRight: 10}}>Forks: {repo[0].forks}</Text>
        <Text>Stars: {repo[0].stars}</Text>
      </View>
    </View>
  );
};

export default Repository;
