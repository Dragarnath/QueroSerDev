module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Pokemon',
      [
        {
          name: 'Pikachu',
          ativo: true,
          price: 100,
          role: 'monstrao',
          description: Eletrico,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chamander',
          ativo: true,
          price: 300,
          role: 'monstrao',
          description: Fogo,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pokemon', null, {})
  }
}
