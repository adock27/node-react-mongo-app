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


export const EntityAdd = () => {

  const [entities, setEntities] = useState({
    name: "",
    description: ""
  })


  const navigate = useNavigate()


  const handleChange = (e) => {
    setEntities((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/entities", entities)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='container py-5 my-5'>


      <Container>
        <h1>Agregar entidad</h1>
        <Row>

          <Col md={6} lg={4} xl={3}>
            <img className='img-fluid rounded-3' src={entities.cover} alt="" />
            <h6>{entities.name}</h6>
            <p className='small'>{entities.description}</p>
          </Col>


          <Col>

            <form>
              <div className="form-group">
                <input
                  className='form-control mb-3'
                  type="text"
                  placeholder="entities title"
                  name="name"
                  onChange={handleChange}
                  value={entities.name}
                />
              </div>



              <textarea
                className='form-control mb-3'
                rows={5}
                type="text"
                placeholder="entities desc"
                name="description"
                onChange={handleChange}
                value={entities.description}
              />

            </form>


            <Link to="/"><button className='btn btn-outline-danger me-2'> Regresar </button></Link>
            <button className='btn btn-success' onClick={handleClick}> Argregar </button>
          </Col>


        </Row>
      </Container>





    </div>
  )
}


export default EntityAdd
