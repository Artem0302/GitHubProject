import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  devBtn: {
    width: '30%',
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E5E4',
  },
  filters:{
    alignItems: 'center',
    width: '70%',
    paddingBottom: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  hrBtn:{
    width: '30%',
    borderRadius: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C',
  },
  activeRegBtn: {
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
  notActiveRegBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#E3E5E4',
  },
  inputView: {
    backgroundColor: '#AFEEEE',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default styles;
