const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
