// Entity route
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

// api/entities
router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;