import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationScreen, LocationScreen, DetailsPage } from '../pages';
import { WelcomeScreen, SigninScreen, SignUpScreen, BottomNavigatorScreen } from '../screens';
import SideBar from '../components/modals/SideBar';
import Menubar from '../components/MenuBar';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen options={{ headerShown: false }} name="welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="signin" component={SigninScreen} />
        <Stack.Screen options={{ headerShown: false }} name="signup" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false }} name="details" component={DetailsPage} />
        <Stack.Screen options={{ headerShown: false }} name="bottomTab" component={BottomNavigatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}