import * as React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../components/repositoryComponent/styles';

const Cv = ({cv}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('hello')}
      style={styles.container}>
      <View style={styles.link}>
        <Text style={styles.repoName}>{cv.speciality}</Text>
      </View>
      <View style={styles.forkStars}>
        <Text style={{marginRight: 10}}>Work Experience: {cv.workexp}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cv;
