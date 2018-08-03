const keys = require('../config/keys');

module.exports = app => {
  app.get('/auth', (req, res) => {
    res.send({ hello: 'auth' });
  });
};
