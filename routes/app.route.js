const express = require('express');
const appController = require('../controllers/app.controller');

const router = express.Router();

router.post('/prime-numbers', appController.primeNumbers);

module.exports = router;
