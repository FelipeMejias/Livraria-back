import Router from 'express'
import { getPedidos, postPedidos } from '../controllers/pedidosController.js'

export const pedidosRouter=Router()

pedidosRouter.get('/pedidos', getPedidos )
pedidosRouter.get('/pedidos/:idUsuario/:idLivro', postPedidos )