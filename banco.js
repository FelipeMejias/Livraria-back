export const usuarios=[
    {
        id:1,
        username:'Pedro'
    },
]
export const livros=[
    {
        id:1,
        titulo:'Histórias de Amor',
        tema:'Romance',
        autor:'Maria Campos',
        paginas:320,
        preco:38.50,
        estoque:5
    },
    {
        id:2,
        titulo:'Investigação no Limite',
        tema:'Policial',
        autor:'Alberto Siqueira',
        paginas:250,
        preco:22.50,
        estoque:3
    },
]
export const pedidos=[
    {
        id:1,
        idUsuario:1,
        idLivro:1,
        status:'Pago'
    },
    {
        id:2,
        idUsuario:1,
        idLivro:2,
        status:'Pago'
    }
]
