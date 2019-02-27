/**
 * @jest-environment node
 */
const server = require('../FormServer.js');

describe('Server ', () => {
  it('route /ping should respond with pong', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('pong');
  });
  it('route /displayforms should return all Forms', async () => {
    const options = {
      method: 'GET',
      url: '/displayforms',
    };
    const response = await server.inject(options);
    expect(response.result.length).not.toEqual(0);
  });
  it('route /createform should return warning message if trying to create a duplicate FormName', async () => {
    const options = {
      method: 'POST',
      url: '/createform',
      payload: {
        FormName: 'Personal Details',
        FormFields: 'FirstName,LastName',
        NumberOfFields: '2',
      },
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('FormName already Exists!!');
  });
});
