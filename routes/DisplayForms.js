const Models = require('../FormsDB/models');

const GetAllForms = async () => {
  let Forms;
  try {
    Forms = await Models.Forms.GetAllForms();
  } catch (err) {
    return err;
  }
  return Forms;
};


module.exports = {
  method: 'Get',
  path: '/displayforms',
  handler: GetAllForms,
};
