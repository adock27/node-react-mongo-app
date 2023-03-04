const Employee = require("../models/EmployeeModel");


exports.createEmployee = async (req, res) => {

    try {
        let employee;

        // Creamos nuestro Employee
        employee = new Employee(req.body);

        await employee.save();
        res.send(employee);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getEmployee = async (req, res) => {

    try {
        let employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg: 'No existe la entidad' })
        }
        return res.json(employee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: 'Hubo un error' });
    }
}






exports.getAllEmployees = async (req, res) => {

    try {

        const employee = await Employee.find();
        res.json(employee)

    } catch (error) {
        res.status(500).send('Hubo un error');
    }

}

exports.getEmployeesByEntityId = async (req, res) => {

    try {

        const employee = await Employee.find({ "_entityId": req.params.id });
        res.json(employee)

    } catch (error) {
        res.status(500).send('Hubo un error');
    }

}

exports.updateEmployee = async (req, res) => {

    try {
        const { _entityId, name, position } = req.body;
        let employee = await Employee.findById(req.params.id);

        if (!employee) {
            res.status(404).json({ msg: 'No existe el Employee' })
        }

        employee._entityId = _entityId;
        employee.name = name;
        employee.position = position;

        employee = await Employee.findOneAndUpdate({ _id: req.params.id }, employee, { new: true })
        res.json(employee);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deleteEmployee = async (req, res) => {

    try {
        let employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ msg: 'No existe el Employee' })
        }

        await Employee.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Entidad eliminada con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}