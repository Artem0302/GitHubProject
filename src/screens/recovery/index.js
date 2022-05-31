import * as React from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Recovering = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Please,enter your email,we will send you password
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.recoverBtn}
          onPress={() => {
            Alert.alert('Check your email');
            navigation.goBack();
          }}>
          <Text>Send my password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recovering;
