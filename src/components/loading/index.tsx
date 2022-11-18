import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const Loading = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator  style={{display: 'flex'}}/>
    </View>
  );
};
