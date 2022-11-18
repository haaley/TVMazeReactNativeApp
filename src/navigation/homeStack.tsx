import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {IconButton} from 'react-native-paper';
import { Episode } from '../pages/episode';
import Home from '../pages/home';
import {Search} from '../pages/search';
import {ShowDetail} from '../pages/showDetail/showDetail';

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Details: {id: number; name?: string};
  Episode: {episode: Episode};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={({navigation}) => ({
        headerRight: () => (
          <IconButton
            icon="magnify"
            onPress={() => navigation.navigate('Search')}
          />
        ),
      })}
    />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen
      name="Details"
      component={ShowDetail}
      options={({route}) => ({
        title: route.params.name || 'Details',
      })}
    />
    <Stack.Screen
      name="Episode"
      component={Episode}
      options={({route}) => ({
        title: `${route.params.episode.number} - ${route.params.episode.name}` || 'Episode',
      })}
    />
  </Stack.Navigator>
);

export default HomeStack;
