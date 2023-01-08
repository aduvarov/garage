const express = require('express');
const router = express.Router();
const { getEvents, getEvent } = require('../controllers/apiController');

router.get('/events', getEvents);
router.get('/events/:id', getEvent);

module.exports = router;
