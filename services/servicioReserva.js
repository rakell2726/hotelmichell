import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    constructor(){}

        async buscarTodas(){
            let reservas=await modeloReserva.find()
            return reservas
        }

        async buscarPorId(id){
            let reserva=await modeloReserva.findById(id)
            return reserva
        }

        async agregar(datos){
            let reservaAguardar=new modeloReserva(datos)
            return await reservaAguardar.save(datos)
        }

        async actualizar(id,datos){
            return modeloReserva.findByIdAndUpdate(id,datos)
        }
        async eliminar(id){
            return modeloReserva.findByIdAndDelete(id)
        }
    
}