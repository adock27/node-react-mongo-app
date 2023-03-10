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
            <Container className='bg-white p-3'>
            <h1 className="h6 mb-3">Tabla de entidades</h1>
                <Table striped hover className='table-responsive'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className='d-none d-md-block'>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {(Entities.loading) ? (
                            <tr><td>cargando...</td></tr>
                        ) : (Entities.map((entity, key) => (
                            <tr key={key}>
                                <td>{entity.name}</td>
                                <td className='d-none d-md-block'>{entity.description}</td>
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