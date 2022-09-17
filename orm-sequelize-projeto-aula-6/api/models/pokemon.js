'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define(
    'Pokemon',
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      sizes: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  )
  return Pokemon
}
