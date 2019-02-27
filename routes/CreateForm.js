const Joi = require('joi');
const Models = require('../FormsDB/models');

// Check radix parameter for ParseInt

const createNewForm = async (request, h) => {
  const { FormName, FormFields, NumberOfFields } = request.payload;
  try {
    return await Models.Forms.createForm(FormName, FormFields, parseInt(NumberOfFields, 10));
  } catch (err) {
    return err;
  }
};


module.exports = {
  method: 'POST',
  path: '/createform',
  config: {
    validate: {
      payload: {
        FormName: Joi.string().required(),
        FormFields: Joi.string().required(),
        NumberOfFields: Joi.string().required(),
      },
    },
  },
  handler: createNewForm,
};
