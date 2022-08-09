import express from 'express'

import diaryRouter from './routes/diaries'
const app = express()

app.use(express.json()) // middleware que transffroma la req.body en un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Alguien hizo un ping ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})
