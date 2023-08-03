import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      //response'dan datayı çektik
      const { data: productData } = await axios.get(url);
      setData(productData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error,loading,data};
}
