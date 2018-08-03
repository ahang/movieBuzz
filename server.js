const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/User');
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

// Routes
require('./controllers/authRoutes')(app);
require('./controllers/movieRoutes')(app);

const PORT = process.env.PORT || 3090;
app.listen(PORT, () => {
  console.log(`~~ Running on ${PORT} ~~`);
});
