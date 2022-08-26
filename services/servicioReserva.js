import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    constructor(){}

        async buscarTodas(){
            let reservas=await modeloReserva.find()
            return reservas
        }

        async buscarPorId(id){
            let reserva=await modeloReserva.findById
        }

        async agregar(datos){
            let reservaAguardar=new modeloReserva(datos)
            return await reservaAguardar.save()
        }

        async actualizar(id,datos){
            return modeloReserva.findByIdAndUodate(id,datos)

        }
    
}