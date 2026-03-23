import request from 'supertest'
import app from './index.js' 
import { faker } from '@faker-js/faker'
describe('POST Livros', () => {
  it('deve criar um livro', async () => {
    const {titulo,tema,paginas,preco}=gerarLivroFake()
    const res = await request(app)
      .post('/livros')
      .set('Accept', 'application/json')
      .set('admincode', 'admin2026novocodigo') 
      .send({
        titulo,
        tema,
        paginas,
        preco
      })
    expect(res.statusCode).toBe(201)
  })
})

function gerarLivroFake() {
  const temas = ['Fantasia','Romance','Suspense','Tecnologia','História']
  return {
    titulo: faker.book.title(), 
    tema: temas[Math.floor(Math.random() * temas.length)],
    paginas: String(Math.floor(Math.random() * (500 - 100 + 1)) + 100),
    preco: (Math.random() * (200 - 50) + 50).toFixed(2)
  }
}