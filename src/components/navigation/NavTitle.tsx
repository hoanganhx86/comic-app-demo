import React from 'react';
import {Text} from 'react-native';
import {sharedStyles} from '../../styles';

export interface NavTitleProps {
  title?: string;
  style?: {};
  testID?: string;
}

export function NavTitle(props: NavTitleProps) {
  const {title, style, testID} = props;
  return (
    <Text
      testID={testID}
      numberOfLines={1}
      ellipsizeMode={'tail'}
      style={[sharedStyles.flex, style]}>
      {title}
    </Text>
  );
}
