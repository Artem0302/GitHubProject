import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';
import Authorization from '../authorization';
import Registration from "../registration/registration";
import Recovering from "../recovery";
import Confirmation from "../registration/confirmation";
import MainScreen from "../appScreen";
import Details from "../detailScreen";

const Stack = createNativeStackNavigator();

const MainApp = () => {
  const isSignedIn = useSelector(state => {
    return state.userReducer.isSignedIn;
  });
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="Details" component={Details} />
            </>
          ) : (
            <>
              <Stack.Screen name="Authorization" component={Authorization} />
              <Stack.Screen name="Registration" component={Registration} />
              <Stack.Screen name="Confirmation" component={Confirmation} />
              <Stack.Screen name="Recovering" component={Recovering} />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default MainApp;
