const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

routes(app)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app
