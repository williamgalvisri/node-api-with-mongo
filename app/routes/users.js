const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/users');
const { checkOrigin } = require('../middleware/origin');
const router = express.Router();



router.get('/', checkOrigin ,getItems);

router.get('/:id', checkOrigin, getItem);

router.post('/', checkOrigin, createItem);

router.patch('/', checkOrigin, updateItem);

router.delete('/:id', checkOrigin, deleteItem);

module.exports = router;