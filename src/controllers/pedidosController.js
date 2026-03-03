import { pedidos } from "../../banco.js"
import { aumentarEstoque, diminuirEstoque } from "../services/livrosService.js"
import { adicionarPedido, buscarPedidos, deletarPedido, trocarStatus } from "../services/pedidosService.js"

export async function getPedidos(req,res){
    try {
        const pedidos=await buscarPedidos()
        res.status(200).send(pedidos)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postPedidos(req,res){
    const {idUsuario,idLivro}=req.params
    try {
        //diminuirEstoque(idLivro)
        adicionarPedido({idUsuario,idLivro})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function putPedido(req,res){
    const {id}=req.params
    try {
        await trocarStatus(id)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function deletePedido(req,res){
    const {id}=req.params
    try {
        await deletarPedido(id)
        //aumentarEstoque(idLivro)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}