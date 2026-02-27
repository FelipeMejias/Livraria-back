import { db } from "../../db.js"

export async function criarLivro(livro){
    try {
        await db.collection("livros").insertOne(livro)
    } catch (error) {
        console.log(error)
    }
    
}
export async function buscarLivros(){
    const livros =await db.collection('livros').find({}).toArray()
    return livros
}
export function diminuirEstoque(id){
    
}
export function aumentarEstoque(id){
    
}