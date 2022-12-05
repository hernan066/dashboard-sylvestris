import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../hooks/useAuthStore";


const Sidebar = () => {
  const { startLogout } = useAuthStore();

  return (
    <div className="sidebar">
      <Link to={"/"}>
        <div className="logo-details">
          <i className="bx bxs-florist"></i>
          <span className="logo_name">Sylvestris</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to={"/"} className="sidebar__menu active">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to={"/products"} className="sidebar__menu">
            <i className="bx bx-box"></i>
            <span className="links_name">Productos</span>
          </Link>
        </li>
        <li>
          <Link to={"/categories"} className="sidebar__menu">
            <i className="bx bx-book-alt"></i>
            <span className="links_name">Categorias</span>
          </Link>
        </li>
        <li>
          <Link to={"/users"} className="sidebar__menu">
            <i className="bx bx-user-pin"></i>
            <span className="links_name">Usuarios</span>
          </Link>
        </li>
        <li>
          <Link to={"/"} className="sidebar__menu">
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
            <span className="links_name">Cerrar sesión</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

{
  /* <script>
    const menu_list = document.querySelectorAll(".sidebar__menu");
    console.log(menu_list)
    panels.forEach((menu) => {
      menu_list.addEventListener("click", () => {
        removeActiveclassName();
        menu.classNameList.add("active");
      });
    });

    function removeActiveclassName() {
      menu_list.forEach((menu) => {
        menu.classNameList.remove("active");
      });
    }
  </script> */
}
