import React, { Component } from 'react'

export default class Contactanos extends Component {
    render() {
        return (
            <div class="container">
            <h3 class="text-center">Contactanos</h3>
            <p class="text-center"><em>Queremos saber su opinion</em></p>

            <div class="row">
                <div class="col-md-4">
                    <p>Informacion del contacto</p>
                    <p><span class="glyphicon glyphicon-map-marker"></span>Hermosillo, Sonora</p>
                    <p><span class="glyphicon glyphicon-phone"></span>Celular: 6624865223</p>
                    <p><span class="glyphicon glyphicon-envelope"></span>Email: Papadelfrank@gmial.com</p>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Nombre" type="text" required />
                        </div>
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                        </div>
                    </div>
                    <textarea class="form-control" id="comments" name="comments" placeholder="Comentario" rows="5"></textarea>
                    <br />
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <button class="btn pull-right" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />



            <div class="tab-content">



            </div>
        </div>
        )
    }
}
