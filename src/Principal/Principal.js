import Bienvenida from '../Bienvenida/Bienvenida'
import Formulario from '../Formulario/Formulario'
import { Contador } from '../Contador/Contador'
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';
import './Principal.css';


export default function Principal() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Bienvenida</Link>
                    </li>
                    <li>
                        <Link to="/formulario">Formulario</Link>
                    </li>
                    <li>
                        <Link to="/contador">Reparar</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/formulario">
                        <Formulario />
                    </Route>
                    <Route path="/contador">
                        <Contador />
                    </Route>
                    <Route path="/">
                        <Bienvenida titulo="RLA (Reparación Las Américas)" slogan="Donde la experiencia hace la diferencia" logo="../Logo.png" icono="../favicon.ico" />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}