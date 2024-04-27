const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CommentReply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
      this.belongsTo(models.Comment, { foreignKey: 'commentId', as: 'comment' });
    }
  }
  CommentReply.init(
    {
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'CommentReply',
    }
  );
  return CommentReply;
};
