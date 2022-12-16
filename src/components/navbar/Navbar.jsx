import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../redux/uiSlice";
import "./navbar.css";

const Navbar = () => {
  const { avatar, user } = useSelector((store) => store.auth.user);
  const { menu } = useSelector((store) => store.ui);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="sidebar-button">
        <i
          className={`bx ${menu ? "bx-menu-alt-right" : "bx-menu"} sidebarBtn`}
          onClick={() => dispatch(openMenu())}
        ></i>
        <span className="dashboard">Dashboard</span>
      </div>

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
