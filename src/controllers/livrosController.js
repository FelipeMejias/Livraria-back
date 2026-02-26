import { livros } from "../../banco.js"

export async function getLivros(req,res){
    try {
        res.status(200).send(livros)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postLivros(req,res){
    const {titulo,tema,autor,paginas:paginasStr,preco:precoStr,estoqueStr}=req.body
    try {
        const estoque=parseInt(estoqueStr)
        const paginas=parseInt(paginasStr)
        const preco=parseFloat(precoStr)
        const id=livros.length+1
        livros.push({id,titulo,tema,autor,paginas,preco,estoque})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}