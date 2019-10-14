const {Schema, model} =  require('mongoose');


const userSchema =  new Schema({
    username:{
        type: String,
        required: true,
        //trim limpia espacios en blanco de un string
        trim: true,
        //unique no se puede repetir este campo
        unique: true
    }

},{

    //guarda la fecha de creacion y de actualizacion
    timestamps: true
})

module.exports = model('User', userSchema);