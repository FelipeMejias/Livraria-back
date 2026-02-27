import { pedidos } from "../../banco.js"

export function adicionarPedido(pedido){
    pedidos.push(pedido)
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