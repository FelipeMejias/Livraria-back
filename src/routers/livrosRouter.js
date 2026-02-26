import Router from 'express'
import { getLivros, postLivros } from '../controllers/livrosController.js'

export const livrosRouter=Router()

livrosRouter.get('/livros', getLivros )
livrosRouter.post('/livros', postLivros )