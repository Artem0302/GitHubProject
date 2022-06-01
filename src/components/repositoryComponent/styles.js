import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9E7',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    maxWidth: '50%',
  },
  forkStars: {
    maxWidth: '50%',
    flexDirection: 'row',
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
  repoName: {
    fontStyle: 'italic',
    fontSize: 20,
    color: '#C39BD3',
  },
});

export default styles;
