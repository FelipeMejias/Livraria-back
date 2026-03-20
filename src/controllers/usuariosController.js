import bcrypt from 'bcrypt'
import { connectDB } from '../../db.js'
import dotenv from "dotenv";
dotenv.config();
const CODIGOADMIN=process.env.CODIGOADMIN

export async function postLogin(req,res){
    const {username,senha}=req.body
    try {
        const db = await connectDB();
        const usuario = await db.collection("usuarios").findOne({username})
        if(!usuario){
            return res.status(422).send('Não existe usuário com esse username')
        }
        if(!bcrypt.compareSync(senha, usuario.hashSenha)){
            return res.status(422).send('A senha está incorreta')
        }
        delete usuario.hashSenha
        if(usuario.tipo=='Admin'){
            usuario.codigo=CODIGOADMIN
        }
        console.log('Usuário logado!')
        res.status(200).send(usuario)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export async function postCadastro(req,res){
    const {username,senha,tipo,codigo}=req.body
    try {
        const db = await connectDB();
        const usuarioExistente= await db.collection("usuarios").findOne({username:username})
        if(usuarioExistente){
            return res.status(422).send('Já existe um usuário com esse username')
        }
        if(tipo=='Admin' && codigo!=CODIGOADMIN){
            return res.status(422).send('O código de administrador está incorreto')
        }
        const SALT = 10
        const hashSenha = bcrypt.hashSync(senha, SALT)
        await db.collection("usuarios").insertOne({username,hashSenha,tipo})
        console.log('Usuário cadastrado!')
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}