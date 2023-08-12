import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigator from './navigation';
import {ThemeProvider} from './contexts/ThemeContext';
import {theme as defaultTheme, sharedStyles} from './styles';

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={sharedStyles.flex}>
      <ThemeProvider initial={defaultTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
export default App;
