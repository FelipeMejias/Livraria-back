import { livros } from "../../banco.js";

export function diminuirEstoque(id){
    const nova=[]
    for(let livro of livros){
        if (livro.id==id){
            nova.push({...livro,estoque:livro.estoque-1})
        }else{
            nova.push(livro)
        }
    }
    livros=nova
}
export function aumentarEstoque(id){
    const nova=[]
    for(let livro of livros){
        if (livro.id==id){
            nova.push({...livro,estoque:livro.estoque+1})
        }else{
            nova.push(livro)
        }
    }
    livros=nova
}