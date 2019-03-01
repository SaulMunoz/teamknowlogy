const express = require('express');
const routerDNA = express.Router();

const dnaController = require('../controllers/dna.controller');

// routerDNA.get('/', dnaController.getEmployees);
routerDNA.post('/', dnaController.hasMutation);
// routerDNA.get('/:id', dnaController.getEmployees);
// routerDNA.put('/:id', dnaController.editEmployee);
// routerDNA.delete('/:id', dnaController.deleteEmployee);

module.exports = routerDNA;
