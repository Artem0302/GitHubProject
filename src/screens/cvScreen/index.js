import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { getCvs, searchCv } from "../../actions/cvActions";
import Cv from './cv';

const CvScreen = () => {
  const [cvName, setCvName] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  const data = useSelector(state => state.cvReducer.cvs);
  useEffect(() => {
    if (user.type === 'hr') {
      axios
        .post('http://192.168.1.111:3000/cv/get-cvs', {})
        .then(response => {
          dispatch(getCvs(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searching}>
        <View style={styles.inputView}>
          <TextInput
            value={cvName}
            placeholder="name of cv"
            placeholderTextColor="#003f5c"
            onChangeText={text => setCvName(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => dispatch(searchCv(cvName))}>
          <Text>search</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View>
                <Cv cv={item} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CvScreen;
