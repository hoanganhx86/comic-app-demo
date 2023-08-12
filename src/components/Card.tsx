import {View, StyleSheet, ViewProps} from 'react-native';
import React, {FC} from 'react';
import {type Theme} from '../styles';
import {useThemeAwareStyle} from '../hooks/useThemeAwareStyle';

interface CardProps extends ViewProps {}

export const Card: FC<CardProps> = ({children, style, ...rest}) => {
  const styles = useThemeAwareStyle(createStyles);
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.$background,
      borderRadius: theme.roundness.$4,
      justifyContent: 'center',
      overflow: 'hidden',

      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
  });
