'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express = __importDefault(require('express'))
const app = (0, express.default)()
app.use(express.default.json()) // middleware que transffroma la req.body en un json
const PORT = 3000
app.get('/ping', (_req, res) => {
  console.log('Alguien hizo un ping')
  res.send('pong')
})
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
})
