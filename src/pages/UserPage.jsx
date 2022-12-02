import { useEffect, useState } from "react";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import ListUsers from "../components/users/ListUser/ListUsers";


const UserPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getListUsers = async () => {
      try {
        const { data } = await apiRequest("/users");
        console.log(data.data.users)
        if (data) {
          setUsers(data.data.users);
          setLoading(false);
        }
      } catch (error) {
        setError(error)
        setLoading(false);
      }
    };
    getListUsers();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <Error />}
     {users && <ListUsers users={users} />}
    </Layout>
  );
};

export default UserPage;
