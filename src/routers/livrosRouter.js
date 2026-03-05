import Router from 'express'
import { getLivros, postLivros } from '../controllers/livrosController.js'
import { validateAdmin } from '../middlewares/validateAdmin.js'

export const livrosRouter=Router()

livrosRouter.get('/livros', getLivros )
livrosRouter.post('/livros', validateAdmin, postLivros )