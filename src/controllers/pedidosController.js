import { pedidos } from "../../banco.js"
import { getLivroById, getPedidoById, getUsuarioById } from "../../utils.js"
import { aumentarEstoque, diminuirEstoque } from "../services/livrosService.js"
import { adicionarPedido, trocarStatus } from "../services/pedidosService.js"

export async function getPedidos(req,res){
    try {
        const resposta= pedidos.map(pedido=>{
            const usuario=getUsuarioById(pedido.idUsuario)
            const livro=getLivroById(pedido.idLivro)
            return {...pedido,usuario,livro}
        })
        res.status(200).send(resposta)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postPedidos(req,res){
    const {idUsuario:idUsuarioStr,idLivro:idLivroStr}=req.params
    try {
        const idUsuario=parseInt(idUsuarioStr)
        const idLivro=parseInt(idLivroStr)
        const id=pedidos.length+1
        diminuirEstoque(idLivro)
        adicionarPedido({id,idUsuario,idLivro,status:'Pago'})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function putPedido(req,res){
    const {id:idStr}=req.params
    try {
        const id=parseInt(idStr)
        trocarStatus(id)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function deletePedido(req,res){
    const {id:idStr}=req.params
    try {
        console.log('cheguei')
        const id=parseInt(idStr)
        const {idLivro}=getPedidoById(id)
        aumentarEstoque(idLivro)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}