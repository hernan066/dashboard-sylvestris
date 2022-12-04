/* eslint-disable react/prop-types */
import { MenuItem, Popover } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";


function MenuListProducts({ open, handleCloseMenu, productId }) {
  const navigate = useNavigate();

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
          width: 120,
          zIndex: 20,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        },
      }}
    >
      <MenuItem onClick={() => navigate(`/products/details/${productId}`)}>
        <VisibilityIcon sx={{ mr: 1 }} />
        Ver
      </MenuItem>
      <MenuItem onClick={() => navigate(`/products/edit/${productId}`)}>
        <EditIcon sx={{ mr: 1 }} />
        Edit
      </MenuItem>
    </Popover>
  );
}

export default MenuListProducts;
