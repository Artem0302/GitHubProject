import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searching: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container:{
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  filters:{
    alignItems: 'center',
    paddingBottom: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  filterBtn:{
    width: '15%',
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C',
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
