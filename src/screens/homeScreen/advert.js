import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from "../../components/repositoryComponent/styles";

const Advert = ({advert}) => {
  return (
    <TouchableOpacity onPress={() => console.log('hello')} style={styles.container}>
      <View style={styles.link}>
        <Text style={styles.repoName}>{advert.title}</Text>
      </View>
      <View style={styles.forkStars}>
        <Text style={{marginRight: 10}}>Salary: {advert.salary}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Advert;
