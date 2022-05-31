import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recoverBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#00BFFF',
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
  inputView: {
    backgroundColor: '#AFEEEE',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  textView :{
    width: '70%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default styles;
