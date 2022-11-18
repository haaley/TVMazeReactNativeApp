import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { HomeStackParamList } from '../../navigation/homeStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Header = () => {
  const route = useRoute();

  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const _goBack = () => navigation.goBack();

  const _handleSearch = () => navigation.navigate('Search');

  return (
    <Appbar.Header>
      {navigation.canGoBack() && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Content title={route.name} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default Header;