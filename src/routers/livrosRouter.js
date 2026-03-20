import Router from 'express'
import { deleteLivro, getLivros, postLivros } from '../controllers/livrosController.js'
import { validateAdmin } from '../middlewares/validateAdmin.js'
import { validateLivro } from '../middlewares/validateLivro.js'

export const livrosRouter=Router()

livrosRouter.get('/livros', getLivros )
livrosRouter.post('/livros', validateAdmin,validateLivro, postLivros )
livrosRouter.delete('/livros/:id', validateAdmin, deleteLivro )