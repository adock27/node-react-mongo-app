// Entity route
const express = require('express');
const router = express.Router();
const entityController = require('../controllers/EntityController');
const jwt = require("../shared/jwt");
// api/entities
router.post('/', entityController.createEntity);
router.get('/',jwt.authApply(), entityController.getAllEntities);
router.get('/:id', entityController.getEntity);
router.put('/:id', entityController.updateEntity);
router.delete('/:id', entityController.deleteEntity);

module.exports = router;