const Employee = require("../models/EmployeeModel");


exports.createEmployee = async (req, res) => {

    try {
        let employee;

        // Creamos nuestro Employee
        employee = new Employee(req.body);

        await Employee.save();
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
            res.status(404).json({ msg: 'No existe la entidad' })
        }

        res.json(employee);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
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

exports.updateEmployee = async (req, res) => {

    try {
        const { _entityId, name, description } = req.body;
        let employee = await Employee.findById(req.params.id);

        if (!employee) {
            res.status(404).json({ msg: 'No existe el Employee' })
        }

        employee.name = name;
        employee.description = description;

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
            res.status(404).json({ msg: 'No existe el Employee' })
        }

        await employee.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Entidad eliminada con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}