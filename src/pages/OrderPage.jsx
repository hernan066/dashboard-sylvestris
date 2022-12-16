import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiRequest from "../api/apiRequest";
import Error from "../components/error/Error";
import Layout from "../components/layouts/Layout";
import Loading from "../components/loading/Loading";
import ListOrders from "../components/orders/orders-list/ListOrders";
import { addOrders } from "../redux/ordersSlice";

const OrderPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getListOrders = async () => {
      try {
        const { data } = await apiRequest("/checkout");
        console.log(data.data.orders);
        if (data) {
          dispatch(addOrders(data.data.orders));
          setOrders(data.data.orders);
          setLoading(false);
        }
      } catch (error) {
        console.log(error)
        setError(error);
        setLoading(false);
      }
    };
    getListOrders();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <Error />}
      {orders && <ListOrders />}
    </Layout>
  );
};

export default OrderPage;
