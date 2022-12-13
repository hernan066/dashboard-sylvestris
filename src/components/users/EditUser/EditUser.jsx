import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import apiRequest from "../../../api/apiRequest";

const ONLY_NUMBERS = /^[0-9+]*$|^NULL$/;
const ONLY_LETTERS = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/;
const NUMBERS_AND_LETTERS = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ ]+$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras")
    .min(2, "2 caracteres mínimo"),
  lastname: Yup.string()
    .required("Requerido")
    .matches(ONLY_LETTERS, "Solo letras")
    .min(2, "2 caracteres mínimo"),
  email: Yup.string().required("Requerido").email("Formato invalido"),
  //password: Yup.string().min(6, "6 caracteres mínimo").required("Requerido"),
  rol: Yup.string().required("Requerido"),
  phone: Yup.string().matches(ONLY_NUMBERS, "Solo números"),
  address: Yup.string().matches(NUMBERS_AND_LETTERS, "Solo letras y números"),
  state: Yup.string().matches(NUMBERS_AND_LETTERS, "Solo letras y números"),
  city: Yup.string().matches(NUMBERS_AND_LETTERS, "Solo letras y números"),
});

const EditUser = ({ user }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const { data } = await apiRequest.put(`/users/${user.id}`, values);
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario editado con éxito",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/users");
      }
    } catch (error) {
      setError(
        error.response?.data?.errors[0]?.msg || "Error: usuario no editado"
      );
      console.log(error.response?.data?.errors[0].msg);
    }
  };

  const handlerDelete = () => {
   
    Swal.fire({
      title: "Deseas borrar este usuario?",
      text: "Este cambio no se puede revertir",
      icon: "danger",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiRequest.delete(`/users/${user.id}`);
          navigate('/users')
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="admin__container">
      <section className="login__main__container admin__form__container">
        <h1>EDITAR USUARIO</h1>
        <Formik
          initialValues={{
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            //password: user.password,
            rol: user.rolId,
            phone: user?.phone || "",
            dni: user?.dni || "",
            address: user.address[0]?.address || "",
            state: user.address[0]?.state || "",
            city: user.address[0]?.city || "",
            cp: user.address[0]?.cp || "",
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
                <div className="form__field">
                  <label for="">Apellido(*)</label>
                  <Field
                    type="text"
                    name="lastname"
                    className="input__admin"
                    value={values.lastname}
                  />

                  <ErrorMessage
                    name="lastname"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field" >
                  <label for="">Email(*)</label>
                  <Field
                    type="email"
                    name="email"
                    className="input__admin"
                    value={values.email}
                  />

                  <ErrorMessage
                    name="email"
                    component="p"
                    className="form__error"
                  />
                </div>

                <p className="form__error"></p>
                {/* <div className="form__field">
                  <label for="">Password(*)</label>
                  <Field
                    type="password"
                    name="password"
                    className="input__admin"
                  />

                  <ErrorMessage
                    name="password"
                    component="p"
                    className="form__error"
                  />
                </div> */}

                <div className="form__field">
                  <label for="rol">Rol(*)</label>
                  <Field as="select" name="rol" className="input__admin">
                    <option value="" disable>
                      Elige un rol
                    </option>
                    <option value="2" selected={values.rol == 2 && true}>
                      Usuario
                    </option>
                    <option value="1" selected={values.rol == 1 && true}>
                      Administrador
                    </option>
                  </Field>
                  <ErrorMessage
                    name="rol"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div className="form__field">
                  <label for="">Telefono</label>
                  <Field type="text" name="phone" className="input__admin" />

                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="form__error"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form__field">
                  <label for="">DNI</label>
                  <Field type="number" name="dni" className="input__admin" />

                  <ErrorMessage
                    name="dni"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Dirección</label>
                  <Field type="text" name="address" className="input__admin" />

                  <ErrorMessage
                    name="address"
                    component="p"
                    className="form__error"
                  />
                </div>

                <div className="form__field">
                  <label for="">Provincia</label>
                  <Field type="text" name="state" className="input__admin" />

                  <ErrorMessage
                    name="state"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Ciudad</label>
                  <Field type="text" name="city" className="input__admin" />

                  <ErrorMessage
                    name="city"
                    component="p"
                    className="form__error"
                  />
                </div>
                <div className="form__field">
                  <label for="">Código Postal</label>
                  <Field type="number" name="cp" className="input__admin" />

                  <ErrorMessage
                    name="cp"
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

export default EditUser;
