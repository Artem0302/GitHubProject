import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    width: '15%',
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E5E4',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderWidth: 1,
    width: '80%',
    height: '80%',
    backgroundColor: '#fff',
  },
  backBtn :{
    width: '15%',
    borderRadius: 5,
    height: 35,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2FF8D',
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
