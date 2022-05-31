import * as React from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [validParam, setValidParam] = useState(false);
  const [parameters, setParameters] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    dateOfBirth: '',
  });
  const validation = () => {
    for (let key in parameters) {
      if (!parameters[key]) {
        return false;
      }
    }
    return true;
  };
  const [type, setType] = useState('developer');
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
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={text => setParameters({...parameters, name: text})}
            onBlur={() => setValidParam(validation())}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Surname"
            placeholderTextColor="#003f5c"
            onChangeText={text => setParameters({...parameters, surname: text})}
            onBlur={() => setValidParam(validation())}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => setParameters({...parameters, email: text})}
            onBlur={() => {
              if (!parameters.email.includes('@')) {
                Alert.alert('it is not email');
                setValidParam(false);
              } else {
                setValidParam(validation());
              }
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={text => setParameters({...parameters, password: text})}
            onBlur={() => setValidParam(validation())}
          />
        </View>
        <View style={styles.filters}>
          <TouchableOpacity
            style={type === 'developer' ? styles.hrBtn : styles.devBtn}
            onPress={() => setType('developer')}>
            <Text>developer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={type === 'hr' ? styles.hrBtn : styles.devBtn}
            onPress={() => setType('hr')}>
            <Text>HR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Date of birth"
            placeholderTextColor="#003f5c"
            onChangeText={text =>
              setParameters({...parameters, dateOfBirth: text})
            }
            onBlur={() => {
              if (isNaN(Date.parse(parameters.dateOfBirth))) {
                Alert.alert('wrong date');
                setValidParam(false);
              } else {
                setValidParam(validation());
              }
            }}
          />
        </View>
        {validParam ? (
          <TouchableOpacity
            style={styles.activeRegBtn}
            onPress={() => console.log('hello')}>
            <Text>REGISTER</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.notActiveRegBtn}>
            <Text>REGISTER</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Registration;
