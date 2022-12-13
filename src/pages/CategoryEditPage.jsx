
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import EditCategory from "../components/category/EditCategory/EditCategory";

const CategoryEditPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      try {
        setLoading(true);
        const { data } = await apiRequest.get(`/categories/${id}`);
        console.log(data.data.category);
        if (data) {
          setCategory(data.data.category);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    getCategory();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <Error />}
      {category && <EditCategory category={category} />}
    </Layout>
  );
};

export default CategoryEditPage;
