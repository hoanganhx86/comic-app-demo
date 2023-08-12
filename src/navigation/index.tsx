import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStackParams} from './types';
import DashboardNavigator from './DashboardNavigator';
import {ComicScreen} from '../screens';

const Stack = createStackNavigator<MainStackParams>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Dashboard'} component={DashboardNavigator} />
      <Stack.Screen name={'Comic'} component={ComicScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
