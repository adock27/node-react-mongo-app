import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../../pages/Hero';

import {
    Link,
} from "react-router-dom";

const Products = () => {

    const [Products, setProducts] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/productos");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);




    // const deleteBook = async (id) => {
    //     try {
    //         await axios.delete("http://localhost:8800/Products/" + id);
    //         window.location.reload()
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <div>
            <Container>

                <Link to='/products-add'>
                    <button className='btn btn-primary '>
                        Add new product
                    </button>
                </Link>



                <Row className='p-4 pb-0 pe-lg-0 pt-lg-5'>

                    {(Products.loading) ? (
                        <p>Loading...</p>
                    ) : (Products.map((product) => (
                        <ul class="list-group border-bottom mb-3">
                            <li class="list-group-item">_id: {product._id}</li>
                            <li class="list-group-item">nombre: {product.nombre}</li>
                            <li class="list-group-item">categoria: {product.categoria}</li>
                            <li class="list-group-item">ubicacion: {product.ubicacion}</li>
                            <li class="list-group-item">fechaCreacion: {product.fechaCreacion}</li>
                            <li class="list-group-item">
                                <Link
                                    to={`/products-update/${product._id}`}
                                    style={{ color: "inherit", textDecoration: "none" }}
                                >Editar</Link>
                            </li>
                        </ul>
                    )))}
                </Row>
            </Container>



        </div>
    )
}

export default Products