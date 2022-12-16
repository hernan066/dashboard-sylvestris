import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import MenuListOrders from "./ManuListOrders";
import moment from "moment/moment";
import { useSelector } from "react-redux";

const ListOrders = () => {
  const { orders } = useSelector((store) => store.order);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handleOpenMenu = (id, event) => {
    setOpen(event.currentTarget);
    setOrderId(id);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setOrderId(null);
  };

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 50,
    },

    {
      field: "client",
      headerName: "Cliente",
      flex: 1,
    },

    {
      field: "createdAt",
      headerName: "Creada",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Cant. Productos",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
      renderCell: (params) =>
        params.row.status === "Pendiente" ? (
          <div
            style={{
              height: "30px",
              width: "100px",
              borderRadius: "15px",
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {params.row.status}
          </div>
        ) : (
          <div
            style={{
              height: "30px",
              width: "100px",
              borderRadius: "15px",
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {params.row.status}
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
          <h2>Lista de ordenes</h2>
        </div>

        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            rows={orders.map((order) => ({
              id: order.id,
              client: `${order.user.name} ${order.user.lastname}`,
              createdAt: moment(order.createdAt).format("DD-MM-YYYY"),
              quantity: order.carts.length,
              status: order.status,
              total: `$${order.totalOrder}`,
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
      <MenuListOrders
        open={open}
        handleCloseMenu={handleCloseMenu}
        orderId={orderId}
      />
    </>
  );
};

export default ListOrders;
