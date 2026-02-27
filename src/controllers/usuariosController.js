import bcrypt from 'bcrypt'
import { db } from '../../db.js'
export async function postLogin(req,res){
    const {username,senha}=req.body
    try {
        const usuario = await db.collection("usuarios").findOne({username})
        if(!usuario)return res.sendStatus(404)
        if(bcrypt.compareSync(senha, usuario.hashSenha)){
            delete usuario.hashSenha
            res.status(200).send(usuario)
        }else{
            res.sendStatus(422)
        }
    } catch (error) {
        res.sendStatus(500)
    }
}
export async function postCadastro(req,res){
    const {username,senha}=req.body
    try {
        const SALT = 10
        const hashSenha = bcrypt.hashSync(senha, SALT)
        await db.collection("usuarios").insertOne({username,hashSenha})
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}