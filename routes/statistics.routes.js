const express = require('express');
const routerStats = express.Router();

const statisticsController = require('../controllers/statistics.controller');

routerStats.get('/', statisticsController.getStatistics);

module.exports = routerStats;
