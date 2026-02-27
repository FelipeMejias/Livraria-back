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
            status:'Pago',
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
export function deletarPedido(id){
    const nova=[]
    for(let pedido of pedidos){
        if(pedido.id!=id)nova.push(pedido)
    }
    pedidos=nova
}
export function trocarStatus(id){
    const nova=[]
    for(let pedido of pedidos){
        if (pedido.id==id){
            let novoStatus
            if(pedido.status=='Pago'){
                novoStatus='Em entrega'
            }else if(pedido.status=='Em entrega'){
                novoStatus='Finalizado'
            }
            nova.push({...pedido,status:novoStatus})
        }else{
            nova.push(pedido)
        }
    }
    pedidos=nova
}