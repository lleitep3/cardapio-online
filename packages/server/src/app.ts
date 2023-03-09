import express from 'express'

const app = express()

app.get('/healthcheck', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.send({ status: 'ok' })
})

app.listen(5000, '0.0.0.0', () => {
  console.log('Example app listening on port 5000!')
})