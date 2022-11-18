import {useEffect, useState} from 'react';
import {searchShow} from '../services/search';

export const useSearch = (query: string) => {
  const [showResult, setShowResult] = useState<SearchResult[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    const doSearchShow = async () => {
      try {
        const {data} = await searchShow(query);
        setShowResult(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    doSearchShow();
  }, [query]);

  return {
    showResult,
    loading,
    error,
  };
};
