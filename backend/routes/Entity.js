// Entity route
const express = require('express');
const router = express.Router();
const entityController = require('../controllers/EntityController');
const jwt = require("../shared/jwt");
// api/entities
router.post('/',jwt.authApply(), entityController.createEntity);
router.get('/', entityController.getAllEntities);
router.get('/:id', entityController.getEntity);
router.put('/:id',jwt.authApply(), entityController.updateEntity);
router.delete('/:id',jwt.authApply(), entityController.deleteEntity);

module.exports = router;