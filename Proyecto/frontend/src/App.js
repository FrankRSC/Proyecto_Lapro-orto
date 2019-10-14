import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import AgregarUsuario from './componentes/AgregarUsuario';
import Login from './componentes/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Route exact path="/AgregarUsuario" component={AgregarUsuario}/>
      <Route exact path="/" component={Login}/>
      </Router>
  
    );
  }
}
