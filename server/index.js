const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/models/sync');
const router = require('./routes');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/api/', router);

app.listen(PORT, () => {
  console.log(` app listening on ${PORT}`);
});
