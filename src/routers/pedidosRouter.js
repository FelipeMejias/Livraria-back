import Router from 'express'
import { deletePedido, getPedidos, getTodosPedidos, postPedidos, putPedido } from '../controllers/pedidosController.js'
import { validateAdmin } from '../middlewares/validateAdmin.js'

export const pedidosRouter=Router()

pedidosRouter.get('/pedidos',validateAdmin, getTodosPedidos )
pedidosRouter.get('/pedidos/:id', getPedidos )
pedidosRouter.post('/pedidos/:idUsuario/:idLivro', postPedidos )
pedidosRouter.put('/pedidos/:id',validateAdmin, putPedido )
pedidosRouter.delete('/pedidos/:id', deletePedido )