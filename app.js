"use strict";

const express = require('express');
const app = express();
const PORT = 3000;

const { CONVERSION_FACTORS, UNITS, pluralizer } = require('./units.js');

app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// url validation middleware
app.use('/:unitType', (req, res, next) => {
  if (!Object.keys(UNITS).includes(req.params.unitType)) {
    res.status(404).send(`Invalid unit type (valid unit types: ${Object.keys(UNITS).join(", ")})`);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.redirect('/length')
});

app.route('/:unitType')
  .get((req, res) => {
    res.render('unit-converter', { 
      unitType: req.params.unitType, 
      units: UNITS[req.params.unitType], 
    });
  })
  .post((req, res) => {
    res.render('unit-converter', { 
      unitType: req.params.unitType,
      units: UNITS[req.params.unitType],
      convertFrom: req.body.convertFrom,
      convertTo: req.body.convertTo,
      unconvertedAmount: Number(req.body.unconvertedAmount),
      convertedAmount: 
        CONVERSION_FACTORS[req.params.unitType]
        [req.body.convertFrom][req.body.convertTo](req.body.unconvertedAmount),
      pluralizer
    });
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});