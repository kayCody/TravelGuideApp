import {  Image } from 'react-native'
import React from 'react'
import { HomeScreen, BookingScreen, TripScreen, NavScreen, AccountScreen } from '../screens/index';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuBar from '../components/MenuBar';

//instantiateBottom Navigator
const Tab = createBottomTabNavigator();

//creating variables
const discover = "Discover";
const bookings = "My Bookings";
const trips = "My Trips";
const navigation = "Navigation";
const account = "Account";


export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={discover}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#0a4983',
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let IconName;
          let routName = route.name;
          if (routName === discover) {
            IconName = focused ? 'search-sharp' : 'search-outline';
          } else if (routName === bookings) {
            IconName = focused ? 'briefcase-sharp' : 'briefcase-outline';
          } else if (routName === trips) {
            IconName = focused ? 'globe-sharp' : 'globe-outline';
          } else if (routName === navigation) {
            IconName = focused ? 'compass-sharp' : 'compass-outline';
          } else if (routName === account) {
            IconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
          }
          return <Ionicons name={IconName} size={25} color={color} />
        },
      })}
    >
      <Tab.Screen name={discover} component={HomeScreen} />
      <Tab.Screen name={navigation} component={NavScreen} />
      <Tab.Screen name={trips} component={TripScreen} />
      <Tab.Screen name={bookings} component={BookingScreen} />
      <Tab.Screen name={account} component={AccountScreen} />
    </Tab.Navigator>
  )
}
