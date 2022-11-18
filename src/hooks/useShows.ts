import { useEffect, useState } from 'react';
import { getShows } from '../services/show/getShows';

export const useShows = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(undefined);
  const [isListEnd, setListEnd] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    if (!isListEnd && !moreLoading) {
      setMoreLoading(true);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const fetchShow = async () => {
      if (!moreLoading) {
        setLoading(true);
      }
      try {
        const {data} = await getShows(page);
        setShows(previous => [...previous, ...data]);
      } catch (error: any) {
        if (error.response.status === 404) {
          setListEnd(true);
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
        setMoreLoading(false);
      }
    };
    fetchShow();
  }, [page]);

  return {
    shows,
    loading,
    error,
    fetchMoreData,
    moreLoading,
    isListEnd,
  };
};
