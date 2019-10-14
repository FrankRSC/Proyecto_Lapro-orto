import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Ventana from './VentanaEmergente'

import axios from 'axios';
import '../Estilos/login.css'

export default class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            usuarios: [],
            inputCorreo: '',
            inputPass: '',
            ruta: '/',
            Bienvenida: "",
        }
        var imprimir = function (a) {

            return a;
        }
    }

    async componentDidMount() {
        //api para hacer peticiones al servidor con put get
        //const res = await axios.get('http://localhost:4000/api/usuarios')
        //this.setState({ usuarios: res.data })
        //console.log(res)
        //console.log(this.state.usuarios[1].contraseña, this.state.usuarios[1].corre )

    }

    onChangepass = (pass) =>{
        this.setState({inputPass: pass.target.value})
        
    }

    comprobar = async (a) => {
        const {inputCorreo,inputPass} = this.state;
        const datos = await axios.get('http://localhost:4000/api/usuarios/' + inputCorreo)
        const {contraseña, nombre, apellidoP, apellidoF, corre} = datos.data[0];
        console.log()
        if(inputPass === contraseña){
        
            document.getElementById('info').innerHTML = "Bienvenido " + nombre + " " + apellidoP
            this.setState({ruta: '/AgregarUsuario'})
            this.setState({Bienvenida: 'Inicio de Sesion Correcto'})
           
            
        }else{
            document.getElementById('info').innerHTML = "Usuario o contraseña inconrrecto "
            this.setState({Bienvenida: 'Error al iniciar sesion'})
            
            
        }
    }

   
    

    render() {
      
        var a = this.state.ruta
            return (
                <div className="fl">
                    <form className="box">
                        <h1>Iniciar sesion</h1>
                        <input type="text" name="" placeholder="Correo Electronico" onChange={correo => this.setState({inputCorreo: correo.target.value})} />
                        <input type="password" name="" placeholder="Contraseña"  onChange={this.onChangepass}/>
                        <a href="#ventana1"  data-toggle="modal" className="s" onClick={this.comprobar} >Iniciar</a>
                        <Ventana info={this.state.Bienvenida} link={this.state.ruta} ></Ventana>
                    </form>

                    
                </div>
            )

       
    }
}
