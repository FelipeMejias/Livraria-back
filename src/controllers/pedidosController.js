import { pedidos } from "../../banco.js"

export async function getPedidos(req,res){
    try {
        res.status(200).send(pedidos)
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
        produtos.push({id,idUsuario,idLivro,status:'Realizado'})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}