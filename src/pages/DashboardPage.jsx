/* eslint-disable jsx-a11y/anchor-is-valid */

import Layout from "../components/layouts/Layout";

const DashboardPage = () => {
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
              <div className="box-topic">Ventas</div>
              <div className="number">433</div>
              <div className="indicator">
                <i className="bx bx-up-arrow-alt"></i>
                <span className="text">En subida</span>
              </div>
            </div>
            <i className="bx bxs-cart-add cart two"></i>
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
              <div className="number">154</div>
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
            <div className="title">Top Productos Vendidos</div>
            <ul className="top-sales-details">
              <li>
                <a href="#">
                  <img src="images/sunglasses.jpg" alt="" />
                  <span className="product">Adromischus Cooperii</span>
                </a>
                <span className="price">$2100</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/jeans.jpg" alt="" />
                  <span className="product">Aeonium Diplocyclum</span>
                </a>
                <span className="price">$1560</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/nike.jpg" alt="" />
                  <span className="product">Cereus Forbesii</span>
                </a>
                <span className="price">$1230</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/scarves.jpg" alt="" />
                  <span className="product">Echeveria Runyonii</span>
                </a>
                <span className="price">$1200</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/blueBag.jpg" alt="" />
                  <span className="product">Gasteria Hippo</span>
                </a>
                <span className="price">$1115</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/bag.jpg" alt="" />
                  <span className="product">Glandulicactus Mathssonii</span>
                </a>
                <span className="price">$2345</span>
              </li>

              <li>
                <a href="#">
                  <img src="images/addidas.jpg" alt="" />
                  <span className="product">Frailea Pygmaea </span>
                </a>
                <span className="price">$2345</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/shirt.jpg" alt="" />
                  <span className="product">Begonia Rex</span>
                </a>
                <span className="price">$1245</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
