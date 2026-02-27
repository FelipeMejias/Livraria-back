import Router from 'express'
import { postLogin, postCadastro } from '../controllers/usuariosController.js';

export const usuariosRouter=Router()

usuariosRouter.post('/usuarios/login', postLogin )
usuariosRouter.post('/usuarios/cadastro', postCadastro )