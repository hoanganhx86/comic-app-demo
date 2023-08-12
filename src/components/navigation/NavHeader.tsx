import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {NavTitle} from './NavTitle';
import {Spacer} from '../Spacer';
import {useTheme} from '../../hooks/useTheme';

export interface NavHeaderProps {
  title?: string | React.ReactNode;
  heavyTitle?: boolean;
  titleOnPress?: () => void;
  leftView?: React.ReactNode;
  rightView?: React.ReactNode;
  bottomView?: React.ReactNode;
  actionButton?: React.ReactNode;
  leftViewWidth?: number;
  style?: ViewStyle;
  withTopInset?: boolean;
  withBackground?: boolean;
}

export function NavHeader(props: NavHeaderProps) {
  const {
    title,
    leftView,
    rightView,
    leftViewWidth,
    style,
    withTopInset,
    withBackground,
  } = props;
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();
  const containerStyle = {
    paddingLeft: theme.space.$3,
    paddingRight: theme.space.$2,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: withTopInset ? insets.top : 0,
    ...style,
  };
  const leftWidthStyle: any = leftViewWidth ? {width: `${leftViewWidth}%`} : {};
  const rightWidthStyle: any = leftViewWidth
    ? {width: `${100 - leftViewWidth}%`}
    : {};
  return (
    <View
      style={[
        withBackground
          ? {
              backgroundColor: theme.colors.$backgroundDark,
            }
          : {},
        styles.rootContainer,
      ]}
      accessibilityLabel="Header"
      focusable={false}>
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.topContainer]}>
          <View style={[styles.leftButtonContainer, leftWidthStyle]}>
            {Boolean(leftView) && (
              <>
                {leftView}
                {Boolean(title) && <Spacer horizontal="$1" />}
              </>
            )}
            {typeof title === 'string' ? (
              <NavTitle
                testID="navTitle"
                title={title!}
                style={[styles.title]}
              />
            ) : (
              title
            )}
            {/* <Spacer vertical="$3" /> */}
          </View>
          <View style={[styles.rightButtonContainer, rightWidthStyle]}>
            {rightView}
          </View>
        </View>
      </View>
    </View>
  );
}

NavHeader.defaultProps = {
  heavyTitle: true,
  style: {},
  withTopInset: true,
  withBackground: true,
};

const styles = StyleSheet.create({
  rootContainer: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  container: {
    minHeight: 60,
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightButtonContainer: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    textAlignVertical: 'center',
  },
});
