/* eslint-disable react/no-unstable-nested-components */
import React, {FC, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

import {ConditionalWrap} from './ConditionalWrap';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import {useTheme} from '../hooks/useTheme';
import {type Theme} from '../styles';

interface ContainerProps {
  children?: ReactNode;
  withSafeAreaView?: boolean;
  withKeyboardAvoidingView?: boolean;
  statusBarColor?: string;
  navBar?: ReactNode;
  safeAreaViewProps?: SafeAreaViewProps;
  containerStyle?: ViewStyle;
  keyboadAvoidingViewProps?: KeyboardAvoidingViewProps;
}

export const Container: FC<ContainerProps> = props => {
  const {
    withSafeAreaView = false,
    navBar,
    withKeyboardAvoidingView = false,
    safeAreaViewProps,
    containerStyle,
    keyboadAvoidingViewProps,
  } = props;

  const styles = useThemeAwareStyle(createStyles);
  const {theme} = useTheme();

  return (
    <ConditionalWrap
      condition={withKeyboardAvoidingView}
      wrap={children => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.wrapper}
          {...keyboadAvoidingViewProps}>
          {children}
        </KeyboardAvoidingView>
      )}>
      <ConditionalWrap
        condition={Platform.OS === 'ios' && withSafeAreaView}
        wrap={children => (
          <SafeAreaView
            {...safeAreaViewProps}
            edges={
              safeAreaViewProps ? safeAreaViewProps.edges : ['top', 'bottom']
            }
            style={[
              styles.container,
              {
                backgroundColor: theme.colors.$background,
              },
            ]}>
            {children}
          </SafeAreaView>
        )}>
        <>
          <StatusBar barStyle="dark-content" translucent />
          <View
            style={[
              styles.container,
              {
                backgroundColor: theme.colors.$background,
              },
              containerStyle,
            ]}>
            {navBar}
            {props.children}
          </View>
        </>
      </ConditionalWrap>
    </ConditionalWrap>
  );
};

Container.defaultProps = {
  withSafeAreaView: false,
  withKeyboardAvoidingView: false,
};

const createStyles = (_: Theme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
    },
  });
};
