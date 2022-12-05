import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuListProducts from "./ManuListProducts";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ListProducts = ({ products = [] }) => {
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(null);
  const [productId, setProductId] = useState(null);
  const navigate = useNavigate();
  console.log(products)

  const handleOpenMenu = (id, event) => {
    setOpen(event.currentTarget);
    setProductId(id);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setProductId(null);
  };

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
    },
    {
      field: "image",
      headerName: "Imagen",
      width: 100,
      renderCell: (params) => (
        <Avatar
          src={params.row.image}
        />
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
    },

    {
      field: "sub_titulo",
      headerName: "Subtitulo",
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
    },
    {
      field: "precio",
      headerName: "Precio",
    },

    {
      field: "descripcion_altura",
      headerName: "Altura",
      flex: 1,
    },
    {
      field: "descripcion_maceta",
      headerName: "Maceta",
      flex: 1,
    },
    {
      field: "categoria",
      headerName: "Categoría",
    },
    {
      field: "destacado",
      headerName: "Destacado",
      headerClassName: "super-app-theme--header",
      renderCell: (params) =>
        params.row.destacado ? (
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <CheckIcon />
          </div>
        ) : (
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <CloseIcon />
          </div>
        ),
    },

    {
      field: "accessLevel",
      headerName: "Menu",
      headerClassName: "super-app-theme--header",
      sortable: false,
      filterable: false,

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
          <h2>Lista de productos</h2>

          <button
            className="btn__crear"
            onClick={() => navigate("/products/create")}
          >
            <i className="bx bx-message-square-add"></i> Agregar Producto
          </button>
        </div>

        <div style={{ height: 665, width: "100%" }}>
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            rows={products.map((product) => ({
              ...product,
              image: product.images[0]?.filename || '',
              categoria: product.category?.name,
            }))}
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 15, 20]}
            pagination
          />
        </div>
      </div>
      <MenuListProducts
        open={open}
        handleCloseMenu={handleCloseMenu}
        productId={productId}
      />
    </>
  );
};

export default ListProducts;
