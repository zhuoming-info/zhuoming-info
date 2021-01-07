import express from 'express';
import axios from 'axios';
import { json } from 'body-parser';
var path = require('path');

const app = express();
app.use(json());

app.use(express.static(path.join(__dirname, 'public')));

const getHtml = () => {
  axios.get('http://111.75.205.67:7080/syq/findsliderain/findSlideRainHandler')
    .then((res) => {
      console.log(res.data.data)
    })
}

setInterval(getHtml, 1000 * 60 * 60);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});