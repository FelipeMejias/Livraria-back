import Router from 'express'
import bcrypt from "bcrypt";
import { postLogin, postRegistro } from '../controllers/usuariosController.js';

export const usuariosRouter=Router()

usuariosRouter.post('/usuarios/login', postLogin )
usuariosRouter.post('/usuarios/registro', postRegistro )