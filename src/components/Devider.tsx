import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {type Theme} from '../styles';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';

export type SpacerProps = Pick<
  ViewStyle,
  | 'flex'
  | 'width'
  | 'height'
  | 'minWidth'
  | 'minHeight'
  | 'backgroundColor'
  | 'margin'
  | 'marginBottom'
  | 'marginTop'
  | 'marginLeft'
  | 'marginRight'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'opacity'
> &
  Pick<ViewProps, 'pointerEvents'> & {
    vertical?: boolean;
  };

export function Devider(props: SpacerProps) {
  const {vertical = false, pointerEvents = 'none', ...style} = props;
  const styles = useThemeAwareStyle(createStyles);
  return (
    <View
      style={[styles.devider, vertical ? styles.vertical : {}, style]}
      pointerEvents={pointerEvents}
    />
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    devider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.$backgroundDark,
    },
    vertical: {
      height: '100%',
      width: 1,
    },
  });
