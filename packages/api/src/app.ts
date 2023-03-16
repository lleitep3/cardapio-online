import express from 'express'
import { CARDAPIO_TRANSLATIONS } from './cardapio-translations'
import { config } from '@configs/config'
import { CardapioAPI } from '@/externals/http/cardapio.api'
import { HealthcheckAPI } from '@/externals/http/healthcheck.api'
import { connect } from '@/externals/database/connect'
import { SwaggerAPI } from './externals/swagger/swagger.api'

// connect to mongodb
connect()

const app = express()


app.get('/', (req, res) => {
  res.json(CARDAPIO_TRANSLATIONS)
})

if (config.env !== 'production') {
  SwaggerAPI.configure(app)
}

// configure healthcheck endpoint
HealthcheckAPI.configure(app)

// configure cardapio api
CardapioAPI.configure(app)

// start server
app.listen(config.port, '0.0.0.0', () => {
  console.log(`[${config.appName}][${config.env}] listening on port ${config.port}!`)
})