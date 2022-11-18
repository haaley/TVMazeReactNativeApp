import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Card,
  List,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import {Summary} from '../../components/summary';
import {useShowDetails} from '../../hooks/useShowDetails';
import {HomeStackParamList} from '../../navigation/homeStack';
import {groupEpisodesBySeason} from '../../utils';
import {Genres} from './components/genre';
import {Schedule} from './components/schedule';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

export const ShowDetail: React.FC<Props> = ({navigation, route}) => {
  const {id} = route.params;
  const {error, loading, showDetails} = useShowDetails(id);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  let groupedEpisodes = groupEpisodesBySeason(showDetails?._embedded.episodes);

  return (
    <ScrollView>
      <Card style={{flex: 1, height: '100%'}}>
        <Image
          style={{height: 280}}
          source={{uri: showDetails?.image?.medium || showDetails?.image?.original|| 'https://via.placeholder.com/380?text=No+image+available'}}
        />
        <Card.Content style={{display: 'flex', flex: 1}}>
          <Title>{showDetails?.name}</Title>
          <ScrollView horizontal>
            <Genres genres={showDetails?.genres} />
          </ScrollView>
          <Schedule schedule={showDetails?.schedule} />
          <Summary summary={showDetails?.summary} />
          <List.Section
            title="Episodes"
            titleStyle={{fontWeight: 'bold', fontSize: 18}}>
            {groupedEpisodes.map(item => {
              return (
                <List.Accordion
                  key={item.season}
                  title={`Season ${item.season}`}
                  left={props => <List.Icon {...props} icon="folder" />}>
                  {item.data.map((episode: Episode) => {
                    return (
                      <TouchableRipple
                        key={episode.id}
                        onPress={() =>
                          navigation.navigate('Episode', {episode})
                        }>
                        <List.Item
                          title={`${episode.number} - ${episode.name}`}
                          left={props => (
                            <List.Icon {...props} icon="play-circle" />
                          )}
                        />
                      </TouchableRipple>
                    );
                  })}
                </List.Accordion>
              );
            })}
          </List.Section>
        </Card.Content>
        <Card.Actions>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};
