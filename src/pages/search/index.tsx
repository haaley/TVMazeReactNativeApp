import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ShowList } from '../../components/showList';
import { useSearch } from '../../hooks/useSearch';

export const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const changeTextDebouncer = useCallback(debounce(onChangeSearch, 500), []);

  const {loading, error, showResult} = useSearch(searchQuery); 

  return (
    <View style={{display: 'flex', flex: 1}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ShowList shows={showResult}/>
    </View>
  );
};
