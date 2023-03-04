import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const EmployeAddModalForm = ({entityId}) => {


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
            await axios.put(`http://localhost:4000/api/entities/${uid}`, employees);
            setShow(false);
            // navigate("/entidades");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };



    const deleteEmployee = async (id) => {
        try {
            await axios.delete("http://localhost:4000/api/entities/" + id);
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
                    <Modal.Title>Editar Entidad</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla dicta amet aliquam corporis tenetur facere, doloribus quaerat laborum. Excepturi blanditiis magni, ad ipsam eos aut consequatur dolorem saepe quisquam.</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => deleteEmployee(employees._id)}>
                        Eliminar
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