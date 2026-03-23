import cors from 'cors'
import Express, {json} from 'express'

import { usuariosRouter } from './src/routers/usuarioRouter.js';
import { livrosRouter } from './src/routers/livrosRouter.js';
import { pedidosRouter } from './src/routers/pedidosRouter.js';


const app=Express()
app.use(cors())
app.use(json())


app.use(usuariosRouter)
app.use(livrosRouter)
app.use(pedidosRouter)

const port =process.env.PORT||4000
app.listen(port,()=>console.log(`listening on port ${port}`))

export default app
