import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import apiRequest from "../../../api/apiRequest";
import ImageUpload from "./ImageUpload";

const ONLY_NUMBERS = /^[0-9+]*$|^NULL$/;
const ONLY_LETTERS = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/;
const NUMBERS_AND_LETTERS = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ ]+$/;
const NUMBERS_LETTERS_SYMBOLS = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ,.-:°|¡ ]+$/;

const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras"),
  sub_titulo: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras"),
  stock: Yup.number().positive("Solo números positivos").required("Requerido"),
  descripcion: Yup.string()
    .required("Requerido")
    .matches(NUMBERS_LETTERS_SYMBOLS, "Solo letras y números"),
  cuidados: Yup.string()
    .required("Requerido")
    .matches(NUMBERS_LETTERS_SYMBOLS, "Solo letras y números"),
  categoria: Yup.string().required("Requerido"),
  destacado: Yup.string().required("Requerido"),
  descripcion_altura: Yup.string()
    .required("Requerido")
    .matches(NUMBERS_LETTERS_SYMBOLS, "Solo letras y números"),
  descripcion_maceta: Yup.string()
    .required("Requerido")
    .matches(NUMBERS_LETTERS_SYMBOLS, "Solo letras y números"),
  precio: Yup.number().positive("Solo números positivos").required("Requerido"),
  //image1: Yup.string().required("Requerido"),
  //image2: Yup.string().required("Requerido"),
});

const EditProduct = ({ product }) => {
  const {id}= useParams()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorUpload1, setErrorUpload1] = useState(null);
  const [errorUpload2, setErrorUpload2] = useState(null);
  const [formError, setFormError] = useState({
    image1: null,
    image2: null,
  });

  const [urlImage1, setUrlImage1] = useState(product.images[0]?.filename || "");
  const [urlImage2, setUrlImage2] = useState(product.images[1]?.filename || "");

  const handleSubmit = async (values) => {
    // valido errores
    if (!urlImage1 || !urlImage2) {
      return setFormError({
        image1: urlImage1 ? null : "Requerido",
        image2: urlImage2 ? null : "Requerido",
      });
    }

    setLoading(true);
    values.image1 = urlImage1;
    values.image2 = urlImage2;
    console.log(values);

    try {
      const { data } = await apiRequest.put(`/products/${id}`, values);

      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto editado con éxito",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/products");
      }
    } catch (error) {
      setError(
        error.response?.data?.errors[0]?.msg || "Error: usuario no creado"
      );
      console.log(error.response?.data?.errors[0].msg);
    }
  };

  useEffect(() => {
    setFormError({
      image1: urlImage1 ? null : "Requerido",
      image2: urlImage2 ? null : "Requerido",
    });
  }, [urlImage1, urlImage2]);

  useEffect(() => {
    setFormError({
      image1: null,
      image2: null,
    });
  }, []);

  const handlerDelete = () => {
   
    Swal.fire({
      title: "Deseas borrar este producto?",
      text: "Este cambio no se puede revertir",
      icon: "danger",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiRequest.delete(`/products/${product.id}`);
          navigate('/products')
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <div className="admin__container">
      <section className="login__main__container admin__form__container">
        <h1>EDITAR PRODUCTO</h1>
        <Formik
          initialValues={{
            nombre: product.nombre,
            sub_titulo: product.sub_titulo,
            stock: product.stock,
            descripcion: product.descripcion,
            cuidados: product.cuidados,
            categoria: product.categoryId,
            destacado: product.destacado,
            descripcion_altura: product.descripcion_altura,
            descripcion_maceta: product.descripcion_maceta,
            precio: product.precio,
            image1: urlImage1,
            image2: urlImage2,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form class="admin__form">
              <div className="col">
                <div className="form__field">
                  <label for="">Nombre(*)</label>
                  <Field type="text" name="nombre" className="input__admin" />

                  <ErrorMessage
                    name="nombre"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Subtitulo(*)</label>
                  <Field
                    type="text"
                    name="sub_titulo"
                    className="input__admin"
                  />

                  <ErrorMessage
                    name="sub_titulo"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Stock(*)</label>
                  <Field type="number" name="stock" className="input__admin" />

                  <ErrorMessage
                    name="stock"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div className="form__field">
                  <label for="">Precio(*)</label>
                  <Field type="number" name="precio" className="input__admin" />

                  <ErrorMessage
                    name="precio"
                    component="p"
                    className="form__error"
                  />
                </div>

                <p className="form__error"></p>

                <div className="form__field">
                  <label for="categoria">Categoría(*)</label>
                  <Field as="select" name="categoria" className="input__admin">
                    <option value="" disable>
                      Elige una opción
                    </option>
                    <option value="1" selected={values.categoria === 1}>
                      Suculentas
                    </option>
                    <option value="2" selected={values.categoria === 2}>
                      Cactus
                    </option>
                    <option value="3" selected={values.categoria === 3 && true}>
                      Plantas
                    </option>
                  </Field>
                  <ErrorMessage
                    name="categoria"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Descripción(*)</label>
                  <Field
                    name="descripcion"
                    className="input__admin"
                    as="textarea"
                    rows="8"
                    cols="120"
                  />

                  <ErrorMessage
                    name="descripcion"
                    component="p"
                    className="form__error"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form__field">
                  <label for="">Descripción altura(*)</label>
                  <Field
                    type="text"
                    name="descripcion_altura"
                    className="input__admin"
                  />

                  <ErrorMessage
                    name="descripcion_altura"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Descripción maceta(*)</label>
                  <Field
                    type="text"
                    name="descripcion_maceta"
                    className="input__admin"
                  />

                  <ErrorMessage
                    name="descripcion_maceta"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div className="form__field">
                  <label for="destacado">Destacado(*)</label>
                  <Field as="select" name="destacado" className="input__admin">
                    <option value="" disable>
                      Elige una opción
                    </option>
                    <option value="true">Si</option>
                    <option value="false">No</option>
                  </Field>
                  <ErrorMessage
                    name="destacado"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div className="form__field">
                  <label for="">Cuidados(*)</label>
                  <Field
                    name="cuidados"
                    className="input__admin"
                    as="textarea"
                    rows="8"
                    cols="120"
                  />

                  <ErrorMessage
                    name="cuidados"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div className="form__field">
                  <label for="">Imagen 1(*)</label>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <Field
                      type="text"
                      name="image1"
                      className="input__admin"
                      value={urlImage1}
                    />

                    <ImageUpload
                      setErrorUpload={setErrorUpload1}
                      setUrlImage={setUrlImage1}
                    />
                  </div>
                  {formError.image1 && (
                    <p className="form__error">{formError.image1}</p>
                  )}
                </div>
                <div className="form__field">
                  <label for="">Imagen 2(*)</label>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <Field
                      type="text"
                      name="image2"
                      className="input__admin"
                      value={urlImage2}
                    />

                    <ImageUpload
                      setErrorUpload={setErrorUpload2}
                      setUrlImage={setUrlImage2}
                    />
                  </div>

                  {formError.image2 && (
                    <p className="form__error">{formError.image2}</p>
                  )}
                </div>
                <div style={{ display: "flex", gap:'10px' }}>
                  <button
                    className={`btn-load ${loading ? "button--loading" : ""}`}
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: "28px",
                      padding: "9px",
                      backgroundColor: "#1c6a6d",
                    }}
                  >
                    <span className="button__text">Editar</span>
                  </button>
                  <div
                    className={`btn-load ${loading ? "button--loading" : ""}`}
                    onClick={handlerDelete}
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: "28px",
                      padding: "9px",
                      backgroundColor: "red",
                      textAlign: 'center'
                    }}
                  >
                    <span className="button__text">Borrar</span>
                  </div>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default EditProduct;
