import React, {FC} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {BrandData} from '../@types/brand';
import {BrandItem} from './BrandItem';
import {useTheme} from '../hooks/useTheme';
import {Theme, sharedStyles} from '../styles';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import {Devider} from './Devider';

interface BrandSectionProps {
  data: BrandData;
}

export const BrandSection: FC<BrandSectionProps> = ({data}) => {
  const {theme} = useTheme();
  const styles = useThemeAwareStyle(createStyles);
  const {width} = useWindowDimensions();

  return (
    <View style={{paddingHorizontal: theme.space.$3}}>
      <View
        style={[
          sharedStyles.horizontal,
          sharedStyles.alignItemsFlexEnd,
          {marginTop: theme.space.$3, marginBottom: theme.space.$3},
        ]}>
        <Text style={[theme.text.h3, styles.sectionTitle]}>Brands</Text>
        <Devider
          backgroundColor={theme.colors.$onBackground}
          marginBottom={3}
        />
      </View>

      <ScrollView
        style={{marginHorizontal: -theme.space.$3}}
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        decelerationRate={0}
        snapToInterval={width / 2}
        snapToAlignment={'center'}>
        {data.edges.map(item => (
          <BrandItem key={`brand-${item.node.id}`} brand={item.node} />
        ))}
      </ScrollView>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.space.$3,
    },
    scrollViewContainer: {
      paddingHorizontal: theme.space.$3,
      gap: theme.space.$2,
    },
    sectionTitle: {
      marginRight: 2,
      padding: 0,
      color: theme.colors.$onBackground,
    },
  });
