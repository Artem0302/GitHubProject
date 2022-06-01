import * as React from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { confirmUser } from "../../actions/userActions";

const Confirmation = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const {code} = route.params;
  const navigation = useNavigation();
  const [confCode, setConfCode] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Confirmation code"
            placeholderTextColor="#003f5c"
            onChangeText={text => setConfCode(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.activeRegBtn}
          onPress={() => {
            if (confCode === code) {
              dispatch(confirmUser());
            } else {
              Alert.alert('code is wrong');
            }
          }}>
          <Text>FURTHER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmation;
