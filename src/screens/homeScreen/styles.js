import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: 150,
    height: 150,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bio: {
    color: '#000000',
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
  block: {
    flexDirection: 'row',
    margin: 10,
  },
});

export default styles;
