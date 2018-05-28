'use strict';
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    request = require('request'),
    fs = require("fs"),
    apicache = require('apicache').options({ debug: true }).middleware,
    weatherKey = process.env.WEATHER_KEY,
    newsKey = process.env.NEWS_KEY,
    weatherUrl = 'https://api.forecast.io/forecast/' + weatherKey + '/36.1820800,-86.7278270',
    newsUrl = 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=' + newsKey,
    quoteUrl = 'http://quotes.rest/qod.json';

// app.set('view engine', 'jade')
app.use(express.static('public'))
app.get('/');

app.get('/api/weather', apicache('10 minutes'), function (req, res) {
  request.get(weatherUrl, function (err, response, body){
    if (err) throw err;
    res.header('Access-Controll-Allow-Origin', '*');
    const weather = JSON.parse(body);
    res.send(weather)
  })
})

app.get('/api/news', apicache('1 hour'), function (req, res){
  request.get(newsUrl, function (err, response, body){
    if (err) throw err;
    const news = JSON.parse(body);
    res.send(news)
  })
})

app.get('/api/quote', apicache('12 hours'), function (req, res){
  request.get(quoteUrl, function (err, response, body){
    if (err) throw err;
    const quote = JSON.parse(body);
    res.send(quote)
  })
})

app.get('/api/map', apicache('10 mins'), function (req, res) {
  let mapContent = fs.readFileSync("map.json");
  const jsonMapContent = JSON.parse(mapContent);
  res.send(jsonMapContent);
})

app.listen(PORT, function () {
  console.log('App listening on port' + PORT);
});
