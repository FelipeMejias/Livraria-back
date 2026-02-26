import { livros, usuarios } from "./banco.js"

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