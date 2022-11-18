import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView } from 'react-native';
import {
  Card,
  Divider, Title
} from 'react-native-paper';
import { Summary } from '../../components/summary';
import { HomeStackParamList } from '../../navigation/homeStack';


type Props = NativeStackScreenProps<HomeStackParamList, 'Episode'>;

export const Episode: React.FC<Props> = ({route}) => {
  const {episode} = route.params;

  return (
    <ScrollView>
      <Card style={{flex: 1, height: '100%'}}>
        <Image style={{height: 380}} source={{uri: episode?.image?.original || episode?.image?.medium || 'https://via.placeholder.com/380?text=No+image+available'}} />
        <Card.Content style={{display: 'flex', flex: 1}}>
          <Title>{`Season ${episode.season}`}</Title>
          <Title>{`Episode ${episode.number} - ${episode?.name}`}</Title>
          <Divider style={{marginVertical: 8}}/>
          <Summary summary={episode?.summary}  />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
