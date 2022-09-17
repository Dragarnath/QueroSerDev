const database = require('../models')

class PokemonController {
  static async TodosPokemons(req, res) {
    try {
      const TodosPokemons = await database.Pokemon.findAll()
      console.log(database.Pokemon)
      return res.status(200).json(TodosPokemons)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegarUmPokemon(req, res) {
    const { id } = req.params
    try {
      const umPokemon = await database.Pokemon.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(umPokemon)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPokemon(req, res) {
    const novoPokemon = req.body
    try {
      const novoPokemonCriado = await database.Pokemon.create(novoPokemon)
      return res.status(200).json(novoPokemonCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPokemon(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Pokemon.update(novasInfos, { where: { id: Number(id) } })
      const pokemonAtualizado = await database.Pokemon.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(pokemonAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPokemon(req, res) {
    const { id } = req.params
    try {
      await database.Pokemon.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PokemonController
