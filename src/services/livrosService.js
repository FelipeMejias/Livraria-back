import { db } from "../../db.js"
import { ObjectId } from "mongodb"
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
export async function deletarLivro(id){
    await db.collection("livros").deleteOne({
        _id: new ObjectId(id)
    })
}