import { HomeStackParamList } from '../navigation/homeStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}