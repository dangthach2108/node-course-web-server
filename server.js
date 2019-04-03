const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
});

app.get('/', (req, res) => {
  // res.send('Hello Express!');
  res.send({
    name: 'ThachDang',
    like: [
      'Biking',
      'Cities'
    ]
  });
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs')
// });

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    'pageTitle': 'About Page',
  });
});

app.get('/home', (req, res) => {
  res.render('home.hbs', {
    'pageTitle': 'Home Page',
    'welcomeMessage': 'Welcome Home Page',
  })
});



app.listen(port);
