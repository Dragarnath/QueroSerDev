const { Router } = require('express')
const PokemonController = require('../controllers/PokemonController')

const router = Router()

router.get('/pokemon', PokemonController.TodosPokemons)
router.get('/pokemon/:id', PokemonController.pegarUmPokemon)
router.post('/pokemon', PokemonController.criaPokemon)
router.put('/pokemon/:id', PokemonController.atualizaPokemon)
router.delete('/pokemon/:id', PokemonController.apagaPokemon)

module.exports = router
