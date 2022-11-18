import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { ShowList } from '../../components/showList';
import { useShows } from '../../hooks/useShows';
import { HomeStackParamList } from '../../navigation/homeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home: React.FC<Props> = ({navigation}) => {
  const {error, loading, shows, fetchMoreData, isListEnd, moreLoading} =
    useShows();

  useEffect(() => {
    console.log({moreLoading});
  }, [moreLoading]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Text>Loading</Text>
      </View>
    );
  }

  const renderFooter = () => {
    return (
      <View
        style={{
          height: 90,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {moreLoading && <ActivityIndicator />}
        {isListEnd && <Text>No more shows to display</Text>}
      </View>
    );
  };

return <ShowList fetchMoreData={fetchMoreData} shows={shows} renderFooter={renderFooter}/>
};

export default Home;
