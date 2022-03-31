'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Document.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    file: DataTypes.BLOB("long"),
    tags: DataTypes.ARRAY(DataTypes.STRING),
    userId: {
      type: DataTypes.UUID,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId',
        }
    }
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};
