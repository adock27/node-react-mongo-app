import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

// boostrap 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EmployeAddModalForm = ({ entityId }) => {


    const [employees, setEmployees] = useState({
        _entityId: entityId,
        name: "",
        position: "",
    })


    // control del modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // state de mi error 
    const [error, setError] = useState(false)

    // control de la navegacion 
    const navigate = useNavigate()

    // para obtener el id del param url 
    const location = useLocation()

    // obtengo el param id 
    const uid = location.pathname.split("/")[2];

    //  obtiene los datos del formulario 
    const handleChange = (e) => {
        setEmployees((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // cargar la data del la api 
    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/api/employees", employees)
            setShow(false);
            window.location.reload(false);
            // navigate("/entidades");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };



    const deleteEmployee = async (id) => {
        try {
            await axios.delete("http://localhost:4000/api/employees/" + id);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>

            <Button className='border-0 px-4' variant="primary" onClick={handleShow}>
                Agregar empleado<i class="ms-2 bi bi-person-add"></i>
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar empleado</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <form >
                        <div className="form-group">
                            <input
                                className='form-control border-0 bg-light mb-3'
                                type="text"
                                placeholder="employees title"
                                name="name"
                                onChange={handleChange}
                                value={employees.name}
                            />
                            <input
                                className='form-control border-0 bg-light mb-3'
                                type="text"
                                placeholder="entity title"
                                name="position"
                                onChange={handleChange}
                                value={employees.position}
                            />


                        </div>

                    </form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                   
                    <Button variant="primary" onClick={handleClick}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EmployeAddModalForm