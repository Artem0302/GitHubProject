import * as React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import WebView from 'react-native-webview';
import {useState} from 'react';

const Repository = ({repo}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.repoName}>{repo.name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView source={{uri: `${repo.html_url}`}} />
          </View>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.forkStars}>
        <Text style={{marginRight: 10}}>Forks: {repo.forks_count}</Text>
        <Text>Stars: {repo.stargazers_count}</Text>
      </View>
    </View>
  );
};

export default Repository;
