const express = require('express');
const { getUnixTimestamp } = require('../controllers/timestamp');
const router = express.Router();
router.route('/:date').get(getUnixTimestamp);
module.exports = router;