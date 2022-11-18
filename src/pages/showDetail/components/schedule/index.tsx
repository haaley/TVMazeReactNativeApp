import {StyleSheet, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';

interface Props {
  schedule?: Schedule;
}
export const Schedule = ({schedule}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <View style={styles.subcontainer}>
        <Text style={styles.subtitle}>Time</Text>
        <Chip>{schedule?.time || 'Unavailable'}</Chip>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.subtitle}>Days</Text>
        <View style={styles.schedule}>
          {schedule && schedule?.days.length > 0 ? (
            schedule?.days.map(day => <Chip style={{margin: 4}}>{day}</Chip>)
          ) : (
            <Chip>Unavailable</Chip>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  subcontainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  schedule: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: '800',
    fontSize: 14,
    marginRight: 8,
  },
});
