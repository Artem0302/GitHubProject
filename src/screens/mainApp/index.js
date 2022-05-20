import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';
import Authorization from '../authorization';
import MainScreen from '../searchScreen';

const Stack = createNativeStackNavigator();

const MainApp = () => {
  const isSignedIn = useSelector(state => {
    console.log(state);
    return state.isSignedIn;
  });
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="MainScreen" component={MainScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Authorization" component={Authorization} />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default MainApp;
