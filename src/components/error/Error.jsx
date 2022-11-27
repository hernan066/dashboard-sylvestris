import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "85vh",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Ha ocurrido un error — <strong>no se pueden cargar datos!</strong>
      </Alert>
    </div>
  );
};

export default Error;
