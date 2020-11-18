const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

corsConfig = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

app.use(cors(corsConfig));

app.use('/', express.static('public'));
app.use('/demo', express.static('public'));
app.use('/another', express.static('public_another'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
