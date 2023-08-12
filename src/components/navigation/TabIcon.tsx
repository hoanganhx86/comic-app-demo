import React, {FC} from 'react';
import {ColorValue, Image, ImageSourcePropType} from 'react-native';

interface TabBarIconProps {
  color: ColorValue;
  size: number;
  icon: ImageSourcePropType;
}

export const TabBarIcon: FC<TabBarIconProps> = ({
  color,
  size,
  icon,
}: TabBarIconProps) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{tintColor: color, width: size, height: size}}
    />
  );
};
