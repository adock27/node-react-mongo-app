import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


import Hero from '../../pages/Hero';

import {
    Link,
} from "react-router-dom";

const Entities = () => {

    const [Entities, setEntities] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        const fetchAllEntities = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/entities");
                setEntities(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllEntities();
    }, []);




    // const deleteBook = async (id) => {
    //     try {
    //         await axios.delete("http://localhost:8800/Entities/" + id);
    //         window.location.reload()
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <div>
            <Container>

                <Link to='/Entities-add'>
                    <button className='btn btn-primary '>
                        Add new product
                    </button>
                </Link>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {(Entities.loading) ? (
                            <p>Loading...</p>
                        ) : (Entities.map((entity, key) => (
                            <tr>
                                <td>{entity.name}</td>
                                <td>{entity.description}</td>
                                <td>
                                    <Link to={`/entidades/${entity._id}`}>ver</Link>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </Table>



            </Container>



        </div>
    )
}

export default Entities