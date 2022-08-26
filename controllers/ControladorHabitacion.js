import{ServicioHabitacion} from '../services/servicioHabitacion.js'

export class ControladorHabitacion{


    constructor(){}

    //buscar habitaciones
    buscarHabitaciones(request,response){

        //llsmo sl servicio
        let servicioHabitacion=new servicioHabitacion()

        //Intento resolver la PETICION
        try{
           response.status(200).json({
            mensaje:"exito en la consulta",
            datos:servicioHabitacion.buscarTodas()
           }) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //buscar habitacion por id
    buscarHabitacionPorId(request,response){
        let identificador=request.params.id
        
         //llsmo sl servicio
         let servicioHabitacion=new servicioHabitacion()
        try{
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos: servicioHabitacion.buscarPorId(identificador)

            })   
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //agregar habitacion
    agregarHabitacion(request,response){
        let cuerpo=request.body

         //llsmo sl servicio
         let servicioHabitacion=new servicioHabitacion()
    
        try{
            servicioHabitacion.agregar(cuerpo)
            response.status(200).json({
                mensaje:"exito agregando la habitacion",
                datos:null
            }) 
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //editar habitacion
    editarHabitacion(request,response){

        //recibir id como parametro
        let id=request.params.id

        //recibir los datos con los que voy a editar
        let datos=request.body

         //llsmo sl servicio
         let servicioHabitacion=new servicioHabitacion()

        try{
            servicioHabitacion.actualizar(id,datos)
            response.status(200).json({
                mensaje:"exito editando la habitacion",
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
    eliminarHabitacion(request,response){
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