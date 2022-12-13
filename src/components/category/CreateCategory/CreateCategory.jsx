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

const CreateCategory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const { data } = await apiRequest.post("/categories", values);
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Categoria creada con éxito",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/categories");
      }
    } catch (error) {
      setError(
        error.response?.data?.errors[0]?.msg || "Error: categoria no creada"
      );
      console.log(error.response?.data?.errors[0].msg);
    }
  };

  return (
    <div className="admin__container">
      <section className="login__main__container admin__form__container">
        <h1>CREAR CATEGORIA</h1>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form class="admin__form">
              <div className="col">
                <div className="form__field">
                  <label for="">Nombre/s(*)</label>
                  <Field type="text" name="name" className="input__admin" />

                  <ErrorMessage
                    name="name"
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

export default CreateCategory;
