import React, { Component } from 'react'
import axios from 'axios';
import '../Estilos/RegistrarUsuarios.css'

const initialState = {
    usuarios: [],
    nuevousuario: '',
    nombre: '',
    apellidoP: '',
    apellidoF: '',
    direccion: '',
    telefono: '',
    corre: '',
    contraseña: '',
    nombreError: '',
    apellidoPError: '',
    apellidoFError: '',
    direccionError: '',
    telefonoError: '',
    correoError: '',
    contraseñaError: '',
    color: 'blue',
    nivel: 'a',
    isChecked: false,
    type: 'password'
}

export default class AgregarUsuario extends Component {

    state = initialState;



    onChangeTelefono = (e) => {
        this.setState({
            telefono: e.target.value
        })
    }

    onChangePass = (e) => {
        this.setState({
            contraseña: e.target.value
        })

        var mayus = new RegExp("^(?=.*[A-Z])");
        var special = new RegExp("^(?=.*[!@#$&*.])");
        var numbers = new RegExp("^(?=.*[0-9])");
        var lower = new RegExp("^(?=.*[a-z])");
        let valor

        var words = e.target.value
        if (mayus.test(words) && special.test(words) && numbers.test(words) && lower.test(words)) {
            valor = 1
        }else{
            valor = 0
        }

        if (e.target.value.length >= 8 && valor === 1) {
            this.setState({
                nivel: 'Nivel de seguridad: alto',
                color: 'green'
            })
        } else if (e.target.value.length >= 6 && valor === 1) {
            this.setState({
                nivel: 'Nivel de seguridad: medio',
                color: 'Khaki'

            })
            alert(valor)
        } else if (e.target.value.length >= 5) {
            this.setState({
                nivel: 'Nivel de seguridad: bajo',
                color: 'red'
            })
        } else if (e.target.value.length >= 1 && e.target.value.length <= 4) {
            this.setState({
                nivel: 'Contraseña invalida',
                color: 'red'
            })
        } else {
            this.setState({
                nivel: ''
            })
        }
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        const isvalid = this.validar();
        if (isvalid) {
            await axios.post('http://localhost:4000/api/usuarios/', {
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
        e.preventDefault();
    }

    Recargar = () => {
        //window.opener.location.reload();
    }


    Limpiar = () => {
        this.setState(initialState);
    }

    handleChecked = () => {
        this.setState({ isChecked: !this.state.isChecked });

        if (this.state.isChecked === false) {
            this.setState({ type: 'text' });
        } else {
            this.setState({ type: 'password' });
        }
    }

    validar = () => {
        let nombreError = ''
        let apellidoPError = ''
        let apellidoFError = ''
        let direccionError = ''
        let telefonoError = ''
        let correoError = ''
        let contraseñaError = ''


        if (!this.state.corre.includes('@hotmail.com') && !this.state.corre.includes('@gmail.com') && !this.state.corre.includes('@yahoo.com')) {
            correoError = '*Correo invalido';
        }

        if (this.state.contraseña.length < 5 || this.state.contraseña.length >=35) {
            contraseñaError = "*Ingrese Contraseña Valida"
        }

        if (this.state.nombre.length < 3 || this.state.nombre.length >= 35 ) {
            nombreError = "*Ingrese Nombre Valido"
        }

        if (this.state.apellidoP.length < 3 || this.state.apellidoP.length >= 35 ){
            apellidoPError = "*Ingrese Apellido Valido"
        }

        if (this.state.direccion.length < 3 || this.state.direccion.length >= 35) {
            direccionError = "*Ingrese Direccion Valida"
        }

        if (this.state.telefono.length < 3 || this.state.telefono.length >= 35) {
            telefonoError = "*Ingrese Telefono Valido"
        }

        if (this.state.apellidoF.length < 3 || this.state.apellidoF.length >= 35) {
            apellidoFError = "*Ingrese Apellido Valido"
        }


        if (correoError || contraseñaError || nombreError || apellidoPError || direccionError || telefonoError || apellidoFError) {
            this.setState({ correoError, contraseñaError, nombreError, apellidoPError, direccionError, telefonoError, apellidoFError });
            return false;
        }

        return true;
    }
    render() {
        return (
            <div >
                <div class="modal fade bd-example-modal-lg" id="Registrar" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <form onSubmit={this.onSubmit}>


                                <div className="modal-header">
                                    <h4 className="modal-title">Registrar Usuario</h4>
                                    <button onClick={this.Limpiar} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body"></div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.nombreError}</div>
                                        <input type="text" className="input1" placeholder="Nombre" name="nombre" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.apellidoPError}</div>
                                        <input type="text" className="input1" placeholder="Apellido Paterno" name="apellidoP" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.apellidoFError}</div>
                                        <input type="text" className="input1" placeholder="Apellido Materno" name="apellidoF" onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.direccionError}</div>
                                        <input type="text" className="input1" placeholder="Direccion" name="direccion" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.telefonoError}</div>
                                        <input type="number" className="input1" placeholder="Telefono" onChange={this.onChangeTelefono} />
                                    </div>
                                </div>
                                <div className="row mt-4 mb-4">
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.correoError}</div>
                                        <input type="text" className="input1" placeholder="Correo" name="corre" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                        <div style={{ fontSize: '16px' }} className="text-center font-weight-bold text-danger mt-5">{this.state.contraseñaError}</div>
                                        <input type={this.state.type} className="input1" placeholder="Contraseña" name="contraseña" onChange={this.onChangePass} />
                                        <div className="text-center font-weight-bold" style={{ fontSize: '12px' }}><input className="mt-2" type="checkbox" onChange={this.handleChecked} /> Mostrar contraseña </div>
                                        <div className="text-center font-weight-bold" style={{ fontSize: '12px', color: this.state.color }}>{this.state.nivel}</div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" data-dismoss="modal" type="submit" onClick={this.Recargar}>Aceptar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

