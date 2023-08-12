/* eslint-disable react/no-unstable-nested-components */
import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashboardTabParams} from './types';
import {useTheme} from '../hooks/useTheme';
import {EmptyScreen, StoreScreen} from '../screens';
import {TabBarIcon} from '../components/navigation';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator<DashboardTabParams>();

function DashboardNavigator() {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.$primary,
        tabBarStyle: {
          backgroundColor: theme.colors.$backgroundDark,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          ...Platform.select({
            ios: {},
            android: {height: 54, paddingBottom: 8},
          }),
        },
      }}>
      <Tab.Screen
        name={'Store'}
        component={StoreScreen}
        options={{
          tabBarIcon: useMemo(
            () =>
              ({color, size}) =>
                (
                  <TabBarIcon
                    color={color}
                    size={size}
                    icon={require('../assets/store.png')}
                  />
                ),
            [],
          ),
        }}
      />
      <Tab.Screen
        name={'Collection'}
        component={useMemo(() => () => <EmptyScreen name="Collection" />, [])}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon
              color={color}
              size={size}
              icon={require('../assets/collection.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Feed'}
        component={useMemo(() => () => <EmptyScreen name="Feed" />, [])}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon
              color={color}
              size={size}
              icon={require('../assets/feed.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Market'}
        component={useMemo(() => () => <EmptyScreen name="Market" />, [])}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon
              color={color}
              size={size}
              icon={require('../assets/market.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={useMemo(() => () => <EmptyScreen name="Profile" />, [])}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabBarIcon
              color={color}
              size={size}
              icon={require('../assets/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default DashboardNavigator;
