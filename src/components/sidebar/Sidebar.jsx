import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../hooks/useAuthStore";

const Sidebar = () => {
  const { startLogout } = useAuthStore();
  const { pathname } = useLocation();
  const { menu } = useSelector(store => store.ui)

  return (
    <div className={`sidebar ${menu && 'active'}`}>
      <Link to={"/"}>
        <div className="logo-details">
          <i className="bx bxs-florist"></i>
          <span className="logo_name">Sylvestris</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to={"/"}
            className={`sidebar__menu ${pathname === "/" && "active"} `}
          >
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/products"}
            className={`sidebar__menu ${pathname === "/products" && "active"} `}
          >
            <i className="bx bx-box"></i>
            <span className="links_name">Productos</span>
          </Link>
        </li>

        <li>
          <Link to={"/users"}  className={`sidebar__menu ${pathname === "/users" && "active"} `}>
            <i className="bx bx-user-pin"></i>
            <span className="links_name">Usuarios</span>
          </Link>
        </li>
        <li>
          <Link to={"/orders"} className={`sidebar__menu ${pathname === "/orders" && "active"} `}>
            <i className="bx bx-list-ul"></i>
            <span className="links_name">Ordenes</span>
          </Link>
        </li>
        <li>
          <a href={`${process.env.REACT_APP_URL}`} className="sidebar__menu">
            <i className="bx bx-arrow-back"></i>
            <span className="links_name">Volver</span>
          </a>
        </li>

        <li className="log_out" onClick={startLogout}>
          <Link to={"/"}>
            <i className="bx bx-log-out"></i>
            <span className="links_name">Cerrar sesi??n</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
