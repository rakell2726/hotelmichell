import{ServicioHabitacion} from '../services/servicioHabitacion.js'

export class ControladorHabitacion{


    constructor(){}

    //buscar habitaciones
    async buscarHabitaciones(request,response){

        //llsmo sl servicio
        let servicioHabitacion=new ServicioHabitacion()

        //Intento resolver la PETICION
        try{
           response.status(200).json({
            mensaje:"exito en la consulta",
            datos:await servicioHabitacion.buscarTodas()
           }) 
        }catch(error){ //FALLO RESOLVIENDO LA PETICION
            response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
            })
        }
    }

    //buscar habitacion por id
    async buscarHabitacionPorId(request,response){
        let identificador=request.params.id
        
         //llsmo sl servicio
         let servicioHabitacion=new ServicioHabitacion()
        try{
            response.status(200).json({
                mensaje:"exito en la consulta "+identificador,
                datos: await servicioHabitacion.buscarPorId(identificador)

            })   
         }catch(error){ //FALLO RESOLVIENDO LA PETICION
             response(400).json({
                mensaje:"fallo en la consulta "+error,
                datos:null
             })
         }
    }

    //agregar habitacion
    async agregarHabitacion(request,response){
        let cuerpo=request.body

         //llsmo sl servicio
         let servicioHabitacion=new ServicioHabitacion()
    
        try{
            await servicioHabitacion.agregar(cuerpo)
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
    async editarHabitacion(request,response){

        //recibir id como parametro
        let id=request.params.id

        //recibir los datos con los que voy a editar
        let datos=request.body

         //llsmo sl servicio
         let servicioHabitacion=new ServicioHabitacion()

        try{
            await servicioHabitacion.actualizar(id,datos)
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