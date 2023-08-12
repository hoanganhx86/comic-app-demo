import React, {FC} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import {Container} from '../components/Container';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import {Theme, sharedStyles} from '../styles';
import {useTheme} from '../hooks/useTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {type Comic} from '../@types';
import {MainStackScreenProps} from '../navigation/types';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Devider} from '../components/Devider';

export interface ComicScreenParams {
  comic: Comic;
  onPurchase: () => void;
}

type ComicScreenProps = MainStackScreenProps<'Comic'>;

export const ComicScreen: FC<ComicScreenProps> = props => {
  const {navigation, route} = props;
  const {comic, onPurchase} = route.params;
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  const styles = useThemeAwareStyle(createStyles);
  const {theme} = useTheme();

  return (
    <Container>
      <ScrollView
        contentContainerStyle={[
          {
            backgroundColor: theme.colors.$backgroundLightGrey,
            paddingBottom: insets.bottom + theme.space.$5,
            paddingTop: insets.top,
          },
        ]}>
        <FastImage
          accessibilityHint={'Comic cover'}
          style={[styles.cover, {height: (width * 3) / 2, width: width}]}
          source={{uri: comic.cover.image.url}}
          resizeMode={FastImage.resizeMode.stretch}
          fallback={Platform.OS === 'android'} // Workaround this android issue https://github.com/DylanVann/react-native-fast-image/issues/974
        />

        <View style={[styles.cardFooter2]}>
          <View style={[styles.cardFooter]}>
            <Text style={theme.text.h3}>
              {comic.name} #{comic.comicNumber}
            </Text>
            {/* TODO: Hardcode, is this age limit?, and where can we find it in the API response? Or simply hide this as nonexistent? */}
            <Text style={[styles.ageLimit]}>14+</Text>
          </View>
          <View
            style={[
              sharedStyles.horizontal,
              sharedStyles.alignItemsCenter,
              sharedStyles.justifyContentSpaceBetween,
              {padding: theme.space.$2m},
            ]}>
            <View
              style={[
                sharedStyles.horizontal,
                sharedStyles.alignItemsCenter,
                {gap: theme.space.$2},
              ]}>
              <View style={[styles.likeButton]}>
                <Image
                  style={styles.buttonIcon}
                  source={require('../assets/heart.png')}
                />
                <Text style={{color: theme.colors.$grey500}}>
                  {comic.likeCount}
                </Text>
              </View>
              <View style={[styles.likeButton]}>
                <Image
                  style={styles.buttonIcon}
                  source={require('../assets/comment.png')}
                />
                <Text style={{color: theme.colors.$grey500}}>
                  {comic.commentCount}
                </Text>
              </View>
            </View>

            <View
              style={[
                sharedStyles.horizontal,
                sharedStyles.alignItemsCenter,
                {gap: theme.space.$2},
              ]}>
              <Image
                style={styles.buttonIcon}
                source={require('../assets/share.png')}
              />
              <Image
                style={styles.buttonIcon}
                source={require('../assets/save.png')}
              />
            </View>
          </View>
        </View>

        <Text style={[theme.text.p, styles.description]}>
          {comic.description}
        </Text>
      </ScrollView>

      <TouchableOpacity
        testID="comic-detail-back-button"
        style={[styles.backBtn, {marginTop: insets.top}]}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.backIcon}
          source={require('../assets/chevron-left.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        testID="comic-detail-buy-button"
        style={[
          styles.purchaseBtn,
          {
            bottom:
              insets.bottom + (Platform.OS === 'android' ? theme.space.$2 : 0),
          },
        ]}
        onPress={() => onPurchase()}>
        <View
          style={[
            sharedStyles.horizontal,
            sharedStyles.alignItemsCenter,
            sharedStyles.justifyContentSpaceBetween,
          ]}>
          <View
            style={[
              sharedStyles.horizontal,
              sharedStyles.alignItemsCenter,
              {
                gap: theme.space.$1,
              },
            ]}>
            <Image style={[styles.gem]} source={require('../assets/gem.png')} />
            <Text
              style={[
                theme.text.p,
                {
                  fontSize: theme.fontSizes.$5,
                  color: theme.colors.$onBackground,
                },
              ]}>
              {comic.storePrice}
            </Text>
          </View>

          <View
            style={[
              sharedStyles.horizontal,
              sharedStyles.alignItemsCenter,
              {
                gap: theme.space.$1,
              },
            ]}>
            <Devider
              vertical
              backgroundColor={theme.colors.$grey900}
              opacity={0.6}
              marginRight={theme.space.$2m}
              width={StyleSheet.hairlineWidth}
              marginVertical={-theme.space.$4}
              height={60}
            />

            <Image
              style={[styles.gem, {tintColor: theme.colors.$primary}]}
              source={require('../assets/store.png')} // TODO: replace with a Cart icon
            />
            <Text
              style={[
                theme.text.p,
                {
                  fontSize: theme.fontSizes.$5,
                  color: theme.colors.$onBackground,
                },
              ]}>
              BUY NOW
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    logo: {
      width: 103,
      height: 27,
    },
    cover: {
      width: '100%',
      height: '100%',
    },
    backBtn: {
      ...sharedStyles.center,
      position: 'absolute',
      top: theme.space.$2,
      left: theme.space.$2,
      width: theme.iconSizes.$4,
      height: theme.iconSizes.$4,
      backgroundColor: theme.colors.$grey900,
      opacity: 0.9,
      borderRadius: theme.roundness.$max,
    },
    backIcon: {
      width: theme.iconSizes.$3,
      height: theme.iconSizes.$3,
      tintColor: theme.colors.$onBackground,
    },
    cardFooter: {
      flexDirection: 'row',
      padding: theme.space.$2m,
      marginHorizontal: 1.5,
      backgroundColor: theme.colors.$background,
      justifyContent: 'space-between',
      borderBottomLeftRadius: theme.roundness.$2,
      borderBottomRightRadius: theme.roundness.$2,

      elevation: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    cardFooter2: {
      backgroundColor: theme.colors.$grey200,
      borderColor: theme.colors.$grey700,
      marginTop: 1,
      justifyContent: 'space-between',
      borderBottomLeftRadius: theme.roundness.$2,
      borderBottomRightRadius: theme.roundness.$2,

      overflow: 'hidden',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    buttonIcon: {
      width: theme.iconSizes.$4,
      height: theme.iconSizes.$4,
      tintColor: theme.colors.$grey500,
    },
    likeButton: {
      ...sharedStyles.horizontal,
      ...sharedStyles.alignItemsCenter,
      gap: 2,
    },
    ageLimit: {
      backgroundColor: theme.colors.$grey200,
      paddingHorizontal: theme.space.$1,
      paddingVertical: 6,
      fontSize: theme.fontSizes.$2,
      color: theme.colors.$grey600,
      borderRadius: theme.roundness.$1,
      overflow: 'hidden',
    },
    description: {
      color: theme.colors.$grey100,
      paddingVertical: theme.space.$3,
      paddingHorizontal: theme.space.$3,
      opacity: 0.8,
    },
    purchaseBtn: {
      position: 'absolute',
      left: theme.space.$3,
      right: theme.space.$3,
      paddingHorizontal: theme.space.$2m,
      paddingVertical: theme.space.$2m,
      backgroundColor: theme.colors.$backgroundDark,

      borderRadius: theme.roundness.$1,

      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    gem: {
      width: 18,
      height: 18,
      marginRight: theme.space.$1,
    },
  });
};
