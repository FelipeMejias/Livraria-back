import dayjs from "dayjs"
import { pedidos } from "../../banco.js"
import { db } from "../../db.js";
import { ObjectId } from "mongodb"
export async function adicionarPedido({idUsuario,idLivro}){
    const data=dayjs().format("YY/MM/DD HH:mm");
    try {
        await db.collection("pedidos").insertOne({
            idUsuario: new ObjectId(idUsuario),
            idLivro: new ObjectId(idLivro),
            status:'Encomendado',
            data
        })
    } catch (error) {
        console.log(error)
    }
}
export async function buscarPedidos(){
    try {
        const pedidos = await db.collection('pedidos').aggregate([
            {
                $lookup: {
                    from: "livros",localField: "idLivro",
                    foreignField: "_id",as: "livro"
                }
            },{
                $lookup: {
                    from: "usuarios",localField: "idUsuario",
                    foreignField: "_id",as: "usuario"
                }
            },
            { $unwind: "$livro" },{ $unwind: "$usuario" }]).toArray()
        return pedidos
    } catch (error) {
        console.log(error)
    }
}
export async function trocarStatus(id){
    const pedido= await db.collection("pedidos").findOne({_id: new ObjectId(id) })
    let novoStatus
    if(pedido.status=='Encomendado'){
        novoStatus='Em entrega'
    }else if(pedido.status=='Em entrega'){
        novoStatus='Finalizado'
    }
    await db.collection("pedidos").updateOne(
        { _id: new ObjectId(id) },
        { $set: { status: novoStatus } }
    )
}
export async function deletarPedido(id){
    await db.collection("pedidos").deleteOne({
        _id: new ObjectId(id)
    })
}