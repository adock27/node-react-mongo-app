// Entity route
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const jwt = require("../shared/jwt");
// api/entities
router.post('/', jwt.authApply() ,employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployee);
router.put('/:id',jwt.authApply(), employeeController.updateEmployee);
router.delete('/:id',jwt.authApply(), employeeController.deleteEmployee);
router.get('/entity/:id',jwt.authApply(), employeeController.getEmployeesByEntityId);


module.exports = router;