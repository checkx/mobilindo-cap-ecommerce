import { useEffect, useState } from "react";
import axios from "axios";

export const useAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setAPIData] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          `https://63043b0d0de3cd918b43bcf1.mockapi.io/products`
        );
        setAPIData(response.data);
        setLoading(true);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getAllProducts();
  }, []);
  return { apiData, loading };
};