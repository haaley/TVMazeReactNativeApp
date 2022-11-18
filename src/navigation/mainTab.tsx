/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoriteStack from './favoritesStack';
const Tab = createBottomTabNavigator();


const MainTab = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeStack') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'FavoritesStack') {
          iconName = focused ? 'star' : 'star-outline';
        }

        return <Ionicons name={iconName ?? 'add'} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="HomeStack"
      options={{title: "Home"}}
      component={HomeStack}
    />
    <Tab.Screen
      name="FavoritesStack"
      options={{title: "Favorites"}}
      component={FavoriteStack}
    />
  </Tab.Navigator>
);

export default MainTab;