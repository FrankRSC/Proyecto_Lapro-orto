import React, { Component } from 'react'
import { Link } from 'react-router-dom';




export default class VentanaEmergente extends Component {
    
Validacion = () => {
    if(this.props.link === "/" ){
        window.location.reload(true);
    }else{
        
    }
    
}
    render() {
        return (
            <div className="container">
                    <div className="modal fade" id="ventana1" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button tyle ="button" className="close" data-dismiss="modal" aria-hidden = "true">&times;</button>
                                    <h4 className="modal-title">{this.props.info}</h4>
                                </div>

                                <div className="modal-body">
                                    <p id="info">{this.props.usuario}</p>
                                </div>
                                <div className="modal-footer">
                                   <Link to={this.props.link} onClick={console.log(this.props.link)} onClick={this.Validacion}><button type="button" className="btn btn-primary">Aceptar</button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
