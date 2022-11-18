
import React from 'react';
import {
  SafeAreaView, StyleSheet
} from 'react-native';
import Navigation from './src/navigation';



const App = () => {


  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});

export default App;
