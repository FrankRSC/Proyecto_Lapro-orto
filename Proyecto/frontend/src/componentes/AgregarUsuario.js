import React, { Component } from 'react'
import axios from 'axios';
import '../Estilos/RegistrarUsuarios.css'


export default class AgregarUsuario extends Component {

    state = {
        usuarios: [],
        nuevousuario: '',
        nombre: '',
        apellidoP: '',
        apellidoF: '',
        direccion: '',
        telefono: '',
        corre: '',
        contraseña: ''

    }


    //#region Captura de datos
    onChangeUsuario = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }

    onChangePaterno = (e) => {
        this.setState({
            apellidoP: e.target.value
        })
    }

    onChangeMaterno = (e) => {
        this.setState({
            apellidoF: e.target.value
        })
    }

    onChangeDireccion = (e) => {
        this.setState({
            direccion: e.target.value
        })
    }

    onChangeTelefono = (e) => {
        this.setState({
            telefono: e.target.value
        })
    }

    onChangeCorreo = (e) => {
        this.setState({
            corre: e.target.value
        })
    }

    onChangeContraseña = (e) => {
        this.setState({
            contraseña: e.target.value
        })
    }

    onSubmit = async (e) => {
        const res = await axios.post('http://localhost:4000/api/usuarios/', {
            nombre: this.state.nombre,
            apellidoP: this.state.apellidoP,
            apellidoF: this.state.apellidoF,
            direccion: this.state.direccion,
            telefono: this.state.telefono,
            corre: this.state.corre,
            contraseña: this.state.contraseña
        })

        e.preventDefault();
    }

    //#endregion



    render() {
        return (
            <div className="fu">


                <div className="container w-75" style={{ marginTop: '10%', border: 'solid black 1px' }}>
                    <form className="f" onSubmit={this.onSubmit}>
                        <h1>REGISTRAR USUARIOS</h1>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" className="input" placeholder="Nombre" onChange={this.onChangeUsuario} />
                            </div>
                            <div className="col">
                                <input type="text" className="input" placeholder="Apellido Paterno" onChange={this.onChangePaterno} />
                            </div>
                            <div className="col">
                                <input type="text" className="input" placeholder="Apellido Materno" onChange={this.onChangeMaterno} />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <input type="text" className="input" placeholder="Direccion" onChange={this.onChangeDireccion} />
                            </div>
                            <div className="col">
                                <input type="number" className="input" placeholder="Telefono" onChange={this.onChangeTelefono} />
                            </div>
                        </div>
                        <div className="row mt-4 mb-4">
                            <div className="col">
                                <input type="text" className="input" placeholder="Correo" onChange={this.onChangeCorreo} />
                            </div>
                            <div className="col">
                                <input type="password" className="input" placeholder="Contraseña" onChange={this.onChangeContraseña} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className=" align-items-end">
                                    <button type="submit" className="s ">Agregar</button>
                                </div>

                            </div>
                        </div>
                        <div>

                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
