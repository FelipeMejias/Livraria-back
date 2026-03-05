import dotenv from "dotenv";
dotenv.config();
const CODIGOADMIN=process.env.CODIGOADMIN
export async function validateAdmin(req,res,next){
    const adminCode = req.headers['admincode']
    try{
        if(adminCode!=CODIGOADMIN){
            return res.sendStatus(400)
        }else{
            return next()
        }
    }catch{res.sendStatus(500)}
    
}