// Import Jest Native matchers
import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Setup Reanimated mocking for Drawer navigation
global.ReanimatedDataMock = {now: () => Date.now()};
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({children}) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({children}) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});
