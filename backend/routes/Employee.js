// Entity route
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const jwt = require("../shared/jwt");
// api/entities
router.post('/', jwt.authApply() ,employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);
router.get('/entity/:id', employeeController.getEmployeesByEntityId);

module.exports = router;