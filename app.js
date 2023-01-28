require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

app.get('/weather', (req, res) => {
  const location = req.query.location;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  request(url, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const data = JSON.parse(body);
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
