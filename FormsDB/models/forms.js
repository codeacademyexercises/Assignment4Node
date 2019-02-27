

module.exports = (sequelize, DataTypes) => {
  const Forms = sequelize.define('Forms', {
    FormName: DataTypes.STRING,
    FormFields: DataTypes.STRING,
    NumberOfFields: DataTypes.INTEGER,
  }, {});
  Forms.associate = function (models) {
    // associations can be defined here
  };

  Forms.createForm = async (FormName, FieldsArray, NumberOfFields) => {
    console.log(await Forms.count({
      where: {
        FormName,
      },
    }));
    if (await Forms.count({
      where: {
        FormName,
      },
    })) {
      return 'FormName already Exists!!';
    }
    return Forms.create({
      FormName, FormFields: FieldsArray, NumberOfFields,
    });
  };

  Forms.GetAllForms = async () => Forms.findAll();

  return Forms;
};
