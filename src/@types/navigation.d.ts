import {DashboardTabParams, MainStackParams} from '../navigation/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        DashboardTabParams,
        MainStackParams {}
  }
}
