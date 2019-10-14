const usuarioCtrl = {};
const pool = require('../database');
//importar el modelo de la base de datos que esta en el archivo Usuario



//Obtener
usuarioCtrl.getUsuarios =  async (req, res) => {
    const clientes = await pool.query('SELECT * FROM CLIENTE');
     res.send(clientes);
}

//Agregar
usuarioCtrl.createUsuario =  async (req, res) => {
    const {nombre, apellidoP, apellidoF, direccion, telefono, corre, contraseña} = req.body
    const newCliente = {
        nombre, 
        apellidoP, 
        apellidoF, 
        direccion, 
        telefono,
        corre, 
        contraseña
    }
    await pool.query('INSERT INTO CLIENTE set ?', [newCliente])
    console.log(newCliente);
    res.send('adasdadad')
}

 

usuarioCtrl.getUsuario = async (req, res) => {
   
    const a = req.params.id;
    console.log(a);
    const cliente = await pool.query('SELECT * FROM CLIENTE WHERE corre =  ?', req.params.id );
    console.log(cliente);
    res.send(cliente)
}

//Actualizar nota
usuarioCtrl.updateUsuario = async (req, res) => {
    //estoy obteniendo los datos para mandarlos a un formulario
    const cliente = await pool.query('SELECT * FROM cliente WHERE clave_cliente = ?', [req.params.id]);
    res.send('adasdadad')
}



usuarioCtrl.deleteUsuario = async (req, res) => {
   await pool.query('DELETE FROM links WHERE clave_cliente = ?', [req.params.id]);
   //res.redirect('/')
   res.send('Eliminado')
}

module.exports = usuarioCtrl;