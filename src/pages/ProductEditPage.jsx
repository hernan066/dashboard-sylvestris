
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import EditProduct from "../components/products/productEdit/EditProduct";


const ProductEditPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await apiRequest.get(`/products/${id}`);
        console.log(data.data.product);
        if (data) {
          setProduct(data.data.product);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    getUser();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <Error />}
      {product && <EditProduct product={product} />}
    </Layout>
  );
};

export default ProductEditPage;
