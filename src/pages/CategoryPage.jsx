import { useEffect, useState } from "react";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import ListCategory from "../components/category/ListCategory/ListCategory";


const CategoryPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const getListCategory = async () => {
      try {
        const { data } = await apiRequest("/category");
        console.log(data.data.categories)
        if (data) {
          setCategory(data.data.categories);
          setLoading(false);
        }
      } catch (error) {
        setError(error)
        setLoading(false);
      }
    };
    getListCategory();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <Error />}
     {categories && <ListCategory categories={categories} />}
    </Layout>
  );
};

export default CategoryPage;