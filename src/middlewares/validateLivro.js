
export async function validateLivro(req,res,next){
    const {tema,paginas:paginasStr,preco:precoStr}=req.body
    const temasPossiveis=['Fantasia','Romance','Suspense','Tecnologia','História']
    try{
        if(!temasPossiveis.includes(tema)){
            console.log('Tema inválido')
            return res.status(400).send('Tema inválido')
        }
        const paginas=parseInt(paginasStr)
        const preco=parseFloat(precoStr)
        if(isNaN(paginas)){
            console.log('Número de páginas inválido')
            return res.status(400).send('Número de páginas inválido')
        }
        if(isNaN(preco)){
            console.log('Preço inválido')
            return res.status(400).send('Preço inválido')
        }
        res.locals.paginas=paginas
        res.locals.preco=preco
        next()
    }catch{res.sendStatus(500)}
    
}