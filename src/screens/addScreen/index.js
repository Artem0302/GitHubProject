import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {add} from '../../actions/advertAction';

const AddScreen = () => {
  const user = useSelector(state => {
    return state.userReducer.user;
  });
  const dispatch = useDispatch();
  const [parameters, setParameters] = useState({
    title: '',
    link: '',
    salary: '',
    description: '',
  });
  return user.type === 'hr' ? (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          value={parameters.title}
          placeholder="Title"
          placeholderTextColor="#003f5c"
          onChangeText={text => setParameters({...parameters, title: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={parameters.link}
          placeholder="Link"
          placeholderTextColor="#003f5c"
          onChangeText={text => setParameters({...parameters, link: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={parameters.salary}
          placeholder="Salary"
          placeholderTextColor="#003f5c"
          onChangeText={text => setParameters({...parameters, salary: text})}
        />
      </View>
      <View style={styles.description}>
        <TextInput
          value={parameters.description}
          multiline={true}
          placeholder="Description"
          placeholderTextColor="#003f5c"
          onChangeText={text =>
            setParameters({...parameters, description: text})
          }
        />
      </View>
      <TouchableOpacity
        style={styles.activeRegBtn}
        onPress={() => {
          if(parameters.title && parameters.salary && parameters.description){
            dispatch(add({ ...parameters,user_id: user.user_id }));
            Alert.alert('New advert was added');
            setParameters({
              title: '',
              link: '',
              salary: '',
              description: '',
            });
          } else{
            Alert.alert('Fill in the fields');
          }
        }}>
        <Text>FURTHER</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Later...!</Text>
    </View>
  );
};

export default AddScreen;
