import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// boostrap 
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';



import {
    Link,
} from "react-router-dom";

const EntitiesPage = () => {

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



    return (
        <div>
            <Container>
                <Link to='/add'>
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
                                    <Link to={`/${entity._id}`}>ver</Link>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </Table>



            </Container>



        </div>
    )
}

export default EntitiesPage