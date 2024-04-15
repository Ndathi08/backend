const express = require('express');
const router = express.Router();
const catController = require('./controllers/catController');

router.get('/', catController.read);
router.get('/addCat/:name', catController.create);

module.exports = router;
