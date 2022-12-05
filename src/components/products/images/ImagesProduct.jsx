import { Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const ImagesProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="responsive-table">
      <div className="admin__products__header">
        <h2>Imagenes</h2>

        <button
          className="btn__crear"
          onClick={() => navigate("/products/create")}
        >
          <i className="bx bx-message-square-add"></i> Agregar Imagen
        </button>
      </div>
      <Grid>
        <Box sx={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center'
        }}>
          <Card
            sx={{
              maxWidth: "550px",
            }}
          >
            <CardMedia
              component="img"
              image={
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
              alt="image product"
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Button fullWidth variant="contained">Subir Imagen</Button>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: "550px",
            }}
          >
            <CardMedia
              component="img"
              image={
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
              alt="image product"
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Button fullWidth variant="contained">Subir Imagen</Button>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div>
  );
};

export default ImagesProduct;
