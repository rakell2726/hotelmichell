import {modeloHabitacion} from '../models/modeloDatosHabitcion.js'

export class ServicioHabitacion{

    constructor(){}

        async buscarTodas(){
            let habitaciones=await modeloHabitacion.find()
            return habitaciones
        }

        async buscarPorId(id){
            let habitacion=await modeloHabitacion.findById()
            return habitacion
        }

        async agregar(datos){
            let habitacionAguardar=new modeloHabitacion(datos)
            return await habitacionAguardar.save()
        }

        async actualizar(id,datos){
            return modeloHabitacion.findByIdAndUodate(id,datos)

        }
    
}