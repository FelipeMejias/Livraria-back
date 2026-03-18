import dotenv from "dotenv";
dotenv.config();
const CODIGOADMIN=process.env.CODIGOADMIN
export async function validateAdmin(req,res,next){
    const adminCode = req.headers['admincode']
    try{
        if(adminCode!=CODIGOADMIN){
            console.log('Essa rota necessita validação de administrador')
            return res.status(400).send('Código de administrador incorreto')
        }
        next()
    }catch{res.sendStatus(500)}
    
}