

module.exports = (sequelize, DataTypes) => {
  const Responses = sequelize.define('Responses', {
    FormID: DataTypes.INTEGER,
    Response: DataTypes.STRING,
  }, {});
  Responses.associate = function (models) {
    // associations can be defined here
  };
  return Responses;
};
