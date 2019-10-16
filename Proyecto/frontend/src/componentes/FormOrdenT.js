import React, { Component } from 'react'

export default class FormOrdenT extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '', value2:'', value3:'', value4:'', value5:'', value6:'', value7:'', value8:'', value9:''
      , value10:'', value11:'', value12:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault();
    }
    
  
    render() {
      return (
        <form>
          <img src="Imagenes\WhatsApp Image 2019-10-15 at 10.50.52 PM.jpeg"/>
          <label>
            Clinica:
            <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Paciente:
            <input type="text" name="value2" value={this.state.value2} onChange={this.handleChange} />
          </label>
          <label>
            Fecha de salida:
            <input type="text" name="value3" value={this.state.value3} onChange={this.handleChange} />
          </label>
          <label>
            Doctor:
            <input type="text" name="value4" value={this.state.value4} onChange={this.handleChange} />
          </label>
          <label>
            Fecha de entrada:
            <input type="text" name="value5" value={this.state.value5} onChange={this.handleChange} />
          </label>
          <label>
            Trabajo a realizar:
            <input type="text" name="value6" value={this.state.value6} onChange={this.handleChange} />
          </label>
          <label>
            Color*:
            <input type="text" name="value7" value={this.state.value7} onChange={this.handleChange} />
          </label>
          <label>
            Material:
            <select name="value8" value={this.state.value8} onChange={this.handleChange} >
              <option value="---">---</option>/>
              <option value="E-max">E-max</option>/>
              <option value="Metal Ceramico">Metal Ceramico</option>/>
              <option value="Zirconia" >Zirconia</option>/>
              <option value="Otro">Otro</option>/>
            </select>
          </label>
          <label>
            Adjuntar foto del caso:
            <input type="file" name="value9" value={this.state.value9} onChange={this.handleChange} />
          </label>
          <label>
            Observaciones:
            <input type="text" name="value10" value={this.state.value10} onChange={this.handleChange} />
          </label>
          <label>
            E-mail:
            <input type="text" name="value11" value={this.state.value11} onChange={this.handleChange} />
          </label>
          <label>
            Telefono:
            <input type="text" name="value12" value={this.state.value12} onChange={this.handleChange} />
          </label>
          
          <input type="submit" value="Submit" />
          
        </form>
      );
    }
  }