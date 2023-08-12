import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {FC} from 'react';
import {Comic} from '../@types';
import {Theme, sharedStyles} from '../styles';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import FastImage from 'react-native-fast-image';
import {Card} from './Card';
import {useTheme} from '../hooks/useTheme';
import {useNavigation} from '@react-navigation/native';

interface ComicItemProps {
  comic: Comic;
}

export const ComicItem: FC<ComicItemProps> = ({comic}) => {
  const styles = useThemeAwareStyle(createStyles);
  const {theme} = useTheme();
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      testID={`comic-item-${comic.id}`}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Comic', {
          comic,
          onPurchase: () => {
            // TODO: call store purchase API
            // dispatch(purchaseComic({id: comic.id}))
            Alert.alert('Purchase');
          },
        })
      }>
      <Card
        style={{
          width: width / 1.92 - 2 * theme.space.$3,
          height: (height * 2) / 5,
        }}>
        <View style={styles.container}>
          <FastImage
            style={styles.cover}
            source={{uri: comic.cover.image.url}}
            resizeMode={FastImage.resizeMode.cover}
            fallback={Platform.OS === 'android'} // Workaround this android issue https://github.com/DylanVann/react-native-fast-image/issues/974
          />
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            ...theme.text.h3,
            marginVertical: theme.space.$2,
            marginHorizontal: theme.space.$3,
          }}>
          {comic.name}
        </Text>
        <View style={styles.cardFooter}>
          <Text style={[theme.text.p, {fontSize: theme.fontSizes.$0}]}>
            {comic.totalAvailable}
          </Text>
          <View style={sharedStyles.horizontal}>
            <Image style={[styles.gem]} source={require('../assets/gem.png')} />
            <Text style={[theme.text.p, {fontSize: theme.fontSizes.$0}]}>
              {comic.storePrice}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cover: {
      width: '100%',
      height: '100%',
    },
    cardFooter: {
      flexDirection: 'row',
      padding: theme.space.$2,
      backgroundColor: theme.colors.$grey100,
      justifyContent: 'space-between',
    },
    gem: {
      width: 16,
      height: 16,
      marginRight: theme.space.$1,
    },
  });
  return styles;
};
