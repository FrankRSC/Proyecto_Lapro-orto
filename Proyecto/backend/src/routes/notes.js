const {Router} = require('express');
const router = Router();

const {getNotes, createNote, getNote,deleteNote,updateNote} = require('../controllers/notes.controller');

router.route('/')
    //Obtener
    .get(getNotes)
    //Agregar
    .post(createNote);

router.route('/:id')
    .get(getNote)
    //Actualizar algo en el servidor
    .put(updateNote)
    //Borrar
    .delete(deleteNote);


module.exports = router;