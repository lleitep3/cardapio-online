import express from 'express'
import { config } from './config'

const app = express()

app.get('/', (req, res) => {
  res.send({ status: ':)' })
})

app.get('/healthcheck', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.send({ status: 'ok' })
})

app.listen(config.port, '0.0.0.0', () => {
  console.log(`[${config.appName}][${config.env}] listening on port ${config.port}!`)
})