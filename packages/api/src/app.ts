import express from 'express'
import { config } from './config'

const app = express()

app.get('/', (req, res) => {
  res.send({ status: ':)' })
})

app.listen(config.port, '0.0.0.0', () => {
  console.log(`[${config.appName}][${config.env}] listening on port ${config.port}!`)
})