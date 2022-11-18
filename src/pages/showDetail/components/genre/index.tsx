import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';

interface GenreProps {
  genres?: string[];
}

export const Genres: React.FC<GenreProps> = ({genres}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genres </Text>
      {genres?.map(genre => (
        <Chip key={genre} style={styles.chip}>{genre}</Chip>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    height: 60,
  },
   chip: {
     marginHorizontal: 8,
     height: 40
   },
   title: {
     fontWeight: 'bold',
     fontSize: 18
   }
});
