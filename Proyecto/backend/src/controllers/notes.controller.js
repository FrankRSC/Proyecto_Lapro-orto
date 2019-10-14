const notesCtrl = {};

//importar el modelo de la base de datos que esta en el archivo Note
const Note = require('../models/Note');


//Obtener
notesCtrl.getNotes = async (req, res) => {
    //consulta todos los datos que existen en la tabla notas y las guarda en la constante notes en forma de arreglo {}
    const notes = await Note.find();

    res.json(notes)
}

//Agregar
notesCtrl.createNote = async (req, res) => {
    //el req.body contiene todos los campos de la tabla los extraemos para especificar cada uno
    const {title, content,date, author} = req.body;
        //Creamos la nueva nota igualando sus campos a los parametros de arriba
       const newNote = new Note({
            title:title,
            content: content,
            date: date,
            author: author
        });
    await newNote.save();
    res.json({message: 'Note saved'})
}


//te consigue una nota especifica
notesCtrl.getNote = async (req, res) => {
    //req.params.id es el id que le pasaro por el url que esta en la carpeta routas
    //finbyid busca la nota por el id
    const note =  await Note.findById(req.params.id);
    res.json({title: 'asdasdasd'})
}

//Actualizar nota
notesCtrl.updateNote = async (req, res) => {

    const {title, content, author} = req.body;

    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        author: author
    });


    res.json({message: 'Note Updated'})
}



notesCtrl.deleteNote = async(req, res) => {
    await Note.findOneAndDelete({_id: req.params.id});
    res.json({message: 'Note Deleted'})
}

module.exports = notesCtrl;