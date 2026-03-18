import { adicionarPedido, buscarPedidos, buscarTodosPedidos, deletarPedido, trocarStatus } from "../services/pedidosService.js"

export async function getPedidos(req,res){
    const {id}=req.params
    try {
        const pedidos=await buscarPedidos(id)
        res.status(200).send(pedidos)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function getTodosPedidos(req,res){
    try {
        const pedidos=await buscarTodosPedidos()
        res.status(200).send(pedidos)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postPedidos(req,res){
    const {idUsuario,idLivro}=req.params
    try {
        adicionarPedido({idUsuario,idLivro})
        console.log('Pedido criado!')
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function putPedido(req,res){
    const {id}=req.params
    try {
        await trocarStatus(id)
        console.log('Pedido alterado!')
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function deletePedido(req,res){
    const {id}=req.params
    try {
        await deletarPedido(id)
        console.log('Pedido deletado!')
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}