import { Button, Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../Estilos/FormOrdenT.css'
import Logo from '../Imagenes/logo.jpg'
import '../Estilos/animations.css'

export default class FormOrdenT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', value2: '', value3: '', value4: '', value5: '', value6: '', value7: '', value8: '', value9: ''
      , value10: '', value11: '', value12: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }


  render() {
    return (
      <div class="ffl">
        <form className="boxx">
        <div class="d-flex justify-content-center">

                <img class="slideRight" src={Logo} />

                  <h1 class="slideLeft">Lapro-Orto</h1>

        </div>
        
          <Container style={{marginTop:"60px"}}>
            <Row>
              <Col>
                <label>
                  Clinica:
                <input type="text" name="value" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value} onChange={this.handleChange} />
                </label>
              </Col>
              <Col>
                <label>
                  Paciente:
               <input type="text" class="form-control mb-4; input" name="value2" id="defaultContactFormName" />
                </label></Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <label>
                  Fecha de salida:
            <input type="text" name="value3" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value3} onChange={this.handleChange} />
                </label>
              </Col>
              <Col>
                <label>
                  Doctor:
            <input type="text" name="value4" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value4} onChange={this.handleChange} />
                </label>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <label>
                  Fecha de entrada:
                  <input type="text" name="value5" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value5} onChange={this.handleChange} />
                </label>
              </Col>
              <Col>
                <label>
                  Trabajo a realizar:
                  <textarea type="text" name="value6" id="defaultContactFormName" class="form-control mb-4; input" style={{ height: "80px", textAlign: "left" }} value={this.state.value6} onChange={this.handleChange} />
                </label>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <label>
                  Color*:
                  <input type="text" name="value7" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value7} onChange={this.handleChange} />
                </label>
              </Col>
              <Col>
                <label>
                  Material:
                  <select name="value8" class="browser-default custom-select mb-4; input" value={this.state.value8} onChange={this.handleChange} >
                    <option value="---">---</option>/>
              <option value="E-max">E-max</option>/>
              <option value="Metal Ceramico">Metal Ceramico</option>/>
              <option value="Zirconia" >Zirconia</option>/>
              <option value="Otro">Otro</option>/>
            </select>
                </label>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <label>
                  Adjuntar foto del caso:
                 <input type="file" name="value9" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value9} onChange={this.handleChange} />
                </label>
              </Col>
              <Col>
                <label>
                  Observaciones:
                 <input type="text" name="value10" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value10} onChange={this.handleChange} />
                </label>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <label>
                  E-mail:
                  <input type="text" name="value11" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value11} onChange={this.handleChange} />
                </label>
              </Col>
              <Col>
                <label>
                  Telefono:
                  <input type="text" name="value12" id="defaultContactFormName" class="form-control mb-4; input" value={this.state.value12} onChange={this.handleChange} />
                </label>
              </Col>
            </Row>
          </Container>
          <Button type="submit" value="Submit" variant="primary">Enviar Orden</Button>
        </form>
      </div>
    );
  }
}