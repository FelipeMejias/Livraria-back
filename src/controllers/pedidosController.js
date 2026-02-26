import { pedidos } from "../../banco.js"
import { getLivroById } from "../../utils.js"

export async function getPedidos(req,res){
    try {
        const resposta=pedidos.map(pedido=>{
            const usuario=getLivroById(pedido.idUsuario)
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
        produtos.push({id,idUsuario,idLivro,status:'Pago'})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}