//importar a mongoose
import mongoose from "mongoose";

//esquema de datos de mongoose, el esquema es una regla de datos voy a manipular
const Schema = mongoose.Schema;

const habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:String,
        required:false
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})
//crear una constante en base al esquema
export const modeloHabitacion=mongoose.model('habitacion', habitacion)