import { livros, pedidos, usuarios } from "./banco.js"

export function getPedidoById(id){
    for(let pedido of pedidos){
        if(pedido.id==id)return pedido
    }
    return null
}
export function getLivroById(id){
    for(let livro of livros){
        if(livro.id==id)return livro
    }
    return null
}
export function getUsuarioById(id){
    for(let usuario of usuarios){
        if(usuario.id==id)return usuario
    }
    return null
}