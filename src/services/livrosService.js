import { connectDB } from "../../db.js"
import { ObjectId } from "mongodb"
export async function adicionarLivro(livro){
    try {
        const db = await connectDB();
        await db.collection("livros").insertOne(livro)
    } catch (error) {
        console.log(error)
    }
}
export async function buscarLivros(){
    try {
        const db = await connectDB();
        const livros =await db.collection('livros').find({}).toArray()
        return livros
    } catch (error) {
        console.log(error)
    }
}
export async function deletarLivro(id){
    try {
        const db = await connectDB();
        await db.collection("livros").deleteOne({
            _id: new ObjectId(id)
        })
    } catch (error) {
        console.log(error)
    }
    
}