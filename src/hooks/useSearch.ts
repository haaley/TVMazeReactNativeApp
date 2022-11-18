import {useEffect, useState} from 'react';
import {searchShow} from '../services/search';

export const useSearch = () => {
  const [showResult, setShowResult] = useState<SearchResult[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);


  const handleSearch = async (query: string) => {
    setLoading(true)
    try {
      const {data} = await searchShow(query);
      setShowResult(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return {
    handleSearch,
    showResult,
    loading,
    error,
  };
};
