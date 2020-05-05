import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            cargado: false,
            elementos: [],
            insertar: false,
            nombre: '',
            usuario: '',
            cedula: 0
        };
    }

    addusuario() {
        if (this.state.insertar) {
            var usuario = { id: this.state.cedula, name: this.state.nombre, username: this.state.usuario };
            fetch("http://jsonplaceholder.typicode.com/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            })
                .then(respuesta => respuesta.json())
                .then(
                    (resultado) => {

                        var lista = [];
                        lista.push(resultado);

                        this.setState({
                            error: null,
                            cargado: true,
                            elementos: lista,
                            insertar: false,
                            nombre: '',
                            usuario: '',
                            cedula: 0
                        });
                    },
                    (errores) => {
                        this.setState({
                            error: errores,
                            cargado: true,
                            elementos: [],
                            insertar: false,
                            nombre: '',
                            usuario: '',
                            cedula: 0
                        })
                    }
                )
        }
    }

    volver() {
        this.props.irBienvenida();
    }
    render() {
        const { error, cargado, elementos, insertar, nombre, usuario, cedula } = this.state;
        if (error)
            return <div>Ha ocurrido un error: {error.message}</div>
        else if (!cargado) {
            return (
                <div>
                    <h1>Datos de nuevo cliente</h1>
                    <Formik
                        initialValues={{ nombre: '', usuario: '', cedula: 0 }}
                        validate={values => {
                            const errors = {};
                            if (!values.nombre)
                                errors.nombre = 'Requerido';
                            if (!values.usuario)
                                errors.usuario = 'Requerido';
                            if (!values.cedula)
                                errors.cedula = 'Requerida';
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.setState({ insertar: true });
                            this.addusuario();
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <label>Nombre:      </label>
                                <Field type="text" name="nombre" />
                                <ErrorMessage name="nombre" component="div" />
                                <br />
                                <label>Usuario:    </label>
                                <Field type="text" name="usuario" />
                                <ErrorMessage name="usuario" component="div" />
                                <br />
                                <label>Cédula:      </label>
                                <Field type="numeric" name="cedula"></Field>
                                <ErrorMessage name="cedula" component="div" />
                                <br />
                                <button type="submit" disabled={isSubmitting}>Agregar</button>
                            </Form>
                        )}
                    </Formik>
                </div >
            );
        }
        else {
            return (<ul>
                {elementos.map(elemento => (
                    <li key={elemento.id}>
                        El nuevo registro posee la siguiente información: {elemento.id} {elemento.name} {elemento.username} {elemento.email}
                    </li>
                ))}
            </ul>
            )
        }
    }
}

export default Formulario;