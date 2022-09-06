import express from 'express'

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

//variable para personalizar las rutas (ENDPOINTS) de mis servicios
export let rutas=express.Router()


//escribo mis rutas (cada ruta es un servicio)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

rutas.get('/viajescomfama/v1/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/viajescomfama/v1/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/viajescomfama/v1/habitacion',controladorHabitacion.agregarHabitacion)
rutas.put('/viajescomfama/v1/habitacion/:id',controladorHabitacion.editarHabitacion)




//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS
rutas.get('/viajescomfama/reservas',controladorReserva.buscarReservas)
rutas.get('/viajescomfama/reserva/:id',controladorReserva.buscarReservaPorId)
rutas.post('/viajescomfama/reserva',controladorReserva.agregarReserva)
rutas.put('/viajescomfama/reserva/:id',controladorReserva.editarReserva)
rutas.delete('/viajescomfama/reserva/:id',controladorReserva.eliminarReserva)

