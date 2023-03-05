import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import EmployeAddModalForm from '../employees/EmployeAddModalForm';
import EmployeesTable from '../employees/EmployeesTable';




export const Entity = () => {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [entity, setEntity] = useState({
        name: "",
        description: "",
    })



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
        setEntity((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:4000/api/entities/${uid}`, entity);
            setShow(false);
            // navigate("/entidades");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };


    const deleteEntity = async (id) => {
        try {
            await axios.delete("http://localhost:4000/api/entities/" + id);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        const fecthEntityById = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/entities/${uid}`);
                setEntity(res.data)
            } catch (error) {
                console.log(error);
            }
        }

        fecthEntityById()
    }, [])


    return (
        <div className='container py-5 my-5'>

            <Row>
                <Col md={3}>
                    <div className='p-3'>
                        <div className='d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom'>
                            <h1 className='h6'>Datos de entidad</h1>
                            <Button className='border-0' variant="outline-primary" onClick={handleShow}>
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                        </div>
                        <h5>{entity.name}</h5>
                        <p className='small'>{entity.description}</p>

                    </div>

                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Entidad</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <form >
                                <div className="form-group">
                                    <input
                                        className='form-control border-0 bg-light mb-3'
                                        type="text"
                                        placeholder="entity title"
                                        name="name"
                                        onChange={handleChange}
                                        value={entity.name}
                                    />


                                    <textarea
                                        className='form-control mb-3'
                                        rows={5}
                                        type="text"
                                        placeholder="Book desc"
                                        name="description"
                                        onChange={handleChange}
                                        value={entity.description}
                                    />
                                </div>

                            </form>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={() => deleteEntity(entity._id)}>
                                Eliminar
                            </Button>
                            <Button variant="primary" onClick={handleClick}>
                                Guardar cambios
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Col>

                <Col className='p-3'>
                    <div className='d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom'>
                        <h2 className='h6'>Empleados</h2>

                        {uid ? (
                            <EmployeAddModalForm entityId={uid} ></EmployeAddModalForm>
                        ) : (
                            <p>Loading...</p>
                        )}

                    </div>

                    <EmployeesTable entityId={uid}></EmployeesTable>
                </Col>


            </Row>




        </div>
    )
}
