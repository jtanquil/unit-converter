"use strict";

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve empty form
app.get('/', (req, res) => {
  res.redirect('/length')
});

app.route('/length')
  .get((req, res) => {
    res.render('unit-converter', { unitType: 'length' });
  })
  .post((req, res) => {
    res.render('unit-converter', { unitType: 'length', ...req.body });
  });

app.route('/weight')
  .get((req, res) => {
    res.render('unit-converter', { unitType: 'weight' });
  });

app.route('/temperature')
  .get((req, res) => {
    res.render('unit-converter', { unitType: 'temperature' });
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});