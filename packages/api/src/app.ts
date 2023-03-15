import express from 'express'
import { CARDAPIO_TRANSLATIONS } from './cardapio-translations'
import { config } from '@configs/config'
import { CardapioAPI } from '@externals/api/cardapio.api'
import { HealthcheckAPI } from '@externals/api/healthcheck.api'
import { connect } from '@externals/mongodb/connect'

// connect to mongodb
connect()

const app = express()

app.get('/', (req, res) => {
  res.json(CARDAPIO_TRANSLATIONS)
})

// configure healthcheck endpoint
HealthcheckAPI.configure(app)

// configure cardapio api
CardapioAPI.configure(app)

// start server
app.listen(config.port, '0.0.0.0', () => {
  console.log(`[${config.appName}][${config.env}] listening on port ${config.port}!`)
})