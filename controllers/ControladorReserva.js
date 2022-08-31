import{ServicioReserva} from '../services/servicioReserva.js'

export class ControladorReserva{


    constructor(){}

    //buscar reserva
    async buscarReserva(request,response){

        //llsmo sl servicio
        let servicioReserva=new ServicioReserva()

        //Intento resolver la PETICION
        try{
           response.status(200).json({
            mensaje:"exito en la consulta",
            datos:await servicioReserva.buscarTodas()
           }) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //buscar RESERVA por id
    async buscarReservaPorId(request,response){
        let identificador=request.params.id
        
         //llsmo sl servicio
         let servicioReserva=new ServicioReserva()
        try{
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos: await servicioReserva.buscarPorId(identificador)

            })   
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //agregar reserva
    async agregarReserva(request,response){
        let cuerpo=request.body

         //llsmo sl servicio
         let servicioReserva=new ServicioReserva()
    
        try{
            await servicioReserva.agregar(cuerpo)
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
    async editarReserva(request,response){

        //recibir id como parametro
        let id=request.params.id

        //recibir los datos con los que voy a editar
        let datos=request.body

         //llsmo sl servicio
         let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.actualizar(id,datos)
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