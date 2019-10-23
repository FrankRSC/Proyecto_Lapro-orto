import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Usuarios from './componentes/MostrarUsuario';
import Login from './componentes/Login'
import Menu from './componentes/NavbarAdmin'
import Nav from './componentes/Navbar'
import Aparatos from './componentes/Aparatos'
import Jumbo from './componentes/jumbotron'
import Contenido from './componentes/Contenido'
import Contacto from './componentes/Contactanos'
import Orden from './componentes/FormOrdenT'
import './App.css';




export default class App extends React.Component {

  render() {

    return (
      <Router>
        <Route path="/Inicio"
          exact render={() => {
            return (
              <div>
                <Nav Contenido={
                  [
                    <Contenido />

                  ]} />

              </div>
            );
          }}
        />
         <Route path="/Contacto"
          exact render={() => {
            return (
              <div>
                <Nav Contenido={
                  [
                    <Contacto />

                  ]} />
               
              </div>
            );
          }}
        />
        <Route path="/Login"
          exact render={() => {
            return (
              <div>
                <Login />
              </div>
            );
          }}
        />
        <Route path="/InicioAdmin"
          exact render={() => {
            return (
              <div>
                <Nav Contenido={
                  [

                    <Jumbo />

                  ]} />
              </div>
            );
          }}
        />
        <Route path="/InicioUsuarios"
          exact render={() => {
            return (
              <div>
                <Nav Contenido={
                  [
                   

                    <Contenido />

                  ]} />
              </div>
            );
          }}
        />
        <Route path="/Usuarios"
          exact render={() => {
            return (
              <div>
                 <Nav Contenido={
                  [
                    <Usuarios />


                  ]} />
               
              </div>
            );
          }} />
          <Route path="/Aparatos"
          exact render={() => {
            return (
              <div>
                 <Nav Contenido={
                  [
                    <Aparatos/>


                  ]} />
                
               
              </div>
            );
          }} />

      <Route path="/Orden"
          exact render={() => {
            return (
              <div>
                 <Nav Contenido={
                  [
                    <Orden/>


                  ]} />
                
               
              </div>
            );
          }} />

      </Router>

    );
  }
}
