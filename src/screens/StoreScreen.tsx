import React, {FC} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';

import {ComicSection} from '../components/ComicSection';
import {BrandSection} from '../components/BrandSection';
import {Container} from '../components/Container';
import {NavHeader} from '../components/navigation/NavHeader';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';
import {Theme, sharedStyles} from '../styles';
import {NavButton} from '../components/navigation/NavButton';
import {useTheme} from '../hooks/useTheme';
import {ScrollView} from 'react-native-gesture-handler';

type StoreScreenProps = {};

const comicdata = require('../data/comics.json');
const brandData = require('../data/brands.json');

export const StoreScreen: FC<StoreScreenProps> = () => {
  const styles = useThemeAwareStyle(createStyles);
  const {theme} = useTheme();

  return (
    <Container
      navBar={
        <NavHeader
          title={
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          }
          rightView={
            <View style={sharedStyles.horizontal}>
              <NavButton
                iconRight={require('../assets/bell.png')}
                onPress={() => Alert.alert('Notifications')}
              />
              <NavButton
                iconRight={require('../assets/search.png')}
                onPress={() => Alert.alert('Search collectibles')}
              />
            </View>
          }
        />
      }
      containerStyle={{backgroundColor: theme.colors.$backgroundLightGrey}}>
      <ScrollView>
        <ComicSection data={comicdata} />
        <BrandSection data={brandData} />
      </ScrollView>
    </Container>
  );
};

const createStyles = (_: Theme) => {
  return StyleSheet.create({
    logo: {
      width: 103,
      height: 27,
    },
  });
};
