'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static(`${__dirname}/build`));

app.listen(process.env.PORT,() => {
  console.log('__SERVER_UP__',process.env.PORT);
});
