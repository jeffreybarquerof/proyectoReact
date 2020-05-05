import React from 'react';
import './Bienvenida.css';

function Menu(props) {
    return (<ul>{props.listaServicios}</ul>)
}

class Bienvenida extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hora: new Date() }
        this.mostrarMenu = false;
        this.servicios = this.servicios.bind(this);
    }
    servicios(e) {
        e.preventDefault();
        this.mostrarMenu = !this.mostrarMenu;
    }

    componentDidMount() {
        this.contador = setInterval(() => this.actualizar(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.contador);
    }

    actualizar() { this.setState({ hora: new Date() }) }

    render() {
        var pservicio;
        if (this.mostrarMenu) {
            var servicios = ["Reparación de relojes", "Reparación de alhajas", "Diamantados"];
            var listaServicios = servicios.map((menu) => <div key={menu.toString()}> <li>{menu}</li></div >);
            pservicio = <ul>{listaServicios}</ul>
        }

        return (
            <div>
                <div className="Titulo">
                    {this.props.titulo}
                </div>
                <div className="Contenido">
                    {this.props.slogan}
                </div>
                <div className="Contenido">
                    Hora actual: {this.state.hora.toLocaleTimeString()}
                </div>
                <div>
                    <img src={this.props.logo} className="Logo" alt="Logo" />
                </div>
                <div>
                    <img src={this.props.icono} className="Icono" alt="Icon" />
                </div>
                <div className="Contenido">
                    <button onClick={this.servicios} >Nuestros Servicios</button>
                </div>
                <Menu listaServicios={pservicio} className="Contenido" />
            </div >
        );
    }
}

export default Bienvenida;