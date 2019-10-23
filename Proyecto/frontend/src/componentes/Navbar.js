import React, { Component } from 'react'
import Logo from '../Imagenes/Logo.jpeg'
import { Link } from 'react-router-dom';
import { Appcontext } from './Login'
import { MDBNavbar } from "mdbreact"

import {
    Button,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'


export default class Navbar extends Component {

    state = {
        animation: 'scale down',
        direction: 'left',
        dimmed: false,
        visible: false,
    }

    hola = (e) => {
        this.setState({ visible: !this.state.visible })
        e.preventDefault();
    }

    desconectar =() =>{
        this.context.usuarios.Administrador = false;
        this.context.usuarios.UsuarioComun = false;
        this.context.usuarios.SinUsuario = true;
    }



    render() {

        const { animation, direction, visible } = this.state
        let div;
        let opciones;
        if (this.context.usuarios.Administrador) {
            div =
                <div className="d-flex justify content-end">
                    <label className="mt-1 lead text-white">{this.context.nombreUsuario}</label>
                    <div className="ml-3 dropleft">
                        <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" className="img dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div class="dropdown">
                            <div class="dropdown-menu">
                                <a class="dropdown-item">Perfil</a>
                                <a class="dropdown-item">Ventas</a>
                                <a class="dropdown-item">Configuración</a>
                                <div class="dropdown-divider"></div>
                                <Link style={{textDecoration: 'none'}} onClick={this.desconectar} to="/Login"><a class="dropdown-item">Salir</a></Link> 
                            </div>
                        </div>
                    </div>
                </div>

            opciones =
                <div>
                     <Link to="InicioAdmin">
                    <Menu.Item>
                       <img src={Logo} className="img" style={{ marginLeft: '26%' }} />
                    </Menu.Item>
                    </Link>
                    <Link to="InicioAdmin"> 
                    <Menu.Item as='a'>
                     <Icon name='home' /> 
                        Inicio
                    </Menu.Item>
                    </Link>
                    <Link to="Aparatos"> 
                    <Menu.Item as='a'>
                          <Icon name='clipboard list' />
                        Productos
                    </Menu.Item>
                    </Link>
                    <Link to="Ordenes">
                    <Menu.Item as='a'>
                           <Icon name='clipboard outline' /> 
                        Hacer Orden
                    </Menu.Item>
                    </Link>
                    <Link to="Usuarios">
                    <Menu.Item as='a'>
                          <Icon name='user outline' /> 
                        Usuarios
                    </Menu.Item>
                    </Link>
                </div>

        } else if (this.context.usuarios.UsuarioComun) {
            div = <div className="d-flex justify content-end">
                <label className="mt-1 lead text-white">{this.context.nombreUsuario}</label>
                <div className="ml-3 dropleft">
                    <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" className="img dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div class="dropdown">
                        <div class="dropdown-menu">
                            <a class="dropdown-item">Perfil</a>
                            <a class="dropdown-item">Historial</a>
                            <a class="dropdown-item">Configuracion</a>
                            <div class="dropdown-divider"></div>
                           <Link style={{textDecoration: 'none'}} to="/Login" onClick={this.desconectar}><a class="dropdown-item">Salir</a></Link> 
                        </div>
                    </div>
                </div>
            </div>

            opciones =
                <div>
                     <Link to="InicioUsuarios">
                    <Menu.Item>
                       <img src={Logo} className="img" style={{ marginLeft: '26%' }} />
                    </Menu.Item>
                    </Link>
                    <Link to="InicioUsuarios">
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Inicio
                    </Menu.Item>
                    </Link>
                    <Link to="Aparatos">
                    <Menu.Item as='a'>
                        <Icon name='clipboard list' />
                        Productos
                    </Menu.Item>
                    </Link>
                    <Link to="Orden">
                    <Menu.Item as='a'>
                        <Icon name='clipboard outline' />
                        Hacer Orden
                    </Menu.Item>
                    </Link>
                    <Link to="Contacto"> 
                    <Menu.Item as='a'>
                         <Icon name='address book outline' /> 
                        Contacto
                    </Menu.Item>
                    </Link>
                    <Menu.Item as='a'>
                        <Icon name='question circle outline' />
                        Acerca de
                    </Menu.Item>
                </div>

        } else {
            div = <form class="form-inline my-2 my-lg-0">
                <Link to="/Login"><button className="btn blue-gradient my-2 my-sm-0">Iniciar Sesion</button></Link>

            </form>

            opciones =
                <div>
                    <Link to="/Inicio">
                    <Menu.Item>
                        <img src={Logo} className="img" style={{ marginLeft: '26%' }} />
                    </Menu.Item>
                    </Link>
                    <Link to="Inicio">
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Inicio
                    </Menu.Item>
                    </Link>
                    <Link to="Aparatos">
                    <Menu.Item as='a'>
                        <Icon name='clipboard list' />
                        Productos
                    </Menu.Item>
                    </Link>
                    <Link to="Contacto">  
                    <Menu.Item as='a'>
                       <Icon name='address book outline' /> 
                        Contacto
                    </Menu.Item>
                    </Link>
                    <Menu.Item as='a'>
                        <Icon name='question circle outline' />
                        Acerca de
                    </Menu.Item>
                </div>
        }



        return (
            <div>
                <Sidebar.Pushable style={{ height: '100vh' }}>

                    <Sidebar className="blue-gradient" as={Menu} animation={animation} direction={direction} icon='labeled' inverted vertical visible={visible} width='very'>
                        {opciones}
                    </Sidebar>

                    <Sidebar.Pusher>
                        <MDBNavbar className="navbar fixed-top" color="blue-gradient" dark expand="md" >
                            <a className="mr-5" onClick={this.hola}><i class="fas fa-bars"><span className="text-black ml-3">Menu</span></i></a>
                            <div>
                                <img src={Logo} className="img mr-3" />
                            </div>
                            <a className="navbar-brand text-black" >Lapro-Orto</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-center" id="navbarColor01" >
                            </div>
                            {div}
                        </MDBNavbar>

                        {this.props.Contenido}

                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>

        )
    }
}


Navbar.contextType = Appcontext;