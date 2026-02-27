import { livros } from "../../banco.js"
import { buscarLivros, criarLivro } from "../services/livrosService.js"

export async function getLivros(req,res){
    try {
        const resposta=await buscarLivros()
        res.status(200).send(resposta)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postLivros(req,res){
    const {titulo,tema,paginas:paginasStr,preco:precoStr,estoqueStr}=req.body
    try {
        const estoque=parseInt(estoqueStr)
        const paginas=parseInt(paginasStr)
        const preco=parseFloat(precoStr)
        await criarLivro({titulo,tema,paginas,preco,estoque})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}