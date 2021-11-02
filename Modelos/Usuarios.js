const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    IdUsuario: Number,
    nombresUsuario : String,
    ApellidosUsuario: String,
    direccionUsusario : String,
    emailUsuario : String,
    telUsuario: String,
    celUsuario:String,
    linkUsuario:String,
    perfilUsuario :String



});

module.exports= mongoose.model('usuario',usuarioSchema, 'Usuarios');
//     IdUsuario: Number,
//     nombresUsuario : String,
//     ApellidosUsuario: String,
//     direccionUsusario : String,
//     emailUsuario : String,
//     telUsuario: String,
//     celUsuario:String,
//     linkUsuario:String,
//     perfilUsuario :String


