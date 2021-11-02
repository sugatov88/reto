const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const usuarioSchema=require('./Modelos/Usuarios.js');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion base de datos

mongoose.connect("mongodb+srv://sugatov88:mRMONGODB215487@ciclo4cluster.mbfzy.mongodb.net/retoMongoDB?retryWrites=true&w=majority")

// operaciones CRUD
router.get ('/',(req, res)=>{
    res.send(
        "inicio del primer API"
    );
});
// insertar 
router.post('/Usuario', (req, res)=>{
    let nuevoUsuario= new usuarioSchema({

        IdUsuario: req.body.id,
        nombresUsuario : req.body.nombres,
        ApellidosUsuario: req.body.apellidos,
        direccionUsusario : req.body.direccion,
        emailUsuario : req.body.email,
        telUsuario: req.body.telefono,
        celUsuario:req.body.celular,
        linkUsuario:req.body.link,
        perfilUsuario :req.body.perfil
   
    });
    nuevoUsuario.save(function(err, datos){
if(err){
    console.log(err);
}
res.send("Usuario guardado con éxito");

    })
    
})
app.use(router)
app.listen(3000, ()=> {
    console.log("servidor corriendo en el puerto 3000");
})