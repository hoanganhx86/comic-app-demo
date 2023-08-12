import {Platform, StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';

import {Theme, theme} from '../styles';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import {Brand} from '../@types/brand';
import {Card} from './Card';

interface BrandItemProps {
  brand: Brand;
}

export const BrandItem: FC<BrandItemProps> = ({brand}) => {
  const styles = useThemeAwareStyle(createStyles);
  const {width} = useWindowDimensions();

  return (
    <Card
      testID={`brand-item-${brand.id}`}
      style={{
        width: width / 1.92 - 2 * theme.space.$3,
        height: width / 2 - 2 * theme.space.$3,
      }}>
      <View style={styles.container}>
        <FastImage
          style={styles.cover}
          source={{uri: brand.image.url}}
          resizeMode={FastImage.resizeMode.cover}
          fallback={Platform.OS === 'android'} // Workaround this android issue https://github.com/DylanVann/react-native-fast-image/issues/974
        />
      </View>
    </Card>
  );
};

const createStyles = (_: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cover: {
      width: '100%',
      height: '100%',
    },
  });
  return styles;
};
