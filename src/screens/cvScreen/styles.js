import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searching: {
    alignItems: 'center',
    paddingVertical: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  inputView: {
    backgroundColor: '#D2FFD1',
    borderRadius: 30,
    width: '55%',
    height: 45,
    alignItems: 'center',
  },
  searchBtn: {
    width: '15%',
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E5E4',
  },
});

export default styles;
