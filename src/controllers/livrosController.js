import { buscarLivros, adicionarLivro, deletarLivro } from "../services/livrosService.js"

export async function getLivros(req,res){
    try {
        const resposta=await buscarLivros()
        res.status(200).send(resposta)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postLivros(req,res){
    const {titulo,tema,paginas:paginasStr,preco:precoStr}=req.body
    try {
        const paginas=parseInt(paginasStr)
        const preco=parseFloat(precoStr)
        await adicionarLivro({titulo,tema,paginas,preco})
        console.log('Livro criado!')
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function deleteLivro(req,res){
    const {id}=req.params
    try {
        await deletarLivro(id)
        console.log('Livro deletado!')
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}