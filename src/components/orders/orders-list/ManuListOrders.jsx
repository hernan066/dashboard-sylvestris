/* eslint-disable react/prop-types */
import { MenuItem, Popover } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import apiRequest from "../../../api/apiRequest";
import { useDispatch } from "react-redux";
import { deleteOrders, updateOrders } from "../../../redux/ordersSlice";

function MenuListOrders({ open, handleCloseMenu, orderId }) {
  const dispatch = useDispatch()

  const handleEdit = () => {
    handleCloseMenu();
    Swal.fire({
      title: "Cambiar de estado",
      text: "Si desea cambiar el estado de la orden a Completada, presione confirmar",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiRequest.put(`/checkout/${orderId}`, {
          status: 'Completada'
        });
        dispatch(updateOrders({
          id: orderId,
          status: 'Completada'
        }))
      }
    });
  };
  const handleDelete = () => {
    handleCloseMenu();
    Swal.fire({
      title: "Deseas borrar este orden?",
      text: "Este cambio no se puede revertir",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiRequest.delete(`/checkout/${orderId}`);
        dispatch(deleteOrders(orderId))
      }
    });
  };

  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      onClose={handleCloseMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          p: 1,
          width: 180,
          zIndex: 20,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        },
      }}
    >
      <MenuItem onClick={handleEdit}>
        <EditIcon sx={{ mr: 1 }} />
        Cambiar estado
      </MenuItem>
      <MenuItem onClick={handleDelete}>
      <DeleteIcon sx={{ mr: 1, color: "red" }} />
        Borrar orden
      </MenuItem>
    </Popover>
  );
}

export default MenuListOrders;
