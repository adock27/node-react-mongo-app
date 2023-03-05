import React from 'react'
import axios from 'axios';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


// boostrap 
import Table from 'react-bootstrap/Table';


const EmployeesTable = ({entityId}) => {


    const [employees, setEmployees] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        const fetchAllEmployees = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/employees/entity/${entityId}`);
                setEmployees(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllEmployees();
    }, []);

    return (
        <div>
            <Table striped borderless hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {(employees.loading) ? (
                        <tr><td>cargando...</td></tr>
                    ) : (employees.map((employee, key) => (
                        <tr>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>
                                <Link to={`${employee._id}`}>ver</Link>
                            </td>
                        </tr>
                    )))}

                </tbody>
            </Table>




        </div>
    )
}

export default EmployeesTable