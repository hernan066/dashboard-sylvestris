import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const { avatar, user } = useSelector((store) => store.auth.user);

  return (
    <nav>
      <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn"></i>
        <span className="dashboard">Dashboard</span>
      </div>
      {/* <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div> */}
      <div className="profile-details">
        <img
          src={`http://localhost:3000/images/avatars/${avatar}`}
          alt="avatar"
        />
        <span className="admin_name">{user} </span>
      </div>
    </nav>
  );
};

export default Navbar;

/*  let sidebar = document.querySelector(".sidebar");
      let sidebarBtn = document.querySelector(".sidebarBtn");
      sidebarBtn.onclick = function () {
        sidebar.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
          sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }; */
