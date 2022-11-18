import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './mainTab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default Navigation;
