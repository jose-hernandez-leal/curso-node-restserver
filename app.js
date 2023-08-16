require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home',{
    nombre:'jose hernandez',
    titulo: 'curso node'
  });
})

app.get('/generic',  (req, res) => {
  res.render('generic',{
    nombre:'jose hernandez',
    titulo: 'curso node'
  })
})
app.get('/elements',  (req, res) => {
  res.render('elements',{
    nombre:'jose hernandez',
    titulo: 'curso node'
  })
})


app.get('*',  (req, res) => {
  res.sendFile(__dirname +'/public/404.html')
})

app.listen(port)