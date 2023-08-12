import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {ComicItem} from './ComicItem';
import {ComicData} from '../@types';
import {useTheme} from '../hooks/useTheme';
import {sharedStyles, type Theme} from '../styles';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import {Devider} from './Devider';

interface ComicSectionProps {
  data: ComicData;
}

export const ComicSection = ({data}: ComicSectionProps) => {
  const {theme} = useTheme();
  const styles = useThemeAwareStyle(createStyles);
  const {width} = useWindowDimensions();

  return (
    <View
      style={{paddingHorizontal: theme.space.$3, marginBottom: theme.space.$2}}>
      <View
        style={[
          sharedStyles.horizontal,
          sharedStyles.alignItemsFlexEnd,
          {marginTop: theme.space.$3, marginBottom: theme.space.$3},
        ]}>
        <Text style={[theme.text.h3, styles.sectionTitle]}>Comics</Text>
        <Devider
          backgroundColor={theme.colors.$onBackground}
          marginBottom={3}
        />
      </View>

      <ScrollView
        accessibilityLabel={'comic-carousel'}
        style={{marginHorizontal: -theme.space.$3}}
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        decelerationRate={0}
        snapToInterval={width / 2}
        snapToAlignment={'center'}>
        {data.edges.map(item => (
          <ComicItem key={`comic-${item.node.id}`} comic={item.node} />
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
