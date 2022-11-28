import { useEffect } from "react";
import apiRequest from "../api/apiRequest";
import { useGetUsersQuery } from "../api/apiUsers";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import ListUsers from "../components/users/ListUsers";

const UserPage = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  console.log(users)

  const getListUsers = async ()=>{
    const {data} = await apiRequest('/users')
    return data
  }

  useEffect(() => {
    const user = getListUsers()
    console.log(user)
  }, [])
  

  return (
    <Layout>
      {isLoading && <Loading />}
      {isError && <Error />}
      {users && <ListUsers users={users} />}
    </Layout>
  );
};

export default UserPage;
