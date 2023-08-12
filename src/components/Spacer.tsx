import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

import {Theme} from '../styles';
import {useTheme} from '../hooks/useTheme';

export type SpacerProps = Pick<
  ViewStyle,
  'flex' | 'width' | 'height' | 'minWidth' | 'minHeight' | 'backgroundColor'
> &
  Pick<ViewProps, 'pointerEvents'> & {
    vertical?: keyof Theme['space'];
    horizontal?: keyof Theme['space'];
  };

export function Spacer(props: SpacerProps) {
  const {vertical, horizontal, pointerEvents = 'none', ...style} = props;
  const {theme} = useTheme();
  return (
    <View
      style={[
        horizontal ? {width: theme.space[horizontal]} : {},
        vertical ? {height: theme.space[vertical]} : {},
        style,
      ]}
      pointerEvents={pointerEvents}
    />
  );
}
