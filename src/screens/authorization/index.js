import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {signIn} from '../../actions/actions';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../../assets/gitHub_logo.png')}
        />
      </TouchableOpacity>

      {/*<View style={styles.inputView}>*/}
      {/*  <TextInput*/}
      {/*    placeholder="Email"*/}
      {/*    placeholderTextColor="#003f5c"*/}
      {/*    onChangeText={text => setEmail(text)}*/}
      {/*  />*/}
      {/*</View>*/}

      {/*<View style={styles.inputView}>*/}
      {/*  <TextInput*/}
      {/*    placeholder="Password"*/}
      {/*    placeholderTextColor="#003f5c"*/}
      {/*    secureTextEntry={true}*/}
      {/*    onChangeText={text => setPassword(text)}*/}
      {/*  />*/}
      {/*</View>*/}

      {/*<TouchableOpacity>*/}
      {/*  <Text style={styles.forgot_button}>Forgot Password?</Text>*/}
      {/*</TouchableOpacity>*/}

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => dispatch(signIn(password, email))}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authorization;
