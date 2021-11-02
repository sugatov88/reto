const express = require('express');
const app = express();
const route = express.Router();
const mongoose = require('mongoose');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion base de datos

mongoose.connect("mongodb+srv://sugatov88:mRMONGODB215487@ciclo4cluster.mbfzy.mongodb.net/retoMongoDB?retryWrites=true&w=majority")

// operaciones CRUD

app.use(route)
app.listen(3000, ()=> {
    console.log("servidor corriendo en el puerto 3000");
})