import React from 'react';
import {View, StyleSheet} from 'react-native';

import Stacks from './src/services/navigation/stack/Stacks';
import BottomBar from './src/services/navigation/bottomBar/BottomBar';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/services/navigation/bottomTab/Tab';
import Task from './src/screens/createTask/Task'

const App = () => {
  return (
    <NavigationContainer>
      <BottomBar />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
export default App;
