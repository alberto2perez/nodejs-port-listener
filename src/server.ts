import express from 'express';
import text from 'express'
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const PORT_RECEIVER = process.env.PORT_RECEIVER || 8080;
const PORT_SERVER = process.env.PORT_SERVER || 8888;

let dataReceived = ''

app.use(bodyParser.text())

app.get('*',(req,res) => {
  res.send(dataReceived);
});

app.post('*',(req,res) => {
  dataReceived = req.body
  res.send(dataReceived);
});

app.listen(PORT_SERVER, () => {
  console.log(
    `Server running on ${PORT_SERVER}.`
  )
});

app.listen(PORT_RECEIVER, () => {
  console.log(
    `Server running on ${PORT_RECEIVER}.`
  )
});
