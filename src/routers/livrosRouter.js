import Router from 'express'
import { deleteLivro, getLivros, postLivros } from '../controllers/livrosController.js'
import { validateAdmin } from '../middlewares/validateAdmin.js'

export const livrosRouter=Router()

livrosRouter.get('/livros', getLivros )
livrosRouter.post('/livros', validateAdmin, postLivros )
livrosRouter.delete('/livros/:id', validateAdmin, deleteLivro )