const bodyParser = require('body-parser')

const pokemon = require('./pokemonRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    pokemon
  )
}
