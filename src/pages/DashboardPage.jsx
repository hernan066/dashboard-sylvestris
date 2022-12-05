/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import apiRequest from "../api/apiRequest";
import Layout from "../components/layouts/Layout";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const [last, setLast] = useState([]);
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    const getListProducts = async () => {
      try {
        const { data } = await apiRequest("/products");

        if (data) {
          setProducts(data.data.products);
          setDestacados(
            data.data.products.filter((product) => product.destacado)
          );
          setLast(products.sort(((a, b) => b.createdAt - a.createdAt)).slice(0, 10))
          console.log(last)
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

  return (
    <Layout>
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Ordenes</div>
              <div className="number">263</div>
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
              <div className="number">$7,876</div>
              <div className="indicator">
                <i className="bx bx-down-arrow-alt down"></i>
                <span className="text">Bajo desde ayer</span>
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
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
                <li>
                  <a href="#">02 Sep 2022</a>
                </li>
              </ul>
              <ul className="details">
                <li className="topic">Cliente</li>
                <li>
                  <a href="#">Alex Doe</a>
                </li>
                <li>
                  <a href="#">David Mart</a>
                </li>
                <li>
                  <a href="#">Roe Parter</a>
                </li>
                <li>
                  <a href="#">Diana Penty</a>
                </li>
                <li>
                  <a href="#">Martin Paw</a>
                </li>
                <li>
                  <a href="#">Doe Alex</a>
                </li>
                <li>
                  <a href="#">Aiana Lexa</a>
                </li>
                <li>
                  <a href="#">Rexel Mags</a>
                </li>
                <li>
                  <a href="#">Tiana Loths</a>
                </li>
              </ul>
              <ul className="details">
                <li className="topic">Estado</li>
                <li>
                  <a href="#">Entregado</a>
                </li>
                <li>
                  <a href="#">Pendiente</a>
                </li>
                <li>
                  <a href="#">Cancelado</a>
                </li>
                <li>
                  <a href="#">Entregado</a>
                </li>
                <li>
                  <a href="#">Pendiente</a>
                </li>
                <li>
                  <a href="#">Cancelado</a>
                </li>
                <li>
                  <a href="#">Entregado</a>
                </li>
                <li>
                  <a href="#">Pendiente</a>
                </li>
                <li>
                  <a href="#">Entregado</a>
                </li>
              </ul>
              <ul className="details">
                <li className="topic">Total</li>
                <li>
                  <a href="#">$204.98</a>
                </li>
                <li>
                  <a href="#">$24.55</a>
                </li>
                <li>
                  <a href="#">$25.88</a>
                </li>
                <li>
                  <a href="#">$170.66</a>
                </li>
                <li>
                  <a href="#">$56.56</a>
                </li>
                <li>
                  <a href="#">$44.95</a>
                </li>
                <li>
                  <a href="#">$67.33</a>
                </li>
                <li>
                  <a href="#">$23.53</a>
                </li>
                <li>
                  <a href="#">$46.52</a>
                </li>
              </ul>
            </div>
            <div className="button">
              <a href="#">Ver todos</a>
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
