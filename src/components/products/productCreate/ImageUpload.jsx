import { useRef, useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
const authenticationEndpoint = `${process.env.REACT_APP_API_URL}/imageKit`;

function ImageUpload({ setUrlImage, setErrorUpload }) {
  const inputRefTest = useRef(null);
  const [loading, setLoading] = useState(false);

  const onError = (err) => {
    console.log("Error", err);
    setLoading(false);
  };

  const onSuccess = async (res) => {
    console.log("Success", res);

    setUrlImage(res.url);
    setLoading(false);
  };

  const onUploadStart = () => {
    console.log("start");
    setLoading(true);
  };

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticationEndpoint={authenticationEndpoint}
    >
      <IKUpload
        fileName="product.png"
        onError={onError}
        onSuccess={onSuccess}
        /*  onUploadProgress={onUploadProgress} */
        onUploadStart={onUploadStart}
        /*   onChange={changeHandler} */
        /* validateFile={(file) =>
              file.size < 2000000 && file.fileType === "image"
            } */
        validateFile={(file) => /image/.test(file.type)}
        style={{ display: "none" }}
        inputRef={inputRefTest}
      />

      <button
        className={`btn-load ${loading ? "button--loading" : ""}`}
        type="submit"
        onClick={() => inputRefTest.current.click()}
        disabled={loading}
        style={{
          width: "50px",
          height: "37px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1c6a6d",
        }}
      >
        <span className="button__text">
          <FileUploadIcon />
        </span>
      </button>
    </IKContext>
  );
}

export default ImageUpload;
