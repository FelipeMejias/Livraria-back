import { buscarLivros, adicionarLivro } from "../services/livrosService.js"

export async function getLivros(req,res){
    try {
        const resposta=await buscarLivros()
        res.status(200).send(resposta)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postLivros(req,res){
    const {titulo,tema,paginas:paginasStr,preco:precoStr,estoque:estoqueStr}=req.body
    try {
        const estoque=parseInt(estoqueStr)
        const paginas=parseInt(paginasStr)
        const preco=parseFloat(precoStr)
        await adicionarLivro({titulo,tema,paginas,preco,estoque})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}