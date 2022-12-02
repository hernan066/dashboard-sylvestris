
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import EditUser from "../components/users/EditUser/EditUser";

const UserEditPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await apiRequest.get(`/users/${id}`);
        console.log(data.data.user);
        if (data) {
          setUser(data.data.user);
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
      {user && <EditUser user={user} />}
    </Layout>
  );
};

export default UserEditPage;
