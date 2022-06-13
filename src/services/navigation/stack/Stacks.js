import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../../../screens/login/Login';
import Otp from '../../../screens/otp/Otp';
import Profile from '../../../screens/profile/Profile';
import EditProfile from '../../../screens/editProfile/EditProf';
import Task from '../../../screens/createTask/Task';

const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
