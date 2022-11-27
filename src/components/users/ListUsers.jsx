import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import MenuListUsers from "../menuList/ManuListUsers";
import "./listUsers.css";

const ListUsers = ({ users }) => {
  const listUsers = users.data.users;
  const [open, setOpen] = useState(null);
  const [userId, setUserId] = useState(null);

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
      field: "lastname",
      headerName: "Apellido",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "rolId",
      headerName: "Rol",
      flex: 1,
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
          <a href="/admin/users/create_user">
            <button className="btn__crear">
              <i className="bx bx-message-square-add"></i> Agregar Usuario
            </button>
          </a>
        </div>

        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            rows={listUsers.map((user) => ({
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
