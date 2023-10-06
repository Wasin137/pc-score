import { useState, useEffect } from 'react';
import axios from 'axios';

const usePageViews = (pageName) => {
    const [views, setViews] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchPageViews() {
        try {
          const response = await axios.get(`https://healthy-gray-gown.cyclic.app/${pageName}`);
          setViews(response.data.views);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching page views:", error);
          setLoading(false);
        }
      }
  
      fetchPageViews();
    }, [pageName]);
  
    return { views, loading };
}

export default usePageViews