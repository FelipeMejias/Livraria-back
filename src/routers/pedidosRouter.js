import Router from 'express'
import { deletePedido, getPedidos, getTodosPedidos, postPedidos, putPedido } from '../controllers/pedidosController.js'

export const pedidosRouter=Router()

pedidosRouter.get('/pedidos', getTodosPedidos )
pedidosRouter.get('/pedidos/:id', getPedidos )
pedidosRouter.post('/pedidos/:idUsuario/:idLivro', postPedidos )
pedidosRouter.put('/pedidos/:id', putPedido )
pedidosRouter.delete('/pedidos/:id', deletePedido )