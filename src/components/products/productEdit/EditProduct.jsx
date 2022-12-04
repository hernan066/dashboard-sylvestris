import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Swal from "sweetalert2";
import apiRequest from "../../../api/apiRequest";

const ONLY_NUMBERS = /^[0-9+]*$|^NULL$/;
const ONLY_LETTERS = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/;
const NUMBERS_AND_LETTERS = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ ]+$/;
const NUMBERS_LETTERS_SYMBOLS = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ,.-:° ]+$/;

const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras"),
  sub_titulo: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras"),
  stock: Yup.number().positive("Solo números positivos").required("Requerido"),
  descripcion: Yup.string().required("Requerido").matches(NUMBERS_LETTERS_SYMBOLS, "Solo letras y números"),
  cuidados: Yup.string().required("Requerido").matches(NUMBERS_LETTERS_SYMBOLS, "Solo letras y números"),
  categoria: Yup.string().required("Requerido"),
  destacado: Yup.string().required("Requerido"),
  descripcion_altura: Yup.string().required("Requerido").matches(NUMBERS_LETTERS_SYMBOLS,"Solo letras y números"),
  descripcion_maceta: Yup.string().required("Requerido").matches(NUMBERS_LETTERS_SYMBOLS,"Solo letras y números"),
  precio: Yup.number().positive("Solo números positivos").required("Requerido"),
  agua: Yup.number().positive("Solo números positivos").required("Requerido"),
  luz: Yup.number().positive("Solo números positivos").required("Requerido"),
});

const EditProduct = ({product}) => {
  const navigate = useNavigate();
  const {id}= useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);
console.log(values)
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
        error.response?.data?.errors[0]?.msg || "Error: producto no editado"
      );
      console.log(error.response?.data?.errors[0].msg);
    }
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
            agua: product.agua,
            luz: product.luz,
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
                    <option value="1" selected={values.categoria == 1 && true}>Suculentas</option>
                    <option value="2" selected={values.categoria == 2 && true}>Cactus</option>
                    <option value="3" selected={values.categoria == 3 && true}>Plantas</option>
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
                  <label for="">Agua(*)</label>
                  <Field type="number" name="agua" className="input__admin" />

                  <ErrorMessage
                    name="agua"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Luz(*)</label>
                  <Field type="number" name="luz" className="input__admin" />

                  <ErrorMessage
                    name="luz"
                    component="p"
                    className="form__error"
                  />
                </div>

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
                  <span className="button__text">Enviar</span>
                </button>
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
