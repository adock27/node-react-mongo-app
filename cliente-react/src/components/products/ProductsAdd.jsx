import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import {
    Link,
} from "react-router-dom";

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ProductsApp = () => {

    const [product, setProduct] = useState({
        nombre: "",
        categoria: "",
        ubicacion: "",
        precio: 0,
    })


    const navigate = useNavigate()


    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/api/productos", product)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }



    // console.log(Product)

    return (
        <div className='container py-5 my-5'>


            <Container>
                <h1>Products</h1>
                <Row>

                    <Col md={6} lg={4} xl={3}>
                       
                        <h6>{product.nombre}</h6>
                        <p className='small'>{product.categoria}</p>
                        <p className='small'>{product.ubicacion}</p>
                        <span>${product.precio}</span>
                    </Col>


                    <Col>

                        <form>
                            <div className="form-group">
                                <input
                                    className='form-control mb-3'
                                    type="text"
                                    placeholder="product title"
                                    name="nombre"
                                    onChange={handleChange}
                                    value={product.nombre}
                                />

                                <input
                                    className='form-control mb-3'
                                    type="text"
                                    placeholder="product price"
                                    name="categoria"
                                    onChange={handleChange}
                                    value={product.categoria}
                                />
                                <input
                                    className='form-control mb-3'
                                    type="text"
                                    placeholder="product price"
                                    name="ubicacion"
                                    onChange={handleChange}
                                    value={product.ubicacion}
                                />
                                <input
                                    className='form-control mb-3'
                                    type="number"
                                    placeholder="product price"
                                    name="precio"
                                    onChange={handleChange}
                                    value={product.precio}
                                />


                                <Link to="/"><button className='btn btn-outline-danger me-2'> Back</button></Link>
                                <button className='btn btn-success' onClick={handleClick}>Add</button>
                            </div>
                        </form>
                    </Col>


                </Row>
            </Container>





        </div>
    )
}
