import React from 'react';
import {render} from '@testing-library/react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NavigationContainer} from '@react-navigation/native';
import {theme as defaultTheme, sharedStyles} from '../styles';
import {ThemeProvider} from '../contexts/ThemeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// TODO: fix weird bug on rendering <NavigationContainer>

export function renderNavigator(children: any) {
  const component = (
    <GestureHandlerRootView style={sharedStyles.flex}>
      <SafeAreaProvider>
        <ThemeProvider initial={defaultTheme}>{children}</ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
  return render(component);
}
