import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import AdvertsScreen from '../advertsScreen';
import CvScreen from '../cvScreen';
import SearchScreen from '../searchScreen';
import HomeScreen from '../homeScreen';
import AddScreen from "../addScreen";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const type = useSelector(state => {
    return state.userReducer.user.type;
  });
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Adverts' || route.name === 'Cv') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {type === 'hr' ? (
        <Tab.Screen name="Cv" component={CvScreen} />
      ) : (
        <Tab.Screen name="Adverts" component={AdvertsScreen} />
      )}
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
