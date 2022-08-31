import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    constructor(){}

        async buscarTodas(){
            let reservas=await modeloReserva.find()
            return reserva
        }

        async buscarPorId(id){
            let reserva=await modeloReserva.findById
            return reserva
        }

        async agregar(datos){
            let reservaAguardar=new modeloReserva(datos)
            return await reservaAguardar.save()
        }

        async actualizar(id,datos){
            return modeloReserva.findByIdAndUodate(id,datos)

        }
    
}