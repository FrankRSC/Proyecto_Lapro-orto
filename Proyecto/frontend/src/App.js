import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Usuarios from './componentes/MostrarUsuario';
import Login from './componentes/Login'
<<<<<<< Updated upstream
import SideBar from './componentes/Sidebar';
import FormOrdenT from './componentes/FormOrdenT'
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import Menu from './componentes/NavbarAdmin'
import Nav from './componentes/Navbar'
import Aparatos from './componentes/Aparatos'
import Jumbo from './componentes/jumbotron'
>>>>>>> Stashed changes
import './App.css';




export default class App extends React.Component {

  render() {

    return (
      <Router>
<<<<<<< Updated upstream
      <Route exact path="/AgregarUsuario" component={AgregarUsuario}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/OrdendeTrabajo" component={FormOrdenT}/>
      </Router>
=======
        <Route path="/"
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
                    <Jumbo />



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

      </Router>

>>>>>>> Stashed changes
    );
  }
}
