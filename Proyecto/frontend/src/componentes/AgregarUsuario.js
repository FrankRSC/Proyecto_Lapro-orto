import React, { Component } from 'react'
import axios from 'axios';
import '../Estilos/RegistrarUsuarios.css'

const initialState ={
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
    contraseñaError: ''
}

export default class AgregarUsuario extends Component {

    state = initialState;



    onChangeTelefono = (e) => {
        this.setState({
            telefono: e.target.value
        })
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        const isvalid = this.validar();
        if(isvalid){
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

    p = () => {

        console.log(this.context.usuarios._Sesion_Iniciada)
    }

    Limpiar = () =>{
        this.setState(initialState);
    }

    validar= () =>{
        let nombreError = ''
        let apellidoPError = ''
        let apellidoFError = ''
        let direccionError = ''
        let telefonoError = ''
        let correoError = ''
        let contraseñaError = ''

        
        if(!this.state.corre.includes('@hotmail.com')  && !this.state.corre.includes('@gmail.com') && !this.state.corre.includes('@yahoo.com')){
            correoError = '*Correo invalido';
        }

        if(!this.state.contraseña){
            contraseñaError = "*Ingrese Contraseña"
        }

        if(!this.state.nombre){
            nombreError = "*Ingrese Nombre"
        }

        if(!this.state.apellidoP){
            apellidoPError = "*Ingrese Apellido Paterno"
        }

        if(!this.state.direccion){
            direccionError = "*Ingrese Direccion"
        }

        if(!this.state.telefono){
            telefonoError = "*Ingrese Telefono"
        }

        if(!this.state.apellidoF){
            apellidoFError = "*Ingrese Apellido Materno"
        }
        

        if(correoError || contraseñaError || nombreError || apellidoPError || direccionError || telefonoError || apellidoFError){
            this.setState({ correoError, contraseñaError, nombreError , apellidoPError ,direccionError , telefonoError , apellidoFError});
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
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.nombreError}</div>
                                        <input type="text" className="input" placeholder="Nombre" name="nombre" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.apellidoPError}</div>
                                        <input type="text" className="input" placeholder="Apellido Paterno" name="apellidoP" onChange={this.onChange}/>
                                    </div>
                                    <div className="col">
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.apellidoFError}</div>
                                        <input type="text" className="input" placeholder="Apellido Materno" name="apellidoF" onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.direccionError}</div>
                                        <input type="text" className="input" placeholder="Direccion" name="direccion" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.telefonoError}</div>
                                        <input type="number" className="input" placeholder="Telefono" onChange={this.onChangeTelefono} />
                                    </div>
                                </div>
                                <div className="row mt-4 mb-4">
                                    <div className="col">
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.correoError}</div>
                                        <input type="text" className="input" placeholder="Correo" name="corre" onChange={this.onChange} />
                                    </div>
                                    <div className="col">
                                    <div style={{fontSize: '16px'}} className="text-center font-weight-bold text-danger mt-5">{this.state.contraseñaError}</div>
                                        <input type="password" className="input" placeholder="Contraseña" name="contraseña" onChange={this.onChange} />
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

