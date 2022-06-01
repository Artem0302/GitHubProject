import * as React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../actions/userActions';

const Authorization = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const correctPassword = useSelector(
    state => state.userReducer.correctPassword,
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../../assets/gitHub_logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.inputView}>
        <TextInput
          value={email}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Recovering')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          dispatch(login(email, password));
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      {correctPassword ? (
        <></>
      ) : (
        <View>
          <Text style={{height: 30,color: '#FF0000'}}>wrong password or email</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Registration')}>
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authorization;
