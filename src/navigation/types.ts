import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ComicScreenParams, EmptyScreenParams} from '../screens';

export type DashboardTabParams = {
  Store: undefined;
  Collection: undefined;
  Feed: undefined;
  Market: undefined;
  Profile: undefined;
};
export type MainStackParams = {
  Dashboard: undefined;
  Comic: ComicScreenParams;
  Empty: EmptyScreenParams;
};

export type MainStackScreenProps<S extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, S>;
