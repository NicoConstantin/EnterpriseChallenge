const express = require('express');
const router = express.Router();
const enterpriseRoute = require('./enterprise/enterpriseRoute.js');


router.use('/enterprise', enterpriseRoute);

module.exports = router;