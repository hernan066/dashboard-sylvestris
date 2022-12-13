import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import Swal from "sweetalert2";
import apiRequest from "../../../api/apiRequest";

const ONLY_LETTERS = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras")
    .min(2, "2 caracteres mínimo"),
});

const EditCategory = ({ category }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const { data } = await apiRequest.put(`/categories/${category.id}`, values);
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Categoria editada con éxito",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/categories");
      }
    } catch (error) {
      setError(
        error.response?.data?.errors[0]?.msg || "Error: Categoria no editada"
      );
      console.log(error.response?.data?.errors[0].msg);
    }
  };

  const handlerDelete = () => {
   
    Swal.fire({
      title: "Deseas borrar esta categoria?",
      text: "Este cambio no se puede revertir",
      icon: "danger",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiRequest.delete(`/categories/${category.id}`);
          navigate('/categories')
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="admin__container">
      <section className="login__main__container admin__form__container">
        <h1>EDITAR CATEGORIA</h1>
        <Formik
          initialValues={{
            name: category.name,
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
                  <label for="">Nombre/s(*)</label>
                  <Field
                    type="text"
                    name="name"
                    className="input__admin"
                    value={values.name}
                  />

                  <ErrorMessage
                    name="name"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
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
                    disabled={loading}
                    style={{
                      marginTop: "28px",
                      padding: "9px",
                      backgroundColor: "red",
                      textAlign: 'center'
                    }}
                    onClick={handlerDelete}
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

export default EditCategory;
