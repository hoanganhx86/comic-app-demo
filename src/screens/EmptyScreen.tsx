import React, {FC} from 'react';
import {Text} from 'react-native';

import {Container} from '../components/Container';
import {useTheme} from '../hooks/useTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface EmptyScreenParams {
  name: string;
}

export const EmptyScreen: FC<EmptyScreenParams> = props => {
  const {name} = props;
  const insets = useSafeAreaInsets();
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
        <Text style={[theme.text.h1]}>{name}</Text>
      </ScrollView>
    </Container>
  );
};
