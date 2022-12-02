import { useEffect, useState } from "react";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import ListProducts from "../components/products/productsList/ProductsList";



const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getListProducts = async () => {
      try {
        const { data } = await apiRequest("/products");
       
        if (data) {
          setProducts(data.data.products);
          setLoading(false);
        }
      } catch (error) {
        setError(error)
        setLoading(false);
      }
    };
    getListProducts();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <Error />}
     {products && <ListProducts products={products} />} 
    </Layout>
  );
};

export default ProductsPage;