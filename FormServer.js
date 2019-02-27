const hapi = require('hapi');
const routes = require('./routes');

const server = hapi.Server({
  host: 'localhost',
  port: 3005,
});

const init = async () => {
  server.route(routes);
  await server.start();
};

init();

process.on('SIGINT', () => {
  server.stop({ timeout: 10000 }).then((err) => {
    process.exit((err) ? 1 : 0);
  });
});

module.exports = server;
