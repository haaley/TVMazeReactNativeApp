import {useNavigation} from '@react-navigation/core';
import {FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {ShowCard} from '../showCard';

type Props = {
  shows?: Show[] | SearchResult[];
  fetchMoreData?: () => void;
  renderFooter?: () => JSX.Element;
};
export const ShowList = ({fetchMoreData, renderFooter, shows}: Props) => {
  const navigation = useNavigation();

  const onItemPress = (id: number, name?: string) =>
    navigation.navigate('Details', {id, name});
  return (
    <FlatList
      data={shows as Show[]}
      renderItem={i => {
        const show = (i.item as unknown as SearchResult).show ?? i.item;
        return ShowCard(show, () => onItemPress(show.id, show.name));
      }}
      ItemSeparatorComponent={() => <Divider style={{marginVertical: 10}} />}
      contentContainerStyle={{margin: 8, padding: 8}}
      style={{marginVertical: 8, flex: 1}}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={fetchMoreData}
      ListFooterComponent={renderFooter}
    />
  );
};
