/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import apiRequest from "../api/apiRequest";
import Layout from "../components/layouts/Layout";
import moment from "moment/moment";
import Loading from "../components/loading/Loading";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const [last, setLast] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const getListProducts = async () => {
      try {
        const { data } = await apiRequest("/products");

        if (data) {
          setProducts(data.data.products);
          setDestacados(
            data.data.products.filter((product) => product.destacado)
          );
          setLast(
            products.sort((a, b) => b.createdAt - a.createdAt).slice(0, 10)
          );
          console.log(last);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getListProducts();
  }, []);

  useEffect(() => {
    const getListProducts = async () => {
      try {
        const { data } = await apiRequest("/users");

        if (data) {
          setUsers(data.data.users);

          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getListProducts();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await apiRequest("/checkout");

        if (data) {
          setOrders(data.data.orders);
          console.log(data.data.orders);
          let totalOrders = 0;
          data.data.orders.forEach((order) => {
            totalOrders = totalOrders + order.totalOrder;
          });
          setTotal(totalOrders);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getOrders();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Ordenes</div>
              <div className="number">{orders.length}</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">En subida</span>
              </div>
            </div>
            <i className="bx bx-cart-alt cart"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Productos</div>
              <div className="number">{products.length}</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">En subida</span>
              </div>
            </div>

            <i className="bx bxs-florist cart two"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Ganacias</div>
              <div className="number">${total}</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">En subida</span>
              </div>
            </div>
            <i className="bx bx-cart cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Usuarios</div>
              <div className="number">{users.length}</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">En subida</span>
              </div>
            </div>
            <i className="bx bxs-user-pin cart four"></i>
            <i className="bx bxs-cart-download cart four"></i>
          </div>
        </div>

        <div className="sales-boxes">
          <div className="recent-sales box">
            <div className="title">Ventas recientes</div>
            <div className="sales-details">
              <ul className="details">
                <li className="topic">Fecha</li>
                {orders.map((order) => (
                  <li>
                    <a href="#">
                      {moment(order.createdAt).format("DD/MM/YYYY")}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="details">
                <li className="topic">Cliente</li>
                {orders.map((order) => (
                  <li>
                    <a href="#">
                      {order.user.name} {order.user.lastname}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="details">
                <li className="topic">Estado</li>
                {orders.map((order) => (
                  <li>
                    <a href="#">{order.status}</a>
                  </li>
                ))}
              </ul>
              <ul className="details">
                <li className="topic">Total</li>
                {orders.map((order) => (
                  <li>
                    <a href="#">${order.totalOrder}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="top-sales box">
            <div className="title">Productos Destacados</div>
            <ul className="top-sales-details">
              {destacados.map((product) => {
                return (
                  <li key={product.nombre}>
                    <a href="#">
                      <img src={product.images[0].filename} alt="" />
                      <span className="product">{product.nombre}</span>
                    </a>
                    <span className="price">${product.precio}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
