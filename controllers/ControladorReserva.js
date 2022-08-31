import{ServicioReserva} from '../services/servicioReserva.js'

export class ControladorReserva{


    constructor(){}

    //buscar reserva
    buscarReserva(request,response){

        //llsmo sl servicio
        let servicioReserva=new servicioReserva()

        //Intento resolver la PETICION
        try{
           response.status(200).json({
            mensaje:"exito en la consulta",
            datos:servicioReserva.buscarTodas()
           }) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //buscar RESERVA por id
    buscarReservaPorId(request,response){
        let identificador=request.params.id
        
         //llsmo sl servicio
         let servicioReserva=new servicioReserva()
        try{
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos: servicioReserva.buscarPorId(identificador)

            })   
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //agregar reserva
    agregarReserva(request,response){
        let cuerpo=request.body

         //llsmo sl servicio
         let servicioReserva=new ServicioReserva()
    
        try{
            servicioReserva.agregar(cuerpo)
            response.status(200).json({
                mensaje:"exito agregando la reserva",
                datos:null
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //editar reserva
    editarReserva(request,response){

        //recibir id como parametro
        let id=request.params.id

        //recibir los datos con los que voy a editar
        let datos=request.body

         //llsmo sl servicio
         let servicioReserva=new servicioReserva()

        try{
            ServicioReserva.actualizar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la reserva",
                datos:null
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }

    }

    //eliminar habitacion
    eliminarReserva(request,response){
        try{
            response.status(200).json({}) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }
}