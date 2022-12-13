import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import "./listUsers.css";//mantengo el CSS de los usuarios
import { useNavigate } from "react-router-dom";

const ListCategory = ({ categories = [] }) => {
  console.log(categories);
  const [open, setOpen] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (id, event) => {
    setOpen(event.currentTarget);
    setUserId(id);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setUserId(null);
  };

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => (
        <Avatar
          src={`http://localhost:3000/images/avatars/${params.row.avatar}`}
        />
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
    },
    {
      renderCell: (params) =>
        params.row.rolId == 1 ? (
          <div
            style={{
              height: "30px",
              width: "60px",
              borderRadius: "15px",
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            Admin
          </div>
        ) : (
          <div
            style={{
              height: "30px",
              width: "60px",
              borderRadius: "15px",
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            User
          </div>
        ),
    },

    {
      field: "accessLevel",
      headerName: "Menu",
      headerClassName: "super-app-theme--header",

      renderCell: ({ row: { id } }) => (
        <IconButton
          size="large"
          color="inherit"
          onClick={(e) => handleOpenMenu(id, e)}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <div className="responsive-table">
        <div className="admin__products__header">
          <h2>Lista de usuarios</h2>

          <button
            className="btn__crear"
            onClick={() => navigate("/users/create")}
          >
            <i className="bx bx-message-square-add"></i> Agregar Usuario
          </button>
        </div>

        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            rows={users.map((user) => ({
              id: user.id,
              name: user.name,
              lastname: user.lastname,
              email: user.email,
              avatar: user.avatar,
              rolId: user.rolId,
            }))}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </div>
      </div>
      <MenuListUsers
        open={open}
        handleCloseMenu={handleCloseMenu}
        userId={userId}
      />
    </>
  );
};

export default ListUsers;
