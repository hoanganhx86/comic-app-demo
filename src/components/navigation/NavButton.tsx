import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
  Text,
} from 'react-native';

export interface NavButtonProps {
  text?: string;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  leftIconStyle?: {};
  rightIconStyle?: {};
  textStyle?: {};
  iconLeftSize?: number;
  iconRightSize?: number;
  onPress?: () => void;
  testID?: string;
}

export const NavButton: React.FC<NavButtonProps> = props => {
  const {
    text,
    iconLeft,
    iconRight,
    onPress,
    leftIconStyle,
    rightIconStyle,
    iconLeftSize,
    iconRightSize,
    testID,
  } = props;

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={styles.iconButton}>
      <View style={[styles.container]}>
        {Boolean(iconLeft) && (
          <Image
            style={[
              styles.iconLeft,
              leftIconStyle,
              {width: iconLeftSize, height: iconLeftSize},
            ]}
            source={iconLeft!}
            resizeMode="contain"
          />
        )}
        {Boolean(text) && (
          <Text style={styles.text} numberOfLines={1}>
            {text}
          </Text>
        )}
        {Boolean(iconRight) && (
          <Image
            style={[
              styles.iconRight,
              rightIconStyle,
              {width: iconRightSize, height: iconRightSize},
            ]}
            source={iconRight!}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

NavButton.defaultProps = {
  iconLeftSize: 32,
  iconRightSize: 32,
  leftIconStyle: {},
  rightIconStyle: {},
  textStyle: {},
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    width: 32,
    height: 32,
  },
  iconRight: {
    width: 32,
    height: 32,
  },
});
