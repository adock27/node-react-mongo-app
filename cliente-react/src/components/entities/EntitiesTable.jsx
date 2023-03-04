import React from 'react'
import axios from 'axios';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


// boostrap 
import Table from 'react-bootstrap/Table';


const EntitiesTable = ({entityId}) => {



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


        </div>
    )
}

export default EntitiesTable