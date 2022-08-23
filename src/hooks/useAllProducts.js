import { useEffect, useState } from "react";
import axios from "axios";


export const useAllProducts = (id) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setAPIData] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        let response;
        if (id) {
          response = await axios.get(
            `https://63043b0d0de3cd918b43bcf1.mockapi.io/products/${id}`
          );
        } else {
          response = await axios.get(
            `https://63043b0d0de3cd918b43bcf1.mockapi.io/products`
          );
        }

        setAPIData(response.data);
        setLoading(true);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    getAllProducts();
  }, [id]);
  return { apiData, loading };
};