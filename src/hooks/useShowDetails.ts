import { useEffect, useState } from 'react';
import { getShowDetails } from '../services/show/getShowDetails';

export const useShowDetails = (id: number) => {
  const [showDetails, setShowDetails] = useState<ShowDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(undefined);


  useEffect(() => {
    const fetchShow = async () => {

      try {
        const {data} = await getShowDetails(id);
        setShowDetails(data);
      } catch (error: any) {
   
          setError(error);
        
      } finally {
        setLoading(false);
      }
    };
    fetchShow();
  }, [id]);

  return {
    showDetails,
    loading,
    error,
  };
};
