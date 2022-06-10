import React, {useCallback, useState} from 'react';
// import MainReducer from './src/reducers/mainReducer';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import MainApp from './src/screens/mainApp';
import {
  Alert,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {
  Cell,
  Row,
  Rows,
  Table,
  TableWrapper,
} from 'react-native-table-component';

// const store = createStore(MainReducer, applyMiddleware(thunk));

const App = () => {
  const tableHead = ['Id', 'Name'];
  const [tableData, setTableData] = useState([
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd']
  ]);
  const [newName, setNewName] = useState('');
  const [editName, setEditName] = useState('');
  const element = (data, index) => (
    <View>
      <TouchableOpacity onPress={() => console.log('hello')}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>edit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('hello')}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  // const sendRequest = useCallback(async () => {
  //   await axios.post('http://192.168.1.111:3000/auth/register', {
  //     send: parameters.email,
  //   }).then((response)=> {
  //     navigation.navigate('Confirmation', {
  //       user: {...parameters, type: type},
  //       code: response.data.code,
  //     });
  //   })
  //     .catch(error => {
  //       Alert.alert('wrong email or this email already used');
  //       console.log(error);
  //     });
  // });
  return (
    <View>
      <Text>Add manager</Text>
      <TextInput
        placeholder="new name"
        placeholderTextColor="#003f5c"
        onChangeText={text => setNewName(text)}
      />
      <Text>Edit</Text>
      <TextInput
        value={editName}
        placeholderTextColor="#003f5c"
        onChangeText={text => setEditName(text)}
      />
      <TouchableOpacity>
        <Text>Save</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#808B97'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});

export default App;
