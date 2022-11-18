import {StyleSheet, View} from 'react-native';
import {Paragraph, Text} from 'react-native-paper';
import { sanitizedText } from '../../utils';
interface Props {
  summary?: string;
}
export const Summary = ({summary}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      {<Paragraph>{summary ? sanitizedText(summary) : 'No description available'}</Paragraph>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  }
});
