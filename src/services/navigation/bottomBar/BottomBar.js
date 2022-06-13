import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomFabBar} from '@phoenative/rn-bottom-bar';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Login from '../../../screens/login/Login';
import Otp from '../../../screens/otp/Otp';
import ProfileStack from '../stack/Stacks';
import Task from '../../../screens/createTask/Task';
import AddInput from '../../../screens/add/AddInput';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        
     
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Task') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Add') {
            iconName = focused ? 'plus' : 'plus';
          }

          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? '#6700B0' : 'grey'}
            />
          );
        },
        tabBarActiveBackgroundColor: '#FFFFFF',
      })}
      tabBar={props => (
        <BottomFabBar
          tabBarBadgeStyle={{}}
          mode={'default'}
          focusedButtonStyle={{
            // paddingBottom: 40,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.45,
            shadowRadius: 9.16,
            elevation: 10,
          }}
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 85,
            
          }}
          {...props}
        />
      )}>
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen name="Add" component={AddInput} />
      <Tab.Screen name="Profile" initialRouteName='Profile' component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomBar;
