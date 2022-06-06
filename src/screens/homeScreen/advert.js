import * as React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from '../../components/repositoryComponent/styles';
import { useNavigation } from "@react-navigation/native";

const Advert = ({advert}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details',{advertId: advert.advert_id})}
      style={styles.container}>
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
