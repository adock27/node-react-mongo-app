import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ProductsUpdate = () => {


  // state de mi objeto 
  const [book, setBook] = useState({
    name: "",
    description: "",
    price: "",
    cover: ""
  })


  const [product, setProduct] = useState({
    nombre: "",
    categoria: "",
    ubicacion: "",
    precio: 0,
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
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/productos/${uid}`, product);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


  const deleteProduct = async (id) => {
    try {
      await axios.delete("http://localhost:4000/api/productos/" + id);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {

    const fecthProductById = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/productos/${uid}`);
        setProduct(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    fecthProductById()
  }, [])


  return (
    <div className='container py-5 my-5'>

      <Row>
        <h1>Edit Product</h1>
        <Col md={3}>
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



            </div>

          </form>



          <Link to="/"><button className='btn rounded-pill btn-secondary me-2'> Back</button></Link>
          <button className="btn rounded-pill btn-outline-danger  me-2" onClick={() => deleteProduct(product._id)}>Delete</button>
          <button className='btn rounded-pill btn-success' onClick={handleClick}>Update</button>
          {error && "Something went wrong!"}
        </Col>
      </Row>




    </div>
  )
}
