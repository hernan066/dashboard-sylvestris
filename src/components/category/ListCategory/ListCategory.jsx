import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import MenuListCategory from "./ManuListCategory";
import "./listUsers.css";//mantengo el CSS de los usuarios
import { useNavigate } from "react-router-dom";

const ListCategory = ({ categories = [] }) => {
  console.log(categories);
  const [open, setOpen] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (id, event) => {
    setOpen(event.currentTarget);
    setCategoryId(id);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setCategoryId(null);
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
          <h2>Lista de categorias</h2>

          <button
            className="btn__crear"
            onClick={() => navigate("/category/create")}
          >
            <i className="bx bx-message-square-add"></i> Agregar Categoria
          </button>
        </div>

        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            rows={categories.map((category) => ({
              id: category.id,
              name: category.name,      
            }))}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </div>
      </div>
      //<MenuListCategory
        open={open}
        handleCloseMenu={handleCloseMenu}
        categoryId={categoryId}
      />
    </>
  );
};

export default ListCategory;
