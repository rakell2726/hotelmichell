//importar a mongoose
import mongoose from "mongoose";

//esquema de datos de mongoose, el esquema es una regla de datos voy a manipular
const Schema = mongoose.Schema;

const Reserva=new Schema({

    idHabitacion:{
        type:String,
        required:true
    },
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    numeroNiños:{
        type:Number,
        required:false
    },
    numeroAdultos:{
        type:Number,
        required:true
    },
    valorReserva:{
        type:Number,
        required:true
    }
})
//crear una constante en base al esquema
const modeloReserva=mongoose.model('reserva', Reserva)