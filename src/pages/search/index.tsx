import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Loading } from '../../components/loading';
import { ShowList } from '../../components/showList';
import { useSearch } from '../../hooks/useSearch';

export const Search = () => {
  const [displayQuery, setDisplayQuery] = useState('');
  const {loading, error, showResult, handleSearch} = useSearch();

  const debouncSearch = useCallback(debounce(handleSearch, 500), []);

  const handleChange = (query: string) => {
    setDisplayQuery(query);
    debouncSearch(query)
  };



  return (
    <View style={{display: 'flex', flex: 1}}>
      <Searchbar
        placeholder="Search"
        onChangeText={handleChange}
        value={displayQuery}
      />
      {loading ? <Loading /> : <ShowList shows={showResult} />}
    </View>
  );
};
