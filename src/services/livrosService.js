import { db } from "../../db.js"

export async function adicionarLivro(livro){
    try {
        await db.collection("livros").insertOne(livro)
    } catch (error) {
        console.log(error)
    }
}
export async function buscarLivros(){
    try {
        const livros =await db.collection('livros').find({}).toArray()
        return livros
    } catch (error) {
        console.log(error)
    }
}
export function diminuirEstoque(id){
    
}
export function aumentarEstoque(id){
    
}