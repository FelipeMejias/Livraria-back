import Router from 'express'
import { deletePedido, getPedidos, postPedidos, putPedido } from '../controllers/pedidosController.js'

export const pedidosRouter=Router()

pedidosRouter.get('/pedidos', getPedidos )
pedidosRouter.post('/pedidos/:idUsuario/:idLivro', postPedidos )
pedidosRouter.put('/pedidos/:id', putPedido )
pedidosRouter.delete('/pedidos/:id', deletePedido )