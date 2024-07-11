import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { HomeScreen, FavoriteScreen, ChatScreen, ForumScreen, SettingsScreen } from './index';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//instantiateBottom Navigator
const Tab = createBottomTabNavigator();

//creating variables
const discover = "Discover";
const compass = "Compass";
const planTrip = "Plan-Trip";
const bookings = "Bookings";
const favorite = "Favorites";

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={planTrip}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#0a4983',
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let IconName;
          let routName = route.name;
          if (routName === discover) {
            IconName = focused ? 'home-sharp' : 'home-outline';
          } else if (routName === compass) {
            IconName = focused ? 'compass-sharp' : 'compass-outline';
          } else if (routName === planTrip) {
            IconName = focused ? 'analytics-sharp' : 'analytics-outline';
          } else if (routName === bookings) {
            IconName = focused ? 'bag' : 'bag-outline';
          } else if (routName === favorite) {
            IconName = focused ? 'heart-sharp' : 'heart-outline';
          }
          return <Ionicons name={IconName} size={25} color={color} />
        },
      })}
    >
      <Tab.Screen name={discover} component={HomeScreen} />
      <Tab.Screen name={compass} component={FavoriteScreen} />
      <Tab.Screen name={planTrip} component={ChatScreen} />
      <Tab.Screen name={bookings} component={ForumScreen} />
      <Tab.Screen name={favorite} component={SettingsScreen} />
    </Tab.Navigator>
  )
}
